let numere = []
for (let i = 60; i <= 100; i++) {
  numere[i] = i
  if (numere[i] % 2 == 1) {
    console.log('Numarul ', numere[i], ' este impar')
  }
}

console.log(numere)
