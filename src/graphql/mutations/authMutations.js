import gql from 'graphql-tag'

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token,
      user {
        id,
        email,
        avatar_url
      }
    }
  }
`

export const registerMutation = gql`
  mutation register ($avatar: Upload, $dribbbleUrl: String, $email: String!, $githubUrl: String, $name: String!, $password: String!, $websiteUrl: String, $handle: String!) {
    register (avatar: $avatar, dribbbleUrl: $dribbbleUrl, email: $email, githubUrl: $githubUrl, name: $name, password: $password, websiteUrl: $websiteUrl, handle: $handle) {
        avatar_url
        dribbbleUrl
        email
        githubUrl
        id
        name
        websiteUrl
    }
  }
`

export const currentUserQuery = gql`
  query getUser {
    getUser {
      email
      id
      avatar_url
    }
  }
`
