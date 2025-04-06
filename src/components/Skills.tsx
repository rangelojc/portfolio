import expressIcon from "@/assets/stack/expressjs.png";
import jsIcon from "@/assets/stack/js.svg";
import mongoIcon from "@/assets/stack/mongodb.svg";
import nextIcon from "@/assets/stack/next.svg";
import nodeIcon from "@/assets/stack/nodejs.png";
import reactIcon from "@/assets/stack/react.png";
import reactflowIcon from "@/assets/stack/reactflow.ico";
import sassIcon from "@/assets/stack/sass.svg";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import tradingviewIcon from "@/assets/stack/tradingview.webp";
import tsIcon from "@/assets/stack/typescript.svg";
import vueIcon from "@/assets/stack/vue.svg";

import clsx from "clsx";
import { Section, SectionTitle } from "./Widgets";

const styles = { icon: "w-auto h-12 md:h-20 !flex-none" };
const Skills = () => {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>

      <div className="flex flex-wrap justify-center w-full md:w-3/4lg:w-1/2 gap-x-8 gap-y-4">
        <img src={jsIcon} className={styles.icon} />
        <img src={tsIcon} className={styles.icon} />
        <img src={reactIcon} className={styles.icon} />
        <img src={nextIcon} className={clsx(styles.icon, "bg-neutral-100")} />

        <img src={vueIcon} className={styles.icon} />
        <img src={nodeIcon} className={styles.icon} />
        <img
          src={expressIcon}
          className={clsx(styles.icon, "bg-neutral-100")}
        />
        <img src={sassIcon} className={styles.icon} />
        <img src={tailwindIcon} className={styles.icon} />
        <img
          src={reactflowIcon}
          className={clsx(styles.icon, "bg-neutral-100")}
        />
        <img
          src={tradingviewIcon}
          className={clsx(styles.icon, "bg-neutral-100")}
        />
        <img src={mongoIcon} className={styles.icon} />
      </div>
    </Section>
  );
};

export default Skills;
