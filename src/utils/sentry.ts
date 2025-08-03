import * as Sentry from '@sentry/react';

export const initSentry = () => {
  // Only initialize Sentry in production
  if (import.meta.env.PROD) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.MODE,
      tracesSampleRate: 0.1, // Capture 10% of transactions for performance monitoring
      beforeSend(event) {
        // Filter out non-critical errors in production
        if (event.exception) {
          const error = event.exception.values?.[0];
          if (error?.type === 'ChunkLoadError' || error?.type === 'NetworkError') {
            return null; // Don't send these common, non-actionable errors
          }
        }
        return event;
      },
    });
  }
};

export { Sentry };