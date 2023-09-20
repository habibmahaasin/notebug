import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";

const NoteList = (props) => {
  const { children } = props;
  if (!children) return console.log("NoteList: children is required");

  return (
    <>
      <div className="header-list mb-4">
        <h4 className="font-bold text-xl">NOTE LIST</h4>
        <span className="text-sm text-gray-600">
          Click title to see notes content.
        </span>
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
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {children}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default NoteList;
