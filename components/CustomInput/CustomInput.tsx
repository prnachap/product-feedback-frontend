import { Fragment } from "react";
import { useField } from "formik";
import { isEmpty } from "lodash";

type CustomInputProps = {
  name: string;
  label?: string;
  type?: string;
  description?: string;
};

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, description, ...otherProps } = props;
  const [field, meta] = useField(otherProps);
  const { touched, error } = meta;
  const className = `bg-[#F7F8FD] px-6 py-2 w-full outline-1 rounded-md  text-sm text-american-blue-100 font-normal ${
    touched && !isEmpty(error) ? "outline-jasper" : "outline-none"
  } ${
    touched && !isEmpty(error) ? "outline-jasper" : "focus:outline-indigo-1000"
  }  transition-all`;
  return (
    <Fragment>
      <label htmlFor={label} className="input-label">
        {label}
      </label>
      <span className="input-description">{description}</span>
      <input
        id={label}
        {...field}
        {...otherProps}
        autoComplete="off"
        className={className}
      />
      {meta.error ? (
        <span className="text-sm text-jasper">Can&apos;t be empty</span>
      ) : null}
    </Fragment>
  );
};

export default CustomInput;
