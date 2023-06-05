import { useState } from "react";
import { Input } from "../../ui/input"
import { Select } from "../../ui/select";
import { FaArrowRight } from 'react-icons/fa';
import { Button } from "../../ui/button";
import { SectionTitle } from "../SectionTitle";

export const PriceSelect = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [toggleTabs, setToggleTabs] = useState(1);


    const toggleTab = (index) => {
        setToggleTabs(index);
    }
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    return (
        <div className="container p-5" data-scroll-section>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 gap lg:space-x-5 space-x-0" data-scroll data-scroll-speed="0.2">
                <div className="w-2/4 pr-12">
                    <SectionTitle title="Find out the price right now" />
                    <SectionTitle title="use our shipping cost calculator" styleElement="text-white" />
                </div>
                <div className="space-y-4">
                    <section>
                        <span className="text-xs font-bold">TYPE OF GOODS</span>
                        <div className="tabs-container">
                            <div onClick={() => toggleTab(1)} className={toggleTabs === 1 ? "tabs active" : "tabs"}>Land</div>
                            <div onClick={() => toggleTab(2)} className={toggleTabs === 2 ? "tabs active" : "tabs"}>Air</div>
                            <div onClick={() => toggleTab(3)} className={toggleTabs === 3 ? "tabs active" : "tabs"}>Sea</div>
                        </div>

                    </section>
                    <section className="flex gap-5">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">TYPE OF GOODS</span>
                            <Select
                                value={selectedOption}
                                name="options"
                                options={options}
                                onChange={handleSelectChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">WEIGHT</span>
                            <Input placeholder="0" type="number" icon="lbs" stylesElement={{ marginTop: "5px" }} />
                        </div>
                    </section>
                    <section className="gap-5">
                        <span className="text-xs font-bold">DIMENSIONS</span>
                        <div className="flex items-center gap-3">
                            <Input placeholder="Height" type="number" icon="in" stylesElement={{ marginTop: "5px", width: "33.333%" }} />
                            <span className="text-xs font-bold">x</span>
                            <Input placeholder="Height" type="number" icon="in" stylesElement={{ marginTop: "5px", width: "33.333%" }} />
                            <span className="text-xs font-bold">x</span>
                            <Input placeholder="Height" type="number" icon="in" stylesElement={{ marginTop: "5px", width: "33.333%" }} />
                        </div>
                    </section>
                    <section className="flex gap-5">
                        <div>
                            <span className="text-xs font-bold">FROM</span>
                            <Select
                                value={selectedOption}
                                name="options"
                                options={options}
                                onChange={handleSelectChange}
                                stylesElement={{ borderRadius: "1rem 1rem 0px 0px", borderBottom: "0px" }}
                            />
                            <Select
                                value={selectedOption}
                                name="options"
                                options={options}
                                onChange={handleSelectChange}
                                stylesElement={{ borderRadius: "0px 0px 1rem 1rem " }}
                            />
                        </div>
                        <div>
                            <span className="text-xs font-bold">TO</span>
                            <Select
                                value={selectedOption}
                                name="options"
                                options={options}
                                onChange={handleSelectChange}
                                stylesElement={{ borderRadius: "1rem 1rem 0px 0px", borderBottom: "0px" }}
                            />
                            <Select
                                value={selectedOption}
                                name="options"
                                options={options}
                                onChange={handleSelectChange}
                                stylesElement={{ borderRadius: "0px 0px 1rem 1rem " }}
                            />
                        </div>
                    </section>
                    <div>
                        <Button Icon={<FaArrowRight />}>Estimate</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}