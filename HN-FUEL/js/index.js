
  	var GL_key='${KEY}';
  	var GL_weburl='${WEBURL}';
	var GL_orgname='${ORGNAME}'; 
  	var GL_orgcode='${ORGCODE}'; //---------公司编码
 	var GL_dateInfo;
  	//console.log(GL_orgcode,GL_orgname)
  	
   //-------------------窗口加载----------------------
  $(window).ready(function () {
    var W_w = $(window).width();
   	//var W_h = $(window).height();
    $('body').width(W_w);
    //$('body').height(W_h);
   	$("#p_group>p").text(GL_orgname);
  })
  
  //-------------------窗口尺寸变化------------------------
    $(window).resize(function () {
    var W_w = $(window).width();
    //var W_h = $(window).height();
    $('body').width(W_w);
    //$('body').height(W_h);
  })

  //-----------------集团参数点击事件------------------------
  $("#p_group span").click(function () {
	  	
    	$(".popup-inform").show();
    	$("#subframe").attr("src", "${ctx}/comp/orgwithauth.shtml");
    });
  
  $("#p_group").click(function(){
	  
  	$(".popup-inform").show();
  	$("#subframe").attr("src", "${ctx}/comp/orgwithauth.shtml");
  });
    
    function closeOrg(id,name) {
    	GL_orgcode=id;
    	$("#subframe").attr("src", "");
    	$(".popup-inform").hide();
    	$("#p_group>p").html(name);
    	
    }

    function close2() {
    	$("#subframe").attr("src", "");
    	$(".popup-inform").hide();
    }
  
 // -----------------年月参数调用---------------------------------
    $(function () {
        $('#data_YM .input-group.date').datepicker({
            minViewMode: 1,
            format: 'yyyy-mm',
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            // todayHighlight: true
        });
        var nowdate = new Date();
        var y = nowdate.getFullYear();
        var m = nowdate.getMonth();//获取当前月份的日期 
        if (m == 0) {
            $('#dateYM').val(y - 1 + "-12");
        } else {
            $('#dateYM').val(y + "-" + (m < 10 ? '0' + m : m));
        }
    });
 