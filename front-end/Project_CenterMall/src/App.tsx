import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
