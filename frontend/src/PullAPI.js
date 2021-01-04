import { useState, useEffect } from 'react';


const PullAPI = (props) => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:3000/recipes');
            const data = await response.json();
            setRecipes(data)
        } catch (error) {
            console.error(error)
        }
    }
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/recipes/${id}`, {
                method: "DELETE",
                headers : {
                  'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            let myRecipes = [...recipes]
            myRecipes = myRecipes.filter((item) => item._id !== data._id )
            setRecipes(myRecipes);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchRecipes()
    }, [])

    return (
        <>
            {
                recipes.map(recipe => {
                    return <h1 onClick={
                        (e) => {
                            handleDelete(recipe._id)
                        }
                    } key={recipe._id}>{recipe.name}</h1>
                })
            }
        </>
    )
}


export default PullAPI;