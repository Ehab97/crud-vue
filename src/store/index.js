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
    addUser(state, user) {
      state.users.push(user);
    },
    deleteUser(state, id) {
      state.users = state.users.filter(user => user.id !== id);
    },
    updateUser(state,payload) {
      state.users.find(user => user.id === payload.id)
       //Find index of specific object using findIndex method.    
      let objIndex = state.users.findIndex((obj => obj.id == payload.id));
      state.users[objIndex]=payload.user;
    },

  },
  getters: {
    getUsers(state) {
      return state.users
    },
    getUser: (state) => (id) => {
      {
        return state.users.find(user => user.id === id)
      }
    }
  },
  actions: {},
  modules: {}
})