import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MIN_INTERVAL } from '../constants';

const SECOND = 1000;

interface IProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export function Interval({ time, setTime }: IProps) {
  const resetInterval = () => {
    setTime(MIN_INTERVAL);
  };

  const subtractInterval = () => {
    setTime((val) => val <= MIN_INTERVAL ? MIN_INTERVAL : val - SECOND);
  };

  const addInterval = () => {
    setTime((val) => val + SECOND);
  };

  return (
    <div>
      <h2 className="text-base font-light text-white uppercase">Interval</h2>
      <p className="text-3xl text-white">{time / 1000} s</p>
      <div className="my-2 flex items-center gap-x-2">
        <button
          type="button"
          onClick={subtractInterval}
          className="py-1 px-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
        >
          <HiChevronLeft className="h-4 w-4" />
          <span className="sr-only">Decrease the interval by one second</span>
        </button>
        <button
          type="button"
          onClick={resetInterval}
          className="py-1 px-2 text-white text-xs bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={addInterval}
          className="py-1 px-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
        >
          <HiChevronRight className="h-4 w-4" />
          <span className="sr-only">Increase the interval by one second</span>
        </button>
      </div>
    </div>
  );
}
