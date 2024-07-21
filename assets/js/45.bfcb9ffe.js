(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{512:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"c-c-类与对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-c-类与对象"}},[t._v("#")]),t._v(" C/C++: 类与对象")]),t._v(" "),a("blockquote",[a("p",[t._v("C++面向对象的三大特性："),a("strong",[t._v("封装、继承和多态")])])]),t._v(" "),a("h2",{attrs:{id:"对象的初始化和清理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的初始化和清理"}},[t._v("#")]),t._v(" 对象的初始化和清理")]),t._v(" "),a("h3",{attrs:{id:"构造函数与析构函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数与析构函数"}},[t._v("#")]),t._v(" 构造函数与析构函数")]),t._v(" "),a("p",[t._v("构造函数按参数分可分为"),a("strong",[t._v("无参构造")]),t._v("和"),a("strong",[t._v("有参构造")]),t._v("，按类型分可分为"),a("strong",[t._v("普通构造")]),t._v("和"),a("strong",[t._v("拷贝构造")]),t._v("；")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拷贝构造")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("类的"),a("strong",[t._v("调用方法")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 调用默认构造函数")]),t._v("\nPerson p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意不要加括号，否则会被认为是函数声明；")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 显示调用")]),t._v("\nPerson "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("p2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPerson "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("p3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匿名对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行结束后系统立即回收销毁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Person(p3); \t\t")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意不要利用拷贝构造函数初始化匿名对象，会被当做是 Person p3;但是后紧接一个成员函数则不会报错，如Person(p3).someMethod();")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会产生 重定义 的错误")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 隐式转换法")]),t._v("\nPerson p4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于 Person p4 = Person(10);")]),t._v("\nPerson p5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"拷贝构造函数的调用时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝构造函数的调用时机"}},[t._v("#")]),t._v(" 拷贝构造函数的调用时机")]),t._v(" "),a("ul",[a("li",[t._v("使用一个已经创建完毕的对象来初始化一个新对象；")]),t._v(" "),a("li",[t._v("值传递的方式给函数参数传值；")]),t._v(" "),a("li",[t._v("以值的方式返回局部对象。")])]),t._v(" "),a("p",[t._v("默认情况下，C++编译器至少给一个类添加如下四个函数：")]),t._v(" "),a("ul",[a("li",[t._v("默认构造函数（空）")]),t._v(" "),a("li",[t._v("默认析构函数（空）")]),t._v(" "),a("li",[t._v("默认拷贝构造函数（对属性进行值拷贝）")]),t._v(" "),a("li",[t._v("赋值运算符"),a("code",[t._v("operator=")]),t._v("对属性进行值拷贝")])]),t._v(" "),a("h3",{attrs:{id:"深拷贝与浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝与浅拷贝"}},[t._v("#")]),t._v(" 深拷贝与浅拷贝")]),t._v(" "),a("p",[t._v("在类的拷贝过程中属于浅拷贝，当类中有开辟在堆区的指针变量时，浅拷贝会将地址原封不动地复制过去，在析构函数中则会出现对同一块地址多次释放的风险，因而，需要自己实现拷贝构造函数以解决浅拷贝带来的问题。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    m_Height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m_Height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("如果有属性在堆区开辟的，一定要自己提供拷贝构造函数，防止浅拷贝带来的问题")])]),t._v(" "),a("blockquote",[a("p",[t._v("有关于该问题，有几条前人总结的法则，可以作为参考：")]),t._v(" "),a("ul",[a("li",[t._v("如果定义了"),a("strong",[t._v("析构函数")]),t._v("，那必须同时定义或删除"),a("strong",[t._v("拷贝构造函数")]),t._v("和"),a("strong",[t._v("拷贝赋值函数")]),t._v("；")]),t._v(" "),a("li",[t._v("如果一个类定义了"),a("strong",[t._v("拷贝构造函数")]),t._v("，那么必须同时定义或删除"),a("strong",[t._v("拷贝赋值函数")]),t._v("，负责出错，如果删除将导致低效；")]),t._v(" "),a("li",[t._v("如果类定义了"),a("strong",[t._v("移动构造函数")]),t._v("，那么必须同时定义或删除"),a("strong",[t._v("移动赋值函数")]),t._v("，否则出错，删除将导致低效；")]),t._v(" "),a("li",[t._v("如果类定义了"),a("strong",[t._v("拷贝构造函数")]),t._v("或"),a("strong",[t._v("拷贝赋值函数")]),t._v("，则最好同时定义"),a("strong",[t._v("移动构造函数")]),t._v("或"),a("strong",[t._v("移动赋值函数")]),t._v("，否则低效。")])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("如何避免没有必要的拷贝")]),t._v("？：使用"),a("strong",[t._v("常引用")]),a("code",[t._v("const X& x")])]),t._v(" "),a("p",[t._v("当然，对于原始数据类型，诸如int,float等，容器并不大，没有必要使用常引用。")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("如何避免不经意的隐式拷贝")]),t._v("？：将拷贝构造函数声明为"),a("code",[t._v("explicit")]),t._v("，例如某函数"),a("code",[t._v("void show(Pig pig);")]),t._v("，如果使用"),a("code",[t._v("show(pig);")]),t._v("调用，则会编译错误，只能通过"),a("code",[t._v("show(Pig{pig});")]),t._v("语法强制拷贝。")])]),t._v(" "),a("h3",{attrs:{id:"静态成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态成员"}},[t._v("#")]),t._v(" 静态成员")]),t._v(" "),a("p",[t._v("静态成员分为：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("静态成员变量")]),t._v(" "),a("ul",[a("li",[t._v("所有对象共享同一份数据")]),t._v(" "),a("li",[t._v("编译阶段分配内存")]),t._v(" "),a("li",[t._v("类内声明，类外初始化")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m_A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类外初始化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("m_A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("由于共享数据，因此有以下访问数据的方式：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过对象访问")]),t._v("\nPerson p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m_A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPerson p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m_A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过类名访问")]),t._v("\nPerson"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("m_A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("静态成员函数")]),t._v(" "),a("ul",[a("li",[t._v("所有对象共享同一个函数")]),t._v(" "),a("li",[t._v("静态成员函数只能访问静态成员变量")])])])]),t._v(" "),a("h2",{attrs:{id:"空指针访问成员函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空指针访问成员函数"}},[t._v("#")]),t._v(" 空指针访问成员函数")]),t._v(" "),a("p",[t._v("空指针也可以调用成员函数，但当需要访问成员变量时则会报错，为了防止此类错误，可以添加如下语句：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"const修饰成员函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const修饰成员函数"}},[t._v("#")]),t._v(" const修饰成员函数")]),t._v(" "),a("p",[a("strong",[t._v("常函数")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("成员函数后加"),a("code",[t._v("const")]),t._v("后称为"),a("strong",[t._v("常函数")])]),t._v(" "),a("li",[t._v("常函数内不可以修改成员属性")]),t._v(" "),a("li",[t._v("成员属性声明时加关键字"),a("code",[t._v("mutable")]),t._v("后，常函数中就可以修改")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("m_B "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this->m_A = 100;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m_A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mutable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m_B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("this指针的本质是指针常量，是对指针的修饰，当成员函数后加"),a("code",[t._v("const")]),t._v("后修饰的是指针的指向，即对指针和常量均修饰，所以不可以更改成员属性")])]),t._v(" "),a("p",[a("strong",[t._v("常对象")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("声明对象前加"),a("code",[t._v("const")]),t._v("称该对象为常对象；")]),t._v(" "),a("li",[t._v("常对象只能调用常函数")]),t._v(" "),a("li",[t._v("常对象也可以修改加了关键字"),a("code",[t._v("mutable")]),t._v("的属性")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Person p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// p.m_A = 100;")]),t._v("\n    p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m_B "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"友元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#友元"}},[t._v("#")]),t._v(" 友元")]),t._v(" "),a("p",[t._v("友元的三种实现：")]),t._v(" "),a("ul",[a("li",[t._v("全局的函数做友元")]),t._v(" "),a("li",[t._v("类做友元")]),t._v(" "),a("li",[t._v("成员函数做友元")])]),t._v(" "),a("p",[t._v("为了让全局函数"),a("code",[t._v("friendFunc(Person* p)")]),t._v("访问类"),a("code",[t._v("Person")]),t._v("中的私有成员，如下操作")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("friend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("friendFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m_A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m_B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("friendFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m_B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("同理类做友元只需在"),a("code",[t._v("Person")]),t._v("类中添加代码")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("friend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoodGuy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("成员函数做友元需要添加")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("friend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoodGuy")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);