import { Component } from 'react'

const RELOAD_KEY = 'pg-chunk-reload'

function isChunkLoadError(error) {
  const message = error?.message || String(error || '')
  return (
    message.includes('Failed to fetch dynamically imported module') ||
    message.includes('Importing a module script failed') ||
    message.includes('error loading dynamically imported module') ||
    error?.name === 'ChunkLoadError'
  )
}

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null, chunkReloadFailed: false }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App error:', error, errorInfo)

    if (typeof window === 'undefined' || !isChunkLoadError(error)) return

    // Avoid an infinite reload loop if something else is wrong.
    const alreadyTried = sessionStorage.getItem(RELOAD_KEY) === '1'
    if (alreadyTried) {
      this.setState({ chunkReloadFailed: true })
      return
    }

    sessionStorage.setItem(RELOAD_KEY, '1')
    window.location.reload()
  }

  componentDidMount() {
    // Clear the guard after a successful load so future deploys can auto-refresh again.
    try {
      sessionStorage.removeItem(RELOAD_KEY)
    } catch {
      // ignore
    }
  }

  render() {
    if (this.state.hasError) {
      if (isChunkLoadError(this.state.error) && !this.state.chunkReloadFailed) {
        return null
      }

      if (isChunkLoadError(this.state.error) && this.state.chunkReloadFailed) {
        return (
          <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: '#0d9488', marginBottom: '1rem' }}>Please refresh</h1>
            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
              The site just updated. Refresh the page to continue.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                background: '#0d9488',
                color: 'white',
                border: 'none',
                borderRadius: '999px',
                padding: '0.75rem 1.5rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Refresh page
            </button>
          </div>
        )
      }

      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: '#0d9488', marginBottom: '1rem' }}>Something went wrong</h1>
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
