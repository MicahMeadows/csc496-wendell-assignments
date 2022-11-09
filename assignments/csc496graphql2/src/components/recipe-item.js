import * as React from 'react'
import { Link } from 'gatsby';

function RecipeItem(props) {
    const recipe = props.recipe
    const recipeLink = `/recipe/${recipe.id}`
    return (
        <>
            <div>
                <Link to={recipeLink}><h3>{ recipe.title }</h3></Link>
            </div>
        </>
    );
}

export default RecipeItem