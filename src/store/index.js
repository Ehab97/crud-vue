import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    users: [{
        id: 1,
        username: "Ehab97",
        firstName: "Ehab",
        lastName: "Reda",
        email: "ehabrea04@gmail.com",
        password: "@DA154988",
        department: "deveoplemnt",
        phone: '01028317493'
      },
      {
        id: 2,
        username: "Ehab98",
        firstName: "Ehabs",
        lastName: "Redad",
        email: "ehabrea0d4@gmail.com",
        password: "@DA154d988",
        department: "deveodplemnt",
        phone: '01028317498'
      }
    ],
    counter: 0
    
  },
  mutations: {
    deleteUser(state, id) {
      state.users = state.users.filter(user => user.id !== id);
      console.log(state.users, id);
    }
  
  },
  actions: {},
  modules: {}
})