import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

interface PageTemplateProps {
  children: React.ReactFragment;
  title: string;
}

const PageTemplate = ({ children, title }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'Portfolio of Sixth Project 13'}</title>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <style jsx global>
        {`
          html,
          body {
            background: #f5f5f5;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default PageTemplate;
