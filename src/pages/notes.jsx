import MainLayout from "../components/Layouts/MainLayout";
import FormNotes from "../components/Fragments/FormNotes";
import NoteList from "../components/Fragments/NoteList";
import AccordionList from "../components/Elements/Accordion";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const list_notes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 2,
    title: "Babel Archived",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: true,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 3,
    title: "Bael",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
];

const Notes = () => {
  return (
    <MainLayout>
      <div className="min-h-[100px] p-2">
        <FormNotes />
      </div>

      <div className="min-h-[100px] p-2 mt-9">
        <Tabs value="notes" className="max-w-[40rem]">
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-gray-900/10 shadow-none !text-gray-900",
            }}
          >
            <Tab value="notes">Notes</Tab>
            <Tab value="archive">Archive</Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value="notes">
              <NoteList>
                {list_notes.map((note) => {
                  if (note.archived === false) {
                    return (
                      <AccordionList
                        title={note.title}
                        key={note.id}
                        id={note.id}
                      >
                        <p className="text-sm text-gray-600">{note.body}</p>
                      </AccordionList>
                    );
                  }
                })}
              </NoteList>
            </TabPanel>
            <TabPanel value="archive">
              <NoteList>
                {list_notes.map((note) => {
                  if (note.archived === true) {
                    return (
                      <AccordionList
                        title={note.title}
                        key={note.id}
                        id={note.id}
                      >
                        <p className="text-sm text-gray-600">{note.body}</p>
                      </AccordionList>
                    );
                  }
                })}
              </NoteList>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Notes;
