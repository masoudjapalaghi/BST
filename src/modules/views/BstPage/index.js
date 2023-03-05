import React, { useState, useTransition } from 'react';
// Styles
import styles from './Bst.module.css';
// Module
import DataEntry from './BstDataEntry/DataEntry';
import BstTree from './BstTree';
import CanvasTree from './CanvasTree';
// Components
import DotPulse from '@components/Loading/DotPulse';
import Button from '@components/Button';

const BstPage = () => {
  const [listNode, setListNode] = useState([]);
  const [toggleModeTree, settoggleModeTree] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleToggleComponents = () => {
    settoggleModeTree((prev) => !prev);
  };

  return (
    <div>
      <main className={toggleModeTree ? styles.main : styles.mainSecondary}>
        <div className="flex flex-col gap-4 items-end">
          <div className={styles.thirteen}>
            <div className="flex flex-col gap-4 items-center">
              <h2>BST ({toggleModeTree ? 'Canvase' : 'Default'})</h2>
              <hr className="w-full  bg-blue-400" />
              <DataEntry
                setListNode={setListNode}
                startTransition={startTransition}
              />
            </div>
          </div>
          <div className="flex gap-4 items-start">
            {isPending ? <DotPulse /> : false}
            <Button onClick={handleToggleComponents} variant="primary">
              {toggleModeTree ? 'Default' : 'Canvase'}
            </Button>
          </div>
        </div>
        {toggleModeTree ? (
          <CanvasTree listNode={listNode} />
        ) : (
          <BstTree listNode={listNode} />
        )}
      </main>
    </div>
  );
};

export default BstPage;
