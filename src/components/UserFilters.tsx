import { FC, useMemo } from "react";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import { UserType } from "@/types";

const TYPE_OPTIONS = [
  { value: null, label: "All" },
  { value: UserType.Recipient, label: "Recipient" },
  { value: UserType.Shipper, label: "Shipper" },
  { value: UserType.Transporter, label: "Transporter" },
];

type Props = {
  userType: UserType | null;
  minAge: number | null;
  maxAge: number | null;
  favoriteOnly: boolean;
  onChangeFilter: (filters: {
    type: UserType | null;
    minAge: number | null;
    maxAge: number | null;
    favoriteOnly: boolean;
  }) => void;
};

const UserFilters: FC<Props> = ({
  userType,
  minAge,
  maxAge,
  favoriteOnly,
  onChangeFilter,
}) => {
  const userTypeSelectedOption = useMemo(
    () => TYPE_OPTIONS.find((option) => option.value === userType),
    [userType]
  );

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full flex-col justify-center gap-2 md:flex-row md:items-center">
        <Select
          options={TYPE_OPTIONS}
          selectedOption={userTypeSelectedOption}
          onChange={(option) => {
            onChangeFilter({
              type: option.value,
              minAge,
              maxAge,
              favoriteOnly,
            });
          }}
          label="Select a number"
        />
        <Input
          label="Minimum age"
          value={minAge ?? ""}
          type="number"
          onChange={(event) => {
            onChangeFilter({
              type: userTypeSelectedOption?.value ?? null,
              minAge: Number(event.target.value) || null,
              maxAge,
              favoriteOnly,
            });
          }}
          onBlur={(event) => {
            if (maxAge !== null && Number(event.target.value) >= maxAge) {
              onChangeFilter({
                type: userTypeSelectedOption?.value ?? null,
                minAge: null,
                maxAge,
                favoriteOnly,
              });
            }
          }}
        />
        <Input
          label="Maximum age"
          value={maxAge ?? ""}
          type="number"
          onChange={(event) => {
            onChangeFilter({
              type: userTypeSelectedOption?.value ?? null,
              minAge,
              maxAge: Number(event.target.value) || null,
              favoriteOnly,
            });
          }}
          min={minAge ?? undefined}
          onBlur={(event) => {
            if (minAge !== null && Number(event.target.value) <= minAge) {
              onChangeFilter({
                type: userTypeSelectedOption?.value ?? null,
                minAge,
                maxAge: null,
                favoriteOnly,
              });
            }
          }}
        />
      </div>
      <div>
        <Switch
          enabled={favoriteOnly}
          onChange={(enabled) => {
            onChangeFilter({
              type: userTypeSelectedOption?.value ?? null,
              minAge,
              maxAge,
              favoriteOnly: enabled,
            });
          }}
          label="Favorite only"
        />
      </div>
    </div>
  );
};

export default UserFilters;
