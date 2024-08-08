
import { Button, Typography } from '@mui/material';
import Statistic from '../components/Statistic';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const Final: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    
    navigate('/');
  };

  return (
    <div>
      <Typography>Results</Typography>
      <Statistic />
      <Button variant='outlined' onClick={handleReset}>Restart Quiz</Button>
    </div>
  );
};

export default Final;