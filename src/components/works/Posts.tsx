import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: '0.5rem',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow:
        '1px 0px 20px -1px rgba(0,0,0,0.2), 0px 0px 20px 5px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      transform: 'translateY(-3px)',
    },
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

interface PostsProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const Posts = ({ id, title, description, thumbnail }: PostsProps) => {
  const classes = useStyles();
  return (
    <Link href="/works/[id]" as={`/works/${id}`}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={thumbnail}
          title={title}
        />
        <CardContent>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Typography>
            {description?.length > 140
              ? description.substr(0, 140) + '...'
              : description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Posts;
