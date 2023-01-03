$(window).load(function() {
  
  
//   function percentageAdd(num, per) {
//     console.log(num);
//     num = parseFloat(num).toFixed(2);
//     per = (parseFloat(per)+100).toFixed(2);
//     //   console.log(per);

//     if (per !== 0) {

//       return parseFloat((num/100)*per).toFixed(2);
//     }else{
//       return parseFloat(num).toFixed(2);
//     }
//     function addThemUp(){

//     }
//     //   firstStep = 
//   }
  
//   		  var MidnightBlack = '#000';
          
//           var MidnightBlack = '#000';
//           var ElegantWhite = '#ccccbe';
//           var CrimsonWine = '#4d0000';
//           var CharcoalGrey = '#20201e';
//           var NavyBlue = '#061d2e';
//           var DarkChocolate = '#371c07';
//           var RoastChestnut = '#723505';
//           var Cognac = '#ad5c08';
//           var VenetianRosso = '#830613';
//           var Chocolate = '#512b14';
//           var SandyBeige = '#E2DBA8';
//           var FormulaRosso = '#d50c00';
//           var ModernGrey = '#47463f';ar ElegantWhite = '#ccccbe';
//           var CrimsonWine = '#4d0000';
  
//           var CharcoalGrey = '#20201e';
//           var NavyBlue = '#061d2e';
//           var DarkChocolate = '#371c07';
//           var RoastChestnut = '#723505';
//           var Cognac = '#ad5c08';
//           var VenetianRosso = '#830613';
//           var Chocolate = '#512b14';
//           var SandyBeige = '#E2DBA8';
//           var FormulaRosso = '#d50c00';
//           var ModernGrey = '#47463f';
  
  			
  		  var MidnightBlack = '#000';
          var ElegantWhite = '#C7C7B6';
          var CrimsonWine = '#4d0000';
          var CharcoalGrey = '#20201e';
          var NavyBlue = '#061d2e';
          var DarkChocolate = '#371c07';
          var RoastChestnut = '#723505';
          var Cognac = '#ad5c08';
          var VenetianRosso = '#8C0C1A';
          var Chocolate = '#512b14';
          var SandyBeige = '#D3B66F';
          var FormulaRosso = '#CE0000';
          var ModernGrey = '#323430';
          
          var PrimaryMaterial = 'primary_color';
          var SecondaryMaterial = 'secondary_color';
          var PipingMaterial = 'piping_color';
  
          var color;
          var primaryMaterials;
          var secondaryMaterials;
          var pipingMaterials;
          var primaryPipingColor;
          var secondaryPipingColor;
          var cupHolderMaterials;
  
  		var PrimaryMaterialText;
  		var SecondaryMaterialText;
  		var PipingMaterialText;
  		
  		
  			
  			 var sketchfabAPIUtilityInstance
      var sketchfabAPIUtilityInstancetwo
//       $('body').click(function(){
        
        var productTitle = $('.product-single__title').text();
  		var viewerLink;
  		var type;
  		
  

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
          console.log('base-model-price');
          console.log('base-model');
    selectTrayTable = $('.tray-table select').find('option:selected');
    tt = selectTrayTable.attr('data-value-price');
    console.log('tt');
          console.log(tt);
    selectTabletHolder = $('.tablet-holder select').find('option:selected');
    th = selectTabletHolder.attr('data-value-price');
    
    selectWineGlassCaddy = $('.wine-glass-caddy select').find('option:selected');
    wgc = selectWineGlassCaddy.attr('data-value-price');
    
    totalPrice = $('.price-item--regular').text();
    
    liveprice = totalPrice;
	output = liveprice.replace("£", "");
	totalPriceOutput = output.replace(",", "");
    
    if(isNaN(baseModel)){
      baseModel = parseFloat(0);
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
          if(isNaN(noOfRows)){
//           	noOfRows == 0;
//             noOfRows = 0;
            calcBaseModel = baseModel;
          }else{
          	    calcBaseModel = percentageAdd(baseModel, noOfRows);

          }
          
    
    
    
    
    
    oneCalcFeatures = parseFloat(parseFloat(calcBaseModel) + parseFloat(calcAccessories)).toFixed(2);
    calcFeatures = parseFloat(parseFloat(totalPriceOutput) - parseFloat(oneCalcFeatures)).toFixed(2);
//     price - ((price / 100) * percentage)
    $('.base-price').text(calcBaseModel);
    $('.accessories-price').text(calcAccessories);
    $('.feature-price').text(calcFeatures);
    
    
//           console.log('debug priceee');
//           console.log(selectTrayTable);
//                     console.log('base model');
//               console.log(baseModel);
//     console.log(calcBaseModel);
//     console.log(calcFeatures)
//     console.log(tt);
//     console.log(th);
//     console.log(wgc);
//     console.log(calcAccessories);
//     console.log(oneCalcFeatures);
//     console.log(calcFeatures);
//     console.log(totalPriceOutput);
//                     console.log('debug priceee');

    }
  
 $('form').click(function(){
   setTimeout(function(){
   		updatePrice();
   }, 500);
      
      

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
//       setTimeout(updatePrice, 200);
            
    });
  
//   primaryMaterials = ["primary-color", "cr2-primary-color", "cr3-primary-color", "cr2-console-color", "cr3-console-color", "primary-piping-color"];
//             secondaryMaterials = ["secondary-color", "cr2-secondary-color", "cr3-secondary-color", "cr2-secondary-color", "cr3-secondary-color", "secondary-piping-color"];
//             pipingMaterials = ["piping-color", "cr2-piping-color", "cr3-piping-color", "piping-primary-color"];
//             primaryPipingColor = ["piping-primary-color"];
//             secondaryPipingColor = ["piping-secondary-color"];
//             cupHolderMaterials = ["cup-holder", "cr2-cup-holder", "cr3-cup-holder"];
     
  
  function checkProductTitle(productTitle = $('.product-single__title').text()){
    
    if (productTitle == 'Zurich 3D'){
      //             viewerLink = '14f678e28334472fae72b75e6d2f1690';
      viewerLink = '6b59c2b6f1794af0a8668765c27211a8';
      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
      type = 'Advanced';
    }else if (productTitle == '3D Customizer'){
      viewerLink = 'asdfadf';
      type = 'Advanced';

    }else if(productTitle == 'Verona 3D'){

      viewerLink = '5171c998c90845aebc2a76782b93a95c';
      type = 'Standard';
      primaryMaterials = ["primary_color"];
      //             pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
    }
    else if(productTitle == 'Syracuse 3D'){
      viewerLink = '0cbcc41b34e248ffbab48e9a11a2eee5';
      type = 'Standard';
      primaryMaterials = ["primary_color"];
      //             pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
    }
    else if(productTitle == 'Tuscany 3D'){
      viewerLink = 'b99dce8596c04be891b120081bdbbffb'; 
      //                   	viewerLink = 'ed05e3986f804f188c5577056078150c'; 

      type = 'Advanced';
      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
    }
    else if(productTitle == 'Tuscany XL 3D'){
      viewerLink = '9d341b4ba1774746aa930730b3fb88ff'; 
      //                   	viewerLink = 'ed05e3986f804f188c5577056078150c'; 

      type = 'Advanced';
      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
    }
    else if(productTitle == 'Oxford Console Edition 3D'){
      viewerLink = 'fc710875f35a4dceab2fd7eadb214f15';
      primaryMaterials = ["primary_color", "console_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
      //                   	viewerLink = '010e2e3350664bc0a9aaef11a3523ca5';



      type = 'Advanced';
    }
    else if(productTitle == 'Oxford Dropdown Center 3D'){
      viewerLink = '4ddeb11a686f474bb034a1e98de16128';
      primaryMaterials = ["primary_color", "primary-center-color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];

      type = 'Advanced';
    }
    else if(productTitle == 'Tuscany Console Edition 3D'){
      viewerLink = '7b63f177a388441384715878ecf90345';
      primaryMaterials = ["primary_color", "console_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];

      type = 'Advanced';
    }
    else if(productTitle == 'Tuscany Dropdown Center 3D'){
      viewerLink = '1d067b61671541b1a7f1d10161b6817c';
      primaryMaterials = ["primary_color", "primary-center-color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];

      type = 'Advanced';
    }
    else if(productTitle == 'Oslo 3D'){
      viewerLink = 'a7026c1c83d947a295423f8ef60b8439';

      type = 'Advanced';

      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color", "piping_primary_color"];
      primaryPipingColor = ["piping_primary_color"];
      secondaryPipingColor = ["piping_secondary_color"];
      cupHolderMaterials = ["cup_holder"];

    }
    else if(productTitle == 'Oslo XL 3D'){
      viewerLink = '874394011f0e4943a038200f31a38e43';

      type = 'Advanced';

      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color", "piping_primary_color"];
      primaryPipingColor = ["piping_primary_color"];
      secondaryPipingColor = ["piping_secondary_color"];
      cupHolderMaterials = ["cup_holder"];

    }
    else if(productTitle == 'Oslo Dropdown Center 3D'){
      viewerLink = '783c72e8740d444d811742bf5440030c';

      type = 'Advanced';

      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color", "piping_primary_color"];
      primaryPipingColor = ["piping_primary_color"];
      secondaryPipingColor = ["piping_secondary_color"];
      cupHolderMaterials = ["cup_holder"];

    }
    else if(productTitle == 'Oslo Console Edition 3D'){
      viewerLink = '82b4f64c0b27437d98b315660ec45819';

      type = 'Advanced';

      primaryMaterials = ["primary_color", "console_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color", "piping_primary_color"];
      primaryPipingColor = ["piping_primary_color"];
      secondaryPipingColor = ["piping_secondary_color"];
      cupHolderMaterials = ["cup_holder"];

    }
    else if(productTitle == 'Piacenza 3D'){
      viewerLink = '18ee202d8b9946d79bbb3f6cfdf75287';
      type = 'Standard';
      primaryMaterials = ["primary_color"];
      //             pipingMaterials = ["piping-color"];
      cupHolderMaterials = ["cup_holder"];
    }
    console.log(productTitle);
  }
    checkProductTitle();
        
        
      sketchfabAPIUtilityInstance = new SketchfabAPIUtility(viewerLink, document.getElementById("api-frame"), {"autostart": 1 });
      sketchfabAPIUtilityInstance.addEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
      sketchfabAPIUtilityInstance.create();
//       sketchfabAPIUtilityInstance.api.setTextureQuality( 'hd', function(){
//         console.log('Texture quality set to high definition!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//       });
  
           
//       function onSketchfabUtilityReady(){
//          sketchfabAPIUtilityInstance.removeEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
// //         var enableDebugLogging = false;
       
// //          sketchfabAPIUtilityInstance.api.setTextureQuality( 'hd', function(){
// //         console.log('Texture quality set to high definition!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
// //       });
       
        
//          //some code here..
//       };
  
   
//       });
//   	var tabTitle = '<ul>';
//   jQuery('.prod_description > div.tab-content').each(function(i, item){
//       jQuery(this).attr('id', "tabs-" + i);
//       var titletext = jQuery(this).find('h3').text();
//       var titlelist = '<li><a href="#tabs-' + i + '">' + titletext + '</a></li>'
//       tabTitle += titlelist ;
//   });
//   tabTitle += '</ul>';
//   jQuery( tabTitle ).insertAfter('.spacer');
//     jQuery('.spacer').remove();
    
//      $('.prod_description > ul').each(function(){
//       var active, content, links = $(this).find('a');
//       active = links.first().addClass('active');
//       content = $(active.attr('href'));
//       links.not(':first').each(function () {
//         $($(this).attr('href')).hide();
//       });
//       $(this).find('a').click(function(e){
//         active.removeClass('active');
//         content.hide();
//         active = $(this);
//         content = $($(this).attr('href'));
//         active.addClass('active');
//         content.show();
//         return false;
//       });
  
//       var sketchfabAPIUtilityInstance = new SketchfabAPIUtility(viewerLink, document.getElementById("api-frame"), {"autostart": 1 });
//       sketchfabAPIUtilityInstance.addEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
//       sketchfabAPIUtilityInstance.create();
  
        function onSketchfabUtilityReady() {
                   sketchfabAPIUtilityInstance.removeEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
		sketchfabAPIUtilityInstance.api.setCameraEasing('easeInBounce');
          sketchfabAPIUtilityInstance.api.setTextureQuality( 'hd', function(){
            console.log('Texture quality set to high definition');
        });
           updatePrice();
          
//           sketchfabAPIUtilityInstance.setMaterialUIDPending("primary_color",sketchfabAPIUtilityInstance.NormalMap,"1210_Oslo_Leather_Normal_2k_16bi");
//              sketchfabAPIUtilityInstance.applyMaterialUIDPending("primary_color");
                    sketchfabAPIUtilityInstance.setFactor("primary_color",sketchfabAPIUtilityInstance.NormalMap,1);
//                               sketchfabAPIUtilityInstance.setFactor("secondary_color",sketchfabAPIUtilityInstance.NormalMap,1);


              console.log('secondaryyy!!!');
          
          setTimeout(function(){
             $('.loadingScreen-customizer').remove();
          }, 2000);
//         	alert('secene loaded');
          
          $('body').on('mw_apo', function(e, a) {
            if (a === 'end-initialize') { // options container appended to the DOM
              console.log('INITIALIZEDDD!!!!');
            }
            });
          
          
  setTimeout(function(){  
    // change iframe to selected model in advanced product options
//     $('.select-model').click( function(){
//       console.log('yo');
//       selectModelFind = $('form').find("input[name='properties[Pick a Model]']");
// //             PrimaryColorFind = $('form').find("input[name='properties[" + PrimaryMaterialText + "]']");
	
//       selectModelText = selectModelFind.val();
//       checkProductTitle(productTitle = selectModelText)
//       console.log(productTitle);
//       console.log(viewerLink);
//       $('.new-customizer-info-holder h1').text(selectModelText);
//       $(this).removeClass('custom-model-picker-full-page');
//        sketchfabAPIUtilityInstance = new SketchfabAPIUtility(viewerLink, document.getElementById("api-frame"), {"autostart": 1 });
//       sketchfabAPIUtilityInstance.addEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
//       sketchfabAPIUtilityInstance.create();
           
//       function onSketchfabUtilityReady(){
//          sketchfabAPIUtilityInstance.removeEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
//          //some code here..
//         sketchfabAPIUtilityInstance.api.setTextureQuality( 'hd', function(){
//             console.log('Texture quality set to high definition!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//         });
        
//       };
// //         console.log(selectModel);
//      ;
//             modelText = selectModelText.replace(/ /g, "-");
//             modelText = selectModelText.split(' ').join('-');
//     jQuery.getJSON('/products/'+modelText+'.js', function(product) {
// //                 alert('The title of this product is ' + product.description);
//       $('.prod_description').html('<div class="spacer"></div>');

//           $('.spacer').html(product.description);
//             var $span = $(".prod_description h3");
// //         
//     });
//       });
//     console.log('time outt');
//     sketchfabAPIUtilityInstancetwo.setColor("1-row-of-2",sketchfabAPIUtilityInstance.AlbedoPBR, "color",'#000000');
    $('.row-selecterrrr').bind('touchstart click', function(){
//       alert('row selector');
      setTimeout(function(){
      	$('.layout-iframe-container').addClass('show-iframe');
     	FirstRowFind = $('form').find("input[name='properties[Select No. of rows]']");
        
        	FirstRowText = FirstRowFind.val();
        console.log(FirstRowText);
      
      if(FirstRowText == '1 Row'){
        sketchfabAPIUtilityInstancetwo.setOpacity("2-single-row",0);
    	sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-2",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-2-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3-loveseat-left",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3-loveseat-right",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of--4",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-center",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-double-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-left",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5-set-of-3-center",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of--6",0);   
        
        
          sketchfabAPIUtilityInstancetwo.setOpacity("3-single-row",0);
    	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-left",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-right",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of--4",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-center",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-double-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-left",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-set-of-3-center",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of--6",0);   
        
      }
      else if(FirstRowText == '2 Rows'){
         sketchfabAPIUtilityInstancetwo.setOpacity("3-single-row",0);
    	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-left",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-right",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of--4",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-center",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-double-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-left",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-set-of-3-center",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of--6",0);   
      }
      else if(FirstRowText == '3 Rows'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of--4",1);
      }
      else{
        
        $('.layout-iframe-container').removeClass('show-iframe');
//     
        }
        function hideFirstRows(){
      	sketchfabAPIUtilityInstancetwo.setOpacity("1-single-row",0);
    	sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-left",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-right",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of--4",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-center",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-double-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-left",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5-set-of-3-center",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of--6",0);   
      }
      FirstRowFind = $('form').find("input[name='properties[First Row]']");
//             PrimaryColorFind = $('form').find("input[name='properties[" + PrimaryMaterialText + "]']");

      FirstRowText = FirstRowFind.val();
        console.log(FirstRowText);
      
      if(FirstRowText == 'Row of 2'){
        hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2",1);
      }
      else if(FirstRowText == 'Row of 3'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3",1);
      }
      else if(FirstRowText == 'Row of 4'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of--4",1);
      }
       else if(FirstRowText == 'Row of 5'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5",1);
      }
      else if(FirstRowText == 'Loveseat'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2-loveseat",1);
      }
      else if(FirstRowText == 'Row of 3 - Loveseat Left'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-left",1);
      }
      else if(FirstRowText == 'Row of 3 - Loveseat Right'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-right",1);
      }
     else if(FirstRowText == 'Row of 4 - Loveseat Left'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-left",1);
      }
      else if(FirstRowText == 'Row of 4 - Loveseat Right'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-right",1);
      }
      else if(FirstRowText == 'Row of 4 - Loveseat Center'){
          hideFirstRows();
         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-center",1);
      }
      else{
        hideFirstRows();
          console.log('row not avaialable');
      }
      }, 100);
//       	$('.layout-iframe-container').addClass('show-iframe');
//      	FirstRowFind = $('form').find("input[name='properties[Select No. of rows]']");
//             PrimaryColorFind = $('form').find("input[name='properties[" + PrimaryMaterialText + "]']");
	
      
    });
//     $('.first-row').click( function(){  
//       $('.layout-iframe-container').addClass('show-iframe');
//       function hideFirstRow(){
//       	sketchfabAPIUtilityInstancetwo.setOpacity("1-single-row",0);
//     	sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2-loveseat",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-left",0);
//       	sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-right",0);
//       	sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of--4",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-left",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-right",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-center",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-double-loveseat",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-left",0);
// 		sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5-loveseat-left",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5-loveseat-right",0);
//         sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5-set-of-3-center",0);
// 		sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of--6",0);   
//       }
//       FirstRowFind = $('form').find("input[name='properties[Configuration]']");
// //             PrimaryColorFind = $('form').find("input[name='properties[" + PrimaryMaterialText + "]']");

//       FirstRowText = FirstRowFind.val();
//         console.log(FirstRowText);
      
//       if(FirstRowText == 'Row of 2'){
//         hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2",1);
//       }
//       else if(FirstRowText == 'Row of 3'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3",1);
//       }
//       else if(FirstRowText == 'Row of 4'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of--4",1);
//       }
//        else if(FirstRowText == 'Row of 5'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-5",1);
//       }
//       else if(FirstRowText == 'Loveseat'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-2-loveseat",1);
//       }
//       else if(FirstRowText == 'Row of 3 - Loveseat Left'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-left",1);
//       }
//       else if(FirstRowText == 'Row of 3 - Loveseat Right'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-3-loveseat-right",1);
//       }
//      else if(FirstRowText == 'Row of 4 - Loveseat Left'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-left",1);
//       }
//       else if(FirstRowText == 'Row of 4 - Loveseat Right'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-right",1);
//       }
//       else if(FirstRowText == 'Row of 4 - Loveseat Center'){
//           hideFirstRow();
//          sketchfabAPIUtilityInstancetwo.setOpacity("1-row-of-4-loveseat-center",1);
//       }
//       else{
//         	$('.layout-iframe-container').removeClass('show-iframe');
//           console.log('row not avaialable');
//       }
//     });
    
    // second row
    $('.second-row').click( function(){
      
      function hideFirstRow(){
      	sketchfabAPIUtilityInstancetwo.setOpacity("2-single-row",0);
    	sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-2",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-2-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3-loveseat-left",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3-loveseat-right",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of--4",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-center",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-double-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-left",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5-set-of-3-center",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of--6",0);   
      }
      	
      
      

      FirstRowFind = $('form').find("input[name='properties[Second Row]']");
//             PrimaryColorFind = $('form').find("input[name='properties[" + PrimaryMaterialText + "]']");

      FirstRowText = FirstRowFind.val();
        console.log(FirstRowText);
      
      if(FirstRowText == 'Row of 2'){
        hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-2",1);
      }
      else if(FirstRowText == 'Row of 3'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3",1);
      }
      else if(FirstRowText == 'Row of 4'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of--4",1);
      }
       else if(FirstRowText == 'Row of 5'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-5",1);
      }
      else if(FirstRowText == 'Loveseat'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-2-loveseat",1);
      }
      else if(FirstRowText == 'Row of 3 - Loveseat Left'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3-loveseat-left",1);
      }
      else if(FirstRowText == 'Row of 3 - Loveseat Right'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-3-loveseat-right",1);
      }
     else if(FirstRowText == 'Row of 4 - Loveseat Left'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-left",1);
      }
      else if(FirstRowText == 'Row of 4 - Loveseat Right'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-right",1);
      }
      else if(FirstRowText == 'Row of 4 - Loveseat Center'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("2-row-of-4-loveseat-center",1);
      }
      else{
          console.log('row not avaialable');
      }
    });
    
    // second row
    $('.third-row').click( function(){
      
      function hideFirstRow(){
      	sketchfabAPIUtilityInstancetwo.setOpacity("3-single-row",0);
    	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-left",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-right",0);
      	sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of--4",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-center",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-double-loveseat",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-left",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-loveseat-left",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-loveseat-right",0);
        sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5-set-of-3-center",0);
		sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of--6",0);   
      }
      	
      
      

      FirstRowFind = $('form').find("input[name='properties[Third Row]']");
//             PrimaryColorFind = $('form').find("input[name='properties[" + PrimaryMaterialText + "]']");

      FirstRowText = FirstRowFind.val();
        console.log(FirstRowText);
      
      if(FirstRowText == 'Row of 2'){
        hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2",1);
      }
      else if(FirstRowText == 'Row of 3'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3",1);
      }
      else if(FirstRowText == 'Row of 4'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of--4",1);
      }
       else if(FirstRowText == 'Row of 5'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-5",1);
      }
      else if(FirstRowText == 'Loveseat'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-2-loveseat",1);
      }
      else if(FirstRowText == 'Row of 3 - Loveseat Left'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-left",1);
      }
      else if(FirstRowText == 'Row of 3 - Loveseat Right'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-3-loveseat-right",1);
      }
     else if(FirstRowText == 'Row of 4 - Loveseat Left'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-left",1);
      }
      else if(FirstRowText == 'Row of 4 - Loveseat Right'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-right",1);
      }
      else if(FirstRowText == 'Row of 4 - Loveseat Center'){
          hideFirstRow();
         sketchfabAPIUtilityInstancetwo.setOpacity("3-row-of-4-loveseat-center",1);
      }
      else{
          console.log('row not avaialable');
      }
    });
    
//     $('.console-config').click(function(){
      
// //       return false;
//       consoleConfigText = 'Default' 
//       consoleConfigFind = $('form').find("input[name='properties[Configuration]']");
//       consoleConfigText = consoleConfigFind.val();
//       console.log(consoleConfigText)
//       if(consoleConfigText == 'Row of 2'){
//         hideRowOf3();
//         showRowOf2();
//       }else if(consoleConfigText == 'Row of 3 with Dropdown'){
        
//       hideRowOf2();
//         showRowOf3();
//       }else{
//       	console.log('row dont exist');
//       }
    	       

//     });
    
	function hideRowOf3(){
      	sketchfabAPIUtilityInstance.setOpacity("cr3-accessories-holder",0);
    	sketchfabAPIUtilityInstance.setOpacity("cr3-seat-controller",0);
        sketchfabAPIUtilityInstance.setOpacity("cr3-center-light",0);
        sketchfabAPIUtilityInstance.setOpacity("cr3-console-color",0);
        sketchfabAPIUtilityInstance.setOpacity("cr3-dropdown-tray",0);
      	sketchfabAPIUtilityInstance.setOpacity("cr3-cup-holder",0);
        sketchfabAPIUtilityInstance.setOpacity("cr3-arm-lights",0);
        sketchfabAPIUtilityInstance.setOpacity("cr3-piping-color",0);
        sketchfabAPIUtilityInstance.setOpacity("cr3-primary-color",0);
        sketchfabAPIUtilityInstance.setOpacity("cr3-secondary-color",0);
		sketchfabAPIUtilityInstance.setOpacity("cr3-led-light-ground",0);
      }
      function showRowOf2(){
    	sketchfabAPIUtilityInstance.setOpacity("cr2-accessories-holder",1);
    	sketchfabAPIUtilityInstance.setOpacity("cr2-seat-controller",1);
//         sketchfabAPIUtilityInstance.setOpacity("cr2-center-light",1);
        sketchfabAPIUtilityInstance.setOpacity("cr2-console-color",1);
//         sketchfabAPIUtilityInstance.setOpacity("cr2-dropdown-tray",1);
      	sketchfabAPIUtilityInstance.setOpacity("cr2-cup-holder",1);
        sketchfabAPIUtilityInstance.setOpacity("cr2-arm-lights",0.07);
        sketchfabAPIUtilityInstance.setOpacity("cr2-piping-color",1);
        sketchfabAPIUtilityInstance.setOpacity("cr2-primary-color",1);
        sketchfabAPIUtilityInstance.setOpacity("cr2-secondary-color",1);
		sketchfabAPIUtilityInstance.setOpacity("cr2-led-light-ground",.7);
      }
      function showRowOf3(){
      	sketchfabAPIUtilityInstance.setOpacity("cr3-accessories-holder",1);
    	sketchfabAPIUtilityInstance.setOpacity("cr3-seat-controller",1);
        sketchfabAPIUtilityInstance.setOpacity("cr3-center-light",1);
        sketchfabAPIUtilityInstance.setOpacity("cr3-console-color",1);
        sketchfabAPIUtilityInstance.setOpacity("cr3-dropdown-tray",1);
      	sketchfabAPIUtilityInstance.setOpacity("cr3-cup-holder",1);
        sketchfabAPIUtilityInstance.setOpacity("cr3-arm-lights",0.07);
        sketchfabAPIUtilityInstance.setOpacity("cr3-piping-color",1);
        sketchfabAPIUtilityInstance.setOpacity("cr3-primary-color",1);
        sketchfabAPIUtilityInstance.setOpacity("cr3-secondary-color",1);
		sketchfabAPIUtilityInstance.setOpacity("cr3-led-light-ground",.7);
    
      }
      function hideRowOf2(){
      	sketchfabAPIUtilityInstance.setOpacity("cr2-accessories-holder",0);
    	sketchfabAPIUtilityInstance.setOpacity("cr2-seat-controller",0);
//         sketchfabAPIUtilityInstance.setOpacity("cr2-center-light",0);
        sketchfabAPIUtilityInstance.setOpacity("cr2-console-color",0);
//         sketchfabAPIUtilityInstance.setOpacity("cr2-dropdown-tray",0);
      	sketchfabAPIUtilityInstance.setOpacity("cr2-cup-holder",0);
        sketchfabAPIUtilityInstance.setOpacity("cr2-arm-lights",0);
        sketchfabAPIUtilityInstance.setOpacity("cr2-piping-color",0);
        sketchfabAPIUtilityInstance.setOpacity("cr2-primary-color",0);
        sketchfabAPIUtilityInstance.setOpacity("cr2-secondary-color",0);
		sketchfabAPIUtilityInstance.setOpacity("cr2-led-light-ground",0);
      }
    
    function getPrimaryColor(){
    	 PrimaryMaterialText = 'Default'
        PrimaryMaterialFind = $('form').find("input[name='properties[Primary Material]']");
        PrimaryMaterialText = PrimaryMaterialFind.val();
      
      
         PrimaryColorText = 'Default'
        PrimaryColorFind = $('.first-primary').find("input");

        color = PrimaryColorFind.val();
    }
    
    function getPrimaryColorTopGrain(){
//     	 PrimaryMaterialText = 'Default'
//         PrimaryMaterialFind = $('form').find("input[name='properties[Primary Material]']");
//         PrimaryMaterialText = PrimaryMaterialFind.val();
      
      
         PrimaryColorText = 'Default'
        PrimaryColorFind = $('.first-primary').find("input");

        color = PrimaryColorFind.val();
    }
    
    function getSecondary(){
//     	 SecondaryMaterialText = 'Default'
      SecondaryMaterialFind = $('form').find("input[name='properties[Two Tone Material]']");
      SecondaryMaterialText = SecondaryMaterialFind.val();
      
//       console.log(SecondaryMaterialText);

    }
    
    function getSecondaryColor(){
    	 SecondaryMaterialText = 'Default'
      SecondaryMaterialFind = $('form').find("input[name='properties[Two Tone Material]']");
      SecondaryMaterialText = SecondaryMaterialFind.val();
      
//       console.log(SecondaryMaterialText);
      
       TwoToneMaterialText = 'Not Selected'
       TwoToneMaterialFind = $('form').find("input[name='properties[Two Tone Material]']");
      TwoToneMaterialText = TwoToneMaterialFind.val();
      TwoToneColorText = 'Not Selected'
      TwoToneColorFind = $('.first-secondary').find("input");
      color = TwoToneColorFind.val();
//       console.log(TwoToneColorText);
    }
    
    function getPiping(){
    	PipingMaterialText = 'Default'
      PipingMaterialFind = $('.piping-material').find("input");
      PipingMaterialText = PipingMaterialFind.val();
      
//       console.log(PipingMaterialText);
     
    }
    
    function getPipingColor(){
    	 PipingColorText = 'Default'
        PipingColorFind = $('.first-piping').find("input");
        color = PipingColorFind.val();
//         console.log(PipingColorText);
    }
    
    
    function upc(color, item, index) {		
      color = color.split(/\s/).join('');
      if(color.length){
//         console.log(color);
        if(color == 'ElegantWhite'|| color == 'SandyBeige'){
          sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
          sketchfabAPIUtilityInstance.setFactor("primary_color",sketchfabAPIUtilityInstance.CavityPBR,0.35);
          sketchfabAPIUtilityInstance.setFactor("console_color",sketchfabAPIUtilityInstance.CavityPBR,0.35);
        }else if(color == 'RoastChestnut'|| color == 'VenetianRosso' || color == 'FormulaRosso' || color == 'Cognac'){
          sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
          sketchfabAPIUtilityInstance.setFactor("primary_color",sketchfabAPIUtilityInstance.CavityPBR,.5);
          sketchfabAPIUtilityInstance.setFactor("console_color",sketchfabAPIUtilityInstance.CavityPBR,0.5);
        }else{
          sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
          sketchfabAPIUtilityInstance.setFactor("primary_color",sketchfabAPIUtilityInstance.CavityPBR,.95);
          sketchfabAPIUtilityInstance.setFactor("console_color",sketchfabAPIUtilityInstance.CavityPBR,0.95);
        }
      }else{
        color = 'MidnightBlack';
        sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",MidnightBlack);
        sketchfabAPIUtilityInstance.setFactor("primary_color",sketchfabAPIUtilityInstance.CavityPBR,.95);
          sketchfabAPIUtilityInstance.setFactor("console_color",sketchfabAPIUtilityInstance.CavityPBR,0.95);
      }

      if(productTitle == 'Oslo 3D' || productTitle == 'Oslo Console Edition 3D' || productTitle == 'Oslo Dropdown Center 3D' || productTitle == 'Oslo XL 3D'){     
        if(color == 'MidnightBlack'){
//           console.log('black it is!!!!!!!!!');
          sketchfabAPIUtilityInstance.setMaterialUIDPending("primary_color",sketchfabAPIUtilityInstance.AlbedoPBR,"Leather_albedo");
          sketchfabAPIUtilityInstance.applyMaterialUIDPending("Leather_albedo");
        }

      }
      

    }
    function usc(color, item, index) {
      color = color.split(/\s/).join('');
      if(color.length){
//         console.log(color);
        if(color == 'ElegantWhite'|| color == 'SandyBeige'){
          sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));     
          sketchfabAPIUtilityInstance.setFactor("secondary_color",sketchfabAPIUtilityInstance.CavityPBR,0.35);

        }else if(color == 'RoastChestnut'|| color == 'VenetianRosso' || color == 'FormulaRosso' || color == 'Cognac' || color == 'CharcalGrey'){
          sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
          sketchfabAPIUtilityInstance.setFactor("secondary_color",sketchfabAPIUtilityInstance.CavityPBR,.5);
        }else{
          sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
          sketchfabAPIUtilityInstance.setFactor("secondary_color",sketchfabAPIUtilityInstance.CavityPBR,.8);
        }
      }else{
        color = 'MidnightBlack';
        sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
                  sketchfabAPIUtilityInstance.setFactor("secondary_color",sketchfabAPIUtilityInstance.CavityPBR,.8);

      }
      if(productTitle == 'Oslo 3D' || productTitle == 'Oslo Console Edition 3D' || productTitle == 'Oslo Dropdown Center 3D' || productTitle == 'Oslo XL 3D'){     
        if(color == 'MidnightBlack'){
//           console.log('black it is!!!!!!!!!');
          sketchfabAPIUtilityInstance.setMaterialUIDPending("secondary_color",sketchfabAPIUtilityInstance.AlbedoPBR,"Leather_Tone2_albedo");
          sketchfabAPIUtilityInstance.applyMaterialUIDPending("Leather_Tone2_albedo");
        }

            	secondaryPipingColor.forEach(function(item, index){
              		uppc(color, item, index);

          		});
      }

    }
    
    function uppc(color, item, index) {
      color = color.split(/\s/).join('');
      if(color.length){
        console.log(color);
        sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));    	
      }else{
        color = 'MidnightBlack';
        sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
      }
      
    }
    
    function hidePiping(item, index) {
        sketchfabAPIUtilityInstance.setOpacity(item,0);      	
    }
    
    function showPiping(item, index) {
        sketchfabAPIUtilityInstance.setOpacity(item,1);
//       	console.log('showpiping');
      	
    }
    
    function cupHolderText(){
    	CupHolderText = 'Default'
      CupHolderFind = $('form').find("input[name='properties[Cup Holder]']");
      CupHolderText = CupHolderFind.val();
    }
    
    function uch(c, m, s, g,item) {
       
//       	cupHolderMaterials.forEach(function(item, index){
          sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",c);
//         sketchfabAPIUtilityInstance.getChannelObject(sketchfabAPIUtilityInstance.getMaterialObject("material_name_here"),sketchfabAPIUtilityInstance.AlbedoPBR);
        sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.MetalnessPBR ,m);
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.SpecularF0 ,s);
        sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR ,g);
