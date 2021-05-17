import { createLink } from 'apollo-absinthe-upload-link'
import { ApolloLink, InMemoryCache } from '@apollo/client'

export default (ctx) => {
  const httpLink = createLink({ uri: 'http://localhost:4000/api/graphql' })
  const cache = new InMemoryCache()

  return {
    link: ApolloLink.from([httpLink]),
    cache,
    defaultHttpLink: false,
  }
}
