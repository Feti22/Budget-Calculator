// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iV45c":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appController = require("./AppController");
var _appControllerDefault = parcelHelpers.interopDefault(_appController);
var _transactionList = require("./TransactionList");
var _transactionListDefault = parcelHelpers.interopDefault(_transactionList);
var _uicontroller = require("./UIController");
var _uicontrollerDefault = parcelHelpers.interopDefault(_uicontroller);
const transactions = new _transactionListDefault.default();
const ui = new _uicontrollerDefault.default();
const app = new _appControllerDefault.default(transactions, ui);
app.init(); // TODO:
 // transactions don't show cents
 // add validation message for empty submissions
 // fix infinity percentage when income is 0
 // fix NaN% when the app first loads
 // refactor the display expense and income methods in the UIController
 // look for other opportunities to refactor and improve the code

},{"./TransactionList":"8vqV1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./UIController":"hKzpF","./AppController":"jOtdt"}],"8vqV1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// model or the state of our application
class Transaction {
    constructor(amount, description, date, id){
        this.amount = amount;
        this.description = description;
        this.date = date;
        this.id = id;
    }
}
class TransactionList {
    constructor(){
        this.incomeList = [];
        this.expenseList = [];
        this.id = 1;
    }
    addNewTransaction(amount, description) {
        if (amount >= 0) this.incomeList.push(new Transaction(amount, description, Date.now(), this.id++));
        else this.expenseList.push(new Transaction(Math.abs(amount), description, Date.now(), this.id++));
    }
    removeTransaction(id, type) {
        if (type === 'income') this.incomeList = this.incomeList.filter((item)=>item.id !== id
        );
        else this.expenseList = this.expenseList.filter((item)=>item.id !== id
        );
    }
    calculateBudget() {
        // reduce each list (income and expenses) to a single value
        // return those values;
        const totalIncome = this.incomeList.reduce((previousValue, currentValue)=>previousValue + currentValue.amount
        , 0);
        const totalExpenses = this.expenseList.reduce((previousValue, currentValue)=>previousValue + currentValue.amount
        , 0);
        return [
            totalIncome,
            totalExpenses
        ];
    }
    calculateNetIncome() {
        const incomeAndExpenses = this.calculateBudget();
        return incomeAndExpenses[0] - Math.abs(incomeAndExpenses[1]);
    }
    calculatePercentage(expense) {
        // divide expense by total income
        return Math.floor(Math.abs(expense) / this.calculateBudget()[0] * 100);
    }
    calculateNetPercentage() {
        const budget = this.calculateBudget();
        // divide expense by total income
        return Math.floor(Math.abs(budget[1]) / budget[0] * 100);
    }
}
exports.default = TransactionList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hKzpF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dayjs = require("dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
var _advancedFormat = require("dayjs/plugin/advancedFormat");
var _advancedFormatDefault = parcelHelpers.interopDefault(_advancedFormat);
_dayjsDefault.default.extend(_advancedFormatDefault.default);
// √ - Display the month/year of the budget
// √ - Display the Net income
// √ - Display total income
// √ - Display total expenses (with percentage)
// √ - display income list
// √ - display expense list
// Get input value (and reset)
class UIController {
    formattedTransactionDate(date) {
        return _dayjsDefault.default(date).format('MMM. Do, YYYY');
    }
    displayFormattedMonth() {
        const budgetTitleEl = document.querySelector('.budget__title--month');
        budgetTitleEl.textContent = _dayjsDefault.default().format('MMMM YYYY');
    }
    displayBudgetValue(transactionList) {
        const budgetValueEl = document.querySelector('.budget__value');
        const netIncome = transactionList.calculateNetIncome();
        netIncome >= 0 ? budgetValueEl.textContent = `+ $${Math.abs(netIncome).toFixed(2)}` : budgetValueEl.textContent = `- $${Math.abs(netIncome).toFixed(2)}`;
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
        const expensesPercentageEl = document.querySelector('.budget__expenses--percentage');
        expensesPercentageEl.textContent = `${transactionList.calculateNetPercentage()}%`;
    }
    displayIncomeList(transactionList) {
        const incomeList = transactionList.incomeList;
        const incomeListEl = document.querySelector('.income__list');
        incomeListEl.textContent = '';
        incomeList.forEach((transaction)=>{
            const { id , description , amount , date  } = transaction;
            incomeListEl.insertAdjacentHTML('beforeend', `
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
        </div>`);
        });
    }
    displayExpenseList(transactionList) {
        const expenseList = transactionList.expenseList;
        const expensesListEl = document.querySelector('.expenses__list');
        expensesListEl.textContent = '';
        expenseList.forEach((transaction)=>{
            const { id , description , amount , date  } = transaction;
            expensesListEl.insertAdjacentHTML('beforeend', `
        <div class="item" data-transaction-id="${id}">
        <div class="item__description">${description}</div>
        <div class="right">
          <div class="item__value">- $${amount}</div>
          <div class="item__percentage">${transactionList.calculatePercentage(amount)}%</div>
          <div class="item__delete">
            <button class="item__delete--btn">
              <i class="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
        <div class="item__date">${this.formattedTransactionDate(date)}</div>
      </div>`);
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
        return [
            parseInt(amt),
            desc
        ];
    }
}
exports.default = UIController;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","dayjs":"NJZFB","dayjs/plugin/advancedFormat":"aH65B"}],"NJZFB":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t1 = 1000, e1 = 60000, n1 = 3600000, r1 = "millisecond", i1 = "second", s1 = "minute", u1 = "hour", a1 = "day", o1 = "week", f1 = "month", h1 = "quarter", c1 = "year", d1 = "date", $1 = "Invalid Date", l1 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y1 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M1 = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    }, m1 = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, g1 = {
        s: m1,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m1(r, 2, "0") + ":" + m1(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f1), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), f1);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: f1,
                y: c1,
                w: o1,
                d: a1,
                D: d1,
                h: u1,
                m: s1,
                s: i1,
                ms: r1,
                Q: h1
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, v1 = "en", D1 = {};
    D1[v1] = M1;
    var p = function(t) {
        return t instanceof _;
    }, S = function t(e, n, r) {
        var i;
        if (!e) return v1;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D1[s] && (i = s), n && (D1[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D1[a] = e, i = a;
        }
        return !r && i && (v1 = i), i || !r && v1;
    }, w = function(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, O = g1;
    O.l = S, O.i = p, O.w = function(t, e) {
        return w(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M2(t) {
            this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (O.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match(l1);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t2), this.$x = t2.x || {}, this.init();
        }, m2.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m2.$utils = function() {
            return O;
        }, m2.isValid = function() {
            return !(this.$d.toString() === $1);
        }, m2.isSame = function(t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m2.isAfter = function(t, e) {
            return w(t) < this.startOf(e);
        }, m2.isBefore = function(t, e) {
            return this.endOf(e) < w(t);
        }, m2.$g = function(t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
        }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1000);
        }, m2.valueOf = function() {
            return this.$d.getTime();
        }, m2.startOf = function(t3, e2) {
            var n = this, r = !!O.u(e2) || e2, h = O.p(t3), $ = function(t, e) {
                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a1);
            }, l = function(t, e) {
                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, g = "set" + (this.$u ? "UTC" : "");
            switch(h){
                case c1:
                    return r ? $(1, 0) : $(31, 11);
                case f1:
                    return r ? $(1, M) : $(0, M + 1);
                case o1:
                    var v = this.$locale().weekStart || 0, D = (y < v ? y + 7 : y) - v;
                    return $(r ? m - D : m + (6 - D), M);
                case a1:
                case d1:
                    return l(g + "Hours", 0);
                case u1:
                    return l(g + "Minutes", 1);
                case s1:
                    return l(g + "Seconds", 2);
                case i1:
                    return l(g + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m2.endOf = function(t) {
            return this.startOf(t, !1);
        }, m2.$set = function(t, e) {
            var n, o = O.p(t), h = "set" + (this.$u ? "UTC" : ""), $ = (n = {}, n[a1] = h + "Date", n[d1] = h + "Date", n[f1] = h + "Month", n[c1] = h + "FullYear", n[u1] = h + "Hours", n[s1] = h + "Minutes", n[i1] = h + "Seconds", n[r1] = h + "Milliseconds", n)[o], l = o === a1 ? this.$D + (e - this.$W) : e;
            if (o === f1 || o === c1) {
                var y = this.clone().set(d1, 1);
                y.$d[$](l), y.init(), this.$d = y.set(d1, Math.min(this.$D, y.daysInMonth())).$d;
            } else $ && this.$d[$](l);
            return this.init(), this;
        }, m2.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m2.get = function(t) {
            return this[O.p(t)]();
        }, m2.add = function(r, h) {
            var d, $ = this;
            r = Number(r);
            var l = O.p(h), y = function(t) {
                var e = w($);
                return O.w(e.date(e.date() + Math.round(t * r)), $);
            };
            if (l === f1) return this.set(f1, this.$M + r);
            if (l === c1) return this.set(c1, this.$y + r);
            if (l === a1) return y(1);
            if (l === o1) return y(7);
            var M = (d = {}, d[s1] = e1, d[u1] = n1, d[i1] = t1, d)[l] || 1, m = this.$d.getTime() + r * M;
            return O.w(m, this);
        }, m2.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m2.format = function(t4) {
            var e3 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || $1;
            var r2 = t4 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u = this.$m, a = this.$M, o = n2.weekdays, f = n2.months, h = function(t, n, i, s) {
                return t && (t[n] || t(e3, r2)) || i[n].substr(0, s);
            }, c = function(t) {
                return O.s(s2 % 12 || 12, t, "0");
            }, d = n2.meridiem || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            }, l = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: O.s(a + 1, 2, "0"),
                MMM: h(n2.monthsShort, a, f, 3),
                MMMM: h(f, a),
                D: this.$D,
                DD: O.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: h(n2.weekdaysMin, this.$W, o, 2),
                ddd: h(n2.weekdaysShort, this.$W, o, 3),
                dddd: o[this.$W],
                H: String(s2),
                HH: O.s(s2, 2, "0"),
                h: c(1),
                hh: c(2),
                a: d(s2, u, !0),
                A: d(s2, u, !1),
                m: String(u),
                mm: O.s(u, 2, "0"),
                s: String(this.$s),
                ss: O.s(this.$s, 2, "0"),
                SSS: O.s(this.$ms, 3, "0"),
                Z: i2
            };
            return r2.replace(y1, function(t, e) {
                return e || l[t] || i2.replace(":", "");
            });
        }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r, d, $) {
            var l, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e1, g = this - M, v = O.m(this, M);
            return v = (l = {}, l[c1] = v / 12, l[f1] = v, l[h1] = v / 3, l[o1] = (g - m) / 604800000, l[a1] = (g - m) / 86400000, l[u1] = g / n1, l[s1] = g / e1, l[i1] = g / t1, l)[y] || g, $ ? v : O.a(v);
        }, m2.daysInMonth = function() {
            return this.endOf(f1).$D;
        }, m2.$locale = function() {
            return D1[this.$L];
        }, m2.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = S(t, e, !0);
            return r && (n.$L = r), n;
        }, m2.clone = function() {
            return O.w(this.$d, this);
        }, m2.toDate = function() {
            return new Date(this.valueOf());
        }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
            return this.$d.toISOString();
        }, m2.toString = function() {
            return this.$d.toUTCString();
        }, M2;
    }(), b = _.prototype;
    return w.prototype = b, [
        [
            "$ms",
            r1
        ],
        [
            "$s",
            i1
        ],
        [
            "$m",
            s1
        ],
        [
            "$H",
            u1
        ],
        [
            "$W",
            a1
        ],
        [
            "$M",
            f1
        ],
        [
            "$y",
            c1
        ],
        [
            "$D",
            d1
        ]
    ].forEach(function(t) {
        b[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), w.extend = function(t, e) {
        return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
        return w(1000 * t);
    }, w.en = D1[v1], w.Ls = D1, w.p = {}, w;
});

},{}],"aH65B":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    return function(e1, t1, r1) {
        var n1 = t1.prototype, s = n1.format;
        r1.en.ordinal = function(e) {
            var t = [
                "th",
                "st",
                "nd",
                "rd"
            ], r = e % 100;
            return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]";
        }, n1.format = function(e2) {
            var t = this, r = this.$locale();
            if (!this.isValid()) return s.bind(this)(e2);
            var n = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e) {
                switch(e){
                    case "Q":
                        return Math.ceil((t.$M + 1) / 3);
                    case "Do":
                        return r.ordinal(t.$D);
                    case "gggg":
                        return t.weekYear();
                    case "GGGG":
                        return t.isoWeekYear();
                    case "wo":
                        return r.ordinal(t.week(), "W");
                    case "w":
                    case "ww":
                        return n.s(t.week(), "w" === e ? 1 : 2, "0");
                    case "W":
                    case "WW":
                        return n.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
                    case "k":
                    case "kk":
                        return n.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0");
                    case "X":
                        return Math.floor(t.$d.getTime() / 1000);
                    case "x":
                        return t.$d.getTime();
                    case "z":
                        return "[" + t.offsetName() + "]";
                    case "zzz":
                        return "[" + t.offsetName("long") + "]";
                    default:
                        return e;
                }
            });
            return s.bind(this)(a);
        };
    };
});

},{}],"jOtdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AppController {
    constructor(transactionList, uiController){
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
        if (amt === '' || desc === '') // ideally we would throw an error of a validation here
        return;
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
        document.querySelector('.add__btn').addEventListener('click', (e)=>this.handleTransactionInput(e)
        );
        // delete income click event
        document.querySelector('.container .income').addEventListener('click', (e)=>this.handleIncomeDelete(e)
        );
        // delete expense click event
        document.querySelector('.container .expenses').addEventListener('click', (e)=>this.handleExpenseDelete(e)
        );
    }
    init() {
        this.updateBudget();
        this.setupEventListeners();
    }
}
exports.default = AppController;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iV45c","8lRBv"], "8lRBv", "parcelRequire94c2")

//# sourceMappingURL=index.59a40e7a.js.map
