import { FunctionComponent, ReactNode } from "react";

export type FC<T = {}> = FunctionComponent<T & { children?: ReactNode }>;
