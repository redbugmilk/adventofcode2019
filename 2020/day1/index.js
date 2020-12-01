const { readFile } = require("../utils/file");

const convertExpenseToArrayFormat = (expenses) => expenses.split("\n");

const findAdded2020 = (expense, expenses) =>
  expenses.find((item) => parseInt(item) + parseInt(expense) === 2020);

const findWrongExpenses = (expenses) => {
  for (let index = 0; index < expenses.length; index++) {
    const element = expenses[index];
    const value = findAdded2020(element, expenses);
    if (value) {
      return [element, value];
    }
  }
};

const calculateExpenses = (expenses) => {
  const iterableExpenses = convertExpenseToArrayFormat(expenses);
  const wrongExpenses = findWrongExpenses(iterableExpenses);
  return (
    wrongExpenses &&
    wrongExpenses.reduce(
      (accumulator, actualValue) => accumulator * actualValue,
      1
    )
  );
};

const fixExpenseReport = async () => {
  try {
    console.log("Fix report started");
    const expenses = await readFile("./expenseReport");
    if (expenses) {
      const result = calculateExpenses(expenses);
      console.log("Expenses report result " + result);
    }
    console.log("Failed to calculated expenses report");
  } catch (error) {
    console.log("OhOh something is wrong! Error: ", error);
  }
};

fixExpenseReport();
