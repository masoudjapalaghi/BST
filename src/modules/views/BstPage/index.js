import React, { useEffect, useRef, useState } from 'react';
// Styles
import styles from './Bst.module.css';
// Module
import DataEntry from './BstDataEntry/DataEntry';
import BstTree from './BstTree';
import Tree from './Tree';

const BstPage = () => {
  const [listNode, setListNode] = useState([]);

  // var c = typeof document !== undefined && document.getElementById('myCanvas');
  // var ctx = c?.getContext('2d');
  // console.log(ctx);



  return (
    <div>
     
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
        <BstTree listNode={listNode} />
        <Tree listNode={listNode} />
      </main>
    </div>
  );
};

export default BstPage;
