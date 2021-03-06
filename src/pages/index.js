import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"

import Typical from 'react-typical'
import "./index.css"
import "../components/animate.css"



const things = ["Leader.", 500, "Coder.", 500, "Musician.", 500, "Gamer.", 500, "Builder.", 500]


const IndexPage = () => (
  <div class="landing">
    <div class="animated fadeInLeft"><Layout /></div>

    <SEO title="Home" />
    <div class="center">
      <div class="intro_div">
        <div class="animated zoomIn">
          <h1 class="intro_h1">Hi, I'm Rishan.</h1>
          <br></br>
          <p>
            I'm a <Typical loop={Infinity} steps={things} />
          </p>
        </div>
      </div>
    </div>

  </div>





)

export default IndexPage
