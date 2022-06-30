import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Launches from "./components/Launches";
import Ships from "./components/Ships";
import {Routes, Route} from "react-router-dom";
import Missions from "./components/Missions";
import Main from "./components/Main";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
});

const App = () => (
  <ApolloProvider client={client}>
    <Main/>
    <Routes>
      <Route path="/launches" element={<Launches/>} />
      <Route path="/ships" element={<Ships/>} />
      <Route path="/missions" element={<Missions/>} />
    </Routes>
  </ApolloProvider>
);

export default App;
