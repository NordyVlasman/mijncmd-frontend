import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import * as graphqlMutations from '../../graphql/mutations/authMutations'
import { apolloClient } from '../../graphql/client'
import router from "@/router";

const authModule = {
  namespaced: true,

  state: () => ({
    user: null,
    token: Cookies.get('token')
  }),

  mutations: {
    [types.SAVE_TOKEN] (state, token) {
      state.token = token
      Cookies.set('token', token)
      if (token) {
        router.push({
          name: 'welcome'
        })
      }
    },

    [types.FETCH_USER_SUCCESS] (state, user) {
      state.user = user
    },

    [types.FETCH_USER_FAILURE] (state) {
      state.token = null
      Cookies.remove('token')
    },

    [types.LOGOUT] (state) {
      state.user = null
      state.token = null

      Cookies.remove('token')
    },

    [types.UPDATE_USER] (state, user) {
      state.user = user
    }
  },

  actions: {
    saveToken ({ commit, dispatch }, payload) {
      commit(types.SAVE_TOKEN, payload)
    },

    async loginUser ({ commit, dispatch }, payload) {
      apolloClient.mutate({
        mutation: graphqlMutations.loginMutation,
        variables: {
          email: payload.email,
          password: payload.password
        }
      }).then((data) => {
        commit(types.SAVE_TOKEN, data.data.login.token)
        commit(types.UPDATE_USER, data.data.login.user)
      })
    },

    async registerUser ({ commit, dispatch }, payload) {
      apolloClient.mutate({
        mutation: graphqlMutations.registerMutation,
        variables: {
          email: payload.email,
          password: payload.password,
          name: payload.name,
          avatar: payload.avatar,
          handle: payload.handle
        }
      }).then((data) => {
        const payload = data.data.register
        commit(types.UPDATE_USER, payload.user)
      })
    },

    async fetchUser ({ commit, dispatch }, payload) {
      await apolloClient.query({
        query: graphqlMutations.currentUserQuery
      }).then((data) => {
        const payload = data.data.getUser
        commit(types.UPDATE_USER, payload)
      }).catch(() => {
        commit(types.LOGOUT)
      })
    }
  },

  getters: {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null
  }
}

export default authModule
