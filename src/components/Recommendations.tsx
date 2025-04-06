import rdHead from "@/assets/recos/devore.jpg";
import rpHead from "@/assets/recos/paga.jpg";
import rsHead from "@/assets/recos/seitz.jpg";

import clsx from "clsx";
import { Section, SectionTitle } from "./Widgets";

const styles = {
  entry:
    "relative flex-row-v-center w-full py-4 pr-4 bg-cinder-900 rounded-md shadow-md",
  entryHeadshot: "rounded-full size-40 overflow-hidden flex-none mx-8",
  entryBody: "flex flex-col gap-2",
  entryPerson: "flex-row-v-center gap-x-1",
  entryRole: "text-neutral-300 ml-2",
  entryLink:
    "mt-1 text-xs text-blue-400 hover:brightness-125 cursor-pointer transition",
  quot: "text-2xl text-neutral-50 absolute",
  quotEnd: "-ml-2",
  content: "indent-4",
};

const Recommendations = () => {
  return (
    <Section>
      <SectionTitle>What People Are Saying</SectionTitle>

      <div className="flex-col-center gap-y-4 w-full md:w-3/4">
        <div className={styles.entry}>
          <div className={styles.entryHeadshot}>
            <a
              className={styles.entryLink}
              href="https://www.linkedin.com/in/robin-seitz-12029970/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rsHead} />
            </a>
          </div>
          <div className={styles.entryBody}>
            <div className={styles.entryPerson}>
              <h5>
                <strong>Robin Seitz</strong>
                <span className={styles.entryRole}>— CTO @ Kater.ai</span>
              </h5>
            </div>
            <div>
              <span className={styles.quot}>“</span>
              <p className={styles.content}>
                Ramce is a fantastic engineer. I have nothing but good things to
                say about his work ethic, his deep knowledge of front-end
                development, and how easy he is to work with. He picks up new
                skills quickly and with genuine enthusiasm, and he truly cares
                about his craft—always striving to deliver high-quality,
                thoughtful code. On top of that, he's professional,
                collaborative, and just a great person to work with. I’d highly
                recommend him to anyone looking for a talented Front-End
                engineer, whether for contract work or a full-time.{" "}
                <span className={clsx(styles.quot, styles.quotEnd)}>”</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryHeadshot}>
            <a
              className={styles.entryLink}
              href="https://www.linkedin.com/in/russell-devore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rdHead} />
            </a>
          </div>
          <div className={styles.entryBody}>
            <div className={styles.entryPerson}>
              <h5>
                <strong>Russell DeVore</strong>{" "}
                <span className={styles.entryRole}>
                  — Product @ Kforce Inc, Vesta
                </span>
              </h5>
            </div>
            <div>
              <span className={styles.quot}>“</span>
              <p className={styles.content}>
                During my time at Vesta, I had the pleasure of working with
                Ramce on several features. Ramce's attention to detail during
                demo's was greatly appreciated, he always tried to put himself
                in the shoes of the user (as a product person that's pure gold
                when you find an engineer that wants to think like a user!), and
                if a solution was going to take more time to get right he never
                hesitated to be transparent about those challenges.{" "}
                <span className={clsx(styles.quot, styles.quotEnd)}>”</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryHeadshot}>
            <a
              className={styles.entryLink}
              href="https://www.linkedin.com/in/reymundo-paga-b4317186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rpHead} />
            </a>
          </div>
          <div className={styles.entryBody}>
            <div className={styles.entryPerson}>
              <h5>
                <strong>Reymundo Paga</strong>{" "}
                <span className={styles.entryRole}>
                  — Lead @ Home Credit Philippines, Vesta
                </span>
              </h5>
            </div>
            <div>
              <span className={styles.quot}>“</span>
              <p className={styles.content}>
                Ramce stands out as an exceptionally reliable software engineer
                with excellent communication skills. His admirable work ethic
                shines through, as he remains composed and sensible,
                particularly in challenging situations. He is truly someone
                worth keeping!{" "}
                <span className={clsx(styles.quot, styles.quotEnd)}>”</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Recommendations;
