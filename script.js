function toCase(text) {
  // write your code here
	return (text + "-" + text.toUpperCase(text));
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
