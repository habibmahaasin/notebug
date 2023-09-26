import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Button from "../Elements/Button";
import AccordionList from "../Elements/Accordion";

const NoteList = (props) => {
  const { children, notes, handleArchive, handleDelete } = props;

  return (
    <>
      <div className="header-list mb-4">
        <h4 className="font-bold text-xl">NOTE LIST</h4>
        <span className="text-sm text-gray-600">
          Click title to see notes content.
        </span>
      </div>

      <div className="flex justify-between items-center mb-4 align-middle">
        {children}
      </div>

      <Tabs value="notes" className="max-w-[40rem]">
        <TabsHeader
          className="bg-transparent mb-4"
          indicatorProps={{
            className: "bg-gray-900/10 shadow-none !text-gray-900",
          }}
        >
          <Tab value="notes">Notes</Tab>
          <Tab value="archive">Archive</Tab>
        </TabsHeader>
        <TabsBody>
          {notes?.map((note) => {
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
        </TabsBody>
      </Tabs>
    </>
  );
};

export default NoteList;
