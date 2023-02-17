declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

type FeedbackType = {
  title: string;
  description: string;
  category: string;
  upVotes: number;
  comments: number;
};
