import { IWrapPromise } from "@root/interfaces/IWrapPromise";
import { useEffect, useState } from "react";

type CallbackWithParams<T, P> = (params: P) => IWrapPromise<T>;
type CallbackWithoutParams<T> = () => IWrapPromise<T>;

const useDynamicFetching = <T, P = undefined>(
  callBack: CallbackWithoutParams<T> | CallbackWithParams<T, P>,
  params?: P,
  exitingValue?: T
): T => {
  const [fetchCalled, setFetchCalled] = useState<IWrapPromise<T> | null>(null);
  useEffect(() => {
    if (!fetchCalled && !exitingValue) {
      params
        ? setFetchCalled(callBack(params))
        : setFetchCalled((callBack as CallbackWithoutParams<T>)());
    }
    return () => {
      setFetchCalled(null);
    };
  }, []);
  return (exitingValue ?? fetchCalled?.read() ?? []) as T;
};

export default useDynamicFetching;
