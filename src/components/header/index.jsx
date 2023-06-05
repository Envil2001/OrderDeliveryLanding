
import Cargoitem from "../../assets/box.svg"

export const Header = () => {


    return (
        <header className="container p-5 flex gap-2 items-center" data-scroll-section>
            <img src={Cargoitem} className="h-5" alt="logo" />
            <h3 className="font-medium">Cargo.Town</h3>
        </header>
    )
}