import { ChangeEventHandler } from 'react';
import TextInput from 'components/input/text-input';
import Select from 'components/input/select';
import Checkbox from 'components/input/checkbox';

type FieldProps = {
  name: string;
  type: string;
  value: unknown;
  selectOptions?: string[];
  handleChange: ChangeEventHandler<any>;
};

export default function FormField({
  name,
  type,
  value,
  selectOptions,
  handleChange,
}: FieldProps) {
  if (type === 'text') {
    return (
      <TextInput
        name={name}
        value={typeof value === 'string' ? value : ''}
        handleChange={handleChange}
      />
    );
  } else if (type === 'select') {
    return (
      <Select
        name={name}
        value={typeof value === 'string' ? value : ''}
        handleChange={handleChange}
        options={selectOptions || []}
      />
    );
  } else if (type === 'checkbox') {
    return (
      <Checkbox name={name} checked={!!value} handleChange={handleChange} />
    );
  }
  return null;
}
