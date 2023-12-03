import { IconBaseProps } from "./interfaces/icon-props.interface";

interface CheckBoxCheckedProps extends IconBaseProps { }

export default function CheckBoxChecked({ width = 24, height = 24, onClick }: CheckBoxCheckedProps) {
    return (
        <svg
            className="transition-all hover:fill-white fill-green-500"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            onClick={onClick}
        >
            <path d="M7 5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm4 10.414l-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
        </svg>
    );
}