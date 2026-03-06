import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoursesPage from '@/pages/CoursesPage';
import EnrollPage from '@/pages/EnrollPage';

type Page = 'home' | 'about' | 'courses' | 'enroll';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoggedIn={false}
      />
      <main key={currentPage} className="animate-fade-in">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'courses' && <CoursesPage onNavigate={handleNavigate} />}
        {currentPage === 'enroll' && <EnrollPage />}
      </main>
    </div>
  );
}
