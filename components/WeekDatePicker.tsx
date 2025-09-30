"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WeekDatePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // ambil awal minggu (Minggu)
  const getWeekDays = (date: Date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay()); // mulai dari Minggu
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  };

  const weekDays = getWeekDays(currentDate);

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
  <div className="bg-[#1a1333] text-white rounded-2xl p-4 w-full">
    {/* Header bulan */}
    <div className="flex items-center justify-between mb-3">
      <button onClick={handlePrev}>
        <ChevronLeft className="w-5 h-5" />
      </button>
      <h2 className="font-semibold text-sm">
        {currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button onClick={handleNext}>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>

    {/* Hari minggu */}
    <div className="grid grid-cols-7 gap-2">
      {weekDays.map((day, idx) => {
        const isSelected = day.toDateString() === selectedDate.toDateString();
        return (
          <button
            key={idx}
            onClick={() => setSelectedDate(day)}
            className={`flex flex-col items-center justify-center h-14 rounded-lg border text-xs
              ${
                isSelected
                  ? "bg-white text-[#1a1333] font-bold"
                  : "bg-transparent border-white text-white"
              }`}
          >
            <span>{day.toLocaleDateString("en-US", { weekday: "short" })}</span>
            <span className="text-sm">{day.getDate()}</span>
          </button>
        );
      })}
    </div>
  </div>
);
}
