import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles({
    card: { 
        maxWidth: 345,
        
    },
    media: {
        height: 140,
    }
});

export default function ProjectCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.project.name}
                    image={props.project.image}
                    title={props.project.name}
                />
                
                <CardContent>
                    <Typography gutterBottom variant='h5' component="h2">
                        {props.project.name}
                    </Typography>
                    <Typography variant="paragraph" color="textSecondary">
                        {props.project.description}
                    </Typography>
                </CardContent>

                <CardActionArea>
                    <IconButton href={props.project.codeLink} target='_blank'> <CodeIcon color="primary" fontSize='large' /> </IconButton>
                </CardActionArea>

            </CardActionArea>

        </Card>
    );
}