["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/xmlhttp.js"],"~:js","goog.provide(\"goog.net.DefaultXmlHttpFactory\");\ngoog.provide(\"goog.net.XmlHttp\");\ngoog.provide(\"goog.net.XmlHttp.OptionType\");\ngoog.provide(\"goog.net.XmlHttp.ReadyState\");\ngoog.provide(\"goog.net.XmlHttpDefines\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.net.WrapperXmlHttpFactory\");\ngoog.require(\"goog.net.XmlHttpFactory\");\n/**\n * @return {!goog.net.XhrLike.OrNative}\n */\ngoog.net.XmlHttp = function() {\n  return goog.net.XmlHttp.factory_.createInstance();\n};\n/** @define {boolean} */ goog.define(\"goog.net.XmlHttp.ASSUME_NATIVE_XHR\", false);\n/** @const */ goog.net.XmlHttpDefines = {};\n/** @define {boolean} */ goog.define(\"goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR\", false);\n/**\n * @return {Object}\n */\ngoog.net.XmlHttp.getOptions = function() {\n  return goog.net.XmlHttp.factory_.getOptions();\n};\n/** @enum {number} */ goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};\n/** @enum {number} */ goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};\n/** @private @type {goog.net.XmlHttpFactory} */ goog.net.XmlHttp.factory_;\n/**\n * @param {Function} factory\n * @param {Function} optionsFactory\n * @deprecated Use setGlobalFactory instead.\n */\ngoog.net.XmlHttp.setFactory = function(factory, optionsFactory) {\n  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)));\n};\n/**\n * @param {!goog.net.XmlHttpFactory} factory\n */\ngoog.net.XmlHttp.setGlobalFactory = function(factory) {\n  goog.net.XmlHttp.factory_ = factory;\n};\n/**\n * @constructor\n * @extends {goog.net.XmlHttpFactory}\n */\ngoog.net.DefaultXmlHttpFactory = function() {\n  goog.net.XmlHttpFactory.call(this);\n};\ngoog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);\n/** @override */ goog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {\n  var progId = this.getProgId_();\n  if (progId) {\n    return new ActiveXObject(progId);\n  } else {\n    return new XMLHttpRequest;\n  }\n};\n/** @override */ goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {\n  var progId = this.getProgId_();\n  var options = {};\n  if (progId) {\n    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;\n    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true;\n  }\n  return options;\n};\n/** @private @type {(string|undefined)} */ goog.net.DefaultXmlHttpFactory.prototype.ieProgId_;\n/**\n * @private\n * @return {string}\n */\ngoog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {\n  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR || goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {\n    return \"\";\n  }\n  if (!this.ieProgId_ && typeof XMLHttpRequest == \"undefined\" && typeof ActiveXObject != \"undefined\") {\n    var ACTIVE_X_IDENTS = [\"MSXML2.XMLHTTP.6.0\", \"MSXML2.XMLHTTP.3.0\", \"MSXML2.XMLHTTP\", \"Microsoft.XMLHTTP\"];\n    for (var i = 0; i < ACTIVE_X_IDENTS.length; i++) {\n      var candidate = ACTIVE_X_IDENTS[i];\n      try {\n        new ActiveXObject(candidate);\n        this.ieProgId_ = candidate;\n        return candidate;\n      } catch (e) {\n      }\n    }\n    throw new Error(\"Could not create ActiveXObject. ActiveX might be disabled,\" + \" or MSXML might not be installed\");\n  }\n  return (/** @type {string} */ (this.ieProgId_));\n};\ngoog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Low level handling of XMLHttpRequest.\n * @author arv@google.com (Erik Arvidsson)\n * @author dbk@google.com (David Barrett-Kahn)\n */\n\ngoog.provide('goog.net.DefaultXmlHttpFactory');\ngoog.provide('goog.net.XmlHttp');\ngoog.provide('goog.net.XmlHttp.OptionType');\ngoog.provide('goog.net.XmlHttp.ReadyState');\ngoog.provide('goog.net.XmlHttpDefines');\n\ngoog.require('goog.asserts');\ngoog.require('goog.net.WrapperXmlHttpFactory');\ngoog.require('goog.net.XmlHttpFactory');\n\n\n/**\n * Static class for creating XMLHttpRequest objects.\n * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.\n */\ngoog.net.XmlHttp = function() {\n  return goog.net.XmlHttp.factory_.createInstance();\n};\n\n\n/**\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\n *     true bypasses the ActiveX probing code.\n * NOTE(ruilopes): Due to the way JSCompiler works, this define *will not* strip\n * out the ActiveX probing code from binaries.  To achieve this, use\n * `goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR` instead.\n * TODO(ruilopes): Collapse both defines.\n */\ngoog.define('goog.net.XmlHttp.ASSUME_NATIVE_XHR', false);\n\n\n/** @const */\ngoog.net.XmlHttpDefines = {};\n\n\n/**\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\n *     true eliminates the ActiveX probing code.\n */\ngoog.define('goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR', false);\n\n\n/**\n * Gets the options to use with the XMLHttpRequest objects obtained using\n * the static methods.\n * @return {Object} The options.\n */\ngoog.net.XmlHttp.getOptions = function() {\n  return goog.net.XmlHttp.factory_.getOptions();\n};\n\n\n/**\n * Type of options that an XmlHttp object can have.\n * @enum {number}\n */\ngoog.net.XmlHttp.OptionType = {\n  /**\n   * Whether a goog.nullFunction should be used to clear the onreadystatechange\n   * handler instead of null.\n   */\n  USE_NULL_FUNCTION: 0,\n\n  /**\n   * NOTE(user): In IE if send() errors on a *local* request the readystate\n   * is still changed to COMPLETE.  We need to ignore it and allow the\n   * try/catch around send() to pick up the error.\n   */\n  LOCAL_REQUEST_ERROR: 1\n};\n\n\n/**\n * Status constants for XMLHTTP, matches:\n * https://msdn.microsoft.com/en-us/library/ms534361(v=vs.85).aspx\n * @enum {number}\n */\ngoog.net.XmlHttp.ReadyState = {\n  /**\n   * Constant for when xmlhttprequest.readyState is uninitialized\n   */\n  UNINITIALIZED: 0,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is loading.\n   */\n  LOADING: 1,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is loaded.\n   */\n  LOADED: 2,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is in an interactive state.\n   */\n  INTERACTIVE: 3,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is completed\n   */\n  COMPLETE: 4\n};\n\n\n/**\n * The global factory instance for creating XMLHttpRequest objects.\n * @type {goog.net.XmlHttpFactory}\n * @private\n */\ngoog.net.XmlHttp.factory_;\n\n\n/**\n * Sets the factories for creating XMLHttpRequest objects and their options.\n * @param {Function} factory The factory for XMLHttpRequest objects.\n * @param {Function} optionsFactory The factory for options.\n * @deprecated Use setGlobalFactory instead.\n */\ngoog.net.XmlHttp.setFactory = function(factory, optionsFactory) {\n  goog.net.XmlHttp.setGlobalFactory(\n      new goog.net.WrapperXmlHttpFactory(\n          goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)));\n};\n\n\n/**\n * Sets the global factory object.\n * @param {!goog.net.XmlHttpFactory} factory New global factory object.\n */\ngoog.net.XmlHttp.setGlobalFactory = function(factory) {\n  goog.net.XmlHttp.factory_ = factory;\n};\n\n\n\n/**\n * Default factory to use when creating xhr objects.  You probably shouldn't be\n * instantiating this directly, but rather using it via goog.net.XmlHttp.\n * @extends {goog.net.XmlHttpFactory}\n * @constructor\n */\ngoog.net.DefaultXmlHttpFactory = function() {\n  goog.net.XmlHttpFactory.call(this);\n};\ngoog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);\n\n\n/** @override */\ngoog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {\n  var progId = this.getProgId_();\n  if (progId) {\n    return new ActiveXObject(progId);\n  } else {\n    return new XMLHttpRequest();\n  }\n};\n\n\n/** @override */\ngoog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {\n  var progId = this.getProgId_();\n  var options = {};\n  if (progId) {\n    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;\n    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true;\n  }\n  return options;\n};\n\n\n/**\n * The ActiveX PROG ID string to use to create xhr's in IE. Lazily initialized.\n * @type {string|undefined}\n * @private\n */\ngoog.net.DefaultXmlHttpFactory.prototype.ieProgId_;\n\n\n/**\n * Initialize the private state used by other functions.\n * @return {string} The ActiveX PROG ID string to use to create xhr's in IE.\n * @private\n */\ngoog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {\n  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR ||\n      goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {\n    return '';\n  }\n\n  // The following blog post describes what PROG IDs to use to create the\n  // XMLHTTP object in Internet Explorer:\n  // http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx\n  // However we do not (yet) fully trust that this will be OK for old versions\n  // of IE on Win9x so we therefore keep the last 2.\n  if (!this.ieProgId_ && typeof XMLHttpRequest == 'undefined' &&\n      typeof ActiveXObject != 'undefined') {\n    // Candidate Active X types.\n    var ACTIVE_X_IDENTS = [\n      'MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP',\n      'Microsoft.XMLHTTP'\n    ];\n    for (var i = 0; i < ACTIVE_X_IDENTS.length; i++) {\n      var candidate = ACTIVE_X_IDENTS[i];\n\n      try {\n        new ActiveXObject(candidate);\n        // NOTE(user): cannot assign progid and return candidate in one line\n        // because JSCompiler complaings: BUG 658126\n        this.ieProgId_ = candidate;\n        return candidate;\n      } catch (e) {\n        // do nothing; try next choice\n      }\n    }\n\n    // couldn't find any matches\n    throw new Error(\n        'Could not create ActiveXObject. ActiveX might be disabled,' +\n        ' or MSXML might not be installed');\n  }\n\n  return /** @type {string} */ (this.ieProgId_);\n};\n\n\n// Set the global factory to an instance of the default factory.\ngoog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory());\n","~:compiled-at",1591761498507,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.xmlhttp.js\",\n\"lineCount\":91,\n\"mappings\":\"AAoBAA,IAAAC,QAAA,CAAa,gCAAb,CAAA;AACAD,IAAAC,QAAA,CAAa,kBAAb,CAAA;AACAD,IAAAC,QAAA,CAAa,6BAAb,CAAA;AACAD,IAAAC,QAAA,CAAa,6BAAb,CAAA;AACAD,IAAAC,QAAA,CAAa,yBAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,cAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,gCAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,yBAAb,CAAA;AAOA;;;AAAAF,IAAAG,IAAAC,QAAA,GAAmBC,QAAQ,EAAG;AAC5B,SAAOL,IAAAG,IAAAC,QAAAE,SAAAC,eAAA,EAAP;AAD4B,CAA9B;AAaA,yBAAAP,IAAAQ,OAAA,CAAY,oCAAZ,EAAkD,KAAlD,CAAA;AAIA,cAAAR,IAAAG,IAAAM,eAAA,GAA0B,EAA1B;AAOA,yBAAAT,IAAAQ,OAAA,CAAY,2CAAZ,EAAyD,KAAzD,CAAA;AAQA;;;AAAAR,IAAAG,IAAAC,QAAAM,WAAA,GAA8BC,QAAQ,EAAG;AACvC,SAAOX,IAAAG,IAAAC,QAAAE,SAAAI,WAAA,EAAP;AADuC,CAAzC;AASA,sBAAAV,IAAAG,IAAAC,QAAAQ,WAAA,GAA8B,CAK5BC,kBAAmB,CALS,EAY5BC,oBAAqB,CAZO,CAA9B;AAqBA,sBAAAd,IAAAG,IAAAC,QAAAW,WAAA,GAA8B,CAI5BC,cAAe,CAJa,EAS5BC,QAAS,CATmB,EAc5BC,OAAQ,CAdoB,EAmB5BC,YAAa,CAnBe,EAwB5BC,SAAU,CAxBkB,CAA9B;AAiCA,gDAAApB,IAAAG,IAAAC,QAAAE,SAAA;AASA;;;;;AAAAN,IAAAG,IAAAC,QAAAiB,WAAA,GAA8BC,QAAQ,CAACC,OAAD,EAAUC,cAAV,CAA0B;AAC9DxB,MAAAG,IAAAC,QAAAqB,iBAAA,CACI,IAAIzB,IAAAG,IAAAuB,sBAAJ,CACI1B,IAAA2B,QAAAC,OAAA,CAAoBL,OAApB,CADJ,EACkCvB,IAAA2B,QAAAC,OAAA,CAAoBJ,cAApB,CADlC,CADJ,CAAA;AAD8D,CAAhE;AAWA;;;AAAAxB,IAAAG,IAAAC,QAAAqB,iBAAA,GAAoCI,QAAQ,CAACN,OAAD,CAAU;AACpDvB,MAAAG,IAAAC,QAAAE,SAAA,GAA4BiB,OAA5B;AADoD,CAAtD;AAYA;;;;AAAAvB,IAAAG,IAAA2B,sBAAA,GAAiCC,QAAQ,EAAG;AAC1C/B,MAAAG,IAAA6B,eAAAC,KAAA,CAA6B,IAA7B,CAAA;AAD0C,CAA5C;AAGAjC,IAAAkC,SAAA,CAAclC,IAAAG,IAAA2B,sBAAd,EAA8C9B,IAAAG,IAAA6B,eAA9C,CAAA;AAIA,iBAAAhC,IAAAG,IAAA2B,sBAAAK,UAAA5B,eAAA,GAA0D6B,QAAQ,EAAG;AACnE,MAAIC,SAAS,IAAAC,WAAA,EAAb;AACA,MAAID,MAAJ;AACE,WAAO,IAAIE,aAAJ,CAAkBF,MAAlB,CAAP;AADF;AAGE,WAAO,IAAIG,cAAX;AAHF;AAFmE,CAArE;AAWA,iBAAAxC,IAAAG,IAAA2B,sBAAAK,UAAAM,mBAAA,GAA8DC,QAAQ,EAAG;AACvE,MAAIL,SAAS,IAAAC,WAAA,EAAb;AACA,MAAIK,UAAU,EAAd;AACA,MAAIN,MAAJ,CAAY;AACVM,WAAA,CAAQ3C,IAAAG,IAAAC,QAAAQ,WAAAC,kBAAR,CAAA,GAAyD,IAAzD;AACA8B,WAAA,CAAQ3C,IAAAG,IAAAC,QAAAQ,WAAAE,oBAAR,CAAA,GAA2D,IAA3D;AAFU;AAIZ,SAAO6B,OAAP;AAPuE,CAAzE;AAgBA,2CAAA3C,IAAAG,IAAA2B,sBAAAK,UAAAS,UAAA;AAQA;;;;AAAA5C,IAAAG,IAAA2B,sBAAAK,UAAAG,WAAA,GAAsDO,QAAQ,EAAG;AAC/D,MAAI7C,IAAAG,IAAAC,QAAA0C,kBAAJ,IACI9C,IAAAG,IAAAM,eAAAqC,kBADJ;AAEE,WAAO,EAAP;AAFF;AAUA,MAAI,CAAC,IAAAF,UAAL,IAAuB,MAAOJ,eAA9B,IAAgD,WAAhD,IACI,MAAOD,cADX,IAC4B,WAD5B,CACyC;AAEvC,QAAIQ,kBAAkB,CACpB,oBADoB,EACE,oBADF,EACwB,gBADxB,EAEpB,mBAFoB,CAAtB;AAIA,SAAK,IAAIC,IAAI,CAAb,EAAgBA,CAAhB,GAAoBD,eAAAE,OAApB,EAA4CD,CAAA,EAA5C,CAAiD;AAC/C,UAAIE,YAAYH,eAAA,CAAgBC,CAAhB,CAAhB;AAEA,SAAI;AACF,YAAIT,aAAJ,CAAkBW,SAAlB,CAAA;AAGA,YAAAN,UAAA,GAAiBM,SAAjB;AACA,eAAOA,SAAP;AALE,OAMF,QAAOC,CAAP,CAAU;;AATmC;AAejD,UAAM,IAAIC,KAAJ,CACF,4DADE,GAEF,kCAFE,CAAN;AArBuC;AA0BzC,gCAA6B,CAAC,IAAAR,UAAD,CAA7B;AAtC+D,CAAjE;AA2CA5C,IAAAG,IAAAC,QAAAqB,iBAAA,CAAkC,IAAIzB,IAAAG,IAAA2B,sBAAtC,CAAA;;\",\n\"sources\":[\"goog/net/xmlhttp.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Low level handling of XMLHttpRequest.\\n * @author arv@google.com (Erik Arvidsson)\\n * @author dbk@google.com (David Barrett-Kahn)\\n */\\n\\ngoog.provide('goog.net.DefaultXmlHttpFactory');\\ngoog.provide('goog.net.XmlHttp');\\ngoog.provide('goog.net.XmlHttp.OptionType');\\ngoog.provide('goog.net.XmlHttp.ReadyState');\\ngoog.provide('goog.net.XmlHttpDefines');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.net.WrapperXmlHttpFactory');\\ngoog.require('goog.net.XmlHttpFactory');\\n\\n\\n/**\\n * Static class for creating XMLHttpRequest objects.\\n * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.\\n */\\ngoog.net.XmlHttp = function() {\\n  return goog.net.XmlHttp.factory_.createInstance();\\n};\\n\\n\\n/**\\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\\n *     true bypasses the ActiveX probing code.\\n * NOTE(ruilopes): Due to the way JSCompiler works, this define *will not* strip\\n * out the ActiveX probing code from binaries.  To achieve this, use\\n * `goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR` instead.\\n * TODO(ruilopes): Collapse both defines.\\n */\\ngoog.define('goog.net.XmlHttp.ASSUME_NATIVE_XHR', false);\\n\\n\\n/** @const */\\ngoog.net.XmlHttpDefines = {};\\n\\n\\n/**\\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\\n *     true eliminates the ActiveX probing code.\\n */\\ngoog.define('goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR', false);\\n\\n\\n/**\\n * Gets the options to use with the XMLHttpRequest objects obtained using\\n * the static methods.\\n * @return {Object} The options.\\n */\\ngoog.net.XmlHttp.getOptions = function() {\\n  return goog.net.XmlHttp.factory_.getOptions();\\n};\\n\\n\\n/**\\n * Type of options that an XmlHttp object can have.\\n * @enum {number}\\n */\\ngoog.net.XmlHttp.OptionType = {\\n  /**\\n   * Whether a goog.nullFunction should be used to clear the onreadystatechange\\n   * handler instead of null.\\n   */\\n  USE_NULL_FUNCTION: 0,\\n\\n  /**\\n   * NOTE(user): In IE if send() errors on a *local* request the readystate\\n   * is still changed to COMPLETE.  We need to ignore it and allow the\\n   * try/catch around send() to pick up the error.\\n   */\\n  LOCAL_REQUEST_ERROR: 1\\n};\\n\\n\\n/**\\n * Status constants for XMLHTTP, matches:\\n * https://msdn.microsoft.com/en-us/library/ms534361(v=vs.85).aspx\\n * @enum {number}\\n */\\ngoog.net.XmlHttp.ReadyState = {\\n  /**\\n   * Constant for when xmlhttprequest.readyState is uninitialized\\n   */\\n  UNINITIALIZED: 0,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is loading.\\n   */\\n  LOADING: 1,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is loaded.\\n   */\\n  LOADED: 2,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is in an interactive state.\\n   */\\n  INTERACTIVE: 3,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is completed\\n   */\\n  COMPLETE: 4\\n};\\n\\n\\n/**\\n * The global factory instance for creating XMLHttpRequest objects.\\n * @type {goog.net.XmlHttpFactory}\\n * @private\\n */\\ngoog.net.XmlHttp.factory_;\\n\\n\\n/**\\n * Sets the factories for creating XMLHttpRequest objects and their options.\\n * @param {Function} factory The factory for XMLHttpRequest objects.\\n * @param {Function} optionsFactory The factory for options.\\n * @deprecated Use setGlobalFactory instead.\\n */\\ngoog.net.XmlHttp.setFactory = function(factory, optionsFactory) {\\n  goog.net.XmlHttp.setGlobalFactory(\\n      new goog.net.WrapperXmlHttpFactory(\\n          goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)));\\n};\\n\\n\\n/**\\n * Sets the global factory object.\\n * @param {!goog.net.XmlHttpFactory} factory New global factory object.\\n */\\ngoog.net.XmlHttp.setGlobalFactory = function(factory) {\\n  goog.net.XmlHttp.factory_ = factory;\\n};\\n\\n\\n\\n/**\\n * Default factory to use when creating xhr objects.  You probably shouldn't be\\n * instantiating this directly, but rather using it via goog.net.XmlHttp.\\n * @extends {goog.net.XmlHttpFactory}\\n * @constructor\\n */\\ngoog.net.DefaultXmlHttpFactory = function() {\\n  goog.net.XmlHttpFactory.call(this);\\n};\\ngoog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);\\n\\n\\n/** @override */\\ngoog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {\\n  var progId = this.getProgId_();\\n  if (progId) {\\n    return new ActiveXObject(progId);\\n  } else {\\n    return new XMLHttpRequest();\\n  }\\n};\\n\\n\\n/** @override */\\ngoog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {\\n  var progId = this.getProgId_();\\n  var options = {};\\n  if (progId) {\\n    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;\\n    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true;\\n  }\\n  return options;\\n};\\n\\n\\n/**\\n * The ActiveX PROG ID string to use to create xhr's in IE. Lazily initialized.\\n * @type {string|undefined}\\n * @private\\n */\\ngoog.net.DefaultXmlHttpFactory.prototype.ieProgId_;\\n\\n\\n/**\\n * Initialize the private state used by other functions.\\n * @return {string} The ActiveX PROG ID string to use to create xhr's in IE.\\n * @private\\n */\\ngoog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {\\n  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR ||\\n      goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {\\n    return '';\\n  }\\n\\n  // The following blog post describes what PROG IDs to use to create the\\n  // XMLHTTP object in Internet Explorer:\\n  // http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx\\n  // However we do not (yet) fully trust that this will be OK for old versions\\n  // of IE on Win9x so we therefore keep the last 2.\\n  if (!this.ieProgId_ && typeof XMLHttpRequest == 'undefined' &&\\n      typeof ActiveXObject != 'undefined') {\\n    // Candidate Active X types.\\n    var ACTIVE_X_IDENTS = [\\n      'MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP',\\n      'Microsoft.XMLHTTP'\\n    ];\\n    for (var i = 0; i < ACTIVE_X_IDENTS.length; i++) {\\n      var candidate = ACTIVE_X_IDENTS[i];\\n\\n      try {\\n        new ActiveXObject(candidate);\\n        // NOTE(user): cannot assign progid and return candidate in one line\\n        // because JSCompiler complaings: BUG 658126\\n        this.ieProgId_ = candidate;\\n        return candidate;\\n      } catch (e) {\\n        // do nothing; try next choice\\n      }\\n    }\\n\\n    // couldn't find any matches\\n    throw new Error(\\n        'Could not create ActiveXObject. ActiveX might be disabled,' +\\n        ' or MSXML might not be installed');\\n  }\\n\\n  return /** @type {string} */ (this.ieProgId_);\\n};\\n\\n\\n// Set the global factory to an instance of the default factory.\\ngoog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory());\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"net\",\"XmlHttp\",\"goog.net.XmlHttp\",\"factory_\",\"createInstance\",\"define\",\"XmlHttpDefines\",\"getOptions\",\"goog.net.XmlHttp.getOptions\",\"OptionType\",\"USE_NULL_FUNCTION\",\"LOCAL_REQUEST_ERROR\",\"ReadyState\",\"UNINITIALIZED\",\"LOADING\",\"LOADED\",\"INTERACTIVE\",\"COMPLETE\",\"setFactory\",\"goog.net.XmlHttp.setFactory\",\"factory\",\"optionsFactory\",\"setGlobalFactory\",\"WrapperXmlHttpFactory\",\"asserts\",\"assert\",\"goog.net.XmlHttp.setGlobalFactory\",\"DefaultXmlHttpFactory\",\"goog.net.DefaultXmlHttpFactory\",\"XmlHttpFactory\",\"call\",\"inherits\",\"prototype\",\"goog.net.DefaultXmlHttpFactory.prototype.createInstance\",\"progId\",\"getProgId_\",\"ActiveXObject\",\"XMLHttpRequest\",\"internalGetOptions\",\"goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions\",\"options\",\"ieProgId_\",\"goog.net.DefaultXmlHttpFactory.prototype.getProgId_\",\"ASSUME_NATIVE_XHR\",\"ACTIVE_X_IDENTS\",\"i\",\"length\",\"candidate\",\"e\",\"Error\"]\n}\n"]