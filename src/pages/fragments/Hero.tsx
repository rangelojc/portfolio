import bg from "@/assets/bg.jpg";
import headshot from "@/assets/headshot.png";
import clsx from "clsx";
import { motion } from "framer-motion";
import { motionEnterFromFadeY, scrollTargetToChild } from "../../utils";

const styles = {
  button:
    "cursor-pointer default-hover-effect py-2 px-4 rounded text-neutral-100 font-medium text-center",
};

const Hero = () => {
  const goToProjects = () => {
    scrollTargetToChild("#appScrollContainer", "#projectsSection", true, -50);
  };

  return (
    <section className="size-full min-h-[600px] flex-col-center bg-primary-950 relative overflow-hidden md:h-1/2">
      <div className="opacity-[3%] absolute z-1 size-full flex-row-center">
        <img
          src={bg}
          className="max-w-fit h-full md:h-auto md:!w-full md:!max-w-none"
        />
      </div>

      <div className="flex-none absolute z-2 flex-col-center size-full gap-y-8 px-4 md:!flex-row md:gap-x-8 md:px-0">
        <div className="w-full space-y-4 flex-col-v-center md:!w-[35%] lg:!w-[30%] md:justify-center">
          <motion.h1
            {...motionEnterFromFadeY(undefined, { delay: 0 })}
            className="text-3xl md:text-5xl font-light text-center md:!text-left"
          >
            Hi, I'm <span className="font-medium">Ramce Concepcion</span>
          </motion.h1>
          <motion.p
            {...motionEnterFromFadeY(undefined, { delay: 0.2 })}
            className="text-base md:text-lg text-center md:!text-left"
          >
            Seasoned software / front end engineer with years of experience
            writing code for the web.
          </motion.p>

          <motion.div
            {...motionEnterFromFadeY(undefined, { delay: 0.4 })}
            className="flex-row-center gap-x-4 md:!justify-start text-sm md:text-base"
          >
            <button
              className={clsx(styles.button, "bg-primary-700")}
              onClick={goToProjects}
            >
              VIEW MY WORK
            </button>
            <a
              className={clsx(styles.button, "bg-secondary-600")}
              href="mailto:ramceconcepcion@gmail.com"
            >
              CONTACT ME
            </a>
          </motion.div>
        </div>

        <motion.div
          {...motionEnterFromFadeY(undefined, { delay: 0.6 })}
          className="flex-none overflow-hidden size-[200px] md:size-[300px] rounded-full flex-row-v-center"
        >
          <img src={headshot} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
