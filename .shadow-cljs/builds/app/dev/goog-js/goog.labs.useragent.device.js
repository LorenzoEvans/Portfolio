["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/device.js"],"~:js","goog.provide(\"goog.labs.userAgent.device\");\ngoog.require(\"goog.labs.userAgent.util\");\n/**\n * @return {boolean}\n */\ngoog.labs.userAgent.device.isMobile = function() {\n  return !goog.labs.userAgent.device.isTablet() && (goog.labs.userAgent.util.matchUserAgent(\"iPod\") || goog.labs.userAgent.util.matchUserAgent(\"iPhone\") || goog.labs.userAgent.util.matchUserAgent(\"Android\") || goog.labs.userAgent.util.matchUserAgent(\"IEMobile\"));\n};\n/**\n * @return {boolean}\n */\ngoog.labs.userAgent.device.isTablet = function() {\n  return goog.labs.userAgent.util.matchUserAgent(\"iPad\") || goog.labs.userAgent.util.matchUserAgent(\"Android\") && !goog.labs.userAgent.util.matchUserAgent(\"Mobile\") || goog.labs.userAgent.util.matchUserAgent(\"Silk\");\n};\n/**\n * @return {boolean}\n */\ngoog.labs.userAgent.device.isDesktop = function() {\n  return !goog.labs.userAgent.device.isMobile() && !goog.labs.userAgent.device.isTablet();\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Closure user device detection (based on user agent).\n * @see http://en.wikipedia.org/wiki/User_agent\n * For more information on browser brand, platform, or engine see the other\n * sub-namespaces in goog.labs.userAgent (browser, platform, and engine).\n *\n */\n\ngoog.provide('goog.labs.userAgent.device');\n\ngoog.require('goog.labs.userAgent.util');\n\n\n/**\n * Currently we detect the iPhone, iPod and Android mobiles (devices that have\n * both Android and Mobile in the user agent string).\n *\n * @return {boolean} Whether the user is using a mobile device.\n */\ngoog.labs.userAgent.device.isMobile = function() {\n  return !goog.labs.userAgent.device.isTablet() &&\n      (goog.labs.userAgent.util.matchUserAgent('iPod') ||\n       goog.labs.userAgent.util.matchUserAgent('iPhone') ||\n       goog.labs.userAgent.util.matchUserAgent('Android') ||\n       goog.labs.userAgent.util.matchUserAgent('IEMobile'));\n};\n\n\n/**\n * Currently we detect Kindle Fire, iPad, and Android tablets (devices that have\n * Android but not Mobile in the user agent string).\n *\n * @return {boolean} Whether the user is using a tablet.\n */\ngoog.labs.userAgent.device.isTablet = function() {\n  return goog.labs.userAgent.util.matchUserAgent('iPad') ||\n      (goog.labs.userAgent.util.matchUserAgent('Android') &&\n       !goog.labs.userAgent.util.matchUserAgent('Mobile')) ||\n      goog.labs.userAgent.util.matchUserAgent('Silk');\n};\n\n\n/**\n * @return {boolean} Whether the user is using a desktop computer (which we\n *     assume to be the case if they are not using either a mobile or tablet\n *     device).\n */\ngoog.labs.userAgent.device.isDesktop = function() {\n  return !goog.labs.userAgent.device.isMobile() &&\n      !goog.labs.userAgent.device.isTablet();\n};\n","~:compiled-at",1569955955253,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.device.js\",\n\"lineCount\":21,\n\"mappings\":\"AAsBAA,IAAAC,QAAA,CAAa,4BAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,0BAAb,CAAA;AASA;;;AAAAF,IAAAG,KAAAC,UAAAC,OAAAC,SAAA,GAAsCC,QAAQ,EAAG;AAC/C,SAAO,CAACP,IAAAG,KAAAC,UAAAC,OAAAG,SAAA,EAAR,KACKR,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,MAAxC,CADL,IAEKV,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,QAAxC,CAFL,IAGKV,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,SAAxC,CAHL,IAIKV,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,UAAxC,CAJL;AAD+C,CAAjD;AAeA;;;AAAAV,IAAAG,KAAAC,UAAAC,OAAAG,SAAA,GAAsCG,QAAQ,EAAG;AAC/C,SAAOX,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,MAAxC,CAAP,IACKV,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,SAAxC,CADL,IAEK,CAACV,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,QAAxC,CAFN,IAGIV,IAAAG,KAAAC,UAAAK,KAAAC,eAAA,CAAwC,MAAxC,CAHJ;AAD+C,CAAjD;AAaA;;;AAAAV,IAAAG,KAAAC,UAAAC,OAAAO,UAAA,GAAuCC,QAAQ,EAAG;AAChD,SAAO,CAACb,IAAAG,KAAAC,UAAAC,OAAAC,SAAA,EAAR,IACI,CAACN,IAAAG,KAAAC,UAAAC,OAAAG,SAAA,EADL;AADgD,CAAlD;;\",\n\"sources\":[\"goog/labs/useragent/device.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Closure user device detection (based on user agent).\\n * @see http://en.wikipedia.org/wiki/User_agent\\n * For more information on browser brand, platform, or engine see the other\\n * sub-namespaces in goog.labs.userAgent (browser, platform, and engine).\\n *\\n */\\n\\ngoog.provide('goog.labs.userAgent.device');\\n\\ngoog.require('goog.labs.userAgent.util');\\n\\n\\n/**\\n * Currently we detect the iPhone, iPod and Android mobiles (devices that have\\n * both Android and Mobile in the user agent string).\\n *\\n * @return {boolean} Whether the user is using a mobile device.\\n */\\ngoog.labs.userAgent.device.isMobile = function() {\\n  return !goog.labs.userAgent.device.isTablet() &&\\n      (goog.labs.userAgent.util.matchUserAgent('iPod') ||\\n       goog.labs.userAgent.util.matchUserAgent('iPhone') ||\\n       goog.labs.userAgent.util.matchUserAgent('Android') ||\\n       goog.labs.userAgent.util.matchUserAgent('IEMobile'));\\n};\\n\\n\\n/**\\n * Currently we detect Kindle Fire, iPad, and Android tablets (devices that have\\n * Android but not Mobile in the user agent string).\\n *\\n * @return {boolean} Whether the user is using a tablet.\\n */\\ngoog.labs.userAgent.device.isTablet = function() {\\n  return goog.labs.userAgent.util.matchUserAgent('iPad') ||\\n      (goog.labs.userAgent.util.matchUserAgent('Android') &&\\n       !goog.labs.userAgent.util.matchUserAgent('Mobile')) ||\\n      goog.labs.userAgent.util.matchUserAgent('Silk');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the user is using a desktop computer (which we\\n *     assume to be the case if they are not using either a mobile or tablet\\n *     device).\\n */\\ngoog.labs.userAgent.device.isDesktop = function() {\\n  return !goog.labs.userAgent.device.isMobile() &&\\n      !goog.labs.userAgent.device.isTablet();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"labs\",\"userAgent\",\"device\",\"isMobile\",\"goog.labs.userAgent.device.isMobile\",\"isTablet\",\"util\",\"matchUserAgent\",\"goog.labs.userAgent.device.isTablet\",\"isDesktop\",\"goog.labs.userAgent.device.isDesktop\"]\n}\n"]