
const predicates = [
  element => element.getAttribute('data-class') === 'page-scrollable-content',
  element => element === document.body
];

export class TooltipContainerStrategy {
  constructor(appendTo, appendToParent) {
    this._ancestor = null;
    this._appendTo = appendTo;
    this._appendToParent = appendToParent;
  }

  _findAncestor(element) {
    while (element) {
      if (predicates.some(pred => pred(element))) { // eslint-disable-line
        break;
      }

      element = element.parentElement;
    }

    return element || document.body;
  }

  getContainer(element) {
    if (!document) {
      return null;
    }

    if (this._appendTo) {
      return this._appendTo;
    }

    if (this._appendToParent) {
      return element.parentElement;
    }

    if (!this._ancestor) {
      this._ancestor = this._findAncestor(element);
    }

    return this._ancestor;
  }
}
