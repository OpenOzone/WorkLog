import { MarkerRemover } from './MarkerRemover';
import { MarkerInputs } from './MarkerInputs';

import type { MarkerProps } from '../types';

function Marker(props: Readonly<MarkerProps>) {
  return (
    <div className="relative flex flex-row w-full rounded-l-lg shadow-lg">
      <MarkerInputs {...props} />

      {props.index !== 0 && <MarkerRemover handleRemove={props.handleRemoveMarker} />}
    </div>
  );
}

export { Marker };
