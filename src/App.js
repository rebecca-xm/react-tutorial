import './App.scss';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="App">
      <Tweet name='Rebecca' message='This is a random tweet' likes='22' />
      <Tweet name='Pippo' message='A second tweet' likes='44' />
      <Tweet name='Benny' message='A third tweet' likes='66' />
      <Tweet name='Ercole' message='A fourth tweet' likes='88' />
    </div>
  );
}

export default App;

// PRIMO STEP: creo un apposito file, 
// in questo caso Tweet.jsx, che in seguito
// importerò come componente in questa funzione.

// TERZO STEP: dopo aver creato il componente, 
// procedo ad importarlo in cima alla pagina,
// indicandone la directory di provenienza.

// P.S. Talvolta è sufficiente inserire il componente
// direttamente all'interno della funzione,
// VSCode provvederà a compilare ed inserire il suo
// import in automatico.

// QUARTO STEP:
// In che modo posso creare multiple versioni DINAMICHE del mio componente?
// Posso farlo attraverso le PROPS, ossia delle proprietà che posso definire
// sulla base di ogni singolo componente.
// Dal momento che ho aggiunto 'name' al componente Tweet, 
// andrò ad inserire tale props come suo parametro in Tweet.jsx.
// Lo stesso procedimento va seguito per modificare dinamicamente
// gli altri elementi all'interno del componente.
