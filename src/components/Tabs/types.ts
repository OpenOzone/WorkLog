type TabConfig = {
  label: string;
  content: React.LazyExoticComponent<() => JSX.Element>;
};

export interface TabsProps {
  tabs: TabConfig[];
}
