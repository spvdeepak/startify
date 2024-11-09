
import Logo from '@/assets/logo.png';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-gray-800" >
            <div>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 flex items-center flex-col sm:block    ">
                            <a href="" className="flex items-center">
                                <img src={Logo} className="h-8 me-3" alt="CGF Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Career Guidance Forum</span>
                            </a>
                            <a href='mailto:contact@cgfceg.org' className='mt-2 block'>
                                <span className="self-center text-md sm:ml-12 ml-0 whitespace-nowrap text-white hover:underline underline-offset-2 hover:text-cyan-400">contact@cgfceg.org</span>
                            </a>
                            <div className='flex text-white mt-6 sm:ml-8 m-0'>
                                <a href='https://instagram.com/cgf_ceg' className='px-3 border-2 rounded-full py-3 mx-3 hover:text-cyan-400 hover:border-cyan-500' target='_blank'><Instagram /></a>
                                <a href='https://www.facebook.com/cgfceg' className='px-3 border-2 rounded-full py-3 mx-3 hover:text-cyan-400 hover:border-cyan-500' target='_blank'><Facebook /></a>
                                <a href='https://www.linkedin.com/company/cgfceg/' className='px-3 border-2 rounded-full py-3 mx-3 hover:text-cyan-400 hover:border-cyan-500' target='_blank'><Linkedin /></a>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 mt-12 sm:mt-0">
                            <div>
                                {/* <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2> */}
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://intern.cgfceg.org" className="hover:underline">Internships</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="./" className="hover:underline">Home</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="./#tracks" className="hover:underline">Tracks</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mx-4'>
                                {/* <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2> */}
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/events" className="hover:underline">Events</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="/about" className="hover:underline">About</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="/team" className="hover:underline">Team</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mx-4'>
                                {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> */}
                                <ul className="text-gray-400 font-medium">
                                    <li className='mb-4'>   
                                        <a href="/contact" className="hover:underline">Contact</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://instagram.com/cgf_ceg" className="hover:underline">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/cgfceg/" className="hover:underline">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="sm:flex sm:items-center border-t p-5 border-gray-500">
                    <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Career Guidance Forum - CEG</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer >

    );
}
export default Footer;