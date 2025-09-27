import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NewTraining from './pages/NewTraining';
import ErrorPage from './pages/ErrorPage';
import SettingsPage from './pages/Settings';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path='training' element={<NewTraining />} />
        <Route path='settings' element={<SettingsPage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
