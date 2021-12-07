import { useState } from 'react';
import { Interval } from './components/Interval';
import { Level } from './components/Level';
import { Note } from './components/Note';
import { MIN_INTERVAL, MIN_LEVEL } from './constants';

function App() {
  const [time, setTime] = useState(MIN_INTERVAL);
  const [level, setLevel] = useState(MIN_LEVEL);

  if (!('speechSynthesis' in window)) {
    alert("Sorry, your browser doesn't support text to speech!");
  }

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-800">
      <div className="p-2">
        <header className="my-2 mb-8 text-center">
          <h1 className="text-3xl font-medium text-white">Piano Helper</h1>
        </header>
        <main className="my-2 text-center">
          <div className="my-2 flex justify-between gap-x-8">
            <Interval time={time} setTime={setTime} />
            <Level level={level} setLevel={setLevel} />
          </div>
          <Note time={time} />
        </main>
      </div>
    </div>
  )
}

export default App
