$(window).load(function() {
  $('body').click(function(){
   
//   var test = $( ".hide-it" ).find('input');
//     console.log('acting cool');
//     console.log(test);
  });
 
//    if($.fn.lightSlider = true) {
//     console.log("plugin loaded");
// } else {
//     console.log("plugin not loaded");
// }
  if ($.isFunction($.fn.lightSlider)) {
    //your code using the plugin
//     console.log("plugin  loaded");
  }else{
//   console.log("plugin not loaded");
  }
  
//   var jq = document.createElement('script');
// jq.src = "https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js";
// document.getElementsByTagName('head')[0].appendChild(jq);

//  console.log('jq');
  function percentageAdd(num, per) {
    console.log(num);
    num = parseFloat(num).toFixed(2);
    per = (parseFloat(per)+100).toFixed(2);
  //   console.log(per);

    if (per !== 0) {

      return parseFloat((num/100)*per).toFixed(2);
    }else{
      return parseFloat(num).toFixed(2);
    }
    function addThemUp(){
    	
    }
//   firstStep = 
}
  
 
  
  
  function updatePrice(){
    baseModel = $('.base-model').find('.swatch-selected').attr('data-value-price');
    selectTrayTable = $('.tray-table select').find('option:selected');
    tt = selectTrayTable.attr('data-value-price');
    
    selectTabletHolder = $('.tablet-holder select').find('option:selected');
    th = selectTabletHolder.attr('data-value-price');
    
    selectWineGlassCaddy = $('.wine-glass-caddy select').find('option:selected');
    wgc = selectWineGlassCaddy.attr('data-value-price');
    
    totalPrice = $('.price-item--regular').text();
    
    liveprice = totalPrice;
	output = liveprice.replace("£", "");
	totalPriceOutput = output.replace(",", "");
    
    if(isNaN(baseModel)){
      baseModel = parseFloat(startingPriceOutput);
    }
    if(isNaN(tt)){
      tt = parseFloat(0);
    }
    if(isNaN(th)){
      th = parseFloat(0);
    }
    if(isNaN(wgc)){
      wgc = parseFloat(0);
    }
    
    calcAccessories = parseFloat((parseFloat(tt)+parseFloat(th)+parseFloat(wgc))).toFixed(2);
    
//     trayTable = $(selectTrayTable).('option:selected', this).attr('data-value-price');
    $('.base-price').text(baseModel);
    noOfRows = $('.no-of-rows').find('.swatch-selected').attr('data-value-price');
    calcBaseModel = percentageAdd(baseModel, noOfRows);
    
    
    
    
    
    oneCalcFeatures = parseFloat(parseFloat(calcBaseModel) + parseFloat(calcAccessories)).toFixed(2);
    calcFeatures = parseFloat(parseFloat(totalPriceOutput) - parseFloat(oneCalcFeatures)).toFixed(2);
//     price - ((price / 100) * percentage)
    $('.base-price').text(calcBaseModel);
    $('.accessories-price').text(calcAccessories);
    $('.feature-price').text(calcFeatures);
    
//     console.log('2d price debugger');
//     console.log(selectTrayTable);
//     console.log(calcBaseModel);
//     console.log(baseModel);
//     console.log(calcFeatures)
//     console.log(tt);
//     console.log(th);
//     console.log(wgc);
//     console.log(calcAccessories);
//     console.log(oneCalcFeatures);
//     console.log(calcFeatures);
//     console.log(totalPriceOutput);
//         console.log('2d price debugger');

    }
//    var slider = null;
//   var slider = $('#lightSlider').lightSlider({
//         adaptiveHeight:true,
//         item:1,
//         slideMargin:0,
//         loop:true
//     });
  if(jQuery) {
    
     
    
    function checkDeliveryType(){
    	  deliveryType = $('div.delivery-type').find('input');
      if (deliveryType.val() === 'White Glove Service'){
      	console.log('3 - 4 weeks')
        $('span.normalSeatsDelivery').text('3 - 4 Weeks');
      }else if(deliveryType.val() === 'Curbside Delivery'){
      	console.log('1 - 2 weeks');
        $('span.normalSeatsDelivery').text('1 - 2 Weeks');
      }else{
      	console.log(deliveryType.val());
      }
      		
     	  console.log(deliveryType);
    }
    $('form').click(function(){
      
    checkDeliveryType();
      
      
//       console.log(slider);
//       if (slider === null){
      	
        
// //         updatePrice();
//       }else{
//         slider.goToSlide(1);
//       }
      
//       var selectedFirstSecondary
//       selectedFirstSecondary = 'null'
      if (typeof selectedFirstSecondary !== 'undefined') {
    // the variable is defined
        selectedFirstSecondary.show();
		}
        if (typeof selectedSecondSecondary !== 'undefined') {
    // the variable is defined
        selectedSecondSecondary.show();
		}
        if (typeof selectedThirdSecondary !== 'undefined') {
    // the variable is defined
        selectedThirdSecondary.show();
		}
      
      //First Primary
      firstPrimary = $(this).find('div.first-primary');
      selectedFirstPrimary = firstPrimary.find('.swatch-selected').attr('data-value-text');
//       console.log(selectedFirstPrimary);
      
      firstSecondary = $(this).find('div.first-secondary');
      selectedFirstSecondary = firstSecondary.find("div[data-value-text='" + selectedFirstPrimary +"']");
//       console.log(selectedFirstSecondary);
      
      if(selectedFirstSecondary.length){
      	selectedFirstSecondary.hide();
        selectedFirstSecondary.removeClass('swatch-selected');
      }
      //Second Primary
      secondPrimary = $(this).find('div.second-primary');
      selectedSecondPrimary = secondPrimary.find('.swatch-selected').attr('data-value-text');
//       console.log(selectedFirstPrimary);
      
      secondSecondary = $(this).find('div.second-secondary');
      selectedSecondSecondary = secondSecondary.find("div[data-value-text='" + selectedSecondPrimary +"']");
//       console.log(selectedSecondSecondary);
      
      if(selectedSecondSecondary.length){
      	selectedSecondSecondary.hide();
        selectedSecondSecondary.removeClass('swatch-selected');
      }
      //ThirdPrimary
      thirdPrimary = $(this).find('div.third-primary');
      selectedThirdPrimary = thirdPrimary.find('.swatch-selected').attr('data-value-text');
//       console.log(selectedFirstPrimary);
      
      thirdSecondary = $(this).find('div.third-secondary');
      selectedThirdSecondary = thirdSecondary.find("div[data-value-text='" + selectedThirdPrimary +"']");
//       console.log(selectedThirdSecondary);
      
      if(selectedThirdSecondary.length){
      	selectedThirdSecondary.hide();
        selectedThirdSecondary.removeClass('swatch-selected');
      }
//       console.log(selectedFirstSecondary);
      setTimeout(updatePrice, 200);
            
    });
    setTimeout(updatePrice, 200);
//     console.log("jquery loaded");
//     console.log(jQuery.fn.jquery);
} else {
    console.log("jquery not loaded");
}
//   	lightSlider.goToSlide(1);
//   function updateSummary(){
//   	var mainColor = $( "input[name='properties[Main Color]']" ).value();
//     console.log
//   }
   
  function moveThem(){
   var moveOne = $('.move-this-too').detach();
    var moveTwo = $('.move-this').detach();
    moveOne.appendTo('.move-in');
  moveTwo.appendTo('.move-in');
    setTimeout(updatePrice, 200);
//     updateSummary();
//     $('p.summary span').text(mainColor);
    
//   console.log('hey');
   
  }
  
   var checkExist = setInterval(function() {
   if ($('.move-in').length) {
      console.log("Exists!");
      startingPrice = $('.price-item--regular').text();
    
    liveStartingPrice = startingPrice;
	output = liveStartingPrice.replace("$", "");
	startingPriceOutput = output.replace(",", "");
     
     moveThem();
      
      clearInterval(checkExist);
   }
}, 500);
  $('.loadingScreen').hide();
//   setTimeout(updatePrice,2000);
  
  
    
//   function testClick(){
//     $('div.swatch-option').click(function(){
//     	console.log('yo man');
// //       if($(this).hasClass('swatch-selected')){
// //       	console.log('gettin there');
// //       }
//     });
// //     $('body').find('swatch-selected')
//   }
// 	testClick();
  
//   function dontDoAnything(){
//     console.log('aha');
//   	return false;
//   }
//   $('.beside-image').click(function(){
//     console.log('atleast');
//   	dontDoAnything();
//   });
  
  
});
 

// jQuery(document).ready.(function(){
  
//     console.log('heyy');
  
//   });

 