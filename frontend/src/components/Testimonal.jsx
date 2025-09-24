import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const Testimonal = () => {
    const cardsData = [
        { image: p1, name: "Briar Martin", handle: "@neilstellar", date: "April 20, 2025" },
        { image: p2, name: "Avery Johnson", handle: "@averywrites", date: "May 10, 2025" },
        { image: p3, name: "Jordan Lee", handle: "@jordantalks", date: "June 5, 2025" },
        { image: p4, name: "Avery Johnson", handle: "@averywrites", date: "May 10, 2025" },
        { image: p5, name: "Sam Ridhi", handle: "@samridi", date: "July 15, 2025" },
        { image: p6, name: "Taylor Swift", handle: "@taylorsongs", date: "August 1, 2025" },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-xl mx-4 shadow-lg hover:shadow-2xl transition-all duration-300 w-72 shrink-0 bg-white border-t-4 border-[#933757]">
            <div className="flex gap-3">
                <img className="w-12 h-12 rounded-full border-2 border-[#933757]" src={card.image} alt="User" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-[#933757]">{card.name}</p>
                        <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24..." fill="#933757" />
                        </svg>
                    </div>
                    <span className="text-xs text-[#933757]/70">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">Radiant made undercutting all of our competitors an absolute breeze.</p>
            <div className="flex items-center justify-between text-[#933757]/80 text-xs">
                <div className="flex items-center gap-1">
                    <span>Posted on</span>
                    <a href="https://x.com" target="_blank" className="hover:text-[#933757] transition-colors">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (
        <>
            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-inner {
                    animation: marqueeScroll 25s linear infinite;
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }
            `}</style>

            {/* First marquee */}
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            {/* Reverse marquee */}
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </>
    );
};

export default Testimonal;
