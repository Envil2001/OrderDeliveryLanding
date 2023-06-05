
export const Button = ({ isDisabled = false, children, Icon, onClick, stylesElement, type = "button", classes = ""}) => {

    return (
        <button
            type={type}
            style={stylesElement}
            className={`button ${classes && classes}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children && <span>{children}</span>}
            {Icon && <div className="button__icon">{Icon}</div>}
        </button>
    )
}