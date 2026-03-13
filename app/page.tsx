import Left from "./components/left/page";
import Right from "./components/right/page";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-x-hidden">

      <div className="w-full lg:w-1/4 lg:max-w-[320px]">
        <Left />
      </div>
      <div className="bg-[#1f1f1f] w-full max-w-full px-4 py-5 sm:px-6 rounded-xl overflow-hidden">
        <Right />
      </div>

    </div>
  );
}