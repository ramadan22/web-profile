export type OptionTypes = {
  value: string | number;
  text: string;
}

// export type OptionsTypes = OptionTypes[];

export type SelectOptionsTypes = {
  // options: OptionsTypes;
  id?: number | null;
  selected: OptionTypes | null;
  onChange: (value: OptionTypes | null) => void;
}
