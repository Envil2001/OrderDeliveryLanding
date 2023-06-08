import { useEffect, useRef, useState } from 'react';
import { Input } from '../../../ui/input';
import Dropdown from '../../../ui/dropdown';
import { Button } from '../../../ui/button';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const tabsData = [
    {
        label: 'Land',
    },
    {
        label: 'Air',
    },
    {
        label: 'Sea',
    },
];


const FormPrice = ({ onSubmit }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }

        setTabPosition();
        window.addEventListener('resize', setTabPosition);

        return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);


    const [formData, setFormData] = useState({
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleOptionSelect = (optionName, option) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [optionName]: option,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:w-2/4 w-full  ">
            <div>
                <span className="text-xs font-bold">TYPE OF GOODS</span>
                <div className="w-full border border-customBorder rounded-xl flex relative">
                    {tabsData.map((tab, idx) => {
                        const isActive = idx === activeTabIndex;
                        return (
                            <button
                                key={idx}
                                ref={(el) => (tabsRef.current[idx] = el)}
                                className={`w-full rounded-xl px-4 py-3 text-center font-semibold transition-all duration-300 ${isActive ? 'text-white' : 'text-customBlack'}`}
                                onClick={() => setActiveTabIndex(idx)}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                    <span
                        className="absolute top-0 rounded-xl bg-customBlack -z-10 px-4 py-3 h-full transition-all duration-300"
                        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                    />
                </div>
            </div>
            <div className="flex gap-10 flex-1">
                <div className="flex-1">
                    <span className="text-xs font-bold mb-2">DIMENSIONS</span>
                    <Dropdown
                        selectTitle="Select"
                        options={['Option 1A', 'Option 1B', 'Option 1C']}
                        onSelect={(option) => handleOptionSelect('option1', option)}
                    />
                </div>
                <div className="flex-1">
                    <span className="text-xs font-bold mb-2">DIMENSIONS</span>
                    <Input placeholder="0" type="number" icon="lbs" name="input1" value={formData.input1} onChange={handleInputChange} stylesElement={{ flex: 1 }} />
                </div>
            </div>
            <div>
                <span className="text-xs font-bold mb-2">DIMENSIONS</span>
                <div className="flex gap-2 items-center">
                    <Input placeholder="Height" type="number" icon="in" name="input2" value={formData.input2} onChange={handleInputChange} stylesElement={{ flex: 1 }} />
                    <AiOutlineClose />
                    <Input placeholder="Height" type="number" icon="in" name="input3" value={formData.input3} onChange={handleInputChange} stylesElement={{ flex: 1 }} />
                    <AiOutlineClose />
                    <Input placeholder="Height" type="number" icon="in" name="input4" value={formData.input4} onChange={handleInputChange} stylesElement={{ flex: 1 }} />
                </div>
            </div>
            <div className="flex gap-10">
                <div className="flex flex-col flex-1">
                    <span className="text-xs font-bold  mb-2">FROM</span>
                    <Dropdown
                        selectTitle="Country"
                        options={['Option 1A', 'Option 1B', 'Option 1C']}
                        onSelect={(option) => handleOptionSelect('option2', option)}
                        stylesElement={{ borderRadius: "1rem 1rem 0px 0px", borderBottom: "0px" }}
                    />
                    <Dropdown
                        selectTitle="To"
                        options={['Option 1A', 'Option 1B', 'Option 1C']}
                        onSelect={(option) => handleOptionSelect('option3', option)}
                        stylesElement={{ borderRadius: "0px 0px 1rem 1rem " }}
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <span className="text-xs font-bold mb-2">TO</span>
                    <Dropdown
                        selectTitle="Country"
                        options={['Option 1A', 'Option 1B', 'Option 1C']}
                        onSelect={(option) => handleOptionSelect('option4', option)}
                        stylesElement={{ borderRadius: "1rem 1rem 0px 0px", borderBottom: "0px" }}
                    />
                    <Dropdown
                        selectTitle="To"
                        options={['Option 1A', 'Option 1B', 'Option 1C']}
                        onSelect={(option) => handleOptionSelect('option5', option)}
                        stylesElement={{ borderRadius: "0px 0px 1rem 1rem " }}
                    />
                </div>
            </div>
            <div>
                <Button type="submit" Icon={<FaArrowRight />}>Estimate</Button>
            </div>
        </form>
    );
};

export default FormPrice;
