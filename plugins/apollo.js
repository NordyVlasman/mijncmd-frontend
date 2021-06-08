import { createLink } from 'apollo-absinthe-upload-link'
import { ApolloLink, InMemoryCache } from '@apollo/client'

export default (ctx) => {
  const httpLink = createLink({
    uri: process.env.BASE_URL || 'https://api.nordyvlasman.nl' + '/graphql',
  })
  const cache = new InMemoryCache()

  return {
    link: ApolloLink.from([httpLink]),
    cache,
    defaultHttpLink: false,
  }
}
