/**
 * Given a String Determine if it's a Valid IPV4 address or not
 * a valid address contains only numeric chars
 * of four integer nums range from [0-255] separated by a dot (.)
 * leading zeros are not allowed Ex => 0 is allowed 01 is not
 * IPV4 example => 1.122.10.5
 *                          IN PROGRESS
 */

const isValidIPV4 = (ipv4) => {
  const ipPattern = /[]/g;
  return ipPattern.test(ipv4);
};

// console.log(isValidIPV4("192.168.1.1")); // ture
// console.log(isValidIPV4("0.0.0.0")); // true
// console.log(isValidIPV4("255.01.50.111")); // false
// console.log(isValidIPV4("255.00.50.111")); // false
