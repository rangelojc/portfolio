import headshot from "@/assets/headshot.png";
import clsx from "clsx";

const styles = {
  button:
    "cursor-pointer default-hover-effect py-2 px-4 rounded text-neutral-100 font-medium text-center",
};

const Hero = () => {
  return (
    <section className="h-full w-full min-h-[600px] flex-col-center bg-cinder-950 p-12 md:p-0 md:h-1/2">
      <div className="flex-col-center w-full h-full gap-y-8 md:!flex-row md:!gap-x-8">
        <div className="w-full space-y-4 flex-col-v-center md:!w-[35%] lg:!w-[30%] md:justify-center">
          <h1 className="text-5xl font-light text-center md:!text-left">
            Hi, I'm <span className="font-medium">Ramce Concepcion</span>
          </h1>
          <p className="text-lg text-center md:!text-left">
            Seasoned software / front end engineer with years of experience
            writing code for the web.
          </p>

          <div className="flex-row-center gap-x-4 md:!justify-start">
            <button className={clsx(styles.button, "bg-slate-600")}>
              VIEW MY WORK
            </button>
            <a
              className={clsx(styles.button, "bg-slate-100 text-neutral-800")}
              href="mailto:ramceconcepcion@gmail.com"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        <div className="overflow-hidden size-[300px] rounded-full flex-row-v-center">
          <img src={headshot} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
