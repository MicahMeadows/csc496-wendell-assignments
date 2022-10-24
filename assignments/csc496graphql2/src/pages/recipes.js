import * as React from "react"
import RecipeCollection from "../components/recipe-collection"

const RecipesPage = (props) => {
    // const recipes = [
    //     {name: "Recipe 1", body: "recipe description 1"},
    //     {name: "Recipe 2", body: "recipe description 2"},
    //     {name: "Recipe 3", body: "recipe description 3"},
    // ];
    const recipes = props.pageContext.recipes

    return <>
        <h1>Recipe Page</h1>
        <RecipeCollection recipes={ recipes }/>
    </>
}

export default RecipesPage

export const Head = () => <title>Recipe Page</title>