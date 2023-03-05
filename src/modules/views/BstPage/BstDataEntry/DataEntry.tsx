import { ChangeEvent, FC, memo, useTransition } from 'react';
// Import compoents
import { Input } from '@components/Forms';
// utils
import { createNodes } from './binaryTree';
import { DeleteDuplicateInArray } from 'src/common/utils';

type PropDataEntry = {
  setListNode: (value: object[]) => void;
  startTransition: (value: Function ) => void;
};

const DataEntry: FC<PropDataEntry> = ({ setListNode, startTransition }) => {
  
  console.log('re-render');

  const getInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    var arr: string[] = value.split(' ');
    var num: string[] = [];
    for (var i = 0; i < arr.length; i++) {
      if (!isNaN(+arr[i]) && arr[i] != '\n') {
        num.push(arr[i]);
      }
    }
    const removeDublicate = DeleteDuplicateInArray(num);

    startTransition(() => {
      var root = createNodes(removeDublicate);
      setListNode(root);
    });
  };

  return (
    <Input label="Number" width="full" variant="primary" onChange={getInput} />
  );
};

export default memo(DataEntry);
