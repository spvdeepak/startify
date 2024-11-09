import Logo from '@/assets/logo.png';
const whoWeAre = () => {    
    return (
        <div className="bg-slate-300">
            <div className='flex sm:flex-row flex-col'>
                <div className="sm:w-1/2 bg-[url('@/assets/collage.png')] opacity-40 bg-center bg-cover sm:h-auto h-[40vh] order-2 sm:order-1">
                </div>
                <div className='sm:w-1/2 order-1 sm:order-2'>
                    <div className="flex items-center justify-center sm:block">
                        <div className="sm:ml-10 mt-16 font-title font-bold uppercase text-2xl bg-blue-300 inline-block py-4 px-8 rounded-full">Who we are?</div>
                    </div>
                    <div className='sm:m-8 m-5 text-justify font-title text-xl md:text-2xl'>
                        <div>
                            Career Guidance Forum is a Joint initiative by Students, Alumni and CEG Management to establish a Student led - Alumni Mentored forum to enhance Career Prospects for CEG students. This initiative will be led by a team of Leaders from among students. The objective is to prepare students by imparting knowledge about the various career, higher studies and entrepreneurial opportunities, and train them on relevant skills to successfully get selected in the recruitment process, both during campus placement and outside. The forum will network with Alumni from around the World and bring experts as well collaborate more actively with organizations led Alumni to provide interns to them and internships to students.
                        </div>
                        <figure className="max-w-screen-md mt-16 mx-auto text-center">
                            <svg className="w-10 h-10 mx-auto mb-3 text-blue-800 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl pb-4 md:text-4xl italic font-medium text-gray-900 dark:text-white">"The club, for the students by the students"</p>
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default whoWeAre;