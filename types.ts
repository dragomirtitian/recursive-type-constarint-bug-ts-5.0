export type SelectorMap<T extends Record<string, (...params: unknown[]) => unknown>> = {
    [key in keyof T]: T[key];
};
