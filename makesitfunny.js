const makeItFunny = (text, n) => {
    let i = 0;
    let result = '';
    while (i < text.length) {
      const current = text[i];
    if ((i + 1)% n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
       result = `${result}${current}`
    }
    i = i + 1;
    }
    return result;
  };