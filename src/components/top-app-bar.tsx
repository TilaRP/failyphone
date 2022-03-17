import { Component } from "solid-js";

interface TopAppBarSettings {
    barTitle: string;
    barSubtitle: string;
    barColor: string;
}

const color = {
    emerald: {
        background: "from-emerald-500 to-emerald-700",
        primaryText: "text-emerald-50",
        secondaryText: "text-emerald-200",
    },
    teal: {
        background: "from-teal-500 to-teal-700",
        primaryText: "text-teal-50",
        secondaryText: "text-teal-200",
    },
    orange: {
        background: "from-orange-500 to-orange-700",
        primaryText: "text-orange-50",
        secondaryText: "text-orange-200",
    },
    fuchsia: {
        background: "from-fuchsia-500 to-fuchsia-700",
        primaryText: "text-fuchsia-50",
        secondaryText: "text-fuchsia-200",
    },
    violet: {
        background: "from-violet-500 to-violet-700",
        primaryText: "text-violet-50",
        secondaryText: "text-violet-200",
    },
    indigo: {
        background: "from-indigo-500 to-indigo-700",
        primaryText: "text-indigo-50",
        secondaryText: "text-indigo-200",
    },
    red: {
        background: "from-red-500 to-red-700",
        primaryText: "text-red-50",
        secondaryText: "text-red-200",
    },
    yellow: {
        background: "from-yellow-500 to-yellow-700",
        primaryText: "text-yellow-50",
        secondaryText: "text-yellow-200",
    },
    gray: {
        background: "from-gray-500 to-gray-700",
        primaryText: "text-gray-50",
        secondaryText: "text-gray-200",
    },
    green: {
        background: "from-green-500 to-green-700",
        primaryText: "text-green-50",
        secondaryText: "text-green-200",
    }
};

const TopAppBar: Component<TopAppBarSettings> = ({ barTitle, barSubtitle, barColor }) => {
    return (
        <div className={`relative flex flex-col justify-center items-start w-full h-20 px-3 bg-gradient-to-l ${color[barColor].background || ""}`}>
            <h1 className={`text-2xl font-medium ${color[barColor].primaryText || ""}`}>{ barTitle }</h1>
            <p className={`text-normal text-slate-300 font-normal ${color[barColor].secondaryText || ""}`}>{ barSubtitle }</p>
        </div>
    );
}

export default TopAppBar;