import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@components/Routes";
import ErrorBoundary from "@components/Shared/ErrorBoundary";
import GlobalError from "@components/Shared/GlobalError";
import Loader from "@components/Shared/Loader";
import withLogger from "@hoc/withLogger";

function App() {
  return (
    <Router>
      <ErrorBoundary fallback={<GlobalError />}>
        <Suspense fallback={<Loader />}>
          <Routes message="Custom message, hello from: " />
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default withLogger(App);
