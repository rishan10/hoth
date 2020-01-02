import React, { Component } from 'react'
import { Typography, Divider, Grid } from '@material-ui/core'
import Typing from 'react-typing-animation'
import Layout from '../components/layout'
import ProjectCard from '../components/projectCard'
import { makeStyles } from '@material-ui/core/styles';

import SEO from '../components/SEO'


import Play from '../images/play.png';
import Spinder from '../images/spinder.png';
import Tanks from '../images/tanks.png';
import Hoth from '../images/hoth.png';


import './projects.css'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));



const projectData = {
    play: {
        name: "Play!",
        image: Play,
        codeLink: "https://github.com/rishan10/Play",
        description: "An easy way to plan and organize your sports activites. Built with React and Firebase. Teach, learn and play!",
    },
    spinder: {
        name: "Spinder",
        image: Spinder,
        codeLink: "https://github.com/rishan10/spinder",
        description: "Swipe on songs and match with your muse! Built with Ruby on Rails, AWS, and PostgreSQL.",
    },
    tanks: {
        name: "Tanks",
        image: Tanks,
        codeLink: "https://github.com/rishan10/tanks",
        description: "A 3D, tank-themed version of the classic BREAKOUT game! Built with WebGL.",
    },
    quizzical: {
        name: "",
        image: "",
        codeLink: "",
        description: "",
    },
    hoth: {
        name: "Personal Website",
        image: Hoth,
        codeLink: "https://github.com/rishan10/hoth",
        description: "This website was also built by me using GatsbyJS!",
    }
}

export default function Projects() {
    const classes = useStyles()
    return (
        <div>
            <SEO title="Projects" />
            <Layout />

            <div class="text">
                <Typing><Typography variant="h2">Projects</Typography></Typing>
                <Divider />

                <div class="grid">
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        spacing={3}
                    >
                        <Grid item ><ProjectCard project={projectData.play} /></Grid>
                        <Grid item ><ProjectCard project={projectData.spinder} /></Grid>
                        <Grid item><ProjectCard project={projectData.tanks} /></Grid>
                        <Grid item><ProjectCard project={projectData.hoth} /></Grid>
                    </Grid>

                </div>



            </div>







        </div>
    )
}
