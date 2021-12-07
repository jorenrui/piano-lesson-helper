import { useEffect, useState } from 'react';
import { HiOutlinePlay, HiOutlineStop } from 'react-icons/hi';
import { speak } from '../helpers/speak';

const NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const FINGER_INDEX = ['one', 'two', 'three', 'four', 'five'];
enum NUMBER {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
}

const getRandomNote = () => NOTES[Math.floor(Math.random() * NOTES.length)];
const getRandomFingerIndex = () => FINGER_INDEX[Math.floor(Math.random() * FINGER_INDEX.length)] as keyof typeof NUMBER;
let interval: number;

interface IProps {
  level: number;
  time: number;
  speechEnabled: boolean;
}

export function Note({ level, time, speechEnabled }: IProps) {
  const [note, setNote] = useState(getRandomNote());
  const [fingerIndex, setFingerIndex] = useState<keyof typeof NUMBER>(getRandomFingerIndex());
  const [started, setStarted] = useState(false);
  const [intervalCount, setIntervalCount] = useState(0);

  useEffect(() => {
    if (started && speechEnabled) {
      speak({ text: level < 3 ? note : `${fingerIndex} ${note}` });
    }
  }, [intervalCount, started]);

  const start = () => {
    setStarted(true);
    interval = setInterval(() => {
      setNote(getRandomNote());
      setFingerIndex(getRandomFingerIndex());
      setIntervalCount((val) => val + 1);
    }, time);
  };

  const stop = () => {
    setStarted(false);
    setIntervalCount(0);
    clearInterval(interval);
  }

  return (
    <div className="mt-5 mb-2">
      <h2 className="text-base font-light text-white uppercase">Note</h2>
      <p className="text-3xl text-white">
        {level < 3 ? note : `${NUMBER[fingerIndex]} ${note}`}
      </p>
      <div className="my-2">
        {!started
          ? (
            <button
              type="button"
              onClick={start}
              className="mx-auto py-2 px-4 flex items-center justify-center text-white text-base bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
            >
              <HiOutlinePlay className="h-4 w-4 mr-1" />
              Start
            </button>
          ): (
            <button
              type="button"
              onClick={stop}
              className="mx-auto py-2 px-4 flex items-center justify-center text-white text-base bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
            >
              <HiOutlineStop className="h-4 w-4 mr-1" />
              Stop
            </button>
          )}
      </div>
    </div>
  );
}
