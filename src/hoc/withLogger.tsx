import { ComponentType } from "react";
import { HELLO_MESSAGE } from "@constants/global";
import { IComponentProps } from "@root/interfaces/IComponentsInterfaces";

const withLogger =
  <P extends IComponentProps>(
    Component: ComponentType<P>,
    customMessage?: string
  ) =>
  (props: P) => {
    console.log(
      `${props.message || customMessage || HELLO_MESSAGE} ${Component.name}`
    );
    return <Component {...props} />;
  };

export default withLogger;
