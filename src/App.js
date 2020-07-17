import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout"
import Output from './components/Output';
import Header from './components/Header';


class App extends Component {

  state = {
    result: ''
  };
  
  onClickButton = keys => {

    if(keys === '=')
      this.calculateResult();
    else if(keys === 'C'){
      this.setState({
        result: ''
      });
    }
    else if(keys === 'CE'){
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    }
    else{
      if(this.state.result === 'Error') {
        this.setState({
          result: keys
        })
      }
      else{
        this.setState({
          result: this.state.result + keys
        });
      }
    }
  };
  
  calculateResult = () => {
    try{
      this.setState({
        result: eval(this.state.result)
      })
    } catch(error) {
      this.setState({
        result: 'Error'
      })
    }
  }
  
  render() {
    return (  
      <div className="App">
        <Header />
        <Output result = {this.state.result} />
        <Layout onClickButton= {this.onClickButton}/>
      </div>
    );
  }
}

export default App;
