import { useState, useEffect } from 'react';

import { Marker } from '@/components/Marker';
import { Button } from '@/components/Button';
import { MarkerProps } from './types';

const initialMarkers: MarkerProps[] = [{ id: 1, hour: 0, minute: 0 }];

function Sidepanel() {
  const [markers, setMarkers] = useState<MarkerProps[]>(initialMarkers);
  const [totalTime, setTotalTime] = useState<string>();
  const [totalTimeDecimal, setTotalTimeDecimal] = useState<string>();

  const calculateTotalTime = (format?: boolean) => {
    if (markers.length % 2 !== 0)
      return (setTotalTime('Valor inválido'), setTotalTimeDecimal('Valor inválido'));

    const totalList: number[] = [];

    markers.forEach((marker, idx) => {
      const hour = marker.hour;
      const minute = marker.minute / 60;
      const total = hour + minute;

      if (idx % 2 !== 0) {
        const previousMarker = markers[idx - 1];
        const previousHour = previousMarker.hour;
        const previousMinute = previousMarker.minute / 60;
        const previousTotal = previousHour + previousMinute;

        totalList.push(previousTotal - total);
      }
    });

    const sum = Math.abs(totalList.reduce((acc, curr) => acc + curr, 0)).toFixed(2);

    if (format) {
      const hours = Math.floor(Number(sum));
      const minutes = Math.round((Number(sum) - hours) * 60);

      return setTotalTime(`${hours}h ${minutes}m`);
    }

    setTotalTimeDecimal(`${sum.toString()}h`);
  };

  const handleAddMarker = () => {
    console.warn(markers[0]);

    setMarkers([...markers, { id: markers.length + 1, hour: 0, minute: 0 }]);

    calculateTotalTime();
  };

  const handleRemoveMarker = () => {
    if (markers.length <= 1) return;

    setMarkers(markers.slice(0, -1));

    calculateTotalTime();
  };

  const handleUpdateMarker = (id: number, hour: number, minute: number) => {
    setMarkers(markers.map(marker => (marker.id === id ? { ...marker, hour, minute } : marker)));
  };

  useEffect(() => {
    calculateTotalTime();
    calculateTotalTime(true);
  }, [markers]);

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-white border-b">
        <h1 className="text-xl font-semibold text-gray-800">WorkLog</h1>
      </div>

      {/* Content Area */}
      <div className="p-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex flex-col justify-center items-center">
              {markers.map(marker => (
                <Marker
                  key={marker.id}
                  id={marker.id}
                  hour={marker.hour}
                  minute={marker.minute}
                  handleUpdateMarker={handleUpdateMarker}
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
            <div className="mt-3 space-y-2">
              <Button
                label="Remover marcador"
                onClick={handleRemoveMarker}
                btnClassName="text-white bg-red-600 rounded-lg hover:bg-red-700"
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
