import Left from "./components/left/page";
import Right from "./components/right/page";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-x-hidden">

      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 lg:max-w-[320px]">
        <Left />
      </div>

      <div className="w-full lg:flex-1 lg:mr-10 max-w-full">
        <Right />
      </div>

    </div>
  );
}