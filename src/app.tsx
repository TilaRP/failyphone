import { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import { routes } from './routes';
import frame from '@assets/images/frame.svg';
import { ThemeProvider } from '@contexts/theme-context';

const App: Component = () => {
    const Route = useRoutes(routes);

    return (
        <main className="flex justify-center items-center w-full min-h-screen bg-slate-800">
            <div className="relative">
                <img className="w-[424px]" src={frame} alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[376px] h-[668px] border border-slate-800 rounded-lg overflow-hidden">
                    <ThemeProvider theme="light">
                        <Route />
                    </ThemeProvider>
                </div>
            </div>
        </main>
    );
};

export default App;
