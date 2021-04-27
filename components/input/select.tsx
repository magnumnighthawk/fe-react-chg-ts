import { ChangeEventHandler } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

type InputProps = {
  name: string;
  value: string;
  handleChange: ChangeEventHandler<any>;
  options: string[];
};

export default function SelectInput({
  name,
  value,
  handleChange,
  options,
}: InputProps) {
  return (
    <>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <Select
        id={name}
        name={name}
        labelId={name}
        value={value || ''}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options?.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
