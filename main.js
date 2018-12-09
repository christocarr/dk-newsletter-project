window.onload = function() {
  //get button to show more categories
  const EXTRA_CATEGORIES_BUTTON = document.getElementById('extraCategories');
  //get div holding extra categories
  const EXTRA_CAT_CONTAINER = document.getElementById('extraCatContainer');
  //get signup container
  const SIGNUP_CONTAINER = document.getElementById('newsletterSignup');
  //get div to hold error message when no category selected
  const CAT_SELECT_ERROR = document.getElementById('catSelectError');
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
      if(item.checked) {
        userSelectedArr.push(item)
      }
    })
    //check if user selected array is empty
    let userSelected = userSelectedArr.length > 0 ? true : false;
    //if user selected no category then show error message
    if(!userSelected) {
      const CAT_ERROR = document.getElementById('catSelectErr');
      CAT_ERROR.classList = 'show-err-message';
    }
  }

  //check form if valid
  const validateForm = () => {
    const FORM = document.getElementsByTagName('form')[0];
    const FIRST_NAME = document.getElementById('firstName');
    const FIRST_NAME_ERR = document.getElementById('firstNameErr');
    const LAST_NAME = document.getElementById('lastName');
    const LAST_NAME_ERR = document.getElementById('lastNameErr');
    const EMAIL = document.getElementById('email')
    const EMAIL_ERR = document.getElementById('emailErr');
  
    // FORM.addEventListener('submit', function(ev) {
      if(FIRST_NAME.value === '') {
        FIRST_NAME_ERR.classList = 'show-err-message';
      }
      if(LAST_NAME.value === '') {
        LAST_NAME_ERR.classList = 'show-err-message';
      }
      if(!EMAIL.validity.valid || EMAIL.value === '') {
        EMAIL_ERR.classList = 'show-err-message';
      }
      ev.preventDefault();
    // }, false);
  }


  //check privacy policy agreement
  const validatePrivacyPolicy = () => {
    const PRIVACY_POLICY = document.getElementById('privacyPolicy');
    if (!PRIVACY_POLICY.checked) {
      const PRIVACY_POLICY_ERR = document.getElementById('privacyPolicyErr');
      PRIVACY_POLICY_ERR.classList = 'show-err-message';
    }
  } 

  SUBSCRIBE.addEventListener('click', function(ev) {
    validateCatSelect();
    validateForm();
    validatePrivacyPolicy();
  })
}



