import { isEmpty } from "lodash";

export const getDynamicClassNames = ({
  touched,
  error,
}: {
  touched: boolean;
  error: string | undefined;
}) => {
  return `bg-[#F7F8FD] px-6 py-2 w-full outline-1 rounded-md  text-sm text-american-blue-100 font-normal ${
    touched && !isEmpty(error) ? "outline-jasper" : "outline-none"
  } ${
    touched && !isEmpty(error) ? "outline-jasper" : "focus:outline-indigo-1000"
  }  transition-all`;
};
