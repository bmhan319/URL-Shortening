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
    shortLink: ""
  }

  componentDidMount() {
    const copyButton = document.querySelector('.copyButton')
    copyButton.addEventListener("click", this.copy);
  }

  menu = () => {
    document.getElementById("mobileMenu").style.display = (this.state.menuOpen === false) ? "block" : "none"
    if (this.state.menuOpen === false) {
      this.setState({menuOpen: true})
    } else {
      this.setState({menuOpen: false})
    }
  }


  submitLink = async (e) => {
    e.preventDefault()
    const link = document.getElementById("inputText").value
  
    const prefix = /http:\/\//gi
    const prefixSecure = /https:\/\//gi
    let formattedLink = ( link.match(prefix) || link.match(prefixSecure) ) ? link : "https://" + link
    
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

    this.createElem()
  }

  createElem = () => {
    const container = document.getElementById('bitlyContainer')
    const div = document.createElement('div')
    const para1 = document.createElement('p')
    const para2 = document.createElement('p')
    const hr = document.createElement('hr')
    const button = document.createElement('button')

    div.style.backgroundColor = "f4f4f4";
    div.style.height = "100px";
    div.style.width = "200px";

    para1.setAttribute('id', "longLink")
    para2.setAttribute('id', "shortLink")
    
    para1.classList.add("linkText")
    para2.classList.add("linkText")
    para1.innerHTML = this.state.longLink
    para2.innerHTML = this.state.shortLink
    button.classList.add("copyButton")
    button.innerHTML = "Copy"
    button.setAttribute('id', "copyButton")

    container.appendChild(div)
    container.classList.remove('copyButton')
    div.appendChild(para1)
    div.appendChild(hr)
    div.appendChild(para2)
    div.appendChild(button)
  }
  
  copy = () => {
    let shortLink = document.getElementById('shortLink').innerHTML
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = shortLink;
    dummy.select();
    document.execCommand("copy")
    document.body.removeChild(dummy);
  }

  render() {
    return (
      <div className="App">
        <Header menu={this.menu} />
        <IntroSection />
        <StatsSection copy={this.copy} state={this.state} submitLink={this.submitLink}/>
        <BoostSection />
        <Footer />
      </div>
    );
   }
}

export default App;

