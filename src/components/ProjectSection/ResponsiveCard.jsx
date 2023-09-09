import { Link } from "react-router-dom"
import design from "../../images/design.jpg"

const ResponsiveCard = () => {
    return (
        <div className="my-4 bg-[#121321] p-5">

            <div className="flex justify-center p-6 items-center h-96">
                <div className="my-3">


                    <div className="max-w-sm mx-auto bg-white/10 rounded-lg overflow-hidden md:max-w-2xl">
                        {/* wrapper for controlling card  in small and in large screen*/}
                        <section className="md:flex">

                            {/* img */}
                            <div className="w-1/2">
                                <img src={design} alt="design" className="h-48 w-full object-cover bg-center md:h-full md:w-72"/>
                            </div>
                            {/* content */}
                            <div className=" w-1/2">
                                <h1 className="text-lg text-indigo-500 font-semibold">
                                Deep Design Web
                                </h1>
                                <Link to="" className="text-blue-500 hover:text-blue-700">
                              About us
                                </Link>
                                <p className="text-gray-300 p-4">
                                Deep Design Web is a platform dedicated to helping businesses excel in the digital age. Their core services encompass Logo Design and Website Development, aimed at enabling small businesses to expand their reach globally. Their mission is to empower entrepreneurs by establishing a strong online presence and fostering growth. Deep Design Web is committed to crafting engaging digital experiences and turning clients' visions into vibrant online realities.
                                </p>

                            </div>

                        </section>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default ResponsiveCard