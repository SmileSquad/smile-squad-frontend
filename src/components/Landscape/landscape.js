import React, { useEffect } from 'react';
import './landscape.scss';
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
const font = "'Trocchi', serif";

// Home Page
// landscape video or slide show
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '768px',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#f5b201',
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(30),
    paddingLeft: theme.spacing(70),
    fontFamily: font,
    fontSize: 40,

  },
}));


function Landscape() {

  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <ReactPlayer
          url={'https://streamable.com/z628um'}
          playing
          loop
          muted
          width="1366px"
          height="768px"
        />
        <div className={classes.overlay}>
          <Box
            height="762px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="#fff"
          >
            {/* <Typography variant="h3" component="h1" className={classes.title}>
              SMiLE SQuAD
          </Typography> */}
          </Box>
        </div>
      </section>


    </>
  );
}

export default Landscape;