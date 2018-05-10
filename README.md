user = {
    userName: "",
    id: "",
    password: "",
    info: {
        adress: "",
        money: ""
    },
    data: {
        collection: {
            card: [{
                image: '/images/swipers/milk.png',
                title: '蒙牛牛奶',
                type: '微信支付专享',
                content: '50元代金券',
                during: '5月10~5月20',
                requirement: '满100.01元可用',
                lastTime: 1525687018000,
                url: ""
            }],
            shop: [
                {
                    image: '/images/swipers/milk.png',
                    name: 'KAM服装',
                    collection: true,
                    adress: "仁爱路",
                    url: ""
                }
            ],
            discounts: [
                {
                    image: '/images/swipers/milk.png',
                    title: '牛奶',
                    price: '第二件半价',
                    during: '5月10~5月20',
                    collection: false,
                    url: ""
                }
            ]
        }
    }
}

business = {
    userName: "",
    name: "",
    picture: "",
    id: "",
    coordinate : ["123.22","223.22"],
    password: "",
    info: {
        adress: "",
        money: "",
        type: "",    //超市，服装or
    },
    data: {
        card: [{
            image: '/images/swipers/milk.png',
            title: '蒙牛牛奶',
            type: '微信支付专享',
            content: '50元代金券',
            during: '5月10~5月20',
            requirement: '满100.01元可用',
            lastTime: 1525687018000,
            url: "",
            stock: 100  //库存
        }],
        shop: [
            {
                image: '/images/swipers/milk.png',
                name: 'KAM服装',
                collection: true,
                adress: "仁爱路",
                url: "",
                coordinate : ["123.22","223.22"]
            }
        ],
        discounts: [
            {
                image: '/images/swipers/milk.png',
                title: '牛奶',
                price: '第二件半价',
                during: '5月10~5月20',
                collection: false,
                url: ""
            }
        ]

    }
}

tradingArea = [{
        city: 'suzhou',
        area: {
            name: "沧浪区",
            enName: "canglang",
            hotspot: [
                {
                    name: "南门",
                    coordinate : ["123.22","223.22"]
                },{
                    name: "盘门",
                    coordinate : ["123.22","223.22"]
                }
            ]
        }
    },{
        city: 'changzhou',
        area: {
            name: "龙门区",
            enName: "canglang",
            hotspot: [
                {
                    name: "南门",
                    coordinate : ["123.22","223.22"]
                },{
                    name: "盘门",
                    coordinate : ["123.22","223.22"]
                }
            ]
        }
    }]