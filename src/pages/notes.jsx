import MainLayout from "../components/Layouts/MainLayout";
import FormNotes from "../components/Fragments/FormNotes";
import NoteList from "../components/Fragments/NoteList";
import AccordionList from "../components/Elements/Accordion";
import { TabPanel } from "@material-tailwind/react";
import { useState } from "react";
import Button from "../components/Elements/Button";

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
        <NoteList>
          {notes.map((note) => {
            return (
              <TabPanel
                className="!p-0"
                value={note.archived ? "archive" : "notes"}
                key={note.id}
              >
                <AccordionList title={note.title} id={note.id}>
                  <span className="text-xs text-gray-500 mb-2">
                    Created : {note.createdAt}
                  </span>
                  <p className="text-sm text-gray-600">{note.body}</p>
                  <div className="flex justify-end mt-2 gap-2">
                    <Button
                      style="bg-yellow-700 hover:bg-yellow-800 text-sm text-white py-1 px-4 rounded-full"
                      onClick={() => handleArchive(note.id)}
                    >
                      {note.archived ? "Unarchive" : "Archive"}
                    </Button>
                    <Button
                      style="bg-red-700 hover:bg-red-900 text-sm text-white py-1 px-4 rounded-full"
                      onClick={() => handleDelete(note.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </AccordionList>
              </TabPanel>
            );
          })}
        </NoteList>
      </div>
    </MainLayout>
  );
};

export default Notes;
