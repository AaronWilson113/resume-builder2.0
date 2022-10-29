const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Skills{
  _id:ID
  description: String
}
type About {
  _id: ID
  description: String
}
type Project {
  _id: ID
  title: String
  link: String
  about: String
 }
 type Education {
    _id:ID
    schoolName:String
    majorSubject:String
    degree: String
    location: String
 }
  type Experience {
    _id: ID
    position: String
    companyName: String
    location: String
    description: String
  }
  
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password:String
    education:[Education]
    workExperience:[Experience]
    personalInfo: [Personal]
    project: [Project]
    skills: [Skills]
    about: [About]
  }
  type Personal {
    name: String
    email: String
    phoneNumber: Int
    city: String
    state: String
  }
 
  type Auth {
    token: ID
    user: User
  }
  type Query {
    user: User  
    experience(_id: ID!): [Experience]
    personal(_id: ID!): [Personal]
    education(_id: ID!):[Education]
    skills(_id: ID!):[Skills]
    project(_id: ID!):[Project]
    about(_id: ID!):[About]
  }
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;