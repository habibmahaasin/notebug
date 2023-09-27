import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Button from "../Elements/Button";
import AccordionList from "../Elements/Accordion";
import moment from "moment";

const AccordionSection = (props) => {
  const { content, handleArchive, handleDelete } = props;

  return (
    <>
      <AccordionList title={content.title} id={content.id} key={content.id}>
        <span className="text-xs text-gray-500 mb-2">
          Created : {moment(`${content.createdAt}`).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </span>
        <p className="text-sm text-gray-600">{content.body}</p>
        <div className="flex justify-end mt-2 gap-2">
          <Button
            style="bg-yellow-700 hover:bg-yellow-800 text-sm text-white py-1 px-4 rounded-full"
            onClick={() => handleArchive(content.id)}
          >
            {content.archived ? "Unarchive" : "Archive"}
          </Button>
          <Button
            style="bg-red-700 hover:bg-red-900 text-sm text-white py-1 px-4 rounded-full"
            onClick={() => handleDelete(content.id)}
          >
            Delete
          </Button>
        </div>
      </AccordionList>
    </>
  );
};

const NoteList = (props) => {
  const { children, notes, archived, handleArchive, handleDelete } = props;

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
          <TabPanel className="!p-0" value="notes">
            {notes.length > 0 ? (
              <div>
                {notes.map((note) => {
                  return (
                    <>
                      <AccordionSection
                        content={note}
                        handleArchive={handleArchive}
                        handleDelete={handleDelete}
                      />
                    </>
                  );
                })}
              </div>
            ) : (
              <div>
                <p className="text-md text-gray-600 font-bold mt-4 text-center">No notes found.</p>
              </div>
            )}
          </TabPanel>

          <TabPanel className="!p-0" value="archive">
            {archived.length > 0 ? (
              <div>
                {archived.map((archv) => {
                  return (
                    <>
                      <AccordionSection
                        content={archv}
                        handleArchive={handleArchive}
                        handleDelete={handleDelete}
                      />
                    </>
                  );
                })}
              </div>
            ) : (
              <div>
                <p className="text-md text-gray-600 font-bold mt-4 text-center">No notes archived.</p>
              </div>
            )}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
};

export default NoteList;