//         });
    }
    
    function hbg(){
      console.log('bg');
    	sketchfabAPIUtilityInstance.setOpacity("Material.002",0);
    }
    
    $('.first-primary').click( function(){

      getPrimaryColor();
      
      
      if(type == 'Advanced'){
        getSecondary();
      getPiping();
      	 if(SecondaryMaterialText.length){
        primaryMaterials.forEach(function(item, index){
          upc(color, item, index);
        });
      }else{
        primaryMaterials.forEach(function(item, index){
          upc(color, item, index);
        });
        secondaryMaterials.forEach(function(item, index){
          usc(color, item, index);
        });
      }

      if(productTitle == 'Oslo 3D' || productTitle == 'Oslo Console Edition 3D' || productTitle == 'Oslo Dropdown Center 3D' || productTitle == 'Oslo XL 3D'){
        //           console.log(PipingMaterialText);
        //           console.log(PipingMaterialText.length);
        if(!PipingMaterialText.length){
          primaryPipingColor.forEach(function(item, index){
            uppc(color, item, index);
          });
        }
        if(!SecondaryMaterialText.length){
          secondaryPipingColor.forEach(function(item, index){
            uppc(color, item, index);
          });
        }  	
      }
      }
      if(type == 'Standard'){

			primaryMaterials.forEach(function(item, index){
          upc(color, item, index);
        });
        
      }

      if(productTitle == 'Oslo 3D' || productTitle == 'Oslo Console Edition 3D' || productTitle == 'Oslo Dropdown Center 3D' || productTitle == 'Oslo XL 3D'){
        //           console.log(PipingMaterialText);
        //           console.log(PipingMaterialText.length);
        if(!PipingMaterialText.length){
          primaryPipingColor.forEach(function(item, index){
            uppc(color, item, index);
          });
        }
        if(!SecondaryMaterialText.length){
          secondaryPipingColor.forEach(function(item, index){
            uppc(color, item, index);
          });
        }  	
      }
      
      //       console.log(color);
      //       console.log(SecondaryMaterialText.length);
     

    });
    
    $('.secondary-material').click( function(){

      getSecondary();
      getPiping();
      if(SecondaryMaterialText.length){
        
        getSecondaryColor();
        secondaryMaterials.forEach(function(item, index){
      		usc(color, item, index);
      	});
      }else{
        getPrimaryColor();
        secondaryMaterials.forEach(function(item, index){
      		usc(color, item, index);
      	});
        
      }
      
      
    });
    
    $('.first-secondary').click( function(){
			getSecondary();
      		getPiping();
            getSecondaryColor();       
 
    secondaryMaterials.forEach(function(item, index){
      		usc(color, item, index);
      	});

      
      
    });
     
