import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export const Section = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      {...props}
      className={clsx(
        "w-full h-auto flex-col-center px-8 md:px-[10%]",
        props.className
      )}
    >
      {props.children}
    </section>
  );
};

export const SectionTitle = (props: ComponentPropsWithoutRef<"h4">) => {
  return (
    <h4
      {...props}
      className={clsx(
        "text-neutral-50 text-2xl font-medium my-8",
        props.className
      )}
    >
      {props.children}
    </h4>
  );
};
