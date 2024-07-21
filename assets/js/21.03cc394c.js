(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{489:function(s,t,a){"use strict";a.r(t);var e=a(14),c=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在linux下离线安装gcc解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在linux下离线安装gcc解决方案"}},[s._v("#")]),s._v(" 在Linux下离线安装gcc解决方案")]),s._v(" "),a("blockquote",[a("p",[s._v("安装Ubuntu18.04后发现系统没有网卡、gcc等一些基本工具，无法通过在线方式进行安装，本文将通过iso挂载到本地的方式进行离线安装")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("演示Ubuntu版本：18.04.6，其他版本类似")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("将做系统用的ISO文件复制到任意路径下，这里以"),a("code",[s._v("/home/username/ubuntu-18.04.6-desktop-amd64.iso")]),s._v("为例；")])]),s._v(" "),a("li",[a("p",[s._v("挂在iso到"),a("code",[s._v("/media/cdrom")]),s._v("下")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /home/username/ubuntu-18.04.6-desktop-amd64.iso /media/cdrom\n")])])])]),s._v(" "),a("li",[a("p",[s._v("备份并修改"),a("code",[s._v("/etc/apt/sources.list")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/apt/sources.list /etc/apt/sources.list.bak\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gedit sources.list\n")])])]),a("p",[s._v("将"),a("code",[s._v("sources.list")]),s._v("文件改为如下内容：")]),s._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("deb file:///media/cdrom bionic main\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("这里的"),a("code",[s._v("bionic")]),s._v("为当前ubuntu版本的Codename，可通过"),a("code",[s._v("$ lsb_release -a")]),s._v("查看")])])]),s._v(" "),a("li",[a("p",[s._v("使用"),a("code",[s._v("apt-get")]),s._v("下载iso里提供的包")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\n")])])])])])])}),[],!1,null,null,null);t.default=c.exports}}]);