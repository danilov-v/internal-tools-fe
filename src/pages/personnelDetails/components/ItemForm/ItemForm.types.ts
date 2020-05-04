import { OptionType } from 'components/Select';

export type ItemFormState = {
  comment: string;
  typeId: string;
};

export type ItemFormProps = {
  onFormClose: () => void;
  onSubmit: (comment: string, typeId: number) => void;
  type: 'promotion' | 'penalty';
  types: OptionType[];
};
