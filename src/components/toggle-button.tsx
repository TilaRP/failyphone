import { createSignal } from "solid-js";

interface Props {
    dotColor: string;
    action: () => void;
    initialState: boolean;
}

export default function ToggleButton({ dotColor, action, initialState }: Props) {
    const [isActive, setIsActive] = createSignal(initialState);

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

    function handleClick() {
        action();
        setIsActive(!isActive());
    }

    return (
        <button className="relative w-10 h-4 rounded-full bg-slate-300" onClick={handleClick}>
            <span className={`absolute top-1/2 left-0 -translate-y-1/2 block w-6 h-6 rounded-full ${color[dotColor] || ""} ${isActive() ? "translate-x-4" : ""}`}></span>
        </button>
    );
}