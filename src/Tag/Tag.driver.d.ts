import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface TagDriver extends BaseDriver {
    isTiny(): boolean;
    isSmall(): boolean;
    isMedium(): boolean;
    isLarge(): boolean;
    isStandardTheme(): boolean;
    isWarningTheme(): boolean;
    isErrorTheme(): boolean;
    isRemovable(): boolean;
    removeTag(): Promise<void>;
    click(): void;
    isThumbExists(): boolean;
    isDisabled(): boolean;
    getLabel(): string;
}
