// Module
import Root from '@components/Tree/Root';

const BstTree = ({ listNode }) => {
  function _rightOrLeftChild(array, rol) {
    return array.filter(
      (item) => item[rol] === true && item.value !== 'Empty'
    )[0];
  }
  return (
    <div>
      {listNode.map((node, index) => {
        return (
          <Root
            key={index}
            root={node}
            rightChild={node.right}
            leftChild={node.left}
          />
        );
      })}
    </div>
  );
};

export default BstTree;
