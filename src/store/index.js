import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

Vue.use(Vuex)

const db = new Localbase('db')
db.config.debug = false

const state = {
  userDetails: {},
  states:[
    "Abia",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",


    ]
}

const mutations = {
  SET_USER_DETAILS (state, userDetails) {
    state.userDetails = userDetails
  },
  GET_USER_DETAILS (state) {
    db.collection('userData').get()
    .then((data)=>state.userDetails = data)
  },
  DELETE_USER_DETAILS (state, id) {
    db.collection('userData').doc(id).delete()
  
  },
  UPDATE_USER_DETAILS (state, id){
    db.collection('userData').doc(id).update(state.userDetails)
  }
}

const actions = {
  setUserDetails ({ commit }, userDetails) {
    commit('SET_USER_DETAILS', userDetails)
    db.collection('userData').add(userDetails)
  },
  getUserDetails ({ commit }) {
    commit('GET_USER_DETAILS')
  },
  deleteUserDetails ({ commit }, id) {
    commit('DELETE_USER_DETAILS', id)
  },
  updateUserDetails ({ commit }, id) {
    commit('UPDATE_USER_DETAILS', id)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
