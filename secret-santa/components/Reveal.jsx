import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "../styles/mystyles.module.css";

const Reveal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedSanta, remainingSantas } = location.state || {};

    useEffect(() => {
        if (!selectedSanta || remainingSantas.length === 0) {
            navigate("/turn_initialiser");
        }
    }, [selectedSanta, remainingSantas, navigate]);

    const handleReveal = () => {
        const randomRecipientIndex = Math.floor(Math.random() * remainingSantas.length);
        const recipient = remainingSantas[randomRecipientIndex];

        const updatedSantas = remainingSantas.filter((_, index) => index !== randomRecipientIndex);

        alert(`${selectedSanta} will buy a gift for ${recipient}!`);

        navigate("/turn_initialiser", { state: { santas: updatedSantas } });
    };

    return (
        <section className={styles.reveal}>
            <h2>It's {selectedSanta}'s turn!</h2>
            <button onClick={handleReveal}>Reveal who you are buying a gift for</button>
        </section>
    );
};

export default Reveal;
