export type DebounceFunctionT<F extends (...args: any[]) => any> = (
  func: F,
  delay?: number
) => (...args: Parameters<F>) => void;
