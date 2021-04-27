import { ChangeEventHandler } from 'react';
import {
  // Input,
  // InputLabel,
  // Select,
  // MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

type InputProps = {
  name: string;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

export default function CheckboxInput({
  name,
  checked,
  handleChange,
}: InputProps) {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            checked={checked}
            onChange={handleChange}
            color="primary"
          />
        }
        label={name}
      />
    </>
  );
}
