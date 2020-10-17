import React, {Component} from 'react';
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import StatsSection from './components/StatsSection'
import BoostSection from './components/BoostSection'
import Footer from './components/Footer'
import './css/header.css'
import './css/intro-section.css'
import './css/mobile-menu.css'
import './css/stats-section.css'
import './css/boost-section.css'
import './css/footer.css'



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
        <StatsSection />
        <BoostSection />
        <Footer />
      </div>
    );
   }
}

export default App;
