const { readFile } = require("../utils/file");
const { convertStringToArray } = require("../utils/arrays");

const parsePassword = (password) => {
  const parcels = password.split(" ");
  if (parcels.length === 3) {
    const interval = parcels[0].split("-");
    const pattern = parcels[1].replace(":", "");
    const password = parcels[2];
    return { interval, pattern, password };
  }
};

const isWrongPassword = ({ interval, pattern, password }) => {
  const result = password.split('').filter(letter => letter === pattern);
  return result.length >= interval[0] &&  result.length <= interval[1];
};

const findWrongPassword = (passwords) => {
  return passwords.map((item) => {
    const parsedPassword = parsePassword(item);
    if (parsedPassword && isWrongPassword(parsedPassword)) {
      return item;
    }
  });
};

const sumWrongPassword = (password) => {
  const passwords = convertStringToArray(password);
  const wrongPasswords = findWrongPassword(passwords);

  return (
    wrongPasswords &&
    wrongPasswords.filter(Boolean).length
  );
};

const checkWrongPasswords = async () => {
  try {
    console.log("How many wrong passwords?");
    const passwords = await readFile("./passwords");
    if (passwords) {
      const result = sumWrongPassword(passwords);
      console.log("Has  wrong password" + result);
    }
    console.log("Doesn't have wrong password");
  } catch (error) {
    console.log("OhOh something is wrong! Error: ", error);
  }
};

checkWrongPasswords();
