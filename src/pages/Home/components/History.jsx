// import { CircleDotDashed, Star } from 'lucide-react';
import { Timeline } from "@/components/ui/timeline";
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const History = () => {
    const data = [
        {
            title: "21st Feb 2025",
            content: (
                <div>
                    <div className="font-bold text-base text-gray-700">11:30 AM to 6:30 PM</div>
                    <div className="text-xl pb-5 pt-2">Startup Café Finale</div>

                    <div className="font-bold text-base text-gray-700">11:30 AM to 1:00 PM</div>
                    <div className="text-xl pb-5 pt-2">Sharkwars Finale</div>

                    <div className="font-bold text-base text-gray-700">11:30 AM to 6:00 PM</div>
                    <div className="text-xl pb-5 pt-2">Innovators Grand Slam – Connect</div>

                    <div className="font-bold text-base text-gray-700">11:30 AM to 12:15 PM</div>
                    <div className="text-xl pb-5 pt-2">Panel Discussion 1 – Open for All</div>

                    <div className="font-bold text-base text-gray-700">12:30 PM to 1:15 PM</div>
                    <div className="text-xl pb-5 pt-2">Panel Discussion 2 – Open for All</div>

                    <div className="font-bold text-base text-gray-700">1:30 PM to 3:30 PM</div>
                    <div className="text-xl pb-5 pt-2">Startup Avatar – Pitch</div>

                    <div className="font-bold text-base text-gray-700">1:15 PM to 2:00 PM</div>
                    <div className="text-xl pb-5 pt-2">StartUp Path Finder – AI Mentor Connect Panel Discussion 3 (Closed Panel)</div>
                </div>
            ),
        },
        {
            title: "22nd Feb 2025",
            content: (
                <div>
                    <div className="font-bold text-base text-gray-700">9:00 AM to 11:30 AM</div>
                    <div className="text-xl pb-5 pt-2">Innovators Grand Slam – Pitch</div>

                    <div className="font-bold text-base text-gray-700">9:30 AM to 10:15 AM</div>
                    <div className="text-xl pb-5 pt-2">Panel Discussion 4 – Open for All</div>

                    <div className="font-bold text-base text-gray-700">10:30 AM to 11:15 AM</div>
                    <div className="text-xl pb-5 pt-2">Panel Discussion 5 – Open for All</div>

                    <div className="font-bold text-base text-gray-700">11:30 AM to 12:15 PM</div>
                    <div className="text-xl pb-5 pt-2">Panel Discussion 6 – Campus Incubators: Empowering Students to Launch Global Ventures – Open for All</div>

                    <div className="font-bold text-base text-gray-700">12:30 AM to 1:15 PM</div>
                    <div className="text-xl pb-5 pt-2">CED – Institutions Connect</div>

                    <div className="font-bold text-base text-gray-700">1:15 PM to 2:00 PM</div>
                    <div className="text-xl pb-5 pt-2">Panel Discussion 7 – Open for All</div>
                </div>
            )
        }
    ];

    return (
        <div className='bg-[#f1f5f9]'>
            <div className="sm:ml-20 mt-1 font-title font-bold uppercase text-2xl bg-blue-300 inline-block py-4 px-8 rounded-full">Schedule</div>
            <Timeline data={data} />
        </div>
    )
}
export default History;