import rdHead from "@/assets/recos/devore.jpg";
import rpHead from "@/assets/recos/paga.jpg";
import rsHead from "@/assets/recos/seitz.jpg";

import clsx from "clsx";
import { Section, SectionTitle } from "./Widgets";

const RecommendationEntry = ({
  headshot,
  name,
  role,
  quote,
  link,
}: {
  headshot: string;
  name: string;
  role: string;
  quote: string;
  link: string;
}) => (
  <div className="relative flex-col-center w-full py-12 px-4 bg-cinder-900 rounded-md shadow-md gap-y-8 md:!flex-row md:pl-0 md:gap-y-0 md:py-4">
    <div className="rounded-full size-[220px] overflow-hidden flex-none mx-8 md:size-40 ">
      <a
        className="mt-1 text-xs text-blue-400 hover:brightness-125 cursor-pointer transition"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={headshot} />
      </a>
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex-row-v-center gap-x-1">
        <h5>
          <strong>{name}</strong>{" "}
          <span className="text-neutral-300">— {role}</span>
        </h5>
      </div>
      <div>
        <span className="text-2xl text-neutral-50 absolute">“</span>
        <p className="indent-4">
          {quote}{" "}
          <span className={clsx("text-2xl text-neutral-50 absolute", "-ml-2")}>
            ”
          </span>
        </p>
      </div>
    </div>
  </div>
);

const Recommendations = () => {
  return (
    <Section>
      <SectionTitle>What People Are Saying</SectionTitle>

      <div className="flex-col-center gap-y-4 w-full md:w-3/4">
        <RecommendationEntry
          headshot={rsHead}
          name="Robin Seitz"
          role="CTO @ Kater.ai"
          link="https://www.linkedin.com/in/robin-seitz-12029970/"
          quote="Ramce is a fantastic engineer. I have nothing but good things to say about his work ethic, his deep knowledge of front-end development, and how easy he is to work with. He picks up new skills quickly and with genuine enthusiasm, and he truly cares about his craft—always striving to deliver high-quality, thoughtful code. On top of that, he's professional, collaborative, and just a great person to work with. I’d highly recommend him to anyone looking for a talented Front-End engineer, whether for contract work or a full-time."
        />
        <RecommendationEntry
          headshot={rdHead}
          name="Russell DeVore"
          role="Product @ Kforce Inc, Vesta"
          link="https://www.linkedin.com/in/russell-devore/"
          quote="During my time at Vesta, I had the pleasure of working with Ramce on several features. Ramce's attention to detail during demo's was greatly appreciated, he always tried to put himself in the shoes of the user (as a product person that's pure gold when you find an engineer that wants to think like a user!), and if a solution was going to take more time to get right he never hesitated to be transparent about those challenges."
        />
        <RecommendationEntry
          headshot={rpHead}
          name="Reymundo Paga"
          role="Lead @ Home Credit Philippines, Vesta"
          link="https://www.linkedin.com/in/reymundo-paga-b4317186/"
          quote="Ramce stands out as an exceptionally reliable software engineer with excellent communication skills. His admirable work ethic shines through, as he remains composed and sensible, particularly in challenging situations. He is truly someone worth keeping!"
        />
      </div>
    </Section>
  );
};

export default Recommendations;
