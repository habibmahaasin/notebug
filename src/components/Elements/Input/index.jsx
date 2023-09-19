import LabelInput from "./Label";
import InputText from "./Input";

const Input = (props) => {
    const { formType,label } = props;
    
    return (
        <>
            <LabelInput label={label} />
            <InputText formType={formType}/>
        </>
    );
}

export default Input;