import { GiHamburgerMenu } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import SmSidebar from "@/components/sidebar/SmSidebar";
import MdSidebar from "@/components/sidebar/MdSidebar";

export default function Home() {
  return (
    <main>
      <div className="w-[100%] h-[100%] flex">
        <aside className="flex w-[10%] md:w-[20%] bg-black h-[100vh] flex-col items-center pt-4">
          <div className="flex">
            <GiHamburgerMenu className="text-white" />
          </div>
          <div className="flex mt-4">
            <MdSidebar />
          </div>
        </aside>
        <aside className="flex flex-col w-[90%] bg-blue-200 h-[100vh]">
          <div className="bg-white">
            <h1>This will be the heading of the App</h1>
          </div>
          <div className="flex w-[30%] bg-gray-300 h-[100vh]"></div>
        </aside>
      </div>
    </main>
  );
}
