/**
 * Created by Administrator on 2015/11/2.
 */
$(function(){
   $('.more-list').hover(function(){
       var hei = $(this).height();
       var wid = $(this).width();
       var iwid = $('img',$(this)).width()-2;
       var ihei = $('img',$(this)).height()-2;
       $('img',$(this)).width(iwid);
       $('img',$(this)).height(ihei);
       $(this).css({
           'border':'2px solid #de004a',
           'height':hei-2+"px",
           'width':wid-2+"px"
       })
   },function(){
       var iwid = $('img',$(this)).width()+2;
       var ihei = $('img',$(this)).height()+2;
       $('img',$(this)).width(iwid);
       $('img',$(this)).height(ihei);
       var hei = $(this).height();
       var wid = $(this).width();
       $(this).css({
           'border':'1px solid #e1e1e1',
           'height':hei+2+"px",
           'width':wid+2+"px"
       })
   })
});