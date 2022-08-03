export function capitalize(str) {
    if (str === '') { return ''; }

    str = Array.from(str);
    str[0] = str[0].toUpperCase();
    
    return str.join('');
}
