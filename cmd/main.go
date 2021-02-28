package main

import (
	"context"
	"github.com/go-chi/chi"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/lozovoya/agohomework5/cmd/app"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"net"
	"net/http"
	"os"
)

const defaultPort = "9999"
const defaultHost = "0.0.0.0"
const clientsDb = "postgres://app:pass@localhost:5432/db"
const suggestionDb = "mongodb://app:pass@localhost:27017/" + defaultDb
const defaultDb = "db"

func main() {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = defaultPort
	}

	host, ok := os.LookupEnv("HOST")
	if !ok {
		host = defaultHost
	}

	if err := execute(net.JoinHostPort(host, port), clientsDb, suggestionDb, defaultDb); err != nil {
		log.Println(err)
		os.Exit(1)
	}
}

func execute(addr string, cliDb string, sugDb string, db string) error {

	mux := chi.NewMux()

	ctxCliDb := context.Background()
	poolCli, err := pgxpool.Connect(ctxCliDb, cliDb)
	if err != nil {
		return err
	}
	defer poolCli.Close()

	ctxSugDb := context.Background()
	clientSug, err := mongo.Connect(ctxSugDb, options.Client().ApplyURI(sugDb))
	if err != nil {
		return err
	}

	database := clientSug.Database(db)

	application := app.NewServer(mux, poolCli, ctxCliDb, database, ctxSugDb)
	err = application.Init()
	if err != nil {
		return err
	}

	server := &http.Server{
		Addr:    addr,
		Handler: mux,
	}

	return server.ListenAndServe()
}
