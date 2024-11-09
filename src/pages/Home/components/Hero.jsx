import Logo from '@/assets/logo.png';
import HeroBg from '@/assets/homebg.jpg';
import HomeTracks from '@/assets/home_tracks.png'
const Hero = () => {
    return (
        <div className="">
            <div className="relative">
                <img src={HeroBg} loading='lazy' className='bg-cover w-full bg-no-repeat bg-center bg-fixed h-full absolute -z-20' />
                <div>
                    <img src={Logo} loading='lazy' className='sm:h-[90%] opacity-20 absolute top-10 left-0 bg-fixed bg-center' />
                    <div className='sm:flex flex-row items-center justify-center w-full'>
                        <div className='flex items-center justify-center sm:block'>
                            <div className="font-title md:text-[22vh] flex flex-col sm:pt-32 sm:pl-12 pl-0 pt-12 text-white z-20 relative sm:min-h-[90vh]">
                                <div className=' sm:text-3xl text-3xl'>Centre for Entreprenuership Development</div>
                                <div className=' sm:text-9xl text-8xl'>Startify 3.0</div>
                                <div className=' sm:text-3xl text-3xl mt-4'>Startup Ecosystem Conclave</div>
                            </div>
                        </div>
                        <div className='ml-auto sm:w-1/2'>
                            <img src={HomeTracks} loading='lazy' alt='Tracks' className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;