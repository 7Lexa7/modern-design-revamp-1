import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoursesPage from '@/pages/CoursesPage';
import GalleryPage from '@/pages/GalleryPage';
import EnrollPage from '@/pages/EnrollPage';
import AuthPage from '@/pages/AuthPage';
import ProfilePage from '@/pages/ProfilePage';

type Page = 'home' | 'about' | 'courses' | 'gallery' | 'enroll' | 'login' | 'profile';

interface User {
  name: string;
  email: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [user, setUser] = useState<User | null>(null);

  const handleNavigate = (page: string) => {
    if (page === 'profile' && !user) {
      setCurrentPage('login');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoggedIn={!!user}
      />
      <main key={currentPage} className="animate-fade-in">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'courses' && <CoursesPage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'enroll' && <EnrollPage />}
        {currentPage === 'login' && (
          <AuthPage onLogin={handleLogin} onNavigate={handleNavigate} />
        )}
        {currentPage === 'profile' && user && (
          <ProfilePage user={user} onLogout={handleLogout} onNavigate={handleNavigate} />
        )}
      </main>
    </div>
  );
}
