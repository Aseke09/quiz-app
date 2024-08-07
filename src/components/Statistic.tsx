import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Statistic: React.FC = () => {
  const { score, numberOfQuestions } = useSelector((state: RootState) => state.quiz);

  return (
    <div>
      <Typography variant="h4">Statistics</Typography>
      <List>
        <ListItem>
          <ListItemText primary={`Score: ${score}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Total Questions: ${numberOfQuestions}`} />
        </ListItem>
      </List>
    </div>
  );
};

export default Statistic;