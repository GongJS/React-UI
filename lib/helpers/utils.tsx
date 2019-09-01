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
const checkClient = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
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

