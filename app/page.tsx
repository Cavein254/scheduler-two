import { GiHamburgerMenu } from "react-icons/gi";
const dashData = [
  {
    id: 1,
    title: "Dashboard",
  },
];
export default function Home() {
  return (
    <main>
      <div className="w-[100%] h-[100%] flex">
        <aside className="flex w-[10%] bg-black h-[100vh]">
          <div className="flex">
            <GiHamburgerMenu className="text-white" />
          </div>
        </aside>
        <aside className="flex flex-col w-[90%] bg-blue-200 h-[100vh]">
          <div className="bg-white ">
            <h1>This will be the heading of the App</h1>
          </div>
          <div className="flex w-[30%] bg-gray-300 h-[100vh]"></div>
        </aside>
      </div>
    </main>
  );
}
