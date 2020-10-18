import React from 'react'
import Form from './Form'
import BitlyContainer from './BitlyContainer'

export default function StatsSection(props) {
  return (
    <section className="sec2">
      <Form  submitLink={props.submitLink} />
      <BitlyContainer />
      
      <div className="stats-text-container">
        <h2 className="stats-title">Advanced Statistics</h2>
        <p className="stats-text">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="window window1">
        <div className="window-icon-container brand-icon-container"></div>
        <h3 className="window-title brand-title">Brand Recognition</h3>
        <p className="window-text brand-text">Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.</p>
        <div className="vertical-line"></div>
      </div>
      <div className="window window2">
        <h3 className="window-title detail-title">Detailed Records</h3>
        <div className="window-icon-container detail-icon-container"></div>
        <p className="window-text detail-text">Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.</p>
        <div className="vertical-line"></div>
      </div>
      <div className="window window3">
        <div className="window-icon-container custom-icon-container"></div>
        <h3 className="window-title custom-title">Fully Customizable</h3>
        <p className="window-text custom-text">Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.</p>
      </div>
    </section>
  )
}
