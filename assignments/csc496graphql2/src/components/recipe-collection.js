import * as React from 'react'
import RecipeItem from './recipe-item';

export default function RecipeCollection(props) {
    const recipes = props.recipes
    const recipeComponents = recipes.map((recipe) => <RecipeItem recipe={recipe}/>);

    return recipeComponents;
}