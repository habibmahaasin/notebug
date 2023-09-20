import MainLayout from "../components/Layouts/MainLayout";
import FormNotes from "../components/Fragments/FormNotes";
import NoteList from "../components/Fragments/NoteList";
import AccordionList from "../components/Elements/Accordion";
import { TabPanel } from "@material-tailwind/react";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: true,
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
    }
    setNotes([...notes, newNote]);
  }
  
  return (
    <MainLayout>
      <div className="min-h-[100px] p-2">
        <FormNotes handleSave={handleSave}/>
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
                  <p className="text-sm text-gray-600">{note.body}</p>
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
