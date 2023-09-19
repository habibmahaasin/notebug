import Button from "../Elements/Button";
import Input from "../Elements/Input";

const FormNotes = () => {
  const handleAddNote = (e) => {
    e.preventDefault();
    console.log("Add Note");
  }
  return (
    <form onSubmit={handleAddNote}>
      <Input 
        formType="input" 
        label="Title" 
        placeholder="Add Title"
        name = "title"
      />
      <Input 
        formType="textarea" 
        label="Note Content" 
        placeholder="Add Note Content"
        name = "body"
      />
      <div className="mt-4 text-right">
        <Button 
          style="bg-teal-700 hover:bg-teal-900 text-white py-2 px-8 rounded-full"
          type="submit" 
        />
      </div>
    </form>
  );
};

export default FormNotes;
