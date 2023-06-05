import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useLocation } from 'react-router-dom';
export default function Layout({ children }) {
    const containerRef = useRef(null)
    const location = useLocation();
    return (
        <>
            <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    multiplier: 0.2,
                }}
                containerRef={containerRef}
                watch={[location.pathname]}
            >
                <div data-scroll-container ref={containerRef} className='app'>
                    {children}
                </div>
            </LocomotiveScrollProvider>
        </>
    )
}
