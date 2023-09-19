const InputText = (props) => {
  const { formType } = props;

  if (formType === "textarea") {
    return (
      <textarea
        rows={8}
        name="text"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="input your notes"
      />
    );
  } else {
    return (
      <input
        type="text"
        name="text"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="input your title"
      />
    );
  }
};

export default InputText;
