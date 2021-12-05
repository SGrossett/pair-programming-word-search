const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    return horizontalJoin.includes(word) ? true : false;
}

module.exports = wordSearch;