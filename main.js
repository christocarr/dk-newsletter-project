window.onload = function() {
  //get button to show more categories
  const EXTRA_CATEGORIES = document.getElementById('extraCategories');
  //get div holding extra categories
  const EXTRA_CAT_CONTAINER = document.getElementById('extraCatContainer');

  //when user clicks show more categories button display extra categories and sign-up form
  EXTRA_CATEGORIES.addEventListener('click', function() {
    EXTRA_CAT_CONTAINER.style.display = 'block';
    EXTRA_CATEGORIES.style.display = 'none';
  });
}