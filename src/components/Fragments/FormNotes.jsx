import Button from "../Elements/Button";
import Input from "../Elements/Input";

const FormNotes = () => {
  return (
    <form action="">
      <Input formType="input" label="Title" />
      <Input formType="textarea" label="Note Content" />
      <div className="mt-4 text-right">
        <Button />
      </div>
    </form>
  );
};

export default FormNotes;
