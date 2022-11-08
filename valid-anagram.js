var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const map = {}
    const str1 = s.split("")
    const str2 = t.split("")

    for (var i = 0; i < str1.length; i++) {
        if (map[str1[i]] === undefined) {
            map[str1[i]] = 1
        } else {
            map[str1[i]] = map[str1[i]] + 1
        }
    }

    for (var j = 0; j < str2.length; j++) {
        if (map[str2[j]] === undefined) {
            return false
        } else {
            map[str2[j]] = map[str2[j]] - 1
        }
    } 
    return Object.values(map).every((val) => val === 0)
};

const s = "anagram"
const t = "nagaram"
console.log(isAnagram(s, t))
