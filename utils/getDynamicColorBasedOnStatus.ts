export const getDynamicColorBasedOnStatus = ({ name }: { name: string }) => {
  switch (name?.toLowerCase()) {
    case "planned":
      return "bg-vivid-tangerine";
    case "in-progress":
      return "bg-purple-1000";
    case "live":
      return "bg-maya-blue";
  }
};
