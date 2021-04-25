import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client/core'
import Cookies from 'js-cookie'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/api/graphql'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = Cookies.get('token')
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
