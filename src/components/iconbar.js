import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


export default class IconBar extends Component {
    
    render() {
        return (
            <div>
                <IconButton href="https://github.com/rishan10" target='_blank'> <GitHubIcon color="primary" fontSize='large'/> </IconButton>
                <IconButton href="https://www.linkedin.com/in/rishanhgirish" target='_blank'> <LinkedInIcon color="primary" fontSize='large'/> </IconButton>
                <IconButton href="mailto:rgirish@g.ucla.edu" target='_blank'> <EmailIcon color="primary" fontSize='large'/> </IconButton>
            </div>
        )
    }
}
