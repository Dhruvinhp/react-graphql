import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { Box, SubText } from "../static/styles";
import { getBooksQuery } from "../gql/queries";
import AddBook from "./AddBook";
import BookDetails from "./BookDetails";

function Books() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      {loading && (
        <Box>
          <SubText>Loading...</SubText>
        </Box>
      )}
      {error && (
        <Box>
          <SubText>Error :( {error}</SubText>
        </Box>
      )}
      {data && (
        <Box>
          <SubText>Books</SubText>
          <ul>
            {data.books.map((book) => (
              <li
                key={book.id}
                onClick={(e) => {
                  setSelectedBook(book.id);
                }}
              >
                <h3>{book.name}</h3>
              </li>
            ))}
          </ul>
        </Box>
      )}
      <BookDetails bookId={selectedBook} />
      <AddBook />
    </>
  );
}

export default Books;
