import { fetchGet } from './api';
import { useEffect, useState } from 'react';



export default function ApiGet() {

    const [get, setGet] = useState(null);
    const [error, setError] = useState("");

    //Fonction generation d'une citation
    const generateQuote = () => {
        fetchGet()

            .then(data => {
                setGet(data)
                console.log("Données récupérées :", data) //log citation data
            })
            .catch(e => setError(e.message))
    };


    //Fonction Copier la citation
    const copyQuote = () => {
            
    }




    useEffect(() => {
        generateQuote();
    }, []);

    if (error) return <p>Erreur : {error}</p>
    if (!get) return <p>Chargement...</p>



    return (
        <div>
            <h1>Phrase: {get.quote}</h1>
            <p>Autheur: {get.author}</p>

            <button onClick={generateQuote}>
                Générer
            </button>
            <button onClick={copyQuote}>
                Copier
            </button>
        </div>
    )
}