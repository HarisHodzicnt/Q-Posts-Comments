import React, { Component, ReactNode } from "react";
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from "@root/interfaces/IComponentsInterfaces";

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static defaultProps: IErrorBoundaryProps = {
    fallback: <h1>Something went wrong.</h1>,
  };

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
