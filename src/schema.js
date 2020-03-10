import { gql } from 'apollo-server';

const typeDefs = gql `

    type User {
        _id: ID
        firstname: String
        lastname: String
        age: Int
        profession: String
        email: String
        password: String
    }

    type Query {
        getUsers: [User],
        getUserById(_id: ID!): User
    }

    type Mutation {
        createUser(user: UserInput!): User,
        updateUser(_id: ID!, user: UserInput!): User,
        deleteUser(_id: ID): User   
    }

    input UserInput {
        firstname: String!
        lastname: String
        age: Int!
        profession: String!
        email: String!
        password: String!
    }
`;

export default typeDefs;