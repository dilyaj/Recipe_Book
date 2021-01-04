import { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([])

  // Read 
  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost:3000/recipes');
      const data = await response.json();
      setRecipes(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Delete
  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        }
      })
      const data = await response.json();
      const filteredRecipes = recipes.filter(recipe => recipe._id !== data._id)
      setRecipes(filteredRecipes);
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>List your ingrediants</h1>
      <input type="submit"></input>
      </header>
    </div>
  );
}
export default App;