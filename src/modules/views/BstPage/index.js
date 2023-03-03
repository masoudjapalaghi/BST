import React, { useState } from 'react';
// Styles
import styles from './Bst.module.css';
// Module
import DataEntry from './BstDataEntry/DataEntry';
import BstThree from './BstThree';

const BstPage = () => {
  const [listNode, setListNode] = useState([]);
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.thirteen}>
          <div className="flex flex-col gap-4 items-center">
            <h2>BST</h2>
            <hr className="w-full  bg-blue-400" />
            <DataEntry setListNode={setListNode} />
          </div>
        </div>
      </div>
      <BstThree listNode={listNode} />
    </main>
  );
};

export default BstPage;
