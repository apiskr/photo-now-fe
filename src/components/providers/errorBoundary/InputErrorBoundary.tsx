import React from "react";
import { logError } from "../../../lib/loggers/logError";

// [Todo] ErorrBoundary가 이벤트 핸들러, 비동기 코드의 에러를 잡지 않음

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError?: boolean;
  error?: Error;
}

<></>;
export class InputErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    console.log(error);
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logError(error, errorInfo);
  }

  public render() {
    // [Todo] this.state.error 타입에따라 다르게 렌더링하기
    if (this.state.hasError) return this.props.children;
    return this.props.children;
  }
}
