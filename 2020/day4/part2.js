const { readFile } = require("../utils/file");
const { convertStringToArray } = require("../utils/arrays");

const parsedPassports = (parsedPassports) => {
  const regex = /\n|\s/g;
  const passportObject = {};
  parsedPassports.split(regex).forEach((item) => {
    const itemSplitted = convertStringToArray(item, ":");
    passportObject[itemSplitted[0]] = itemSplitted[1];
  });
  return passportObject;
};

const dateValidation = (date, least, most) => {
  const dateLeast = parseInt(least);
  const dateMost = parseInt(most);
  const dateReceived = parseInt(date);
  return (
    date.length === 4 && dateReceived >= dateLeast && dateReceived <= dateMost
  );
};

const heightValidation = (height) => {
  let result = false;
  if (height.endsWith("cm")) {
    const splitHeight = parseInt(height.replace("cm"));
    result = splitHeight >= 150 && splitHeight <= 193;
  } else if (height.endsWith("in")) {
    const splitHeight = parseInt(height.replace("in"));
    result = splitHeight >= 59 && splitHeight <= 76;
  }
  return result;
};
const colorValidation = (color, pattern) => {
  let result = false;
  if (pattern === "hcl" && color.includes("#")) {
    result = /#([0-9]|[a-f]){6}/.test(color);
  } else {
    result = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].some(
      (item) => item === color
    );
  }
  return result;
};
const passportValidation = (passportNumber) =>
  passportNumber.length === 9 && /[0-9]{9}/.test(passportNumber);

const isPassportValid = (passport) => {
  const requiredProperties = {
    byr: (date) => dateValidation(date, 1920, 2002),
    iyr: (date) => dateValidation(date, 2010, 2020),
    eyr: (date) => dateValidation(date, 2020, 2030),
    hgt: (height) => heightValidation(height),
    hcl: (color) => colorValidation(color, "hcl"),
    ecl: (color) => colorValidation(color, "ecl"),
    pid: (number) => passportValidation(number),
  };

  const result = Object.entries(requiredProperties).every(([key, value]) => {
    return passport.hasOwnProperty(key) && value(passport[key]);
  });
  return result;
};

const findValidPassports = (passports) => {
  let validPassports = 0;
  passports.forEach((element) => {
    if (isPassportValid(parsedPassports(element))) {
      validPassports++;
    }
  });
  return validPassports;
};

const numberOfValidPassports = (passports) => {
  const regex = /\n{2,}/g;
  const parsedPassports = convertStringToArray(passports, regex);
  const validPassports = findValidPassports(parsedPassports);
  return validPassports;
};

const countingPassports = async () => {
  try {
    console.log("How many valid passports I will find?");
    const passports = await readFile("./passports");
    if (passports) {
      const result = numberOfValidPassports(passports);
      console.log("Has this many invalid passports " + result);
    }
    console.log("Doesn't have passports");
  } catch (error) {
    console.log("OhOh something is wrong! Error: ", error);
  }
};

countingPassports();
