
export const Input = ({icon, value, label, name, placeholder, type = "text", onChange, stylesElement, onKeyDown, onClick }) => {
    
    return (
        <div className="field__input" style={stylesElement}>
            {label && <label htmlFor="input-field">{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                className="form-control"
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onClick={onClick}
            />
            <div className="input__icon">
                {icon}
            </div>
        </div>
    )
}