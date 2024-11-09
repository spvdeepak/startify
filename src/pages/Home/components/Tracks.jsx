const Tracks = () => {
    return (
        <div className="bg-slate-100 bg-fixed flx items-center justify-center" id="tracks">
            <div className="flex items-center justify-center sm:block">
                <div className="sm:ml-20 mt-16 font-title font-bold uppercase text-2xl bg-blue-300 inline-block py-4 px-8 rounded-full">What is Startify 3.0?</div>
            </div>
            <div className="sm:ml-28 mt-8 pb-8 mr-24">
                <div className="text-xl font-title text-justify">
                    Startify 3.0 Startup Ecosystem conclave, organized by the Centre for Entrepreneurship Development (CED) at
                    Anna University is designed to bring together budding entrepreneurs, industry experts, investors, and academia under
                    one roof to celebrate innovation and entrepreneurship. The event will feature a series of key activities aimed at nurturing
                    and accelerating entrepreneurial initiatives and set to be a vibrant confluence of ideas, talent, and opportunities, paving
                    the way for the next generation of innovators and leaders.
                </div>
            </div>


            <div className="flex items-center justify-center sm:block">
                <div className="sm:ml-20 mt-1 font-title font-bold uppercase text-2xl bg-blue-300 inline-block py-4 px-8 rounded-full">Objectives</div>
            </div>
            <div className="sm:ml-28 mt-8 pb-8">
                <ul className="text-xl font-title list-disc">
                    <li className="pb-3">Provide a platform for students and early-stage startups to develop and showcase innovative ideas</li>
                    <li className="pb-3">Encourage entrepreneurial activities within educational institutions and support the formation of new startups.</li>
                    <li className="pb-3">Honor outstanding contributions to the entrepreneurial ecosystem, with a special focus on women entrepreneurs.</li>
                    <li className="pb-3">Assist in the legal and administrative processes of company registration/patent filing, enabling the formalization
                        of validated innovations.</li>
                </ul>
            </div>

            <div className="flex items-center justify-center sm:block">
                <div className="sm:ml-20 mt-1 font-title font-bold uppercase text-2xl bg-blue-300 inline-block py-4 px-8 rounded-full">Outcomes</div>
            </div>
            <div className="sm:ml-28 mt-8 pb-8">
                <ul className="text-xl font-title list-disc">
                    <li className="pb-3">Successful creation and validation of prototypes that can potentially be commercialized.</li>
                    <li className="pb-3">Recognition and reward of colleges and individuals who have made significant contributions to the
                        entrepreneurship ecosystem.</li>
                    <li className="pb-3">Support for the creation of new startups through structured registration drives and mentorship.</li>
                    <li className="pb-3">Opportunities for participants to connect with investors, industry experts, and mentors, facilitating the growth of
                        their ventures.</li>
                </ul>
            </div>
        </div>
    )
}
export default Tracks;