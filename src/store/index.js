import { createLogger, createStore } from 'vuex'
import gql from 'graphql-tag'
import { apolloClient } from '../graphql/client'

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token,
      user {
        id,
        email
      }
    }
  }
`

const registerMutation = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      email,
      id
    }
  }
`

const currentUserQuery = gql`
  query getUser {
    getUser {
        email
        id
    }
  }
`

export default createStore({
  state: {
    loginResponse: '',
    registerResponse: '',
    currentUser: '',
    token: localStorage.getItem('authentication_token') || ''
  },
  mutations: {
    loginUser (state, loginResponse) {
      state.loginResponse = loginResponse
    },
    registerUser (state, registerResponse) {
      state.registerResponse = registerResponse
    },
    currentUser (state, currentUser) {
      state.currentUser = currentUser
    }
  },
  actions: {
    async loginUser ({ commit }, { email, password }) {
      apolloClient.mutate({
        mutation: loginMutation,
        variables: {
          email: email,
          password: password
        }
      }).then((data) => {
        const payload = data.data
        commit('loginUser', payload.login)
        if (payload.login.token !== null) {
          localStorage.setItem('authentication_token', payload.login.token)
        }
      })
    },
    async registerUser ({ commit }, { email, password }) {
      apolloClient.mutate({
        mutation: registerMutation,
        variables: {
          email: email,
          password: password
        }
      }).then((data) => {
        commit('registerUser', data)
      })
    },
    async getUser ({ commit }) {
      apolloClient.query({ query: currentUserQuery }).then((data) => {
        commit('currentUser', data.data.getUser)
      })
    }
  },
  modules: {
  },
  plugins: [
    createLogger()
  ]
})
