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

const isPassportValid = (passport) => {
  const requiredProperties = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  return requiredProperties.every(item => passport.hasOwnProperty(item));
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
