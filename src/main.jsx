// src/main.jsx
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';
import MakananPage from './pages/MakananPage';
import MinumanPage from './pages/MinumanPage';
import ProfilePage from './pages/ProfilePage';
import RecipeDetail from './pages/RecipeDetail';
import FavoritePage from './pages/FavoritePage';
import DesktopNavbar from './components/navbar/DesktopNavbar';
import MobileNavbar from './components/navbar/MobileNavbar';
import './index.css'
import PWABadge from './PWABadge';

function AppRoot() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [prevPage, setPrevPage] = useState('home');
  const [favorites, setFavorites] = useState({});

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleSelectRecipe = (recipe) => {
    if (!recipe) return;
    setSelectedRecipe(recipe);
    setPrevPage(currentPage);
    setCurrentPage('detail');
  };

  function makeKey(recipe, type) {
    // type can be 'makanan' or 'minuman' or undefined for featured; fall back to name
    const t = type || recipe.type || 'unknown';
    return `${t}-${recipe.id}`;
  }

  const toggleFavorite = (recipe, type) => {
    const key = makeKey(recipe, type);
    setFavorites((prev) => {
      const copy = { ...prev };
      if (copy[key]) {
        delete copy[key];
      } else {
        // store recipe plus type so we can render later
        copy[key] = { ...recipe, __favType: type || recipe.type || 'unknown' };
      }
      return copy;
    });
  };

  const isFavorite = (recipe, type) => {
    const key = makeKey(recipe, type);
    return Boolean(favorites[key]);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} onSelectRecipe={handleSelectRecipe} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />;
      case 'makanan':
        return <MakananPage onNavigate={handleNavigation} onSelectRecipe={handleSelectRecipe} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />;
      case 'minuman':
        return <MinumanPage onNavigate={handleNavigation} onSelectRecipe={handleSelectRecipe} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />;
      case 'profile':
        return <ProfilePage />;
      case 'detail':
        return <RecipeDetail recipe={selectedRecipe} onNavigate={handleNavigation} prevPage={prevPage} />;
      case 'favorites':
        return <FavoritePage favorites={Object.values(favorites)} onSelectRecipe={handleSelectRecipe} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />;
      default:
        return <HomePage />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Navbar */}
      <DesktopNavbar currentPage={currentPage} onNavigate={handleNavigation} />
      
      {/* Main Content */}
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>
      
      {/* Mobile Navbar */}
      <MobileNavbar currentPage={currentPage} onNavigate={handleNavigation} />

      <PWABadge />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
)