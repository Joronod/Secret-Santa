import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/mystyles.module.css";

const Reveal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { assignments, santas } = location.state || {};
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!assignments || santas.length === 0) {
            navigate("/turn_initialiser");
        }
    }, [assignments, santas, navigate]);

    const handleReveal = () => {
        const currentSanta = santas[currentIndex];
        const recipient = assignments[currentSanta];

        alert(`${currentSanta} will buy a gift for ${recipient}!`);

        if (currentIndex + 1 < santas.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            alert("All Santas have been revealed!");
            navigate("/");
        }
    };

    return (
        <section className={styles.reveal}>
            <h2>It's {santas[currentIndex]}'s turn!</h2>
            <button onClick={handleReveal}>Reveal who you are buying a gift for</button>
        </section>
    );
};

export default Reveal;
