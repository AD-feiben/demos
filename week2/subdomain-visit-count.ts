function subdomainVisits(cpdomains: string[]): string[] {
  let map: Map<string, number> = new Map();
  for (let cpdomain of cpdomains) {
    let [count, domain] = cpdomain.split(" ");
    let domainArr = domain.split(".");
    while (domainArr.length !== 0) {
      let subDomain = domainArr.join(".");
      map.set(subDomain, (map.get(subDomain) || 0) + Number(count));
      domainArr.shift();
    }
  }
  let ans: Array<string> = [];
  for (let key of map.keys()) {
    ans.push(`${map.get(key)} ${key}`);
  }
  return ans;
}
