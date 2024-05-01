// ==UserScript==
// @name         zentao
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Insert comment template on zentao bug resolve page!
// @author       You
// @match        http://*/zentao/bug-resolve*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=haogs.cn
// @grant        none
// @updateURL    https://github.com/mgjuc/zentao-comment-tamplate/raw/master/zentao_comment.user.js
// @downloadURL  https://github.com/mgjuc/zentao-comment-tamplate/raw/master/zentao_comment.user.js
// @homepageURL  https://github.com/mgjuc/zentao-comment-tamplate

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