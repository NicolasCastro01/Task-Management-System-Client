import { ComponentProps } from "~/app/common/interfaces/component-props";

interface BodyProps extends ComponentProps { };

export default function Body({ children }: BodyProps) {
  return (
    <>
      <section id="form-body"
        className="
          flex
          flex-col
        "
      >
        {children}
      </section>
    </>
  );
}