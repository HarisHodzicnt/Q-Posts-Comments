import withLogger from "@hoc/withLogger";
import GlobalError from "@components/Shared/GlobalError";

const NotFound = () => <GlobalError text="Page not found go to:" />;

export default withLogger(NotFound);
