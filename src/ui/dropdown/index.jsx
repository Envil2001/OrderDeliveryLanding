import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
const Dropdown = ({ options, onSelect, stylesElement, selectTitle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="field_select">
            <button className="form-control" onClick={toggleDropdown} style={stylesElement}>
                <span className="mr-2">{selectedOption || selectTitle}</span>
                <TiArrowSortedDown className={`transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute w-full mt-1 bg-white rounded-xl z-20">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none ${option === selectedOption ? 'bg-gray-200' : ''}`}
                            onClick={() => handleSelect(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
