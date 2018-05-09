const collections = {
  discounts: [
  {
    name: "华润万家",
    id: 1,
    type: "0",
    data: [{
      image: '/images/swipers/milk.png',
      title: '牛奶',
      price: '第二件半价',
      during: '5月10~5月20',
      collection: false,
      url: ""
    },{
      image: '/images/swipers/milk.png',
      title: '牛奶',
      price: '.立享五折',
      during: '5月10~5月20',
      collection: false,
      url: ""
    }]
  },{
    name: "苏果",
    id: 1,
    type: "0",
    data: [{
      image: '/images/swipers/milk.png',
      title: '牛奶',
      price: '第二件半价',
      during: '5月10~5月20',
      collection: false,
      url: ""
    },{
      image: '/images/swipers/milk.png',
      title: '牛奶',
      price: '.立享五折',
      during: '5月10~5月20',
      collection: false,
      url: ""
    }]
  },{
    name: "KAM服装",
    id: 0,
    type: 1,
    data: [{
      image: '/images/swipers/milk.png',
      title: '冬装打折',
      price: '三件五折',
      during: '5月10~5月20',
      collection: false,
      url: ""
    },{
      image: '/images/swipers/milk.png',
      title: '全场服装',
      price: '.满1000返500',
      during: '5月10~5月20',
      collection: false,
      url: ""
    }]
  }],
  shops: [
    {
      image: '/images/swipers/milk.png',
      name: '华润',
      during: '5月10~5月20',
      collection: false,
      url: ""
    },{
      image: '/images/swipers/milk.png',
      name: 'KAM服装',
      address: '苏果路198号',
      collection: true,
      url: ""
    },
  ]
}

export {
  collections
}
//type: 0 超市，1 服装， 2 水果，3 生鲜
