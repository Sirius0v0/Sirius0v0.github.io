(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{560:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"全局变量与局部变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局变量与局部变量"}},[t._v("#")]),t._v(" 全局变量与局部变量")]),t._v(" "),a("h2",{attrs:{id:"几点要注意的事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几点要注意的事项"}},[t._v("#")]),t._v(" 几点要注意的事项")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("声明在函数体外的变量为全局变量，声明在函数体内的变量为局部变量；")])]),t._v(" "),a("li",[a("p",[t._v("在函数体内可以对全局变量进行 "),a("strong",[t._v("访问")]),t._v("，但不可以进行 "),a("strong",[t._v("修改")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("若要对全局变量进行修改，需要在函数体开头加上"),a("code",[t._v("global 变量")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("全局变量如果是"),a("strong",[t._v("不可变")]),t._v("，在函数中进行修改需要"),a("code",[t._v("global")]),t._v("声明，若全局变量为"),a("strong",[t._v("可变")]),t._v("，则不需要进行"),a("code",[t._v("global")]),t._v("声明")]),t._v(" "),a("p",[a("strong",[t._v("可不可变取决于内存地址是否变化，修改后地址发生改变则为不可变")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asdf'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 55731648")]),t._v("\nstring "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zzzz'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#55746992")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#字符串内存地址发生改变，为不可变")]),t._v("\n\nlist1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 55730248")]),t._v("\nlist1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 55730248")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列表内存地址未发生改变，为可变")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);