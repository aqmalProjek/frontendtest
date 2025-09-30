import { Calendar, User } from 'lucide-react'
import React from 'react'

const Jumbotron = () => {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-purple-400 to-purple-700 p-6 flex flex-col gap-3">
  {/* Kategori */}
  <h3 className="text-yellow-300 font-bold text-sm uppercase tracking-wide">
    Pemrograman
  </h3>

  {/* Judul */}
  <h2 className="text-white text-2xl md:text-3xl font-semibold w-full md:w-1/2 leading-snug">
    Pemrograman Frontend Modern dengan React dan Angular
  </h2>

  {/* Deskripsi */}
  <p className="text-white text-sm md:text-base w-full md:w-1/2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae itaque
    maxime veniam fugiat ab aspernatur excepturi officia nisi voluptate quis.
  </p>

  {/* Footer */}
  <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
    <div className="flex items-center gap-6 text-white text-sm">
      {/* Pemateri */}
      <div className="flex items-center gap-2">
        <User />
        <span>Pemateri By Josep</span>
      </div>

      {/* Tanggal */}
      <div className="flex items-center gap-2">
        <Calendar />
        <span>14-06-2025</span>
      </div>
    </div>

    {/* Tombol */}
    <button className="bg-white text-purple-700 font-medium rounded-md px-4 py-2 hover:bg-gray-100 transition">
      MULAI LEARNING
    </button>
  </div>
</div>
  )
}

export default Jumbotron