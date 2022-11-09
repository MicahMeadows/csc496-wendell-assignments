import * as React from "react"
import RecipeCollection from "../components/recipe-collection"

const RecipesPage = (props) => {
    const recipes = props.pageContext.recipes

    return <>
        <h1>Recipe Page</h1>
        <RecipeCollection recipes={ recipes }/>
    </>
}

export default RecipesPage

export const Head = () => <title>Recipe Page</title>