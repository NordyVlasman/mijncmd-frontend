import gql from "graphql-tag";

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token,
      user {
        id,
        email
      }
    }
  }
`

export const registerMutation = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      email,
      id
    }
  }
`

export const currentUserQuery = gql`
  query getUser {
    getUser {
      email
      id
    }
  }
`
