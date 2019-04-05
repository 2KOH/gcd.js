// 最大公約数を返す。
const gcd = (m, n) => {
	if (m < n) [m, n] = [n, m];
	while (n) [m, n] = [n, m % n];
	return m;
};

module.exports = gcd;
