import { Switch } from '@headlessui/react';

interface IProps {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SpeechSwitch({ enabled, setEnabled }: IProps) {
  return (
    <div className="absolute top-0 right-0">
      <div className="p-4">
        <label className="text-white text-base flex items-center gap-x-2">
          <span>Text to Speech</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-blue-500' : 'bg-gray-700'}
              relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use text to speech</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
                pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
        </label>
      </div>
    </div>
  );
}
