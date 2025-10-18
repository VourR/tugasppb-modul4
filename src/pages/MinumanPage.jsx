// src/pages/MinumanPage.jsx
import { useState, useEffect, useMemo } from 'react';
import { ResepMinuman } from '../data/minuman';
import RecipeGrid from '../components/minuman/RecipeGrid';
import SearchBar from '../components/SearchBar';

export default function MinumanPage({ onSelectRecipe, onToggleFavorite, isFavorite }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;
  const allMinuman = useMemo(() => Object.values(ResepMinuman.resep), []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.trim().toLowerCase();

    if (lowercasedQuery === '') {
      setFilteredRecipes(allMinuman);
      return;
    }

    const filtered = allMinuman.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(lowercasedQuery) ||
        recipe.ingredients.join(' ').toLowerCase().includes(lowercasedQuery)
      );
    });

    setFilteredRecipes(filtered);
    // reset to first page whenever the search changes
    setCurrentPage(1);
  }, [searchQuery, allMinuman]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Cari minuman, bahan, atau nama resep..." />
        {/* pagination calculations */}
        {(() => {
          const totalPages = Math.max(1, Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE));
          const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
          const pagedRecipes = filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

          function goNext() {
            setCurrentPage((p) => Math.min(totalPages, p + 1));
          }

          function goPrev() {
            setCurrentPage((p) => Math.max(1, p - 1));
          }

          return (
            <>
              <RecipeGrid recipes={pagedRecipes} onSelectRecipe={onSelectRecipe} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />
              <div className="mt-8 flex items-center justify-center space-x-4">
                <button
                  onClick={goPrev}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-50'}`}>
                  Sebelumnya
                </button>
                <span className="text-sm text-slate-600">Halaman {currentPage} dari {totalPages}</span>
                <button
                  onClick={goNext}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md border ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-50'}`}>
                  Berikutnya
                </button>
              </div>
            </>
          );
        })()}
      </main>
    </div>
  );
}