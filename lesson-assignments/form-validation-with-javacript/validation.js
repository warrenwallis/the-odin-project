const email = document.getElementById("email");

email.addEventListener("input", (event) => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("Need a correctly formatted email address");
	} else {
		email.setCustomValidity("");
	}

	email.reportValidity();
});

const password = document.getElementById("password");

password.addEventListener("input", (event) => {
	if (password.validity.typeMismatch) {
		password.setCustomValidity("Password must at least be 7 characters long");
	} else {
		password.setCustomValidity("");
	}

	password.reportValidity();
});

const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", (event) => {
	if (password.value != confirmPassword.value) {
		confirmPassword.setCustomValidity("Passwords must match");
	} else {
		confirmPassword.setCustomValidity("");
	}

	confirmPassword.reportValidity();
});
