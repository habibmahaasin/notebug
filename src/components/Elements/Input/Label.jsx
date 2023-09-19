const LabelInput = (props) => {
  const { label } = props;

  return (
    <span className="mt-4 block text-sm font-medium text-slate-700">{label}</span>
  );
};

export default LabelInput;
