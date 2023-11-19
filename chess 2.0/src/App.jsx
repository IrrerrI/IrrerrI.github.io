import './App.css'

function App() {
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    
      
      
        return (
          <div className="chessboard">
            {
              squares = ranks.map(rank =>
          files.map(file => (
            <div key={`${file}${rank}`} className="square">
              {`${file}${rank}`}
            </div>
          ))
              
            )}
            </div>
            )}

export default App
