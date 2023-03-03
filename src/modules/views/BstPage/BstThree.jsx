// Module
import Root from '@components/Tree/Root';

const BstThree = ({ listNode }) => {
  function _rightOrLeftChild(array, rol) {
    return array.filter(
      (item) => item[rol] === true && item.value !== 'Empty'
    )[0];
  }
  return (
    <>
      {listNode.map((node, index) => {
        const root = listNode[0];
        // const firstChild = root.children[0];
        // const secoundChild = root.children[1];

        return (
          <Root
            key={index}
            root={node}
            rightChild={node.right}
            leftChild={node.left}
          />
        );
      })}
    </>
  );
};

export default BstThree;
