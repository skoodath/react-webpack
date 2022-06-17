import React from 'react';
import "./style.scss";

const HeroComponent = () => {
  return (
    <header className='hero_container'>
      <div className="hero_inner">
        <h1 className="hero_title">
          React with webpack configuration
        </h1>
        <div className="hero_link_container">
        <a href="" className="hero_links">Webpack</a>
        <a href="" className="hero_links">React</a>
        <a href="" className="hero_links">Sass</a>
        </div>
      </div>
    </header>
  )
}

export default HeroComponent