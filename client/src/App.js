import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Launches from './Components/Launches'
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img className='p-3' src="/images/logo.webp" alt="spacex logo" style={{width:300, display: 'block', margin: 'auto'}} />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
