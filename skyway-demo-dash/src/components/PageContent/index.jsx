const PageContent = (props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 overflow-auto ">
      {props.children}
    </div>
  );
};

export default PageContent;
