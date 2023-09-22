import Button from "../Elements/Button";
import Input from "../Elements/Input";
import { useState } from "react";

const FormNotes = (props) => {
  const { handleSave } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeContent = (e) => {
    setBody(e.target.value);
  }

  const handleChaneTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleBtn = () => {
    handleSave(title, body);
    setTitle("");
    setBody("");
  }

  return (
    <form>
      <Input 
        formType="input" 
        label="Title" 
        placeholder="Add Title"
        name = "title"
        value = {title}
        handleChangeContent = {handleChaneTitle}
      />
      <Input 
        formType="textarea" 
        label="Note Content" 
        placeholder="Add Note Content"
        name = "body"
        value = {body}
        handleChangeContent = {handleChangeContent}
      />
      <div className="mt-4 text-right">
        <Button 
          style="bg-teal-700 hover:bg-teal-900 text-white py-2 px-8 rounded-full"
          // type="submit" 
          onClick= {handleBtn}
        >Save</Button>
      </div>
    </form>
  );
};

export default FormNotes;
