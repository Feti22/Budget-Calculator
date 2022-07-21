import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);
// √ - Display the month/year of the budget
// √ - Display the Net income
// √ - Display total income
// √ - Display total expenses (with percentage)
// √ - display income list
// √ - display expense list
// Get input value (and reset)

class UIController {
  formattedTransactionDate(date) {
    return dayjs(date).format('MMM. Do, YYYY');
  }

  displayFormattedMonth() {
    const budgetTitleEl = document.querySelector('.budget__title--month');

    budgetTitleEl.textContent = dayjs().format('MMMM YYYY');
  }

  displayBudgetValue(transactionList) {
    const budgetValueEl = document.querySelector('.budget__value');
    const netIncome = transactionList.calculateNetIncome();
    netIncome >= 0
      ? (budgetValueEl.textContent = `+ $${Math.abs(netIncome).toFixed(2)}`)
      : (budgetValueEl.textContent = `- $${Math.abs(netIncome).toFixed(2)}`);
  }

  displayIncomeValue(transactionList) {
    const incomeValueEl = document.querySelector('.budget__income--value');
    const totalIncome = transactionList.calculateBudget()[0];
    incomeValueEl.textContent = `+ ${totalIncome.toFixed(2)}`;
  }

  displayExpensesValue(transactionList) {
    const expensesValueEl = document.querySelector('.budget__expenses--value');
    const totalExpenses = transactionList.calculateBudget()[1];
    expensesValueEl.textContent = `- ${totalExpenses.toFixed(2)}`;
  }

  displayExpensesPercentage(transactionList) {
    const expensesPercentageEl = document.querySelector(
      '.budget__expenses--percentage'
    );
    expensesPercentageEl.textContent = `${transactionList.calculateNetPercentage()}%`;
  }

  displayIncomeList(transactionList) {
    const incomeList = transactionList.incomeList;
    const incomeListEl = document.querySelector('.income__list');
    incomeListEl.textContent = '';

    incomeList.forEach((transaction) => {
      const { id, description, amount, date } = transaction;
      incomeListEl.insertAdjacentHTML(
        'beforeend',
        `
          <div class="item" data-transaction-id="${id}">
          <div class="item__description">${description}</div>
          <div class="right">
            <div class="item__value">+ $${amount}</div>
            <div class="item__delete">
              <button class="item__delete--btn">
                <i class="ion-ios-close-outline"></i>
              </button>
            </div>
          </div>
          <div class="item__date">${this.formattedTransactionDate(date)}</div>
        </div>`
      );
    });
  }

  displayExpenseList(transactionList) {
    const expenseList = transactionList.expenseList;
    const expensesListEl = document.querySelector('.expenses__list');
    expensesListEl.textContent = '';

    expenseList.forEach((transaction) => {
      const { id, description, amount, date } = transaction;
      expensesListEl.insertAdjacentHTML(
        'beforeend',
        `
        <div class="item" data-transaction-id="${id}">
        <div class="item__description">${description}</div>
        <div class="right">
          <div class="item__value">- $${amount}</div>
          <div class="item__percentage">${transactionList.calculatePercentage(
            amount
          )}%</div>
          <div class="item__delete">
            <button class="item__delete--btn">
              <i class="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
        <div class="item__date">${this.formattedTransactionDate(date)}</div>
      </div>`
      );
    });
  }

  resetInputValues() {
    document.querySelector('.add__description').value = '';
    document.querySelector('.add__value').value = '';
  }

  getInputValues() {
    const desc = document.querySelector('.add__description').value;
    const amt = document.querySelector('.add__value').value;
    this.resetInputValues();
    return [parseInt(amt), desc];
  }
}

export default UIController;
