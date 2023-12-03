import { IconBaseProps } from "./interfaces/icon-props.interface";

interface CheckBoxDefaultProps extends IconBaseProps {}

export default function CheckBoxDefault({ width = 24, height = 24, onClick }: CheckBoxDefaultProps) {
    return (
        <svg
            className="transition-all hover:fill-green-500 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            onClick={onClick}
        >
            <path d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"></path>
        </svg>
    );
}