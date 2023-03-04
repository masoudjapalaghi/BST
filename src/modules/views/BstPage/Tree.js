import { Component, createRef } from 'react';

export default class Tree extends Component {
  constructor() {
    super();
    this.root = null;
    this.startPosition = { x: 800, y: 44 };
    this.axisX = 350;
    this.axisY = 80;
    this.canvasRef = createRef();
    this.state = { ctx: null };
  }

  getPosition({ x, y }, isLeft = false) {
    return {
      x: isLeft ? x - this.axisX + y : x + this.axisX - y,
      y: y + this.axisY,
    };
  }

  componentDidMount() {
    this.setState({
      ctx: this.canvasRef.current.getContext('2d'),
    });
  }

  // add(value) {
  //   const newNode = new Node(value);
  //   if (this.root == null) {
  //     newNode.position = this.startPosition;
  //     this.root = newNode;
  //   } else {
  //     let node = this.root;
  //     while (node) {
  //       if (node.value == value) break;
  //       if (value > node.value) {
  //         if (node.right == null) {
  //           newNode.position = this.getPosition(node.position);
  //           node.right = newNode;
  //           break;
  //         }
  //         node = node.right;
  //       } else {
  //         if (node.left == null) {
  //           newNode.position = this.getPosition(node.position, true);
  //           node.left = newNode;
  //           break;
  //         }
  //         node = node.left;
  //       }
  //     }
  //   }
  // }

  // all(node) {
  //   if (node === undefined) return;
  //   else {
  //     console.log(node.value);
  //     this.all(node.left);
  //     this.all(node.right);
  //   }
  // }

  // getAll() {
  //   this.all(this.root);
  // }

  bfs() {
    const queue = [];
    const black = '#000';
    console.log(this.root);
    queue.push(this.root);

    while (queue.length !== 0) {
      const node = queue.shift();
      const { x, y } = node.position;

      // const color = "#" + ((1 << 24) * Math.random() | 0).toString(16)
      this.state.ctx.beginPath();
      this.state.ctx.arc(x, y, node.radius, 0, 2 * Math.PI);
      this.state.ctx.strokeStyle = black;
      this.state.ctx.fillStyle = '#fff';
      this.state.ctx.fill();
      this.state.ctx.stroke();
      this.state.ctx.strokeStyle = black;
      this.state.ctx.strokeText(node.value, x, y);

      node.children.forEach((child) => {
        const { x: x1, y: y1 } = child.position;
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(x, y + child.radius);
        this.state.ctx.lineTo(x1, y1 - child.radius);
        this.state.ctx.stroke();
        queue.push(child);
      });
    }
  }
  render() {
    // this.bfs();
    return (
      <canvas
        ref={this.canvasRef}
        id="myCanvas"
        width="1900"
        height="150"
        style={{ border: '1px solid #000000' }}
      />
    );
  }
}
