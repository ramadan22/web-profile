export type OptionTypes = {
  value: string | number;
  text: string;
}

export type OptionsTypes = OptionTypes[];

export type DefaultSelectTypes = {
  value: string | number | undefined;
  options: OptionsTypes;
  onChange: (value: string) => void;
}
