interface ICachedCall<T> {
  url: string;
  promise: Promise<T>;
}

export type { ICachedCall };
