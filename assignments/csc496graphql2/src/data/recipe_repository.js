// import { useStaticQuery } from "gatsby";

// class GQLRecipeRepository {

//     async getRecipe(id) {
//         const data = useStaticQuery(graphql`
//         query GetRecipeByID {
//             Drupal {
//               recipe: nodeRecipe(id: "${id}") {
//                 id
//                 cookingTime
//                 changed
//                 created
//                 path
//                 status
//                 title
//               }
//             }
//           }
//         `);

//         return data.Drupal.recipe
//     }

//     async getRecipes(first) {
//         const data = useStaticQuery(graphql`
//         query GetAllRecipesQuery {
//             Drupal {
//               nodeRecipes(first: ${first}) {
//                 edges {
//                   recipe: node {
//                     id
//                     changed
//                     cookingTime
//                     path
//                     status
//                     title
//                     created
//                   }
//                 }
//               }
//             }
//           }
//         `);

//         var recipes = [];
//         data.Drupal.nodeRecipes.edges.forEach(edge => {
//             const recipe = edge.recipe;
//             recipes.push(recipe);
//         });
//         return recipes;
//     }

// }