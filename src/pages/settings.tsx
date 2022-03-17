import TopAppBar from "@components/top-app-bar";
import ToggleButton from "@components/toggle-button";
import { useTheme } from "@contexts/theme-context";

export default function Settings() {
    const [state, { setLightTheme, setDarkTheme }] = useTheme();

    function handleTheme() {
        if (state.theme === "dark") {
            setLightTheme();
        } else if (state.theme === "light") {
            setDarkTheme();
        }
    }

    return (
        <div className="relative w-full h-full bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
            <TopAppBar
                barTitle="Paramètres"
                barSubtitle="Liste des paramètres"
                barColor="gray"
            />
            <div className="w-full p-3">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-lg font-normal">Mode sombre</h3>
                    <ToggleButton dotColor="gray" action={handleTheme} initialState={state.theme === "dark" ? true : false} />
                </div>
            </div>
        </div>
    );
}