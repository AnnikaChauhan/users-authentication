import React, {Component} from 'react';
import './App.scss';
import NavBar from '../../component/NavBar/NavBar';
import Routes from '../../routes/Routes';

class App extends Component {
  state = {
    publicSelected: true
  }

  toggleMenu = () => {
    this.setState({
      selectedNav: !this.state.selectedNav
    })
  }

  render(){
    return(
      <main>
        <NavBar publicSelected={this.state.publicSelected} toggleMenu={this.toggleMenu} />
        <Routes />
      </main>
    );
  }
}

export default App;
