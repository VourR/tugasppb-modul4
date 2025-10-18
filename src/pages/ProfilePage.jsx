// src/pages/ProfilePage.jsx
export default function ProfilePage() {
  const anggota = [
    { nama: 'RAJWA VOURZA TSAQIFA', nim: '21120123130091', img: 'https://i.kym-cdn.com/photos/images/newsfeed/003/107/300/421.png' },
    { nama: 'HASNA AULIANNISA WAHONO', nim: '21120123130078', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80' },
    { nama: 'MUHAMMAD NURIL HUDA MAULANI', nim: '21120120140086', img: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=800&q=80' },
    { nama: 'NATHANAEL RICO SETIAWAN', nim: '21120123130087', img: 'https://i.pinimg.com/474x/2a/e6/32/2ae6321201346ff5837c810f05e4e0e2.jpg' }
  ];

  return (
    <div className="p-4 md:p-8 pb-20 md:pb-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Kelompok</h1>
          <p className="text-sm text-slate-500 mt-2">Informasi anggota kelompok beserta NIM.</p>
        </header>

        <section className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Daftar Anggota</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {anggota.map((a) => (
                <div key={a.nim} className="flex items-center justify-between rounded-lg border border-slate-100 p-4 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-center space-x-4">
                    <img src={a.img} alt={`${a.nama}`} className="w-16 h-16 object-cover rounded-full shadow-sm" />
                    <div>
                      <p className="text-base font-medium text-slate-800">{a.nama}</p>
                      <p className="text-sm text-slate-500">{a.nim}</p>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">Anggota</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>Halaman ini dibuat untuk menampilkan informasi kelompok pada tugas Praktikum PPB Modul 4.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}