import TopAppBar from "@components/top-app-bar";
import AppContent from "@components/app-content";

export default function Messages() {
    return (
        <div className="relative w-full h-full">
            <TopAppBar
                barTitle="Messages"
                barSubtitle="Liste des discussions"
                barColor="teal"
            />
            <AppContent>
                
            </AppContent>
        </div>
    );
}