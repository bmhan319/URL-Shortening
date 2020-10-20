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
    menuOpen: false,
    longLink: "",
    shortLink: "",
    count: 1,
    bitly: []
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
    if (link.length === 0) {
      console.log('error')
    } else {
      this.callAPI(link)
    }
  }


  callAPI = async (text) => {
    const prefix = /http:\/\//gi
    const prefixSecure = /https:\/\//gi
    let formattedLink = ( text.match(prefix) || text.match(prefixSecure) ) ? text : "https://" + text
    
    const bitly = "https://api-ssl.bitly.com/v4/shorten"
    const setting = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": formattedLink })
    }
    const call = await fetch(bitly, setting)

    try {
      const data = await call.json()
      this.setState({
        longLink: data.long_url,
        shortLink: data.link
      })
    } catch(err) {
      console.error(err)
    }

    this.setState({
      count: this.state.count + 1,
      bitly: [ ...this.state.bitly, [this.state.count, this.state.longLink, this.state.shortLink] ]
    })
  }


  copy = (num, shortLink) => {
    const button = document.getElementById(`copyButton${num}`)
    const buttons = document.querySelectorAll('.copyButton')
    const dummy = document.createElement("textarea");
    
    document.body.appendChild(dummy);
    dummy.value = shortLink;
    dummy.select();
    document.execCommand("copy")
    document.body.removeChild(dummy);
    
    buttons.forEach( item => {
      item.innerHTML = "Copy"
      item.classList.remove('colorActive')
      item.classList.add('colorDefault')
    })
    
    button.innerHTML = "Copied!"
    button.classList.remove('colorDefault')
    button.classList.add('colorActive')
  }

  render() {
    return (
      <div className="App">
        <Header menu={this.menu} />
        <IntroSection />
        <StatsSection  copy={this.copy} state={this.state} submitLink={this.submitLink}/>
        <BoostSection />
        <Footer />
      </div>
    )
  }
}

export default App;

