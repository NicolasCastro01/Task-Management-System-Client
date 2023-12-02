import { ComponentProps } from "~/app/common/interfaces/component-props";

interface HeaderProps extends ComponentProps { };

export default function Header({ children }: HeaderProps) {
  return (
    <>
      <section id="form-header" className="flex items-center justify-center">
          {children}
      </section>
    </>
  );
}