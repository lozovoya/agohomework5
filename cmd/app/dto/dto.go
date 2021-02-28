package dto

type PaymentDTO struct {
	Id          int    `json:"id"`
	Amount      int    `json:"amount"`
	Description string `json:"description"`
}

type SuggestionDTO struct {
	UserId int    `json:"userid"`
	Sugid  int    `json:"sugid"`
	Icon   string `json:"icon"`
	Title  string `json:"title"`
	Link   string `json:"link"`
}
