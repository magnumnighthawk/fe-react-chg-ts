import { ChangeEvent, FormEvent, useState } from 'react';
import FormField from 'components/form-field';
import { FormControl, FormHelperText, Button } from '@material-ui/core';
import { TextFields, LenderFields } from 'lib/types';
import { ButtonLoader } from 'lib/global-styles';
import { ButtonWrapper } from './styles';

type FormProps = {
  fields: (TextFields | LenderFields)[];
  onSubmit: Function;
};

export default function Form({ fields, onSubmit }: FormProps) {
  const [formValues, setFormValues] = useState<any>({});
  const [formTouched, setFormTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const requiredFields = fields.reduce((acc: string[], fieldItem) => {
    if (typeof fieldItem === 'string') {
      acc.push(fieldItem);
    } else if (fieldItem.required) {
      acc.push(fieldItem.name);
    }
    return acc;
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormTouched(true);
    if (
      requiredFields.filter(
        (fieldItem) => !Object.keys(formValues).includes(fieldItem),
      ).length === 0
    ) {
      setSubmitting(true);
      await onSubmit(formValues);
    }
  };

  const handleFieldChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name } = target;
    const value =
      target.type === 'checkbox' ? target.checked : (target.value as string);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form noValidate onSubmit={handleFormSubmit}>
      {fields.map((fieldItem) => {
        const name = typeof fieldItem === 'string' ? fieldItem : fieldItem.name;
        const required = typeof fieldItem === 'string' || fieldItem.required;
        const type = typeof fieldItem === 'string' ? 'text' : fieldItem.type;
        const options =
          typeof fieldItem !== 'string' && type === 'select'
            ? fieldItem.options
            : undefined;

        return (
          <FormControl
            key={name}
            margin="normal"
            required={required}
            error={required && formTouched && !formValues[name]}
            fullWidth
          >
            <FormField
              name={name}
              type={type}
              value={formValues[name]}
              selectOptions={options}
              handleChange={handleFieldChange}
            />
            <FormHelperText id={`${name}-helper`}>required</FormHelperText>
          </FormControl>
        );
      })}
      <ButtonWrapper>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={submitting}
        >
          Submit
          {submitting && <ButtonLoader />}
        </Button>
      </ButtonWrapper>
    </form>
  );
}
