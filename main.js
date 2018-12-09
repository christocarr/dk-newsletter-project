const init = function() {
	//invoke function to open extra categories when show all categories button is clicked
	document.getElementById('extraCategories').addEventListener('click', extraCategories);
	//invoke function to validate all input fields
	document.getElementById('subscribe').addEventListener('click', subscribe);
}

//display extra categories and signup fom 
const extraCategories = () => {
	//get divs holding extra categories
	const EXTRA_CATEGORIES = document.querySelectorAll('#extraCat');
	//get button to show more categories
	const EXTRA_CATEGORIES_BUTTON = document.getElementById('extraCategories');
	//get signup form container and display
	const SIGNUP_CONTAINER = document.getElementById('newsletterSignup');

	EXTRA_CATEGORIES.forEach(function(item) {
		item.style.display = 'flex';
	})
	
	EXTRA_CATEGORIES_BUTTON.style.display = 'none';
	SIGNUP_CONTAINER.style.display = 'block';
}

const subscribe = (ev) => {
	ev.preventDefault();
	//check if user selected at least one category 
	let validCatSelect = validateCatSelect();
	let validForm = validateForm();
	if(validCatSelect && validForm) {
		//get signup success message container and show success signup message
		const SUCCESS = document.getElementById('signupSuccess');
		SUCCESS.style.display = 'flex';
		//get main page container and hide main page
		const MAIN = document.getElementById('main');
		MAIN.style.display = 'none';
	}
}

//check if user selected at least one category 
const validateCatSelect = () => {
	//get area to display error message
	const CAT_ERROR = document.getElementById('catSelectErr');
	let valid = false;
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
	//if user selected no category then show error message else return true
	if(!userSelected) {
		CAT_ERROR.classList = 'show-err-message';
	} else {
		valid = true;
	}
	return valid; 
}

const validateForm = () => {
	//get input fields and their corresponding error message containers
	const FIRST_NAME = document.getElementById('firstName');
  const FIRST_NAME_ERR = document.getElementById('firstNameErr');
  const LAST_NAME = document.getElementById('lastName');
  const LAST_NAME_ERR = document.getElementById('lastNameErr');
  const EMAIL = document.getElementById('email')
	const EMAIL_ERR = document.getElementById('emailErr');
  const PRIVACY_POLICY = document.getElementById('privacyPolicy');
	const PRIVACY_POLICY_ERR = document.getElementById('privacyPolicyErr');

	//variables for booleans if inputs valid or not
	let validFirstName, validLastName, validEmail, validPrivacyPolicy; 
	
	//check form inputs if valid if not show error message
	if(FIRST_NAME.value === '') {
		FIRST_NAME_ERR.classList = 'show-err-message';
	} else {
		validFirstName = true;
	}
	if(LAST_NAME.value === '') {
		LAST_NAME_ERR.classList = 'show-err-message';
	} else {
		validLastName = true;
	}
	if(!EMAIL.validity.valid || EMAIL.value === '') { //email requires @ to be valid
		EMAIL_ERR.classList = 'show-err-message';
	} else {
		validEmail = true;
	}
	if(!PRIVACY_POLICY.checked) {
		PRIVACY_POLICY_ERR.classList = 'show-err-message';
	} else {
		validPrivacyPolicy = true;
	}

	//if all inputs are valid then return true
	valid = (validFirstName && validLastName && validEmail && validPrivacyPolicy) ? true : false;
	return valid;
}

document.addEventListener('DOMContentLoaded', init);

