$(window).load(function() {


  var initSketchFab = false;

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
  var Gold = '#FFD700';
  var Silver = '#F5F5F5';
  var LimeGreen = '#7CFC00';
  var Purple = '#7B68EE';


  // text colors

  var GlisteningGold = '#D4AF37';
  var ShimmerySilver = '#c0c0c0';
  var DeepBlack = '#000000';
  var SteelGrey = '#2c3539';
  var EarthBrown = '#4A2B22';
  var RichBurgundy = '#5A0003';
  var VividOrange = '#ff5f00';
  var SolidRed = '#DD0000';
  var RoyalPurple = '#4C0070';
  var DeepBlue = '#000080';
  var LimeGreen = '#32cd32';
  var TropicTurquiose = '#54dbfd';
  var LightTan = '#ffd6a1';
  var BrightWhite = '#ffffff';

  var PrimaryMaterial = 'primary_color';
  var SecondaryMaterial = 'secondary_color';
  var PipingMaterial = 'piping_color';

  var startingCameraPosition;
  var startingCameraTarget;
  var cameraPositionToHeadrest = false;

  var color;
  var TextColor;
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


  var headrestCameraPositionX;
  var headrestCameraPositionY;
  var headrestCameraPositionZ;

  var headrestCameraTargetX;
  var headrestCameraTargetY;
  var headrestCameraTargetZ;

  var defaultCameraZoom;



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
    output = liveprice.replace("$", "");
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
    $('.base-price').text('$' + calcBaseModel);
    $('.accessories-price').text('$' + calcAccessories);
    $('.feature-price').text('$' + calcFeatures);

    //     console.log(selectTrayTable);
    //     console.log(calcBaseModel);
    //     console.log(calcFeatures)
    //     console.log(tt);
    //     console.log(th);
    //     console.log(wgc);
    //     console.log(calcAccessories);
    //     console.log(oneCalcFeatures);
    //     console.log(calcFeatures);
    //     console.log(totalPriceOutput);
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
      
      
//       -0.15173091739666777 3d-customizer.js:1610:19
// -50.48605057532429 3d-customizer.js:1611:19
// 101.2875013571776 3d-customizer.js:1612:19
// 0.3732316603 3d-customizer.js:1614:19
// 28.870288430576643 3d-customizer.js:1615:19
// 91.17335908644876
      
      
      
      headrestCameraPositionX = -0.15173091739666777;
      headrestCameraPositionY = -50.48605057532429;
      headrestCameraPositionZ = 101.2875013571776;

      headrestCameraTargetX = 0.3732316603;
      headrestCameraTargetY = 28.870288430576643;
      headrestCameraTargetZ = 91.17335908644876;
      //             pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
    }
    else if(productTitle == 'Syracuse 3D'){
      viewerLink = '0cbcc41b34e248ffbab48e9a11a2eee5';
      type = 'Standard';
      primaryMaterials = ["primary_color"];
      //             pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];
      
      
//       -1.0557369636822616 3d-customizer.js:1654:19
// -52.48943345451249 3d-customizer.js:1655:19
// 98.52550481082885 3d-customizer.js:1656:19
// -1.1510753775499611 3d-customizer.js:1658:19
// 26.8685846452 3d-customizer.js:1659:19
// 88.4113625401
      
       headrestCameraPositionX = -1.0557369636822616;
      headrestCameraPositionY = -52.48943345451249;
      headrestCameraPositionZ = 98.52550481082885;

      headrestCameraTargetX = -1.1510753775499611;
      headrestCameraTargetY = 26.8685846452;
      headrestCameraTargetZ = 88.4113625401;
    }
    else if(productTitle == 'Tuscany 3D'){
      viewerLink = 'b99dce8596c04be891b120081bdbbffb'; 
      //                   	viewerLink = 'ed05e3986f804f188c5577056078150c'; 

      type = 'Advanced';
      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];

      headrestCameraPositionX = 0.22208501007975828;
      headrestCameraPositionY = -55.18838271277019;
      headrestCameraPositionZ = 94.40402546670778;

      headrestCameraTargetX = 0.3732316603;
      headrestCameraTargetY = 24.1695487170345;
      headrestCameraTargetZ = 84.28988319597893;
    }
    else if(productTitle == 'Tuscany XL 3D'){
      viewerLink = '9d341b4ba1774746aa930730b3fb88ff'; 
      //                   	viewerLink = 'ed05e3986f804f188c5577056078150c'; 

      type = 'Advanced';

      headrestCameraPositionX = 0.22208501007975828;
      headrestCameraPositionY = -55.18838271277019;
      headrestCameraPositionZ = 94.40402546670778;

      headrestCameraTargetX = 0.3732316603;
      headrestCameraTargetY = 24.1695487170345;
      headrestCameraTargetZ = 84.28988319597893;

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

      //       -49.47179678091417 3d-customizer.js:1476:19
      // -41.62299593802701 3d-customizer.js:1477:19
      // 101.44820363042669 3d-customizer.js:1478:19
      // -49.84092763425782 3d-customizer.js:1480:19
      // 37.7342209268591 3d-customizer.js:1481:19
      // 91.33406135969784


      headrestCameraPositionX = -49.47179678091417;
      headrestCameraPositionY = -55.18838271277019;
      headrestCameraPositionZ = 101.44820363042669;

      headrestCameraTargetX = -49.84092763425782;
      headrestCameraTargetY = 37.7342209268591;
      headrestCameraTargetZ = 91.33406135969784;
      //                   	viewerLink = '010e2e3350664bc0a9aaef11a3523ca5';



      type = 'Advanced';
    }
    else if(productTitle == 'Oxford Dropdown Center 3D'){
      viewerLink = '4ddeb11a686f474bb034a1e98de16128';
      primaryMaterials = ["primary_color", "primary-center-color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];

      // -60.66474809141396 3d-customizer.js:1483:19
      // -45.933048120808536 3d-customizer.js:1484:19
      // 99.86972049404329 3d-customizer.js:1485:19
      // -60.41162529673305 3d-customizer.js:1487:19
      // 33.4246235623896 3d-customizer.js:1488:19
      // 89.75557822331444

      headrestCameraPositionX = -60.66474809141396;
      headrestCameraPositionY = -45.933048120808536;
      headrestCameraPositionZ = 99.86972049404329;

      headrestCameraTargetX = -60.41162529673305;
      headrestCameraTargetY = 33.4246235623896;
      headrestCameraTargetZ = 89.75557822331444;


      type = 'Advanced';
    }
    else if(productTitle == 'Tuscany Console Edition 3D'){
      viewerLink = '7b63f177a388441384715878ecf90345';
      primaryMaterials = ["primary_color", "console_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];


      //       -44.92066801076871 3d-customizer.js:1532:19
      // -50.35593719026052 3d-customizer.js:1533:19
      // 99.27083773842786 3d-customizer.js:1534:19
      // -45.23603320730889 3d-customizer.js:1536:19
      // 29.00151155225052 3d-customizer.js:1537:19
      // 89.15669546769901

      headrestCameraPositionX = -44.92066801076871;
      headrestCameraPositionY = -50.35593719026052;
      headrestCameraPositionZ = 99.27083773842786;

      headrestCameraTargetX = -45.23603320730889;
      headrestCameraTargetY = 29.00151155225052;
      headrestCameraTargetZ = 89.15669546769901;

      type = 'Advanced';
    }
    else if(productTitle == 'Tuscany Dropdown Center 3D'){
      viewerLink = '1d067b61671541b1a7f1d10161b6817c';
      primaryMaterials = ["primary_color", "primary-center-color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];


      //       -62.36642511670169 3d-customizer.js:1548:19
      // -48.27670956610399 3d-customizer.js:1549:19
      // 104.62618204352923 3d-customizer.js:1550:19
      // -60.73585936834528 3d-customizer.js:1552:19
      // 31.064612463893372 3d-customizer.js:1553:19
      // 94.51203977280038


      headrestCameraPositionX = -62.36642511670169;
      headrestCameraPositionY = -48.27670956610399;
      headrestCameraPositionZ = 104.62618204352923;

      headrestCameraTargetX = -60.73585936834528;
      headrestCameraTargetY = 31.064612463893372;
      headrestCameraTargetZ = 94.51203977280038;


      type = 'Advanced';
    }
    else if(productTitle == 'Oslo 3D'){
      viewerLink = 'a7026c1c83d947a295423f8ef60b8439';

      type = 'Advanced';

      headrestCameraPositionX = 1.7807646732545763;
      headrestCameraPositionY = -30.321755571896674;
      headrestCameraPositionZ = 99.08090892776525;

      headrestCameraTargetX = 1.9151593818774684;
      headrestCameraTargetY = 29.196649220310157;
      headrestCameraTargetZ = 91.49530222471861;



      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color", "piping_primary_color"];
      primaryPipingColor = ["piping_primary_color"];
      secondaryPipingColor = ["piping_secondary_color"];
      cupHolderMaterials = ["cup_holder"];

    }
    else if(productTitle == 'Oslo 3D Logo Test'){
      viewerLink = 'e7dd7228669e4c14bcb6a126e1f04a29';
      //                   viewerLink = 'e718304d515641789fb290cb414b6059';

      //       1.7807646732545763 3d-customizer.js:1386:19
      // -30.321755571896674 3d-customizer.js:1387:19
      // 99.08090892776525 3d-customizer.js:1388:19
      // 1.9151593818774684 3d-customizer.js:1390:19
      // 29.196649220310157 3d-customizer.js:1391:19
      // 91.49530222471861




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


      headrestCameraPositionX = 1.7807646732545763;
      headrestCameraPositionY = -30.321755571896674;
      headrestCameraPositionZ = 99.08090892776525;

      headrestCameraTargetX = 1.9151593818774684;
      headrestCameraTargetY = 29.196649220310157;
      headrestCameraTargetZ = 91.49530222471861;

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


      //       -61.39146910885 3d-customizer.js:1516:19
      // -50.0323674076638 3d-customizer.js:1517:19
      // 104.23961537973277 3d-customizer.js:1518:19
      // -61.24832137580135 3d-customizer.js:1520:19
      // 29.294230128999246 3d-customizer.js:1521:19
      // 94.1292368808018

      headrestCameraPositionX = -61.39146910885;
      headrestCameraPositionY = -50.0323674076638;
      headrestCameraPositionZ = 104.23961537973277;

      headrestCameraTargetX = -61.24832137580135;
      headrestCameraTargetY = 29.294230128999246;
      headrestCameraTargetZ = 94.1292368808018;

      primaryMaterials = ["primary_color"];
      secondaryMaterials = ["secondary_color"];
      pipingMaterials = ["piping_color", "piping_primary_color"];
      primaryPipingColor = ["piping_primary_color"];
      secondaryPipingColor = ["piping_secondary_color"];
      cupHolderMaterials = ["cup_holder"];

    }
    else if(productTitle == 'Oslo Console Edition 3D'){
      viewerLink = '82b4f64c0b27437d98b315660ec45819';


      //       -44.910564966681825 3d-customizer.js:1499:19
      // -54.54626234984593 3d-customizer.js:1500:19
      // 102.53777338215716 3d-customizer.js:1501:19
      // -45.871280522494075 3d-customizer.js:1503:19
      // 24.80599755337468 3d-customizer.js:1504:19
      // 92.4236311114283


      headrestCameraPositionX = -44.910564966681825;
      headrestCameraPositionY = -54.54626234984593;
      headrestCameraPositionZ = 102.53777338215716;

      headrestCameraTargetX = -45.871280522494075;
      headrestCameraTargetY = 24.80599755337468;
      headrestCameraTargetZ = 92.4236311114283;

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
      
      
//           0.5650921327743146 3d-customizer.js:1636:19
//     -55.392805429355356 3d-customizer.js:1637:19
//     105.18746162340776 3d-customizer.js:1638:19
//     0.3732316603 3d-customizer.js:1640:19
//     23.965038012150522 3d-customizer.js:1641:19
//     95.07331935267891
      
         headrestCameraPositionX = 0.5650921327743146;
      headrestCameraPositionY = -55.392805429355356;
      headrestCameraPositionZ = 105.18746162340776;

      headrestCameraTargetX = 0.3732316603;
      headrestCameraTargetY = 23.965038012150522;
      headrestCameraTargetZ = 95.07331935267891;
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

  //   setTimeout(function(){
  //     if(initSketchFab == false){
  //       $('.loadingScreen-customizer .fallbackoption').show();

  //     }else{
  //     	return false;
  //     }
  // //       $('.loadingScreen-customizer').remove();
  //     }, 7500);

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
      initSketchFab = true;
    }, 1000);

    sketchfabAPIUtilityInstance.api.getCameraLookAt(function(err, camera) {

      startingCameraPosition = camera.position;

      startingCameraTarget = camera.target;


      //     window.console.log(camera.position); // [x, y, z]
      //     window.console.log(camera.target); // [x, y, z]

      console.log(startingCameraPosition[0]);
      console.log(startingCameraPosition[1]);
      console.log(startingCameraPosition[2]);

      console.log(startingCameraTarget[0]);
      console.log(startingCameraTarget[1]);
      console.log(startingCameraTarget[2]);






    });

    //     sketchfabAPIUtilityInstance.api.getCameraConstraint( function( err, camera ){
    //          console.log('zooooooom level');
    // 				console.log( camera.zoom );
    // 				console.log( camera.pitch );
    // 				console.log( camera.yaw );

    // 				api.setCameraConstraint(
    // 				// Limit Zoom
    // 				[ 5, 11.6],
    // 				// Limit vertical rotation
    // 				[ 89, 0],
    // 				// Limit horizontal rotation
    // 				[ 315, 156],
    // 				// Near clipping distance
    // 				0.005
    // 				);
    // 			} );


    //         	alert('secene loaded');

    $('body').on('mw_apo', function(e, a) {
      if (a === 'end-initialize') { // options container appended to the DOM
        console.log('INITIALIZEDDD!!!!');
      }
    });


    setTimeout(function(){  
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

      function getTextColor(){
        TextColor = 'Default'
        TextColorFind = $('.custom-font-color').find("input");
        TextColor = TextColorFind.val();
        //         console.log(PipingColorText);
      }


      function setDefaultCameraPosition(){






        if(cameraPositionToHeadrest == true){

          
          cameraPositionToHeadrest = false;
          setTimeout(function(){  
            
            let options = {
            position: [startingCameraPosition[0], startingCameraPosition[1], startingCameraPosition[2]],
            target: [startingCameraTarget[0], startingCameraTarget[1], startingCameraTarget[2]],
            zoomIn: 130,
//             zoomOut: 220,

          }

          sketchfabAPIUtilityInstance.api.setCameraConstraints(options, function(err) {
            if (!err) {
              window.console.log('Set camera constraints');
            }else{
              window.console.log('error setting camera constraints');
            }
          });
            
            cameraPositionToHeadrest = false;
            sketchfabAPIUtilityInstance.api.setCameraLookAt([startingCameraPosition[0], startingCameraPosition[1], startingCameraPosition[2]], [startingCameraTarget[0], startingCameraTarget[1], startingCameraTarget[2]], .2, function(err) {
              //           sketchfabAPIUtilityInstance.api.setCameraLookAt([px, py, pz], [tx, ty, tz], .2, function(err) {
              if (!err) {


                //               window.console.log('Camera moved');
              }
            });
          }, 400);
          setTimeout(function(){  
            cameraPositionToHeadrest = false;
            sketchfabAPIUtilityInstance.api.setCameraLookAt([startingCameraPosition[0], startingCameraPosition[1], startingCameraPosition[2]], [startingCameraTarget[0], startingCameraTarget[1], startingCameraTarget[2]], .2, function(err) {
              //           sketchfabAPIUtilityInstance.api.setCameraLookAt([px, py, pz], [tx, ty, tz], .2, function(err) {
              if (!err) {

              }
            });
          }, 200);

        }
      }

      function setHeadrestCameraPosition(){


        cameraPositionToHeadrest = true;

        //                 {
        //            position: [0, -5, 1.7],
        //            target: [0, 0, 0]
        //            fov: 45,
        //            nearFarRatio: 0.005,
        //            useCameraConstraints: true,
        //            usePanConstraints: true,
        //            useZoomConstraints: false,
        //            usePitchConstraints: false,
        //            useYawConstraints: false,
        //            zoomIn: 0,
        //            zoomOut: 34,
        //            left: -Math.PI,
        //            right: Math.PI,
        //            up: Math.PI/2,
        //            down: -Math.PI/2
        //         }

        let options = {
          position: [headrestCameraPositionX, headrestCameraPositionY, headrestCameraPositionZ],
          target: [headrestCameraTargetX, headrestCameraTargetY, headrestCameraTargetZ],
          zoomIn: 60,
        }

        sketchfabAPIUtilityInstance.api.setCameraConstraints(options, function(err) {
          if (!err) {
            window.console.log('Set camera constraints');
          }else{
            window.console.log('error setting camera constraints');
          }
        });

        sketchfabAPIUtilityInstance.api.setCameraEasing('easeLinear');


        sketchfabAPIUtilityInstance.api.setCameraLookAt([headrestCameraPositionX, headrestCameraPositionY, headrestCameraPositionZ], [headrestCameraTargetX, headrestCameraTargetY, headrestCameraTargetZ], .3, function(err) {
          if (!err) {
            window.console.log('Camera moved');
          }
        });
        setTimeout(function(){  
          sketchfabAPIUtilityInstance.api.setCameraLookAt([headrestCameraPositionX, headrestCameraPositionY, headrestCameraPositionZ], [headrestCameraTargetX, headrestCameraTargetY, headrestCameraTargetZ], .3, function(err) {
            if (!err) {
              window.console.log('Camera moved');
            }
          });
        }, 290);
        setTimeout(function(){  
          sketchfabAPIUtilityInstance.api.setCameraLookAt([headrestCameraPositionX, headrestCameraPositionY, headrestCameraPositionZ], [headrestCameraTargetX, headrestCameraTargetY, headrestCameraTargetZ], .3, function(err) {
            if (!err) {
              window.console.log('Camera moved');
            }
          });
        }, 590);
        setTimeout(function(){  
          sketchfabAPIUtilityInstance.api.setCameraLookAt([headrestCameraPositionX, headrestCameraPositionY, headrestCameraPositionZ], [headrestCameraTargetX, headrestCameraTargetY, headrestCameraTargetZ], .3, function(err) {
            if (!err) {
              window.console.log('Camera moved');





            }
          });

        }, 890);








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

      function updateText(){
        getTextColor();
        TextColor = TextColor.split(/\s/).join('');
        //         console.log(TextColor);
        //         console.log('text colorrrr enddd!!!!!');


        var finalFontSize

        var finalText = $('.custom-text input').val();
        var finalFont = $('.custom-font-select input').val();
        var finalColor = $('.custom-font-color input').val();

        var finalTextCount = finalText.length;


        //         finalFontSize = '192px ';


        //         if(finalTextCount > 7){
        //           finalFontSize = '108px ';
        //         }

        //         if(finalTextCount > 13){
        //           finalFontSize = '72px ';
        //         }

        //         if(finalTextCount > 7 && finalTextCount < 14){
        //           finalFontSize = '36px';
        //         }else if(finalTextCount > 13){
        //           finalFontSize = '24px ';
        //         }else{
        //           finalFontSize = '64px ';
        //         }

        if(finalTextCount > 7 && finalTextCount < 14){
          finalFontSize = '108px ';
        }else if(finalTextCount > 13){
          finalFontSize = '72px ';
        }else{
          finalFontSize = '192px ';
        }

        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //         ctx.width = ctx.width;
        ctx.font = "bold " + finalFontSize + finalFont;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; 
        ctx.fillStyle = eval(TextColor);
        ctx.fillText(finalText, 450, 450);
        var dataURLText = canvas.toDataURL();

        sketchfabAPIUtilityInstance.addTexture(dataURLText,"logo_1",false);
        sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.AlbedoPBR,"logo_1");
        sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,"logo_1");
        sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,1);
      }



      //     function readURL(input) {
      //             if (input.files && input.files[0]) {
      //                 var reader = new FileReader();

      //                 reader.onload = function (e) {
      //                     $('#blah')
      //                         .attr('src', e.target.result)
      //                         .width(100)
      //                         .height(auto);
      //                 };

      //                 reader.readAsDataURL(input.files[0]);
      //             }
      //         }
      $('body').on('mw_apo', function(e, a) {
        if (a === 'end-initialize') { // options container appended to the DOM
          // your code here
          console.log('advanced product options loaded!!!!!!!!!!!!!!!!!!!!!!');
        }
      });

      $('.custom-text input').keypress(function(e) {
        var tval = $('.custom-text input').val(),
            tlength = tval.length,
            set = 20,
            remain = parseInt(set - tlength);
        $('p span.remain-characters').text(remain);
        if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
          $('textarea').val((tval).substring(0, tlength - 1));
          return false;
        }
      })





      $('.custom-select-embroidery').bind('touchstart click', function(){
        console.log('yo');
        setTimeout(function(){

          if($('.custom-select-embroidery input').val() == 'Custom Logo'){

            setHeadrestCameraPosition();

            sketchfabAPIUtilityInstance.addTexture("https://cdn.shopify.com/s/files/1/0069/9373/9831/files/logo-preview.png?v=1624417760","logo_1",false);
            sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.AlbedoPBR,"logo_1");
            sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,"logo_1");
            setTimeout(function(){
              sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,1);
            }, 100);
            //             $('.embroidery-preview-options').show();
            $('.embroidery-preview-options').hide();
          }else if($('.custom-select-embroidery input').val() == 'Personalized Text'){

            setHeadrestCameraPosition();

            $('.embroidery-preview-options').show();

          }else{

            setDefaultCameraPosition();

            $('.embroidery-preview-options').hide();
            sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,0);

          }
        }, 100);

      });
      $('.get-camera-info').click(function(){
        sketchfabAPIUtilityInstance.api.getCameraLookAt(function(err, camera) {

          //       startingCameraPosition = camera.position;

          //       startingCameraTarget = camera.target;


          //     window.console.log(camera.position); // [x, y, z]
          //     window.console.log(camera.target); // [x, y, z]

          console.log(camera.position[0]);
          console.log(camera.position[1]);
          console.log(camera.position[2]);

          console.log(camera.target[0]);
          console.log(camera.target[1]);
          console.log(camera.target[2]);



        });
      });

      $('.custom-text input').on('input',function(e){
        updateText();
      });


      $('.logo-preview').bind('touchstart click', function(){
        if($('.custom-select-embroidery input').val() == 'Custom Logo'){

          setHeadrestCameraPosition();

          sketchfabAPIUtilityInstance.addTexture("https://cdn.shopify.com/s/files/1/0069/9373/9831/files/logo-preview.png?v=1624417760","logo_1",false);
          sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.AlbedoPBR,"logo_1");
          sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,"logo_1");
          setTimeout(function(){
            sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,1);
          }, 100);


          //      readURL($('form input').files[0]);
          //                      var reader = new FileReader();

          //       var fileReader = new FileReader();
          //       fileReader.onload = function () {
          //         var data = fileReader.result;  // data <-- in this var you have the file data in Base64 format

          //         sketchfabAPIUtilityInstance.addTexture(data,"logo_1",false);
          //         //               sketchfabAPIUtilityInstance.setOpacity("headrest-logo-material",1);
          //         sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.AlbedoPBR,"logo_1");
          //         sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,"logo_1");
          //         sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,1);
          //         // 
          //         //           sketchfabAPIUtilityInstance.applyMaterialUIDPending("logo_1");
          //         console.log(data);
          //       };
          //             console.log($('form .custom-logo input').files[0].getAsDataURL());
          //           console.log($('form .custom-logo input').prop('files')[0]);
          //           fileReader.readAsDataURL($('form .custom-logo input').prop('files')[0]);

        }

        if($('.custom-select-embroidery input').val() == 'Personalized Text'){
          //           console.log(startingCameraPosition[0]);
          //           console.log(startingCameraPosition[1]);
          //           console.log(startingCameraPosition[2]);

          //           console.log(startingCameraTarget[0]);
          //           console.log(startingCameraTarget[1]);
          //           console.log(startingCameraTarget[2]);



          setHeadrestCameraPosition();

          updateText();

        }

      });

      $('.custom-font-select .button-value').click(function(){
        if($('.custom-font-select input').val() == 'Roboto'){
          $('.custom-text input').removeClass();
          $('.custom-text input').addClass('roboto-font');
        }
        if($('.custom-font-select input').val() == 'Roboto Mono'){
          $('.custom-text input').removeClass();
          $('.custom-text input').addClass('roboto-mono-font');
        }
        if($('.custom-font-select input').val() == 'Bebas Neue'){
          $('.custom-text input').removeClass();
          $('.custom-text input').addClass('bebas-neue-font');
        }
        if($('.custom-font-select input').val() == 'Benne'){
          $('.custom-text input').removeClass();
          $('.custom-text input').addClass('benne-font');
        }
        if($('.custom-font-select input').val() == 'Risque'){
          $('.custom-text input').removeClass();
          $('.custom-text input').addClass('risque-font');
        }
        if($('.custom-font-select input').val() == 'Dancing Script'){
          $('.custom-text input').removeClass();
          $('.custom-text input').addClass('dancing-script-font');
        }
        setTimeout(function(){  
          updateText();
        }, 50);
      });

      $('.custom-font-color .swatch-value').bind('touchstart click', function(){
        setTimeout(function(){  
          updateText();
        }, 50);
      });


      function hbg(){
        console.log('bg');
        sketchfabAPIUtilityInstance.setOpacity("Material.002",0);
      }

      $('.first-primary').click( function(){
        setDefaultCameraPosition();

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
        setDefaultCameraPosition();

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
        setDefaultCameraPosition();
        getSecondary();
        getPiping();
        getSecondaryColor();       

        secondaryMaterials.forEach(function(item, index){
          usc(color, item, index);
        });



      });

      //     $('.piping-material').click( function(){
      $('.piping-material').bind('touchstart click', function(){




        setDefaultCameraPosition();



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
        setDefaultCameraPosition();
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
        setDefaultCameraPosition();

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