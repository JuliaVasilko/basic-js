const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  list: [],
   
  getLength() {
    return this.list.length;
  },
  addLink(value) {
    this.list.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position < 1 || position > this.list.length) {
      this.list = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.list.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this.list.reverse();
    return this;
  },
  finishChain() {
    const res = this.list.map((elem) => `( ${elem} )`).join('~~');
    this.list = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
