import AppController from './AppController';
import TransactionList from './TransactionList';
import UIController from './UIController';

const transactions = new TransactionList();
const ui = new UIController();
const app = new AppController(transactions, ui);

app.init();

// TODO:
// transactions don't show cents
// add validation message for empty submissions
// fix infinity percentage when income is 0
// fix NaN% when the app first loads
// refactor the display expense and income methods in the UIController
// look for other opportunities to refactor and improve the code
