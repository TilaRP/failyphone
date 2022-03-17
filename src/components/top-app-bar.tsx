interface Props {
    barTitle: string;
    barSubtitle: string;
    barColor: string;
}

export default function TopAppBar({ barTitle, barSubtitle, barColor }: Props) {
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
        <div className={`relative flex flex-col justify-center items-start w-full h-20 px-3 ${color[barColor] || ""}`}>
            <h1 className="text-2xl text-slate-50 font-medium">{ barTitle }</h1>
            <p className="text-normal text-slate-300 font-normal">{ barSubtitle }</p>
        </div>
    );
}