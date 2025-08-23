import { lazy } from 'react';
  
import { Marker } from '@/components/marker/Marker';
import { Tabs } from '@/components/Tabs/Tabs';
import { Button } from '@/components/Button';

import type { Marker as IMarker } from '@/components/types';
import type { MarkerProps } from './types';
import { generateId } from './utils';

const WorkLogTab = lazy(() => import('@/components/Tabs/WorklogTab'));        
        
const initialMarkers: MarkerProps[] = [{ id: 1, hour: 0, minute: 0, task: '' }];

function Sidepanel() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-white border-b">
        <h1 className="text-xl font-semibold text-gray-800">WorkLog</h1>
      </div>

      {/* Content Area */}
      <div className="p-4 overflow-y-auto scroll-gutter">
        <Tabs tabs={[{ label: 'Worklog', content: WorkLogTab }]} />
        
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex flex-col justify-center items-center gap-3">
              {markers.map((marker, index) => (
                <Marker
                  index={index}
                  key={marker.id}
                  id={marker.id}
                  hour={marker.hour}
                  minute={marker.minute}
                  task={marker.task}
                  handleUpdateMarker={handleUpdateMarker}
                  handleRemoveMarker={() => handleRemoveMarker(marker.id)}
                />
              ))}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="mt-3 space-y-2">
              <Button
                label="Adicionar marcador"
                onClick={handleAddMarker}
                btnClassName="text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              />
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex-1 mt-3 space-y-2">
              <div className="text-black text-center text-1xl">
                <b>Tempo ocupado: </b>
                {totalTime}
              </div>
              <div className="text-black text-center text-1xl">
                <b>Tempo ocupado em decimal: </b>
                {totalTimeDecimal}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Sidepanel };
