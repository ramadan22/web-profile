import Icon from '@/components/icon';
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from './index';
import { DefaultSelectTypes } from './DefaultSelect.type';

const DefaultSelect = ({ value, options, onChange }: DefaultSelectTypes) => (
  <Select value={`${value}`} onValueChange={(payload) => onChange(payload)}>
    <SelectTrigger className="w-full [&[data-placeholder]>span]:text-gray-light">
      <SelectValue placeholder="Select Gender" />
      <Icon type="ChevronDown" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        {options.map((item) => (
          <SelectItem key={item.value} value={`${item.value}`}>{item.text}</SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default DefaultSelect;
