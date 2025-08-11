import { IoCloseSharp } from 'react-icons/io5';

import type { MarkerRemoverProps } from './types';

function MarkerRemover({ handleRemove }: Readonly<MarkerRemoverProps>) {
  return (
    <div className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 rounded-full bg-red-500 z-50">
      <IoCloseSharp className="cursor-pointer text-white font-bold" onClick={handleRemove} />
    </div>
  );
}

export { MarkerRemover };
