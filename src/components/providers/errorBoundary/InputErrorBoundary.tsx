import React from "react";
import { logError } from "../../../lib/loggers/logError";

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError?: boolean;
  error?: Error;
}

export class InputErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logError(error, errorInfo);
  }

  render() {
    // [Todo] this.state.error 타입에따라 다르게 렌더링하기
    if (this.state.hasError) return this.props.children;
    return this.props.children;
  }
}
