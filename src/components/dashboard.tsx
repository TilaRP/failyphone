import AppIcon from "@components/app-icon";

export default function Dashboard() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-40 px-3 pb-3">
            <div className="grid grid-cols-5 gap-3 w-full h-full bg-[rgba(23,23,23,0.65)] rounded-2xl p-3">
                <AppIcon appLink="/" iconColor="red" />
                <AppIcon appLink="/" iconColor="fuchsia" />
                <AppIcon appLink="/" iconColor="green" />
                <AppIcon appLink="/" iconColor="yellow" />
                <AppIcon appLink="/settings" iconColor="gray" />
                <AppIcon appLink="/" iconColor="emerald" />
                <AppIcon appLink="/messages" iconColor="teal" />
                <AppIcon appLink="/" iconColor="orange" />
                <AppIcon appLink="/" iconColor="violet" />
                <AppIcon appLink="/" iconColor="indigo" />
            </div>
        </div>
    );
}