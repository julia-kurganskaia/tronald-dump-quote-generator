exports.seed = knex =>
  knex('trump').del()
    .then(() =>
      knex('trump').insert([
        {id: 1, image: '/trump1.jpg'},
        {id: 2, image: '/trump2.jpg'},
        {id: 3, image: '/trump3.jpg'},
        {id: 4, image: '/trump4.jpg'},
        {id: 5, image: '/trump5.jpg'},
        {id: 6, image: '/trump6.jpg'},
        {id: 7, image: '/trump7.jpg'},
        {id: 8, image: '/trump8.jpg'},
        {id: 9, image: '/trump9.jpg'},
        {id: 10, image: '/trump10.jpg'},
        {id: 11, image: '/trump11.jpg'},
        {id: 12, image: '/trump12.jpg'},
        {id: 13, image: '/trump13.jpg'},
        {id: 14, image: '/trump14.jpg'}
      ]))

