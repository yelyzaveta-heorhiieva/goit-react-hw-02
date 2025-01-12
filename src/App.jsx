import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import './App.css';


const App = () => {

  const obj = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  const [clicks, setClicks] = useState(() => {
     const savedClicks = JSON.parse(window.localStorage.getItem("saved-clicks"));
  if (savedClicks !== null) {
    return savedClicks;
  }
    return obj;
  });
  
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100)

  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1
    })
  }

  const resetFeedback = () => {
    setClicks(obj)
  }

 

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} totalFeedback={totalFeedback} onReset={resetFeedback} names={clicks}/>
      {totalFeedback > 0 ? <Feedback names={clicks} positive={positiveFeedback} total={totalFeedback} />
        : <Notification>No feedback yet</Notification>}
    </>
  )
}

export default App;
