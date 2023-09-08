import design from "../../images/design.jpg"

const ResponsiveCard = () => {
    return (
        <div className="my-4 bg-[#121321]">

            <div className="flex justify-center p-6 items-center h-96">
                <div className="my-3">


                    <div className="max-w-sm mx-auto bg-white/10 rounded-lg overflow-hidden md:max-w-2xl">
                        {/* wrapper for controlling card  in small and in large screen*/}
                        <section className="md:flex">

                            {/* img */}
                            <div className="">
                                <img src={design} alt="design" className="h-48 w-full object-cover bg-center md:h-full md:w-48"/>
                            </div>
                            {/* content */}
                            <div className="p-8">
                                <h1 className="text-sm text-indigo-500 font-semibold">
                                Deep Design Web
                                </h1>

                            </div>

                        </section>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default ResponsiveCard