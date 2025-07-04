import Image from "next/image";


export default function AboutMe() {
  return (
    <section className="text-center">     
    <div className="pb-20">
      <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)] py-8">
        <div className="container relative flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <div className="w-full">
              <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10 top-60">
                            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">About Me</h2>
                            <p className="mb-12 text-lg text-gray-500">Rod Feliser P. Torre.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 justify-items-end">
                        <div className="relative h-full ml-0 md:mr-10">
                            <Image
                            aria-hidden
                            src="/face.jpg"
                            alt="My Face"
                            width={300}
                            height={300}
                          />
                        </div>
                    </div>
              </div>
            
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Basic Information</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">My name is Rod Feliser P. Torre. I was born on November 27, 2003 (Currenctly 21 Years Old). I am a college student currently taking my Internship at Stratpoint Global Outsourcing Inc. I specialize in Web Development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Education</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">I am a Student in Mapua Univisity Makati majoring in Bachelor of Science in Computer Science.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                  <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Skills</h2>
                </div>
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Web Devlopment</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">I have made many websites(Both Frontend and Backend) and proficient in HTML, CSS, Javascript, MySQL, Java and other website related languages.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Mobile App Development</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">I have made Mobile applications and am knowledgable with Kotlin, XML, and Java.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Desktop App Development</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">I am knowledgable in Making Desktop applications, specifically in Java.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}
