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
      // Object.assign(state.users.find(user => user.id === payload.id),payload.user);
      // console.log(Object.assign(payload.user,state.users.find(user => user.id === payload.id)));
  
      //Find index of specific object using findIndex method.    
      console.log(payload.user);
      let objIndex = state.users.findIndex((obj => obj.id == payload.id));
      console.log('the index is : ',objIndex,': old object :', state.users[objIndex]);
      state.users[objIndex]=payload.user;
      console.log('the index is : ',objIndex,': new object :', state.users[objIndex]);
      //delete old
      // state.users = state.users.filter(
      //   (user) => user.id != payload.id
      // );
      // state.mutations.deleteUser(state,paylad.id);
      //add new one
      // state.users.push(payload.user);
    },isExist(state,user){
      
    }

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