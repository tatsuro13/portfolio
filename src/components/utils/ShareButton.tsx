import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

interface ShareButtonProps {
  url: string;
}

const ShareButton = ({ url }: ShareButtonProps) => {
  return (
    <>
      <FacebookShareButton url={url}>
        <FacebookIcon size="32px" round />
      </FacebookShareButton>
      <TwitterShareButton url={url} style={{ marginLeft: '15px' }}>
        <TwitterIcon size="32px" round />
      </TwitterShareButton>
    </>
  );
};

export default ShareButton;
