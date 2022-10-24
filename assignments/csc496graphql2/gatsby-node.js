const path = require('path');


// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions
  const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
  createNodeField({
    node,
    name: `slug`,
    value: slug,
  })
}

exports.createPages = async ({ graphql, actions }) => {

  const result = await graphql(`
    query {
      Drupal {
        nodeRecipes(first: 100) {
          edges {
            recipe: node {
              id
              changed
              cookingTime
              path
              status
              title
              created
            }
          }
        }
      }
    }
  `)

  const recipes = result.data.Drupal.nodeRecipes.edges.map(edge => edge.recipe);

  const recipesTemplatePath = path.resolve(`./src/pages/recipes.js`)
  actions.createPage({
    path: `recipes`,
    component: recipesTemplatePath,
    context: {
      recipes: recipes
    }
  });

  const recipePageTemplatePath = path.resolve(`./src/pages/recipe.js`)
  recipes.forEach((recipe) => {
    actions.createPage({
      path: `recipe/${recipe.id}`,
      component: recipePageTemplatePath,
      context: {
        recipe: recipe
      },
    })
  })
}
