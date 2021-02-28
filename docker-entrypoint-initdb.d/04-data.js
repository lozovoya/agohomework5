db.users.insertOne({
        userid: 1,
        name: 'user1',
        account: '734535t743',
        suggestions: [
            {sugid: 1, icon: 'icon2', title: 'title1', link: 'http://link2'},
            {sugid: 2, icon: 'icon3', title: 'title3', link: 'http://link3'},
            {sugid: 3, icon: 'icon4', title: 'title4', link: 'http://link4'},
            {sugid: 4, icon: 'icon5', title: 'title5', link: 'http://link5'},
        ],
        operations: [
            {oppid: 9, amount: 9999, description: 'bank'},
            {oppid: 10, amount: 9888, description: 'shop'},
            {oppid: 11, amount: 777, description: 'museum'},
            {oppid: 12, amount: 5555, description: 'fuel'},
        ]
    }
);
db.users.insertOne({
        userid: 2,
        name: 'user2',
        account: '645943587935',
        suggestions: [
            {sugid: 5, icon: 'icon2', title: 'title1', link: 'http://link2'},
            {sugid: 6, icon: 'icon3', title: 'title3', link: 'http://link3'},
            {sugid: 7, icon: 'icon4', title: 'title4', link: 'http://link4'},
            {sugid: 8, icon: 'icon5', title: 'title5', link: 'http://link5'},
        ],
        operations: [
            {oppid: 1, amount: 12345, description: 'bank'},
            {oppid: 2, amount: 1000, description: 'shop'},
            {oppid: 3, amount: 100, description: 'museum'},
            {oppid: 4, amount: 10000, description: 'fuel'},
        ]
    }
);
db.users.insertOne({
        userid: 3,
        name: 'user3',
        account: '38275945',
        suggestions: [
            {sugid: 10, icon: 'icon2', title: 'title1', link: 'http://link2'},
            {sugid: 21, icon: 'icon3', title: 'title3', link: 'http://link3'},
            {sugid: 32, icon: 'icon4', title: 'title4', link: 'http://link4'},
            {sugid: 43, icon: 'icon5', title: 'title5', link: 'http://link5'},
        ],
        operations: [
            {oppid: 5, amount: 2222, description: 'bank'},
            {oppid: 6, amount: 3333, description: 'shop'},
            {oppid: 7, amount: 4444, description: 'museum'},
            {oppid: 8, amount: 5555, description: 'fuel'},
        ]
    }
);