import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';

export interface EditableSelectorProps extends WixComponentProps {
  title?: string;
  toggleType?: EditableSelectorToggleType;
  newRowLabel?: string;
  editButtonText?: string;
  onOptionAdded?: (data: {newTitle: string}) => void;
  onOptionEdit?: (data: {newTitle: string; index: number}) => void;
  onOptionDelete?: (data: {index: number}) => void;
  onOptionToggle?: (id: number) => void;
  options?: EditableSelectorOption[];
}

export default class EditableSelector extends WixComponent<
  EditableSelectorProps
> {}

export type EditableSelectorToggleType = 'checkbox' | 'radio';

export interface EditableSelectorOption {
  title: string;
  isSelected?: boolean;
}
