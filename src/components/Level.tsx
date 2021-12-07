import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MAX_LEVEL, MIN_LEVEL } from '../constants';

interface IProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

export function Level({ level, setLevel }: IProps) {
  const resetLevel = () => {
    setLevel(MIN_LEVEL);
  };

  const subtractLevel = () => {
    setLevel((val) => val <= MIN_LEVEL ? MIN_LEVEL : val - 1);
  };

  const addLevel = () => {
    setLevel((val) => val >= MAX_LEVEL ? MAX_LEVEL : val + 1);
  };

  return (
    <div>
      <h2 className="text-base font-light text-white uppercase">Level</h2>
      <p className="text-3xl text-white">{level}</p>
      <div className="my-2 flex items-center gap-x-2">
        <button
          type="button"
          onClick={subtractLevel}
          className="py-1 px-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
        >
          <HiChevronLeft className="h-4 w-4" />
          <span className="sr-only">Decrease the level by one</span>
        </button>
        <button
          type="button"
          onClick={resetLevel}
          className="py-1 px-2 text-white text-xs bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={addLevel}
          className="py-1 px-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600"
        >
          <HiChevronRight className="h-4 w-4" />
          <span className="sr-only">Increase the level by one</span>
        </button>
      </div>
    </div>
  );
}
