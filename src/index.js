import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom'


const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Hello, lembretes!</h1>
    </div>
  );
}

export default App;

ReactDom.render (
  <App />,
  document.querySelector('#root')
)