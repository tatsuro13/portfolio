import { Typography } from '@material-ui/core';

interface AboutProps {
  title: string;
  description: string;
}

const About = ({ title, description }: AboutProps) => {
  return (
    <>
      <div style={{ marginTop: '3rem' }}>
        <Typography variant="h2" align="left" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </>
  );
};

export default About;
