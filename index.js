//__________Task 1 ___________//
// Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку , отриманому як аргумент
// функції. Масив, який отримує функція як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
// Спочатку масив буде поданий у невідсортованому вигляді.

function findDifference(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(0);
  } else {
    arr.sort((a, b) => b - a);
    let result = arr[0] - arr[arr.length - 1];
    console.log(result);
  }
}

findDifference([1, 2, 3, -4]);
findDifference([1]);
findDifference([]);
findDifference([1, 2, 3, 11, 2, 4]);

//__________Task 2 ___________//
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

function findWords(a, b) {
  const excludedSymbols = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const arr = a.replace(excludedSymbols, "").split(" ");
  const result = arr.filter((i) => i.length > b);
  if (result.length === 0) {
    console.log("There are no matching words");
  } else console.log(result);
}
findWords(
  `І прийде час, коли один скаже: "Слава Україні!", а мільйони відповідатимуть "Героям слава!`,
  7
);

//__________Task 3 ___________//
// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).

function isEndOfLine(a, b) {
  console.log(a.endsWith(b));
}

isEndOfLine("abc", "d");
isEndOfLine("script.js", "js");

//__________Task 4 ___________//
// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.

function getAverages(arr) {
  const averages = arr
    .slice(0, -1)
    .map((num, index) => (num + arr[index + 1]) / 2);

  console.log(averages);
}

getAverages([2, -2, 2, -2, 2, -2]);
getAverages([1, 3, 5, 1, -10]);

//__________Task 5 ___________//
// Створіть функцію, яка приймає рядок і повертає кількість голосних, які
// у ній.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  console.log(count);
}

countVowels("Celebration");
countVowels("Palm");

// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.

function removeABC(str) {
  const lettersToRemove = ["a", "b", "c"];
  if (str.toLowerCase().includes("a" || "b" || "c")) {
    let result = str
      .split("")
      .filter((char) => !lettersToRemove.includes(char.toLowerCase()))
      .join("");
    console.log(result);
  } else {
    console.log(null);
  }
}
removeABC("This might be a bit hard");
removeABC("hello world!");

//__________Task 6 ___________//
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.

function getUniqueNumber(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2];
  const uniqueNumber = combinedArray.filter(
    (course, index, array) => array.indexOf(course) === index
  );
  console.log(uniqueNumber);
}
getUniqueNumber([1, 2, 3], [100, 2, 1, 10]);
getUniqueNumber(["one", "two", "three"], ["hundred", "two", "one", "ten"]);

//__________Task 7 ___________//
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.

function reverseObj(obj) {
  const reversedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    reversedObj[value] = key;
  }
  console.log(reversedObj);
}

reverseObj({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" });

//__________Task 8 ___________//
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.

function calculateDifference(obj, num) {
  const values = Object.values(obj);
  let total = 0;

  for (const value of values) {
    total += value;
  }
  let result = total - num;

  if (total < num) {
    console.log(`there is nothing to refund`);
  } else {
    console.log(result);
  }
}
calculateDifference({ "baseball bat": 20 }, 5);
calculateDifference({ skate: 10, painting: 20 }, 19);
calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400);

//__________Task 9 ___________//
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h).

function doesBrickFit(a, b, c, w, h) {
  if ((a <= h && b <= w) || (b <= h && a <= w)) {
    console.log(true);
  } else if ((b <= w && c <= h) || (b <= h && c <= w)) {
    console.log(true);
  } else if ((a <= w && c <= h) || (a <= h && c <= w)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

doesBrickFit(1, 1, 1, 1, 1);
doesBrickFit(1, 2, 1, 2, 1);
doesBrickFit(1, 2, 2, 1, 1);

//__________Task 10 ___________//
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

function extractFileName(filePath) {
  let firstIndex = filePath.lastIndexOf("w") + 1;
  let lastIndex = filePath.lastIndexOf(".");
  let fileName = filePath.slice(firstIndex, lastIndex);

  console.log(fileName);
}
extractFileName("c:WebServershome\testsitewwwmyfile.txt");

//__________Task 11 ___________//
// Дано два рядки. Чи можна перший рядок отримати з другого циклічним
// зрушенням?

function isCyclicRotation(string1, string2) {
  if (string1.length !== string2.length) {
    console.log(false);
    return;
  }

  for (let i = 1; i < string1.length; i++) {
    let rotatedString = string1.slice(i) + string1.slice(0, i);

    if (rotatedString === string2) {
      console.log(true);
      return true;
    }
  }

  console.log(false);
  return false;
}
isCyclicRotation("abcda", "cdaab");

//__________Task 12 ___________//
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

function generateNewArr(a) {
  const b = [];
  const c = [];

  while (a.length > 1) {
    let minDiff = Infinity;
    let number1 = 0;
    let number2 = 0;

    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        const diff = Math.abs(a[i] - a[j]);
        if (diff < minDiff) {
          minDiff = diff;
          number1 = i;
          number2 = j;
        }
      }
    }

    const checkedNum1 = a.splice(number1, 1)[0];
    const checkedNum2 = a.splice(number2 - 1, 1)[0];

    if (checkedNum1 < checkedNum2) {
      b.push(checkedNum1);
      c.push(checkedNum2);
    } else {
      b.push(checkedNum2);
      c.push(checkedNum1);
    }
  }

  console.log(b);
  console.log(c);
}

