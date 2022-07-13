import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { AddBox, SubText } from "../static/styles";
import { getAuthorsQuery, getBooksQuery } from "../gql/queries";
import { addBookMutation } from "../gql/mutations";

function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [mutateFunction, { bookData, bookLoading, bookError }] =
    useMutation(addBookMutation);

  const displayAuthors = () => {
    if (loading) {
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

  const submitForm = async (e) => {
    e.preventDefault();
    mutateFunction({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <AddBox>
      <SubText>Add Book</SubText>
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
              setAuthorId(e.target.value);
            }}
          >
            <option disabled>Select author</option>
            {displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    </AddBox>
  );
}

export default AddBook;
