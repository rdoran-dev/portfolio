import Image from "next/image";
import { AboutMe } from "./components/about";

export default function Home() {
  return (
    <div className="w-full h-full p-0 flex flex-col gap-4">
      <div className="w-full h-[20vh] bg-gradient-to-tr from-green-800 to-orange-500"></div>
      <div className="w-full h-[70vh] flex flex-col gap-0 p-24">  
        <h1 className="text-5xl">
          Richard Doran
        </h1>
        <p className="text-lg">Web Developer & IT Techinican</p>
        <div className="flex flex-row gap-4 p-3">
          <p>LinkedIn  </p>
          <p>GitHub</p>
          <p>Email</p>
        </div>
      </div>
     <AboutMe />
      <div className="w-full h-[90vh] flex flex-col p-24" id='projects'>
        <div className="w-full">
          Projects
        </div>
        <div className="w-full flex flex-row">
          <div className="min-w-[400px] w-[45%] h-[50vh]">
            Projects
          </div>
          <div className="min-w-[400px] w-[45%] h-[50vh]">
            info
          </div>
        </div>
      </div>
      <div className="w-full h-[90vh] flex flex-col p-24" id='contact'>
        <div className="w-full">
          About me
        </div>
        <div className="w-full flex flex-row">
          <div className="min-w-[400px] w-[45%] h-[50vh]">
            Projects
          </div>
          <div className="min-w-[400px] w-[45%] h-[50vh]">
            info
          </div>
        </div>
      </div>
    </div>
  );
}
