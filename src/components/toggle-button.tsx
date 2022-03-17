import { Component } from "solid-js";

type toggleButtonProps = {
    dotColor: string,
    onChange: (event) => void,
    defaultChecked: boolean
};

export const ToggleButton: Component<toggleButtonProps> = ({ dotColor, onChange, defaultChecked }) => {
    const color = {
        "emerald": "bg-emerald-600",
        "teal": "bg-teal-700",
        "orange": "bg-orange-700",
        "fuchsia": "bg-fuchsia-700",
        "violet": "bg-violet-700",
        "indigo": "bg-indigo-700",
        "red": "bg-red-700",
        "yellow": "bg-yellow-500",
        "gray": "bg-gray-700",
        "green": "bg-green-800",
    };

    return (
        <span className="relative w-[58px] h-[38px] p-3">
            <input
                className="absolute z-50 top-0 left-0 w-full h-full opacity-0 cursor-pointer peer"
                type="checkbox"
                onChange={onChange}
                checked={defaultChecked}
                aria-label="toggle-button"
            />
            <span className="block w-full h-full rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="absolute z-40 top-1/2 left-3 -translate-y-1/2 block w-5 h-5 rounded-full bg-gray-500 transition-transform peer-checked:translate-x-3.5"></span>
        </span>
    );
}

export default ToggleButton;