const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="min-h-screen">
        <header className="header">
          <div className="flex justify-between bg-teal-800 p-4 mb-4">
            <div className="container-mx-auto px-4 text-right text-white mt-1.5">
              <h4 className="font-bold text-lg">NOTE-BUG</h4>
            </div>
            <div className="container-mx-auto px-4 text-right text-white mt-1.5">
              <div className="flex justify-end gap-4">
                <h4 className="bg-teal-600 px-4 py-1 rounded-full text-md">
                  Notes
                </h4>
                <h4 className="bg-teal-600 px-4 py-1 rounded-full text-md">
                  Archive
                </h4>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto p-2">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
