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
  console.log(name);
  return (
    <Input
      label={label}
      type="text"
      name={name}
      {...(register
        ? register(name, { required: requiredError, pattern, valueAsNumber })
        : {})}
      error={errors}
      {...rest}
    />
  );
}
