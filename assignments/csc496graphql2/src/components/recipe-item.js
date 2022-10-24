import * as React from 'react'

export default function RecipeItem(props) {
    const recipe = props.recipe
    return <h3>{ recipe.title }</h3>
}