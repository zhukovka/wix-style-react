import React from 'react';
import { enhanceUnidriver } from './enhance-unidriver';
import { createRendererWithUniDriver, cleanup } from '../../test/utils/unit';

describe('EnhancedUniDriver', () => {
  afterEach(() => {
    cleanup();
  });
  const render = createRendererWithUniDriver(base => base);

  it('should add extra methods', async () => {
    const { driver } = render(
      <div>
        <div data-hook="hook1">Hello 1</div>
        <div data-hook="hook2">Hello 2</div>
      </div>,
    );
    const enhanced = enhanceUnidriver(driver, (base, enhance) => ({
      dataHook: dataHook => {
        return enhance(base.$(`[data-hook=${dataHook}]`));
      },
      foo: () => 'foo',
    }));

    // TODO: extract expections to different `it` tests
    expect(typeof enhanced.dataHook).toEqual('function');
    expect(enhanced.foo()).toEqual('foo');
    expect(await enhanced.dataHook('hook1').exists()).toBe(true);
    expect(enhanced.dataHook('hook1').foo()).toEqual('foo');
    expect(typeof enhanced.dataHook('hook2').dataHook).toEqual('function');
    expect(await enhanced.$(`[data-hook=hook1]`).text()).toEqual('Hello 1');
    expect(
      await enhanced
        .$$(`[data-hook*=hook]`)
        .get(0)
        .text(),
    ).toEqual('Hello 1');
    expect(
      await enhanced
        .$$(`[data-hook*=hook]`)
        .get(1)
        .text(),
    ).toEqual('Hello 2');
  });
});
