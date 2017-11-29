module.exports = function(text) {
    let altered = "";
    for (let i = 0; i < text.length; i++) {
        altered += i%2==0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    return altered;
}
