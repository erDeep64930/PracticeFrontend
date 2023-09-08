import { AiOutlineArrowRight } from "react-icons/ai"
import { HiLightBulb } from "react-icons/hi"
export const GlowingGradientButton = () => {
  return (
    <div className="min-h-screen px-8 py-16 bg-black">

      <div className="grid gap-8 items-start justify-center mt-8">
        <div className="relative">
          {/* this is for blur effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur"></div>
          <button className="relative px-7 py-4 rounded-lg leading-none flex items-center divide-x bg-black">
            <span className="flex space-x-3 items-center">
              <HiLightBulb className="text-pink-600 h-6 w-6 rotate-6" />
              <span className="text-gray-100 font-bold pr-4">Deep Design Web
              </span>
            </span>
            <span className="pl-4 text-indigo-400 flex space-x-3 ml-5">
              2023-09-09 <AiOutlineArrowRight className="ml-2" />
            </span>
          </button>
        </div>

      </div>


    </div>
  )
}
