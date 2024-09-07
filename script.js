function firstNonRepeatedChar(str) {
 // Write your code here
	let x = 0;
	for(let i=0;i<str.length;i++){
		x^=str[i];
	}

	return x;
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
