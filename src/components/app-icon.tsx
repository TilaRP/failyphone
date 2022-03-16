interface Props {
    iconColor: string;
    children?: any;
};

export default function AppIcon({iconColor, children }: Props) {
    const color = {
        "emerald": "from-emerald-400 to-emerald-600",
        "teal": "from-teal-500 to-teal-700",
        "orange": "from-orange-500 to-orange-700",
        "fuchsia": "from-fuchsia-500 to-fuchsia-700",
        "violet": "from-violet-500 to-violet-700",
        "indigo": "from-indigo-500 to-indigo-700",
        "red": "from-red-500 to-red-700",
        "yellow": "from-yellow-300 to-yellow-500",
        "gray": "from-gray-500 to-gray-700",
        "green": "from-green-600 to-green-800",
    };

    return (
        <button className={`w-[56px] h-[56px] rounded-[12px] bg-gradient-to-r ${color[iconColor] || ""}`}>
            { children }
        </button>
    );
}