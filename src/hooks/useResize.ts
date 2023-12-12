import { useEffect, useRef, useState } from "react";

const useResize = () => {
  const [deviceSize, setDeviceSize] = useState<number>(0);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current as NodeJS.Timeout);
      resizeTimeoutRef.current = setTimeout(() => {
        setDeviceSize((deviceSize) => deviceSize + 1);
      }, 400);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeoutRef.current as NodeJS.Timeout);
    };
  }, []);
  return { deviceSize };
};

export default useResize;
