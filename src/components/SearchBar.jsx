import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = 'Cari resep...' }) {
  return (
    <div className="max-w-3xl mx-auto mb-6">
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
          <Search size={18} />
        </span>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-slate-400"
        />
      </label>
    </div>
  );
}
