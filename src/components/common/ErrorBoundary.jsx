import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Canvas WebGL Error Caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div className="absolute inset-0 bg-[#090d16]" />
    }
    return this.props.children
  }
}
