import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Wrap } from './App.styled';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  stateKey = Object.keys(this.state);

  handleClick = evt => {
    const name = evt.target.name;
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((value, acc) => value + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalCount = this.countTotalFeedback();
    return ((this.state.Good / totalCount) * 100).toFixed(2);
  };

  render() {
    return (
      <Wrap>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.stateKey}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Wrap>
    );
  }
}
