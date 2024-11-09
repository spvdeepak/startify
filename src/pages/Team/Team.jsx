import { useMediaQuery } from "react-responsive";
import { teamData } from "./TeamData";
import { UserRoundCog, BookOpenCheck, Split, Briefcase, Lightbulb, CalendarCheck, Landmark, GraduationCap, Truck, Users, Building, Megaphone, Terminal, LibraryBig } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    StaggeredAnimation,
    SlideFromRight,
    SlideFromTop,
} from "@/utils/helper";

import ProfileCard from "./components/ProfileCard/ProfileCard";

import { cn } from "@/utils/utils";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

const Team = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 769px)" });
    // const { isLoading } = useContext(AppContext);

    // if (isLoading) {
    //     return <Loader />;
    // }

    return (
        <>
            <div className="flex mb-10 h-screen flex-col items-center justify-between max-sm:h-full sm:justify-around lg:overflow-y-hidden">
                <div className="flex items-center justify-center sm:block">
                    <div className="md:ml-10 mt-24 font-title font-bold uppercase text-2xl bg-blue-300 inline-block py-4 px-8 rounded-full">Domain Directors</div>
                </div>
                <SlideFromRight className={"mb-6 w-full md:mt-10"}>
                    {/* <Title text="The Team" className={"!pt-0 max-xd:!pt-16"} /> */}
                </SlideFromRight>
                <div className="mx-4 flex flex-wrap items-center justify-center gap-3 max-md:mb-6 sm:gap-6">
                    {teamData.map((team, index) => (
                        <StaggeredAnimation key={index} index={index}>
                            <Sheet key={index}>
                                <SheetTrigger asChild>
                                    <div
                                        className={
                                            "group relative flex w-full cursor-pointer items-center justify-center rounded-lg border font-subtitle backdrop-blur-md"
                                        }
                                    >
                                        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#0077C2] to-[#6F42C1] opacity-25 blur-sm transition ease-in-out"></div>
                                        <div className="relative flex items-center justify-center rounded-lg bg-gradient-to-r from-[rgb(0,119,194,0.4)] to-[rgb(111,66,193,0.4)] p-4 transition-all ease-in-out ">
                                            {/* <img
                                                src={team.icon}
                                                alt={team.domain}
                                                height={24}
                                                className="mr-2 h-8 w-8"
                                            /> */}
                                            <span className="text-white mr-2">{team.icon}</span>
                                            <h1 className="text-sm font-medium text-white sm:text-base lg:text-lg">
                                                {team.domain}
                                            </h1>
                                        </div>
                                    </div>
                                </SheetTrigger>
                                <SheetContent
                                    className={`rounded-t-lg border-l border-r border-t bg-transparent backdrop-blur-md ${isMobile ? "h-[90%]" : "h-[85%]"
                                        } mx-2 flex flex-col justify-start p-0 text-white`}
                                    side="bottom"
                                >
                                    <SheetHeader className="mt-6 flex w-full flex-col items-center justify-center">
                                        <SlideFromTop delay={0.2}>
                                            <h1 className="text-center font-nasa text-2xl text-white sm:text-3xl lg:text-4xl">
                                                {team.domain}
                                            </h1>
                                        </SlideFromTop>
                                        <SlideFromTop delay={2 * 0.2}>
                                            <h4 className="text-center font-novaSquare text-base sm:text-xl">
                                                {team.email.split(" ").map((email, index) => (
                                                    <div key={index}>{email}</div>
                                                ))}
                                            </h4>
                                        </SlideFromTop>
                                    </SheetHeader>
                                    <SheetDescription
                                        className={`${isMobile ? "my-4" : "my-8"
                                            } h-full gap-3 md:grid md:grid-flow-col xd:justify-items-center`}
                                    >
                                        {isMobile ? (
                                            <Carousel className={cn("h-full")}>
                                                <CarouselContent className={cn("h-full")}>
                                                    {team.members.map((member, index) => (
                                                        <CarouselItem className={cn("h-full")} key={index}>
                                                            <ProfileCard {...member} domain={team.domain} />
                                                        </CarouselItem>
                                                    ))}
                                                </CarouselContent>
                                                <CarouselPrevious
                                                    className={cn(
                                                        "left-1 max-xs:h-7 max-xs:w-7 xs:left-5",
                                                    )}
                                                />
                                                <CarouselNext
                                                    className={cn(
                                                        "right-1 max-xs:h-7 max-xs:w-7 xs:right-5",
                                                    )}
                                                />
                                            </Carousel>
                                        ) : (
                                            team.members.map((member, index) => {
                                                const count = team.members.length;
                                                return (
                                                    <ProfileCard
                                                        key={index}
                                                        {...member}
                                                        count={count}
                                                        domain={team.domain}
                                                    />
                                                );
                                            })
                                        )}
                                    </SheetDescription>
                                </SheetContent>
                            </Sheet>
                        </StaggeredAnimation>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Team;
