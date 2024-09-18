import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/mystyles.module.css";

const shuffleArr = (array) => {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

const assignSantas = (santas) => {
    let recipients = shuffleArr([...santas]);

    for (let i = 0; i < santas.length; i++) {
        if (santas[i] === recipients[i]) {
            return assignSantas(santas);
        }
    }

    return recipients;
};

const TurnInitialiser = () => {
    const location = useLocation();
    const { santas } = location.state || {};
    const [assignments, setAssignments] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (santas && santas.length > 1) {
            const recipients = assignSantas(santas);
            const newAssignments = santas.reduce((acc, santa, index) => {
                acc[santa] = recipients[index];
                return acc;
            }, {});

            setAssignments(newAssignments);
        }
    }, [santas]);

    const handleStart = () => {
        if (Object.keys(assignments).length > 0) {
            navigate("/reveal", { state: { assignments, santas } });
        }
    };

    return (
        <section className={styles.turnInitialiser}>
            <h3>Let's Begin</h3>
            <button onClick={handleStart}>Start Secret Santa</button>
        </section>
    );
};

export default TurnInitialiser;
