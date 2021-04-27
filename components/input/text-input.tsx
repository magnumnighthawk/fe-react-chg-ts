import { ChangeEventHandler } from 'react';
import { Input, InputLabel } from '@material-ui/core';

type InputProps = {
  name: string;
  value: string;
  handleChange: ChangeEventHandler;
};

export default function TextInput({ name, value, handleChange }: InputProps) {
  return (
    <>
      <InputLabel htmlFor={name}>{name.replace(/_/g, ' ')}</InputLabel>
      <Input id={name} name={name} value={value} onChange={handleChange} />
    </>
  );
}
