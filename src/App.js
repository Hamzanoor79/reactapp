import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Component } from 'react';
import News from './components/News';

export default class App extends Component{
  render(){
    return(
    <div className="App">
      <Navbar/>
      <News/>
    </div>
)}}

