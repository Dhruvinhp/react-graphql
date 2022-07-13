import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { AddBox, SubText } from "../static/styles";
import { getAuthorsQuery } from "../gql/queries";
import { addAuthorMutation } from "../gql/mutations";

function AddAuthor() {
  const [name, setName] = useState("");
  const [sAge, setAge] = useState("");

  const [mutateFunction, { data, loading, error }] =
    useMutation(addAuthorMutation);

  const submitForm = async (e) => {
    e.preventDefault();
    const age = parseInt(sAge);
    mutateFunction({
      variables: { name, age },
      refetchQueries: [{ query: getAuthorsQuery }],
    });
  };

  return (
    <AddBox>
      <SubText>Add Author</SubText>
      <form id="add-book" onSubmit={submitForm}>
        <div className="field">
          <label>Author name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>age:</label>
          <input
            type="text"
            name="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <button>+</button>
      </form>
    </AddBox>
  );
}

export default AddAuthor;
