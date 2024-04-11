import { FC } from "react";

type Props = {
  label: string;
  text: string;
};

const LabeledText: FC<Props> = ({ label, text }) => {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500">{label}</span>
      <span className="text-lg">{text}</span>
    </div>
  );
};

export default LabeledText;
