window.onload = function() {
  //get button to show more categories
  const EXTRA_CATEGORIES_BUTTON = document.getElementById('extraCategories');
  //get div holding extra categories
  const EXTRA_CAT_CONTAINER = document.getElementById('extraCatContainer');
  //get signup container
  const SIGNUP_CONTAINER = document.getElementById('newsletterSignup');

  //get subscribe button
  const SUBSCRIBE = document.getElementById('subscribe');

  //when user clicks show more categories button display extra categories and sign-up form
  EXTRA_CATEGORIES_BUTTON.addEventListener('click', function() {
    EXTRA_CAT_CONTAINER.style.display = 'block';
    EXTRA_CATEGORIES_BUTTON.style.display = 'none';
    SIGNUP_CONTAINER.style.display = 'block';
  });

  //check user category selection
  const validateCatSelect = () => {

    //get all category selections
    const CAT_SELECTIONS = document.querySelectorAll('.cat-select-check');
    let userSelectedArr = [];
    //check if user selected and put in userSelected Array
    CAT_SELECTIONS.forEach(function(item) {
      console.log(item)
      if(item.checked) {
        userSelectedArr.push(item)
      }
    })
     
    //check if user selected array is empty
    let userSelected = userSelectedArr.length > 0 ? true : false;

    //get div to hold error message when no category selected
    const CAT_SELECT_ERROR = document.getElementById('catSelectError');
    //if user selected no category then show error message
    if(!userSelected) {
      const CAT_ERROR = document.createElement('p');
      CAT_ERROR.style.color = '#e30613';
      CAT_ERROR.innerHTML = 'Please select at least one category above'
      CAT_SELECT_ERROR.appendChild(CAT_ERROR);
    }
  }

  const validateForm = () => {
    //get user category selection
    validateCatSelect();
  
  }

  SUBSCRIBE.addEventListener('click', function() {
    validateForm();
  })
}



