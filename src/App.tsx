import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import { Home, NotFound } from './pages';
import './App.css';
import { BASE_PATH } from './constants/constants';

function App() {
  return (
    <Router basename={BASE_PATH}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
