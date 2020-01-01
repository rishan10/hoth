import React, { Component } from 'react'
import Layout from '../components/layout'
import { Typography, Divider, List, ListItem } from '@material-ui/core'
import Typing from 'react-typing-animation/dist/Typing'
import SEO from '../components/seo'

import './education.css'


let classes = ["CS 111: Operating Systems", "CS 180: Algorithms", "CS 131: Programming Languages", "CS 130: Software Engineering", "CS 32: Data Structures", "CS 188: Scalable Web Services", "CS 174a: Computer Graphics", "CS 33: Computer Architecture", "CS 31: Introduction to C++", "CS M152a: Digital Design", "CS M51a: Digital Systems", "CS 117: Physical Layer Networking", "CS 35L: Software Construction Lab"]

export default class Education extends Component {
    render() {
        return (
            <div>
                <SEO title="Education"/>
                <Layout/>
                <div class='text'>
                    
                    <Typing><Typography variant="h2">Education</Typography></Typing>
                    
                    <Divider/>
                    
                    
                   
                    <Typography variant="h4">University of California, Los Angeles</Typography>

                    
<Typography variant='h6' color="textSecondary">B.S. Computer Science, GPA: 3.8</Typography>

                    

                    <br/><br/>

                    <Typography variant='h5'>CS:</Typography>
                    <List>
                        {classes.map(className => {
                            return (<ListItem selected>{className}</ListItem>)
                        })}
                        
                    </List>


                </div>
                
            </div>
        )
    }
}
