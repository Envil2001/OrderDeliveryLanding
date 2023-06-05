
export const Select = ({
    value,
    label,
    name,
    options,
    onChange,
    stylesElement
}) => {
    return (
        <div className="field_select">
            {label && <label htmlFor="select-field">{label}</label>}
            <select
                value={value}
                name={name}
                className="form-control"
                onChange={onChange}
                style={stylesElement}
            >
                <option value="" disabled>Select</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

