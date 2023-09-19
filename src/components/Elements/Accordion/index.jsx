import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const AccordionList = () => {
  const [open, setOpen] = useState();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
  return (
    <Accordion open={open === 1}>
      <AccordionHeader onClick={() => handleOpen(1)}>
        <h4 className="font-bold text-lg">What is Material Tailwind?</h4>
      </AccordionHeader>
      <AccordionBody>
        We&apos;re not always in the position that we want to be at. We&apos;re
        constantly growing. We&apos;re constantly making mistakes. We&apos;re
        constantly trying to express ourselves and actualize our dreams.
      </AccordionBody>
    </Accordion>
  );
};

export default AccordionList;
