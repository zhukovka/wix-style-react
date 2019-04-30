import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface TimeInputDriver extends BaseDriver {
  getValue(): string;
  isDisabled(): boolean;
  clickTickerUp(): void;
  clickTickerDown(): void;
  isAmPmIndicatorExist(): boolean;
  toggleAmPmIndicator(): void;
  getAmPmIndicatorText(): string;
  isRtl(): boolean;
  setValue(value: string): void;
  blur: () => void;
}
