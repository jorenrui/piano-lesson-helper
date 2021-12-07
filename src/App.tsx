import { useState } from 'react';
import { Interval } from './components/Interval';
import { Level } from './components/Level';
import { Note } from './components/Note';
import { SpeechSwitch } from './components/SpeechSwitch';
import { LEVEL, MIN_INTERVAL, MIN_LEVEL } from './constants';

function App() {
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [time, setTime] = useState(MIN_INTERVAL);
  const [level, setLevel] = useState(MIN_LEVEL);

  if (speechEnabled && !('speechSynthesis' in window)) {
    alert("Sorry, your browser doesn't support text to speech!");
  }

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-800">
      <SpeechSwitch enabled={speechEnabled} setEnabled={setSpeechEnabled} />
      <div className="p-2">
        <header className="my-2 mb-8 text-center max-w-xl">
          <h1 className="mt-2 text-3xl font-medium text-white">Piano Helper</h1>
          <p className="my-1 text-base text-white">{LEVEL[level - 1]}</p>
        </header>
        <main className="my-2 mx-auto w-max text-center ">
          <div className="my-2 flex justify-between gap-x-8">
            <Interval time={time} setTime={setTime} />
            <Level level={level} setLevel={setLevel} speechEnabled={speechEnabled} />
          </div>
          <Note level={level} time={time} speechEnabled={speechEnabled} />
        </main>
      </div>
    </div>
  )
}

export default App