generateNewArr([1.2, 1.1, 3, 3.5, 5, 5.1, 2, 2.4]);

//__________Task 13 ___________//
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.

function transformString(input) {
  const words = input.split(" ");
  const transformedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (i === 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    } else if (i > 0) {
      word = word.toLowerCase();
    }

    word = word.replace(/(http|https):\/\/\S+/g, "[посилання заборонено]");

    word = word.replace(/\S+@\S+/g, "[контакти заборонені]");

    if (word.length > 3 && /^\d+$/.test(word)) {
      word = "";
    }

    transformedWords.push(word);
  }

  const output = transformedWords.join(" ");

  if (output.length > input.length) {
    setInterval(() => {
      confirm("Чи потрібна Вам допомога?");
    }, 5000);
  }

  console.log(output);
}

transformString(
  "my website https://facebook1.com. My email juHlushko@example.com For more information please call 123"
);

//__________Task 14 ___________//
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

function isEnoughParentheses(str) {
  const rightBracket = "(";
  const leftBracket = ")";
  const parentheses = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === rightBracket) {
      parentheses.push(char);
    } else if (char === leftBracket) {
      if (parentheses.length === 0) {
        console.log("There is no balance between parentheses");
        return false;
      }
      parentheses.pop();
    }
  }
  if (parentheses.length === 0) {
    document.getElementById("output").textContent = str;
  }
}
let input = "(я) (прийшов (тебе) нема (підманула) (підвела)";
isEnoughParentheses(input);

//__________Task 15 ___________//
// Написати функцію, яка генерує пароль для користувача. Вимоги:
// довжина від 6 до 20 символів повинен бути рівно один символ підкреслення,
// хоча б дві великі літери, не більше 5 цифр, будь-які дві цифри поспіль
// неприпустимі.

function generatePassword() {
  const validChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";

  let password = "";
  let underscoreCount = 0;
  let uppercaseCount = 0;
  let digitCount = 0;

  const length = Math.floor(Math.random() * (20 - 6) + 6);

  while (true) {
    password = "";
    underscoreCount = 0;
    uppercaseCount = 0;
    digitCount = 0;

    for (let i = 0; i < length; i++) {
      const randomCharIndex = Math.floor(Math.random() * validChars.length);
      const randomChar = validChars[randomCharIndex];

      if (randomChar === "_") {
        if (underscoreCount === 0) {
          password += randomChar;
          underscoreCount++;
        }
      } else if (randomChar === randomChar.toUpperCase()) {
        uppercaseCount++;
        password += randomChar;
      } else if (/\d/.test(randomChar)) {
        if (
          digitCount < 5 &&
          !containsConsecutiveDigits(password + randomChar)
        ) {
          password += randomChar;
          digitCount++;
        }
      } else {
        password += randomChar;
      }
    }

    if (underscoreCount === 1 && uppercaseCount >= 2) {
      console.log(password);
      break;
    }
  }
}

function containsConsecutiveDigits(password) {
  for (let i = 0; i < password.length - 1; i++) {
    if (/\d/.test(password[i]) && password[i] === password[i + 1]) {
      return true;
    }
  }
  return false;
}

generatePassword();

//__________Task 16 ___________//
// В заданому масиві найменший елемент помістити на перше місце,
// найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.

