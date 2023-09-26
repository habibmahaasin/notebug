import MainLayout from "../components/Layouts/MainLayout";
import FormNotes from "../components/Fragments/FormNotes";
import NoteList from "../components/Fragments/NoteList";
import { useState } from "react";
import Input from "../components/Elements/Input";

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleSave = (title, body) => {
    if (!title || !body) return;
    const date = new Date();
    const newNote = {
      id: notes.length + 1,
      title: title,
      body: body,
      archived: false,
      createdAt: date.toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const handleArchive = (id) => {
    if (notes.find((note) => note.id === id)) {
      const newNotes = notes.map((note) => {
        if (note.id === id) {
          if (note.archived) {
            note.archived = false;
          } else {
            note.archived = true;
          }
        }
        return note;
      });
      setNotes(newNotes);
    }
  };

  const handleDelete = (id) => {
    if (notes.find((note) => note.id === id)) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-[100px] p-2">
        <FormNotes handleSave={handleSave} />
      </div>

      <div className="min-h-[100px] p-2 mt-9">
        <NoteList
          notes={notes.filter((note) => note.title.toLowerCase().includes(search))}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        >
          <Input
            formType="input"
            placeholder="Search"
            name="title"
            handleChangeContent={(e) => setSearch(e.target.value)}
          />
        </NoteList>
      </div>
    </MainLayout>
  );
};

export default Notes;
