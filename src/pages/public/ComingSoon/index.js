import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  contentBox: {
    maxWidth: theme.breakpoints.values['md'],
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      textAlign: 'left',
    }
  },
  videoBoxRoot: {
    maxWidth: 512,
    paddingBottom: theme.spacing(12),
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(12),
    }
  },
  cardRoot: {
    position: 'relative',
    paddingTop: '56.25%',
    margin: 'auto',
    overflow: 'hidden',
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    'header': 'Snap Delivered Team Membership Portal',
    'description': 'Manage all your accounts from one place. Track Sales, Orders, Analytics and Commissions. Sign up and get started today!',
    'primary-action': 'Login',
    'secondary-action': 'Sign up for free',
    'video': ' ',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box className={classes.contentBox}>
              <Typography variant="h3" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="h5" color="textSecondary" paragraph={true}>{content['description']}</Typography>
              <Box mt={4}>
                <Button variant="contained" color="primary" href="/login" className={classes.primaryAction}>{content['primary-action']}</Button>
                <Button variant="contained" href="/register" className={classes.secondaryAction}>{content['secondary-action']}</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box className={classes.videoBoxRoot}>
              <Card className={classes.cardRoot}>
                <CardMedia className={classes.cardMedia} component="iframe" src="https://player.vimeo.com/video/653832970?h=ca6e3cd747" />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}


