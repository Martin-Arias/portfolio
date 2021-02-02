import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import '../styles/Proyecto.css'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        
    },
});
const fontStyle={ fontWeight:'Bold'}
const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Raleway',
            'sans-serif'
        ].join(','),
    }
});
export default function ImgMediaCard({titulo, descripcion, imagen, url}) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme} >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={titulo}
                        height="140"
                        image={imagen}
                        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={fontStyle}>
                           {titulo}
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={fontStyle}>
                            {descripcion}
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={fontStyle} href={ url } target="_blank" rel="noopener noreferrer">
                        Visitar
                  </Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}