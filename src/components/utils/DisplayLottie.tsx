import Lottie from 'react-lottie';

const GreetingLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return <Lottie options={defaultOptions} />;
};

export default GreetingLottie;
