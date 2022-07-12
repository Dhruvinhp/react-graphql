import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Books from "./components/Books";
import Authors from "./components/Authors";
import {Routes, Route} from "react-router-dom";
import Main from "./components/Main";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <Main/>
    <Routes>
      <Route path="/books" element={<Books/>} />
      <Route path="/authors" element={<Authors/>} />
    </Routes>
  </ApolloProvider>
);

export default App;
