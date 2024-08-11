export const cn = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};
