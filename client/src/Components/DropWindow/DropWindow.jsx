import React, { useState } from 'react';

const DropWindow = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="personOutlineIcon" onClick={handleClick}>
                {/* Tutaj możesz umieścić ikonę lub treść dla ikony */}
            </div>
            {isOpen && (
                <div className="dropWindowContent">
                    <p>Log in</p>
                    <p>Create account</p>
                </div>
            )}
        </div>
    );
};

export default DropWindow;
