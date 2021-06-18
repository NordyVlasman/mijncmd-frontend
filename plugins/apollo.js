import { createLink } from 'apollo-absinthe-upload-link'
import { ApolloLink, InMemoryCache } from '@apollo/client'

export default ({ $config }, ctx) => {
  const httpLink = createLink({
    uri:
      $config.baseURL + '/graphql' ||
      'https://api.nordyvlasman.nl' + '/graphql',
  })
  const cache = new InMemoryCache()

  return {
    link: ApolloLink.from([httpLink]),
    cache,
    defaultHttpLink: false,
  }
}
