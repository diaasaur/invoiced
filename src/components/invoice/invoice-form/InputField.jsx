import Input from '../../ui/input/Input';

export default function InputField({
  label,
  name,
  register,
  requiredError,
  pattern,
  valueAsNumber,
  errors,
  ...rest
}) {
  return (
    <Input
      label={label}
      type="text"
      {...(register
        ? register(name, { required: requiredError, pattern, valueAsNumber })
        : {})}
      error={errors}
      {...rest}
    />
  );
}
