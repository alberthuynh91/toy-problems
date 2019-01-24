const string = 'DBCABA'
const string2 = 'DBBCDABA'
const string3 = 'DBCDABA'

const findFirstRecurringCharacter = (string) => {
  const storage = {}
  const charArr = string.split("")
  for (var i = 0; i < charArr.length; i++) {
    if (storage[charArr[i]] === undefined) {
      storage[charArr[i]] = 1
    } else {
      return charArr[i]
    }
  }
  return false
}

findFirstRecurringCharacter(string1) // should return B
findFirstRecurringCharacter(string2) // should return B
findFirstRecurringCharacter(string3) // should return D

// O(n) time complexity since we have one for loop and we may go over the entire
//  string of length n