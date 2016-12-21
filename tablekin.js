function toggleTable(classname,length,num){
$(classname).children('tr').hide();
	for(var i = 0 ;i<num;i++){
           $(classname).children('tr').eq(i).show();
	}
	var paging="";
	for(var j=0;j<Math.ceil(length/num);j++){
		 paging += '<span>'+(j+1)+'</span>';
	} 
	$('.pageNums').append(paging);
	var pagingLength= $('.pageNums').children().length;
   $('.pageNums').children().click(function(){
	   $('.listBody').children('tr').hide();
	   var Index=$(this).html();
	   for(var k=(Index-1)*num;k<Index*num;k++){
          $(classname).children('tr').eq(k).show();
	   }
   })
}