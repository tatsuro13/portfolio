import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import SkillSet from '../utils/SkillSet';

const useStyles = makeStyles((theme: Theme) => ({
  linkButton: {
    marginTop: theme.spacing(2),
    textTransform: 'none',
    border: 'transparent 1px solid',
    borderRadius: 50,
    backgroundColor: '#000000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#555555',
    },
  },
}));

interface IntroductionsProps {
  index: number;
  title: string;
  description: string;
  action: string;
  skillSet: boolean;
}

const Introductions = ({
  index,
  title,
  description,
  skillSet,
}: IntroductionsProps) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h1"
        gutterBottom
        align={index % 2 == 0 ? 'left' : 'right'}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        align={index % 2 == 0 ? 'left' : 'right'}
        paragraph
      >
        {description}
      </Typography>
      <Box textAlign={index % 2 == 0 ? 'left' : 'right'}>
        {skillSet === true ? <SkillSet /> : null}
      </Box>
    </>
  );
};

export default Introductions;
