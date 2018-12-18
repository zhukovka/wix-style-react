export class SpyOnHelper {
  spy; // public

  /**
   * @param  {object, method} spyOnArgs
   */
  constructor(...spyOnArgs) {
    this.spyOnArgs = spyOnArgs;
  }

  /**
   * Set up `jest.spyOn()` at beforeEach and do `spy.mockRestore()` at afetrEach.
   * @returns this SpyOnHelper
   */
  beforeAndAfterEach() {
    beforeEach(() => {
      this.mock();
    });

    afterEach(() => this.mockRestore());

    return this;
  }

  mockRestore() {
    this.spy.mockRestore();
    this.spy = undefined;
  }

  mock() {
    this.spy = jest.spyOn(...this.spyOnArgs);
  }
}
