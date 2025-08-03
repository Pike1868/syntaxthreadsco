import * as Sentry from '@sentry/react';
import { Button } from './ui/button';

interface ErrorFallbackProps {
  error: unknown;
  resetError: () => void;
}

function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="max-w-md w-full bg-background shadow-lg rounded-lg p-6 text-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-muted-foreground">
            We've been notified about this error and will fix it soon.
          </p>
        </div>
        
        {import.meta.env.DEV && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-left">
            <p className="text-sm text-red-800 font-mono">
              {errorMessage}
            </p>
          </div>
        )}
        
        <div className="space-y-3">
          <Button onClick={resetError} className="w-full">
            Try Again
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/'}
            className="w-full"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

// Create the error boundary with Sentry integration
export const ErrorBoundary = Sentry.withErrorBoundary(
  ({ children }: { children: React.ReactNode }) => <>{children}</>,
  {
    fallback: ErrorFallback,
    beforeCapture: (scope) => {
      scope.setTag('errorBoundary', true);
    },
  }
);