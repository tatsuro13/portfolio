import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import ShareButton from '../utils/ShareButton';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem',
    maxWidth: '800px',
    overflow: 'hidden',
  },
}));

interface PostProps {
  id: string;
  title: string;
  thumbnail: string;
  body: HTMLElement;
}

const Post = ({ id, title, thumbnail, body }: PostProps) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Container className={classes.container}>
            <Grid direction="column" spacing={1}>
              <Grid item>
                <img
                  src={thumbnail}
                  style={{ height: 'auto', width: '100%' }}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container className={classes.container}>
            <Typography variant="h1">{title}</Typography>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Container className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <ShareButton url={`https://**********/works/${id}`} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Post;
