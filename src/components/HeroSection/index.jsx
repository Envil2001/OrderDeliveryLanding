import { Button } from "../../ui/button"
import { FaArrowRight } from 'react-icons/fa';
import ShipIcon from "../../assets/еее.png"
import Airplane from "../../assets/airplane.jpg"
export const HeroSection = () => {

    return (
        <div className="container p-5 relative" data-scroll-section>
            <div className="" data-scroll data-scroll-speed="0.2">
                <h1 className="leading-tight tracking-tight md:text-8xl text-7xl tracking-2 text-customBlack font-semibold">Cargo. Delivery.</h1>
                <h1 className="leading-tight tracking-tight md:text-8xl text-7xl text-white  font-semibold">Worldwide.</h1>
            </div>

            <div className="flex md:space-x-10 space-x-0 mt-10 md:flex-row flex-col gap-5 md:gap-0" data-scroll data-scroll-speed="0.2">
                <div>
                    <Button Icon={<FaArrowRight />}>Order Delivery</Button>
                </div>
                <p className="w-60">
                    We help our customers to get and provide reliabe delivery services
                </p>
            </div>


            <img src={ShipIcon} alt="ship" style={{ transform: "scaleX(1) scale(0.6)", position: "absolute", top: "-300px", right: "-400px",  zIndex: "-2"}} />
            <div data-scroll data-scroll-speed="0.2" style={{ marginTop: "100px", backgroundImage: `url(${Airplane})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "60px", height: "300px", width: "100%" }}></div>
        </div>
    )
}