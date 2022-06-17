import React from 'react';
import "./style.scss"
import SectionTitle from '../../utils/SectionTitle';

const AboutComponent = () => {
  return (
    <section className='about_container'>
      <div className="about_inner">
        <SectionTitle>
          About Me
        </SectionTitle>
        <article className="about_article">
          <h2 className="about_article_title">

          </h2>
        </article>
      </div>
    </section>
  )
}

export default AboutComponent