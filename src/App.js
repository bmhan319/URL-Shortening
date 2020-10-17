import React, {Component} from 'react';
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import './css/header.css'
import './css/mobile-menu.css'


class App extends Component {
  state = {
    menuOpen: false
  }

  menu =() => {
    document.getElementById("mobileMenu").style.display = (this.state.menuOpen === false) ? "block" : "none"
    if (this.state.menuOpen === false) {
      this.setState({menuOpen: true})
    } else {
      this.setState({menuOpen: false})
    }
  }

  render() {
    return (
      <div className="App">
        <Header menu={this.menu} />
        <MobileMenu />
        <div>{this.state.menuOpen}</div>
      </div>
    );
   }
}

export default App;
