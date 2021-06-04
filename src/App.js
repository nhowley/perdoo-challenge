import React from "react";
import ListPage from "./components/ListPage";
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'


const client = new ApolloClient({ uri: 'https://rickandmortyapi.com/graphql' })


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/" component={ListPage} />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
