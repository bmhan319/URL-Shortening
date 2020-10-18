import React from 'react'

export default function Form(props) {
  return (
    <form className="shorten-container" onSubmit={props.submitLink}>
      <input id="inputText" className="input input-text" name="long_url" type="text" placeholder="Shorten a link here..." />
      <input className="input input-submit" type="submit" value="Shorten It!" />
    </form>
  )
}
