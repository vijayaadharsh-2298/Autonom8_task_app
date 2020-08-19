import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GlobalStore from './redux/globalStore';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';

class App extends Component {

  store = GlobalStore();

  componentDidMount(){
    axios.get("https://549f0059763e.ngrok.io/api/getinfo").then(
      res => res.data.map(d => this.store.dispatch({
        type: 'SET_DATA',
        userdata: d
      }))
    ).catch(err => console.log(err));
  }
  render(){
  return (
    <div className="App">
      <Provider store={this.store}>
        <Dashboard />
      </Provider>
    </div>
  )};
}

export default App;
