export type IconValueType =
  | 'Search'
  | 'ChevronDown'
  | 'Check'
  | 'CaretUp'
  | 'CaretLeft'
  | 'CaretRight'
  | 'CaretDown'
  | 'Setting'
  | 'User'
  | 'ChartLine'
  | 'Pencil'
  | 'Trash'
  | 'Close'
  | 'Calendar'
  | 'Plus'
  | 'Users'
  | 'Student'
  | 'Teacher'
  | 'School'
  | string;

export type IconType = {
  className?: string;
  type: IconValueType;
};
