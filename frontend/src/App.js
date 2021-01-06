import { useState, useRef, useEffect } from 'react';
export default (props) => {
  const [recipes, setRecipes] = useState([])
  const ingredientsInput = useRef(null);


  const searchRecipe = async (event) => {
    try {
      const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await response.json();
      props.searchRecipes([...props.recipes, data])
    } catch (error) {
      console.error(error)
    }
  }

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
        
        <h1>What's For Dinner?</h1> <br/>
        <h2>List some ingredients here..</h2>
      <form onSubmit={searchRecipe}>
            <input type="text" ref={ingredientsInput} />
            <input type="submit" value="Search for Recipe"/>
        </form>
        <ul>
        {
          recipes.map(recipe => {
            return (
            <li key={recipe._id}>{`${recipe.name}`}<br/>
            <button onClick={
              (event) => {
                searchRecipe(recipe._id)
              }
            }> {recipe.name} </button>
            </li>
            )
          })
        }
        </ul>
      </header>
    </div>
  );
}


