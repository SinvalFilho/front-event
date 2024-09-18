import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateEvent from './pages/CreateEvent';
import EditEvent from './pages/EditEvent';
import EventList from './pages/EventList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-event" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
              <Route path="/edit-event/:id" element={<ProtectedRoute><EditEvent /></ProtectedRoute>} />
              <Route path="/events" element={<EventList />} />
              <Route path="*" element={<NotFound />} /> {/* Rota para 404 */}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
