import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', onClick, type = 'button', disabled = false, className = '' }) => {
    const btnClass = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        className,
    ].filter(Boolean).join(' ');

    return (
        <button type={type} className={btnClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
