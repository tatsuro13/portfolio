import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) => ({
  snsIcon: {
    width: '30px',
    height: '30px',

    [theme.breakpoints.down('xs')]: {
      width: '25px',
      height: '25px',
    },
  },
}));

interface SocialMediaProps {
  color?: string;
}

const SocialMedia = ({ color }: SocialMediaProps) => {
  const classes = useStyles();
  return (
    <Grid item container spacing={2} justify="center">
      <Grid
        item
        component={'a'}
        target="_blank"
        rel="noreferrer noopener"
        href="https://twitter.com/sixth13"
      >
        <TwitterIcon
          className={classes.snsIcon}
          color={color ? 'primary' : 'secondary'}
        />
      </Grid>
      <Grid
        item
        component={'a'}
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/tatsuro13"
      >
        <GitHubIcon
          className={classes.snsIcon}
          color={color ? 'primary' : 'secondary'}
        />
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
