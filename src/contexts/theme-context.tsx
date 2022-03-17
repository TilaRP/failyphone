import { Component, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

type ThemeStore = [
    { theme: string },
    { setLightTheme?: () => void; setDarkTheme?: () => void }
];

export const ThemeContext = createContext<ThemeStore>([{ theme: "light" }, {}]);

export const ThemeProvider: Component<{ theme: string }> = (props) => {
    const [state, setState] = createStore({ theme: props.theme || "light" });

    const store: ThemeStore = [
        state,
        {
            setLightTheme() {
                if (state.theme === "dark") {
                    document.documentElement.classList.remove("dark");
                    setState("theme", () => "light");
                }
            },
            setDarkTheme() {
                if (state.theme === "light") {
                    document.documentElement.classList.add("dark");
                    setState("theme", () => "dark");
                }
            }
        },
    ];

    return (
        <ThemeContext.Provider value={store}>
            { props.children }
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
