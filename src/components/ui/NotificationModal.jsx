import Button from './Button';
import './NotificationModal.css';

const NotificationModal = ({
    isOpen,
    message,
    type = 'info',
    onClose,
    onConfirm,
    confirmLabel = 'Entendido',
    cancelLabel = 'Cancelar'
}) => {
    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'error': return '⚠️';
            case 'success': return '✅';
            case 'warning': return '⚡';
            case 'confirm': return '❓';
            default: return 'ℹ️';
        }
    };

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        onClose();
    };

    return (
        <div className="notification-modal-overlay">
            <div className={`notification-modal notification-modal--${type}`}>
                <div className="notification-modal__icon">{getIcon()}</div>
                <div className="notification-modal__content">
                    <p className="notification-modal__message">{message}</p>
                </div>
                <div className="notification-modal__footer">
                    {onConfirm ? (
                        <div className="notification-modal__actions">
                            <Button variant="secondary" size="md" onClick={onClose}>
                                {cancelLabel}
                            </Button>
                            <Button variant="primary" size="md" onClick={handleConfirm}>
                                {confirmLabel}
                            </Button>
                        </div>
                    ) : (
                        <Button variant="primary" size="md" onClick={onClose}>
                            {confirmLabel}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
