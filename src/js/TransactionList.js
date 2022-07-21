// model or the state of our application
class Transaction {
  constructor(amount, description, date, id) {
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.id = id;
  }
}

class TransactionList {
  constructor() {
    this.incomeList = [];
    this.expenseList = [];
    this.id = 1;
  }

  addNewTransaction(amount, description) {
    if (amount >= 0) {
      this.incomeList.push(
        new Transaction(amount, description, Date.now(), this.id++)
      );
    } else {
      this.expenseList.push(
        new Transaction(Math.abs(amount), description, Date.now(), this.id++)
      );
    }
  }

  removeTransaction(id, type) {
    if (type === 'income') {
      this.incomeList = this.incomeList.filter((item) => item.id !== id);
    } else {
      this.expenseList = this.expenseList.filter((item) => item.id !== id);
    }
  }

  calculateBudget() {
    // reduce each list (income and expenses) to a single value
    // return those values;
    const totalIncome = this.incomeList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.amount,
      0
    );

    const totalExpenses = this.expenseList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.amount,
      0
    );

    return [totalIncome, totalExpenses];
  }

  calculateNetIncome() {
    const incomeAndExpenses = this.calculateBudget();
    return incomeAndExpenses[0] - Math.abs(incomeAndExpenses[1]);
  }

  calculatePercentage(expense) {
    // divide expense by total income
    return Math.floor((Math.abs(expense) / this.calculateBudget()[0]) * 100);
  }

  calculateNetPercentage() {
    const budget = this.calculateBudget();
    // divide expense by total income
    return Math.floor((Math.abs(budget[1]) / budget[0]) * 100);
  }
}

export default TransactionList;
