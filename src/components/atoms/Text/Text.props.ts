import {ReactNode} from 'react';

export interface TextProps {
    varient?: string;
    children: ReactNode | string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    margin?: string;
}
