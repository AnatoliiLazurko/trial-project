import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorizationPage from './components/Authorization/AuthorizationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/:type" element={<AuthorizationPage />} />

        <Route path="/" element={<Navigate to="/auth/register" />} />
      </Routes>
    </>
  );
}

export default App;