//     $('.piping-material').click( function(){
	$('.piping-material').bind('touchstart click', function(){
//       alert('piping clicked');
      setTimeout(function(){  
      	 getPiping();
      if(PipingMaterialText.length){
        getPipingColor();
        if(PipingMaterialText.length){
        
        }
        pipingMaterials.forEach(function(item, index){
      		uppc(color, item, index);
          	showPiping(item, 
                      );
      	});
        
        
      }else{
        pipingMaterials.forEach(function(item, index){
      		
          	hidePiping(item, index);
      	});
        getPrimaryColor();
        primaryPipingColor.forEach(function(item, index){
              uppc(color, item, index);
            });
      }  
      }, 500);
     
      
    });
      
    $('.first-piping').click( function(){
       getPiping();
      if(PipingMaterialText.length){
        getPipingColor();
        pipingMaterials.forEach(function(item, index){
      		uppc(color, item, index);
          	showPiping(item, index);
      	});
        
        
      }else{
        pipingMaterials.forEach(function(item, index){
      		
          	hidePiping(item, index);
      	});
        getPrimaryColor();
        primaryPipingColor.forEach(function(item, index){
              uppc(color, item, index);
            });
      }  
      getPipingColor();
      pipingMaterials.forEach(function(item, index){
          uppc(color, item, index);
        });
     
      });
 
     $('.cup-holder').click( function(){

      cupHolderText();

        console.log(CupHolderText);
      
      if(CupHolderText == 'Standard'){
 		c = '#2b2b2b';
        m = 1;
        s = 1;
        g = 0.5;
       cupHolderMaterials.forEach(function(item, index){
          	uch(c, m, s, g,item)
        });

        
//         sketchfabAPIUtilityInstance.setColor(ConsoleCupHolderMaterial2,sketchfabAPIUtilityInstance.AlbedoPBR, "color",'#ACACAC');
      }else if(CupHolderText == 'Chrome'){
     		
        
        c = '#2b2b2b';
        m = 1;
        s = 1;
        g = 0.5;
       cupHolderMaterials.forEach(function(item, index){
          	uch(c, m, s, g,item)
        });

// 		 sketchfabAPIUtilityInstance.setFactor(CupHolderMaterial,sketchfabAPIUtilityInstance.MetalnessPBR ,1);
//                 sketchfabAPIUtilityInstance.setFactor(CupHolderMaterial,sketchfabAPIUtilityInstance.SpecularF0 ,1);
//         sketchfabAPIUtilityInstance.setFactor(CupHolderMaterial,sketchfabAPIUtilityInstance.GlossinessPBR ,.5);
      }
      else if(CupHolderText == 'Black Chrome'){
     
 		c = '#5d5d5d';
        m = 1;
        s = 1;
        g = 1;
       cupHolderMaterials.forEach(function(item, index){
          	uch(c, m, s, g,item)
        });
      }
      else if(CupHolderText == 'Gold'){
        
		 c = '#ffbc00';
        m = 1;
        s = 1;
        g = 0.85;
       cupHolderMaterials.forEach(function(item, index){
          	uch(c, m, s, g,item)
        });
      }else if(CupHolderText == 'Silver'){
       
		 c = '#b3b3b3';
        m = 0.7;
        s = 1;
        g = 0.8;
       cupHolderMaterials.forEach(function(item, index){
          	uch(c, m, s, g,item)
        });
        
      }
      else{
          c = '#2b2b2b';
          m = 1;
          s = 1;
          g = 0.5;
         cupHolderMaterials.forEach(function(item, index){
              uch(c, m, s, g,item)
          });
          console.log('color not avaialable');
      }
      });
    
    
    
  },1500);
           };
//                  currentSlectedMaterial = materialName;
//                  sketchfabAPIUtility.resetColor(currentSlectedMaterial, sketchfabAPIUtility.DiffusePBR)

//       sketchfabAPIUtilityInstancetwo = new SketchfabAPIUtility('a016fe9454094bcfa457dbdde5b04830', document.getElementById("api-frame2"), {"autostart": 1 });
//       sketchfabAPIUtilityInstancetwo.addEventListener(sketchfabAPIUtilityInstancetwo.EVENT_INITIALIZED, onSketchfabUtilityReady);
//       sketchfabAPIUtilityInstancetwo.create();
           
//       function onSketchfabUtilityReady(){
//          sketchfabAPIUtilityInstancetwo.removeEventListener(sketchfabAPIUtilityInstancetwo.EVENT_INITIALIZED, onSketchfabUtilityReady);
//          //some code here..
//       };       

});
// windows load end