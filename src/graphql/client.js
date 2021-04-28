import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core'
import Cookies from 'js-cookie'
import { createLink } from 'apollo-absinthe-upload-link'

const httpLink = createLink({ uri: 'http://localhost:4000/api/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = Cookies.get('token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })

  return forward(operation)
})
const link = authMiddleware.concat(httpLink)

const cache = new InMemoryCache({})

export const apolloClient = new ApolloClient({
  cache,
  link: link,
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
})
