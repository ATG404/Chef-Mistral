export default function IngredientsList(props){
    return(
        <section>

            <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {props.listItems}
                </ul>
        
            {props.length > 3 ? <div className="get-recipe-container">
                <div>
                    <h3>Read for your recipe?</h3>
                    <p>Generate recipes from your list of ingredients.</p>
                </div>
                <button onClick={props.recipe}>Get a recipe</button>
            </div> : null}
        </section>
    )
}