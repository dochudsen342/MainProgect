import PageError from '@/widgets/PageError/ui/PageError'
import React, { ErrorInfo, ReactNode, Suspense } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      )
    }

    return this.props.children
  }
}
