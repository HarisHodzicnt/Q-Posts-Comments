import { IWrapPromise } from "@root/interfaces/IWrapPromise";
import { wrapPromise } from "@utils/global";
import { cacheInstance } from "@root/cache";

const makeServerCall = <T>(url: string): IWrapPromise<T> => {
  const promise = fetch(url).then((res) => res.json()) as Promise<T>;
  cacheInstance.endpointsCache.push({ url, promise });
  return wrapPromise(promise);
};

export const getFromCacheOrServer = <T>(url: string) => {
  const cachedPromise = cacheInstance.checkFromCache(url);
  if (cachedPromise) return wrapPromise(cachedPromise as Promise<T>);
  return makeServerCall<T>(url);
};
