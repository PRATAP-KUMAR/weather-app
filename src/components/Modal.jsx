import { useEffect } from 'react'

function Modal(props) {
    const obj = props;
    const { open, onClose, children } = obj;

    const esc = (e) => {
        if (e.keyCode === 27) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener('keydown', esc);

        return () => {
            document.body.removeEventListener('keydown', esc);
        };
    });

    return (
        // backdrop
        <div className={`absolute top-0 left-0 w-full h-full flex text-center justify-center items-center transition-colors
                ${open ? "visible bg-black/60" : "invisible"}`}
            onClick={onClose}>
            {children}
        </div >
    )
}

export default Modal;