import { memo, Suspense, useState } from 'react';

import { TabButton } from './TabButton';

import type { TabsProps } from './types';

const TabContent = memo(
  ({ Content }: { Content: React.LazyExoticComponent<() => JSX.Element> }) => {
    return <div className="p-4">{<Content />}</div>;
  }
);

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [renderedTabs, setRenderedTabs] = useState<Set<number>>(new Set([0]));

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    setRenderedTabs(prev => new Set(prev).add(index));
  };

  return (
    <div>
      <div className="flex items-center gap-2 px-4">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            isActiveTab={activeTab === index}
            onClick={() => handleTabClick(index)}
            label={tab.label}
          />
        ))}
      </div>

      <div>
        {tabs.map((tab, index) =>
          renderedTabs.has(index) ? (
            <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
              <Suspense fallback={<div>Loading...</div>}>
                <TabContent Content={tab.content} />
              </Suspense>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export { Tabs };
