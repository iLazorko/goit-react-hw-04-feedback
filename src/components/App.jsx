import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Wrap } from './App.styled';

const initialState = {
  Good: 0,
  Neutral: 0,
  Bad: 0,
};

export const App = () => {
  const [state, setState] = useState(initialState);
  const { Good, Neutral, Bad } = state;

  const stateKey = Object.keys(state);

  const handleClick = evt => {
    const name = evt.target.name;

    switch (name) {
      case 'Good':
        setState(prevState => ({ ...prevState, Good: prevState.Good + 1 }));
        break;
      case 'Neutral':
        setState(prevState => ({
          ...prevState,
          Neutral: prevState.Neutral + 1,
        }));
        break;
      case 'Bad':
        setState(prevState => ({ ...prevState, Bad: prevState.Bad + 1 }));
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((value, acc) => value + acc);
  };

  function countPositiveFeedbackPercentage() {
    const totalCount = countTotalFeedback();
    return ((Good / totalCount) * 100).toFixed(2);
  }

  return (
    <Wrap>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={stateKey} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Wrap>
  );
};
