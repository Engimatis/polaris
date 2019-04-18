export const Book = `type Book implements CommonEntity {
                        id: ID!
                        creationDate: String,
                        lastUpdateDate: String,
                        dataVersion: Int!,
                        title: String,
                        author: Author,
                        realityId: Int!
                     }`;
