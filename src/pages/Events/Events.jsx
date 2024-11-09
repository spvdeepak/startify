import React, { useState } from 'react'; import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import E1 from '@/assets/events/1.jpg'
import { DialogClose } from '@radix-ui/react-dialog';

const events = [
    {
        id: 1,
        Ename: 'CGF Launch Event',
        Edate: '19th February, 2024',
        Etime: '3:00 pm',
        EventImg: E1,
        isRegisteropen: true,
        EventConatct1: 'contact@cgfceg.org',
        EventConatct2: '+91 90473 36520',
        EventSpeaker: '',
        EventLocation: 'Vivekanada Auditorium, CEG',
        EventTrack: '',
        EventDest: 'Career Guidance Forum is a Joint initiative by Students, Alumni and CEG Management to establish a Student led - Alumni Mentored forum to enhance Career Prospects for CEG students. This initiative will be led by a team of Leaders from among students. The objective is to prepare students by imparting knowledge about the various career, higher studies and entrepreneurial opportunities, and train them on relevant skills to successfully get selected in the recruitment process, both during campus placement and outside. The forum will network with Alumni from around the World and bring experts as well collaborate more actively with organizations led Alumni to provide interns to them and internships to students.',
        isFutureEvent: true,
        formLink: '',
    },
];

const EventItem = ({ event }) => {
    const {
        Ename,
        Edate,
        Etime,
        EventImg,
        isRegisteropen,
        EventConatct1,
        EventConatct2,
        EventSpeaker,
        EventLocation,
        EventTrack,
        EventDest,
        isFutureEvent,
        formLink,
    } = event;

    const [showPopup, setShowPopup] = useState(false);

    const registerOrSoon = isFutureEvent ? 'Registration Opens Soon' : 'Register';

    return (
        <div className="bg-white rounded-lg shadow-lg mb-4">
            <Dialog>
                <img className="w-full h-40 object-cover rounded-lg" src={EventImg} alt={Ename} />
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{Ename}</h2>
                    <p className="text-gray-700 mb-2">Date: {Edate}</p>
                    <p className="text-gray-700 mb-2">Time: {Etime}</p>
                    <p className="text-gray-700 mb-2">Location: {EventLocation}</p>
                    {/* <p className="text-gray-700 mb-2">Speaker: {EventSpeaker}</p> */}
                    <div className="flex justify-between">
                        {/* {isRegisteropen ? (
                            <button
                                className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'
                                onClick={() => window.open(formLink, '_blank')}
                            >
                                {registerOrSoon}
                            </button>
                        ) : (
                            isFutureEvent && (
                                <button
                                    className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600'
                                >
                                    {registerOrSoon}
                                </button>
                            )
                        )} */}
                        <DialogTrigger className='ml-auto'>
                            <button className="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                View
                            </button>
                        </DialogTrigger>
                    </div>
                    {/* {showPopup && ( */}
                    <div className=''>
                        <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                            <div className=" bg-black bg-opacity-50">
                                <div className="bg-white p-8 rounded-md space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-800">{Ename}</h2>
                                    <p className="text-gray-700">{EventDest}</p>
                                    <p className="text-gray-700">Date: {Edate}</p>
                                    <p className="text-gray-700">Time: {Etime}</p>
                                    <p className="text-gray-700">Location: {EventLocation}</p>
                                    {/* <p className="text-gray-700">Track: {EventTrack}</p> */}
                                    {/* <p className="text-gray-700">Speaker: {EventSpeaker}</p> */}
                                    <p className="text-gray-700">Contact 1: {EventConatct1}</p>
                                    <p className="text-gray-700">Contact 2: {EventConatct2}</p>
                                    {/* {isRegisteropen || isFutureEvent ? (
                                <button
                                    className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'
                                    onClick={() => window.open(formLink, '_blank')}
                                >
                                    {registerOrSoon}
                                </button>
                            ) : null} */}
                                    <DialogClose>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                            Close
                                        </button>
                                    </DialogClose>
                                </div>
                            </div>
                        </DialogContent>
                    </div>

                    {/* )} */}
                </div>
            </Dialog>
        </div>
    );
};

const Events = () => {
    const currentDate = new Date();

    return (
        <div>
            <div className="flex items-center justify-center sm:block">
                <div className="sm:ml-20 mt-24 font-title font-bold uppercase text-2xl bg-blue-300 inline-block py-4 px-8 rounded-full">Events  </div>
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {events.map(event => {
                        const eventDate = new Date(event.Edate);
                        const isFutureEvent = eventDate > currentDate;
                        return isFutureEvent || event.isRegisteropen ? (
                            <EventItem key={event.id} event={{ ...event, isFutureEvent }} />
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Events;