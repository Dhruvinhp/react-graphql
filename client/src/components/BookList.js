import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { Box, SubText } from "../static/styles";
import { getBooksQuery } from "../gql/queries";
import BookDetails from "./BookDetails";

function BookList() {
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
        <Box style={{height:"500px", overflow:"auto"}}>
          <SubText>Book List</SubText>
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
    </>
  );
}

export default BookList;
