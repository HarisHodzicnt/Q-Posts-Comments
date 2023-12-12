import { useState } from "react";

const useToggle = (defaultVal?: boolean) => {
  const [show, setShow] = useState(defaultVal ?? false);
  const toggleShow = () => setShow(!show);
  return { show, toggleShow };
};

export default useToggle;
