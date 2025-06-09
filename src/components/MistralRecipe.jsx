import ReactMarkdown from "react-markdown"

export default function MistralRecipe(props){

    return(
        <section className="suggested-recipe-container">
            
            <h2>Chef Minstral Recommends:</h2>
            {props.loading ? (
                <p>🍳 Generating your recipe... please wait!</p>
            ) : (
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            )}
        </section>
    )
}