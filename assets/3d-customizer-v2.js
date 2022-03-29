$(window).load(function() {
  // small change from jorge
  setTimeout(function(){
    function moveThemTwo(){
      var cMaterialSubHeading = $('.c-material-sub-heading').detach()
      var mwOptions = $('.mw-product-options');
      var mwOptionsContainer = $('.mw-options-container');
      var primaryParent = $('#primary-options-holder');    
      var primaryColorParent = $('#primary-color-holder');   
      var secondaryParent = $('#secondary-options-holder');
      var primaryOptionsHolder = $('#primary-options-holder .customizer-tab-options');
      var primaryColorOptionsHolder = $('#primary-color-holder .customizer-tab-options');
      var secondaryOptionsHolder = $('#secondary-options-holder .customizer-tab-options');
      var cBespokeSubHeading = $('.c-bespoke-sub-heading').detach();
      var cCartNotice = $('.c-cart-notice').detach();
      var cPrimaryLeather = $('.c-primary-material').detach();
      var cGruppoMastrottoOptions = $('.c-gruppo-mastrotto-options').detach();

      var cPrimaryColorNappa = $('.c-primary-color-nappa').detach();
      var cPrimaryColorTuscania = $('.c-primary-color-tuscania').detach();
      var cPrimaryColorLinea = $('.c-primary-color-linea').detach();
      var cPrimaryColorVelour = $('.c-primary-color-velour').detach();
      var cPrimaryColorVegan = $('.c-primary-color-vegan').detach();
      var cTwoToneLeather = $('.c-two-tone-material').detach();
      var cTwoToneColorNappa = $('.c-two-tone-color-nappa').detach();
      var cTwoToneColorTuscania = $('.c-two-tone-color-tuscania').detach();
      var cTwoToneColorLinea = $('.c-two-tone-color-linea').detach();
      var cTwoToneColorVelour = $('.c-two-tone-color-velour').detach();
      var cTwoToneColorVegan = $('.c-two-tone-color-vegan').detach();

      var stitchOptionsParent = $('#stitch-options-holder');
      var stitchOptionsHolder = $('#stitch-options-holder .customizer-tab-options');

      var cPremiumStitchStyle = $('.c-premium-stitch-style').detach();
      var cPremiumStitchOption = $('.c-premium-stitch-option').detach();

      var perforatedOptionsParent = $('#perforated-options-holder');
      var perforatedOptionsHolder = $('#perforated-options-holder .customizer-tab-options');
      var cPerforatedLeather = $('.c-perforated-leather').detach();

      var cPremiumContrastStitchColor = $('.c-premium-contrast-stitch-color').detach();

      var pipingOptionsParent = $('#piping-options-holder');
      var pipingOptionsHolder = $('#piping-options-holder .customizer-tab-options');

      var cPipingMaterial = $('.c-piping-material').detach();

      var cPipingColorPremium = $('.c-piping-color-premium').detach();
      var cPipingColorNappa = $('.c-piping-color-nappa').detach();

      var cPipingColorTuscania = $('.c-piping-color-tuscania').detach();
      var cPipingColorLinea = $('.c-piping-color-linea').detach();
      var cPipingColorVegan = $('.c-piping-color-vegan').detach();
      var cPipingColorVelour = $('.c-piping-color-velour').detach();

      var premiumWoodParent = $('#premium-wood-options-holder');
      var premiumWoodOptionsHolder = $('#premium-wood-options-holder .customizer-tab-options');

      var cPremiumArmStyle = $('.c-premium-arm-style').detach();
      var cPremiumWoodFinish = $('.c-premium-wood-finish').detach();
      var cPremiumWoodColor = $('.c-premium-wood-color').detach();

      var embroideryParent = $('#embroidery-options-holder');
      var embroideryOptionsHolder = $('#embroidery-options-holder .customizer-tab-options');

      var cEmbroideryType = $('.c-embroidery-type').detach();
      var cEmbroideryTypeText = $('.c-embroidery-type-text').detach();
      var cEmbroideryFontSelect = $('.c-embroidery-font-select').detach();
      var cEmbroideryFontColor = $('.c-embroidery-font-color').detach();

      var rgbParent = $('#rgb-options-holder');
      var rgbOptionsHolder = $('#rgb-options-holder .customizer-tab-options');
      var cRgbOption = $('.c-rgb-option').detach();
      var cRgbPreviewLight = $('.c-rgb-preview-light').detach();

      var cupHolderParent = $('#cup-holder-options-holder');
      var cupHolderOptionsHolder = $('#cup-holder-options-holder .customizer-tab-options');
      var cCupHolderMaterial = $('.c-cup-holder-material').detach();

      var accessoryHolderParent = $('#accessory-holder-options-holder');
      var accessoryHolderOptionsHolder = $('#accessory-holder-options-holder .customizer-tab-options');
      var cAccessoryPortMaterial = $('.c-accessory-port-material').detach();

      var backFinishParent = $('#back-finish-options-holder');
      var backFinishOptionsHolder = $('#back-finish-options-holder .customizer-tab-options');
      var cBackFinish = $('.c-back-finish').detach();

      var heavyDutyParent = $('#heavy-duty-options-holder');
      var heavyDutyOptionsHolder = $('#heavy-duty-options-holder .customizer-tab-options');
      var cBassShaker = $('.c-bass-shaker').detach();

      var extendedWarrantyParent = $('#extended-warranty-options-holder');
      var extendedWarrantyOptionsHolder = $('#extended-warranty-options-holder .customizer-tab-options');
      var cExtendedWarranty = $('.c-extended-warranty').detach();

      var cConfigSubHeading = $('.c-config-sub-heading').detach();

      var configParent = $('#config-options-holder');
      var configOptionsHolder = $('#config-options-holder .customizer-tab-options');
      var cConfigurationType = $('.c-configuration-type').detach();
      var cRiserOption = $('.c-riser-option').detach();
      var cConfigurationStraight = $('.c-configuration-straight').detach();
      var cConfigurationCurved = $('.c-configuration-curved').detach();

      var cAccessorySubHeading = $('.c-accessory-sub-heading').detach();
      var accessoryParent = $('#accessory-options-holder');
      var accessoryOptionsHolder = $('#accessory-options-holder .customizer-tab-options');
      var cTrayTable = $('.tray-table').detach();
      var cTabletHolder = $('.tablet-holder').detach();
      var cWineGlassCaddy = $('.wine-glass-caddy').detach();
      // Primary parent

      cMaterialSubHeading.appendTo(mwOptionsContainer);

      primaryParent.appendTo(mwOptionsContainer);
      cPrimaryLeather.appendTo(primaryOptionsHolder);

      primaryColorParent.appendTo(mwOptionsContainer);
      cPrimaryColorNappa.appendTo(primaryColorOptionsHolder);
      cPrimaryColorTuscania.appendTo(primaryColorOptionsHolder);
      cPrimaryColorLinea.appendTo(primaryColorOptionsHolder);
      cPrimaryColorVelour.appendTo(primaryColorOptionsHolder);
      cPrimaryColorVegan.appendTo(primaryColorOptionsHolder);

      secondaryParent.appendTo(mwOptionsContainer);
      cTwoToneLeather.appendTo(secondaryOptionsHolder);
      cTwoToneColorNappa.appendTo(secondaryOptionsHolder);
      cTwoToneColorVelour.appendTo(secondaryOptionsHolder);
      cTwoToneColorVegan.appendTo(secondaryOptionsHolder);
      cTwoToneColorLinea.appendTo(secondaryOptionsHolder);
      cTwoToneColorTuscania.appendTo(secondaryOptionsHolder);
      cBespokeSubHeading.appendTo(mwOptionsContainer);
      // Premium Wood parent
      premiumWoodParent.appendTo(mwOptionsContainer);
      cPremiumArmStyle.appendTo(premiumWoodOptionsHolder);
      cPremiumWoodFinish.appendTo(premiumWoodOptionsHolder);
      cPremiumWoodColor.appendTo(premiumWoodOptionsHolder);

      // Premium Leather parent
      stitchOptionsParent.appendTo(mwOptionsContainer);
      cPremiumStitchStyle.appendTo(stitchOptionsHolder);  
      cPremiumStitchOption.appendTo(stitchOptionsHolder);
      cPremiumContrastStitchColor.appendTo(stitchOptionsHolder);
      perforatedOptionsParent.appendTo(mwOptionsContainer);
      cPerforatedLeather.appendTo(perforatedOptionsHolder);
      pipingOptionsParent.appendTo(mwOptionsContainer);
      cPipingMaterial.appendTo(pipingOptionsHolder);
      cPipingColorPremium.appendTo(pipingOptionsHolder);
      cPipingColorNappa.appendTo(pipingOptionsHolder);
      cPipingColorTuscania.appendTo(pipingOptionsHolder);
      cPipingColorLinea.appendTo(pipingOptionsHolder);
      cPipingColorVelour.appendTo(pipingOptionsHolder);
      cPipingColorVegan.appendTo(pipingOptionsHolder);
      // Embroidery parent
      embroideryParent.appendTo(mwOptionsContainer);
      cEmbroideryType.appendTo(embroideryOptionsHolder);
      cEmbroideryTypeText.appendTo(embroideryOptionsHolder);
      cEmbroideryFontSelect.appendTo(embroideryOptionsHolder);
      cEmbroideryFontColor.appendTo(embroideryOptionsHolder);
      // RGB parent
      rgbParent.appendTo(mwOptionsContainer);
      cRgbOption.appendTo(rgbOptionsHolder);
      cRgbPreviewLight.appendTo(rgbOptionsHolder);
      // extended parent
      cupHolderParent.appendTo(mwOptionsContainer);
      cCupHolderMaterial.appendTo(cupHolderOptionsHolder);
      accessoryHolderParent.appendTo(mwOptionsContainer);
      cAccessoryPortMaterial.appendTo(accessoryHolderOptionsHolder); 
      //       cPerforatedLeather.appendTo(extendedOptionsHolder);
      backFinishParent.appendTo(mwOptionsContainer);
      cBackFinish.appendTo(backFinishOptionsHolder);
      //heavy duty parent 
      heavyDutyParent.appendTo(mwOptionsContainer);
      cBassShaker.appendTo(heavyDutyOptionsHolder);
      // extended warranty
      //heavy duty parent 
      extendedWarrantyParent.appendTo(mwOptionsContainer);
      cExtendedWarranty.appendTo(extendedWarrantyOptionsHolder);
      cConfigSubHeading.appendTo(mwOptionsContainer);
      // Configuration parent
      configParent.appendTo(mwOptionsContainer);
      cConfigurationType.appendTo(configOptionsHolder);
      cRiserOption.appendTo(configOptionsHolder);
      cConfigurationStraight.appendTo(configOptionsHolder);
      cConfigurationCurved.appendTo(configOptionsHolder);
      // accessory parent
      cAccessorySubHeading.appendTo(mwOptionsContainer);
      accessoryParent.appendTo(mwOptionsContainer);
      cTrayTable.appendTo(accessoryOptionsHolder);
      cTabletHolder.appendTo(accessoryOptionsHolder);
      cWineGlassCaddy.appendTo(accessoryOptionsHolder);
      cCartNotice.appendTo(accessoryOptionsHolder);
    }
    setTimeout(moveThemTwo,200);
    var sliderGmt = $('#lightSlider-c-gmt').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderLinea = $('#lightSlider-c-gml').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderPiping = $('#lightSlider-c-piping').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderPerforated = $('#lightSlider-c-perforated').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderVelour = $('#lightSlider-c-velour').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderNappa = $('#lightSlider-c-nappa').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderVegan = $('#lightSlider-c-vegan').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderWood = $('#lightSlider-c-wood').lightSlider({
      //         adaptiveHeight:true,
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderContrastStitch = $('#lightSlider-c-contrast-stitch').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderStitchStyle = $('#lightSlider-c-stitch-style').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderCupHolder = $('#lightSlider-c-cup-holder').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderAccessoryPort = $('#lightSlider-c-accessory-port').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderRgbLed = $('#lightSlider-c-rgb-led').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderEmbroidery = $('#lightSlider-c-custom-embroidery').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderConfigurationType = $('#lightSlider-c-configuration-type').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderRiserInfo = $('#lightSlider-c-riser-info').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    var sliderTwoTone = $('#lightSlider-c-two-tone').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:false
    });
    setTimeout(function(){
      $('#c-info-overlay').removeClass();
    },10);
    function addInfoIcon(){
      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-primary-material li');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-two-tone-material label');
      infoIcon.appendTo(infoLabelClass);


      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-premium-arm-style li');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-premium-stitch-option li');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-perforated-leather li');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-premium-stitch-style label');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-piping-material label');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-embroidery-type label');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-cup-holder-material label');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-back-finish li');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-configuration-type li:nth-child(2)');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-riser-option li');
      infoIcon.appendTo(infoLabelClass);

      infoIcon = $("<span class=\"add-info-icon\">i</span>");
      infoLabelClass = $('form').find('.c-extended-warranty label');
      infoIcon.appendTo(infoLabelClass);
    }
    setTimeout(addInfoIcon,200);
    var htmlLink = 
        setTimeout(function(){
          $( ".c-primary-material ul li:first-child .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');  
            $('#c-info-overlay').addClass('c-show-nappa');
            setTimeout(function(){
              sliderNappa.refresh();
            },20);
            sliderNappa.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-primary-material ul li:nth-child(2) .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-velour');
            setTimeout(function(){
              sliderVelour.refresh();
            },20);
            sliderVelour.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-primary-material ul li:nth-child(3) .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-vegan');
            setTimeout(function(){
              sliderVegan.refresh();
            },20);
            sliderVegan.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-primary-material ul li:nth-child(4) .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-gml');
            setTimeout(function(){
              sliderLinea.refresh();
            },20);
            sliderLinea.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-two-tone-material .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-two-tone');
            setTimeout(function(){
              sliderTwoTone.refresh();
            },20);
            sliderTwoTone.refresh();
            sliderTwoTone.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-extended-warranty .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-extended-warranty-box');
            $('body').toggleClass('noScroll');

          });
          $( ".c-piping-material .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-piping');
            setTimeout(function(){
              sliderPiping.refresh();
            },20);
            sliderPiping.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-primary-material ul li:nth-child(5) .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-gmt');
            setTimeout(function(){
              sliderGmt.refresh();
            },20);
            sliderGmt.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-premium-arm-style .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-wood');
            setTimeout(function(){
              sliderWood.refresh();
            },20);
            sliderWood.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-premium-stitch-option .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-contrast-stitch');
            setTimeout(function(){
              sliderContrastStitch.refresh();
            },20);
            sliderContrastStitch.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-perforated-leather .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-perforated');
            setTimeout(function(){
              sliderPerforated.refresh();
            },20);
            sliderPerforated.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-premium-stitch-style .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-diamond-stitch');
            setTimeout(function(){
              sliderStitchStyle.refresh();
            },20);
            sliderStitchStyle.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-cup-holder-material .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-cup-holder');
            setTimeout(function(){
              sliderCupHolder.refresh();
            },20);
            sliderCupHolder.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-rgb-option .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-rgb-led');
            setTimeout(function(){
              sliderRgbLed.refresh();
            },20);
            sliderRgbLed.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-accessory-port-material .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-accessory-port');
            setTimeout(function(){
              sliderAccessoryPort.refresh();
            },20);
            sliderAccessoryPort.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-embroidery-type .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-custom-embroidery');
            setTimeout(function(){
              sliderEmbroidery.refresh();
            },20);
            sliderEmbroidery.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-back-finish .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-seat-back');
            setTimeout(function(){
              sliderSeatBack.refresh();
            },20);
            sliderSeatBack.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-configuration-type .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-configuration-type');
            setTimeout(function(){
              sliderConfigurationType.refresh();
            },20);
            sliderConfigurationType.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-riser-option .add-info-icon" ).click(function() {  
            $('#c-info-overlay').addClass('c-show-info-overlay');
            $('#c-info-overlay').addClass('c-show-riser');
            setTimeout(function(){
              sliderRiserInfo.refresh();
            },20);
            sliderRiserInfo.refresh();
            $('body').toggleClass('noScroll');
          });
          $( ".c-close-info-overlay" ).click(function() {  
            $('#c-info-overlay').removeClass();
            $('body').removeClass('noScroll');
          });
          $( ".threed-customizer-template .submit-sticky-area .cart-tab-arrow" ).click(function() {  
            $('.submit-area').toggleClass('expand-price-details');
            $('body').toggleClass('noScroll');
          });
          $( ".expand-price-details .submit-sticky-area .product-single__title" ).click(function() {  
            $('.submit-area').removeClass('expand-price-details');
            $('body').removeClass('noScroll');
          });
          $( ".reset-customizer-button" ).click(function() {  
            var txt;
            if (confirm("Are your sure you want to reset the customizer?")) {
              window.location.reload();
            } else {
              return false;
            }
          });
        },300);
  },4000);
  $( ".customizer-tab-title" ).click(function() {  
    $(this).parent().toggleClass('open');
  });
  var initSketchFab = false;
  // nappa colors
  var MidnightBlack = '#000000';
  //   var ElegantWhite = '#ffffdf';
  var ElegantWhite = '#cacaae';
  var CrimsonWine = '#420000';
  var CharcoalGrey = '#28282a';
  var NavyBlue = '#111b32';
  var DarkChocolate = '#231201';
  var RoastChestnut = '#552d0f';
  var Cognac = '#9c580a';
  var VenetianRosso = '#821212';
  var Chocolate = '#382410';
  var SandyBeige = '#998157';
  var FormulaRosso = '#c52819';
  var ModernGrey = '#5e6158';
  var Gold = '#FFD700';
  var Silver = '#F5F5F5';
  var Purple = '#7B68EE';
  // Tuscania Colors
  var Rust2009 = '#a61e0e';
  var Cognac2008 = '#973f17';
  var Biscotto2002 = '#ae894a';
  var Cobblestone2001 = '#86683f';
  var DarkBrown2004 = '#302419';
  var Brown2006 = '#4b3523';
  var Celery2010 = '#bab42c';
  var Green2003 = '#384e14';
  var Bordeaux2005 = '#3b0303';
  var Lavanda2011 = '#80848c';
  var Notte2012 = '#212932';
  var Blackwood2007 = '#111111';
  // Linea Colors
  var Nero622 = '#000000';
  var BiancoOttico601 = '#f9f9f2';
  var Marmo665 = '#ad9772';
  var Mastice676 = '#8b795a';
  var Coffee682 = '#22160f';
  var Fondotinta662 = '#6f3919';
  var Miel679 = '#7d5515';
  var Nocciola607 = '#56340e';
  var Giallino619 = '#af7f14';
  var Arancio618 = '#b36115';
  var Mottone613 = '#8e2110';
  var Rosso614 = '#b12302';
  var ExtraBlood704 = '#3d1616';
  var Viola633 = '#310b35';
  var Giallo620 = '#d6a119';
  var NewCelery684 = '#bcc80d';
  var Aloe685 = '#64763e';
  var Verdone632 = '#474323';
  var Verde621 = '#4d7b1c';
  var Pino653 = '#162314';
  var ModernBlue694 = '#02ac95';
  var Corvette690 = '#28555f';
  var Lavanda689 = '#7f909c';
  var Electro701 = '#1f2b49';
  var Notte644 = '#2f4450';
  var NewGrey675 = '#313132';
  var Cenere669 = '#6b6b61';
  var Grigio623 = '#444441';
  // Velour Colors
  var FrenchVanilla = '#F9EBCE';
  var Tan = '#EFD2A4';
  var Caramel = '#956636';
  var Hazelnut = '#4D3707';
  var StoneBeige = '#95886D';
  var DarkPewter = '#484D48';
  var LimeGreen = '#9FAD18';
  var Emerald = '#063C1A';
  var SoftGold = '#F4BE09';
  var DeepMarmalade = '#D56D0D';
  var Violet = '#7E3793';
  var RubyRed = '#E20E14';
  var Cranberry = '#E20E4C';
  var Pomegranate = '#610202';
  var ClassicGrey = '#99A08F';
  var AsphaltGrey = '#545458';
  var AquaBlue = '#97FFEE';
  var IceBlue = '#DDFFFF';
  var DarkTeal = '#074D47';
  var RoyalBlue = '#113E60';
  var Raven = '#2E2E2E';
  // vegan Colors
  var RawTaupe = '#DFCBA4';
  var Stone = '#72716B';
  var DarkTruffle = '#413325';
  var DarkOwl = '#393C38';
  var RusticBrown = '#7B4509';
  var DeepIndigo = '#111111';
  var Yam = '#C86A00';
  var Forest = '#183E18';
  var EspressoBean = '#31241B';
  var CharcoalBlue = '#303336';
  // embroidery text colors
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
  var LimeGreenOne = '#32cd32';
  var TropicTurquiose = '#54dbfd';
  var LightTan = '#ffd6a1';
  var BrightWhite = '#ffffff';
  // wood colors
  var Walnut = '#7A3909';
  //   var RedWood = '#c70404';
  var RedWood = '#680909';
  var PianoBlack = '#000000'
  //   var Ebony = '#505050';
  var Ebony = '#2A2A2A';
  //RGB Light Colors
  var RGBRed = '#FF0000';
  var RGBGreen = '#04FF00';
  var RGBWhite = '#ffffff';
  var RGBBlue = '#0064FF';
  var RGBPurple = '#7A4AFF';
  var RGBYellow = '#FFE600';
  var RGBOrange = '#FCBD00';
  var RGBDarkBlue = '#0051FF';
  var RGBIceBlue = '#C4EFFF';
  var RGBTeal = '#00D0FF';
  var RGBLimeGreen = '#ABFF1A';
  var ProductType = 'Standard';
  var ProductModel = 'Tuscany';
  // materials
  var PrimaryMaterial = 'primary_color';
  var SecondaryMaterial = 'secondary_color';
  var PipingMaterial = 'piping_color';
  var startingCameraPosition;
  var startingCameraTarget;
  var cameraPositionToHeadrest = false;
  var color;
  var TextColor;
  var primaryMaterials;
  var doubleMaterials;
  var defaultPiping;
  var defaultSubPiping;
  var defaultStitching;

  var twoToneMaterials;
  var headrestZurichMaterials;
  var twoTonePiping;
  var twoToneHeadrestMaterials;
  var secondaryMaterials;
  var pipingMaterials;
  var defaultStitchingMaterials;
  var stitchingStyleMaterials;

  var primaryPipingColor;
  var secondaryPipingColor;

  var cupHolderMaterials;
  var accessoryHolderMaterials;
  var woodArmMaterials;
  var woodArmAllMaterials;
  var sansWoodArmMaterials;
  var woodMaterials;
  var ledLightMaterials;
  var PrimaryMaterialText;
  var SecondaryMaterialText;
  var PipingMaterialText;

  var backgroundMaterials;
  var floorMaterials;

  var sketchfabAPIUtilityInstance;
  var sketchfabAPIUtilityInstancetwo;

  var productTitle = $('.product-single__title').text();
  var viewerLink;
  var type;

  var headrestCameraPositionX;
  var headrestCameraPositionY;
  var headrestCameraPositionZ;
  var headrestCameraTargetX;
  var headrestCameraTargetY;
  var headrestCameraTargetZ;
  // Camera position for perforated leather and stitch style
  var changeCameraPositionToPerforatedX;
  var changeCameraPositionToPerforatedY;
  var changeCameraPositionToPerforatedZ;
  var changeCameraTargetToPerforatedX;
  var changeCameraTargetToPerforatedY;
  var changeCameraTargetToPerforatedZ;

  // Camera position for Wood Arms                   
  var changeCameraPositionToWoodX;
  var changeCameraPositionToWoodY;
  var changeCameraPositionToWoodZ;
  var changeCameraTargetToWoodX;
  var changeCameraTargetToWoodY;
  var changeCameraTargetToWoodZ;
  // Camera position for Cup Holder                  
  var changeCameraPositionToCupHolderX;
  var changeCameraPositionToCupHolderY;
  var changeCameraPositionToCupHolderZ;
  var changeCameraTargetToCupHolderX;
  var changeCameraTargetToCupHolderY;
  var changeCameraTargetToCupHolderZ;
  // Camera position for RGB Lights
  var changeCameraPositionToRgbX;
  var changeCameraPositionToRgbY;
  var changeCameraPositionToRgbZ;
  var changeCameraTargetToRgbX;
  var changeCameraTargetToRgbY;
  var changeCameraTargetToRgbZ;
  // Camera position for perforated leather and stitch style
  changeCameraPositionToPerforatedX =  55.79184195084345;
  changeCameraPositionToPerforatedY =  -48.677272215574305;
  changeCameraPositionToPerforatedZ = -456.364092401295;
  changeCameraTargetToPerforatedX = -16.0607962302;
  changeCameraTargetToPerforatedY = -9.3735532259;
  changeCameraTargetToPerforatedZ = -493.6791839864;
  // Camera position for Wood Arms                   
  changeCameraPositionToWoodX = 104.56783038075012;
  changeCameraPositionToWoodY = -105.72585129816416;
  changeCameraPositionToWoodZ = -437.08320942938497;
  changeCameraTargetToWoodX = -16.0607962302;
  changeCameraTargetToWoodY = -9.3735532259;
  changeCameraTargetToWoodZ = -493.6791839864;
  // Camera position for Cup Holder                  
  changeCameraPositionToCupHolderX = 30.09994830172039;
  changeCameraPositionToCupHolderY = -79.6266375575662;
  changeCameraPositionToCupHolderZ = -435.4849986820604;
  changeCameraTargetToCupHolderX = -16.0607962302;
  changeCameraTargetToCupHolderY = -9.3735532259;
  changeCameraTargetToCupHolderZ = -493.6791839864;
  // Camera position for RGB Lights
  changeCameraPositionToRgbX = 95.76578310716016;
  changeCameraPositionToRgbY = -76.97443093553204;
  changeCameraPositionToRgbZ = -422.4108842049774;
  changeCameraTargetToRgbX = -16.0607962302;
  changeCameraTargetToRgbY = -9.3735532259;
  changeCameraTargetToRgbZ = -493.6791839864;

  var defaultCameraZoom;
  var productTitle = $('.product-single__title').text()
  var diamondUVX;
  var diamondUVY;
  function checkProductTitle(productTitle = $('.product-single__title').text()){
    if(productTitle == 'Tuscany 3D'){
      viewerLink = '24c97601eea54db697fa448d98038bb8';
      diamondUVX = 10;
      diamondUVY = 10;

      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];

      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"]
      defaultStitching = ["default_stitch_color"];
      twoToneMaterials = ["flat_center", "flat_side"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];
      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];
      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = 6.080270283901058;
      headrestCameraPositionY = -13.10910822497767;
      headrestCameraPositionZ = -440.3961766186636;

      headrestCameraTargetX = -53.146306437880256;
      headrestCameraTargetY = -10.503543740338133;
      headrestCameraTargetZ = -449.638667816135;
    }else if(productTitle == 'Tuscany XL 3D'){
      viewerLink = '36828d8ec4c24123b3076619dda3bbab';
      diamondUVX = 10;
      diamondUVY = 10;
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];

      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"]
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = 6.080270283901058;
      headrestCameraPositionY = -13.10910822497767;
      headrestCameraPositionZ = -440.3961766186636;

      headrestCameraTargetX = -53.146306437880256;
      headrestCameraTargetY = -10.503543740338133;
      headrestCameraTargetZ = -449.638667816135;
    }else if(productTitle == 'Tuscany Console Edition 3D'){
      viewerLink = '6eb8ec0088ca49f7bd58e78cdcc031b4';

      ProductType = 'Console';

      diamondUVX = 10;
      diamondUVY = 10;
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];


      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"]
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = -1.9913239662142246;
      headrestCameraPositionY = -55.738242949517634;
      headrestCameraPositionZ = -432.53786842450234;

      headrestCameraTargetX = -61.04129307839859;
      headrestCameraTargetY = -53.90821492273951;
      headrestCameraTargetZ = -442.8020819893161;
      // Camera position for perforated leather and stitch style
      changeCameraPositionToPerforatedX =  81.44870063045352;
      changeCameraPositionToPerforatedY =  -91.8176990653998;
      changeCameraPositionToPerforatedZ = -470.04963609695204;
      changeCameraTargetToPerforatedX = -16.060796230200047;
      changeCameraTargetToPerforatedY = -9.373553225900013;
      changeCameraTargetToPerforatedZ = -493.67918398640006;
      // Camera position for Wood Arms           
      changeCameraPositionToWoodX = 123.22528383430407;
      changeCameraPositionToWoodY = -156.9182933003314;
      changeCameraPositionToWoodZ = -450.3344193105885;
      changeCameraTargetToWoodX = -16.060796230199994;
      changeCameraTargetToWoodY = -9.373553225899999;
      changeCameraTargetToWoodZ = -493.6791839864
      // Camera position for Cup Holder 
      changeCameraPositionToCupHolderX = 27.502810297020925;
      changeCameraPositionToCupHolderY = -133.0420086110595;
      changeCameraPositionToCupHolderZ = -447.1916831862876;
      changeCameraTargetToCupHolderX = -16.060796230200022;
      changeCameraTargetToCupHolderY = -9.373553225900011;
      changeCameraTargetToCupHolderZ = -493.6791839864001;
      // Camera position for RGB Lights
      changeCameraPositionToRgbX = 132.77098649112048;
      changeCameraPositionToRgbY = -130.47318458667488;
      changeCameraPositionToRgbZ = -400.2511130114372;
      changeCameraTargetToRgbX = -16.060796230200022;
      changeCameraTargetToRgbY = -9.373553225900011;
      changeCameraTargetToRgbZ = -493.6791839864001;
    }else if(productTitle == 'Tuscany Dropdown Center 3D'){
      viewerLink = '9715f958681047c4a5827f6b4a88c319';
      ProductType = 'Console';
      diamondUVX = 10;
      diamondUVY = 10;
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];

      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"]
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = -1.2484223453376302;
      headrestCameraPositionY =  -71.84732882871518;
      headrestCameraPositionZ = -432.4937569718613;

      headrestCameraTargetX = -62.93623474734098;
      headrestCameraTargetY = -71.70654173173978;
      headrestCameraTargetZ = -443.5812121211372;

      // Camera position for perforated leather and stitch style
      changeCameraPositionToPerforatedX =  81.44870063045352;
      changeCameraPositionToPerforatedY =  -91.8176990653998;
      changeCameraPositionToPerforatedZ = -470.04963609695204;
      changeCameraTargetToPerforatedX = -16.060796230200047;
      changeCameraTargetToPerforatedY = -9.373553225900013;
      changeCameraTargetToPerforatedZ = -493.67918398640006;
      // Camera position for Wood Arms    
      changeCameraPositionToWoodX = 140.47595773718817;
      changeCameraPositionToWoodY = -175.1918077529679;
      changeCameraPositionToWoodZ = -444.9661412997966;
      changeCameraTargetToWoodX = -16.06079623019999;
      changeCameraTargetToWoodY = -9.373553225899997;
      changeCameraTargetToWoodZ = -493.6791839864;
      // Camera position for Cup Holder      
      changeCameraPositionToCupHolderX = 49.137757586329656;
      changeCameraPositionToCupHolderY = -169.04382352765967;
      changeCameraPositionToCupHolderZ = -430.55106433704884;
      changeCameraTargetToCupHolderX = -16.0607962302;
      changeCameraTargetToCupHolderY = -9.373553225900004;
      changeCameraTargetToCupHolderZ = -493.67918398640006;
      // Camera position for RGB Lights
      changeCameraPositionToRgbX = 126.72290514174554;
      changeCameraPositionToRgbY = -183.19489220458118;
      changeCameraPositionToRgbZ = -417.97014243111755;
      changeCameraTargetToRgbX = -16.06079623020002;
      changeCameraTargetToRgbY = -9.37355322590001;
      changeCameraTargetToRgbZ = -493.6791839864001;

    }else if(productTitle == 'Oslo 3D'){
      diamondUVX = 12;
      diamondUVY = 15;
      viewerLink = '93b07fb5863f4cc4b922aafcb083cbf3';
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];

      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"]
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side"];
      twoTonePiping = ["default_sub_two_tone_piping_color"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = 6.080270283901058;
      headrestCameraPositionY = -13.10910822497767;
      headrestCameraPositionZ = -440.3961766186636;

      headrestCameraTargetX = -53.146306437880256;
      headrestCameraTargetY = -10.503543740338133;
      headrestCameraTargetZ = -449.638667816135;
    }else if(productTitle == 'Oslo XL 3D'){

      diamondUVX = 12;
      diamondUVY = 15;
      viewerLink = '6f91a0507a4149e09062f63a2bd31c06';
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];

      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"]
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side"];
      twoTonePiping = ["default_sub_two_tone_piping_color"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = 6.080270283901058;
      headrestCameraPositionY = -13.10910822497767;
      headrestCameraPositionZ = -440.3961766186636;

      headrestCameraTargetX = -53.146306437880256;
      headrestCameraTargetY = -10.503543740338133;
      headrestCameraTargetZ = -449.638667816135;
    }else if(productTitle == 'Oslo Console Edition 3D'){

      ProductType = 'Console';
      diamondUVX = 12;
      diamondUVY = 15;
      //       viewerLink = '24c97601eea54db697fa448d98038bb8';
      viewerLink = '8aa11062311e46d9a246d3271aaf3542';
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];

      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"]
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side"];
      twoTonePiping = ["default_sub_two_tone_piping_color"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = -1.9913239662142246;
      headrestCameraPositionY = -55.738242949517634;
      headrestCameraPositionZ = -432.53786842450234;

      headrestCameraTargetX = -61.04129307839859;
      headrestCameraTargetY = -53.90821492273951;
      headrestCameraTargetZ = -442.8020819893161;
      // Camera position for perforated leather and stitch style
      changeCameraPositionToPerforatedX =  81.44870063045352;
      changeCameraPositionToPerforatedY =  -91.8176990653998;
      changeCameraPositionToPerforatedZ = -470.04963609695204;

      changeCameraTargetToPerforatedX = -16.060796230200047;
      changeCameraTargetToPerforatedY = -9.373553225900013;
      changeCameraTargetToPerforatedZ = -493.67918398640006;
      // Camera position for Wood Arms           
      changeCameraPositionToWoodX = 123.22528383430407;
      changeCameraPositionToWoodY = -156.9182933003314;
      changeCameraPositionToWoodZ = -450.3344193105885;
      changeCameraTargetToWoodX = -16.060796230199994;
      changeCameraTargetToWoodY = -9.373553225899999;
      changeCameraTargetToWoodZ = -493.6791839864
      // Camera position for Cup Holder 
      changeCameraPositionToCupHolderX = 27.502810297020925;
      changeCameraPositionToCupHolderY = -133.0420086110595;
      changeCameraPositionToCupHolderZ = -447.1916831862876;
      changeCameraTargetToCupHolderX = -16.060796230200022;
      changeCameraTargetToCupHolderY = -9.373553225900011;
      changeCameraTargetToCupHolderZ = -493.6791839864001;
      // Camera position for RGB Lights
      changeCameraPositionToRgbX = 132.77098649112048;
      changeCameraPositionToRgbY = -130.47318458667488;
      changeCameraPositionToRgbZ = -400.2511130114372;
      changeCameraTargetToRgbX = -16.060796230200022;
      changeCameraTargetToRgbY = -9.373553225900011;
      changeCameraTargetToRgbZ = -493.6791839864001;
    }else if(productTitle == 'Oslo Dropdown Center 3D'){
      ProductType = 'Console';
      diamondUVX = 12;
      diamondUVY = 15;
      viewerLink = '0e0f18f861ee4276b6611bcdbb420c6e';
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color",  "default_sub_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "default_sub_piping_color", "flat_center", "flat_side"];
      defaultPiping = ["default_piping_color"];
      defaultSubPiping = ["default_sub_piping_color"];
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side"];
      twoTonePiping = ["default_sub_two_tone_piping_color"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = -1.2484223453376302;
      headrestCameraPositionY =  -71.84732882871518;
      headrestCameraPositionZ = -432.4937569718613;

      headrestCameraTargetX = -62.93623474734098;
      headrestCameraTargetY = -71.70654173173978;
      headrestCameraTargetZ = -443.5812121211372;
      // Camera position for perforated leather and stitch style
      changeCameraPositionToPerforatedX =  81.44870063045352;
      changeCameraPositionToPerforatedY =  -91.8176990653998;
      changeCameraPositionToPerforatedZ = -470.04963609695204;
      changeCameraTargetToPerforatedX = -16.060796230200047;
      changeCameraTargetToPerforatedY = -9.373553225900013;
      changeCameraTargetToPerforatedZ = -493.67918398640006;
      // Camera position for Wood Arms 
      changeCameraPositionToWoodX = 140.47595773718817;
      changeCameraPositionToWoodY = -175.1918077529679;
      changeCameraPositionToWoodZ = -444.9661412997966;
      changeCameraTargetToWoodX = -16.06079623019999;
      changeCameraTargetToWoodY = -9.373553225899997;
      changeCameraTargetToWoodZ = -493.6791839864;
      // Camera position for Cup Holder      
      changeCameraPositionToCupHolderX = 49.137757586329656;
      changeCameraPositionToCupHolderY = -169.04382352765967;
      changeCameraPositionToCupHolderZ = -430.55106433704884;
      changeCameraTargetToCupHolderX = -16.0607962302;
      changeCameraTargetToCupHolderY = -9.373553225900004;
      changeCameraTargetToCupHolderZ = -493.67918398640006;
      // Camera position for RGB Lights
      changeCameraPositionToRgbX = 126.72290514174554;
      changeCameraPositionToRgbY = -183.19489220458118;
      changeCameraPositionToRgbZ = -417.97014243111755;
      changeCameraTargetToRgbX = -16.06079623020002;
      changeCameraTargetToRgbY = -9.37355322590001;
      changeCameraTargetToRgbZ = -493.6791839864001;

    }else if(productTitle == 'Zurich 3D'){
      viewerLink = '5039eeca6477496bacc247c9b94b6d31';
      diamondUVX = 12;
      diamondUVY = 15;
      type = 'Advanced';
      ProductModel = 'Zurich';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "default_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "default_piping_color", "flat_center", "flat_side"];
      defaultPiping = ["default_piping_color"];
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center", "flat_side", "flat_headrest"];

      twoTonePiping = ["default_sub_two_tone_piping_color"];

      twoToneHeadrestMaterials = ["flat_headrest_sans_diamond"];

      headrestZurichMaterials = ["flat_headrest", "flat_headrest_contrast_stitch"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch", "flat_headrest_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = 6.080270283901058;
      headrestCameraPositionY = -13.10910822497767;
      headrestCameraPositionZ = -440.3961766186636;

      headrestCameraTargetX = -53.146306437880256;
      headrestCameraTargetY = -10.503543740338133;
      headrestCameraTargetZ = -449.638667816135;

      changeCameraPositionToPerforatedX =  110.60118160438263;
      changeCameraPositionToPerforatedY =  -77.39016839907543;
      changeCameraPositionToPerforatedZ = -481.7661475306795;
      changeCameraTargetToPerforatedX = -16.0607962302;
      changeCameraTargetToPerforatedY = -9.3735532259;
      changeCameraTargetToPerforatedZ = -493.6791839864;
      // Camera position for Wood Arms           
      changeCameraPositionToWoodX = 123.22528383430407;
      changeCameraPositionToWoodY = -156.9182933003314;
      changeCameraPositionToWoodZ = -450.3344193105885;
      changeCameraTargetToWoodX = -16.060796230199994;
      changeCameraTargetToWoodY = -9.373553225899999;
      changeCameraTargetToWoodZ = -493.6791839864
      // Camera position for Cup Holder 
      changeCameraPositionToCupHolderX = 28.154256782602086;
      changeCameraPositionToCupHolderY = -87.68973004170226;
      changeCameraPositionToCupHolderZ = -437.3295355398208;
      changeCameraTargetToCupHolderX = -16.0607962302;
      changeCameraTargetToCupHolderY = -9.3735532259;
      changeCameraTargetToCupHolderZ = -493.67918398640006;
      // Camera position for RGB Lights
      changeCameraPositionToRgbX = 132.77098649112048;
      changeCameraPositionToRgbY = -130.47318458667488;
      changeCameraPositionToRgbZ = -400.2511130114372;
      changeCameraTargetToRgbX = -16.060796230200022;
      changeCameraTargetToRgbY = -9.373553225900011;
      changeCameraTargetToRgbZ = -493.6791839864001;
    }
    else if(productTitle == 'Naples 3D'){
      viewerLink = 'dada22ef8bab4e5ea0fe68834b20692a';
      diamondUVX = 12;
      diamondUVY = 15;
      type = 'Advanced';
      ProductModel = 'Naples';
      primaryMaterials = ["primary_color", "piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "piping_color", "flat_center", "primary_color_og_arm_top"];
      defaultPiping = ["piping_color"];
      //defaultStitching = ["default_stitch_color"];
      twoToneMaterials = ["flat_center"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];
      pipingMaterials = ["piping_color"];
      cupHolderMaterials = ["cup_holder"];      
      ledLightMaterials = ["led_arm_light"];
      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];
      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      headrestCameraPositionX = 6.080270283901058;
      headrestCameraPositionY = -13.10910822497767;
      headrestCameraPositionZ = -440.3961766186636;
      headrestCameraTargetX = -53.146306437880256;
      headrestCameraTargetY = -10.503543740338133;
      headrestCameraTargetZ = -449.638667816135;
    }

    else if (productTitle == 'Oxford Console 3D'){
      viewerLink = '60549dccac5c47b1b7ea347177f3e99a';

      ProductType = 'Console';
      diamondUVX = 9.4;
      diamondUVY = 10;
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_console", "primary_color_og_arm", "primary_color_og_console_arm", "primary_color_wood_arm", "primary_color_wood_console_arm", "default_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "flat_center"];

      defaultPiping = ["default_piping_color"];
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel", "wood_panel_console"];

      ledLightMaterials = ["led_arm_light", "led-light-ground", "led-light-ground.001"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = -1.9913239662142246;
      headrestCameraPositionY = -55.738242949517634;
      headrestCameraPositionZ = -432.53786842450234;

      headrestCameraTargetX = -61.04129307839859;
      headrestCameraTargetY = -53.90821492273951;
      headrestCameraTargetZ = -442.8020819893161;
      // Camera position for perforated leather and stitch style
      changeCameraPositionToPerforatedX =  81.44870063045352;
      changeCameraPositionToPerforatedY =  -91.8176990653998;
      changeCameraPositionToPerforatedZ = -470.04963609695204;

      changeCameraTargetToPerforatedX = -16.060796230200047;
      changeCameraTargetToPerforatedY = -9.373553225900013;
      changeCameraTargetToPerforatedZ = -493.67918398640006;
      // Camera position for Wood Arms           
      changeCameraPositionToWoodX = 123.22528383430407;
      changeCameraPositionToWoodY = -156.9182933003314;
      changeCameraPositionToWoodZ = -450.3344193105885;
      changeCameraTargetToWoodX = -16.060796230199994;
      changeCameraTargetToWoodY = -9.373553225899999;
      changeCameraTargetToWoodZ = -493.6791839864
      // Camera position for Cup Holder 
      changeCameraPositionToCupHolderX = 27.502810297020925;
      changeCameraPositionToCupHolderY = -133.0420086110595;
      changeCameraPositionToCupHolderZ = -447.1916831862876;
      changeCameraTargetToCupHolderX = -16.060796230200022;
      changeCameraTargetToCupHolderY = -9.373553225900011;
      changeCameraTargetToCupHolderZ = -493.6791839864001;
      // Camera position for RGB Lights
      changeCameraPositionToRgbX = 132.77098649112048;
      changeCameraPositionToRgbY = -130.47318458667488;
      changeCameraPositionToRgbZ = -400.2511130114372;
      changeCameraTargetToRgbX = -16.060796230200022;
      changeCameraTargetToRgbY = -9.373553225900011;
      changeCameraTargetToRgbZ = -493.6791839864001;
    }

    else if(productTitle == 'Oxford Dropdown 3D'){
      viewerLink = '47b15827cb6b4e38aa3a9783e4adea0d';
      ProductType = 'Console';
      diamondUVX = 10;
      diamondUVY = 10;
      //       viewerLink = '93b07fb5863f4cc4b922aafcb083cbf3';
      type = 'Advanced';
      primaryMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color"];
      doubleMaterials = ["primary_color", "primary_color_og_arm", "primary_color_wood_arm", "default_piping_color", "flat_center"];

      defaultPiping = ["default_piping_color"];
      defaultStitching = ["default_stitch_color"];

      twoToneMaterials = ["flat_center"];

      defaultStitchingMaterials = ["default_stitch_color"];
      stitchingStyleMaterials = ["flat_contrast_stitch"];

      pipingMaterials = ["piping_color"];

      cupHolderMaterials = ["cup_holder"];

      accessoryHolderMaterials = ["accessories_holder_og_arm", "accessories_holder_wood_arm"];

      woodArmMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm"];
      woodArmAllMaterials = ["accessories_holder_wood_arm", "primary_color_wood_arm", "wood_panel"];

      sansWoodArmMaterials = ["primary_color_og_arm", "accessories_holder_og_arm"];
      woodMaterials = ["wood_panel"];

      ledLightMaterials = ["led_arm_light", "led-light-ground"];

      backgroundMaterials = ["vector-wall"];
      floorMaterials = ["floor", "props"];

      headrestCameraPositionX = -1.2484223453376302;
      headrestCameraPositionY =  -71.84732882871518;
      headrestCameraPositionZ = -432.4937569718613;

      headrestCameraTargetX = -62.93623474734098;
      headrestCameraTargetY = -71.70654173173978;
      headrestCameraTargetZ = -443.5812121211372;
      // Camera position for perforated leather and stitch style
      changeCameraPositionToPerforatedX =  81.44870063045352;
      changeCameraPositionToPerforatedY =  -91.8176990653998;
      changeCameraPositionToPerforatedZ = -470.04963609695204;
      changeCameraTargetToPerforatedX = -16.060796230200047;
      changeCameraTargetToPerforatedY = -9.373553225900013;
      changeCameraTargetToPerforatedZ = -493.67918398640006;
      // Camera position for Wood Arms 
      changeCameraPositionToWoodX = 140.47595773718817;
      changeCameraPositionToWoodY = -175.1918077529679;
      changeCameraPositionToWoodZ = -444.9661412997966;
      changeCameraTargetToWoodX = -16.06079623019999;
      changeCameraTargetToWoodY = -9.373553225899997;
      changeCameraTargetToWoodZ = -493.6791839864;
      // Camera position for Cup Holder      
      changeCameraPositionToCupHolderX = 49.137757586329656;
      changeCameraPositionToCupHolderY = -169.04382352765967;
      changeCameraPositionToCupHolderZ = -430.55106433704884;
      changeCameraTargetToCupHolderX = -16.0607962302;
      changeCameraTargetToCupHolderY = -9.373553225900004;
      changeCameraTargetToCupHolderZ = -493.67918398640006;
      // Camera position for RGB Lights
      changeCameraPositionToRgbX = 126.72290514174554;
      changeCameraPositionToRgbY = -183.19489220458118;
      changeCameraPositionToRgbZ = -417.97014243111755;
      changeCameraTargetToRgbX = -16.06079623020002;
      changeCameraTargetToRgbY = -9.37355322590001;
      changeCameraTargetToRgbZ = -493.6791839864001;
    } 

    else{
      console.log('e');
    } 
  }
  checkProductTitle();
  function percentageAdd(num, per) {
    num = parseFloat(num).toFixed(2);
    per = (parseFloat(per)+100).toFixed(2);
    if (per !== 0) {
      return parseFloat((num/100)*per).toFixed(2);
    }else{
      return parseFloat(num).toFixed(2);
    }
  }
  function divide(num, per) {
    num = parseFloat(num).toFixed(2);
    per = (parseFloat(per)+100).toFixed(2);
    if (per !== 0) {
      return parseFloat((num/100)*per).toFixed(2);
    }else{
      return parseFloat(num).toFixed(2);
    }
  }
  function updatePrice(){
    baseModel = $('.c-primary-material').find('input:checked').attr('data-value-price');
    selectTrayTable = $('.tray-table select').find('option:selected');
    tt = selectTrayTable.attr('data-value-price');
    selectTabletHolder = $('.tablet-holder select').find('option:selected');
    th = selectTabletHolder.attr('data-value-price');
    selectWineGlassCaddy = $('.wine-glass-caddy select').find('option:selected');
    wgc = selectWineGlassCaddy.attr('data-value-price');
    totalPrice = $('.price-bd .price-item--regular').text();
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
    $('.base-price').text(baseModel);
    noOfRows = $('.no-of-rows:visible').find('.swatch-selected');

    noOfRowsText = noOfRows.attr('data-value-text');
    noOfRowsPrice = noOfRows.attr('data-value-price');
    if(noOfRows){
      noOfRowsText = noOfRows.attr('data-value-text');
      noOfRowsPrice = noOfRows.attr('data-value-price');
      if(ProductType == 'Standard'){
        if(noOfRowsText.includes('Single')){
          calcBaseModel = parseFloat(baseModel) + parseFloat(noOfRowsPrice);
          baseModel = parseFloat(baseModel) + parseFloat(noOfRowsPrice);
        }else{
          calcBaseModel = percentageAdd(baseModel, noOfRowsPrice);
        }
      }else{
        calcBaseModel = parseFloat(baseModel);
        baseModel = parseFloat(baseModel);
      }

    }else{
      calcBaseModel = baseModel;
    }
    noOfRowsPrice = parseInt(noOfRowsPrice) + 100;
    if(ProductType == 'Standard'){
      if(noOfRowsText.includes('Single')){
        singleTotalPrice = parseFloat(1);
      }else{
        singleTotalPrice = parseFloat(noOfRowsPrice / 100).toFixed(2);
      }
    }else{
      singleTotalPrice = parseFloat(1);
    }
    oneCalcFeatures = parseFloat(parseFloat(calcBaseModel) + parseFloat(calcAccessories)).toFixed(2);
    calcFeatures = parseFloat(parseFloat(totalPriceOutput) - parseFloat(oneCalcFeatures)).toFixed(2);
    calcFeatures = calcFeatures / singleTotalPrice;
    subTotalPrice = parseFloat(baseModel) + parseFloat(calcFeatures);
    subTotalPrice = parseFloat(parseFloat(subTotalPrice) * parseFloat(singleTotalPrice)).toFixed(2);
    $('.base-price').text('$' + baseModel);
    $('.sub-total-price').text('$' + subTotalPrice);
    $('.configuration-price').text(' ' + parseInt(singleTotalPrice));
    $('.feature-price').text('$' + calcFeatures);
    $('.accessories-price').text('$' + calcAccessories);
  }
  var SelectedSecondaryNappaColor;
  var SelectedSecondaryTuscaniaColor;
  var SelectedSecondaryLineaColor;
  var SelectedSecondaryVelourColor;
  var SelectedSecondaryVeganColor;
  if(ProductType == 'Standard'){
    function addPerSeat(){
      perSeat = $("<i> per seat</i>");
      addSeatHolder = $('form').find('.add-per-seat');
      addSeatHolder.html(perSeat);    
    }
    setTimeout(addPerSeat,200);
    function addPerSeatTwo(){
      perSeat = $("<i> per seat</i>");
      addSeatHolder = $('form').find('.add-per-seat');
      addSeatHolder.html(perSeat);    
    }
  }
  $('form').click(function(){
    if(ProductType == 'Standard'){
      setTimeout(addPerSeatTwo,200); 
    }
    PrimaryNappa = $(this).find('.c-primary-color-nappa');
    SelectedPrimaryNappaColor = PrimaryNappa.find('.swatch-selected').attr('data-value-text');
    if(SelectedSecondaryNappaColor){
      SelectedSecondaryNappaColor.show();
    }
    SecondaryNappa = $(this).find('.c-two-tone-color-nappa');
    SelectedSecondaryNappaColor = SecondaryNappa.find("div[data-value-text='" + SelectedPrimaryNappaColor +"']");
    if(SelectedPrimaryNappaColor){
      SelectedSecondaryNappaColor.hide();
      SelectedSecondaryNappaColor.removeClass('swatch-selected');
    }
    PrimaryTuscania = $(this).find('.c-primary-color-tuscania');
    SelectedPrimaryTuscaniaColor = PrimaryTuscania.find('.swatch-selected').attr('data-value-text');
    if(SelectedSecondaryTuscaniaColor){
      SelectedSecondaryTuscaniaColor.show();
    }
    SecondaryTuscania = $(this).find('.c-two-tone-color-tuscania');
    SelectedSecondaryTuscaniaColor = SecondaryTuscania.find("div[data-value-text='" + SelectedPrimaryTuscaniaColor +"']");
    if(SelectedPrimaryTuscaniaColor){
      SelectedSecondaryTuscaniaColor.hide();
      SelectedSecondaryTuscaniaColor.removeClass('swatch-selected');
    }
    //Linea Color swatch hide
    PrimaryLinea = $(this).find('.c-primary-color-linea');
    SelectedPrimaryLineaColor = PrimaryLinea.find('.swatch-selected').attr('data-value-text');
    if(SelectedSecondaryLineaColor){
      SelectedSecondaryLineaColor.show();
    }
    SecondaryLinea = $(this).find('.c-two-tone-color-linea');
    SelectedSecondaryLineaColor = SecondaryLinea.find("div[data-value-text='" + SelectedPrimaryLineaColor +"']");
    if(SelectedPrimaryLineaColor){
      SelectedSecondaryLineaColor.hide();
      SelectedSecondaryLineaColor.removeClass('swatch-selected');
    }
    //Velour Color swatch hide
    PrimaryVelour = $(this).find('.c-primary-color-velour');
    SelectedPrimaryVelourColor = PrimaryVelour.find('.swatch-selected').attr('data-value-text');
    if(SelectedSecondaryVelourColor){
      SelectedSecondaryVelourColor.show();
    }
    SecondaryVelour = $(this).find('.c-two-tone-color-velour');
    SelectedSecondaryVelourColor = SecondaryVelour.find("div[data-value-text='" + SelectedPrimaryVelourColor +"']");
    if(SelectedPrimaryVelourColor){
      SelectedSecondaryVelourColor.hide();
      SelectedSecondaryVelourColor.removeClass('swatch-selected');
    }
    //Vegan Color swatch hide
    PrimaryVegan = $(this).find('.c-primary-color-vegan');
    SelectedPrimaryVeganColor = PrimaryVegan.find('.swatch-selected').attr('data-value-text');
    if(SelectedSecondaryVeganColor){
      SelectedSecondaryVeganColor.show();
    }
    SecondaryVegan = $(this).find('.c-two-tone-color-vegan');
    SelectedSecondaryVeganColor = SecondaryVegan.find("div[data-value-text='" + SelectedPrimaryVeganColor +"']");
    if(SelectedPrimaryVeganColor){
      SelectedSecondaryVeganColor.hide();
      SelectedSecondaryVeganColor.removeClass('swatch-selected');
    }
    setTimeout(function(){
      updatePrice();
    }, 500);
  });
  sketchfabAPIUtilityInstance = new SketchfabAPIUtility(viewerLink, document.getElementById("api-frame"), {"autostart": 1 });
  sketchfabAPIUtilityInstance.addEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
  sketchfabAPIUtilityInstance.create();
  function onSketchfabUtilityReady() {
    sketchfabAPIUtilityInstance.removeEventListener(sketchfabAPIUtilityInstance.EVENT_INITIALIZED, onSketchfabUtilityReady);
    sketchfabAPIUtilityInstance.api.setCameraEasing('easeInBounce');
    sketchfabAPIUtilityInstance.api.setTextureQuality( 'hd', function(){
    });
    sketchfabAPIUtilityInstance.setFactor("primary_color",sketchfabAPIUtilityInstance.NormalMap,1);
    sketchfabAPIUtilityInstance.api.getCameraLookAt(function(err, camera) {
      startingCameraPosition = camera.position;
      startingCameraTarget = camera.target;
    });
    $('body').on('mw_apo', function(e, a) {
      if (a === 'end-initialize') { // options container appended to the DOM
        console.log('I');
      }
    });
    setTimeout(function(){  
      updatePrice();
      var primaryMaterial;
      var twoToneMaterial;
      var pipingMaterial;
      var stitchStyle = 'Diamond Stitch';
      var stitchingColor;
      var stitchingOption;
      var perforatedStyle;
      var embroideryStyle;
      var pipingColor;
      var armStyle;
      var woodFinish;
      var woodColor;
      var rgbColor;
      var rgbOption;
      var cupHolderMaterial;
      var accessoryHolderMaterial;
      function getPrimaryMaterial(){
        //         PrimaryMaterialSelected = 'Default'
        primaryMaterial = 'Default'
        primaryMaterialFind = $('.c-get-primary-material').find("input:checked");
        if(primaryMaterialFind.length){
          primaryMaterial = primaryMaterialFind.val();
        }else{
          primaryMaterial = '';
        }
      }
      function getPrimaryColor(){
        PrimaryColorFind = $('.c-get-primary-color:visible').find("input");
        if(PrimaryColorFind.val().length){
          color = PrimaryColorFind.val();
          color = color.split(/\s/).join('');

        }else{
          color = 'MidnightBlack';
        }
      }
      function getTwoToneMaterial(){
        twoToneMaterialFind = $('.c-get-two-tone-material').find("input:checked");
        if(twoToneMaterialFind.length){
          twoToneMaterial = twoToneMaterialFind.val();
          if($(twoToneMaterialFind).is(':disabled')){
            twoToneMaterial = 'None';
          }else{
            twoToneMaterial = twoToneMaterialFind.val();
          }
        }else{
          twoToneMaterial = 'None';
        }
      }
      function getTwoToneColor(){
        TwoToneColorFind = $('.c-get-two-tone-color:visible').find("input");
        TwoToneColorFind = TwoToneColorFind.val();
        if(!TwoToneColorFind){
          color = 'MidnightBlack';
        }else{
          color = TwoToneColorFind;
          color = color.split(/\s/).join('');
        }
      }
      function getPipingMaterial(){
        pipingMaterialFind = $('.c-piping-material').find("input:checked");
        if(pipingMaterialFind.length){
          if($(pipingMaterialFind).is(':disabled')){
            pipingMaterial = 'None';
          }else{
            pipingMaterial = pipingMaterialFind.val();
          }
        }else{
          pipingMaterial = 'None';
        }
      }
      function getPipingColor(){
        let pipingColorFind = $('.c-get-piping-color:visible').find("input");

        if(pipingColorFind.val().length){
          pipingColor = pipingColorFind.val();
          pipingColor = pipingColor.split(/\s/).join('');
        }else{
          pipingColor = 'MidnightBlack';
        }
      }
      function getArmStyle(){
        armStyleFind = $('.c-premium-arm-style').find('input:checked');
        armStyle = armStyleFind.val();
      }
      function getWoodFinish(){
        woodFinishFind = $('.c-premium-wood-finish').find("input");
        //         woodFinish = woodFinishFind.val();
        if(woodFinishFind.val().length){
          woodFinish = woodFinishFind.val();

        }else{
          woodFinish = ' ';
        }
      }
      function getWoodColor(){
        woodColorFind = $('.c-premium-wood-color').find("input");
        woodColor = woodColorFind.val();
        woodColor = woodColor.split(/\s/).join('');
      }
      function getRGBOption(){
        rgbOption = '';
        rgbOptionFind = $('.c-rgb-option').find('input:checked');
        rgbOption = rgbOptionFind.val();
      }
      function getRGBColor(){
        rgbColorFind = $('.c-rgb-preview-light').find("input");
        rgbColor = rgbColorFind.val();
        rgbColor = rgbColor.split(/\s/).join('');
      }
      function getStitchStyle(){
        let stitchStyleFind = $('.c-premium-stitch-style').find("input");
        if(stitchStyleFind.val().length){
          stitchStyle = stitchStyleFind.val();
        }else{
          stitchStyle = 'Diamond Stitching';
        }
      }
      function getPerforatedStyle(){   
        let perforatedStyleFind = $('.c-perforated-leather').find('input:checked');
        if(perforatedStyleFind.length){
          perforatedStyle = perforatedStyleFind.val();
        }else{
          perforatedStyle = '';
        }
      }
      function getEmbroideryStyle(){   
        let embroiderStyleFind = $('.custom-select-embroidery input');

        if(embroiderStyleFind.length){
          embroideryStyle = embroiderStyleFind.val();
        }else{
          embroideryStyle = '';
        }
      }
      bgColorDarkR = parseInt('', 16) / 255;
      function setLightBackground(){
        sketchfabAPIUtilityInstance.api.setBackground({color: [0.990, 0.990, 0.990]}, function() {
          window.console.log('Background changed');
        }); 

        sketchfabAPIUtilityInstance.setColor('floor',sketchfabAPIUtilityInstance.AlbedoPBR, "color","#c7c7c7");
        sketchfabAPIUtilityInstance.setColor('props',sketchfabAPIUtilityInstance.AlbedoPBR, "color","#ffffff");
        sketchfabAPIUtilityInstance.setColor('vector-wall',sketchfabAPIUtilityInstance.AlbedoPBR, "color","#bbbbbb");
      }
      function setDarkBackground(){
        sketchfabAPIUtilityInstance.api.setBackground({color: [0.150, 0.150, 0.150]}, function() {
          window.console.log('Background changed');
        }); 
        sketchfabAPIUtilityInstance.setColor('floor',sketchfabAPIUtilityInstance.AlbedoPBR, "color","#000000");
        sketchfabAPIUtilityInstance.setColor('props',sketchfabAPIUtilityInstance.AlbedoPBR, "color","#252525");
        sketchfabAPIUtilityInstance.setColor('vector-wall',sketchfabAPIUtilityInstance.AlbedoPBR, "color","#626262");
      }
      function getCupHolderMaterial(){
        let cupHolderMaterialFind = $('.c-cup-holder-material').find("input");
        cupHolderMaterial = cupHolderMaterialFind.val();
      }
      function getAccessoryHolderMaterial(){
        let accessoryHolderMaterialFind = $('.c-accessory-port-material').find("input");
        accessoryHolderMaterial = accessoryHolderMaterialFind.val();
      }
      function getStitchingOption(){
        let stitchingOptionFind = $('.c-premium-stitch-option').find("input:checked");
        if(stitchingOptionFind.length){
          stitchingOption = stitchingOptionFind.val();
        }else{
          stitchingOption = '';
        }
      }
      function getStitchingColor(){
        let stitchingColorFind = $('.c-premium-contrast-stitch-color').find("input");
        stitchingColor = stitchingColorFind.val();
        stitchingColor = stitchingColor.split(/\s/).join('');
      }
      const nappaTextureCavityLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/nappa-leather-v3_qtt6i7.jpg?v=1634446679';
      const nappaTextureNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/nappa-leather-v3_qtt6i7.jpg?v=1634446679';

      const tuscaniaTextureCavityLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/tuscania-pattern-lines-cavity-4.jpg';
      const tuscaniaTextureHeightLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/tuscania-height.jpg';
      const tuscaniaTextureGlossinessLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/tuscania-pattern-lines-glossiness.png';

      const lineaTextureNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/linea-normal_b4tfnb.jpg?v=1634446679';
      const velourTextureCavityLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/Velvet-pattern-cavity_zvnodt.jpg?v=1634446679';
      const velourTextureNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/velvet-normal-map-1024-min_uchx8a.jpg?v=1634446679';
      const velourTextureRoughnessLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/Velvet-pattern-glossy-v2_uvciem.jpg?v=1634446679';
      const singleDiamondTexturePlainNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-stitch-plain.jpg';
      const doubleDiamondTexturePlainNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/double-diamond-stitch-plain.jpg';

      const singleDiamondTextureLineaNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-stitch-linea-min_bfteju.jpg?v=1634446679';
      const doubleDiamondTextureLineaNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/double-diamond-stitch-linea-min_him3ak.jpg?v=1634446679';

      const singleDiamondTextureVelourNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-stitch-velour-min_pbeq4s.jpg?v=1634446679';
      const doubleDiamondTextureVelourNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/double-diamond-stitch-velour-min_cn0t2n.jpg?v=1634446679';

      const singleDiamondTextureNappaNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-nappa-v3-min_wq9oga.jpg?v=1634446679';
      const doubleDiamondTextureNappaNormalLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/double-diamond-nappa-v3-min_qydern.jpg?v=1634446679';
      const singleDiamondStitchNormalTexture = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-stitching-black-and-white.png';
      const doubleDiamondStitchNormalTexture = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/double-stitch-v2.png?v=1631092272';

      let itemObject;
      let matGroup = "primaryMaterials"
      let uid = 'nappa_primary';
      let bmEnable = false;
      let bmFactor = 1;
      let bmLink = ''
      let bmuid = 'nappaBumpLink'
      let cEnable = true;
      let cFactor = .5;
      let cLink = nappaTextureCavityLink;
      let cuid = 'nonec'
      let nmLink = '';
      let nmUid = 'nonen';
      let nmEnable = false;
      let nmFactor = 0;
      let gLink = '';
      let gUid = 'nonenGA';
      let gEnable = true;
      let gFactor = .5;

      let mFactor = .15;
      let sFactor = .7; 
      let opacity = 1;

      let UVScaleX = 18;
      let UVScaleY = 18;

      let cUVScaleX = 18;
      let cUVScaleY = 18;

      uid = 'nappa_primary';
      bmEnable = false;
      bmFactor = 1;
      bmLink = '';
      bmuid = 'nappaBumpLink';

      cEnable = true;
      cFactor = .5;
      cLink = nappaTextureCavityLink;
      cuid = 'nappaCLinkn'

      nmLink = nappaTextureNormalLink;
      nmEnable = true;
      nmFactor = .3;
      nmUid = 'nappaNMlink'
      gLink = '';
      gUid = 'nappaglink';
      gEnable = true;
      gFactor = .7;

      mFactor = .2;    
      sFactor = .4; 

      opacity = 1;

      UVScaleX = 18;
      UVScaleY = 18;

      cUVScaleX = 18;
      cUVScaleY = 18;

      let toCheck;

      function updateMat(toCheck){
        getPrimaryMaterial();
        getTwoToneMaterial();
        getStitchStyle();
        let matChecker = primaryMaterial;
        let toJoin;
        let twoToneMatGroup;
        let twoToneMatChecker;
        let matParent = ["primaryMaterials", "twoToneMaterials", "twoToneHeadrestMaterials"];
        switch(toCheck){
          case 'Primary':
            if(ProductModel == 'Zurich'){
              matParent = ["primaryMaterials", "twoToneMaterials", "twoToneHeadrestMaterials"];
            }else{
              matParent = ["primaryMaterials", "twoToneMaterials"];
            }
            break;
          case 'Zurich Headrest':
            matParent = ["twoToneHeadrestMaterials"];
            break;
          case 'Two Tone Stitch':
            matGroup = "twoToneMaterials";
            if(ProductModel == 'Zurich'){
              matParent = ["twoToneMaterials", "twoToneHeadrestMaterials"];
            }else{
              matParent = ["twoToneMaterials"];
            }
        }
        matParent.forEach(function(itemParent, index){
          if(itemParent == 'twoToneMaterials'){

            if(twoToneMaterial.length){
              if(twoToneMaterial == 'None'){
                matChecker = primaryMaterial;
              }else{
                matChecker = twoToneMaterial;
              }
            }else{
              matChecker = primaryMaterial;
            }
            getStitchStyle();
            if(stitchStyle.length){

              switch(stitchStyle){
                case 'Diamond Stitching':
                  twoToneMaterial;
                  toJoin = ' Diamond'
                  matChecker = matChecker + toJoin;
                  break;
                case 'French Diamond Stitching':
                  twoToneMaterial;
                  toJoin = ' Double Diamond'
                  matChecker = matChecker + toJoin;
                  break;
              }
            }else{
              twoToneMaterial;
              toJoin = ' Diamond'
              matChecker = matChecker + toJoin;
            }
          }
          if(itemParent == 'twoToneHeadrestMaterials'){

            if(twoToneMaterial.length){
              if(twoToneMaterial == 'None'){
                matChecker = primaryMaterial;
              }else{
                matChecker = twoToneMaterial;
              }
            }else{
              matChecker = primaryMaterial;
            }
          }
          switch(matChecker){
            case 'Nappa Leather 11000':
              uid = 'nappa_primary';
              bmEnable = false;
              bmFactor = 1;
              bmLink = '';
              bmuid = 'nappaBumpLink';
              cEnable = true;
              cFactor = .2;
              cLink = nappaTextureCavityLink;
              cuid = 'nappaCLinkn'
              nmLink = nappaTextureNormalLink;
              nmEnable = true;
              nmFactor = .5;
              nmUid = 'nappaNMlink'
              mFactor = .2;     
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'nappaglossylink';
              gEnable = true;
              gFactor = .7;
              sFactor = .4; 
              opacity = 1;
              UVScaleX = 18;
              UVScaleY = 18;
              cUVScaleX = 18;
              cUVScaleY = 18;
              break;
            case 'Nappa Leather 11000 Diamond':
              uid = 'nappa_primary_diamond';
              bmEnable = false;
              bmFactor = 1;
              bmLink = '';
              bmuid = 'nappattBumpLink';
              cEnable = true;
              cFactor = .2;
              cLink = nappaTextureCavityLink;
              cuid = 'nappattCLinkn'
              nmLink = singleDiamondTextureNappaNormalLink;
              nmEnable = true;
              nmFactor = 1;
              nmUid = 'nappattNMDlink'
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'nappaglossylinkdt';
              gEnable = true;
              gFactor = .7;
              mFactor = .2;
              sFactor = .5; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 18;
              cUVScaleY = 18;
              break;              
            case 'Nappa Leather 11000 Double Diamond':
              uid = 'nappa_primary_double_diamond';
              bmEnable = false;
              bmFactor = 1;
              bmLink = '';
              bmuid = 'nappaddttBumpLink';
              cEnable = true;
              cFactor = .2;
              cLink = nappaTextureCavityLink;
              cuid = 'nappaddttCLinkn'
              nmLink = doubleDiamondTextureNappaNormalLink;
              nmEnable = true;
              nmFactor = 1;
              nmUid = 'nappaddttNMDlink'
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'nappaglossylinkdt';
              gEnable = true;
              gFactor = .7;
              mFactor = .2;
              sFactor = .5; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 18;
              cUVScaleY = 18;
              break;
            case 'Linea Collection':
              uid = 'linea_primary';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'lineaBumpLink';
              cEnable = true;
              cFactor = .4;
              cLink = lineaTextureNormalLink;
              cuid = 'nmlineaTextureNormalLink';
              nmLink = lineaTextureNormalLink;
              nmUid = 'nmlineaTextureNormalLink';
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'lineanappaglossylinkdt';
              gEnable = true;
              gFactor = .45;
              nmEnable = true;
              nmFactor = .5;
              mFactor = .2;
              sFactor = .3; 
              opacity = 1;
              UVScaleX = 25;
              UVScaleY = 25;
              cUVScaleX = 25;
              cUVScaleY = 25;
              break;
            case 'Linea Collection Diamond':
              uid = 'linea_primary_diamond';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'dttlineadttBumpLink';
              cEnable = true;
              cFactor = .4;
              cLink = lineaTextureNormalLink;
              cuid = 'ddtnmlineaTextureNormalLink';
              nmLink = singleDiamondTextureLineaNormalLink;
              nmUid = 'dttnmlineaTextureNormalLink';
              nmEnable = true;
              nmFactor = 1;
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'lineaddnappaglossylinkdt';
              gEnable = true;
              gFactor = .45;
              mFactor = .2;
              sFactor = .3; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 25;
              cUVScaleY = 25;
              break;
            case 'Linea Collection Double Diamond':
              uid = 'linea_primary_diamond';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'lineaddttBumpLink';
              cEnable = true;
              cFactor = .4;
              cLink = lineaTextureNormalLink;
              cuid = 'ddttnmlineaTextureNormalLink';
              nmLink = doubleDiamondTextureLineaNormalLink;
              nmUid = 'dttnmlineaTextureNormalLink';
              nmEnable = true;
              nmFactor = 1;
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'lineaglossylinkdt';
              gEnable = true;
              gFactor = .45;
              mFactor = .2;
              sFactor = .3; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 25;
              cUVScaleY = 25;
              break;
            case 'Vegan Nappa Leather':
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'vlineaBumpLink';
              cEnable = true;
              cFactor = .4;
              cLink = lineaTextureNormalLink;
              cuid = 'vnmlineaTextureNormalLink';
              nmLink = lineaTextureNormalLink;
              nmUid = 'vnmlineaTextureNormalLink';
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'veganglossylinkdt';
              gEnable = true;
              gFactor = .45;
              nmEnable = true;
              nmFactor = .5;
              mFactor = .2;
              sFactor = .3; 
              opacity = 1;
              UVScaleX = 25;
              UVScaleY = 25;
              cUVScaleX = 25;
              cUVScaleY = 25;
              break;
            case 'Vegan Nappa Leather Diamond':
              uid = 'linea_primary_diamond';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'dttlineadttBumpLink';
              cEnable = true;
              cFactor = .4;
              cLink = lineaTextureNormalLink;
              cuid = 'ddtnmlineaTextureNormalLink';
              nmLink = singleDiamondTextureLineaNormalLink;
              nmUid = 'dttnmlineaTextureNormalLink';
              nmEnable = true;
              nmFactor = 1;
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'lineaddnappaglossylinkdt';
              gEnable = true;
              gFactor = .45;
              mFactor = .2;
              sFactor = .3; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 25;
              cUVScaleY = 25;
              break;
            case 'Vegan Nappa Leather Double Diamond':
              uid = 'linea_primary_double_diamond';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'lineaddttBumpLink';
              cEnable = true;
              cFactor = .4;
              cLink = lineaTextureNormalLink;
              cuid = 'ddttnmlineaTextureNormalLink';
              nmLink = doubleDiamondTextureLineaNormalLink;
              nmUid = 'dttnmlineaTextureNormalLink';
              nmEnable = true;
              nmFactor = 1;
              gLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              gUid = 'lineaglossylinkdt';
              gEnable = true;
              gFactor = .45;
              mFactor = .2;
              sFactor = .3; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 25;
              cUVScaleY = 25;
              break;
            case 'Tuscania Collection':
              uid = 'tuscania_primary';
              bmEnable = false;
              bmFactor = 0;
              bmLink = tuscaniaTextureHeightLink;
              bmuid = 'tuscaniaBumpLink';
              cEnable = true;
              cFactor = .7;
              cLink = tuscaniaTextureCavityLink;
              cuid = 'ttTuscaniaTextureNormalLink';
              nmLink = '';
              nmUid = '';
              nmEnable = false;
              nmFactor = 0;
              gLink = tuscaniaTextureGlossinessLink;
              gUid = 'tttuscaniaglink';
              gEnable = true;
              gFactor = .75;
              mFactor = .1;
              sFactor = .5; 
              opacity = 1;
              UVScaleX = 6;
              UVScaleY = 6;
              cUVScaleX = 6;
              cUVScaleY = 6;
              break;
            case 'Tuscania Collection Diamond':
              uid = 'tuscania_primary';
              bmEnable = false;
              bmFactor = 0;
              bmLink = ' ';
              bmuid = 'dtttuscaniaBumpLink';
              cEnable = true;
              cFactor = .7;
              cLink = tuscaniaTextureCavityLink;
              cuid = 'ttTuscaniaTextureCavityLink';
              nmLink = singleDiamondTexturePlainNormalLink;
              nmUid = 'ddttTuscaniaNormalLink';
              nmEnable = true;
              nmFactor = 1;
              gLink = tuscaniaTextureGlossinessLink;
              gUid = 'ttdtuscaniaglink';
              gEnable = true;
              gFactor = .75;
              mFactor = .1;
              sFactor = .5; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 6;
              cUVScaleY = 6;
              break;
            case 'Tuscania Collection Double Diamond':
              uid = 'ddtttuscania_primary';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'ddtttuscaniaBumpLink';
              cEnable = true;
              cFactor = .7;
              cLink = tuscaniaTextureCavityLink;
              cuid = 'ddttTuscaniaTextureCavityLink';
              nmLink = doubleDiamondTexturePlainNormalLink;
              nmUid = 'ddttTuscaniaTextureNormalLink';
              nmEnable = true;
              nmFactor = 1;
              gLink = tuscaniaTextureGlossinessLink;
              gUid = 'ttvdafelourglink';
              gEnable = true;
              gFactor = .75;
              mFactor = .1;
              sFactor = .5; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 6;
              cUVScaleY = 6;
              break;
            case 'Parisian Velour':
              uid = 'velor_primary';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'perisianbump';
              cEnable = true;
              cFactor = .7;
              cLink = velourTextureCavityLink;
              cuid = 'perisiancavity';
              nmLink = velourTextureNormalLink;
              nmUid = 'perisiannormal';
              nmEnable = true;
              nmFactor = 1;
              gLink = velourTextureRoughnessLink;
              gUid = 'perisianglossy';
              gEnable = true;
              gFactor = .65;
              mFactor = .75;
              sFactor = .2; 
              opacity = 1;
              UVScaleX = 27;
              UVScaleY = 27;
              cUVScaleX = 30;
              cUVScaleY = 30;
              break;
            case 'Parisian Velour Diamond':
              uid = 'velor_primary';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'perisianbumpdiamond';
              cEnable = true;
              cFactor = .7;
              cLink = velourTextureCavityLink;
              cuid = 'perisiancavitydiamond';
              nmLink = singleDiamondTextureVelourNormalLink;
              nmUid = 'perisiannormaldiamond';
              nmEnable = true;
              nmFactor = 1;
              gLink = velourTextureRoughnessLink;
              gUid = 'perisiaglossydiamond';
              gEnable = true;
              gFactor = .65;
              mFactor = .75;
              sFactor = .2; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 10;
              cUVScaleY = 10;
              break;
            case 'Parisian Velour Double Diamond':
              uid = 'velor_primary';
              bmEnable = false;
              bmFactor = 0;
              bmLink = '';
              bmuid = 'perisianbumpdiamonddouble';
              cEnable = true;
              cFactor = .7;
              cLink = velourTextureCavityLink;
              cuid = 'perisiancavitydiamonddouble';
              nmLink = doubleDiamondTextureVelourNormalLink;
              nmUid = 'perisiannormaldiamonddouble';
              nmEnable = true;
              nmFactor = 1;
              gLink = velourTextureRoughnessLink;
              gUid = 'perisiaglossydiamonddouble';
              gEnable = true;
              gFactor = .65;
              mFactor = .75;
              sFactor = .2; 
              opacity = 1;
              UVScaleX = diamondUVX;
              UVScaleY = diamondUVY;
              cUVScaleX = 10;
              cUVScaleY = 10;
              break;
          }
          eval(itemParent).forEach(function(item, index){
            itemObject = sketchfabAPIUtilityInstance.getMaterialObject(item);
            itemObject.channels.NormalMap = {
              enable: false,
              factor: 0,
            };
            itemObject.channels.GlossinessPBR = {
              enable: true,
              factor: 0,
            };
            itemObject.channels.BumpMap = {
              enable: false,
              factor: 0
            };
            itemObject.channels.CavityPBR = {
              enable: false,
              factor: 0
            };
            if(cEnable == true){
              itemObject.channels.CavityPBR = {
                enable: cEnable,
                factor: cFactor,

              };
              sketchfabAPIUtilityInstance.addTexture(cLink,cuid,false);
              sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.CavityPBR,cuid);
              sketchfabAPIUtilityInstance.api.setUVScale(itemObject, 'CavityPBR', cUVScaleX, cUVScaleY);
            }
            if(gLink.length){
              sketchfabAPIUtilityInstance.addTexture(gLink,gUid,false);
              sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.GlossinessPBR,gUid);
              sketchfabAPIUtilityInstance.api.setUVScale(itemObject, 'GlossinessPBR', cUVScaleX, cUVScaleY);
            }else{
              sketchfabAPIUtilityInstance.removeTextureFromMaterialChannel(item,sketchfabAPIUtilityInstance.GlossinessPBR);
            }
            if(bmEnable == true){
              itemObject.channels.BumpMap = {
                enable: bmEnable,
                factor: bmFactor,
              };
              sketchfabAPIUtilityInstance.addTexture(bmLink,bmuid,false);
              sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.BumpMap,bmuid);
              sketchfabAPIUtilityInstance.api.setUVScale(itemObject, 'BumpMap', UVScaleX, UVScaleY);
            }
            if(nmEnable == true){
              itemObject.channels.NormalMap = {
                enable: nmEnable,
                factor: nmFactor,
              };
              sketchfabAPIUtilityInstance.addTexture(nmLink,nmUid,false);
              sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.NormalMap,nmUid);
              sketchfabAPIUtilityInstance.api.setUVScale(itemObject, 'NormalMap', UVScaleX, UVScaleY);

            }
            sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.MetalnessPBR,mFactor);
            sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.SpecularF0,sFactor);
            sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,gFactor);
            sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,cFactor);
          });
        });
      }
      function updateStitchStyle(item){
        let textureLink = singleDiamondTexturePlainNormalLink;
        let UVScaleX = 10;
        let UVScaleY = 10;
        let uid = "stitch-single-diamond";
        let normalFactor = 1;
        let twoToneMaterialType;
        getTwoToneMaterial();
        if(twoToneMaterial.length){
          twoToneMaterialType = twoToneMaterial;
        }else{
          getPrimaryMaterial();
          twoToneMaterialType = primaryMaterial;
        }
        getStitchStyle();

        if(stitchStyle == 'No Stitching Style'){
//           console.log('no stitch');
        }else{
          if(stitchStyle.length){
            switch (stitchStyle) {
              case 'Diamond Stitch':
                switch (twoToneMaterialType) {
                  case 'Tuscania':
                    textureLink = singleDiamondTexturePlainNormalLink;
                    break;
                  case 'Linea':
                    textureLink = singleDiamondTextureLineaNormalLink;
                    break;
                  case 'Velour':
                    textureLink = singleDiamondTextureVelourNormalLink;
                    break;
                  case 'Nappa Leather':
                    textureLink = singleDiamondTexturePlainNormalLink;
                    break;
                  case 'Vegan Leather':
                    textureLink = singleDiamondTextureLineaNormalLink;
                    break;
                }
                UVScaleX = 10;
                UVScaleY = 10;
                uid = "stitch-texture-single-diamond";
                normalFactor = 1;
                break;
              case 'Double Diamond Stitch': 
                switch (twoToneMaterialType) {
                  case 'Tuscania':
                    textureLink = doubleDiamondTexturePlainNormalLink;
                    break;
                  case 'Linea':
                    textureLink = doubleDiamondTextureLineaNormalLink;
                    break;
                  case 'Velour':
                    textureLink = doubleDiamondTextureVelourNormalLink;
                    break;
                  case 'Nappa Leather':
                    textureLink = doubleDiamondTexturePlainNormalLink;
                    break;
                  case 'Vegan Leather':
                    textureLink = doubleDiamondTextureLineaNormalLink;
                    break;
                }
                UVScaleX = 10;
                UVScaleY = 10;
                uid = "stitch-texture-double-diamond";
                normalFactor = 1;
                break;
              case 'No Stitching Style': 
                UVScaleX = 10;
                UVScaleY = 10;
                uid = "stitch-texture-double-diamond";
                normalFactor = 1;
                break;
            }
          }else{
            textureLink = singleDiamondTexturePlainNormalLink;
            UVScaleX = 10;
            UVScaleY = 10;
            uid = "stitch-single-diamond";
            normalFactor = 1;
          } 
          sketchfabAPIUtilityInstance.getMaterialObject(item).channels.BumpMap = {
            enable: false,
            factor: 0,
          };
          sketchfabAPIUtilityInstance.getMaterialObject(item).channels.NormalMap = {
            enable: true,
            factor: 0,
          };
          sketchfabAPIUtilityInstance.addTexture(textureLink,uid,true);
          sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.NormalMap,uid);
          sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.NormalMap,normalFactor);
          sketchfabAPIUtilityInstance.api.setUVScale(sketchfabAPIUtilityInstance.getMaterialObject(item), 'NormalMap', UVScaleX, UVScaleY);
        }
      }
      function updateUVScale(mat, channelName) {
        var scaleX = 10;
        var scaleY = 10;
        sketchfabAPIUtilityInstance.api.setUVScale(mat, 'Opacity', scaleX, scaleY);
      };
      function updateStitch(item){
        let stitchLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-stitching.png';
        let suid = 'stitch-single-diamond';
        let UVScaleX = 10;
        let UVScaleY = 10;
        let opacity = 1;
        getStitchStyle();
        if(stitchStyle.length){
          switch (stitchStyle) {
            case 'Diamond Stitching':
              stitchLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-stitching.png';
              suid = 'stitch-single-diamond-new';
              UVScaleX = 10;
              UVScaleY = 10;
              opacity = 1;
              break;
            case 'French Diamond Stitching': 
              stitchLink = doubleDiamondStitchNormalTexture;
              suid = 'stitch-double-diamond';
              UVScaleX = 10;
              UVScaleY = 10;
              opacity = 1;
              break;
            case 'Modern Finish': 
              stitchLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/empty-texture.jpg';
              suid = 'stitch-no-pattern';
              UVScaleX = 10;
              UVScaleY = 10;
              opacity = 0;
              break;
          }
        }else{
          stitchLink = 'https://cdn.shopify.com/s/files/1/0069/9373/9831/files/single-diamond-stitching.png';
          suid = 'stitch-single-diamondnew';
          UVScaleX = 10;
          UVScaleY = 10;
          opacity = 1;
        } 
        sketchfabAPIUtilityInstance.addTexture(stitchLink,suid,false);
        sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.Opacity,suid);
        sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.Opacity,opacity);
        if(item == 'flat_headrest_contrast_stitch'){
          getEmbroideryStyle();
          if(embroideryStyle.length){
            if(embroideryStyle == 'None'){
              sketchfabAPIUtilityInstance.addTexture(stitchLink,suid,false);
              sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.Opacity,suid);
              sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.Opacity,opacity);      
            }else{
              sketchfabAPIUtilityInstance.addTexture(stitchLink,suid,false);
              sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.Opacity,suid);
              sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.Opacity,0);
            }
          }
        }else{
          sketchfabAPIUtilityInstance.addTexture(stitchLink,suid,false);
          sketchfabAPIUtilityInstance.setMaterialUIDPending(item,sketchfabAPIUtilityInstance.Opacity,suid);
          sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.Opacity,opacity);
        }
      }
      stitchingStyleMaterials.forEach(function(item, index){
        updateStitch(item);
      });
      function updateColor(color, item, index) {  
        sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",eval(color));
      }
      function updateEmitColor(color, item, index) {  
        sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.EmitColor, "color",eval(color));
      }
      function toggleOpacity(item, index, opacity) {
        sketchfabAPIUtilityInstance.setOpacity(item,opacity);       
      }
      function uch(c, m, s, g,item) {
        sketchfabAPIUtilityInstance.setColor(item,sketchfabAPIUtilityInstance.AlbedoPBR, "color",c);
        sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.MetalnessPBR ,m);
        sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.SpecularF0 ,s);
        sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR ,g);
      }
      function getTextColor(){
        TextColor = 'Default'
        TextColorFind = $('.custom-font-color').find("input");
        TextColor = TextColorFind.val();
      }
      toCheck = 'Primary';
      updateMat(toCheck);
      getPrimaryColor();
      doubleMaterials.forEach(function(item, index){
        updateColor(color, item, index);
      });
      setTimeout(function(){
        $('.loadingScreen-customizer').remove();
        initSketchFab = true;
      }, 2000);

      var changeCameraPositionX;
      var changeCameraPositionY;
      var changeCameraPositionZ;
      var changeCameraTargetX;
      var changeCameraTargetY;
      var changeCameraTargetZ;

      var cameraPositiontoHeadrest = false;
      var cameraPositiontoStitch = false;
      var cameraPositiontoPipe = false;
      var cameraPositiontoRGB = false;
      var cameraPositiontoWood = false;
      var cameraPositiontoCupHolder = false;
      var cameraPositiontoPerforated = false;
      var cameraPositiontoDefault = true;

      function setDefaultCameraPosition(){
        if(setDefaultCameraPosition !== true){
          cameraPositiontoStitch = false;
          cameraPositiontoPerforated = false;
          cameraPositiontoPipe = false;
          cameraPositiontoRGB = false;
          cameraPositiontoWood = false;
          cameraPositiontoCupHolder = false;
          cameraPositionToHeadrest = false;
          cameraPositiontoHeadrest = false;
          cameraPositiontoDefault = true;
          setTimeout(function(){  
            let options = {
              position: [startingCameraPosition[0], startingCameraPosition[1], startingCameraPosition[2]],
              target: [startingCameraTarget[0], startingCameraTarget[1], startingCameraTarget[2]],
              zoomIn: 90,
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
              if (!err) {
                // window.console.log('Camera moved');
              }
            });
          }, 400);
          setTimeout(function(){  
            cameraPositionToHeadrest = false;
            sketchfabAPIUtilityInstance.api.setCameraLookAt([startingCameraPosition[0], startingCameraPosition[1], startingCameraPosition[2]], [startingCameraTarget[0], startingCameraTarget[1], startingCameraTarget[2]], .2, function(err) {
              if (!err) {
                // window.console.log('Camera moved');
              }
            });
          }, 200);
        }
      }
      function setHeadrestCameraPosition(){
        if(cameraPositiontoHeadrest !== true){
          cameraPositiontoStitch = false;
          cameraPositiontoPerforated = false;
          cameraPositiontoPipe = false;
          cameraPositiontoRGB = false;
          cameraPositiontoWood = false;
          cameraPositiontoCupHolder = false;
          cameraPositionToHeadrest = false;
          cameraPositiontoHeadrest = true;
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
      }
      sketchfabAPIUtilityInstance.api.setCameraEasing('easeLinear');
      function changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ){
        cameraPositiontoStitch = false;
        cameraPositiontoPipe = false;
        cameraPositiontoRGB = false;
        cameraPositiontoWood = false;
        cameraPositiontoCupHolder = false;
        cameraPositiontoDefault = false;
        if(cameraPositiontoHeadrest == true){
          setDefaultCameraPosition();
          cameraPositiontoHeadrest = false;
        }else{
          cameraPositiontoHeadrest = false;
        }
        setTimeout(function(){  
          sketchfabAPIUtilityInstance.api.setCameraLookAt([changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ], [changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ], .3, function(err) {
            if (!err) {
              window.console.log('Camera moved');
            }
          });
        }, 390);
        setTimeout(function(){  
          sketchfabAPIUtilityInstance.api.setCameraLookAt([changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ], [changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ], .3, function(err) {
            if (!err) {
              window.console.log('Camera moved');
            }
          });
        }, 690);

      }
      function updateText(){
        getTextColor();
        TextColor = TextColor.split(/\s/).join('');
        var finalFontSize
        var finalText = $('.custom-text input').val();
        var finalFont = $('.custom-font-select input').val();
        var finalColor = $('.custom-font-color input').val();
        var finalTextCount = finalText.length;
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
        ctx.font = finalFontSize + finalFont;
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
      function updateStitchColor(){
        if(stitchingOption.length){
          getStitchingColor();
          defaultStitchingMaterials.forEach(function(item, index){
            updateColor(color, item, index);
          });
          stitchingStyleMaterials.forEach(function(item, index){
            updateColor(color, item, index);
          });
        }else{
          if(twoToneMaterial.length){
            if(twoToneMaterial == 'None'){
              getPrimaryColor();
              defaultStitchingMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }else{
              getPrimaryColor();
              defaultStitchingMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              getTwoToneColor();
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }
        }
      }
      $('.c-get-primary-material input').bind('touchend click', function(){
        setDefaultCameraPosition();
        getPrimaryMaterial();
        if(primaryMaterial.length){
          toCheck = 'Primary';
          updateMat(toCheck);
          setDefaultCameraPosition();
          getPrimaryColor();
          getTwoToneMaterial();
          if(twoToneMaterial.length){
            if(twoToneMaterial == 'None'){
              primaryMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              twoToneMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              if(twoTonePiping){
                twoTonePiping.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }
              if(twoToneHeadrestMaterials){
                twoToneHeadrestMaterials.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }
            }else{
              primaryMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }else{
            primaryMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            twoToneMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            if(twoTonePiping){
              twoTonePiping.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(twoToneHeadrestMaterials){
              twoToneHeadrestMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }
          getPrimaryColor();
          getTwoToneMaterial();
          getStitchingOption();
          if(stitchingOption.length){
//             console.log('contrast');
          }else{
            if(twoToneMaterial.length){
              if(twoToneMaterial == 'None'){
                getPrimaryColor();
                defaultStitchingMaterials.forEach(function(item, index){
                  updateColor(color, item, index);
                });
                stitchingStyleMaterials.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }else{
                getPrimaryColor();
                defaultStitchingMaterials.forEach(function(item, index){
                  updateColor(color, item, index);
                });
                getTwoToneColor();
                stitchingStyleMaterials.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }
            }else{
              getPrimaryColor();
              defaultStitchingMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }
          getPipingMaterial();
          if(pipingMaterial.length){
            if(pipingMaterial == 'None'){
              pipingMaterials.forEach(function(item, index){ 
                toggleOpacity(item, index, 0);
              });
              defaultSubPiping.forEach(function(item, index){ 
                toggleOpacity(item, index, 1);
              });
            }
          }else{
            pipingMaterials.forEach(function(item, index){ 
              toggleOpacity(item, index, 0);
            });
            defaultSubPiping.forEach(function(item, index){ 
              toggleOpacity(item, index, 1);
            });
          }
          getPerforatedStyle();
          if(primaryMaterial == 'Parisian Velour'){
            $('#perforated-options-holder').hide();
          }else{
            $('#perforated-options-holder').show();
          }
          if(perforatedStyle.length){
            toggleOpacity('flat_perforated_leather', 1, 0);
          }else{
            toggleOpacity('flat_perforated_leather', 1, 0);
          }
        }
      });
      $('.c-get-two-tone-material  input').bind('touchend click', function(){
        setDefaultCameraPosition();
        getTwoToneMaterial();
        getStitchingOption();
        if(twoToneMaterial.length){
          toCheck = 'Two Tone Stitch';
          updateMat(toCheck);
          if(twoToneMaterial == 'None'){
            if(stitchingOption.length){
              getPrimaryColor();
              twoToneMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              if(twoTonePiping){
                twoTonePiping.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }
              if(twoToneHeadrestMaterials){
                twoToneHeadrestMaterials.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }
            }else{
              getPrimaryColor();
              twoToneMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              if(twoTonePiping){
                twoTonePiping.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }
              if(twoToneHeadrestMaterials){
                twoToneHeadrestMaterials.forEach(function(item, index){
                  updateColor(color, item, index);
                });
              }
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }else{
            getTwoToneColor();
            twoToneMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            }); 
            if(twoTonePiping){
              twoTonePiping.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(twoToneHeadrestMaterials){
              twoToneHeadrestMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(stitchingOption.length){
//               console.log('ss');
            }else{
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }
        }else{
          toCheck = 'Two Tone Stitch';
          updateMat(toCheck);
          if(stitchingOption.length){
//             console.log('ss');
            getPrimaryColor();
            twoToneMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            if(twoTonePiping){
              twoTonePiping.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(twoToneHeadrestMaterials){
              twoToneHeadrestMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }else{
            getPrimaryColor();
            twoToneMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            if(twoTonePiping){
              twoTonePiping.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(twoToneHeadrestMaterials){
              twoToneHeadrestMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            stitchingStyleMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }
        }
        if(twoToneMaterial == 'Parisian Velour'){
          $('#perforated-options-holder').hide();
        }else if(twoToneMaterial == 'None'){
          getPrimaryMaterial();
          if(primaryMaterial == 'Parisian Velour'){
            $('#perforated-options-holder').hide();
          }else{
            $('#perforated-options-holder').show();

          }

        }else{
          $('#perforated-options-holder').show();

        }
        getPerforatedStyle();
        if(twoToneMaterial == 'Parisian Velour'){
          $('#perforated-options-holder').hide();
        }
        if(perforatedStyle.length){
          toggleOpacity('flat_perforated_leather', 1, 0);
        }else{
          toggleOpacity('flat_perforated_leather', 1, 0);
        }
      });
      $('.c-get-primary-color .swatch-image').bind('touchend click', function(){
        setDefaultCameraPosition();
        getPrimaryColor();
        getTwoToneMaterial();
        getStitchingOption();
        if(twoToneMaterial.length){
          if(twoToneMaterial == 'None'){
            primaryMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            twoToneMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            if(twoTonePiping){
              twoTonePiping.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(twoToneHeadrestMaterials){
              twoToneHeadrestMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }else{
            primaryMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }
        }else{
          primaryMaterials.forEach(function(item, index){
            updateColor(color, item, index);
          });
          twoToneMaterials.forEach(function(item, index){
            updateColor(color, item, index);
          });
          if(twoTonePiping){
            twoTonePiping.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }
          if(twoToneHeadrestMaterials){
            twoToneHeadrestMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }
        }
        if(stitchingOption.length){
//           console.log('contrast');
        }else{
          if(twoToneMaterial.length){
            if(twoToneMaterial == 'None'){
              getPrimaryColor();
              defaultStitchingMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }else{
              getPrimaryColor();
              defaultStitchingMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              getTwoToneColor();
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }else{
            getPrimaryColor();
            defaultStitchingMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            stitchingStyleMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }
        }
        getPipingMaterial();
        if(pipingMaterial.length){
          if(pipingMaterial == 'None'){
            pipingMaterials.forEach(function(item, index){ 
              toggleOpacity(item, index, 0);
            });
            if(defaultSubPiping){
              defaultSubPiping.forEach(function(item, index){ 
                toggleOpacity(item, index, 1);
              });
            }
          }else{
            pipingMaterials.forEach(function(item, index){ 
              toggleOpacity(item, index, 1);
            });
            if(defaultSubPiping){
              defaultSubPiping.forEach(function(item, index){ 
                toggleOpacity(item, index, 0);
              });
            }
          }
        }else{
          pipingMaterials.forEach(function(item, index){ 
            toggleOpacity(item, index, 0);
          });
          if(defaultSubPiping){
            defaultSubPiping.forEach(function(item, index){ 
              toggleOpacity(item, index, 0);
            });
          }
        }
      });
      $('.c-get-two-tone-color .swatch-image').bind('touchend click', function(){
        setDefaultCameraPosition();
        getTwoToneColor();
        getTwoToneMaterial();
        getStitchingOption();
        if(type == 'Advanced'){
          if(twoToneMaterial.length){
            twoToneMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            if(twoTonePiping){
              twoTonePiping.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(twoToneHeadrestMaterials){
              twoToneHeadrestMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
            if(stitchingOption.length){
//               console.log('ss');
            }else{
              stitchingStyleMaterials.forEach(function(item, index){ 
                updateColor(color, item, index);
              });
            }
          }
        }
      });
      $('.c-perforated-leather').bind('touchend click', function(){
        if(cameraPositiontoPerforated !== true){
          changeCameraPositionX =  changeCameraPositionToPerforatedX;
          changeCameraPositionY =  changeCameraPositionToPerforatedY;
          changeCameraPositionZ = changeCameraPositionToPerforatedZ;
          changeCameraTargetX = changeCameraTargetToPerforatedX;
          changeCameraTargetY = changeCameraTargetToPerforatedY;
          changeCameraTargetZ = changeCameraTargetToPerforatedZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoStitch = true;
        }
        let selectedPerforatedLeather = perforatedStyle;
        getPerforatedStyle();
        if (selectedPerforatedLeather != perforatedStyle){
          if(perforatedStyle.length){
            toggleOpacity('flat_perforated_leather', 1, 1);
          }else{
            toggleOpacity('flat_perforated_leather', 1, 0);
          }
        }
      });
      $('.c-premium-arm-style').bind('touchend click', function(){
        if(cameraPositiontoWood !== true){      
          changeCameraPositionX = changeCameraPositionToWoodX;
          changeCameraPositionY = changeCameraPositionToWoodY;
          changeCameraPositionZ = changeCameraPositionToWoodZ;
          changeCameraTargetX = changeCameraTargetToWoodX;
          changeCameraTargetY = changeCameraTargetToWoodY;
          changeCameraTargetZ = changeCameraTargetToWoodZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoWood = true;
        }
        let selectedArmStyle = armStyle;
        getArmStyle();
        getWoodFinish();
        getWoodColor();
        if (selectedArmStyle != armStyle){
          if(cameraPositiontoWood !== true){
            changeCameraPositionX = changeCameraPositionToWoodX;
            changeCameraPositionY = changeCameraPositionToWoodY;
            changeCameraPositionZ = changeCameraPositionToWoodZ;
            changeCameraTargetX = changeCameraTargetToWoodX;
            changeCameraTargetY = changeCameraTargetToWoodY;
            changeCameraTargetZ = changeCameraTargetToWoodZ;
            changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
            cameraPositiontoWood = true;
          }
          if(armStyle == 'Add Solid Red Oak Arms'){
            woodArmAllMaterials.forEach(function(item, index){ 
              let opacity = 1;
              toggleOpacity(item, index, opacity)
            });
            sansWoodArmMaterials.forEach(function(item, index){ 
              let opacity = 0;
              toggleOpacity(item, index, opacity)
            });
            getWoodColor();
            woodMaterials.forEach(function(item, index){ 
              updateColor(woodColor, item, index);
            });
          }else{
            woodArmAllMaterials.forEach(function(item, index){ 
              let opacity = 0;
              toggleOpacity(item, index, opacity);
            });
            sansWoodArmMaterials.forEach(function(item, index){ 
              let opacity = 1;
              toggleOpacity(item, index, opacity)
            });
          }
          getWoodFinish();
          switch(woodFinish){
            case 'Full Pore Ultra High Gloss':
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,.91);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,.8);
              });
              break;
            case 'Full Pore Smooth Satin Finish':
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,.6);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,.8);
              });
              break;
            case 'Open Pore Matt Finish':
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,.2);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,.8);
              });
              break;
          }
          getWoodColor();
          woodMaterials.forEach(function(item, index){ 
            updateColor(woodColor, item, index);
          });
        }
      });
      $('.c-premium-wood-finish .swatch-image').bind('touchend click', function(){
        if(cameraPositiontoWood !== true){      
          changeCameraPositionX = changeCameraPositionToWoodX;
          changeCameraPositionY = changeCameraPositionToWoodY;
          changeCameraPositionZ = changeCameraPositionToWoodZ;
          changeCameraTargetX = changeCameraTargetToWoodX;
          changeCameraTargetY = changeCameraTargetToWoodY;
          changeCameraTargetZ = changeCameraTargetToWoodZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoWood = true;
        }
        let selectedWoodFinish = woodFinish;
        getWoodFinish();
        if (selectedWoodFinish != woodFinish){
          switch(woodFinish){
            case 'Full Pore Ultra High Gloss':
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,.91);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,.8);
              });
              break;
            case 'Full Pore Smooth Satin Finish':
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,.6);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,.8);
              });
              break;
            case 'Open Pore Matt Finish':
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,.2);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,.8);
              });
              break;
          }
          getWoodColor();
          woodMaterials.forEach(function(item, index){ 
            updateColor(woodColor, item, index);
          });
        }
      });
      $('.c-premium-wood-color .swatch-image').bind('touchend click', function(){
        if(cameraPositiontoWood !== true){      
          changeCameraPositionX = changeCameraPositionToWoodX;
          changeCameraPositionY = changeCameraPositionToWoodY;
          changeCameraPositionZ = changeCameraPositionToWoodZ;
          changeCameraTargetX = changeCameraTargetToWoodX;
          changeCameraTargetY = changeCameraTargetToWoodY;
          changeCameraTargetZ = changeCameraTargetToWoodZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoWood = true;
        }
        let selectedWoodColor = woodColor;
        getWoodColor();
        if (selectedWoodColor != woodColor){
          woodMaterials.forEach(function(item, index){ 
            updateColor(woodColor, item, index);
          });
          getWoodFinish();
          if (woodFinish == 'Full Pore Ultra High Gloss'){
            if (woodColor == 'PianoBlack'){
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,0);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,1);
              });
            }else{
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.CavityPBR,.8);
              });
              woodMaterials.forEach(function(item, index){ 
                sketchfabAPIUtilityInstance.setFactor(item,sketchfabAPIUtilityInstance.GlossinessPBR,.91);
              });
            }
          }
        }
      });
      $('.dark-mode-toggle').bind('click', function(){

        if($('.dark-mode-toggle').hasClass('is-dark')){
          $('.dark-mode-toggle').removeClass('is-dark');
          setLightBackground();
        }else{
          $('.dark-mode-toggle').addClass('is-dark');
          setDarkBackground();
        }
      });
      $('.c-premium-stitch-style .swatch-image').bind('touchend click', function(){
        if(cameraPositiontoStitch !== true){
          changeCameraPositionX =  changeCameraPositionToPerforatedX;
          changeCameraPositionY =  changeCameraPositionToPerforatedY;
          changeCameraPositionZ = changeCameraPositionToPerforatedZ;
          changeCameraTargetX = changeCameraTargetToPerforatedX;
          changeCameraTargetY = changeCameraTargetToPerforatedY;
          changeCameraTargetZ = changeCameraTargetToPerforatedZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoStitch = true;
        }
        let selectedStitchStyle = stitchStyle;
        getStitchStyle();
        if(stitchStyle.length){
          toCheck = 'Two Tone Stitch';
          updateMat(toCheck);
          stitchingStyleMaterials.forEach(function(item, index){
            updateStitch(item);
          });
          if(stitchStyle == 'Modern Finish'){
            getPerforatedStyle;
            $('#perforated-options-holder').hide();    
            if(perforatedStyle){
              $('.c-perforated-leather input').trigger("click");
            }
          }else{
            getTwoToneMaterial();
            if(twoToneMaterial == 'None'){
              getPrimaryMaterial();
              if(primaryMaterial == 'Parisian Velour'){
              }else{
                $('#perforated-options-holder').show();
              }
            }else if(twoToneMaterial == 'Parisian Velour'){
//               console.log('false');
            }else{
              $('#perforated-options-holder').show();
            }
          }
        }else{
          stitchingStyleMaterials.forEach(function(item, index){
            updateStitch(item);
          });
        }
      });
      $('.c-premium-stitch-option').bind('touchend click', function(){
        getStitchingOption();
        if(cameraPositiontoStitch !== true){
          changeCameraPositionX =  changeCameraPositionToPerforatedX;
          changeCameraPositionY =  changeCameraPositionToPerforatedY;
          changeCameraPositionZ = changeCameraPositionToPerforatedZ;
          changeCameraTargetX = changeCameraTargetToPerforatedX;
          changeCameraTargetY = changeCameraTargetToPerforatedY;
          changeCameraTargetZ = changeCameraTargetToPerforatedZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoStitch = true;
        }
        if(stitchingOption.length){
          getStitchingColor();
          stitchingStyleMaterials.forEach(function(item, index){
            updateColor(stitchingColor, item, index);
          });
          defaultStitchingMaterials.forEach(function(item, index){
            updateColor(stitchingColor, item, index);
          });
        }else{
          getTwoToneMaterial();
          if(twoToneMaterial.length){
            if(twoToneMaterial == 'None'){
              getPrimaryColor();
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              defaultStitchingMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }else{
              getTwoToneColor();
              stitchingStyleMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
              getPrimaryColor();
              defaultStitchingMaterials.forEach(function(item, index){
                updateColor(color, item, index);
              });
            }
          }else{
            getPrimaryColor();
            stitchingStyleMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            defaultStitchingMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }
        }
      });
      $('.c-premium-contrast-stitch-color .swatch-color').bind('touchend click', function(){
        getStitchingColor();
        if(cameraPositiontoStitch !== true){
          changeCameraPositionX =  changeCameraPositionToPerforatedX;
          changeCameraPositionY =  changeCameraPositionToPerforatedY;
          changeCameraPositionZ = changeCameraPositionToPerforatedZ;
          changeCameraTargetX = changeCameraTargetToPerforatedX;
          changeCameraTargetY = changeCameraTargetToPerforatedY;
          changeCameraTargetZ = changeCameraTargetToPerforatedZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoStitch = true;
        }
        if(stitchingColor.length){
          stitchingStyleMaterials.forEach(function(item, index){
            updateColor(stitchingColor, item, index);
          });
          defaultStitchingMaterials.forEach(function(item, index){
            updateColor(stitchingColor, item, index);
          });
        }else{
          getTwoToneMaterial();
          if(twoToneMaterial.length){
            getTwoToneColor();
            stitchingStyleMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            defaultStitchingMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }else{
            getPrimaryColor();
            stitchingStyleMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
            defaultStitchingMaterials.forEach(function(item, index){
              updateColor(color, item, index);
            });
          }
        }
      });
      $('.c-piping-material input').bind('touchend click', function(){
        setDefaultCameraPosition();
        getPipingMaterial();
        if(pipingMaterial.length){
          if(pipingMaterial == 'None'){
            pipingMaterials.forEach(function(item, index){ 
              toggleOpacity(item, index, 0);
            });
            defaultSubPiping.forEach(function(item, index){ 
              toggleOpacity(item, index, 1);
            });
          }else{
            getPipingColor();
            pipingMaterials.forEach(function(item, index){
              updateColor(pipingColor, item, index);
            });
            pipingMaterials.forEach(function(item, index){ 
              toggleOpacity(item, index, 1);

            });
            defaultSubPiping.forEach(function(item, index){ 
              toggleOpacity(item, index, 0);
            });
          } 
        }else{
          pipingMaterials.forEach(function(item, index){ 
            toggleOpacity(item, index, 0);
          });
          defaultSubPiping.forEach(function(item, index){ 
            toggleOpacity(item, index, 1);
          });
        }
      });
      $('.c-get-piping-color .swatch-image').bind('touchend click', function(){
        setDefaultCameraPosition();
        getPipingColor();
        if(pipingColor.length){
          pipingMaterials.forEach(function(item, index){
            updateColor(pipingColor, item, index);
          });
        }
      });
      $('.c-get-piping-color .swatch-color').bind('touchend click', function(){
        setDefaultCameraPosition();
        getPipingColor();
        if(pipingColor.length){
          pipingMaterials.forEach(function(item, index){
            updateColor(pipingColor, item, index);
          });
        }
      });
      $('.c-cup-holder-material .swatch-image').bind('touchend click', function(){
        if(cameraPositiontoCupHolder !== true){           
          changeCameraPositionX = changeCameraPositionToCupHolderX;
          changeCameraPositionY = changeCameraPositionToCupHolderY;
          changeCameraPositionZ = changeCameraPositionToCupHolderZ;
          changeCameraTargetX = changeCameraTargetToCupHolderX;
          changeCameraTargetY = changeCameraTargetToCupHolderY;
          changeCameraTargetZ = changeCameraTargetToCupHolderZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoCupHolder = true;
        }
        getCupHolderMaterial();
        if(cupHolderMaterial.length){
          switch(cupHolderMaterial){
            case 'Standard':
              c = '#2b2b2b';
              m = 1;
              s = 1;
              g = 0.5;
              break;
            case 'Chrome':
              c = '#BBBBBB';
              m = 1;
              s = 1;
              g = 1;
              break;
            case 'Black Chrome':
              c = '#5d5d5d';
              m = 1;
              s = 1;
              g = 1;
              break;
            case 'Gold':
              c = '#ffbc00';
              m = 1;
              s = 1;
              g = 0.85;
              break;
            case 'Silver':
              c = '#b3b3b3';
              m = 0.7;
              s = 1;
              g = 0.8;
              break;
          }
          cupHolderMaterials.forEach(function(item, index){
            uch(c, m, s, g,item)
          });
        }else{
          c = '#2b2b2b';
          m = 1;
          s = 1;
          g = 0.5;
          cupHolderMaterials.forEach(function(item, index){
            uch(c, m, s, g,item)
          });
        }
      });
      $('.c-accessory-port-material .swatch-image').bind('touchend click', function(){
        if(cameraPositiontoCupHolder !== true){           
          changeCameraPositionX = changeCameraPositionToCupHolderX;
          changeCameraPositionY = changeCameraPositionToCupHolderY;
          changeCameraPositionZ = changeCameraPositionToCupHolderZ;
          changeCameraTargetX = changeCameraTargetToCupHolderX;
          changeCameraTargetY = changeCameraTargetToCupHolderY;
          changeCameraTargetZ = changeCameraTargetToCupHolderZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoCupHolder = true;
        }
        getAccessoryHolderMaterial();
        if(accessoryHolderMaterial.length){
          switch(accessoryHolderMaterial){
            case 'Black':
              c = '#2b2b2b';
              m = 1;
              s = 1;
              g = 0.7;
              break;
            case 'Chrome':
              c = '#2b2b2b';
              m = 1;
              s = 1;
              g = 0.5;
              break;
            case 'Black Chrome':
              c = '#5d5d5d';
              m = 1;
              s = 1;
              g = 1;
              break;
            case 'Gold':
              c = '#ffbc00';
              m = 1;
              s = 1;
              g = 0.85;
              break;
            case 'Silver':
              c = '#b3b3b3';
              m = 1;
              s = 1;
              g = 0.7;
              break;
          }
          accessoryHolderMaterials.forEach(function(item, index){
            uch(c, m, s, g,item)
          });
        }else{
          c = '#b3b3b3';
          m = 1;
          s = 1;
          g = 0.7;
          accessoryHolderMaterials.forEach(function(item, index){
            uch(c, m, s, g,item)
          });
        }
      });
      $('.c-rgb-option').bind('touchend click', function(){

        if(cameraPositiontoRGB !== true){
          changeCameraPositionX = changeCameraPositionToRgbX;
          changeCameraPositionY = changeCameraPositionToRgbY;
          changeCameraPositionZ = changeCameraPositionToRgbZ;
          changeCameraTargetX = changeCameraTargetToRgbX;
          changeCameraTargetY = changeCameraTargetToRgbY;
          changeCameraTargetZ = changeCameraTargetToRgbZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoRGB = true;
        }
        let selectedRGBOption = rgbOption;
        getRGBOption();
        if(rgbOption){ 
          setTimeout(function(){
            ledLightMaterials.forEach(function(item, index){ 
              toggleOpacity(item, index, 1);
            });
            ledLightMaterials.forEach(function(item, index){ 
              updateEmitColor('RGBRed', item, index);
            });

          }, 300);    
        }else{
          setTimeout(function(){
            rgbColor = 'RGBBlue';
            ledLightMaterials.forEach(function(item, index){ 
              updateEmitColor(rgbColor, item, index);
            });
          }, 200);
        }
      });
      $('.c-rgb-preview-light').bind('touchend click', function(){
        if(cameraPositiontoRGB !== true){
          changeCameraPositionX = changeCameraPositionToRgbX;
          changeCameraPositionY = changeCameraPositionToRgbY;
          changeCameraPositionZ = changeCameraPositionToRgbZ;
          changeCameraTargetX = changeCameraTargetToRgbX;
          changeCameraTargetY = changeCameraTargetToRgbY;
          changeCameraTargetZ = changeCameraTargetToRgbZ;
          changeCameraPosition(changeCameraPositionX, changeCameraPositionY, changeCameraPositionZ, changeCameraTargetX, changeCameraTargetY, changeCameraTargetZ); 
          cameraPositiontoRGB = true;
        }
        getRGBOption();
        if(rgbOption.length){
          let selectedRGBColor = rgbColor;
          getRGBColor();
          if (selectedRGBColor != rgbColor){
            ledLightMaterials.forEach(function(item, index){ 
              updateEmitColor(rgbColor, item, index);
            });
          }
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
      });
      $('.custom-select-embroidery').bind('touchstart click', function(){
        setTimeout(function(){
          if($('.custom-select-embroidery input').val() == 'Custom Logo'){
            if(headrestZurichMaterials){
              headrestZurichMaterials.forEach(function(item, index){
                toggleOpacity(item, index, 0);
              });
            }
            setHeadrestCameraPosition();
            sketchfabAPIUtilityInstance.addTexture("https://cdn.shopify.com/s/files/1/0069/9373/9831/files/logo-preview.png?v=1624417760","logo_1",false);
            sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.AlbedoPBR,"logo_1");
            sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,"logo_1");
            setTimeout(function(){
              sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,1);
            }, 100);
            $('.embroidery-preview-options').hide();
          }else if($('.custom-select-embroidery input').val() == 'Personalized Text'){
            if(headrestZurichMaterials){
              headrestZurichMaterials.forEach(function(item, index){
                toggleOpacity(item, index, 0);
              });
            }
            setHeadrestCameraPosition();
            $('.embroidery-preview-options').show();
          }else{
            if(headrestZurichMaterials){
              headrestZurichMaterials.forEach(function(item, index){
                toggleOpacity(item, index, 1);
              });
            }
            setDefaultCameraPosition();
            $('.embroidery-preview-options').hide();
            sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,0);
          }
        }, 100);
      });
      $('.custom-text input').on('input',function(e){
        setHeadrestCameraPosition();
        updateText();
      });
      // fix this for final release
      $('.logo-preview').bind('touchstart click', function(){
        setHeadrestCameraPosition();
        if($('.custom-select-embroidery input').val() == 'Custom Logo'){
          setHeadrestCameraPosition();
          sketchfabAPIUtilityInstance.addTexture("https://cdn.shopify.com/s/files/1/0069/9373/9831/files/logo-preview.png?v=1624417760","logo_1",false);
          sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.AlbedoPBR,"logo_1");
          sketchfabAPIUtilityInstance.setMaterialUIDPending("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,"logo_1");
          setTimeout(function(){
            sketchfabAPIUtilityInstance.setFactor("headrest-logo-material",sketchfabAPIUtilityInstance.Opacity,1);
          }, 100);
        }
        if($('.custom-select-embroidery input').val() == 'Personalized Text'){
          setHeadrestCameraPosition();
          updateText();
        }
      });
      $('.custom-font-select .button-value').click(function(){
        setHeadrestCameraPosition();
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
        setHeadrestCameraPosition();
        setTimeout(function(){  
          updateText();
        }, 50);
      });
      $('.c-bass-shaker').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.c-extended-warranty').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.c-configuration-type').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.c-riser-option').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.c-configuration-straight').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.c-configuration-curved').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.tray-table').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.tablet-holder').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
      $('.wine-glass-caddy').bind('touchend click', function(){
        setDefaultCameraPosition();
      });
    },1500);
  };
});