function sortArray(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const arrayPart1 = [];
  const arrayPart2 = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (i % 2 === 0) {
      arrayPart1.push(sortedArr[i]);
    } else {
      arrayPart2.unshift(sortedArr[i]);
    }
  }

  let result = [...arrayPart1, ...arrayPart2];
  console.log(result);
}

sortArray([3, 5, 7, 1, 2, 0, 56, 78, -1]);

//__________Task 17 ___________//
// Напишіть функцію, яка приймає рядок та повертає новий рядок,
// відсортований за частотою появи символів. Символи з більшою частотою
// повинні йти раніше за символи з меншою частотою. Використовуйте методи
// роботи з рядками, об'єктами та сортуванням для вирішення задачі.

function sortByFrequency(str) {
  let sortedStr = "";

  const charFrequency = str
    .toLowerCase()
    .split("")
    .reduce((freq, char) => {
      freq[char] = (freq[char] || 0) + 1;
      return freq;
    }, {});

  const sortedPairs = Object.entries(charFrequency).sort((a, b) => b[1] - a[1]);

  for (let pair of sortedPairs) {
    const char = pair[0];
    const frequency = pair[1];
    sortedStr += char.repeat(frequency);
  }

  console.log(sortedStr);
}

sortByFrequency("Incomprehensibilities");

//__________Task 18 ___________//
// Дано два рядки. Напишіть функцію, яка знаходить найбільший
// загальний підрядок у цих рядках. Підрядок може містити лише послідовні
// символи (без перепусток). Використовуйте методи роботи з рядками та
// алгоритми пошуку для вирішення задачі.

function longestCommonSubstring(string1, string2) {
  const s1 = [...string1];
  const s2 = [...string2];

  const substringMatrix = Array(s2.length + 1)
    .fill(null)
    .map(() => {
      return Array(s1.length + 1).fill(null);
    });

  for (let columnIndex = 0; columnIndex <= s1.length; columnIndex += 1) {
    substringMatrix[0][columnIndex] = 0;
  }

  for (let rowIndex = 0; rowIndex <= s2.length; rowIndex += 1) {
    substringMatrix[rowIndex][0] = 0;
  }

  let longestSubstringLength = 0;
  let longestSubstringColumn = 0;
  let longestSubstringRow = 0;

  for (let rowIndex = 1; rowIndex <= s2.length; rowIndex += 1) {
    for (let columnIndex = 1; columnIndex <= s1.length; columnIndex += 1) {
      if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
        substringMatrix[rowIndex][columnIndex] =
          substringMatrix[rowIndex - 1][columnIndex - 1] + 1;
      } else {
        substringMatrix[rowIndex][columnIndex] = 0;
      }

      if (substringMatrix[rowIndex][columnIndex] > longestSubstringLength) {
        longestSubstringLength = substringMatrix[rowIndex][columnIndex];
        longestSubstringColumn = columnIndex;
        longestSubstringRow = rowIndex;
      }
    }
  }

  if (longestSubstringLength === 0) {
    return "";
  }

  let longestSubstring = "";

  while (substringMatrix[longestSubstringRow][longestSubstringColumn] > 0) {
    longestSubstring = s1[longestSubstringColumn - 1] + longestSubstring;
    longestSubstringRow -= 1;
    longestSubstringColumn -= 1;
  }
  console.log(longestSubstring);
  return longestSubstring;
}
longestCommonSubstring("abcde", "ebcda");

//__________Task 19 ___________//
// Напишіть функцію, яка приймає рядок та число зсуву та повертає
// зашифровану версію рядка за допомогою шифру Цезаря. Кожна літера у
// вихідному рядку має бути замінена на літеру, що знаходиться на заданій
// кількості позицій вперед в алфавіті. Використовуйте методи роботи з рядками
// та масивами для вирішення задачі.

const getCipherMap = (shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return alphabet.reduce((charsMap, currentChar, charIndex) => {
    const charsMapClone = { ...charsMap };

    let encryptedCharIndex = (charIndex + shift) % alphabet.length;

    if (encryptedCharIndex < 0) {
      encryptedCharIndex += alphabet.length;
    }
    charsMapClone[currentChar] = alphabet[encryptedCharIndex];
    return charsMapClone;
  }, {});
};

const caesarCipherEncrypt = (str, shift) => {
  const cipherMap = getCipherMap(shift);

  let encryptedStr = str
    .toLowerCase()
    .split("")
    .map((char) => cipherMap[char] || char)
    .join("");

  console.log(encryptedStr);
};

