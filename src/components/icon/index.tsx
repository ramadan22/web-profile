'use client';

import { FC } from 'react';

import { IconType, IconValueType } from './Icon.type';
import { cn } from '@/lib/classnames';

import SearchIcon from '@/assets/icons/Search.svg';
import ChevronDown from '@/assets/icons/ChevronDown.svg';
import Check from '@/assets/icons/Check.svg';
import CaretUp from '@/assets/icons/CaretUp.svg';
import CaretLeft from '@/assets/icons/CaretLeft.svg';
import CaretDown from '@/assets/icons/CaretDown.svg';
import CaretRight from '@/assets/icons/CaretRight.svg';
import Settings from '@/assets/icons/Settings.svg';
import User from '@/assets/icons/User.svg';
import ChartLine from '@/assets/icons/ChartLine.svg';
import Pencil from '@/assets/icons/Pencil.svg';
import Trash from '@/assets/icons/Trash.svg';
import Close from '@/assets/icons/Close.svg';
import Calendar from '@/assets/icons/Calendar.svg';
import Plus from '@/assets/icons/Plus.svg';
import Users from '@/assets/icons/Users.svg';
import Student from '@/assets/icons/Student.svg';
import Teacher from '@/assets/icons/Teacher.svg';
import School from '@/assets/icons/School.svg';

const IconList = new Map([
  ['Search', <SearchIcon />],
  ['ChevronDown', <ChevronDown />],
  ['Check', <Check />],
  ['CaretUp', <CaretUp />],
  ['CaretLeft', <CaretLeft />],
  ['CaretDown', <CaretDown />],
  ['CaretRight', <CaretRight />],
  ['Settings', <Settings />],
  ['User', <User />],
  ['ChartLine', <ChartLine />],
  ['Pencil', <Pencil />],
  ['Trash', <Trash />],
  ['Close', <Close />],
  ['Calendar', <Calendar />],
  ['Plus', <Plus />],
  ['Users', <Users />],
  ['Student', <Student />],
  ['Teacher', <Teacher />],
  ['School', <School />],
]);

const getIcon = (type: IconValueType): JSX.Element => IconList.get(type) as JSX.Element;

const Icon: FC<IconType> = ({ type, className = '' }) => (
  <div>
    <i className={cn('[&>svg]:h-auto [&>svg]:w-full w-6', className)}>
      {getIcon(type)}
    </i>
  </div>
);

export default Icon;
