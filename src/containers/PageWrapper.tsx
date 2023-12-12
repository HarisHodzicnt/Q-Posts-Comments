import { Suspense } from "react";
import PostHeader from "@components/PostHeader";
import withLogger from "@hoc/withLogger";
import { IPageWrapperProps } from "@root/interfaces/IComponentsInterfaces";

const PageWrapper = ({
  children,
  title,
  fallback,
  route,
  renderHeader = true,
  buttonText = "Go back",
  renderBack = false,
}: IPageWrapperProps) => (
  <>
    {renderHeader && (
      <PostHeader
        title={title}
        renderBack={renderBack}
        route={route}
        buttonText={buttonText}
      />
    )}
    {fallback ? <Suspense fallback={fallback}>{children}</Suspense> : children}
  </>
);

export default withLogger(PageWrapper);
