(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{488:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux学习"}},[t._v("#")]),t._v(" Linux学习")]),t._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mirrors.aliyun.com/centos/7.8.2003/isos/x86_64/CentOS-7-x86_64-DVD-2003.iso",target:"_blank",rel:"noopener noreferrer"}},[t._v("centos7"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMWare16"),s("OutboundLink")],1),t._v(" "),s("ul",[s("li",[t._v("ZF3R0-FHED2-M80TY-8QYGC-NPKYF")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.netsarang.com/zh/free-for-home-school/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xshell"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"nat配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nat配置"}},[t._v("#")]),t._v(" NAT配置")]),t._v(" "),s("p",[t._v("子网IP："),s("code",[t._v("192.168.178.0")])]),t._v(" "),s("p",[t._v("子网掩码："),s("code",[t._v("255.255.255.0")])]),t._v(" "),s("p",[t._v("网关IP："),s("code",[t._v("192.168.178.254")])]),t._v(" "),s("p",[t._v("DNS1："),s("code",[t._v("119.29.29.29")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ip addr show\t\t//展示网络情况\nvi /etc/sysconfig/network-scripts/ipcfg-ens33\t//进行配置\n\n")])])]),s("h2",{attrs:{id:"linux基本命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux基本命令行"}},[t._v("#")]),t._v(" Linux基本命令行")]),t._v(" "),s("blockquote",[s("p",[t._v("格式：命令+空格+[参数]+空格+[文件，文件夹]")])]),t._v(" "),s("h3",{attrs:{id:"ls-列出文件夹内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls-列出文件夹内容"}},[t._v("#")]),t._v(" "),s("code",[t._v("ls")]),t._v(" 列出文件夹内容")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("参数：\n\t-a\t显示所有\n\t-l\t显示更详细的内容\n\t-h\t显示人类可读的文件大小\n\t--full-time\t\t完整的时间格式输出\n\t-t\t时间排序\n\t-F\t不同文件结尾用不同符号表示\n\t\t/结尾为文件夹\n\t\t*结尾为可执行文件\n\t\t@结尾就是快捷方式\n\t-d\t显示文件夹本身信息\n\t-r\treverse翻转\n\t-S\t按照文件大到小排序\n\t-i\t显示文件的inode信息\n")])])]),s("h3",{attrs:{id:"cd切换目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd切换目录"}},[t._v("#")]),t._v(" "),s("code",[t._v("cd")]),t._v("切换目录")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("几个特殊的目录：\n\t. \t当前的工作目录\n\t..\t上一级目录\n\t-\t上一次的工作目录\n\t~\troot目录\n")])])]),s("h3",{attrs:{id:"mkdir创建文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mkdir创建文件夹"}},[t._v("#")]),t._v(" "),s("code",[t._v("mkdir")]),t._v("创建文件夹")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mkdir {x1,x2,x3,x4}\t\t创建四个文件夹\nmkdir zhuo{1..10}\t\t创建zhuo1,zhuo2,...,zhuo10文件夹\n\n\n参数：\n\t-p\t递归创建文件夹（不存在则创建）mkdir -p ./a/b/c/d\n\t\n")])])]),s("h3",{attrs:{id:"touch创建文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#touch创建文件"}},[t._v("#")]),t._v(" "),s("code",[t._v("touch")]),t._v("创建文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("touch zhuo{1..10}\n\ntouch的作用：\n\t+ 创建普通文件\n\t+ 修改文件的时间\n\t\n参数：\t\n\t-t\ttouch -t 10240606 test.txt则将test.txt文件时间改为10.24 06:06\n")])])]),s("h3",{attrs:{id:"cp复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cp复制"}},[t._v("#")]),t._v(" "),s("code",[t._v("cp")]),t._v("复制")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("参数：\n\t-r\t递归式复制目录，即复制文件夹\n\t-p\t保持复制的文件属性不变\n\t-d\t保持快捷方式，而非快捷方式指向的文件\n\t-i\t覆盖前进行提问（默认）\n\n1. 复制普通文件到当前目录\n\tcp test.txt test.ext\n2. 复制普通文件放入其他文件夹\n\tcp test.txt ./oldboy/\t#不改名\n\tcp test.txt ./oldboy/test.py\t#改名\n3. 一次性复制多个文件\n\tcp mjj.exe test.txt ./oldboy/\n4. 复制整个文件夹\n\tcp -r dir1 dir2\n")])])]),s("h3",{attrs:{id:"mv移动或重命名文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mv移动或重命名文件"}},[t._v("#")]),t._v(" "),s("code",[t._v("mv")]),t._v("移动或重命名文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mv ./mjj.jj ./oldboy\nmv zhuo* ./oldboy\t\t移动所有zhuo开头的文件和文件夹\nmv mjj.txt mjj.txxxxxxt\t将mjj.txt重命名为mjj.txxxxxxt\n")])])]),s("h3",{attrs:{id:"rm删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rm删除"}},[t._v("#")]),t._v(" "),s("code",[t._v("rm")]),t._v("删除")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("参数：\n\t-f, --force\t\t强制删除\n\t-i\t\t\t\t删除前需要确认\n\t-I\t\t\t\t删除3个文件以上要确认\n\t-d\t\t\t\t删除空目录\n\t-r\t\t\t\t递归删除\n\t-v\t\t\t\t显示删除过程\n")])])]),s("h3",{attrs:{id:"su用户切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#su用户切换"}},[t._v("#")]),t._v(" "),s("code",[t._v("su")]),t._v("用户切换")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("su - 用户名\n")])])]),s("h3",{attrs:{id:"cat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[t._v("#")]),t._v(" "),s("code",[t._v("cat")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 查看文件内容\n\tcat gushi.txt\n2. 多个文件\n\tcat gushi.txt douyin.txt > xindeneirong.txt\n3. 非交互式的追加写入内容\n\tcat >> xie.txt <<EOF\n4. 清空文件\n\techo <空格> > test.txt\n\t> test.txt\n\tcat /dev/null > test.txt\n\n参数：\n\t-b\t\t对非空行编号\n\t-n\t\t对所有行编号\n\t-s\t\t减少空行数量\n\t\ntac形式上cat倒过来，功能则是倒转输出文本内容\n")])])]),s("ul",[s("li",[s("code",[t._v("tac")])])]),t._v(" "),s("h3",{attrs:{id:"whoami显示当前登录的用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whoami显示当前登录的用户"}},[t._v("#")]),t._v(" "),s("code",[t._v("whoami")]),t._v("显示当前登录的用户")]),t._v(" "),s("h3",{attrs:{id:"hostname显示当前机器的主机名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hostname显示当前机器的主机名"}},[t._v("#")]),t._v(" "),s("code",[t._v("hostname")]),t._v("显示当前机器的主机名")]),t._v(" "),s("h3",{attrs:{id:"pwd显示当前工作目录的绝对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwd显示当前工作目录的绝对路径"}},[t._v("#")]),t._v(" "),s("code",[t._v("pwd")]),t._v("显示当前工作目录的绝对路径")]),t._v(" "),s("h3",{attrs:{id:"开关机命令shutdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开关机命令shutdown"}},[t._v("#")]),t._v(" 开关机命令shutdown")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("shutdown -r 10\t\t#十分钟后重启\nshutdown -r 0\t\t#立即重启\nshutdown -r now\t\t#立即重启\nreboot\t\t\t\t#立即重启\n\nshutdown -h 10\t\t#十分钟后关机\nshutdown -h 0\t\t#立即关机\nshutdown -h now\t\t#立即关机\n\nlogout\t\t\t\t#注销退出当前用户\n")])])]),s("h3",{attrs:{id:"help帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#help帮助"}},[t._v("#")]),t._v(" help帮助")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("man 命令")])]),t._v(" "),s("li",[s("code",[t._v("--help")])]),t._v(" "),s("li",[s("code",[t._v("info 命令")])])]),t._v(" "),s("h3",{attrs:{id:"快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Ctrl+C")]),t._v(" 中断")]),t._v(" "),s("li",[s("code",[t._v("Ctrl+l")]),t._v(" 清屏")]),t._v(" "),s("li",[s("code",[t._v("Ctrl+d")]),t._v(" 退出当前用户")]),t._v(" "),s("li",[s("code",[t._v("Ctrl+a")]),t._v(" 光标移动到行首")]),t._v(" "),s("li",[s("code",[t._v("Ctrl+e")]),t._v(" 光标移动到行尾")]),t._v(" "),s("li",[s("code",[t._v("Ctrl+u")]),t._v(" 删除光标以前的内容")])]),t._v(" "),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("echo xxx\t\t#相当于打印xxx\necho $PATH\t\t#查看环境变量（分隔符为:）\nwhich ls\t\t#查找ls命令在哪个路径下\n\n")])])]),s("h2",{attrs:{id:"linux目录含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux目录含义"}},[t._v("#")]),t._v(" Linux目录含义")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.downk.cc/item/5f9f93d61cd1bbb86b60b213.jpg",alt:"目录含义"}})]),t._v(" "),s("h2",{attrs:{id:"vim使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim使用"}},[t._v("#")]),t._v(" vim使用")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.downk.cc/item/5f9fafa21cd1bbb86b69ea3f.jpg",alt:"vim工作模式"}})]),t._v(" "),s("h3",{attrs:{id:"快捷键-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷键-2"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),s("h4",{attrs:{id:"vim提供的上下左右"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim提供的上下左右"}},[t._v("#")]),t._v(" vim提供的上下左右")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("h: 左\nj: 上\nk: 下\nl: 右\n")])])]),s("h4",{attrs:{id:"移动光标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动光标"}},[t._v("#")]),t._v(" 移动光标")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("w: 移动到下一个单词\nb: 移动到上一个单词\n数字0: 移动到行首\n$: 移动到行尾\ng: 移动到文章开头\nG: 移动到文章结尾\nH: 移动到屏幕开头\nM: 移动到屏幕的中间\nL: 移动到屏幕的结尾\n")])])]),s("h4",{attrs:{id:"命令模式的查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令模式的查找"}},[t._v("#")]),t._v(" 命令模式的查找")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+ 向下查找\n/查找内容\n\t\t/love\t查找love相关信息，按下n跳转到下一个单词\n\n+ 向下查找\n?查找内容\n")])])]),s("h4",{attrs:{id:"命令模式下的复制粘贴删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令模式下的复制粘贴删除"}},[t._v("#")]),t._v(" 命令模式下的复制粘贴删除")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yy: 复制所在行\n4yy: 复制4行内容\n\np: 粘贴\n\ndd: 删除所在行\nD: 删除光标到行尾的内容\nx: 向后删除\nX: 向前删除\n\nu: 撤销\n")])])]),s("h4",{attrs:{id:"快捷操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷操作"}},[t._v("#")]),t._v(" 快捷操作")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("C: 删除光标所在位置之后的内容并进入编辑模式\no: 光标下一行编辑\nO: 光标上一行编辑\nA: 进入行尾且开始编辑\nZZ: 快速保存退出\n")])])]),s("h4",{attrs:{id:"批量快捷操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量快捷操作"}},[t._v("#")]),t._v(" 批量快捷操作")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ctrl+v 进入可视化模式\n选中操作的块\nd: 删除内容\nI: 写完代码则批量复制（写完按两次Esc）\n")])])]),s("h2",{attrs:{id:"重定向符号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定向符号"}},[t._v("#")]),t._v(" 重定向符号")]),t._v(" "),s("blockquote",[s("p",[t._v("重定向的意思是将数据传到其他地方")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. > \t\t输出覆盖重定向\n\tcat douyin.txt > kuaishou.txt\n2. >> \t\t输出追加重定向\n\tcat douyin.txt >> douyin2.txt\n3. <\t\t重定向写入符\n\tcat < douyin.txt\t\t#将douyin.txt的内容发送给cat读取\n\t\t\t将文本内容拆分为多行（xargs）\n\txargs -n 3 < shuzi.txt \t\t#将文本每三个数字拆分为多行\n4. <<\t\t重定向追加写入符\n\tcat >> gushi.txt <<EOF\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);