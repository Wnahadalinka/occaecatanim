interface UserContact {
  email: string;
}

const userContact: UserContact = {
  email: "Sincere@april.biz",
};

// Function to validate the email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Check if the provided email is valid
if (isValidEmail(userContact.email)) {
  console.log('The email address is valid.');
} else {
  console.log('The email address is invalid.');
}
