import Node from './Node';

const Root = ({ root, rightChild, leftChild }) => {
  return (
    <div>
      <div className="relative">
        {!root.parent && (
          <>
            <span className="bg-white p-4 rounded-full text-black text-lg  font-extrabold">
              {root.value}
            </span>
            {root.children.map((item, index) => {
              return <Node key={index} data={item} index={index}/>;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Root;
