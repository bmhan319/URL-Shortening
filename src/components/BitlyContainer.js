import React from 'react'

export default function BitlyContainer(props) {
  return (
    <div className="bitlyContainer">
      <p id="longLink" className="linkText">{props.state.longLink}https://deer.com/</p>
      <hr />
      <p id="shortLink" className="linkText">{props.state.shortLink}https://bit.ly/3o5dL0O</p>
      <button onClick={props.copy} className="copyButton">Copy</button>
    </div>
  )
}
