let words = [
"программа",
"солнце",
"лестница",
"ветка",
"кирпич",
"дерево"
]

let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

let arr = [];
for(i = 0; i < word.length; i++) {
	arr[i] = "_";
}

newWord = word.length;

let exit = 0; //Количество попыток;

while(newWord > 0) {
		alert(arr.join(" "));
		let letter = prompt("Введите 1 букву");

	if(letter === null) {
			alert("Вы вышли из игры");
			break;
	} else if (letter.length !== 1) {
			alert("Вы ввели более чем 1 букву или не ввели ничего");
	} else {
			for(let j = 0; j < arr.length; j++) {
				let perem = arr[j] ===letter;
				if(perem) {
					alert("Уже было");
					break;
				}
			if (word[j] === letter.toLowerCase()) {
			arr[j] = letter.toLowerCase();
				newWord--;

				console.log(newWord);
				};
				} 
				exit++;
			} 

			console.log(arr);
	if(newWord === 0) {
		alert("Поздравляю, Вы победили!!! Правильное слово - " + word);
			}

	if(exit === 10) {
		alert("У Вас закончилось кол-во попыток!!! Правильное слово - " + word);
			break;
			}
}


