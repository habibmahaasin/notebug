import MainLayout from "../components/Layouts/MainLayout";
import FormNotes from "../components/Fragments/FormNotes";
import NoteList from "../components/Fragments/NoteList";
import AccordionList from "../components/Elements/Accordion"

const list_notes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
]

const Notes = () => {
  return (
    <MainLayout>
      <div className="min-h-[100px] p-2">
        <FormNotes />
      </div>
      <div className="min-h-[100px] p-2">
        <NoteList>
          {list_notes.map((note) =>{
            return (
              <AccordionList title={note.title} key={note.id} id={note.id}>
                <p className="text-sm text-gray-600">
                  {note.body}
                </p>
              </AccordionList>
            )
          })}
        </NoteList>
      </div>
    </MainLayout>
  );
};

export default Notes;
