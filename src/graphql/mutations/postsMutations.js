import gql from 'graphql-tag'

export const getAllPostsQuery = gql`
  query getPosts {
    getPosts {
        author {
            dribbbleUrl
            email
            avatar_url
            githubUrl
            id
            name
            websiteUrl
        }
        body
        description
        id
        skills {
            description
            id
            name
            slug
        }
        slug
        title
    }
  }
`
