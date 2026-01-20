import { Component, type ReactNode, type ErrorInfo } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
          <div className="text-center max-w-2xl">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-red-100 mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Đã Có Lỗi Xảy Ra
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Xin lỗi, đã có lỗi không mong muốn xảy ra. Vui lòng thử lại hoặc liên hệ hỗ trợ nếu vấn đề vẫn tiếp diễn.
            </p>

            {/* Error Details (Development only) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-left">
                <p className="text-sm font-mono text-red-800 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                Thử Lại
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors"
              >
                <Home className="w-5 h-5" />
                Về Trang Chủ
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
