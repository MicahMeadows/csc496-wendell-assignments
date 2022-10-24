import * as React from 'react'

const RecipePage = (props) => {
    const recipe = props.pageContext.recipe

    console.log(`recipe: ${recipe}`)

    return (
        <>
            <h1>Recipe: { recipe.title }</h1>
            <h2>Time To Cook: { recipe.cookingTime }</h2>
            <h3>Status: { recipe.status }</h3>
        </>
    );
}

export default RecipePage;

export const Head = () => {
    <title>Recipe Page</title>
}