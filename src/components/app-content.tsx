export default function AppContent({ children }) {
    return (
        <div className="w-full h-[586px] p-3 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
            { children }
        </div>
    );
}