import styles from './Tweet.module.scss';

function Tweet({ name, message, likes }) {
    return (
        <div className={styles.tweet}>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{likes} likes</h3>
        </div>
    );
};

export default Tweet;

// SECONDO STEP: dopo aver creato questo componente,
// lo esporto in App.js.
// L'export di un componente può essere di due tipi:
// quello di default, come in questo caso, o quello
// con le sole parentesi graffe.
// Alternativa => export { Tweet };

// QUINTO STEP: aggiungo le props come parametro della mia funzione.
// Nell'elemento h3 sostituisco 'Author' (statico) con {props.name} (dinamico).
// Lo stesso procedimento va seguito per il contenuto del tweet ed il numero di likes.
// In p 'Tweet content' viene sostituito da {props.message}.
// In h3 'Number of likes' viene sostituito da {props.likes} (+ 'likes').

// function Tweet(props) {
//     return (
//         <div className={styles.tweet}>
//             <h3>{props.name}</h3>
//             <p>{props.message}</p>
//             <h3>{props.likes} likes</h3>
//         </div>
//     );
// };

// QUINTO STEP ALTERNATIVO:
// Invece di riportare ogni singola props, posso semplicemente passare come 
// parametri tra parentesi graffe {name, message, likes} (props destrutturate).