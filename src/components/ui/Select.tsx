"use client";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";

import { SelectOption } from "@/types";

type Props<T = string> = {
  options: SelectOption<T>[];
  selectedOption?: SelectOption<T>;
  onChange: (option: SelectOption<T>) => void;
  label?: string;
};

const Select = <T,>({ options, selectedOption, onChange, label }: Props<T>) => {
  return (
    <Listbox value={selectedOption} onChange={onChange}>
      <div className="flex flex-col">
        {!!label && (
          <Listbox.Label className="text-gray-500">{label}</Listbox.Label>
        )}
        <div className="relative">
          <Listbox.Button className="relative w-full rounded border py-2 pl-3 pr-10 text-left focus-visible:outline-none md:max-w-xs">
            {selectedOption?.label ?? "---"}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white py-1 text-sm leading-4 focus-visible:outline-none md:max-w-xs">
              {options.map((option) => (
                <Listbox.Option
                  key={`${option.value}-${option.label}`}
                  value={option}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-pointer select-none p-3 focus-visible:outline-none",
                      { "bg-gray-100": active }
                    )
                  }
                >
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "block truncate",
                        selected ? "font-medium" : "font-normal"
                      )}
                    >
                      {option.label}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
};

export default Select;
