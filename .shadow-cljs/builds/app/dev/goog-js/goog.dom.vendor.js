["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/vendor.js"],"~:js","goog.provide(\"goog.dom.vendor\");\ngoog.require(\"goog.string\");\ngoog.require(\"goog.userAgent\");\n/**\n * @return {?string}\n */\ngoog.dom.vendor.getVendorJsPrefix = function() {\n  if (goog.userAgent.WEBKIT) {\n    return \"Webkit\";\n  } else {\n    if (goog.userAgent.GECKO) {\n      return \"Moz\";\n    } else {\n      if (goog.userAgent.IE) {\n        return \"ms\";\n      } else {\n        if (goog.userAgent.OPERA) {\n          return \"O\";\n        }\n      }\n    }\n  }\n  return null;\n};\n/**\n * @return {?string}\n */\ngoog.dom.vendor.getVendorPrefix = function() {\n  if (goog.userAgent.WEBKIT) {\n    return \"-webkit\";\n  } else {\n    if (goog.userAgent.GECKO) {\n      return \"-moz\";\n    } else {\n      if (goog.userAgent.IE) {\n        return \"-ms\";\n      } else {\n        if (goog.userAgent.OPERA) {\n          return \"-o\";\n        }\n      }\n    }\n  }\n  return null;\n};\n/**\n * @param {string} propertyName\n * @param {!Object=} opt_object\n * @return {?string}\n */\ngoog.dom.vendor.getPrefixedPropertyName = function(propertyName, opt_object) {\n  if (opt_object && propertyName in opt_object) {\n    return propertyName;\n  }\n  var prefix = goog.dom.vendor.getVendorJsPrefix();\n  if (prefix) {\n    prefix = prefix.toLowerCase();\n    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);\n    return !goog.isDef(opt_object) || prefixedPropertyName in opt_object ? prefixedPropertyName : null;\n  }\n  return null;\n};\n/**\n * @param {string} eventType\n * @return {string}\n */\ngoog.dom.vendor.getPrefixedEventType = function(eventType) {\n  var prefix = goog.dom.vendor.getVendorJsPrefix() || \"\";\n  return (prefix + eventType).toLowerCase();\n};\n","~:source","// Copyright 2012 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Vendor prefix getters.\n */\n\ngoog.provide('goog.dom.vendor');\n\ngoog.require('goog.string');\ngoog.require('goog.userAgent');\n\n\n/**\n * Returns the JS vendor prefix used in CSS properties. Different vendors\n * use different methods of changing the case of the property names.\n *\n * @return {?string} The JS vendor prefix or null if there is none.\n */\ngoog.dom.vendor.getVendorJsPrefix = function() {\n  if (goog.userAgent.WEBKIT) {\n    return 'Webkit';\n  } else if (goog.userAgent.GECKO) {\n    return 'Moz';\n  } else if (goog.userAgent.IE) {\n    return 'ms';\n  } else if (goog.userAgent.OPERA) {\n    return 'O';\n  }\n\n  return null;\n};\n\n\n/**\n * Returns the vendor prefix used in CSS properties.\n *\n * @return {?string} The vendor prefix or null if there is none.\n */\ngoog.dom.vendor.getVendorPrefix = function() {\n  if (goog.userAgent.WEBKIT) {\n    return '-webkit';\n  } else if (goog.userAgent.GECKO) {\n    return '-moz';\n  } else if (goog.userAgent.IE) {\n    return '-ms';\n  } else if (goog.userAgent.OPERA) {\n    return '-o';\n  }\n\n  return null;\n};\n\n\n/**\n * @param {string} propertyName A property name.\n * @param {!Object=} opt_object If provided, we verify if the property exists in\n *     the object.\n * @return {?string} A vendor prefixed property name, or null if it does not\n *     exist.\n */\ngoog.dom.vendor.getPrefixedPropertyName = function(propertyName, opt_object) {\n  // We first check for a non-prefixed property, if available.\n  if (opt_object && propertyName in opt_object) {\n    return propertyName;\n  }\n  var prefix = goog.dom.vendor.getVendorJsPrefix();\n  if (prefix) {\n    prefix = prefix.toLowerCase();\n    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);\n    return (!goog.isDef(opt_object) || prefixedPropertyName in opt_object) ?\n        prefixedPropertyName :\n        null;\n  }\n  return null;\n};\n\n\n/**\n * @param {string} eventType An event type.\n * @return {string} A lower-cased vendor prefixed event type.\n */\ngoog.dom.vendor.getPrefixedEventType = function(eventType) {\n  var prefix = goog.dom.vendor.getVendorJsPrefix() || '';\n  return (prefix + eventType).toLowerCase();\n};\n","~:compiled-at",1568955483150,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.vendor.js\",\n\"lineCount\":71,\n\"mappings\":\"AAkBAA,IAAAC,QAAA,CAAa,iBAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,aAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,gBAAb,CAAA;AASA;;;AAAAF,IAAAG,IAAAC,OAAAC,kBAAA,GAAoCC,QAAQ,EAAG;AAC7C,MAAIN,IAAAO,UAAAC,OAAJ;AACE,WAAO,QAAP;AADF;AAEO,QAAIR,IAAAO,UAAAE,MAAJ;AACL,aAAO,KAAP;AADK;AAEA,UAAIT,IAAAO,UAAAG,GAAJ;AACL,eAAO,IAAP;AADK;AAEA,YAAIV,IAAAO,UAAAI,MAAJ;AACL,iBAAO,GAAP;AADK;AAFA;AAFA;AAFP;AAUA,SAAO,IAAP;AAX6C,CAA/C;AAoBA;;;AAAAX,IAAAG,IAAAC,OAAAQ,gBAAA,GAAkCC,QAAQ,EAAG;AAC3C,MAAIb,IAAAO,UAAAC,OAAJ;AACE,WAAO,SAAP;AADF;AAEO,QAAIR,IAAAO,UAAAE,MAAJ;AACL,aAAO,MAAP;AADK;AAEA,UAAIT,IAAAO,UAAAG,GAAJ;AACL,eAAO,KAAP;AADK;AAEA,YAAIV,IAAAO,UAAAI,MAAJ;AACL,iBAAO,IAAP;AADK;AAFA;AAFA;AAFP;AAUA,SAAO,IAAP;AAX2C,CAA7C;AAsBA;;;;;AAAAX,IAAAG,IAAAC,OAAAU,wBAAA,GAA0CC,QAAQ,CAACC,YAAD,EAAeC,UAAf,CAA2B;AAE3E,MAAIA,UAAJ,IAAkBD,YAAlB,IAAkCC,UAAlC;AACE,WAAOD,YAAP;AADF;AAGA,MAAIE,SAASlB,IAAAG,IAAAC,OAAAC,kBAAA,EAAb;AACA,MAAIa,MAAJ,CAAY;AACVA,UAAA,GAASA,MAAAC,YAAA,EAAT;AACA,QAAIC,uBAAuBF,MAAvBE,GAAgCpB,IAAAqB,OAAAC,YAAA,CAAwBN,YAAxB,CAApC;AACA,WAAQ,CAAChB,IAAAuB,MAAA,CAAWN,UAAX,CAAF,IAA4BG,oBAA5B,IAAoDH,UAApD,GACHG,oBADG,GAEH,IAFJ;AAHU;AAOZ,SAAO,IAAP;AAb2E,CAA7E;AAqBA;;;;AAAApB,IAAAG,IAAAC,OAAAoB,qBAAA,GAAuCC,QAAQ,CAACC,SAAD,CAAY;AACzD,MAAIR,SAASlB,IAAAG,IAAAC,OAAAC,kBAAA,EAATa,IAAgD,EAApD;AACA,SAAOC,CAACD,MAADC,GAAUO,SAAVP,aAAA,EAAP;AAFyD,CAA3D;;\",\n\"sources\":[\"goog/dom/vendor.js\"],\n\"sourcesContent\":[\"// Copyright 2012 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Vendor prefix getters.\\n */\\n\\ngoog.provide('goog.dom.vendor');\\n\\ngoog.require('goog.string');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * Returns the JS vendor prefix used in CSS properties. Different vendors\\n * use different methods of changing the case of the property names.\\n *\\n * @return {?string} The JS vendor prefix or null if there is none.\\n */\\ngoog.dom.vendor.getVendorJsPrefix = function() {\\n  if (goog.userAgent.WEBKIT) {\\n    return 'Webkit';\\n  } else if (goog.userAgent.GECKO) {\\n    return 'Moz';\\n  } else if (goog.userAgent.IE) {\\n    return 'ms';\\n  } else if (goog.userAgent.OPERA) {\\n    return 'O';\\n  }\\n\\n  return null;\\n};\\n\\n\\n/**\\n * Returns the vendor prefix used in CSS properties.\\n *\\n * @return {?string} The vendor prefix or null if there is none.\\n */\\ngoog.dom.vendor.getVendorPrefix = function() {\\n  if (goog.userAgent.WEBKIT) {\\n    return '-webkit';\\n  } else if (goog.userAgent.GECKO) {\\n    return '-moz';\\n  } else if (goog.userAgent.IE) {\\n    return '-ms';\\n  } else if (goog.userAgent.OPERA) {\\n    return '-o';\\n  }\\n\\n  return null;\\n};\\n\\n\\n/**\\n * @param {string} propertyName A property name.\\n * @param {!Object=} opt_object If provided, we verify if the property exists in\\n *     the object.\\n * @return {?string} A vendor prefixed property name, or null if it does not\\n *     exist.\\n */\\ngoog.dom.vendor.getPrefixedPropertyName = function(propertyName, opt_object) {\\n  // We first check for a non-prefixed property, if available.\\n  if (opt_object && propertyName in opt_object) {\\n    return propertyName;\\n  }\\n  var prefix = goog.dom.vendor.getVendorJsPrefix();\\n  if (prefix) {\\n    prefix = prefix.toLowerCase();\\n    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);\\n    return (!goog.isDef(opt_object) || prefixedPropertyName in opt_object) ?\\n        prefixedPropertyName :\\n        null;\\n  }\\n  return null;\\n};\\n\\n\\n/**\\n * @param {string} eventType An event type.\\n * @return {string} A lower-cased vendor prefixed event type.\\n */\\ngoog.dom.vendor.getPrefixedEventType = function(eventType) {\\n  var prefix = goog.dom.vendor.getVendorJsPrefix() || '';\\n  return (prefix + eventType).toLowerCase();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"vendor\",\"getVendorJsPrefix\",\"goog.dom.vendor.getVendorJsPrefix\",\"userAgent\",\"WEBKIT\",\"GECKO\",\"IE\",\"OPERA\",\"getVendorPrefix\",\"goog.dom.vendor.getVendorPrefix\",\"getPrefixedPropertyName\",\"goog.dom.vendor.getPrefixedPropertyName\",\"propertyName\",\"opt_object\",\"prefix\",\"toLowerCase\",\"prefixedPropertyName\",\"string\",\"toTitleCase\",\"isDef\",\"getPrefixedEventType\",\"goog.dom.vendor.getPrefixedEventType\",\"eventType\"]\n}\n"]