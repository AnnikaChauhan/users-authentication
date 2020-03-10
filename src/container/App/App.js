import React, {Component} from 'react';
import './App.scss';
import NavBar from '../../component/NavBar/NavBar';
import Routes from '../../routes/Routes';

class App extends Component {
  render(){
    return(
      <main>
        <NavBar />
        <Routes />
      </main>
    );
  }
}

export default App;
