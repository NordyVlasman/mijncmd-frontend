import { ApolloClient, ApolloLink, createHttpLink, HttpLink, InMemoryCache } from '@apollo/client/core'

// const createLink = () => {
//   return createHttpLink({
//     uri: 'http://localhost:4000/api/graphql'
//   })
// }

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/api/graphql'
})

// export const setAuthToken = (token) => {
//   // eslint-disable-next-line no-unused-vars
//   const options = {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : null
//     }
//   }
//   apolloClient.setLink(createHttpLink(options))
// }

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authentication_token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })

  return forward(operation)
})
const cache = new InMemoryCache({})

export const apolloClient = new ApolloClient({
  cache,
  link: authMiddleware.concat(httpLink),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
})
