import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const RecipePage = (props) => {
    const recipe = props.pageContext.recipe

    var tagString = "";
    for (var tag of recipe.tags) {
        tagString = `${tagString} ${tag.name}`
    }

    var categoryString = "";
    for (var category of recipe.recipeCategory) {
        categoryString = `${categoryString} ${category.name}`
    }

    return (
        <>
            <Link to="/recipes"><h1>See more recipes.</h1></Link>
            <h1>Recipe: { recipe.title }</h1>
            <h2>Time To Cook: { recipe.cookingTime }</h2>
            <h3>Categories: { categoryString }</h3>
            <motion.img src={ recipe.mediaImage.mediaImage.url } alt={ recipe.title } animate={{opacity: 1}} initial={{opacity: 0}}/>
            <h3>Tags: { tagString }</h3>
            <h3>Prep Time: { recipe.preparationTime }</h3>
            <h3># Servings: { recipe.numberOfServings }</h3>
            <h3>difficulty: { recipe.difficulty } </h3>
            <h3>Status: { recipe.status }</h3>
            <div>
                <h3>Instructions:</h3>
                <div dangerouslySetInnerHTML={{__html:recipe.recipeInstruction.value}} />         
            </div>
        </>
    );
}

export default RecipePage;

export const Head = () => {
    <title>Recipe Page</title>
}