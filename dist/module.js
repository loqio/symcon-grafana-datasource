'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationsQueryCtrl = exports.QueryOptionsCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = require('./datasource');

var _query_ctrl = require('./query_ctrl');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SymconConfigCtrl = function SymconConfigCtrl() {
  _classCallCheck(this, SymconConfigCtrl);
};

SymconConfigCtrl.templateUrl = 'partials/config.html';

var SymconQueryOptionsCtrl = function SymconQueryOptionsCtrl() {
  _classCallCheck(this, SymconQueryOptionsCtrl);
};

SymconQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

var SymconAnnotationsQueryCtrl = function SymconAnnotationsQueryCtrl() {
  _classCallCheck(this, SymconAnnotationsQueryCtrl);
};

SymconAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

exports.Datasource = _datasource.SymconDatasource;
exports.QueryCtrl = _query_ctrl.SymconDatasourceQueryCtrl;
exports.ConfigCtrl = SymconConfigCtrl;
exports.QueryOptionsCtrl = SymconQueryOptionsCtrl;
exports.AnnotationsQueryCtrl = SymconAnnotationsQueryCtrl;
//# sourceMappingURL=module.js.map
