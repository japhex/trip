import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLDate } from 'graphql-iso-date'
import { GraphQLJSONObject } from 'graphql-type-json'

const resolveFunctions = {
  Date: GraphQLDate,
  JSONObject: GraphQLJSONObject,
}

const schemaString = `
  scalar Date
  scalar JSONObject
  scalar DATETIME

  type User {
    id: ID!
    username: String!
    gigs: [Gig!]!
  }
  
  type UserWithGigs {
    id: ID!
    username: String!
    gigs: [Gig]
  }
  
  type Artist {
    name: String!
    image: String
    imageS3: String
    genre: String
    subGenre: String
  }
  
  type Venue {
    location: JSONObject
    name: String
    latitude: String
    longitude: String
    city: String
    country: String
  }
  
  type GigDate {
    start: Date
    end: Date
    timestamp: Int
  }
  
  type Festival {
    start_date: String
    end_date: String
  }
  
  type Gig {
    _id: ID
    ticketmasterId: String
    artist: Artist!
    date: GigDate
    info: String
    venue: Venue
    lineup: [Artist]
    festival: Festival
    userId: String
    ratings: [JSONObject]
    attending: Boolean
  }
  
  type Query {
    searchGig(artist: String!, page: Int, date: String): JSONObject
    gigs(past: Boolean): [Gig]
    filterGigs(filters: JSONObject!): [Gig]
  }
  
  type Mutation {
    createGig(id: String!, ticketmasterId: String! artist: JSONObject, info: String, date: JSONObject, venue: JSONObject, lineup: [JSONObject], festival: JSONObject): Gig!
    deleteGig(id: ID!): JSONObject
    rateGig(id: ID!, rating: Int!): Int
  }
`

makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions })

export default schemaString
