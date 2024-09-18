import { Link } from "react-router-dom"
import styles from "../styles/mystyles.module.css"
import { useState } from "react"

const Home = () => {
    const [santas, setSantas] = useState([])
    const [currentSanta, setCurrentSanta] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [submitMsg, setSubmitMsg] = useState("")
    const [posting, setPosting] = useState(false)

    const handleSubmit = (event)=>{
        event.preventDefault()
        if (currentSanta.trim() === "") {
            setSubmitMsg("Name cannot be empty");
            return;
        }
        setPosting(true);
        setSantas([...santas, currentSanta]);
        setCurrentSanta("");
        setSubmitMsg(`${currentSanta} added to the list!`);
        setPosting(false);
    }

    const handleChange=(event)=>{
        setCurrentSanta(event.target.value)
    }

    if (isLoading) {
        return <div className={styles.loader}></div>;
    }

    return (
        <section className={styles.home}>
            <h1>Home</h1>
            <h2>Add a Santa:</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="santa"
                        value={currentSanta}
                        onChange={handleChange}
                        placeholder="Enter the Santa's name"
                        rows="1"
                        cols="40"
                        />
                </label>
                {posting ? null : <button type="submit">Add Santa</button>}
            </form>
            <p>{submitMsg}</p>
            {santas.length > 0 && (
                <div>
                    <h2>Santa's so far:</h2>
                    <ul>
                        {santas.map((santa, index) => (
                            <li key={index}>{santa}</li>
                        ))}
                    </ul>
                </div>
            )}
            {santas.length > 1 && (
                <div>
                    <h2>
                        <Link to="/turn_initialiser" state={{ santas }}>Start</Link>
                    </h2>
                </div>
            )}
        </section> 
    )
}

export default Home