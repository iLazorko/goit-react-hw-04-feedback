import PropTypes from 'prop-types';
import { Stats, StatsSpan } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  let span;
  if (positivePercentage > 0) {
    span = <StatsSpan> {positivePercentage}%</StatsSpan>;
  } else {
    span = <StatsSpan> 0%</StatsSpan>;
  }
  return (
    <div>
      <Stats>
        Good: <StatsSpan> {good}</StatsSpan>
      </Stats>
      <Stats>
        Neutral: <StatsSpan> {neutral}</StatsSpan>
      </Stats>
      <Stats>
        Bad: <StatsSpan> {bad}</StatsSpan>
      </Stats>
      <Stats>
        Total: <StatsSpan> {total}</StatsSpan>
      </Stats>
      <Stats>
        Positive feedback:
        {span}
      </Stats>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
