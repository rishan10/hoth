import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconBar from '../components/iconbar';

import "./about.css"


export default class About extends Component {
    render() {
        return (
            <div>
                <SEO title="About" />
                
                <Layout/>

                <div class = "text">
                <Typography variant="h2">About Me</Typography>
                <Divider/>
                <Typography variant="paragraph">I'm a third year Computer Science student at UCLA. In the past, I have interned at Tala Security and Verizon Media and will be an incoming SDE intern at Honey.
                I am mainly a backend developer with interests in AI/ML, distributed systems and cloud computing, and highly scalable systems and architectures.
                As a corporate chair for Upsilon Pi Epsilon, UCLA's computer science honor society, I maintain relations with UCLA's affiliates in the industry and work intimately with companies such as 
                Facebook and Taboola to organize recruiting events on campus. <br/><br/>

                When I'm not coding, you can find me playing tennis -- a sport that has been with me since the tender age of
                4. I also enjoy watching and playing soccer, singing, and gaming with friends.  
                
                 </Typography>
                 <IconBar></IconBar>

                </div>

            </div>
        )
    }
}
