export interface TnavigationType {
  path: string;
  title: string;
  icon: React.JSX.Element | string;
  role: string[];
}

export type TCardProps = {
  title: string;
  number: number;
  icon: React.JSX.Element;
  color: string
};