import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQs } from '@/constants/faqs';
import parse from 'html-react-parser';

const Faqs = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedFAQs = showAll ? FAQs : FAQs.slice(0, 6);

    const handleShowMore = () => {
        setShowAll(true);
    };
    return (
        <div className='py-20 md:px-20 px-0' id='faq'>
            <div>
                <p id="shadow" className='text-3xl md:text-5xl font-syne py-8 font-semibold leading-normal w-full'>
                    <span id="glow">Frequently Asked </span><span id="blink">Questions</span>
                </p>
                <div className=''>
                    <div
                        className='md:px-12 px-0 py-8'>
                        <div className='text-black items-center justify-center flex'>
                            <Accordion type="single" collapsible className="w-full font-syne">
                                {displayedFAQs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger><span className='text-black font-semibold'>{faq.question}</span></AccordionTrigger>
                                        <AccordionContent className="text-base">{parse(faq.answer)}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        {!showAll && (
                            <button
                                onClick={handleShowMore}
                                className='mt-4 ml-4 font- px-4 py-2 text-black rounded-md font-oxanium bg-white hover:bg-white/80 duration-200'
                            >
                                Show More
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
