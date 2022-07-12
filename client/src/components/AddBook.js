import React, { useState } from "react";
import { Query } from "react-apollo";
import { Box, SubText } from "../static/styles";
import { getAuthorsQuery } from "../gql/queries";

function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  return (
    <Query query={getAuthorsQuery}>
      {({ loading, error, data }) => {
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

        const displayAuthors = () => {
          if (data.loading) {
            return <option>Loading authors</option>;
          } else {
            return data.authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            });
          }
        };

        const submitForm = (e) => {
          e.preventDefault();
          console.log(name, genre, authorId);
        };

        return (
          <Box>
            <SubText>AddBook</SubText>
            <form id="add-book" onSubmit={submitForm}>
              <div className="field">
                <label>Book name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="field">
                <label>Genre:</label>
                <input
                  type="text"
                  name="genre"
                  onChange={(e) => {
                    setGenre(e.target.value);
                  }}
                />
              </div>
              <div className="field">
                <label>Author:</label>
                <select
                  name="author"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setAuthorId(e.target.value);
                  }}
                >
                  <option disabled>Select author</option>
                  {displayAuthors()}
                </select>
              </div>
              <button>+</button>
            </form>
          </Box>
        );
      }}
    </Query>
  );
}

export default AddBook;
