function toCamelCase(str) {
  if (str.includes('_')) {
    const res = str.split('_');
    if (res[0] === res[0].toUpperCase()) {
      const res1 = res.map(r => r.charAt(0).toUpperCase() + r.substring(1));
      return res1.join('');
    } else {
      return res[0] + res.slice(1).map(f => f.charAt(0).toUpperCase() + f.substring(1));
    }
  } else if (str.includes('-')) {
    const res2 = str.split('-');
    if (res2[0] === res2[0].toUpperCase()) {
      const res3 = res2.map(a => a[0].toUpperCase() + a.slice(1));
      return res3.join('');
    } else {
      return res2[0] + res2.slice(1).map(d => d.charAt(0).toUpperCase() + d.substring(1));
    }
  } else if (str === '') {
    return str;
  }
}
console.log(toCamelCase('the_stealth_warrior'));
