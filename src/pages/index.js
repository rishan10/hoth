import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Typical from 'react-typical'
import "./index.css"
import "../components/animate.css"

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import Particles from 'react-particles-js';


const things = ["Leader.", 500, "Coder.", 500, "Musician.", 500, "Gamer.", 500, "Thinker.", 500]

function getParticles() {
  return (
    <Particles 
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
              "random": true, 
              "value": 10
          },
          "shape": {
            "type": "polygon",
            "stroke": {
                "width": 2,
                "color": "#F4B400",
            },
            "polygon": {
                "nb_sides": Math.floor(Math.random() * 7) + 3
            },
          },
          "line_linked": {
            "color": "#F4B400",
          }
          
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble",
	            }
	        }
	    }
	}} />
  )
}

const IndexPage = () => (
  <div class="landing">
    <div class="animated fadeInLeft"><Layout /></div>

    {getParticles()}

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
