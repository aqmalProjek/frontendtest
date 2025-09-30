import { ChevronRight } from "lucide-react";

export default function CourseCard() {
  return (
    <div className="flex items-center bg-white rounded-lg shadow p-3 w-full cursor-pointer hover:bg-gray-50">
      {/* Icon / thumbnail */}
      <div className="w-10 h-10 bg-indigo-400 rounded-md flex-shrink-0"></div>

      {/* Teks */}
      <div className="flex-1 ml-3">
        <h3 className="text-sm font-semibold text-gray-800">
          Storytelling dalam Pemasaran
        </h3>
        <p className="text-xs text-gray-500">09:00 - 11:00 WIB, Mr. Jam</p>
      </div>

      {/* Panah kanan */}
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  );
}
