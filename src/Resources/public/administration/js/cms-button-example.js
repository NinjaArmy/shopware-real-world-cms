!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/bundles/cmsbuttonexample/",n(n.s="oGE/")}({"3NLb":function(t,e){t.exports='{% block sw_cms_block_button %}\n\t<div class="sw-cms-block-button">\n\t\t<slot name="button"></slot>\n\t</div>\n{% endblock %}\n'},"D/ST":function(t,e,n){},L3p9:function(t,e){t.exports='{% block sw_cms_element_ninja_button_preview %}\n\t<div class="ninja-button-preview">\n\t\t<button class="ninja-btn">Button</button>\n\t</div>\n{% endblock %}'},McKC:function(t,e){t.exports='{% block sw_cms_element_ninja_cms_button %}\n\t<div class="sw-cms-el-ninja-cms-button" v-model="element.config.buttonAlign.value" :style="buttonAlignStyle">\n\t\t<a href="{{element.config.url.value}}" target="_blank" v-model="element.config.title.value" @input="onInputText">\n\t\t\t<button class="sw-el-ninja-btn" :style="buttonStyles">{{element.config.title.value}}</button>\n\t\t</a>\n\t</div>\n{% endblock %}'},NQko:function(t,e,n){var o=n("fXrf");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("70da80f1",o,!0,{})},QJcI:function(t,e,n){var o=n("D/ST");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("7a27b71c",o,!0,{})},SZ7m:function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},s=0;s<e.length;s++){var l=e[s],c=l[0],i={id:t+":"+s,css:l[1],media:l[2],sourceMap:l[3]};o[c]?o[c].parts.push(i):n.push(o[c]={id:c,parts:[i]})}return n}n.r(e),n.d(e,"default",(function(){return p}));var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},c=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,a=0,r=!1,u=function(){},m=null,f="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,s){r=n,m=s||{};var c=o(t,e);return d(c),function(e){for(var n=[],s=0;s<c.length;s++){var i=c[s];(a=l[i.id]).refs--,n.push(a)}e?d(c=o(t,e)):c=[];for(s=0;s<n.length;s++){var a;if(0===(a=n[s]).refs){for(var r=0;r<a.parts.length;r++)a.parts[r]();delete l[a.id]}}}}function d(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(v(n.parts[s]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var c=[];for(s=0;s<n.parts.length;s++)c.push(v(n.parts[s]));l[n.id]={id:n.id,refs:1,parts:c}}}}function g(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function v(t){var e,n,o=document.querySelector("style["+f+'~="'+t.id+'"]');if(o){if(r)return u;o.parentNode.removeChild(o)}if(b){var s=a++;o=i||(i=g()),e=_.bind(null,o,s,!1),n=_.bind(null,o,s,!0)}else o=g(),e=x.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var h,w=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function _(t,e,n,o){var s=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var l=document.createTextNode(s),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(l,c[e]):t.appendChild(l)}}function x(t,e){var n=e.css,o=e.media,s=e.sourceMap;if(o&&t.setAttribute("media",o),m.ssrId&&t.setAttribute(f,e.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},YuBN:function(t,e,n){},Zrph:function(t,e){t.exports='{% block sw_cms_block_ninja_button_preview %}\n\t<div class="ninja-button-flex-center">\n\t\t<button class="sw-cms-preview-ninja-button">Button</button>\n\t</div>\n{% endblock %}\n'},fXrf:function(t,e,n){},mA7d:function(t,e){t.exports='{% block sw_cms_el_ninja_cms_button %}\n\t<sw-tabs class="sw-cms-el-config-ninja-cms-button__tabs" defaultItem="content">\n\n\t\t<template slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_config_ninja_button_tab_content %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.content\')" name="content" :activetab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t\t{% block sw_cms_el_ninja_button_config_tab_options %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.settings\')" name="settings" :activetab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t</template>\n\n\t\t<template slot="content" slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_ninja_cms_button_config_content %}\n\t\t\t\t<sw-container v-if="active === \'content\'" class="sw-cms-el-config-ninja-button__tab-content">\n\t\t\t\t\t<sw-text-field :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonText\')" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.buttonText\')" v-model="element.config.title.value" @element-update="onElementUpdate" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonText\')"></sw-text-field>\n\t\t\t\t\t<sw-colorpicker v-model="element.config.textColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonTextColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonTextColor\')"></sw-colorpicker>\n\n\t\t\t\t\t<sw-field v-model="element.config.url.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonUrl\')" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.buttonUrl\')" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonUrl\')"></sw-field>\n\t\t\t\t\t<sw-field v-model="element.config.newTab.value" type="switch" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.newTab\')"></sw-field>\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\n\t\t\t{% block sw_cms_el_ninja_button_config_settings %}\n\t\t\t\t<sw-container v-if="active === \'settings\'" class="sw-cms-el-config-ninja-button__tab-settings">\n\t\t\t\t\t{% block sw_cms_el_cms_ninja_button_config_settings_horizontal_align %}\n\t\t\t\t\t\t<sw-select-field :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.hAlignment\')" v-model="element.config.buttonAlign.value" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.hAlignment\')">\n\t\t\t\t\t\t\t<option value="flex-start">left</option>\n\t\t\t\t\t\t\t<option value="center">center</option>\n\t\t\t\t\t\t\t<option value="flex-end">right</option>\n\t\t\t\t\t\t</sw-select-field>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.buttonColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonColor\')"></sw-colorpicker>\n\t\t\t\t\t\t<sw-field v-model="element.config.buttonWidth.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.width\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.width\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t<sw-field v-model="element.config.buttonHeight.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.height\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.height\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t\n\t\t\t\t\t{% endblock %}\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\t\t</template>\n\t</sw-tabs>\n{% endblock %}\n'},mx2x:function(t,e,n){var o=n("YuBN");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("62e6b73e",o,!0,{})},"oGE/":function(t,e,n){"use strict";n.r(e);var o=n("3NLb"),s=n.n(o);Shopware.Component.register("sw-cms-button",{template:s.a});var l=n("Zrph"),c=n.n(l);n("mx2x");Shopware.Component.register("sw-cms-preview-button",{template:c.a}),Shopware.Service("cmsService").registerCmsBlock({name:"cms-button",label:"sw-cms.blocks.text.ninja-cms-button.label",category:"text",component:"sw-cms-block-button",previewComponent:"sw-cms-preview-button",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{button:"cms-button"}});var i=n("McKC"),a=n.n(i),r=(n("NQko"),Shopware),u=r.Component,m=r.Mixin;u.register("sw-cms-el-cms-button",{template:a.a,inject:["repositoryFactory"],mixins:[m.getByName("cms-element")],created:function(){this.createdComponent()},computed:{buttonStyles:function(){var t={};return this.element.config.textColor.value&&this.element.config.buttonColor.value&&(t.color="".concat(this.element.config.textColor.value),t.backgroundColor="".concat(this.element.config.buttonColor.value)),this.element.config.buttonWidth.value?t.width="".concat(this.element.config.buttonWidth.value,"px"):t.width="auto",this.element.config.buttonHeight.value?t.height="".concat(this.element.config.buttonHeight.value,"px"):t.height="auto",t},buttonAlignStyle:function(){var t={};return this.element.config.buttonAlign.value&&(t.justifyContent="".concat(this.element.config.buttonAlign.value)),t}},methods:{createdComponent:function(){this.initElementConfig("cms-button"),this.initElementData("cms-button")},onInputText:function(t){this.emitChanges(t)}}});var f=n("mA7d"),b=n.n(f),p=Shopware,d=p.Component,g=p.Mixin;d.register("sw-cms-el-config-cms-button",{template:b.a,inject:["repositoryFactory"],mixins:[g.getByName("cms-element")],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("cms-button")},onElementUpdate:function(t){this.$emit("element-update",t)},onInputText:function(t){this.emitChanges(t)}}});var v=n("L3p9"),h=n.n(v);n("QJcI");Shopware.Component.register("sw-cms-el-preview-cms-button",{template:h.a}),Shopware.Service("cmsService").registerCmsElement({name:"cms-button",label:"sw-cms.blocks.text.ninja-cms-button.label",component:"sw-cms-el-cms-button",configComponent:"sw-cms-el-config-cms-button",previewComponent:"sw-cms-el-preview-cms-button",defaultConfig:{title:{source:"static",value:"ButtonText"},textColor:{source:"static",value:"#fff"},url:{source:"static",value:""},newTab:{source:"static",value:"true"},buttonAlign:{source:"static",value:"center"},buttonColor:{source:"static",value:"#4492ed"},buttonWidth:{source:"static",value:""},buttonHeight:{source:"static",value:""}}})}});