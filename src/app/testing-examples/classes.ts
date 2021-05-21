export class Utility {

  /**
   * Find the largest number in an array
   */
  findMax(array: number[]) {
    return Math.max(...array);
  }

  /**
   * Sorts an array
   */
  sortArray(array: number[]) {
    return array.sort((a, b) => a - b);
  }

  /**
   * Reverses a string
   */
  reverseWord(word: string) {
    return word.split('').reverse().join('');
  }

  /**
   * Navitates to an specific url
   */
  navigateTo(url: string) {
    history.pushState(null, '', url);
  }
}


export class Stack<T> {
  items: T[] = [];

  /**
   * Pushes an element at the top of the stack
   */
  push(item: T) {
    this.items.unshift(item);
  }

  /**
   * Removes and returns the most recently added element
   */
  pop() {
    const [topItem] = this.items.splice(0, 1);
    return topItem;
  }

  /**
   * Returns the element on the top of the stack but does not remove it.
   */
  peek() {
    return this.items[0];
  }

  /**
   * Returns true if the stack is empty, otherwise false.
   */
  isEmpty () {
    return this.items.length === 0;
  }
}
