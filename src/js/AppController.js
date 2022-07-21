class AppController {
  constructor(transactionList, uiController) {
    this.transactionList = transactionList;
    this.uiController = uiController;
  }

  updateBudget() {
    this.uiController.displayExpenseList(this.transactionList);
    this.uiController.displayIncomeList(this.transactionList);
    this.uiController.displayBudgetValue(this.transactionList);
    this.uiController.displayIncomeValue(this.transactionList);
    this.uiController.displayExpensesValue(this.transactionList);
    this.uiController.displayExpensesPercentage(this.transactionList);
    this.uiController.displayFormattedMonth();
  }

  handleTransactionInput(event) {
    // get the input values (amt, desc)
    const [amt, desc] = this.uiController.getInputValues();
    // call transactionList.addNewTransaction(amt, desc)
    if (amt === '' || desc === '') {
      // ideally we would throw an error of a validation here
      return;
    }
    this.transactionList.addNewTransaction(amt, desc);
    this.updateBudget();
  }

  handleIncomeDelete(event) {
    // get the id from the event target
    const id = parseInt(event.target.closest('.item').dataset.transactionId);
    this.transactionList.removeTransaction(id, 'income');
    this.updateBudget();
  }

  handleExpenseDelete(event) {
    const id = parseInt(event.target.closest('.item').dataset.transactionId);
    this.transactionList.removeTransaction(id, 'expense');
    this.updateBudget();
  }

  setupEventListeners() {
    // Events
    // transaction input event
    document
      .querySelector('.add__btn')
      .addEventListener('click', (e) => this.handleTransactionInput(e));

    // delete income click event
    document
      .querySelector('.container .income')
      .addEventListener('click', (e) => this.handleIncomeDelete(e));

    // delete expense click event
    document
      .querySelector('.container .expenses')
      .addEventListener('click', (e) => this.handleExpenseDelete(e));
  }

  init() {
    this.updateBudget();
    this.setupEventListeners();
  }
}

export default AppController;
