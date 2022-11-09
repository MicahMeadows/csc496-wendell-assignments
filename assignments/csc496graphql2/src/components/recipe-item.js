import * as React from 'react'
import { Link } from 'gatsby';

function RecipeItem(props) {
    const recipe = props.recipe
    const recipeLink = `/recipe/${recipe.id}`
    return (
        <>
            <div>
                <h3>{ recipe.title }</h3>
                <Link to={recipeLink}>Go!</Link>
            </div>
        </>
    );
}

export default RecipeItem