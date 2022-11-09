import * as React from 'react'
import { Link } from 'gatsby'

const RecipePage = (props) => {
    const recipe = props.pageContext.recipe

    console.log(`recipeImage: ${recipe.mediaImage.mediaImage.url}`)

    return (
        <>
            <h1>Recipe: { recipe.title }</h1>
            <h2>Time To Cook: { recipe.cookingTime }</h2>
            <img src={ recipe.mediaImage.mediaImage.url } alt="food image"></img>
            <h3>Status: { recipe.status }</h3>
            <Link to="/recipes">See more recipes.</Link>
        </>
    );
}

export default RecipePage;

export const Head = () => {
    <title>Recipe Page</title>
}