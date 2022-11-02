import { Wrapper, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Wrapper>
      {options.map(keyName => (
        <Button
          type="button"
          key={keyName}
          onClick={onLeaveFeedback}
          name={keyName}
        >
          {keyName}
        </Button>
      ))}
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
