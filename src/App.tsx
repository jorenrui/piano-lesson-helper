import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Interval } from './components/Interval';
import { Level } from './components/Level';
import { Note } from './components/Note';
import { SpeechSwitch } from './components/SpeechSwitch';
import {
  LEVEL, MIN_INTERVAL, MIN_LEVEL,
  AUTHOR_LINK, REPOSITORY_LINK, PIANO_LESSON_LINK,
} from './constants';

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
          <h1 className="mt-2 mb-4 text-3xl font-medium text-white">Piano Helper</h1>
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
      <footer className="absolute bottom-0">
        <p className="my-1 text-white text-center">
          Made this to help me practice&nbsp;
          <a
            href={PIANO_LESSON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300 focus:text-yellow-300"
          >
            <FiExternalLink className="inline h-4 w-4 mr-1" />
            this lesson
          </a>
          . Made with love by&nbsp;
          <a
            href={AUTHOR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300 focus:text-yellow-300"
          >
            <FiExternalLink className="inline h-4 w-4 mr-1" />
            @jorenrui
          </a>
        </p>
        <p className="mb-2 mr-2 ml-2 mt-1 text-white text-center">
          Copyright (c) 2021 Joeylene Rivera |&nbsp;
          <a
            href={REPOSITORY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300 focus:text-yellow-300"
          >
            <FiExternalLink className="inline h-4 w-4 mr-1" />
            GitHub
          </a>
          &nbsp;????
        </p>
      </footer>
    </div>
  )
}

export default App
