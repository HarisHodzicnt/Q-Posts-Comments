import withLogger from "@root/hoc/withLogger";
import { IFieldInputProps } from "@root/interfaces/IComponentsInterfaces";
import styles from "./FieldInput.module.css";

const FieldInput = ({
  onChange,
  placeholder = "Type here ...",
  type = "text",
}: IFieldInputProps) => {
  return (
    <input
      className={styles.fieldInput}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default withLogger(FieldInput, "Custom message from:");
