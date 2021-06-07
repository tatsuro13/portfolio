import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import About from '../components/aboutus/About';
import PageTemplate from '../components/layouts/PageTemplate';
import theme from '../components/utils/theme';
interface About {
  title: string;
  description: string;
}

const abouts: About[] = [
  {
    title: 'Feature1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Feature2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Feature3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Aboutus: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="About us | Corporate Site Sample">
          <>
            <Container maxWidth="lg" style={{ marginTop: '3rem' }}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    About us
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg">
              {abouts.map((feature, index) => (
                <About
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  );
};

export default Aboutus;
