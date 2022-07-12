import React from "react";
import { useQuery } from "react-apollo";
import { Box, SubText } from "../static/styles";
import { getBookDetailsQuery } from "../gql/queries";

function BookDetails() {
  const { loading, error, data } = useQuery(getBookDetailsQuery);
  if (loading)
    return (
      <Box>
        <SubText>Loading...</SubText>
      </Box>
    );
  if (error)
    return (
      <Box>
        <SubText>Error :( {error}</SubText>
      </Box>
    );

  return (
    <Box>
      <SubText>Book Details</SubText>
    </Box>
  );
}

export default BookDetails;
