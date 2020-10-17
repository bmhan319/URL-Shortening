import React, {Component} from 'react';
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import BoostSection from './components/BoostSection'
import './css/header.css'
import './css/intro-section.css'
import './css/mobile-menu.css'
import './css/boost-section.css'



class App extends Component {
  state = {
    menuOpen: false
  }

  menu = () => {
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
        <IntroSection />
        <BoostSection />
      </div>
    );
   }
}

export default App;
