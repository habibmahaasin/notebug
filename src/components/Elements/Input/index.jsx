import LabelInput from "./Label";
import InputText from "./Input";

const Input = (props) => {
  const { formType, label, name, placeholder } = props;

  return (
    <>
      <LabelInput label={label} />
      <InputText formType={formType} name={name} placeholder={placeholder} />
    </>
  );
};

export default Input;
