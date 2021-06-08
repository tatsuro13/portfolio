import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostsByPageNumber } from '../../../lib/api';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Posts from '../../../components/works/Posts';
import theme from '../../../components/utils/theme';
import PageTemplate from '../../../components/layouts/PageTemplate';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem',
  },
}));

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const per_page = 6;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const paths = range(1, Math.ceil(allPosts.length / per_page)).map(
    (number) => `/works/page/${number}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPageNumber: number = Number(params.number);
  const limit: number = 6;

  const postsByPageNumber = await getPostsByPageNumber(
    currentPageNumber,
    limit
  );
  const allPosts = await getAllPosts();

  return {
    revalidate: 3,
    props: {
      currentPageNumber,
      postsByPageNumber,
      allPosts,
    },
  };
};

interface Post {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
}

const WorksPage = ({ currentPageNumber, postsByPageNumber, allPosts }) => {
  const classes = useStyles();
  const router = useRouter();

  const handleChangePage = useCallback(
    (_: React.ChangeEvent<unknown>, number: number) => {
      router.push(`${number}`);
    },
    [router]
  );

  const perPage: number = 6;

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Works | Sixth Project13's Portfolio">
          <>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    Works
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={4}>
                {postsByPageNumber?.map((post: Post) => (
                  <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <Grid container>
                      <Posts
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        thumbnail={post.thumbnail.url}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container justify="center">
                <Grid item>
                  <Pagination
                    count={Math.ceil(allPosts.length / perPage)}
                    variant="outlined"
                    page={currentPageNumber}
                    onChange={handleChangePage}
                  />
                </Grid>
              </Grid>
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  );
};

export default WorksPage;
