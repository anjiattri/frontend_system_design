export const typeDefs = `#graphql
    type Author{
        id:ID!
        name:String!
        books:[Book]
    }
    type Book{
        id:ID!
        title:String!
        publishedYear:String
        author:Author
    }
    type Query{
        authors:[Author]
        books:[Book]
    }
    type Mutation{
        addBook(title:String!,publishedYear:String!,authorId:ID!):Book!
    }

`;
