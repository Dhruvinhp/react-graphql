import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import BookList from "./components/BookList";
import AuthorList from "./components/AuthorList";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <div style={{display:'flex'}}>
      <div>
        <Main />
        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/authors" element={<AuthorList />} />
        </Routes>
      </div>
      <div>
        <AddBook />
        <AddAuthor/>
      </div>
    </div>
  </ApolloProvider>
);

export default App;
