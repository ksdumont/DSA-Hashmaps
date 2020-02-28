const HashMap = require("./HashMap");

function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log("Maiar Key:", lotr.get("Maiar"));
  console.log("Hobbit key:", lotr.get("Hobbit"));
  return lotr;
}
// console.log(main())

const WhatDoesThisDo = function() {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// console.log(WhatDoesThisDo());

function duplicate(str) {
  let dup = new HashMap();

  for (let i = 0; i < str.length; i++) {
    dup.set(str[i], str[i]);
  }
  console.log(dup);

  let newStr = "";
  dup._hashTable.forEach(letter => {
    newStr += letter.value;
  });
  console.log(newStr);
}
// console.log(duplicate("google"));

const palindrome = (string) => {
  const palindromeMap = new Map()
  let odd = 0
  for (let i = 0; i < string.length; i++) {
    if (palindromeMap.get(string[i]) === undefined) {
      palindromeMap.set(string[i], 1)
    }
    else {
      let char = palindromeMap.get(string[i])
      palindromeMap.set(string[i], char+=1)
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if(palindromeMap.get(string[i]) % 2 !==0) {
      odd++
      console.log('odd', odd)
    }
    if(odd > 1) {
      return false
    }
  }
  return true
}
// console.log(palindrome('racecar'))

const groupAnagrams = (strArr) => {
  const anagramMap = new Map()
  strArr.forEach((word) => {
    let sorted = alphabetize(word)
    if(anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(word)
    }
    else {
      anagramMap.set(sorted, [word])
    }
  }) 
  return [...anagramMap.values()]
}

const alphabetize = word => {
  let alphebtized = word.split('').sort().join('')
  return alphebtized
}

// console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
// [['east', 'eats', 'teas'], ['race', 'acre'], ['cars', 'arcs']]
