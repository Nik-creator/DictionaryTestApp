import type { ComponentType, ReactElement, ReactNode } from "react";
import { LazyExoticComponent } from "react";
import { LayoutProps } from "./layout";

type RouteType = {
  exact?: boolean;
  strict?: boolean;
  layout?: ComponentType<LayoutProps>
  path: string;
  component?: LazyExoticComponent<ComponentType>;
};

export type { RouteType };
