const NoteList = (props) => {
  const {children} = props;

  return (
    <>
      <div className="header-list mb-4">
        <h4 className="font-bold text-xl">NOTE LIST</h4>
        <span className="text-sm text-gray-600">
          Click title to see notes content.
        </span>
      </div>
      {children}
    </>
  );
};

export default NoteList;
