import { ThemeProvider } from '@material-ui/styles';
import PageTemplate from '../components/layouts/PageTemplate';
import theme from '../components/utils/theme';

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Portfolio of Sixth Project 13">
          <h1>Hello Sixth!</h1>
        </PageTemplate>
      </ThemeProvider>
    </>
  );
};

export default Home;
