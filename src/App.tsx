import { useEffect, useState } from 'react';
import { Interval } from './components/Interval';
import { Level } from './components/Level';
import { MIN_INTERVAL, MIN_LEVEL } from './constants';

function App() {
  const [interval, setInterval] = useState(MIN_INTERVAL);
  const [level, setLevel] = useState(MIN_LEVEL);

  if (!('speechSynthesis' in window)) {
    alert("Sorry, your browser doesn't support text to speech!");
  }

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "1 B";
    window.speechSynthesis.speak(msg);
  }, []);

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-800">
      <div className="p-2">
        <header className="mt-2 mb-8 text-center">
          <h1 className="text-3xl font-medium text-white">Piano Helper</h1>
        </header>
        <main className="text-center flex justify-between gap-x-8">
          <Interval interval={interval} setInterval={setInterval} />
          <Level level={level} setLevel={setLevel} />
        </main>
      </div>
    </div>
  )
}

export default App
