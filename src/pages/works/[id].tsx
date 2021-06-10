import { ThemeProvider } from '@material-ui/styles';
import { GetStaticPaths, GetStaticProps } from 'next';
import PageTemplate from '../../components/layouts/PageTemplate';
import theme from '../../components/utils/theme';
import Post from '../../components/works/Post';
import { getAllPosts, getPostById } from '../../lib/api';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map(({ id }) => `/works/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = String(params.id);
  const post = await getPostById(id);

  return {
    props: { post },
    revalidate: 3,
  };
};

interface Post {
  post: {
    id: string;
    title: string;
    thumbnail: {
      url: string;
    };
    body: HTMLElement;
  };
}

const worksId = ({ post }: Post) => {
  return (
    <ThemeProvider theme={theme}>
      <PageTemplate
        title={`${post.title} | Works | Sixth Project 13's Portfolio`}
      >
        <Post
          id={post.id}
          title={post.title}
          thumbnail={post.thumbnail.url}
          body={post.body}
        />
      </PageTemplate>
    </ThemeProvider>
  );
};

export default worksId;
