import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

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

      <div className="flex justify-between items-center mb-4 align-middle">
        <Input formType="input" placeholder="Search" name="title" />
        <Button style="ml-4 bg-teal-700 hover:bg-teal-800 text-sm text-white py-2 px-4 rounded">
          Search
        </Button>
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
        <TabsBody>{children}</TabsBody>
      </Tabs>
    </>
  );
};

export default NoteList;
