import {BaseDriver} from 'wix-ui-test-utils/driver-factory';

export interface EditableSelectorDriver extends BaseDriver {
  items: () => any[]; // todo: replace once Selector types is implemented
  isEditing: () => boolean;
  isEditingRow: () => boolean;
  isAddingRow: () => boolean;
  newRowButton: () => HTMLElement;
  deleteButtonAt: (index: number) => HTMLElement;
  editButtonAt: (index: number) => HTMLElement;
  addNewRow: (label: string) => void;
  editRow: (index: number, label: string) => void;
  deleteRow: (index: number) => void;
  startAdding: () => void;
  startEditing: (index: number) => void;
  clickApprove: () => void;
  clickCancel: () => void;
  title: () => string;
  toggleItem: (index: string) => void;
}
