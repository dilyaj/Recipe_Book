import { useState, useRef, useEffect } from 'react';
import './App.css';

export default (props) => {
  const [recipes, setRecipes] = useState([])
  const ingredientsInput = useRef(null);


  const searchRecipes = async (event) => {
    event.preventDefault();
    const ingredient = ingredientsInput.current.value;
    const myData = JSON.stringify(
      {
        searchQuery: ingredient
      }
    )
    try {
      const response = await fetch(`http://localhost:3001/recipes/search-by/ingredients`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: myData
      })
      const data = await response.json();
      console.log(data);
      setRecipes(data);
    } catch (error) {
      console.error(error)
    }
  }


  // Read 
  const fetchRecipes = async () => {
    try {
      debugger;
      const response = await fetch('http://localhost:3001/recipes');
      const data = await response.json();
      setRecipes(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getRecipe = async (id) => {
    try {
      const filteredRecipes = recipes.filter(recipe => recipe._id === id)
      setRecipes(filteredRecipes);
    } catch(error) {
      console.error(error)
    }
  }


  // Delete
  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/recipes/${id}`, {
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
      <header className="App-header" align="center">
        <h1>What's For Dinner?</h1> <br/>
        <h2>We'll help you figure that out.</h2>

        <form onSubmit={searchRecipes}>
          <input type="text" className="form-control" ref={ingredientsInput} />
          <input type="submit" value="Search for Recipe"/>
        </form>

          <ul>
          {
            recipes.map(recipe => {
              return (
              
              <h5 className="card-title" key={recipe._id}>{recipe.name}<br/>
              <p className="card-text">{recipe.description}</p></h5>
              )
            })
          }
          </ul>
      </header>
    </div>
  );
}


