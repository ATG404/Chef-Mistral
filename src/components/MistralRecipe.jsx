import ReactMarkdown from "react-markdown"

export default function MistralRecipe(props){
    return(
        <section className="suggested-recipe-container">
            <h2>Chef Minstral Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}