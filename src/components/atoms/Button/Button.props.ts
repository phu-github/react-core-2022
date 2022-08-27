import {ReactNode} from 'react';

export interface ButtonProps {
  variant?: string;
  isActive?: boolean
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  linkIcon?:string;
  title?: string;
  onClick?: () => void;
}
