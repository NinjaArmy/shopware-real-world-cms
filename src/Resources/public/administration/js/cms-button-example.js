!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=(window.__sw__.assetPath + '/bundles/cmsbuttonexample/'),n(n.s="m+yX")}({AjIt:function(t,e,n){},b2Qr:function(t,e,n){},bMOk:function(t,e,n){},i3pn:function(t,e,n){var o=n("bMOk");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("ydqr").default)("632bdddb",o,!0,{})},"m+yX":function(t,e,n){"use strict";n.r(e);Shopware.Component.register("sw-cms-block-button",{template:'{% block sw_cms_block_button %}\n\t<div class="sw-cms-block-button">\n\t\t<slot name="button"></slot>\n\t</div>\n{% endblock %}\n'});n("sK3A");Shopware.Component.register("sw-cms-preview-button",{template:'{% block sw_cms_block_ninja_button_preview %}\n\t<div class="ninja-button-flex-center">\n\t\t<button class="sw-cms-preview-ninja-button">Button</button>\n\t</div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsBlock({name:"button",label:"sw-cms.blocks.text.ninja-cms-button.label",category:"ninja",component:"sw-cms-block-button",previewComponent:"sw-cms-preview-button",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{button:"cms-button"}});n("i3pn");var o=Shopware,s=o.Component,l=o.Mixin;s.register("sw-cms-el-cms-button",{template:'{% block sw_cms_element_ninja_cms_button %}\n\t<div class="sw-cms-el-ninja-cms-button" v-model="element.config.buttonAlign.value" :style="buttonAlignStyle">\n\t\t<a href="{{element.config.url.value}}" target="_blank" v-model="element.config.title.value" @input="onInputText">\n\t\t\t<button class="sw-el-ninja-btn" :style="buttonStyles">{{element.config.title.value}}</button>\n\t\t</a>\n\t</div>\n{% endblock %}',inject:["repositoryFactory"],mixins:[l.getByName("cms-element")],created:function(){this.createdComponent()},computed:{buttonStyles:function(){var t={};return this.element.config.textColor.value&&this.element.config.buttonColor.value&&(t.color="".concat(this.element.config.textColor.value),t.backgroundColor="".concat(this.element.config.buttonColor.value)),this.element.config.buttonWidth.value?t.width="".concat(this.element.config.buttonWidth.value,"px"):t.width="auto",this.element.config.buttonHeight.value?t.height="".concat(this.element.config.buttonHeight.value,"px"):t.height="auto",t},buttonAlignStyle:function(){var t={};return this.element.config.buttonAlign.value&&(t.justifyContent="".concat(this.element.config.buttonAlign.value)),t}},methods:{createdComponent:function(){this.initElementConfig("cms-button"),this.initElementData("cms-button")},onInputText:function(t){this.emitChanges(t)}}});var i=Shopware,c=i.Component,a=i.Mixin;c.register("sw-cms-el-config-cms-button",{template:'{% block sw_cms_el_ninja_cms_button %}\n\t<sw-tabs class="sw-cms-el-config-ninja-cms-button__tabs" defaultItem="content">\n\n\t\t<template slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_config_ninja_button_tab_content %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.content\')" name="content" :activetab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t\t{% block sw_cms_el_ninja_button_config_tab_options %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.settings\')" name="settings" :activetab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t</template>\n\n\t\t<template slot="content" slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_ninja_cms_button_config_content %}\n\t\t\t\t<sw-container v-if="active === \'content\'" class="sw-cms-el-config-ninja-button__tab-content">\n\t\t\t\t\t<sw-text-field :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonText\')" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.buttonText\')" v-model="element.config.title.value" @element-update="onElementUpdate" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonText\')"></sw-text-field>\n\t\t\t\t\t<sw-colorpicker v-model="element.config.textColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonTextColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonTextColor\')"></sw-colorpicker>\n\n\t\t\t\t\t<sw-field v-model="element.config.url.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonUrl\')" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.buttonUrl\')" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonUrl\')"></sw-field>\n\t\t\t\t\t<sw-field v-model="element.config.newTab.value" type="switch" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.newTab\')"></sw-field>\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\n\t\t\t{% block sw_cms_el_ninja_button_config_settings %}\n\t\t\t\t<sw-container v-if="active === \'settings\'" class="sw-cms-el-config-ninja-button__tab-settings">\n\t\t\t\t\t{% block sw_cms_el_cms_ninja_button_config_settings_horizontal_align %}\n\t\t\t\t\t\t<sw-select-field :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.hAlignment\')" v-model="element.config.buttonAlign.value" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.hAlignment\')">\n\t\t\t\t\t\t\t<option value="flex-start">left</option>\n\t\t\t\t\t\t\t<option value="center">center</option>\n\t\t\t\t\t\t\t<option value="flex-end">right</option>\n\t\t\t\t\t\t</sw-select-field>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.buttonColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonColor\')"></sw-colorpicker>\n\t\t\t\t\t\t<sw-field v-model="element.config.buttonWidth.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.width\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.width\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t<sw-field v-model="element.config.buttonHeight.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.height\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.height\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t\n\t\t\t\t\t{% endblock %}\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\t\t</template>\n\t</sw-tabs>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[a.getByName("cms-element")],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("cms-button")},onElementUpdate:function(t){this.$emit("element-update",t)},onInputText:function(t){this.emitChanges(t)}}});n("uYMA");Shopware.Component.register("sw-cms-el-preview-cms-button",{template:'{% block sw_cms_element_ninja_button_preview %}\n\t<div class="ninja-button-preview">\n\t\t<button class="ninja-btn">Button</button>\n\t</div>\n{% endblock %}'}),Shopware.Service("cmsService").registerCmsElement({name:"cms-button",label:"sw-cms.blocks.text.ninja-cms-button.label",component:"sw-cms-el-cms-button",configComponent:"sw-cms-el-config-cms-button",previewComponent:"sw-cms-el-preview-cms-button",removable:!1,hidden:!0,defaultConfig:{title:{source:"static",value:"ButtonText"},textColor:{source:"static",value:"#fff"},url:{source:"static",value:""},newTab:{source:"static",value:"true"},buttonAlign:{source:"static",value:"center"},buttonColor:{source:"static",value:"#4492ed"},buttonWidth:{source:"static",value:""},buttonHeight:{source:"static",value:""}}});Shopware.Component.override("sw-cms-sidebar",{template:'{% block sw_cms_sidebar_block_overview_category_options %}\n    {% parent %}\n    <option value="ninja">Ninja Army Blocks</option>\n{% endblock %}'})},sK3A:function(t,e,n){var o=n("AjIt");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("ydqr").default)("63bb7ee4",o,!0,{})},uYMA:function(t,e,n){var o=n("b2Qr");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("ydqr").default)("cb4b6d48",o,!0,{})},ydqr:function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},s=0;s<e.length;s++){var l=e[s],i=l[0],c={id:t+":"+s,css:l[1],media:l[2],sourceMap:l[3]};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}n.r(e),n.d(e,"default",(function(){return d}));var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},i=s&&(document.head||document.getElementsByTagName("head")[0]),c=null,a=0,r=!1,u=function(){},m=null,b="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,n,s){r=n,m=s||{};var i=o(t,e);return p(i),function(e){for(var n=[],s=0;s<i.length;s++){var c=i[s];(a=l[c.id]).refs--,n.push(a)}e?p(i=o(t,e)):i=[];for(s=0;s<n.length;s++){var a;if(0===(a=n[s]).refs){for(var r=0;r<a.parts.length;r++)a.parts[r]();delete l[a.id]}}}}function p(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(v(n.parts[s]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(s=0;s<n.parts.length;s++)i.push(v(n.parts[s]));l[n.id]={id:n.id,refs:1,parts:i}}}}function g(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function v(t){var e,n,o=document.querySelector("style["+b+'~="'+t.id+'"]');if(o){if(r)return u;o.parentNode.removeChild(o)}if(f){var s=a++;o=c||(c=g()),e=_.bind(null,o,s,!1),n=_.bind(null,o,s,!0)}else o=g(),e=x.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var h,w=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function _(t,e,n,o){var s=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var l=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(l,i[e]):t.appendChild(l)}}function x(t,e){var n=e.css,o=e.media,s=e.sourceMap;if(o&&t.setAttribute("media",o),m.ssrId&&t.setAttribute(b,e.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}});