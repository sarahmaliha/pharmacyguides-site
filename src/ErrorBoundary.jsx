import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: '#0f766e', marginBottom: '1rem' }}>Something went wrong</h1>
          <pre style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', overflow: 'auto', fontSize: '14px' }}>
            {this.state.error?.toString()}
          </pre>
          <p style={{ marginTop: '1rem', color: '#64748b' }}>Check the browser console (F12 → Console) for more details.</p>
        </div>
      )
    }
    return this.props.children
  }
}
