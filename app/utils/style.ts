import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";
import {
  breakpointsTailwind,
  useBreakpoints as __useBreakpoints,
} from "@vueuse/core";

export const { cx, cva, compose } = defineConfig({
  hooks: {
    onComplete(className) {
      return twMerge(className);
    },
  },
});

export function spacing(value: number) {
  return `calc(var(--spacing) * ${value})`;
}

export function useBreakpoints() {
  return __useBreakpoints(breakpointsTailwind);
}
