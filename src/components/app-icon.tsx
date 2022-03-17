import { Link } from "solid-app-router";

interface Props {
    iconColor: string;
    appLink: string;
    children?: any;
};

export default function AppIcon({iconColor, appLink, children }: Props) {
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
        <Link className="rounded-xl overflow-hidden focus:outline-neutral-200" href={appLink}>
            <div className={`w-14 h-14 bg-gradient-to-l ${color[iconColor] || ""}`}>
                { children }
            </div>
        </Link>
    );
}