// src/pages/RecipeDetail.jsx
import React from 'react';

export default function RecipeDetail({ recipe, onNavigate, prevPage = 'home' }) {
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Resep tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-12">
      <main className="max-w-4xl mx-auto px-4 md:px-8">
        <button
          onClick={() => onNavigate && onNavigate(prevPage)}
          className="mb-6 px-4 py-2 rounded-md border hover:bg-slate-100"
        >
          Kembali
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-60 md:h-96 w-full overflow-hidden">
            <img src={recipe.image_url} alt={recipe.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">{recipe.name}</h1>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Bahan-bahan</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Langkah-langkah</h2>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
