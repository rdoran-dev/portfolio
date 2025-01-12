import { FC } from "react";

interface aboutProps{

}
const AboutMe : FC<aboutProps> = () => {
    return(
        <div className="w-full h-[90vh] flex flex-col p-24" id='about'>
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
    )
}

export {AboutMe}