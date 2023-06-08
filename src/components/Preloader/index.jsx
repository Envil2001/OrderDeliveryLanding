import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
            scroll.update(); // Обновляем Locomotive Scroll после загрузки preloader'а
        };

        // Симуляция задержки загрузки (для демонстрационных целей)
        const delay = 2000;
        const timer = setTimeout(handleLoad, delay);

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
    }, [scroll]);

    return (
        <div
            className={`overflow-hidden fixed bg-black top-0 left-0 right-0 bottom-0 flex justify-center items-center duration-1000 transition-opacity ${isLoading ? 'opacity-100' : 'opacity-0'
                } pointer-events-none z-50`}
        >
            <div className="text-white text-center">
                <h1 className="font-bold text-9xl mb-4">CARGO</h1>
            </div>
        </div>
    );
};

export default Preloader;