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
import './css/form.css'
import './css/bitly.css'
import './css/boost-section.css'
import './css/footer.css'

const TOKEN = process.env.REACT_APP_BITLY_TOKEN

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

  submitLink = (e) => {
    e.preventDefault()
    const link = document.getElementById("inputText").value
    const prefix = /http:\/\//gi
    const prefixes = /https:\/\//gi
    let answer = ( link.match(prefix) || link.match(prefixes) ) ? link : "https://" + link

    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": answer })
    }).then(function (response) {
      return response.text()
    }).then(function (text) {
      console.log(text)
    })
  }
  

  render() {
    return (
      <div className="App">
        <Header menu={this.menu} />
        <IntroSection />
        <StatsSection submitLink={this.submitLink}/>
        <BoostSection />
        <Footer />
      </div>
    );
   }
}

export default App;


