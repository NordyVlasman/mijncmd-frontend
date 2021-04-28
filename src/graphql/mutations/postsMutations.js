import gql from 'graphql-tag'

export const createPostMutation = gql`
mutation createPost ($body: String!, $description: String!, $slug: String!, $title: String!) {
  createPost (body: $body, description: $description, slug: $slug, title: $title) {
      errors {
          attribute
          message
      }
      post {
          author {
              avatar_url
              dribbbleUrl
              email
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
      success
  }
}
`

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
