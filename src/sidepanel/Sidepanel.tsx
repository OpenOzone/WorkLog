import { lazy } from 'react';

import { Tabs } from '@/components/Tabs/Tabs';

const WorkLogTab = lazy(() => import('@/components/Tabs/WorklogTab'));
const TesteTab = lazy(() => import('@/components/Tabs/TesteTab'));

function Sidepanel() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-white border-b">
        <h1 className="text-xl font-semibold text-gray-800">WorkLog</h1>
      </div>

      {/* Content Area */}
      <div className="p-4 overflow-y-auto scroll-gutter">
        <Tabs
          tabs={[
            { label: 'Worklog', content: WorkLogTab },
            { label: 'Teste', content: TesteTab },
          ]}
        />
      </div>
    </div>
  );
}

export { Sidepanel };
