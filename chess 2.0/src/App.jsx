import './App.css'

function App() {
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
      
      
        return (
          <div className='container'>
          <div className="chessboard">
            {
            ranks.map(rank =>
          files.map(file => (
            <div key={`${file}${rank}`} className="square">
              {`${file}${rank}`}
            </div>
          ))
              
            )}
            </div>
            </div>
            )}

export default App
