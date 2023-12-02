import { ComponentProps } from "~/app/common/interfaces/component-props";

interface TitleProps extends ComponentProps { };

export default function Title({ children }: TitleProps) {
  return (
    <>
      <h1 className="text-white font-bold">{children}</h1>
    </>
  );
}