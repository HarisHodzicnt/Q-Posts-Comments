import { IWrapPromise } from "@root/interfaces/IWrapPromise";
import { DebounceFunctionT } from "@root/types/DebounceType";

const wrapPromise = <T>(promise: Promise<T>): IWrapPromise<T> => {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result as T;
      }

      throw new Error("Unexpected status");
    },
  };
};

const debounce: DebounceFunctionT<(...args: any[]) => any> = (
  func,
  delay = 300
) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<typeof func>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export { wrapPromise, debounce };
