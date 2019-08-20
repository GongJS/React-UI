const uniqueId = (n: number) => {
  let A_Z = "";
  for (let i = 65; i < 91; i++) {
    A_Z += String.fromCharCode(i) + ",";
  }
  const A_Z_Arr = A_Z.split(',')
  const letterArr = []
  for (let i = 0; i < n; i++) {
    let val = Math.floor(Math.random() * 26);
    if (letterArr.includes(val.toString()) === false) {
      letterArr.push(A_Z_Arr[val])
    } else {
      i--;
    }
  }
  return letterArr.join('')
}

const combineClass = (...args: (string|undefined)[]) => {
  return args.filter(Boolean).join(' ');
}

const prefixClass = (prefix: string) => {
  return (...args: (string | undefined)[]) => {
    return [`${prefix}`, ...args].filter(Boolean).join('-');
  }
};
export {uniqueId, combineClass, prefixClass}

