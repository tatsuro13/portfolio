import { GetStaticProps } from 'next';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import Posts from '../components/works/Posts';
import PageTemplate from '../components/layouts/PageTemplate';
import theme from '../components/utils/theme';

import { getLatestPosts } from '../lib/api';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem',
  },
}));

interface Item {
  name: string;
  description: string;
  color: string;
}

interface Introduction {
  title: string;
  description: string;
  action: string;
  href: string;
}

interface Post {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getLatestPosts(3); // トップページは最新の3件取得

  return {
    props: { latestPosts },
    revalidate: 1,
  };
};

const Home = ({ latestPosts }) => {
  const classes = useStyles();

  const items: Item[] = [
    {
      name: 'Slide1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: '#64ACC8',
    },
    {
      name: 'Slide2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: '#7D85B1',
    },
    {
      name: 'Slide3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: '#CE7E78',
    },
  ];

  const introductions: Introduction[] = [
    {
      title: 'Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      action: 'About Service >',
      href: '/service',
    },
    {
      title: 'Company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      action: 'About Company >',
      href: '/company',
    },
    {
      title: 'Recruit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      action: 'About Recruit >',
      href: '/recruit',
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Sixth Project 13's Profile">
          <>
            <Container maxWidth="lg" className={classes.container}>
              <Typography
                variant="h1"
                align="center"
                style={{ marginBottom: '2rem' }}
              >
                Latest Works
              </Typography>
              <Grid container spacing={4}>
                {latestPosts?.map((post: Post) => (
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
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  );
};

export default Home;
