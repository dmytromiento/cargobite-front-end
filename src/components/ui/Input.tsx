import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

type Props = {
  label?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<Props> = ({ label, ...inputProps }) => {
  return (
    <div className="flex flex-col">
      {!!label && <label className="text-gray-500">{label}</label>}
      <input
        className="rounded border px-3 py-2 text-left focus-visible:outline-none"
        {...inputProps}
      />
    </div>
  );
};

export default Input;
