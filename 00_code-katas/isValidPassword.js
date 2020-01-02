// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

function isValidPassword(password, username) {
  const passLength = password.length < 8;
  const passContSpaces = password.includes(" ");
  const passContUsrname = password.includes(username);

  if (passLength || passContSpaces || passContUsrname) return false;
  return true;
}

// If we are returning true or false there is no need for if
// We can just return the condition

function isValidPassword(password, username) {
  const passLength = password.length < 8;
  const passContSpaces = password.includes(" ");
  const passContUsrname = password.includes(username);

  return !passLength && !passContSpaces && !passContUsrname;
}

console.log(isValidPassword("89Fjj1nms", "dogLuvr")); //true
console.log(isValidPassword("dogLuvr123!", "dogLuvr")); //false
console.log(isValidPassword("hello1", "dogLuvr")); //false
