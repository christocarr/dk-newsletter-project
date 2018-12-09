const init = function() {
    console.log('Hi');
    //get button to show more categories
    const EXTRA_CATEGORIES_BUTTON = document.getElementById('extraCategories');

    //when user clicks show more categories button display extra categories and sign-up form
    EXTRA_CATEGORIES_BUTTON.addEventListener('click', function() {
        EXTRA_CAT_CONTAINER.style.display = 'block';
        EXTRA_CATEGORIES_BUTTON.style.display = 'none';
        SIGNUP_CONTAINER.style.display = 'block';
  });
}





document.addEventListener('DOMContentLoaded', init);

