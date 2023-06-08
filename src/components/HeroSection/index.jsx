import { Button } from "../../ui/button"
import { FaArrowRight } from 'react-icons/fa';
import ShipIcon from "../../assets/vv.svg"
import Airplane from "../../assets/airplane.jpg"
export const HeroSection = () => {

    return (
        <div className="container p-5 relative" data-scroll-section>
            <div className="" data-scroll data-scroll-speed="0.2">
                <h1 className="tracking-tight md:text-8xl text-7xl  text-customBlack font-semibold">Cargo. Delivery.</h1>
                <h1 className="tracking-tight md:text-8xl text-7xl text-white  font-semibold">Worldwide.</h1>
            </div>

            <div className="flex md:space-x-10 space-x-0  mt-20 md:flex-row flex-col gap-5 md:gap-0" data-scroll data-scroll-speed="0.2">
                <div>
                    <Button Icon={<FaArrowRight />}>Order Delivery</Button>
                </div>
                <p className="w-60">
                    We help our customers to get and provide reliabe delivery services
                </p>
            </div>


            <img src={ShipIcon} alt="ship" className="h-4/6  absolute -top-28 -right-40 -z-10"  />
            {/* <img src={ShipIcon} alt="ship" className="w-full h-auto absolute top-0 left-0" style={{ transform: "scaleX(1) scale(0.6)", top: "-300px", right: "-400px",  zIndex: "-2"}} /> */}
            <div data-scroll data-scroll-speed="0.2" style={{ marginTop: "200px", backgroundImage: `url(${Airplane})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "60px", height: "300px", width: "100%" }}></div>
        </div>
    )
}