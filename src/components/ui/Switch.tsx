import { Switch as HeadlessSwitch } from "@headlessui/react";
import { FC } from "react";

type Props = {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
};

const Switch: FC<Props> = ({ enabled, onChange, label }) => {
  return (
    <div className="flex gap-1.5">
      {!!label && <span className="text-gray-500">{label}</span>}

      <HeadlessSwitch
        checked={enabled}
        onChange={onChange}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block size-4 rounded-full bg-white transition`}
        />
      </HeadlessSwitch>
    </div>
  );
};

export default Switch;
