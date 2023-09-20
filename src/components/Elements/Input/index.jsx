import LabelInput from "./Label";
import InputText from "./Input";

const Input = (props) => {
  const { formType, label, name, placeholder, handleChangeContent, value } = props;

  return (
    <>
      <LabelInput label={label} />
      <InputText formType={formType} name={name} placeholder={placeholder} handleChangeContent={handleChangeContent} value={value} />
    </>
  );
};

export default Input;
