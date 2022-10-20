const replaceChar = (str) => {
    const strArr = str.split('');
    console.log(str.replace(strArr[0], 'x'));

}
replaceChar('apple');