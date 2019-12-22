import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Typical from 'react-typical'
import "./index.css"


const things = ["Leader.", 500, "Coder.", 500, "Musician.", 500, "Gamer.", 500, "Thinker.", 500]

const IndexPage = () => (
  <div>
    <Layout />
    <SEO title="Home" />
    <div class="intro_div">
      <h1 class="intro_h1">Hi, I'm Rishan.</h1>
      <br></br>
      <p>
        I'm a <Typical loop={Infinity} steps={things} />
      </p>
    </div>

  </div>



)

export default IndexPage
