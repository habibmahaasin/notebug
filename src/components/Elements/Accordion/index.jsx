import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const AccordionList = (props) => {
  const { title, children, id } = props;
  const [open, setOpen] = useState();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion
      open={open === id}
      className="mb-2 rounded-lg border border-teal-gray-200 px-4"
    >
      <AccordionHeader
        onClick={() => handleOpen(id)}
        className={`border-b-0 transition-colors ${
          open === id ? "text-teal-500 hover:!text-teal-700" : ""
        }`}
      >
        <h6 className="font-bold text-base text-md">{title}</h6>
      </AccordionHeader>
      <AccordionBody className="pt-0 text-base font-normal">
        {children}
      </AccordionBody>
    </Accordion>
  );
};

export default AccordionList;
