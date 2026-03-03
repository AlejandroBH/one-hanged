import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled = false, className = '' }) => {
    const btnClass = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        className,
    ].filter(Boolean).join(' ');

    return (
        <button className={btnClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
