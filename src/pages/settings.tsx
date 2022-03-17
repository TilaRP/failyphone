import TopAppBar from "@components/top-app-bar";
import ToggleButton from "@components/toggle-button";
import { useTheme } from "@contexts/theme-context";
import AppContent from "@components/app-content";

export default function Settings() {
    const [state, { setLightTheme, setDarkTheme }] = useTheme();

    function handleTheme(event) {
        const isActive = event.target.checked;
        if (isActive) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    return (
        <div className="relative w-full h-full">
            <TopAppBar
                barTitle="Paramètres"
                barSubtitle="Liste des paramètres"
                barColor="gray"
            />
            <AppContent>
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-lg font-normal">Mode sombre</h3>
                    <ToggleButton
                        dotColor="gray"
                        onChange={handleTheme}
                        defaultChecked={state.theme === "dark" ? true : false}
                    />
                </div>
            </AppContent>
        </div>
    );
}