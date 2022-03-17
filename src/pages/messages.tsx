import TopAppBar from "@components/top-app-bar";

export default function Messages() {
    return (
        <div className="relative w-full h-full bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
            <TopAppBar
                barTitle="Messages"
                barSubtitle="Liste des discussions"
                barColor="teal"
            />
        </div>
    );
}