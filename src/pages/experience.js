import React, { Component } from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Typing from 'react-typing-animation'

import SEO from "../components/seo"


import Honey from '../images/honey.png'
import Yahoo from '../images/yahoo.png'
import Tala from '../images/tala.png'
import Microsoft from '../images/microsoft.png'

import './experience.css'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <SEO title="Experience"/>
                <Layout />
                <div class='text'>
                    <Typing><Typography variant="h2">Experience</Typography></Typing>
                
                <Divider/>
                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                        key="004"
                        dateText="Jan '20 – April '20"
                        dateInnerStyle={{ background: '#12305e' }}
                    >
                        <Typography variant="h4"><img src={Honey}/>Honey Science</Typography>
                        <Typography variant="h6">SDE Intern -- Los Angeles, CA</Typography>
                        <Typography variant="paragraph">
                            Stay tuned!
                        </Typography>
                    </TimelineItem>


                    <TimelineItem
                        key="004"
                        dateText="June '19 – Sept '19"
                        dateInnerStyle={{ background: '#12305e' }}
                    >
                        <Typography variant="h4"><img src={Yahoo}/>Yahoo!</Typography>
                        <Typography variant="h6">SWE Intern -- Sunnyvale, CA</Typography>
                        <Typography variant="paragraph">
                        During my time at Yahoo (now Verizon Media), I developed a mechanism with JMX and Ultrabrew Metrics to instrument and dynamically manage statistics for Yahoo Calendar’s back-end server components and forward them to Yamas, an internal monitoring service.
<br/><br/>I also filtered Yahoo Groups requests coming to Calendar's back-end, distinguishing between reads and updates to our Events DB. For this project, I published metrics (read count & update count) to Yamas and PRISM Dashboard. 
<br/><br/>All code was written in Java and was thoroughly tested, reviewed, and pushed to production.
                        </Typography>
                    </TimelineItem>

                    <TimelineItem
                        key="004"
                        dateText="June '18 – Sept '18"
                        dateInnerStyle={{ background: '#12305e' }}
                    >
                        <Typography variant="h4"><img src={Tala}/>Tala Security</Typography>
                        <Typography variant="h6">SWE Intern -- Fremont, CA</Typography>
                        <Typography variant="paragraph">
                        While at Tala, I architected a decision tree algorithm using SciKit to identify threat misclassification, probing, and DDos attacks using Apache server logs as input data.
<br/><br/> To do this, I designed a Python framework for extracting Apache metadata, parsing user agent strings, ip address validation through TOR endpoint and blacklist filters, and dissecting payloads containing CSP reports. This was then
used to create the dataset used to train the DT model.    
                        </Typography>
                    </TimelineItem>
                </Timeline>
                </div>

            </div>
        )
    }
}
