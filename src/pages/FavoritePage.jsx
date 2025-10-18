// src/pages/FavoritePage.jsx
import React from 'react';
import RecipeGrid from '../components/makanan/RecipeGrid';

export default function FavoritePage({ favorites = [], onSelectRecipe, onToggleFavorite, isFavorite }) {
  // favorites is an array of recipe objects; they may have __favType
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Favorit</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500">Belum ada resep favorit. Tandai resep dengan ikon hati.</p>
          </div>
        ) : (
          // Reuse RecipeGrid for layout — it expects 'recipes' prop
          <RecipeGrid recipes={favorites} onSelectRecipe={onSelectRecipe} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} title="Jelajahi Resep Favorit" />
        )}
      </main>
    </div>
  );
}
