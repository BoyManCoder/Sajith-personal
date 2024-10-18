import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function EmTechBrand() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) { // Adjust scroll value as needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`emtech-alert ${isVisible ? 'slide-in' : ''}`}>
            <Alert className="e-alert">
                <div className="mini-logo">
                
                </div>
                <div className="mini-text">
                    <p>This website was created by <a href="">EMTECH</a></p>
                </div>
            </Alert>
        </div>
    );
}

export default EmTechBrand;
