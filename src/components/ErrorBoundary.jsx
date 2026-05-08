import { Component } from "react";
import { motion } from "framer-motion";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full text-center space-y-8 bg-white rounded-3xl shadow-2xl p-12 border border-red-200"
          >
            <div className="w-24 h-24 mx-auto bg-red-100 rounded-3xl flex items-center justify-center">
              <span className="text-4xl">💥</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Something went wrong</h1>
            <p className="text-gray-600">We're sorry, an unexpected error occurred.</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Reload Page
            </button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;