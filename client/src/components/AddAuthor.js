import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { AddBox, SubText, Title, Input, Button} from "../static/styles";
import { getAuthorsQuery } from "../gql/queries";
import { addAuthorMutation } from "../gql/mutations";

function AddAuthor() {
  const [name, setName] = useState("");
  const [sAge, setAge] = useState("");

  const [mutateFunction, { data, loading, error }] =
    useMutation(addAuthorMutation);

  const submitForm = async (e) => {
    e.preventDefault();
    const age = +sAge;
    mutateFunction({
      variables: { name, age },
      refetchQueries: [{ query: getAuthorsQuery }],
    });
    alert("Author added");
  };

  return (
    <AddBox>
      <SubText>Add Author</SubText>
      <form id="add-book" onSubmit={submitForm}>
        <div className="field">
          <Title>Author name:</Title>
          <Input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <Title>age:</Title>
          <Input
            type="text"
            name="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <Button>+</Button>
      </form>
    </AddBox>
  );
}

export default AddAuthor;
