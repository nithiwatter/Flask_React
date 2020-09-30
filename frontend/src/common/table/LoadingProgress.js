import React from 'react';
import { LinearProgress } from '@material-ui/core';

const LoadingProgress = (props) => {
  const { loading } = props;
  const [progress, setProgress] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const refTimer = React.useRef(null);

  if (!loading) {
    setTimeout(() => {
      setProgress(100);
    }, 500);
    setTimeout(() => {
      setShow(false);
      clearInterval(refTimer.current);
    }, 1000);
  }

  React.useEffect(() => {
    refTimer.current = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 10);
    return () => {
      clearInterval(refTimer.current);
    };
  }, []);

  if (show) {
    return (
      <LinearProgress variant="determinate" value={progress}></LinearProgress>
    );
  }

  return null;
};

export default LoadingProgress;
