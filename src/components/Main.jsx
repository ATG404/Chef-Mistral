import React from "react"
import IngredientsList from "./IngedientsList"
import MistralRecipe from "./MistralRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const ingredientsListItems= ingredients.map((ingredient)=>(
        <li key={ingredient}>{ingredient}</li>
    ))
    const [loading, setLoading] = React.useState(false);
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe(){
        if (ingredients.length <= 3) return

        setLoading(true)
        try {
            const recipeMarkDown = await getRecipeFromMistral(ingredients)
            setRecipe(recipeMarkDown)
        } catch (err) {
            console.error("Error fetching recipe:", err.message)
        } finally {
            setLoading(false)
        }
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }



    return(
        <main>
        <form action={addIngredient} className="ingredients-form">
            <input 
                type="text"
                placeholder="e.g. pepper"
                aria-label="Add ingredient"
                name="ingredient"
            />

            <button> add ingredient</button>
        
        </form>
        <IngredientsList ref={recipeSection}
                         listItems={ingredientsListItems}
                         length = {ingredients.length}
                         recipe = {getRecipe}

        />        
        {recipe || loading ? (<MistralRecipe recipe={recipe} loading={loading}/>)  : null}

        </main>
    )
}