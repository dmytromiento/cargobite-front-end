import { FC } from "react";
import { IoIosWarning } from "react-icons/io";

type Props = {
  message: string;
};

const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <section className="flex w-full items-center justify-center gap-2 text-lg">
      <IoIosWarning color="red" />
      {message}
    </section>
  );
};

export default ErrorMessage;
