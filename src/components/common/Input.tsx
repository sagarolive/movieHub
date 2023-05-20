import React from "react";

//ThirdParty imports
import { ErrorMessage, Field, FieldProps } from "formik";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ id, label, name, type }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }: FieldProps) => (
        <div className="relative cursor-pointer">
          <input
            type={type}
            id={id}
            className="
  block
  rounded-md
  px-6
  pt-6
  pb-1
  w-full
  text-md
text-neutral-800
bg-neutral-200
  appearance-none
  focus:outline-none
  focus:ring-0
  peer
  invalid:border-b-1
  "
            placeholder=" "
            {...field}
          />
          <label
            htmlFor={id}
            className="absolute 
  text-md
text-zinc-800
  duration-150 
  transform 
  -translate-y-3 
  scale-75 
  top-4 
  z-10 
  origin-[0] 
  left-6
  peer-placeholder-shown:scale-100 
  peer-placeholder-shown:translate-y-0 
  peer-focus:scale-75
  peer-focus:-translate-y-3"
          >
            {label}
          </label>
          <span className="absolute -bottom-6 text-red-400">
            <ErrorMessage name={name} render={(err) => <small>{err}</small>} />
          </span>
        </div>
      )}
    </Field>
  );
};

export default Input;
