import { FaLinkedin } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Reveal, SlideFromBottom, SlideFromLeft } from "@/utils/helper";

import styles from "./ProfileCard.module.css";

import { basePath } from "../../TeamData";

const ProfileCard = ({ name, mobile, linkedIn, image, domain, count }) => {
  return (
    <div className="flex flex-col items-center max-xd:h-full max-xd:justify-center">
      <SlideFromBottom delay={0.3}>
        <Card
          className={`w-[200px] bg-transparent text-white ${
            count <= 2 ? "xm:w-[240px]" : "xm:w-[220px]"
          } ${styles.card}`}
        >
          <CardHeader className="p-0">
            <Reveal delay={0.4}>
              <img
                src={`${basePath}/${image}`}
                alt={`${name}`}
                className="px-4 pt-4"
              />
            </Reveal>
            <CardTitle className="mx-5">
              <SlideFromLeft delay={0.3}>
                <h1 className="font-novaSquare text-lg tracking-tight md:text-xl">
                  {name}
                </h1>
              </SlideFromLeft>
            </CardTitle>
          </CardHeader>
          <CardContent className="mx-5 mt-2 p-0 pb-6">
            <CardDescription className="flex items-center justify-between">
              <Reveal delay={0.3}>
                <a
                  target="_blank"
                  href={`tel:${mobile}`}
                  className="font-number text-base text-white"
                >
                  {mobile}
                </a>
              </Reveal>
              <Reveal delay={0.3}>
                <a target="_blank" href={linkedIn} className="group">
                  <FaLinkedin
                    size={24}
                    className="cursor-pointer text-white transition-all duration-300 sm:group-hover:scale-125 sm:group-hover:text-blue-500"
                  />
                </a>
              </Reveal>
            </CardDescription>
          </CardContent>
        </Card>
      </SlideFromBottom>
      {/* <div className={`${styles.hologram}`}></div> */}
    </div>
  );
};

export default ProfileCard;
