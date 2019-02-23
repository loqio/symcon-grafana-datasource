import {SymconDatasource} from './datasource';
import {SymconDatasourceQueryCtrl} from './query_ctrl';

class SymconConfigCtrl {}
SymconConfigCtrl.templateUrl = 'partials/config.html';

class SymconQueryOptionsCtrl {}
SymconQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

class SymconAnnotationsQueryCtrl {}
SymconAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'

export {
  SymconDatasource as Datasource,
  SymconDatasourceQueryCtrl as QueryCtrl,
  SymconConfigCtrl as ConfigCtrl,
  SymconQueryOptionsCtrl as QueryOptionsCtrl,
  SymconAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
