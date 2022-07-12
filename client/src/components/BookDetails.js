import React from "react";
import { useQuery } from "react-apollo";
import { Box, SubText } from "../static/styles";
import { getBookDetailsQuery } from "../gql/queries";

function BookDetails(props) {
  const { bookId } = props;
  const { loading, error, data } = useQuery(getBookDetailsQuery, {
    variables: {bookId},
  });
  console.log(bookId, data);
  // const bookDetails = () => {
  //   data ? (
  //     <ul>
  //       <li>
  //         <h3>{data.name}</h3>
  //       </li>
  //       <li>
  //         <h3>{data.genre}</h3>
  //       </li>
  //       <li>
  //         <h3>{data.author.name}</h3>
  //       </li>
  //       <li>
  //         <h3>All books by this author:</h3>
  //         <ul>
  //           {data.author.books.map((book) => (
  //             <li key={book.id}>{book.name}</li>
  //           ))}
  //         </ul>
  //       </li>
  //     </ul>
  //   ) : (
  //     <SubText>Select a book to see more details</SubText>
  //   );
  // };
  // return <Box>{bookDetails()}</Box>;
}

export default BookDetails;
