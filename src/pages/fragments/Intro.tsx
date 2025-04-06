import { Section } from "./Widgets";

const Intro = () => {
  const yearsOfExperience = new Date().getFullYear() - 2017;

  return (
    <Section className="mt-20 flex-row-center">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <p className="text-center text-lg">
          I'm a software / frontend engineer with {yearsOfExperience} years of
          experience building scalable, maintainable, and user-friendly web
          applications. I specialize in frontend technologies, with a deep focus
          on React. Throughout my career, I've worked with a variety of
          employers & clients, from startups to established companies, helping
          them craft seamless user experiences.
        </p>
      </div>

      <div className="w-1/2 h-[1px] mt-20 -mb-24 bg-gradient-to-l from-transparent via-primary-400 to-transparent" />
    </Section>
  );
};

export default Intro;
