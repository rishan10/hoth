import React, { Component } from 'react'
import Layout from '../components/layout'
import { Typography, Divider } from '@material-ui/core'
import Typing from 'react-typing-animation/dist/Typing'

export default class education extends Component {
    
    render() {
        return (
            <div>
                <Layout/>
                <div class='text'>
                    <Typing><Typography variant="h2">Education</Typography></Typing>
                    
                    <Divider/>

                    <Typography variant="h4">University of California, Los Angeles</Typography>
                    <Typography variant='h6' color="textSecondary">B.S. Computer Science</Typography>
                    <br/><br/>

                    <Typography variant='h4'>Relevant Coursework:</Typography>


                </div>
                
            </div>
        )
    }
}
