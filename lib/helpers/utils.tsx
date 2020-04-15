const uniqueId = (n: number) => {
  let upperCase = '';
  for (let i = 65; i < 91; i++) {
    upperCase += String.fromCharCode(i) + ',';
  }
  const upperCaseArr = upperCase.split(',');
  const letterArr = []
  for (let i = 0; i < n; i++) {
    const val = Math.floor(Math.random() * 26);
    if (letterArr.includes(val.toString()) === false) {
      letterArr.push(upperCaseArr[val])
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
const checkClient = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let isPc = true;
  for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          isPc = false;
          break;
      }
  }
  return isPc;
}
export {uniqueId, combineClass, prefixClass, checkClient}

