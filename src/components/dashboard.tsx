import AppIcon from "./app-icon";

export default function Dashboard() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-[160px] px-3 pb-3">
            <div className="grid grid-cols-5 gap-3 w-full h-full bg-[rgba(23,23,23,0.65)] rounded-[16px] p-3">
                <AppIcon iconColor="red" />
                <AppIcon iconColor="fuchsia" />
                <AppIcon iconColor="green" />
                <AppIcon iconColor="yellow" />
                <AppIcon iconColor="gray" />
                <AppIcon iconColor="emerald" />
                <AppIcon iconColor="teal" />
                <AppIcon iconColor="orange" />
                <AppIcon iconColor="violet" />
                <AppIcon iconColor="indigo" />
            </div>
        </div>
    );
}