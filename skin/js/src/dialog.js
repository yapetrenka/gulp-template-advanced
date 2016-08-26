(function() {
  window.MyCMSDialog = {
    /* открыть окно 
     Типы: iframe, hash, default
     iframe    - Создать окно с iframe (Обязательный параметр url)
     hash      - показать скрытый контейнер (Обернет в общее оформление) (Обязательно указывать content c # т.е. ID контейнера)
     default   - Создать окно с сообщение (Сообщение вводить в парамтре content)
     width       - ширина (по умолчанию auto)
     height      - высота  (по умолчанию auto)
     max_width   - максимальная ширина
     max_height  - максимальная высота
     parent      - задействовать открытие окно родительским окном (по умолчанию true)
     */
    'open':function(param,arg,obj){
      var param = param ? param : {};
      var arg   = arg   ? arg   : {};
      var obj   = obj   ? obj   : null;
      var key   = window.MyCMSDialog._key;
      var param = $.extend({
        'url':null,
        'type':'auto',
        'width':'auto',
        'height':'auto',
        'maxwidth':false,
        'maxheight':false,
        'minwidth':false,
        'minheight':false,
        'parent':true,
        'title':'',
        'content':null,
        'notclose':false, /* Убрать крестик*/
        'open':function(){},
        'close':function(){},
        '_id':''
      },$(obj).data(),param);
      if(param.parent==true && parent.window){
        parent.MyCMSDialog._num++
        if(param.content==null && param.type=="auto" && obj){
          if($(obj).get(0).tagName=="A"){
            var href = $(obj).attr('href');
            if($(href).length>0 && href[0]=="#"){
              param.type = "hash";
              param.url  = href;
              param._id  = href.replace("#","");
            }
          }
        }
        if(param.type!="auto" && param.content){
          var h = param.content;
          if(h[0]=="#" && $(h).length>0){
            param.type = "hash";
            param.url  = h;
            param._id  = h.replace("#","");
          }
        }
        if(param.type!="hash"){
          param.type = param.type=="auto" ? 'default' : param.type;
          param._id  = parent.MyCMSDialog._num;
        }
        if(param.type=="iframe" && obj){
          var href = '';
          if($(obj).get(0).tagName=="A"){
            href = $(obj).attr('href');
          }
          param.url  = param.url ? param.url : href;
        }

        param._window = window;
        param._id = 'MyCMSDialog_'+param._id;
        parent.MyCMSDialog._active                                 = param._id;
        parent.MyCMSDialog._arguments[parent.MyCMSDialog._active]  = arg;
        parent.MyCMSDialog._param[parent.MyCMSDialog._active]      = param;
        parent.MyCMSDialog._objects[parent.MyCMSDialog._active]    = obj;
        parent.MyCMSDialog.__shadow();
        parent.MyCMSDialog.__dialog();
      }else{
        this._num++
        if(param.content==null && param.type=="auto" && obj){
          if($(obj).get(0).tagName=="A"){
            var href = $(obj).attr('href');
            if($(href).length>0 && href[0]=="#"){
              param.type = "hash";
              param.url  = href;
              param._id  = href.replace("#","");
            }
          }
        }
        if(param.type!="auto" && param.content){
          var h = param.content;
          if(h[0]=="#" && $(h).length>0){
            param.type = "hash";
            param.url  = h;
            param._id  = h.replace("#","");
          }
        }
        if(param.type!="hash"){
          param.type = param.type=="auto" ? 'default' : param.type;
          param._id  = this._num;
        }
        if(param.type=="iframe" && obj){
          var href = '';
          if($(obj).get(0).tagName=="A"){
            href = $(obj).attr('href');
          }
          param.url  = param.url ? param.url : href;
        }

        param._id = 'MyCMSDialog_'+param._id;
        this._active                   = param._id;
        this._arguments[this._active]  = arg;
        this._param[this._active]      = param;
        this._objects[this._active]    = obj;
        this.__shadow();
        this.__dialog();
      }
    },
    /* Закрыть окно по ID */
    'close':function(id){
      var option = this.__getParam(id);
      if(option.close && typeof option.close ==="function"){
        var arg = [id];
        option.close.apply( $(this._conteiner[id]), Array.prototype.slice.call( arg ));
      }
      switch(option.type){
        case 'iframe':
        case 'default':
          $(this._conteiner[id]).remove();
          delete(this._conteiner[id]);
          if(this._objects[id]){
            delete(this._objects[id]);
          }
          if(this._arguments[id]){
            delete(this._objects[id]);
          }
          if(this._param[id]){
            delete(this._objects[id]);
          }
          break;
        case 'hash':
          $('*[mycms-dialog-id="'+id+'"]').hide().removeClass('opened');
          break;
      }
      var lastDialog = null;
      for (var value in this._conteiner) {
        if($('*[mycms-dialog-id="'+value+'"]').is(':visible')){
          lastDialog = value;
        }
      }
      if(lastDialog){
        this.__activeDialog(lastDialog);
      }

      this.__count();
      this.__shadowRemove();
    },
    /* Закрыть все окна */
    'closeAll':function(){
      var $this = this;
      for (var value in this._conteiner) {
        $this.close(value);
      }
    },
    /* Получить данные окна
     type - param (Параметры), arguments (аргументы), objects (объекты)
     id - ID окна
     */
    'get':function(type,id){
      if(parent.window){
        return parent.MyCMSDialog._get(type,id);
      }else{
        return this._get(type,id);
      }
    },
    /* Получить данные окна
     type - param (Параметры), arguments (аргументы), objects (объекты)
     id - ID окна
     */
    '_get':function(type,id){
      var type = type ? type : 'default';
      var id   = id ? id : this._active;

      switch(type){
        case 'param':
          if(this._param[id]){
            return this._param[id];
          }
          return {};
          break;
        case 'arguments':
          if(this._arguments[id]){
            return this._arguments[id];
          }
          return {};
          break;
        case 'objects':
          if(this._objects[id]){
            return this._objects[id];
          }
          return false;
          break;
      }
      return false;
    },
    /* Получить аргументы по ID */
    '__getArguments':function(id){
      var id = id ? id : this._active;
      if(this._arguments[id]){
        return this._arguments[id];
      }
      return false;
    },
    /* Получить объект окна по ID */
    '__getObjects':function(id){
      var id = id ? id : this._active;
      if(this._objects[id]){
        return this._objects[id];
      }
      return false;
    },
    /* Получить параметры окна по ID */
    '__getParam':function(id){
      var id = id ? id : this._active;
      if(this._param[id]){
        return this._param[id];
      }
      return {};
    },
    /* Обработчик окна */
    '__dialog':function(){
      var $this     = this;
      var obj       = $(this.__getObjects());
      var option    = this.__getParam();
      var id        = option._id;

      var dialogHtml = {
        'conteiner': $('<div mycms-dialog-id="'+id+'"  class="mycms-dialog__container"></div>'),
        'html':$('<div class="mycms-dialog__content"></div>'),
        'header':$('<div class="mycms-dialog__header"></div>'),
        'title':$('<span class="mycms-dialog__title"></span>'),
        'close':$('<span class="mycms-dialog__close icon-remove"></span>')
      };
      $(dialogHtml.close).click(function(){
        $this.close(id);
      });
      $(dialogHtml.cancel).click(function(){
        $this.close(id);
      });
      $(dialogHtml.ok).click(function(){
        $this.ok(id);
      });
      //console.log('!!!');
      //console.log(obj);

      switch(option.type){
        case 'iframe':
          var iframe = $('<iframe border="0" style="display:none;border:none;" width="100%" height="100%" src="'+option.url+'"></iframe>');
          var conteiner = dialogHtml.conteiner;
          $(dialogHtml.title).html(option.title+' Загрузка...');
          $(dialogHtml.html).html(iframe);
          $(dialogHtml.header).append(dialogHtml.title);
          if(!option.notclose){
            $(dialogHtml.header).append(dialogHtml.close);
          }

          $(iframe).load(function(){
            $(iframe).show();
            var id        = $this._active;
            var textTitle = '';
            if(conteiner){
              $(conteiner).find('.title').text(textTitle);
              if(option.iframe_resize){
                var iframe_width  = $(this).contents().height();
                var iframe_height = $(this).contents().height();

                $(conteiner).width(option.iframe_resize.width);
                $(conteiner).height(option.iframe_resize.height);
                $(conteiner).find('.mycms-dialog-content').removeAttr('style');
                $(iframe).height($(this).contents().height());
                $(iframe).parent().height($(this).contents().height());

                if(option.iframe_resize.title){
                  $(conteiner).find('.title').text(option.iframe_resize.title);
                }

                $this.__resize(id);
              }else{
                var iframe_width  = option.height;
                var iframe_height = option.height;

                $(conteiner).width(option.width);
                $(conteiner).height(option.height);
                $(conteiner).find('.mycms-dialog-content').removeAttr('style');

                $this.__resize(id);
              }
            }
          });

          $(conteiner).append(dialogHtml.header);
          $(conteiner).append(dialogHtml.html);
          $(conteiner).css({'position':'absolute'});
          $('body').append(conteiner);
          break;
        case 'hash':
          if(this._conteiner[id]){
            $('*[mycms-dialog-id="'+id+'"]').show();
            $('*[mycms-dialog-id="'+id+'"] .title').html(option.title);
            $this.__toCenterSize(id);
            $this.__activeDialog(id);
            return false;
          }
          var conteiner = $(option.url);
          $(option.url).show();
          $(dialogHtml.title).html(option.title);
          $(dialogHtml.header).append(dialogHtml.title);
          if(!option.notclose){
            $(dialogHtml.header).append(dialogHtml.close);
          }
          $(conteiner).wrap(dialogHtml.conteiner);
          $(conteiner).before(dialogHtml.header);
          $(conteiner).wrap(dialogHtml.html);
          break;
        default:
          var conteiner = dialogHtml.conteiner;
          $(dialogHtml.title).html(option.title);
          $(dialogHtml.html).html(option.content);
          $(dialogHtml.header).append(dialogHtml.title);
          if(!option.notclose){
            $(dialogHtml.header).append(dialogHtml.close);
          }
          $(conteiner).append(dialogHtml.header);
          $(conteiner).append(dialogHtml.html);
          $(conteiner).css({'position':'absolute'});
          $('body').append(conteiner);
      }
      if(option.open && typeof option.open ==="function"){
        var arg = [id];
        option.open.apply( $('*[mycms-dialog-id="'+id+'"]'), Array.prototype.slice.call( arg ));
      }
      //$('*[mycms-dialog-id="'+id+'"]').draggable({handle: ".header .title"});
      this._conteiner[id] = $('*[mycms-dialog-id="'+id+'"]');
      $this.__toCenterSize(id);
      $this.__resize(id);
      this.__activeDialog(id);
      this.__count();
    },
    /* По центу экрана и установка размера окна */
    '__toCenterSize':function(id){
      var option    = this.__getParam(id);
      var page_size = this.__pageSize();

      var width     = option.width;
      var height    = option.height;
      var $this     = this;

      if(width=="auto" && height=="auto"){
        var width  = (page_size[2]*80)/100;
        if(option.type=="hash"){
          var height = $(option.url).innerHeight();
        }else{
          var height = (page_size[3]*70)/100;
        }
      }else if(width=="auto"){
        var width  = (page_size[2]*80)/100;
      }else if(height=="auto"){
        if(option.type=="hash"){
          var height = $(option.url).innerHeight();
        }else{
          var height = (page_size[3]*70)/100;
        }
      }
      if(option.minwidth>0){
        var width  = width<option.minwidth ? option.minwidth : width;
      }
      if(option.minheight>0){
        var height  = height<option.minheight ? option.minheight : height;
      }
      if(option.maxwidth>0){
        var width  = width>option.maxwidth ? option.maxwidth : width;
      }
      if(option.maxheight>0){
        var height  = height>option.maxheight ? option.maxheight : height;
      }
      if(option.type=="hash" && option.width=="auto"){
        width = $(option.url).innerWidth();
      }
      if(option.type=="hash" && option.height=="auto"){
        height = $(option.url).innerHeight();
      }

      var Left = Math.max(40, parseInt(page_size[2]/2 - width/2)) + 'px';
      var Top  = Math.max(40+$(document).scrollTop(), parseInt((page_size[3]/2 - height/2)+$(document).scrollTop())) + 'px';
      //$('*[mycms-dialog-id="'+id+'"]').find('.mycms-dialog-content').height(height-31);
      //,'width':width+'px','height':height+'px'
      $('*[mycms-dialog-id="'+id+'"]').css({'position':'absolute','left':Left,'top':Top});
    },
    /* Если меняется размер окна */
    '__resize':function(id){
      var key = id ? id : false;
      var page_size = this.__pageSize();
      var dd = this._conteiner;
      if(key && this._conteiner[key]){
        var width   = $('*[mycms-dialog-id="'+id+'"]').innerWidth();
        var height  = $('*[mycms-dialog-id="'+id+'"]').innerHeight();
        var Left = Math.max(40, parseInt(page_size[2]/2 - width/2)) + 'px';
        var Top  = Math.max(40+$(document).scrollTop(), parseInt((page_size[3]/2 - height/2)+$(document).scrollTop())) + 'px';
        $('*[mycms-dialog-id="'+id+'"]').css({'left':Left,'top':Top});
      }else{
        for (var value in this._conteiner) {
          if(value){
            var width   = $('*[mycms-dialog-id="'+value+'"]').innerWidth();
            var height  = $('*[mycms-dialog-id="'+value+'"]').innerHeight();
            var Left = Math.max(40, parseInt(page_size[2]/2 - width/2)) + 'px';
            var Top  = Math.max(40+$(document).scrollTop(), parseInt((page_size[3]/2 - height/2)+$(document).scrollTop())) + 'px';
            $('*[mycms-dialog-id="'+value+'"]').css({'left':Left,'top':Top});
          }
        }
      }
    },
    /* Тень */
    '__shadow':function(){
      if($('#MyCMSDialogShadow').length>0) return false;
      $('body').append($('<div id="MyCMSDialogShadow"></div>').click(function(){
       $this.closeAll();
       }));
      var $this = this;

    },
    /* Удалить тень */
    '__shadowRemove':function(){
      var i = 0;
      for (var value in this._conteiner) {
        if($('*[mycms-dialog-id="'+value+'"]').is(':visible')){
          i++;
        }
      }
      if(i==0) $('#MyCMSDialogShadow').remove();
    },
    /* Сделать активным окно по ID */
    '__activeDialog':function(id){
      var id = id ? id : this._active;
      for (var value in this._conteiner) {
        if($('*[mycms-dialog-id="'+value+'"]')){
          $('*[mycms-dialog-id="'+value+'"]').css('z-index','2');
        }
      }
      var zindex    = (parseInt($('#MyCMSDialogShadow').css('z-index'))+1);
      $('*[mycms-dialog-id="'+id+'"]').css('z-index',zindex).addClass('opened');
      this._active = id;
    },
    '__count':function(){
      var i = 0;
      for (var value in this._conteiner) {
        if(value){
          i++;
        }
      }
      this._count = i;
      return i;
    },
    /* Состояние экрана */
    '__pageSize':function(){
      var xScroll, yScroll;

      if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
      } else if (document.body.scrollHeight > document.body.offsetHeight){
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
      } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight){
        xScroll = document.documentElement.scrollWidth;
        yScroll = document.documentElement.scrollHeight;
      } else {
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
      }


      var windowWidth, windowHeight;
      if (self.innerHeight) {
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
      } else if (document.documentElement && document.documentElement.clientHeight) {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
      } else if (document.body) {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
      }


      if(yScroll < windowHeight){
        pageHeight = windowHeight;
      } else {
        pageHeight = yScroll;
      }

      if(xScroll < windowWidth){
        pageWidth = windowWidth;
      } else {
        pageWidth = xScroll;
      }

      return [pageWidth,pageHeight,windowWidth,windowHeight];
    },
    '_num':0,
    '_count':0,
    '_objects': new Array,
    '_conteiner': new Array,
    '_active':null,
    '_arguments': new Array,
    '_param': new Array,
  }
  $(window).resize(function(){
    MyCMSDialog.__resize();
  });
})();

;(function( $ ){
  $.fn.MyCMSDialog = function(param,arg){
    this.on('click',function(){
      MyCMSDialog.open(param,arg,this);
      return false;
    });
  }
})( jQuery );