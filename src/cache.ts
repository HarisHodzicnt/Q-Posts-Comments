import { ICachedCall } from "./interfaces/ILocalCache";

class Cache<T> {
  endpointsCache: ICachedCall<T>[] = [];

  checkFromCache = (url: string) => {
    const cachedEndpoint = this.endpointsCache.find((call) => call.url === url);
    return cachedEndpoint?.promise || null;
  };
}

const cacheInstance = new Cache();

export { cacheInstance };
