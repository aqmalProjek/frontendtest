import CompetencyCard from "@/components/CompetencyCard";
import CourseCard from "@/components/CourseCard";
import Jumbotron from "@/components/Jumbotron";
import Header from "@/components/layout/Header";
import SidebarComponent from "@/components/layout/Sidebar";
import RankingTable from "@/components/RankingTable";
import WeekDatePicker from "@/components/WeekDatePicker";
import {
  Calendar,
  LayoutDashboard,
  MessageSquareMoreIcon,
  PaperclipIcon,
  Settings,
  Sidebar,
  StarIcon,
  User,
  Users2,
} from "lucide-react";
import Image from "next/image";


type Moodle = {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: string | null;
  user_id: number;
  created_at: string;
};

const data = [
  {
    image: "/programing.jpg",
    title: "PEMROGRAMAN",
    competencies: [
      { id: 1, text: "Frontend Modern dengan React dan Angular", active: "N" },
      { id: 2, text: "Pengembangan API dengan GraphQL dan REST", active: "Y" },
      { id: 3, text: "Clean Code dan Desain Pattern", active: "N" },
    ],
  },
  {
    image: "/programing.jpg",
    title: "CREATIVE MARKETING",
    bgColor: "bg-red-200",
    competencies: [
      { id: 1, text: "Storytelling dalam Pemasaran", active: "N" },
      { id: 2, text: "Pemasaran Viral Cepat Menyebar", active: "N" },
      { id: 3, text: "User Generated Content", active: "Y" },
    ],
  },
  {
    image: "/programing.jpg",
    title: "MANAGEMENT SDM",
    bgColor: "bg-yellow-200",
    competencies: [
      { id: 1, text: "Strategi SDM dalam Perusahaan", active: "N" },
      { id: 2, text: "Peningkatan Kinerja Tim", active: "N" },
      { id: 3, text: "Perencanaan Karir", active: "Y" },
    ],
  },
];

export default async function Home() {
  const res = await fetch("http://localhost:4001/api/moodles", {
    cache: "no-cache", // mirip getStaticProps
    next: {revalidate: 60}
  });

  if (!res.ok) {
    throw new Error("Gagal fetch moodles");
  }

  const moodles: Moodle[] = await res.json();
  return (
    <div className="w-full h-full flex flex-col bg-[#efefef]">
      <Header />
      <div className="w-full h-[calc(100vh-50px)] flex">
        <SidebarComponent  />
        <div className="w-[calc(100%)] px-3 py-2   overflow-y-auto flex gap-1">
          <div className="md:w-[calc(100%-300px)] w-full flex flex-col gap-2">
            <Jumbotron />
            <div className="w-full  flex flex-col ">
              <h2 className="text-xl md:text-2xl font-semibold w-full md:w-1/2 leading-snug">
                MODUL KOMPETENSI
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((card, idx) => (
                  <CompetencyCard
                    key={idx}
                    image={card.image ?? ""}
                    competencies={card.competencies}
                    title={card.title}
                    bgColor="white"
                  />
                ))}
              </div>
            </div>
            <div className="w-full  flex flex-col ">
              <h2 className="text-xl md:text-2xl font-semibold w-full md:w-1/2 leading-snug">
                NILAI PESERTA
              </h2>
              <RankingTable />
            </div>
          </div>
          <div className="hidden w-[300px] md:flex flex-col p-4 gap-4">
            {/* Bagian Profile */}
            <div className="flex flex-col items-center text-center">
              {/* Foto profil + ikon gear */}
              <div className="relative">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <Settings className="absolute top-0 right-0 w-5 h-5 text-gray-600 cursor-pointer" />
              </div>

              {/* Teks sambutan */}
              <h2 className="mt-3 font-bold text-lg">
                SELAMAT DATANG, JULIANA
              </h2>
              <p className="text-sm text-gray-500">Di LMS by Adhivasindo</p>
            </div>

            {/* Date Picker (biar full width, ga ketarik center) */}
            <div className="w-full max-w-[300px]">
              <WeekDatePicker />
            </div>

            <div className="w-full">
              <h2>JADWAL PEMATERI</h2>
              <div className="flex flex-col gap-3">
                {moodles.length !== 0 ? (
                  moodles.map((item: Moodle) => (
                    <CourseCard key={item.slug} title={item.title} slug={item.slug}/>
                  ))

                ) : <></>}
              </div>
            </div>

            <div className="w-full">
                <div className="relative w-full h-[120px] rounded overflow-hidden">
                          <Image
                            src={'/programing.jpg'}
                            alt={'Programing'}
                            fill
                            className="object-cover"
                          />
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
