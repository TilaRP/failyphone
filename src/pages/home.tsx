import InfoBar from '@components/info-bar';
import Dashboard from '@components/dashboard';
import wallpaper from '@assets/images/wallpaper.jpg';

export default function Home() {
    return (
        <div className="relative w-full h-full">
            <img className="w-full h-full object-cover" src={wallpaper} alt="" />
            <InfoBar />
            <Dashboard />
        </div>
    );
}
