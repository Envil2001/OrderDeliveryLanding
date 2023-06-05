import CustomCursor from "../CustomCursor"
import { CustomizedSolutions } from "../components/CustomizedSection"
import { FaqSection } from "../components/FaqSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { PriceSelect } from "../components/PriceSelect"
import { Header } from "../components/header"
import Layout from "../components/layout"



export const LandingPage = () => {

    return (
        <Layout>
            <CustomCursor />
            <Header />
            <div className="space-y-20">
                <HeroSection />
                <CustomizedSolutions />
                <PriceSelect />
                <FaqSection />
            </div>
            <Footer />
        </Layout>

    )
}