caesarCipherEncrypt("ABCDEF", 3);

//__________Task 20 ___________//
// Напишіть функцію, яка приймає два рядки та перевіряє, чи є вони
// анаграмами (чи мають однакові символи у різному порядку). Функція
// повинна повернути true, якщо рядки є анаграмами, і false інакше.
// Використовуйте методи роботи з рядками для вирішення задачі.

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    console.log(false);
    return;
  }

  let stringValue1 = 0;
  let stringValue2 = 0;

  for (let i = 0; i < string1.length; i++) {
    let value = string1.toLowerCase().charCodeAt(i);
    stringValue1 += value;
  }

  for (let i = 0; i < string2.length; i++) {
    let value = string2.toLowerCase().charCodeAt(i);
    stringValue2 += value;
  }

  if (stringValue1 === stringValue2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isAnagram("Peach", "Cheap");

//__________Task 21 ___________//
//   Створіть об'єкт "Університет" з методами для додавання студента,
//   видалення студента, отримання інформації про студента за його
//   ідентифікатором та отримання списку студентів певного курсу. Реалізуйте
//   також функцію, яка дає змогу отримати список студентів певного факультету.
//   Використовуйте об'єкти та їх методи для вирішення задачі.

const university = {
  students: [
    {
      id: 1,
      name: "Johnny Depp",
      course: 5,
      faculty: "Cinematography",
    },
    {
      id: 2,
      name: "Brad Pitt",
      course: 5,
      faculty: "Cinematography",
    },
    {
      id: 3,
      name: "Timothee Chalamet",
      course: 1,
      faculty: "Cinematography",
    },
    {
      id: 4,
      name: "Wes Anderson",
      course: 5,
      faculty: "Directing",
    },
    {
      id: 5,
      name: "Antonio Lukich",
      course: 1,
      faculty: "Directing",
    },
  ],

  addStudent(newStudent) {
    for (const item of this.students) {
      if (item.id === newStudent.id) {
        console.log(
          `Error! Student id ${newStudent.name} is already occupied!`
        );
      }
    }

    this.students.push(newStudent);
  },
  removeStudent(studentId) {
    for (let i = 0; i < this.students.length; i++) {
      if (studentId === this.students[i].id) {
        this.students.splice(i, 1);
      }
    }
  },
  getStudentById(id) {
    return this.students.find((student) => student.id === id);
  },

  getStudentsByCourse(course) {
    return this.students.filter((student) => student.course === course);
  },

  getStudentsByFaculty(faculty) {
    return this.students.filter((student) => student.faculty === faculty);
  },
};

console.log(university.students);

university.addStudent({
  id: 6,
  name: "Emma Watson",
  course: 3,
  faculty: "Acting",
});

console.log(university.students);
university.removeStudent(3);
console.log(university.students);
console.log(university.getStudentById(2));
console.log(university.getStudentsByCourse(5));
console.log(university.getStudentsByFaculty("Cinematography"));

//__________Task 22 ___________//
// Напишіть програму, яка аналізує текст та виводить статистику про
// кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка
// визначає слова, що найчастіше зустрічаються в тексті. Використовуйте
// методи роботи з рядками, регулярні вирази та об'єкти для вирішення задачі.

function textAnalysis(text) {
  const symbol = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const word = /\b[A-Za-z]+\b/g;
  const sentence = /[.!?]/g;

  const symbolsQuantity = (text.match(symbol) || []).length;
  console.log("Symbols: " + symbolsQuantity);

  const words = text.match(word) || [];
  const wordsQuantity = words.length;
  console.log("Words: " + wordsQuantity);

  const sentences = text.match(sentence) || [];
  const sentencesQuantity = sentences.length;
  console.log("Sentences: " + sentencesQuantity);

  const wordFrequency = words.reduce((freq, word) => {
    freq[word.toLowerCase()] = (freq[word.toLowerCase()] || 0) + 1;
    return freq;
  }, {});

  const mostFrequentWords = Object.entries(wordFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  for (let [word, frequency] of mostFrequentWords) {
    console.log(`The word "${word}" occurs ${frequency} times`);
  }
}

textAnalysis(
  "The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family. Cats are commonly kept as house pets but can also be farm cats or feral cats; the feral cat ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to kill vermin. About 60 cat breeds are recognized by various cat registries."
);


