export default function Projects() {
  return (    
     <section className="text-center py-12 px-4">     
        <div className="container relative flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 mt-8">
            <h2 className="text-center mb-1 text-3xl font-extrabold leading-tight text-gray-900">Projects</h2>
            <p className="text-center mb-12 text-lg text-gray-500">These are projects that I have/or will be working on during the Internship.</p>
            <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition transform hover:scale-100 scale-90">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                        <a href="/pages/project/project-1">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Portfolio Site</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">A Portfolio Site that contains a Home Page, Contact, About Me, and Dynamic Projects Page using NextJS and TailwindCSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 transition transform hover:scale-100 scale-90">
                    <div className="relative h-full ml-0 md:mr-10">
                        <a href="/pages/project/project-2">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">  
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Blog Site</h3>            
                                </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">To be Announced</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
     </section> 
  );
}
