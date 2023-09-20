const InputText = (props) => {
  const { formType, name, placeholder,handleChangeContent } = props;

  if (formType === "textarea") {
    return (
      <textarea
        rows={8}
        name={name}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
        onChange={handleChangeContent}
        value={props.value}
      />
    );
  } else {
    return (
      <input
        type="text"
        name={name}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
        maxLength={20}
        onChange={handleChangeContent}
        value={props.value}
      />
    );
  }
};

export default InputText;
