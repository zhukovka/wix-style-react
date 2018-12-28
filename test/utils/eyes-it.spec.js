import eyes from 'eyes.it';
import { eyesItInstance } from './eyes-it';

jest.mock('eyes.it');

describe('eyesItInstance', () => {
  it('should call the original module with default config', () => {
    const instance = eyesItInstance();
    const fn = jest.fn();

    instance.it('should do something', fn);

    expect(eyes.it).toHaveBeenCalledWith('should do something', fn, {
      enableSnapshotAtBrowserGet: false,
    });
  });

  it('should call the original module with predefined config', () => {
    const instance = eyesItInstance({ myConfigField: 'value' });
    const fn = jest.fn();

    instance.it('should do something', fn);

    expect(eyes.it).toHaveBeenCalledWith(
      'should do something',
      fn,
      expect.objectContaining({
        myConfigField: 'value',
      }),
    );
  });

  it('should allow overriding default config', () => {
    const instance = eyesItInstance({
      myConfigField: 'value',
      enableSnapshotAtBrowserGet: true,
    });
    const fn = jest.fn();

    instance.it('should do something', fn);

    expect(eyes.it).toHaveBeenCalledWith('should do something', fn, {
      myConfigField: 'value',
      enableSnapshotAtBrowserGet: true,
    });
  });

  it('should merge test-specific config', () => {
    const instance = eyesItInstance({ myConfigField: 'value' });
    const fn = jest.fn();

    instance.it('should do something', fn, { myAnotherConfigField: 'value' });

    expect(eyes.it).toHaveBeenCalledWith(
      'should do something',
      fn,
      expect.objectContaining({
        myConfigField: 'value',
        myAnotherConfigField: 'value',
      }),
    );
  });
});
