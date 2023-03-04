const Node = ({ data, isChild }) => {
  const renderRoot = (children) => {
    if (children) {
      return children.map((child, index) => {
        return <Node key={index} data={child} isChild />;
      });
    }

    return null;
  };

  const isFill = data.value !== 'Empty';

  return (
    <>
      {data.isRight
        ? isFill && (
            <div className="absolute top-24 left-24">
              <div className=" relative ">
                <span className="absolute border-t border-dashed inline-block w-20  bg-transparent  bottom-14 -left-16 rotate-45" />
                <span className="bg-white p-4 rounded-full text-black text-lg  font-extrabold ">
                  {data.value}
                </span>
              </div>
              {renderRoot(data.children)}
            </div>
          )
        : isFill && (
            <div className="absolute top-24 right-24">
              <div className=" relative">
                <span className="absolute border-t border-dashed inline-block w-[75px] h-1 bg-transparent bottom-14 left-10 -rotate-45" />
                <span className="bg-white p-4 rounded-full text-black text-lg  font-extrabold">
                  {data.value}
                </span>
              </div>
              {renderRoot(data.children)}
            </div>
          )}
    </>
  );
};

export default Node;
