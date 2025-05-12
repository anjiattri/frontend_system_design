const data = {
  authors: [
    {
      id: 1,
      name: "Anjali",
      bookIds: ["101", "102"],
    },
    {
      id: 2,
      name: "Author 2",
      bookIds: ["103"],
    },
  ],
  books: [
    { id: "101", title: "Book 1", publishedYear: "2021", authorId: 1 },
    { id: "102", title: "Book 2", publishedYear: "2032", authorId: 1 },
    { id: "103", title: "Book 3", publishedYear: "2122", authorId: 2 },
  ],
};
export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find(
        (authorDetail) => authorDetail.id === parent.authorId
      );
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter(
        (bookDetail) => bookDetail.authorId === parent.id
      );
    },
  },
  Query: {
    authors: (parent, args, context, info) => {
      //db calls
      return data.authors;
    },
    books: (parent, args, context, info) => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      return {
        id: "104",
        title: args.title,
        publishedYear: args.publishedYear,
        authorId: args.authorId,
      };
    },
  },
};
