import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './App.styled';

export default function App () {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0); 

  const leaveFeedback = (e) => {
      switch (e) {
        case 'good': 
          setGood(prevState => prevState + 1);
          break;
        case 'neutral':
          setNeutral(prevState => prevState + 1);
          break;
        case 'bad': 
          setBad(prevState => prevState + 1);
          break;
        default: return;  
      }
  }

  const countTotalFeedback = () => good + neutral + bad;

  const total = countTotalFeedback();
  
  const countPositiveFeedbackPercentage = total => {
    return `${Math.round((good / total) * 100)}%`
  };
  
  const positive = countPositiveFeedbackPercentage(total);

  return (
          <>
            <Section title="Please leave your feedback">
              <FeedbackOptions
                options={Object.keys({good, neutral, bad})}
                onLeaveFeedback={leaveFeedback}
              />
            </Section>
            <Section title="Statistics">
              {total ? (
              <Statistics
                Good={good}
                Neutral={neutral}
                Bad={bad}
                Total={total}
                PositivePercentage={positive}
              ></Statistics>
              ) : (
              <Notification>There is no feedback yet.</Notification>
              )}
            </Section>
          </>
      )
}