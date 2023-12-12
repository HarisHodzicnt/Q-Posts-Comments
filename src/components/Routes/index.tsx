import { useRoutes } from "react-router-dom";

import withLogger from "@hoc/withLogger";

import { getRouteList } from "./routes.utils";

const Routes = () => useRoutes(getRouteList());

export default withLogger(Routes);
