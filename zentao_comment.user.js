// ==UserScript==
// @name         zentao
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Insert comment template on zentao bug resolve page!
// @author       You
// @match        http://*/zentao/bug-resolve*
// @icon         http://10.1.2.55:81/zentao/favicon.ico
// @grant        none
// @updateURL    http://10.1.3.167:3210/yanguoqiang/zentao-comment-tamplate/raw/branch/master/zentao_comment.user.js
// @downloadURL  http://10.1.3.167:3210/yanguoqiang/zentao-comment-tamplate/raw/branch/master/zentao_comment.user.js
// @homepageURL  http://10.1.3.167:3210/yanguoqiang/zentao-comment-tamplate

// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  let comment_template =  `问题：
产生原因：
解决方法：
 sql修改：无
 配置文件修改：无
 程序修改：有
提交：
分支：`
  let comment_editor = document.querySelector('iframe.ke-edit-iframe').contentDocument.querySelector('body')
  if(comment_editor){
      console.log('comment inserted')
      comment_editor.innerText = comment_template
      let holder = document.querySelector('div.kindeditor-ph')
      if(holder){
          holder.style.display = 'none'
      }
  }
})();