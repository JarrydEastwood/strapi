<template>
  <div>
    <div class="uk-section"> 
      <div class="uk-align-center uk-background-cover uk-dark uk-padding-large uk-height-large uk-background-image uk-overlay uk-dark" 
      data-src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80" uk-img>
      
        <div class="uk-flex-middle uk-flex-center">
        <h2 class="whitetext uk-text-middle uk-text-center uk-heading-medium">Choose Nourish</h2>
        <p class="whitetext thintext uk-text-middle uk-text-center uk-text-large uk-text-light">Restrictive can be delicious</p>
        <p class="whitetext thintext uk-text-middle uk-text-center uk-text-large uk-text-light">Search function coming soon - below is broken</p>
        <searchbar></searchbar>
        </div>
      </div>
   </div>
  
   <div class="uk-section uk-align-center uk-text-center uk-width-3-4">
  <NuxtLink to="/showcase/createRecipe" class="uk-button uk-button-danger"> TEST ONLY - Create a recipe
      
  </NuxtLink>

    <h2>WIP - Showcase of Categories</h2>
        <ul class="uk-navbar-nav">
          <li><a href="/showcase/AllergyIntolerances">Allergies and Intolerances</a></li>
          <li><a href="/showcase/Cuisines">Cuisines</a></li>
          <li><a href="/showcase/MealTypes">Meal Types</a></li>
          <li><a href="/showcase/MedicalConditions">Medical Conditions</a></li>
          <li><a href="/showcase/NutritionAdjustments">Nutrition Adjustments</a></li>
          <li><a href="/showcase/PersonalChoices">Personal Choices</a></li>
          <li><a href="/showcase/Textures">Textures</a></li>
        </ul>
  </div>


    <div class="uk-section"> 
      <div class="uk-container uk-container-large uk-overflow-auto">
      <Articles :articles="articles"></Articles>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import Articles from "~/components/Articles";
import Searchbar from '../components/searchbar.vue';

export default {
  data() {
    return {
      articles: {
        data: [],
      },
    };
  },
  components: {
    Articles,
    Searchbar,
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
    },
  },
};
</script>
