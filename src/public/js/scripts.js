"use strict";
is_visible_init ();
cws_progress_bar_init ();
cws_icon_popup_init ();
var directRTL;
if (jQuery("html").attr('dir') == 'rtl') {
	directRTL =  'rtl'
}else{
	directRTL =  ''
};
jQuery('*').on( "hover", function (){});
var stick_menu = 1;
var is_user_logged = false;
window.addEventListener( "load", function (){
	check_menu_width();
	mobile_menu_controller_init();
	set_heigth_sticky ();
	sticky_init();
	jQuery( ".portfolio_carousel" ).cws_flex_carousel( ".cws_portfolio", ".cws_portfolio_header" );
	jQuery( ".ourteam_carousel" ).cws_flex_carousel( ".cws_ourteam", ".cws_ourteam_header" );
	jQuery( ".news_carousel" ).cws_flex_carousel( ".news", ".cws_blog_header" );
	gallery_post_carousel_init();
	cws_parallax_init();
	widget_carousel_init();
	cws_sc_carousel_init();
	twitter_carousel_init();
	canvas_init();
	isotope_init();
}, false );


function isotope_init () {
	if (jQuery(".isotope").length) {  
    /**/
    /* ISOTOP  load */
    /**/
    var $container = jQuery('.isotope');
    jQuery(window).resize(function () {
    	$container.isotope({
	    	masonry: {}
	    });
    })
    // init
    $container.isotope({
    	masonry: {},
      // options
      itemSelector: '.isotope .item'
    });
      // filter isotope on initalise
    if(jQuery('.cws_portfolio_filter_container .cws_portfolio_filter').length){    
      var selector = document.querySelector('select.cws_portfolio_filter').value;
      $container.isotope({ filter: selector });
    }

    jQuery('.cws_portfolio_filter_container').on('change', 'select.cws_portfolio_filter', function() { 
      jQuery('.isotope').isotope(
      {
        filter: jQuery(this).val()
      });
      return false;
    });
  }
}

jQuery(document).ready(function (){
	window.winWidth = window.innerWidth;
	logo_in_menu_replece ();
	cws_top_social_init ();
	cws_slider_video_height (jQuery( ".fs_video_slider" ));
	cws_slider_video_height (jQuery( ".image_stat_header" ));
	canvas_dashed_menu();
	cws_top_panel_slider ();
	cws_top_panel_search ();
	cws_touch_events_fix ();
	cws_page_focus();
	cws_patern_width();
	widget_carousel_init();
	cws_sc_carousel_init();	
	cws_top_social_icon_animation ();
	cws_button_init ()
	custom_colors_init ()
	cws_tabs_init ();
	cws_accordion_init ();
	cws_toggle_init ();
	cws_message_box_init ();
	select2_init();
	wow_init();
	widget_archives_hierarchy_init();
	cws_portfolio_single_carousel_init ();
	fancybox_init();
	gallery_post_carousel_init ();
	jQuery( ".pic .links_popup" ).cws_icon_popup();
	jQuery( ".cws_progress_bar" ).cws_progress_bar();
	jQuery( ".cws_ce_content.ce_tabs" ).cws_tabs ();
	jQuery( ".cws_ce_content.ce_accordion" ).cws_accordion ();
	jQuery( ".cws_ce_content.ce_toggle" ).cws_toggle ( "accordion_section", "accordion_title", "accordion_content" );
	cws_twitter_carousel ();
	calendar_ui ();
	add_button ();
	shop_list_grid ();
	checkout_open_field();
	star_rating ();
	if (jQuery(".price_slider").length) {
		woocommerce_price_slider();
	}
	
	jQuery(".search-form").parent(".cws-widget").addClass("search-form-widget");
	scroll_top_init ();


	jQuery(window).resize( function (){
		canvas_init()
		cws_patern_width();
		cws_slider_video_height (jQuery( ".fs_video_slider" ));
		cws_slider_video_height (jQuery( ".image_stat_header" ));
	} );
                                  
});

/**/
/* MARK */
/**/
function star_rating() {
  var stars_active = false;
  var mark
  var rating

  jQuery(".woocommerce .stars").on("mouseover", function() {
    if (!stars_active) {
      jQuery(this).find("span:not(.stars-active)").append("<span class='stars-active' data-set='no'>&#xf005;&#xf005;&#xf005;&#xf005;&#xf005;</span>");
      stars_active = true;
    }
  });
  jQuery(".woocommerce .stars").on("mousemove", function (e) {
    var cursor = e.pageX;
    var ofs = jQuery(this).offset().left;
    var fill = cursor - ofs;
    var width = jQuery(this).width(); 
    var persent = Math.round(100*fill/width);

    jQuery(".woocommerce .stars span a").css({"line-height":String((width+1)/5)+"px","width":String(width/5)+"px"})
    jQuery(".woocommerce .stars span .stars-active").css("margin-top","0px");
    jQuery(this).find(".stars-active").css('width',String(persent)+"%");
    jQuery(".stars-active").removeClass("fixed-mark");

  });
  jQuery(".woocommerce .stars").on("click", function (e){
    var cursor = e.pageX;
    var ofs = jQuery(this).offset().left;
    var fill = cursor - ofs;
    var width = jQuery(this).width(); 
    var persent = Math.round(100*fill/width);

    mark = jQuery(this).find(".stars-active");
    mark.css('width',String(persent)+"%").attr("data-set",String(persent));
    rating = jQuery( this ).closest( '#respond' ).find( '#rating' );
    rating.val( jQuery(jQuery(this).find("span a[class*='star-']")[Math.ceil((persent).toFixed(2)/20)-1]).text());
  });
  jQuery(".woocommerce .stars").on("mouseleave", function (e){
    if (jQuery(mark).attr("data-set") == "no"){
      mark.css("width","0");
    }
    else{
      var persent = jQuery(mark).attr("data-set");
      jQuery(mark).css("width",String(persent)+"%");
      jQuery(".stars-active").addClass("fixed-mark");
    }
  });
}

/*shop list and grid*/
function shop_list_grid() {
  jQuery(".woocommerce .products:not(.related)").addClass("grid");
  jQuery(".gridlist-toggle a").on("click", function () {
    jQuery(this).addClass("active").siblings().removeClass("active");
    if (jQuery(this).attr("id") == "grid") {
      if (jQuery(".woocommerce .products").hasClass("grid")) {
        return false;
      } else {
        jQuery(".woocommerce .products").fadeOut(300,function() {
          jQuery(".woocommerce .products").addClass("grid").removeClass("list").fadeIn(300);
        });
      }   
    }
    if (jQuery(this).attr("id") == "list"){
      if (jQuery(".woocommerce .products").hasClass("list")) {
        return false;
      } else {
        jQuery(".woocommerce .products").fadeOut(300,function(){
          jQuery(".woocommerce .products").addClass("list").removeClass("grid").fadeIn(300);
        });
      }
    }
  });
}

function cws_do_after_load_more () {
	jQuery( ".pic .links_popup" ).cws_icon_popup();
}

function cws_slider_video_height (element){
	var height_coef = element.attr('data-wrapper-height')
	if (height_coef) {
		if (window.innerWidth<960) {
			element.height(window.innerWidth/height_coef)
		}else{
			element.height(960/height_coef)
		}
	}
	
}



/* woocommerce_price_slider */
function woocommerce_price_slider(){
  var current_min_price
  var current_max_price
  window.woocommerce_price_slider_params = {
    'currency_symbol' : '$',
    'currency_pos' : 'left',
  }

  // woocommerce_price_slider_params is required to continue, ensure the object exists
  if ( typeof woocommerce_price_slider_params === 'undefined' ) {
    return false;
  }
  // Get markup ready for slider
  jQuery( 'input#min_price, input#max_price' ).hide();
  jQuery( '.price_slider, .price_label' ).show();

  // Price slider uses jquery ui
  var min_price = jQuery( '.price_slider_amount #min_price' ).data( 'min' ),
    max_price = jQuery( '.price_slider_amount #max_price' ).data( 'max' );

  current_min_price = parseInt( min_price, 10 );
  current_max_price = parseInt( max_price, 10 );


  if ( woocommerce_price_slider_params.min_price ) current_min_price = parseInt( woocommerce_price_slider_params.min_price, 10 );
  if ( woocommerce_price_slider_params.max_price ) current_max_price = parseInt( woocommerce_price_slider_params.max_price, 10 );
  jQuery( 'body' ).bind( 'price_slider_create price_slider_slide', function( event, min, max ) {
    if ( woocommerce_price_slider_params.currency_pos === 'left' ) {

      jQuery( '.price_slider_amount span.from' ).html( woocommerce_price_slider_params.currency_symbol + min );
      jQuery( '.price_slider_amount span.to' ).html( woocommerce_price_slider_params.currency_symbol + max );

    } else if ( woocommerce_price_slider_params.currency_pos === 'left_space' ) {

      jQuery( '.price_slider_amount span.from' ).html( woocommerce_price_slider_params.currency_symbol + " " + min );
      jQuery( '.price_slider_amount span.to' ).html( woocommerce_price_slider_params.currency_symbol + " " + max );

    } else if ( woocommerce_price_slider_params.currency_pos === 'right' ) {

      jQuery( '.price_slider_amount span.from' ).html( min + woocommerce_price_slider_params.currency_symbol );
      jQuery( '.price_slider_amount span.to' ).html( max + woocommerce_price_slider_params.currency_symbol );

    } else if ( woocommerce_price_slider_params.currency_pos === 'right_space' ) {

      jQuery( '.price_slider_amount span.from' ).html( min + " " + woocommerce_price_slider_params.currency_symbol );
      jQuery( '.price_slider_amount span.to' ).html( max + " " + woocommerce_price_slider_params.currency_symbol );

    }

    jQuery( 'body' ).trigger( 'price_slider_updated', min, max );
  });

  jQuery( '.price_slider' ).slider({
    range: true,
    animate: true,
    min: min_price,
    max: max_price,
    values: [ current_min_price, current_max_price ],
    create : function( event, ui ) {

      jQuery( '.price_slider_amount #min_price' ).val( current_min_price );
      jQuery( '.price_slider_amount #max_price' ).val( current_max_price );

      jQuery( 'body' ).trigger( 'price_slider_create', [ current_min_price, current_max_price ] );
    },
    slide: function( event, ui ) {

      jQuery( 'input#min_price' ).val( ui.values[0] );
      jQuery( 'input#max_price' ).val( ui.values[1] );

      jQuery( 'body' ).trigger( 'price_slider_slide', [ ui.values[0], ui.values[1] ] );
    },
    change: function( event, ui ) {

      jQuery( 'body' ).trigger( 'price_slider_change', [ ui.values[0], ui.values[1] ] );

    },
  });
};

/* checkout open */
function checkout_open_field() {
	jQuery(".woocommerce-info .showlogin, .woocommerce-info .showcoupon").on("click", function(){
		var x = jQuery(this).parent()[0].nextElementSibling;
		if ( !jQuery(x).hasClass("active") ) {
			jQuery(x).addClass("active").slideDown(300);
		} else {
			jQuery(x).removeClass("active").slideUp(300);
		}
	})
	jQuery(".payment_method_cheque input, .payment_method_paypal input").on("click", function(){
		var x = jQuery(this).parent().children(".payment_box");
		if ( jQuery(x).hasClass("active") ) {
			return false;
		} else {
			jQuery('.payment_method_cheque .payment_box, .payment_method_paypal .payment_box').removeClass("active").slideUp();
			jQuery(x).addClass("active").slideDown(300);
		}
	})
}

/* SCROLL TO TOP */
function scroll_top_vars_init (){
	window.scroll_top = {
		el : jQuery( ".scroll_top" ),
		anim_in_class : "fadeIn",
		anim_out_class : "fadeOut"
	};
}
function scroll_top_init (){
	scroll_top_vars_init ();
	scroll_top_controller ();
	window.addEventListener( 'scroll', scroll_top_controller, false);
	window.scroll_top.el.on( 'click', function (){
		jQuery( "html, body" ).animate( {scrollTop : 0}, '300', function (){
			window.scroll_top.el.css({
				"pointer-events" : "none"
			});
			window.scroll_top.el.addClass( window.scroll_top.anim_out_class );
		});
	});
}
function scroll_top_controller (){
	var scroll_pos = window.pageYOffset;
	if ( window.scroll_top == undefined ) return;
	if ( scroll_pos < 1 && window.scroll_top.el.hasClass( window.scroll_top.anim_in_class ) ){
		window.scroll_top.el.css({
			"pointer-events" : "none"
		});
		window.scroll_top.el.removeClass( window.scroll_top.anim_in_class );
		window.scroll_top.el.addClass( window.scroll_top.anim_out_class );
	}
	else if( scroll_pos >= 1 && !window.scroll_top.el.hasClass( window.scroll_top.anim_in_class ) ){
		window.scroll_top.el.css({
			"pointer-events" : "auto"
		});
		window.scroll_top.el.removeClass( window.scroll_top.anim_out_class );
		window.scroll_top.el.addClass( window.scroll_top.anim_in_class );
	}
}
/* \SCROLL TO TOP */

function cws_top_social_init (){
	var el = jQuery( ".site_top_panel #top_social_links_wrapper" );
	var toggle_class = "expanded";
	var parent_toggle_class = "active_social";
	if ( !el.length ) return;
	el.on( 'click', function (){
		var el = jQuery( this );
		if ( el.hasClass( toggle_class ) ){
			el.removeClass( toggle_class );
			setTimeout( function (){
				el.closest( ".site_top_panel" ).removeClass( parent_toggle_class );
			}, 300);
		}
		else{
			el.addClass( toggle_class );
			el.closest( ".site_top_panel" ).addClass( parent_toggle_class );			
		}
	});
}	

function cws_top_social_icon_animation (){
	var shareButtons = jQuery(".site_top_panel .cws_social_links>*")
		,toggleButton = jQuery(".site_top_panel .share-toggle-button")

		,menuOpen=false
		,buttonsNum= shareButtons.length
		,buttonsMid=(buttonsNum/2)
		,spacing=38
	;

	function openShareMenu(){
		var coefDir = (directRTL =='rtl') ? 1 : -1 ;
		shareButtons.each(function(i){
			var cur=jQuery(this);
			var pos=i;
			if(pos>=0) pos+=1;
			var dist=Math.abs(pos);
			cur.css({
				zIndex:dist
			});
			
			TweenMax.to(cur,0.5*(dist),{
				x:coefDir*pos*spacing,
				scale:1,
				ease:Elastic.easeOut,
				easeParams:[1.01,0.5]
			});
				
			TweenMax.fromTo(cur.find(".share-icon"),0.2,{
				scale:0
			},{
				delay:(0.2*dist)-0.1,
				scale:1.0,
				ease:Quad.easeInOut
			})
		})
	}
	function closeShareMenu(){
		shareButtons.each(function(i){
			var cur = jQuery(this);
			var pos=i-buttonsMid;
			if(pos>=0) pos+=1;
			var dist=Math.abs(pos);
			cur.css({
				zIndex:dist
			});

			TweenMax.to(cur,0.4+((buttonsMid-dist)*0.1),{
				x:0,
				scale:1,
				ease:Quad.easeInOut,
			});
				
			TweenMax.to(cur.find(".share-icon"),0.2,{
				scale:0,
				ease:Quad.easeIn
			});
		})
	}

	function toggleShareMenu(){
		menuOpen=!menuOpen

		menuOpen?openShareMenu():closeShareMenu();
	}
	toggleButton.on("mousedown",function(){
		toggleShareMenu();
	})
}		    

function cws_icon_popup_init (){
	jQuery.fn.cws_icon_popup = function (){
		jQuery(this).each(function (){
			var element = jQuery(this);
			var angle = 180;
			var distance=60;
			var startingAngle=180+(-angle/2);
			var link_item;
			var linkItem;
			var on=false;
			var slice;
			var iangle;
			TweenMax.globalTimeScale(0.8);

			var button = jQuery(this).find(".link-toggle-button")

			var linkPoup = jQuery('.pic .links_popup.animate');


			slice = angle/(jQuery(this).find(".link").length - 1);

			jQuery(this).find(".link").each(function(i){
				iangle = startingAngle + (slice*i);
				jQuery(this).css({
					transform:"rotate("+(iangle)+"deg)"
				})
				jQuery(this).find("a>i").css({
					transform:"rotate("+(-iangle)+"deg)"
				})
			})

			linkPoup.each(function(){
				jQuery(this).on("mouseenter",pressHandler);

				jQuery(this).on("mouseleave",pressHandler);

			})			

			function pressHandler(event){
				on=!on;
				link_item = jQuery(this).find('.link')
				TweenMax.to(jQuery(this).children('.link-toggle-button').children('.link-toggle-icon'),0.4,{
					rotation:on?45:0,
					ease:Quint.easeInOut,
					force3D:true
				});

				if (event['type'] == 'mouseenter') {
					openMenu(link_item)
				};
				if (event['type'] == 'mouseleave') {
					closeMenu(link_item)
				};				
				
			}
			function openMenu(link_item){
				link_item.each(function(i){
					var delay=i*0.08;
					var $bounce=jQuery(this).children(".link-item-bounce");
					TweenMax.fromTo($bounce,0.2,{
						transformOrigin:"50% 50%"
					},{
						delay:delay,
						scaleX:0.8,
						scaleY:1.2,
						force3D:true,
						ease:Quad.easeInOut,
						onComplete:function(){
							TweenMax.to($bounce,0.15,{
								// scaleX:1.2,
								scaleY:0.7,
								force3D:true,
								ease:Quad.easeInOut,
								onComplete:function(){
									TweenMax.to($bounce,3,{
										// scaleX:1,
										scaleY:0.8,
										force3D:true,
										ease:Elastic.easeOut,
										easeParams:[1.1,0.12]
									})
								}
							})
						}
					});

					TweenMax.to(jQuery(this).children("a"),0.5,{
						delay:delay,
						y:distance,
						force3D:true,
						ease:Quint.easeInOut
					});
				})
			}
			function closeMenu(link_item){
				link_item.each(function(i){
					var delay=i*0.08;
					var $bounce=jQuery(this).children(".link-item-bounce");
					TweenMax.fromTo($bounce,0.2,{
						transformOrigin:"50% 50%"
					},{
						delay:delay,
						scaleX:1,
						scaleY:0.8,
						force3D:true,
						ease:Quad.easeInOut,
						onComplete:function(){
							TweenMax.to($bounce,0.15,{
								// scaleX:1.2,
								scaleY:1.2,
								force3D:true,
								ease:Quad.easeInOut,
								onComplete:function(){
									TweenMax.to($bounce,3,{
										// scaleX:1,
										scaleY:1,
										force3D:true,
										ease:Elastic.easeOut,
										easeParams:[1.1,0.12]
									})
								}
							})
						}
					});
					

					TweenMax.to(jQuery(this).children("a"),0.3,{
						delay:delay,
						y:0,
						force3D:true,
						ease:Quint.easeIn
					});
				})
			}


		});
	}
}

function cws_top_panel_slider (){
	jQuery(".site_top_panel.slider .site_top_panel_toggle").on("click", function(){
		var el = jQuery(this);
		el.parent().parent().toggleClass( "active" );
	})
}

function cws_top_panel_search (){
		jQuery(".site_top_panel .search_icon").on("click", function(){
		var el = jQuery(this);
		el.parents('.site_top_panel').find('.row_text_search .search-field').focus();
		el.parents('.site_top_panel').toggleClass( "show-search" );
	})	
}


function cws_patern_width (){
	if (jQuery(".page_content>.pattern").length) {	
		if (jQuery('.page_content').children().hasClass('container')) {
			jQuery(".page_content>.pattern").width((jQuery("body").width() - jQuery('.page_content>.container').width())/2 - 20);
		}else{
			jQuery(".page_content>.pattern").width((jQuery("body").width() - jQuery('.page_content>main .grid_row').width())/2 - 20);
		}	
	}
}


function cws_touch_events_fix (){
	if ( is_mobile_device() ){
		jQuery( ".page_content" ).on( "hover", ".hover-effect, .pic .links, title_part>a", function (){
		});
		jQuery( ".site_header" ).on( "hover", ".mobile_nav .button_open, .mobile_nav .menu-item > a", function ( e ){
			e.preventDefault();
			jQuery( this ).trigger( "click" );
		});
	}
}

function cws_page_focus(){
	document.getElementsByTagName('html')[0].setAttribute('data-focus-chek', 'focused');
	
	window.addEventListener('focus', function() {
	  	document.getElementsByTagName('html')[0].setAttribute('data-focus-chek', 'focused');
	});

	window.addEventListener('blur', function() {
	  	document.getElementsByTagName('html')[0].removeAttribute('data-focus-chek');
	});
}

function canvas_dashed_menu(){
	var ctx,radius,offsets,menu_button_length
	radius = 10;
	offsets = 2;
	menu_button_length = 500;

	var winWidth = window.innerWidth;
	var menu_dashed = jQuery("canvas.menu_dashed");

	for (var i = menu_dashed.length - 1; i >= 0; i--) {
		var menuHeight = menu_dashed.parent().innerHeight() - 1;
		menu_dashed[i].height =  menu_dashed.parent().innerHeight();
		menu_dashed[i].width =  menu_button_length + 1;
		ctx = menu_dashed[i].getContext('2d');
		ctx.translate(0.5, 0.5);
		ctx.beginPath();

		ctx.setLineDash([4,2]);

		ctx.lineJoin = "round";
		ctx.lineWidth = "1";
		ctx.strokeStyle = "#ffffff";

		ctx.moveTo(offsets + radius,offsets);
		ctx.lineTo(menu_button_length - radius,offsets);
		ctx.quadraticCurveTo(menu_button_length,offsets,menu_button_length,offsets + radius);
		ctx.lineTo(menu_button_length,offsets + radius);
		ctx.lineTo(menu_button_length,menuHeight - offsets - radius);
		ctx.quadraticCurveTo(menu_button_length,menuHeight - offsets,menu_button_length - radius,menuHeight - offsets);
		ctx.lineTo(menu_button_length - radius,menuHeight - offsets);
		ctx.lineTo(offsets + radius,menuHeight - offsets);

		ctx.quadraticCurveTo(offsets,menuHeight - offsets,offsets,menuHeight - offsets - radius);

		ctx.lineTo(offsets,menuHeight - offsets - radius);
		ctx.lineTo(offsets,offsets + radius);
		ctx.quadraticCurveTo(offsets,offsets,offsets + radius,offsets);
		ctx.closePath();
		ctx.stroke();


	}


	
}

function canvas_init(){
	var y,x,ctx,cw,ox,oy,scale

	var c = jQuery("canvas.breadcrumbs");
	var h_c = jQuery("canvas.half_sin");
	var f_h_c = jQuery("canvas.footer_half_sin");
	var t_h_c = jQuery("canvas.top_half_sin");
	var br = jQuery("canvas.separator");

	var cloud = jQuery("canvas.cloud");
	var w_cloud = jQuery("canvas.white_cloud");


	var style = jQuery("#cws-custom-colors-css").text()

	if (br.length) {
		var sepColor = br.attr("data-line-color")
	};

	if (c.length) {
		var crumbs_bg_color = c.attr("data-bg-color");
		var crumbs_line_color = c.attr("data-line-color")
	};

	if (h_c.length) {
		var footer_bg_color = h_c.attr("data-bg-color");
		var footer_line_color = h_c.attr("data-line-color")
	};

	if (f_h_c.length) {
		var footer_cop_bg_color = f_h_c.attr("data-bg-color");
		var footer_cop_line_color = f_h_c.attr("data-line-color");
	};
	
	if (t_h_c.length) {
		var top_bg_color = t_h_c.attr("data-bg-color");
		var top_line_color = t_h_c.attr("data-line-color");
	};

	if (cloud.length) {
		var cloud_bg_color = cloud.attr("data-bg-color");
		var cloud_line_color = cloud.attr("data-line-color");
		var patternSrc = cloud.attr("data-pattern-src");
		var patternParentHeight = cloud.parent().innerHeight() - 170;
	};

	cw = 1170
	ox = 0
	oy = 8
	scale = 4
	var winWidth = window.innerWidth;
	var ratio =  window.devicePixelRatio;

	for (var i = c.length - 1; i >= 0; i--) {
		var breadcrumbs_parent_height = jQuery(c[i]).parent().innerHeight();
		c[i].height = breadcrumbs_parent_height*ratio;
		c[i].width = window.innerWidth*ratio;


		c[i].style.height = breadcrumbs_parent_height +'px';//actual height of canvas
		c[i].style.width = window.innerWidth +'px';//actual width of canvas

		ctx = c[i].getContext('2d');
		ratio > 1 ? ctx.scale(ratio,ratio) : '' ;
		ctx.beginPath();
		//
		sineLine(ctx,ox,oy,4,crumbs_bg_color,breadcrumbs_parent_height - 17,winWidth*ratio)
		ctx.lineTo(winWidth*ratio, breadcrumbs_parent_height);

		for (var ti=(winWidth*ratio); ti>=0; ti+=(-1) ){
			y = scale * Math.sin((-ti)/8 + 3);
			x = ti;
			ctx.lineTo(ox+x, oy-y);
		}
		ctx.lineTo(0, breadcrumbs_parent_height);
		ctx.fillStyle = crumbs_bg_color;
		ctx.fill();
		ctx.beginPath();
		sineLine(ctx,ox,oy,4,crumbs_line_color,breadcrumbs_parent_height - 16,winWidth*ratio)
	};
	for (var i = h_c.length - 1; i >= 0; i--) {
		h_c[i].height = 10*ratio;
		h_c[i].width = (window.innerWidth)*ratio;

		h_c[i].style.height = 10 +'px';//actual height of canvas
		h_c[i].style.width = window.innerWidth +'px';//actual width of canvas

		ctx = h_c[i].getContext('2d');
		ratio > 1 ? ctx.scale(ratio,ratio) : '' ;
		ctx.beginPath();
		//

		sineLine(ctx,ox,oy,1,'rgb('+footer_line_color+')',0,winWidth,true)
		ctx.lineTo(winWidth, 10);
		ctx.lineTo(0, 10);
		ctx.fillStyle = 'rgb('+footer_bg_color+')';
		ctx.fill();

	};

	for (var i = f_h_c.length - 1; i >= 0; i--) {
		f_h_c[i].height = 10*ratio;
		f_h_c[i].width = (window.innerWidth)*ratio;

		f_h_c[i].style.height = 10 +'px';//actual height of canvas
		f_h_c[i].style.width = window.innerWidth +'px';//actual width of canvas

		ctx = f_h_c[i].getContext('2d');
		ratio > 1 ? ctx.scale(ratio,ratio) : '' ;
		ctx.beginPath();
		//
		sineLine(ctx,ox,oy,1,'rgb('+footer_cop_line_color+')',0,winWidth,true)
		ctx.lineTo(winWidth, 10);
		ctx.lineTo(0, 10);
		ctx.fillStyle = 'rgb('+footer_cop_bg_color+')';
		ctx.fill();

	};

	for (var i = t_h_c.length - 1; i >= 0; i--) {
		t_h_c[i].height = 10*ratio;
		t_h_c[i].width = (window.innerWidth)*ratio;

		t_h_c[i].style.height = 10 +'px';//actual height of canvas
		t_h_c[i].style.width = window.innerWidth +'px';//actual width of canvas

		ctx = t_h_c[i].getContext('2d');
		ratio > 1 ? ctx.scale(ratio,ratio) : '' ;
		ctx.beginPath();
		//
		sineLine(ctx,ox,oy,1,top_line_color,0,winWidth,true)
		ctx.lineTo(winWidth, 10);
		ctx.lineTo(0, 10);
		ctx.fillStyle = top_bg_color;
		ctx.fill();
	};
	
	for (var i = br.length - 1; i >= 0; i--) {
		br[i].height = 22*ratio;	
		br[i].width = (window.innerWidth)*ratio;

		br[i].style.height = 22 +'px';//actual height of canvas
		br[i].style.width = window.innerWidth +'px';//actual width of canvas

		ctx = br[i].getContext('2d');
		ratio > 1 ? ctx.scale(ratio,ratio) : '' ;
		ctx.beginPath();
		sineLine(ctx,ox,oy,4,sepColor,0,winWidth)
	};
	if (cloud.length) {
		var rat_coef = ratio > 1 ? 1.5 : 1 ;
		cloud[0].height = (patternParentHeight + 170)*(rat_coef*ratio);	
		cloud[0].width = (window.innerWidth)*(rat_coef*ratio);

		cloud[0].style.width=window.innerWidth+'px';//actual width of canvas
		cloud[0].style.height=(patternParentHeight + 170) +'px';//actual height of canvas

		ctx = cloud[0].getContext('2d');
		ratio > 1 ? ctx.scale(ratio,ratio) : '' ;
		ctx.beginPath();
		cloudRandomCreator(ctx,ox,oy,8,sepColor,cloud_bg_color,winWidth,patternParentHeight*rat_coef,patternSrc);
	};
	if (w_cloud.length) {
		w_cloud[0].height = 50*ratio;
		w_cloud[0].width = (window.innerWidth)*ratio;

		w_cloud[0].style.width= window.innerWidth +'px';//actual width of canvas
		w_cloud[0].style.height= 50 +'px';//actual height of canvas


		ctx = w_cloud[0].getContext('2d');
		ratio > 1 ? ctx.scale(ratio,ratio) : '' ;
		ctx.beginPath();

		sepColor = '#ffffff';
		cloud_bg_color = '#ffffff';

		cloudRandomCreator(ctx,ox,oy,8,sepColor,cloud_bg_color,winWidth,patternParentHeight,false,true);
	};
	
}

function sineLine(ctx,ox,oy,lineWidth,color,topOfss,width,half_mode){
	half_mode = half_mode != undefined ? half_mode : false;
	var scale = 4;
	if (half_mode) {
		scale = 4.5;
	}
	var x,y,sin_per
	ctx.strokeStyle = color
	ctx.lineWidth = lineWidth;
	for (var t=0; t<=width; t+=1){
		if (half_mode) {
			sin_per = Math.sin(t/5) < 0 ? Math.sin(t/5)*(-1) : Math.sin(t/5);
		}else{
			sin_per = Math.sin(t/8);
		};
		y = scale * sin_per - topOfss;
		x = t;
		ctx.lineTo(ox+x, oy-y);
	}
	ctx.stroke();
}
function cloudRandomCreator(ctx,ox,oy,lineWidth,color,bg_color,width,patternParentHeight,patternSrc,only_top){
	patternSrc = patternSrc != undefined ? patternSrc : false;
	only_top = only_top != undefined ? only_top : false;

	var imageObj = new Image();
	imageObj.src = imageObj.src = patternSrc ? patternSrc : '';

	if (patternSrc && !only_top) {
		imageObj.onload = function() {

			var pattern = ctx.createPattern(imageObj, 'repeat');

			cloudPaint (ctx,width,patternParentHeight);
			ctx.closePath(); 
			ctx.strokeStyle = 'white';
			ctx.fillStyle = bg_color;
			ctx.fill();
			ctx.fillStyle = pattern;
			ctx.fill();
			ctx.lineWidth = lineWidth;
			ctx.stroke();
		};
	}else if(!only_top){
		cloudPaint (ctx,width,patternParentHeight);
		ctx.strokeStyle = 'white';
		ctx.fillStyle = bg_color;
		ctx.fill();
		ctx.lineWidth = lineWidth;
		ctx.stroke();
	}else if(only_top){
		cloudPaint (ctx,width,0,only_top);
		ctx.strokeStyle = color;
		ctx.fillStyle = bg_color;
		ctx.fill();
		ctx.lineWidth = lineWidth;
		ctx.stroke();
	}
	
	
}

function cloudPaint (ctx,width,patternParentHeight,only_top){
	
	var only_top = only_top != undefined ? only_top : false;

	var ratio =  window.devicePixelRatio;
	var ratio_coef = ratio > 1 ? 1.5 : 0.93 ;
	var height_coef = (80 * ratio_coef) + patternParentHeight;
	ctx.moveTo(-10, 50);
	for (var t=0; t<=Math.floor(width*ratio/1920); t+=1){
		var addCoef = 1920*t;	
		ctx.bezierCurveTo(30 + addCoef, 0, 90 + addCoef, 0, 120 + addCoef, 30);
		ctx.bezierCurveTo(130 + addCoef, 25, 150 + addCoef, 15, 170 + addCoef, 30);
		ctx.bezierCurveTo(190 + addCoef, 15, 210 + addCoef, 15, 240 + addCoef, 30);
		ctx.bezierCurveTo(260 + addCoef, 5, 330 + addCoef, 4, 360 + addCoef, 35);
		ctx.bezierCurveTo(380 + addCoef, 10, 405 + addCoef, 15, 420 + addCoef, 30);
		ctx.bezierCurveTo(430 + addCoef, 20, 465 + addCoef, 20, 480 + addCoef, 35);
		ctx.bezierCurveTo(510 + addCoef, 10, 550 + addCoef, 15, 580 + addCoef, 35);
		ctx.bezierCurveTo(590 + addCoef, 25, 610 + addCoef, 25, 620 + addCoef, 35);
		ctx.bezierCurveTo(650 + addCoef, 10, 710 + addCoef, 10, 740 + addCoef, 35);
		ctx.bezierCurveTo(755 + addCoef, 25, 770 + addCoef, 25, 790 + addCoef, 35);
		ctx.bezierCurveTo(810 + addCoef, 20, 850 + addCoef, 5, 890 + addCoef, 35);
		ctx.bezierCurveTo(920 + addCoef, 5, 970 + addCoef, 10, 990 + addCoef, 35);
		ctx.bezierCurveTo(1000 + addCoef, 30, 1025 + addCoef, 25, 1040 + addCoef, 35);
		ctx.bezierCurveTo(1060 + addCoef, 15, 1100 + addCoef, 15, 1120 + addCoef, 35);
		ctx.bezierCurveTo(1140 + addCoef, 15, 1190 + addCoef, 25, 1210 + addCoef, 35);
		ctx.bezierCurveTo(1240 + addCoef, 5, 1300 + addCoef, 5, 1330 + addCoef, 30);
		ctx.bezierCurveTo(1340 + addCoef, 10, 1370 + addCoef, 10, 1380 + addCoef, 30);
		ctx.bezierCurveTo(1410 + addCoef, 0, 1460 + addCoef, 10, 1470 + addCoef, 35);
		ctx.bezierCurveTo(1490 + addCoef, 15, 1530 + addCoef, 15, 1550 + addCoef, 30);
		ctx.bezierCurveTo(1580 + addCoef, 5, 1635 + addCoef, 5, 1665 + addCoef, 35);
		ctx.bezierCurveTo(1685 + addCoef, 20, 1700 + addCoef, 20, 1720 + addCoef, 35);
		ctx.bezierCurveTo(1750 + addCoef, 5, 1820 + addCoef, 5, 1850 + addCoef, 35);
		ctx.bezierCurveTo(1870 + addCoef, 15, 1900 + addCoef, 15, 1920 + addCoef, 30);

		if (t==Math.floor(width*ratio/1920) && !only_top) {
			for (var ti=Math.floor(width*ratio/1920); ti>=0; ti-=1){
				addCoef = 1920*ti; 
				ctx.bezierCurveTo(1900 + addCoef, height_coef + 100 - 0 , 1870 + addCoef, height_coef + 100 - 0, 1840 + addCoef, height_coef + 100 - 20);
				ctx.bezierCurveTo(1820 + addCoef, height_coef + 100 - 0 , 1750 + addCoef, height_coef + 100 - 0, 1720 + addCoef, height_coef + 100 - 30);
				ctx.bezierCurveTo(1700 + addCoef, height_coef + 100 - 20 , 1685 + addCoef, height_coef + 100 - 20,  1665 + addCoef, height_coef + 100 - 35);	
				ctx.bezierCurveTo(1635 + addCoef, height_coef + 100 - 15, 1580 + addCoef, height_coef + 100 - 15, 1550 + addCoef, height_coef + 100 - 40);
				ctx.bezierCurveTo(1530 + addCoef, height_coef + 100 - 25, 1490 + addCoef, height_coef + 100 - 25, 1470 + addCoef, height_coef + 100 - 45);
				ctx.bezierCurveTo(1450 + addCoef, height_coef + 100 - 20, 1400 + addCoef, height_coef + 100 - 20, 1380 + addCoef, height_coef + 100 - 40);
				ctx.bezierCurveTo(1360 + addCoef, height_coef + 100 - 20, 1330 + addCoef, height_coef + 100 - 15, 1310 + addCoef, height_coef + 100 - 30);
				ctx.bezierCurveTo(1290 + addCoef, height_coef + 100 - 10, 1230 + addCoef, height_coef + 100 - 10, 1210 + addCoef, height_coef + 100 - 35);
				ctx.bezierCurveTo(1190 + addCoef, height_coef + 100 - 15, 1140 + addCoef, height_coef + 100 - 15, 1120 + addCoef, height_coef + 100 - 35);
				ctx.bezierCurveTo(1100 + addCoef, height_coef + 100 - 15, 1060 + addCoef, height_coef + 100 - 20, 1040 + addCoef, height_coef + 100 - 40);
				ctx.bezierCurveTo(1025 + addCoef, height_coef + 100 - 25, 1010 + addCoef, height_coef + 100 - 25, 990 + addCoef, height_coef + 100 - 35); 
				ctx.bezierCurveTo(960 + addCoef, height_coef + 100 - 15, 920 + addCoef, height_coef + 100 - 15, 890 + addCoef, height_coef + 100 - 40);
				ctx.bezierCurveTo(860 + addCoef, height_coef + 100 - 10, 820 + addCoef, height_coef + 100 - 10, 790 + addCoef, height_coef + 100 - 40);
				ctx.bezierCurveTo(775 + addCoef, height_coef + 100 - 25, 755 + addCoef, height_coef + 100 - 25, 740 + addCoef, height_coef + 100 - 40);
				ctx.bezierCurveTo(710 + addCoef, height_coef + 100 - 10, 650 + addCoef, height_coef + 100 - 10, 620 + addCoef, height_coef + 100 - 35);
				ctx.bezierCurveTo(610 + addCoef, height_coef + 100 - 20, 590 + addCoef, height_coef + 100 - 20, 580 + addCoef, height_coef + 100 - 30);
				ctx.bezierCurveTo(550 + addCoef, height_coef + 100 - 10, 510 + addCoef, height_coef + 100 - 10, 480 + addCoef, height_coef + 100 - 30);
				ctx.bezierCurveTo(465 + addCoef, height_coef + 100 - 15, 430 + addCoef, height_coef + 100 - 15, 420 + addCoef, height_coef + 100 - 35);
				ctx.bezierCurveTo(400 + addCoef, height_coef + 100 - 5, 360 + addCoef, height_coef + 100 - 5, 340 + addCoef, height_coef + 100 - 25);
				ctx.bezierCurveTo(310 + addCoef, height_coef + 100 - 5, 270 + addCoef, height_coef + 100 - 5, 240 + addCoef, height_coef + 100 - 35);
				ctx.bezierCurveTo(220 + addCoef, height_coef + 100 - 15, 190 + addCoef, height_coef + 100 - 15, 170 + addCoef, height_coef + 100 - 35);
				ctx.bezierCurveTo(155 + addCoef, height_coef + 100 - 15, 135 + addCoef, height_coef + 100 - 15, 120 + addCoef, height_coef + 100 - 30);
				ctx.bezierCurveTo(100 + addCoef, height_coef + 100 - 10, 40 + addCoef, height_coef + 100 - 0, 0 + addCoef, height_coef + 100 - 30);	
				
				if (ti==0){
					ctx.bezierCurveTo( 0, height_coef + 100 - 0, -10, height_coef + 100 + 0, -30, height_coef + 100 + 0);
				}	
			}
		}else if (t==Math.floor(width*ratio/1920) && only_top) {
			ctx.lineTo(1920 + addCoef,50);
			ctx.lineTo(-10,50);
		};
		
	}
		
	
}

function wow_init (){
	new WOW().init();	
}


function reload_scripts(){
	gallery_post_carousel_init();
	fancybox_init();
	canvas_init();
}

function is_visible_init (){
	jQuery.fn.is_visible = function (){
		return ( jQuery(this).offset().top >= jQuery(window).scrollTop() ) && ( jQuery(this).offset().top <= jQuery(window).scrollTop() + jQuery(window).height() );
	}
}

function wp_standard_processing (){
	var galls;
	jQuery( "img[class*='wp-image-']" ).each( function (){
		var el = jQuery( this );
		el.parent( "a" ).addClass( "cws_img_frame" );
	});
	galls = jQuery( ".gallery[class*='galleryid-']" );
	if ( galls.length ){
		galls.each( function (){
			var gall = jQuery( this );
			var d = new Date();
			var t = d.getTime();
			var unique = Math.random() * t;
			var gall_id = "wp_gallery_" + unique;
			jQuery( "a", gall ).attr( "data-fancybox-group", gall_id );
		});
	}
	jQuery( ".gallery-icon a[href*='.jpg'], .gallery-icon a[href*='.jpeg'], .gallery-icon a[href*='.png'], .gallery-icon a[href*='.gif'], .cws_img_frame[href*='.jpg'], .cws_img_frame[href*='.jpeg'], .cws_img_frame[href*='.png'], .cws_img_frame[href*='.gif']" ).fancybox();
}

/* sticky */

function get_logo_position(){
	if (jQuery(".site_header").length) {
		return /logo-\w+/.exec(jQuery(".site_header").attr("class"))[0];
	};
}

function sticky_vars (){
	window.sticky_menu = {'site_header':jQuery(".site_header"),
							'subst_header_height': 0,
							'logo_position':get_logo_position(),
							'menu_container':jQuery('.site_header .header_nav_part'),
							'header_bg': jQuery('.header_bg_img, .cws_parallax_scene_container').eq(0),
							'is_set':false,
							'logo_init_height':jQuery(".site_header .logo>img").height(),
							'menu_item_height': jQuery('.site_header .header_nav_part').find(".main-menu>.menu-item").eq(0).outerHeight(),
							'logo_indent':12,
							'header_content_part_width':parseInt(jQuery(".site_header .container").eq(0).width(), 10),
							'animation_speed':300};
	if ( window.sticky_menu.logo_position == "logo-center" ){
		if ( window.sticky_menu.site_header.find(".header_logo_part").length ){
			window.sticky_menu.menu_offset = jQuery(".header_nav_part").offset().top - window.sticky_menu.logo_indent;
		}
		else{
			window.sticky_menu.menu_offset = jQuery(".header_nav_part").offset().top;
		}
	}
	else{
		window.sticky_menu.menu_offset = window.sticky_menu.site_header.find(".header_box").offset().top;
		if ( window.header_after_slider ){
			window.sticky_menu.menu_offset = window.sticky_menu.menu_offset + window.sticky_menu.site_header.find(".header_box").outerHeight();
		}
	}
	if ( window.sticky_menu.site_header.find(".header_logo_part").length ){
		window.sticky_menu.logo_top_init_margin = window.sticky_menu.logo_position == "logo-center" ? parseInt( jQuery( ".site_header .header_logo_part" ).css("padding-top"), 10 ) : parseInt( jQuery( ".site_header .header_box" ).css( "padding-top" ), 10 );
		window.sticky_menu.logo_bottom_init_margin = window.sticky_menu.logo_position == "logo-center" ? parseInt( jQuery( ".site_header .header_logo_part" ).css("padding-bottom"), 10 ) : parseInt( jQuery( ".site_header .header_box" ).css( "padding-bottom" ), 10 );
	}
	else{
		window.sticky_menu.logo_top_init_margin = window.sticky_menu.logo_position == "logo-center" ? parseInt( jQuery( ".site_header .header_nav_part" ).css("padding-top"), 10 ) : parseInt( jQuery( ".site_header .header_box" ).css( "padding-top" ), 10 );
		window.sticky_menu.logo_bottom_init_margin = window.sticky_menu.logo_position == "logo-center" ? parseInt( jQuery( ".site_header .header_nav_part" ).css("padding-bottom"), 10 ) : parseInt( jQuery( ".site_header .header_box" ).css( "padding-bottom" ), 10 );		
	}
}
function sticky_init (){
	sticky_vars();
	if ( window.stick_menu == 1 && !is_mobile_device() ){
		sticky();
		jQuery(window).scroll(sticky);
		jQuery(window).resize(sticky);
	}
}
function sticky ( e ){
	var e = e != undefined ? e : new Object();
	var e_type = e.type ? e.type : '';
	var f_is_mobile = is_mobile();
	var is_set = window.sticky_menu.is_set;
	var should_be_sticky = jQuery(document).scrollTop()>window.sticky_menu.menu_offset;
	var header_bg_sections = jQuery( '.header_bg_img, .cws_parallax_scene_container' );

	if ( e_type == 'resize' ){
		if ( (f_is_mobile && is_set) || !mobile_menu_width_check()){
			reset_sticky();
		}
		else if ( !f_is_mobile && !is_set && should_be_sticky ){
			set_sticky();
		}
	}
	else if ( e_type == 'scroll' ){
		if ( !f_is_mobile ){
			if ( should_be_sticky && !is_set && (!is_mobile() || mobile_menu_width_check())){
				set_sticky( true );
			}
			else if ( (!should_be_sticky && is_set) || (is_mobile() && !mobile_menu_width_check())){
				reset_sticky( true );
			}
		}else{
			reset_sticky( true );
		}
	}
	else{
		if (should_be_sticky && !is_set && mobile_menu_width_check ()){

			if ( header_bg_sections.length ){
				cws_wait_for_header_bg_height_assigned ( function (){	/* it may require in another conditions too */
					set_sticky();
				});	
			}
			else{
				set_sticky();
			}
		}
		else if ( (!should_be_sticky && is_set) || !mobile_menu_width_check ()){
			reset_sticky();
		}
	}
}
function set_heigth_sticky () {
	var x = jQuery('.site_header .header_box').eq(0).outerHeight();
	jQuery('.site_header').css("height", x);
	jQuery(window).on("resize", function() {
		var x = jQuery('.site_header .header_box').eq(0).outerHeight();
		jQuery('.site_header').css("height", x);
	})
}
function set_sticky ( animated ){
		animated = animated != undefined ? animated : false;
		// window.sticky_menu.subst_header_height = window.sticky_menu.logo_position == 'logo-in-menu' ? '' : (window.sticky_menu.logo_position == 'logo-center' ? ( window.sticky_menu.site_header.find(".header_logo_part").length ? window.sticky_menu.site_header.find(".header_logo_part").outerHeight() : 0 ) + window.sticky_menu.menu_item_height + ( window.sticky_menu.logo_indent * 2 ) : window.sticky_menu.menu_item_height + ( window.sticky_menu.logo_indent * 2 ));
		// window.sticky_menu.site_header.css( "height", window.sticky_menu.subst_header_height );

		window.sticky_menu.site_header.addClass("sticky");
		var width = Boolean( jQuery(".page_boxed").length ) ? jQuery(".page_boxed").outerWidth() + "px" : "100%";
		var left = Boolean( jQuery(".page_boxed").length ) ? jQuery(".page_boxed").offset().left + "px" : "0";
		var logo_sticky_adjustments;
		var sticky_el_styles = {
			"position":"fixed",
			"width":width,
			top:0,
			"left":left
		};
		var tb_spacing_adjustments ={
			"padding-top":window.sticky_menu.logo_indent + "px",
			"padding-bottom":window.sticky_menu.logo_indent + "px"
		};
		var logo_sticky_adjustments = "";
		if (((window.sticky_menu.menu_item_height-24)<window.sticky_menu.logo_init_height)) {
			var logo_sticky_adjustments = {
				"height":String(window.sticky_menu.menu_item_height-20)+"px"
			};
		};
		if (window.sticky_menu.site_header.find(".header_logo_part").hasClass("with_border")) {
			if (((window.sticky_menu.menu_item_height-24)<window.sticky_menu.logo_init_height)) {
				var logo_sticky_adjustments = {
					"height":String(window.sticky_menu.menu_item_height-24)+"px"
				};
			};
		};
		if ((window.sticky_menu.logo_position == 'logo-in') || window.sticky_menu.site_header.hasClass('custom_sticky_logo')) {
			logo_sticky_adjustments = '';
		};

		if (window.sticky_menu.logo_position!="logo-center"){
			window.sticky_menu.site_header.find(".header_box").css(sticky_el_styles);
			if ( window.header_after_slider ){
				window.sticky_menu.site_header.find(".header_box").css(tb_spacing_adjustments);
				window.sticky_menu.site_header.find(".logo>img:not(.logo_sticky)").css(logo_sticky_adjustments);
			}
			else{
				if ( animated ){
					window.sticky_menu.site_header.find(".header_box").stop().animate( tb_spacing_adjustments, window.sticky_menu.animation_speed );
					window.sticky_menu.site_header.find(".logo>img:not(.logo_sticky)").stop().animate( logo_sticky_adjustments, window.sticky_menu.animation_speed );
				}
				else{
					window.sticky_menu.site_header.find(".header_box").css( tb_spacing_adjustments );
					window.sticky_menu.site_header.find(".logo>img:not(.logo_sticky)").css( logo_sticky_adjustments );					
				}
			}
		}
		else{
			window.sticky_menu.menu_container.find(".main-nav-container").css( { "width" : window.sticky_menu.header_content_part_width + "px", "margin-left" : "auto", "margin-right" : "auto" } );
			window.sticky_menu.menu_container.css( sticky_el_styles );
			window.sticky_menu.menu_container.css( tb_spacing_adjustments );
		}
		window.sticky_menu.is_set = true;
}
function reset_sticky ( animated ){
		animated = animated != undefined ? animated : false;
		var sticky_obj_styles = window.sticky_menu.site_header.find(".header_box")[0].style;
		var logo_sticky_adjustments = '';
		if (((window.sticky_menu.menu_item_height-24)<window.sticky_menu.logo_init_height)) {
			logo_sticky_adjustments = {
				"height":window.sticky_menu.logo_init_height+"px"
			};
		}
		if ((window.sticky_menu.logo_position == 'logo-in') || window.sticky_menu.site_header.hasClass('custom_sticky_logo')) {
			logo_sticky_adjustments = '';
		};
		var tb_spacing_adjustments = {
			"padding-top": window.sticky_menu.logo_top_init_margin + "px",
			"padding-bottom" : window.sticky_menu.logo_bottom_init_margin + "px"
		};
		window.sticky_menu.site_header.removeClass("sticky");
		if (window.sticky_menu.logo_position!="logo-center"){
			sticky_obj_styles.removeProperty( "position" );
			sticky_obj_styles.removeProperty( "width" );
			sticky_obj_styles.removeProperty( "top" );
			sticky_obj_styles.removeProperty( "left" );
			if ( !window.header_after_slider ){
				if ( animated ){
					window.sticky_menu.site_header.find(".header_box").stop().animate( tb_spacing_adjustments, window.sticky_menu.animation_speed );
					window.sticky_menu.site_header.find(".logo>img:not(.logo_sticky)").stop().animate( logo_sticky_adjustments, window.sticky_menu.animation_speed );
				}
				else{
					window.sticky_menu.site_header.find(".header_box").css( tb_spacing_adjustments, window.sticky_menu.animation_speed );
					window.sticky_menu.site_header.find(".logo>img:not(.logo_sticky)").css( logo_sticky_adjustments, window.sticky_menu.animation_speed );					
				}
			}
		}
		else{
			window.sticky_menu.menu_container.removeAttr("style");
			window.sticky_menu.menu_container.find(".main-nav-container").removeAttr("style");
		}
		window.sticky_menu.is_set = false;
}

function is_mobile (){
	return window.innerWidth < 768;
}

function is_mobile_device (){
	return jQuery("html").hasClass("touch");
}

function mobile_menu_width_check (){
	if (jQuery(".site_header.logo-in-menu .container").length) {
		return jQuery(".site_header .container").width() > parseInt(jQuery(".site_header .main-menu").attr("data-menu-width"), 10);
	}else{
		return jQuery(".site_header .container").width() > (parseInt(jQuery(".site_header .main-menu").attr("data-menu-width"), 10) + jQuery(".site_header:not(.logo-center) .header_logo_part").width())
	}
}

function logo_in_menu_replece (){
	var html_text = jQuery('.site_header.logo-in-menu .header_logo_part').clone()[0];
	var i = parseInt(jQuery('.site_header.logo-in-menu').attr('data-menu-after'), 10);
	var z;
	if ( i > jQuery('.site_header.logo-in-menu .main-menu').children().length ) {
		return console.log("pls enter valid number of child!");
	}
	if ( i <= 0 ) {
		z = jQuery('.site_header.logo-in-menu .main-menu').children()[0];
		jQuery(z).before(html_text);
	} else {
		z = jQuery('.site_header.logo-in-menu .main-menu').children()[i - 1];
		jQuery('.site_header.logo-in-menu').length ? jQuery(z).after(html_text) : '';
	}
}


/* sticky */

/* mobile menu */

function mobile_pre_load (){
	if (is_mobile() || is_mobile_device()) {
		jQuery('.main-menu').css('opacity','0')
	};
}

var mobile_menu_controller_init_once = false;
function mobile_menu_controller_init (){	
	if (mobile_menu_controller_init_once == false) {
		window.mobile_nav = {
			"is_mobile_menu" : false,
			"nav_obj" : jQuery(".main-menu").clone(),
			"level" : 1,
			"current_id" : false,
			"next_id" : false,
			"prev_id" : "",
			"animation_params" : {
				"vertical_start" : 50,
				"vertical_end" : 10,
				"horizontal_start" : 0,
				"horizontal_end" : 70,
				"speed" : 200
			}
		}
		if ( is_mobile_device() ){
			set_mobile_menu();
		}
		else{
			mobile_menu_controller();
			jQuery(window).resize( function (){
				mobile_menu_controller();
			});
		}
		mobile_nav_switcher_init ();
	};
	mobile_menu_controller_init_once = true;
	
}

function check_menu_width(){
	var allWidth = 0;
	jQuery(".site_header .main-menu").children().each(function(){	
		allWidth = allWidth + jQuery(this).outerWidth(true);
	})
	jQuery(".site_header.mobile_nav .main-menu").length ? '' : jQuery(".site_header .main-menu").attr("data-menu-width",allWidth);
}




function mobile_nav_switcher_init (){
	var nav_container = jQuery(".site_header .header_nav_part"); 
	jQuery(document).on("click", ".header_nav_part.mobile_nav .mobile_menu_header .mobile_menu_switcher", function (){
		var nav = get_current_nav_level();
		var cls = "opened";
		if ( nav_container.hasClass(cls) ){
			nav.stop().animate( {"margin-top": window.mobile_nav.animation_params.vertical_start + "px","opacity":0}, window.mobile_nav.animation_params.speed, function (){
				nav_container.removeClass(cls);
			})
		}
		else{
			nav_container.addClass(cls);
			nav.stop().animate( {"margin-top": window.mobile_nav.animation_params.vertical_end + "px","opacity":1}, window.mobile_nav.animation_params.speed );
		}
	});	
}

function mobile_nav_handlers_init (){
	jQuery(".header_nav_part.mobile_nav .button_open").on( "click", function (e){
		var logo_pos_right = jQuery(".site_header").hasClass('logo-right');
		var logo_pos_left = jQuery(".site_header").hasClass('logo-right');
		var left_a = jQuery(".header_nav_part.mobile_nav .main-nav-container").hasClass('a-left');
		var right_a = jQuery(".header_nav_part.mobile_nav .main-nav-container").hasClass('a-right');
		var posit_menu = '';
		if (logo_pos_right && right_a) {
			posit_menu = 'left'
		}else if (logo_pos_left && left_a) {
			posit_menu = 'right'
		}else if (left_a) {
			posit_menu = 'left'
		}else if (right_a) {
			posit_menu = 'right'
		};
		var el = jQuery(this);
		var next_id = el.closest(".menu-item").attr("id");
		var current_nav_level = get_current_nav_level();
		var next_nav_level = get_next_nav_level( next_id );
		current_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0 }, window.mobile_nav.animation_params.speed, function (){
			current_nav_level.remove();
			jQuery(".main-nav-container").append(next_nav_level);
			next_nav_level.css( {"display": "block", "margin-top": window.mobile_nav.animation_params.vertical_end + "px", "right": "-" + window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0} );
			next_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_start + "px", "opacity" : 1 }, window.mobile_nav.animation_params.speed );
			window.mobile_nav.current_id = next_id;
			window.mobile_nav.level ++;
			mobile_nav_handlers_init ();
		});
	});	
	jQuery(".header_nav_part.mobile_nav .back>a").on("click", function (){
		var current_nav_level = get_current_nav_level();
		var next_nav_level = get_prev_nav_level();
		current_nav_level.animate( { "right": "-" + window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0 }, window.mobile_nav.animation_params.speed, function (){
			current_nav_level.remove();
			jQuery(".main-nav-container").append(next_nav_level);
			next_nav_level.css( {"display": "block", "margin-top": window.mobile_nav.animation_params.vertical_end + "px", "right": window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0} );
			next_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_start + "px", "opacity" : 1 }, window.mobile_nav.animation_params.speed );
			window.mobile_nav.level --;
			mobile_nav_handlers_init ();
		});		
	});
}

function get_current_nav_level (){
	var r = window.mobile_nav.level < 2 ? jQuery( ".header_nav_part .main-menu" ) : jQuery( ".main-nav-container .sub-menu" );
	r.find(".sub-menu").remove();
	return r;	
}

function get_next_nav_level ( next_id ){
	var r = window.mobile_nav.nav_obj.find( "#" + next_id ).children(".sub-menu").first().clone();
	r.find(".sub-menu").remove();
	return r;
}

function get_prev_nav_level (){
	var r = {};
	if ( window.mobile_nav.level > 2 ){
		r = window.mobile_nav.nav_obj.find( "#" + window.mobile_nav.current_id ).parent(".sub-menu").parent(".menu-item");
		window.mobile_nav.current_id = r.attr("id");
		r = r.children(".sub-menu").first();
	}
	else{
		r = window.mobile_nav.nav_obj;
		window.mobile_nav.current_id = false;
	}
	r = r.clone();
	r.find(".sub-menu").remove();
	return r;
}

function mobile_menu_controller (){
	window.mobile_menu = {'site_header':jQuery(".site_header"),
							'subst_header_height': 0,
							'logo_position':get_logo_position(),
							'menu_container':jQuery('.site_header .header_nav_part'),
							'header_bg': jQuery('.header_bg_img, .cws_parallax_scene_container').eq(0),
							'is_set':false,
							'logo_init_height':jQuery(".site_header .logo>img").height(),
							'menu_item_height': jQuery('.site_header .header_nav_part').find(".main-menu>.menu-item").eq(0).outerHeight(),
							'logo_indent':12,
							'header_content_part_width':parseInt(jQuery(".site_header .container").eq(0).width(), 10),
							'animation_speed':300};
	if ( (is_mobile() && !window.mobile_nav.is_mobile_menu) || !mobile_menu_width_check() ){
		set_mobile_menu ();
	}
	else if ( !is_mobile() && window.mobile_nav.is_mobile_menu && mobile_menu_width_check() ){
		reset_mobile_menu ();
	}else{
		window.mobile_menu.site_header.addClass('loaded')
	}
}

function set_mobile_menu (){
	var nav = get_current_nav_level();
	jQuery(".site_header").addClass("mobile_nav");
	jQuery('.site_header .header_nav_part').addClass("mobile_nav");
	nav.css( { "margin-top":window.mobile_nav.animation_params.vertical_start+"px" } );
	window.mobile_nav.is_mobile_menu = true;
	mobile_nav_handlers_init ();
	jQuery(".site_header").addClass('loaded');
}

function reset_mobile_menu (){
	var nav = get_current_nav_level();
	jQuery(".site_header").removeClass("mobile_nav opened");
	jQuery('.site_header .header_nav_part').removeClass("mobile_nav opened");
	nav.removeAttr("style");
	window.mobile_nav.is_mobile_menu = false;
	nav.remove();
	reset_mobile_nav_params ();
}

function reset_mobile_nav_params (){
	jQuery(".main-nav-container").append(window.mobile_nav.nav_obj.clone());
	window.mobile_nav.level = 1;
	window.mobile_nav.current_id = false;
	window.mobile_nav.next_id = false;
}
function add_button (){
	var v = jQuery('ul.main-menu').find("li");
	  for (var p=0;p<v.length;p++) {
	    jQuery(v[p]).attr('id','menu-item-'+p);
	  }
}
/* \mobile menu */

/* carousel */

function gallery_post_carousel_init(){
	jQuery(".gallery_post_carousel").each(function (){
		var nav_init = true;
		var owl = jQuery(this);
		owl.owlCarousel({
			direction: directRTL,
			singleItem: true,
			slideSpeed: 300,
			navigation: false,
			pagination: false
		});
		
		if (owl.attr('data-nav-init') == undefined) {
			owl.attr('data-nav-init',true);
		}else{
			owl.attr('data-nav-init',false);
		}
		

		if ( owl.attr('data-nav-init') == 'true' ){
			nav_init = false;
			jQuery(this).parent().children(".carousel_nav.next").on("click", function (){
				owl.trigger('owl.next');
			});
			jQuery(this).parent().children(".carousel_nav.prev").on("click", function (){
					owl.trigger('owl.prev');
			});
		};
		
	});
}

function widget_carousel_init(){
	jQuery( ".widget_carousel" ).each( function (){
		var cont = jQuery(this);
		cont.owlCarousel( {
			direction: directRTL,
			singleItem: true,
			slideSpeed: 300,
			navigation: false,
			pagination: true
		});
	});
}

function cws_portfolio_single_carousel_init (){
	jQuery( ".cws_portfolio.single.related" ).each( function (){
		var parent = jQuery(this);
		var grid = jQuery( ".cws_portfolio_items", parent );
		var ajax_data_input = jQuery( "#cws_portfolio_single_ajax_data", parent );
		var carousel_nav = jQuery( ".carousel_nav_panel", parent );
		if ( !carousel_nav.length ) return;
		jQuery( ".prev,.next", carousel_nav ).on( "click", function (){
			var el = jQuery( this );
			var action = el.hasClass( "prev" ) ? "prev" : "next";
			var ajax_data = JSON.parse( ajax_data_input.val() );
			var current = ajax_data['current'];
			var all = ajax_data['related_ids'];
			var next_ind;
			var next;
			for ( var i=0; i<all.length; i++ ){
				if ( all[i] == current ){
					if ( action == "prev" ){
						if ( i <= 0 ){
							next_ind = all.length-1;
						}
						else{
							next_ind = i-1;
						}
					}
					else{
						if ( i >= all.length-1 ){
							next_ind = 0;
						}
						else{
							next_ind = i+1
						}
					}
					break;
				}
			}
			if ( typeof next_ind != "number" || typeof all[next_ind] == undefined ) return;
			next = all[next_ind];
			jQuery.post( ajaxurl, {
				'action' : 'cws_portfolio_single',
				'data' : {
					'initial_id' : ajax_data['initial'],
					'requested_id' : next
				}
			}, function ( data, status ){
				var animation_config, old_el, new_el, hiding_class, showing_class, delay, img_loader;
				ajax_data['current'] = next;
				ajax_data_input.attr( "value", JSON.stringify( ajax_data ) );
				animation_config = {
					'prev' : {
						'in' : 'fadeInLeft',
						'out' : 'fadeOutRight'
					},
					'next' : {
						'in' : 'fadeInRight',
						'out' : 'fadeOutLeft'
					},
					'delay' : 150
				};
				old_el = jQuery( ".cws_portfolio_items .item" , parent );
				new_el = jQuery( ".item", jQuery( data ) );
				hiding_class = "animated " + animation_config[action]['out'];
				showing_class = "animated " + animation_config[action]['in'];
				delay = animation_config['delay'];
				new_el.css( "display", "none" );
				grid.append( new_el );
				img_loader = imagesLoaded( grid );
				img_loader.on( 'always', function (){
					old_el.addClass( hiding_class );
					setTimeout( function (){
						old_el.remove();
						new_el.addClass( showing_class );
						new_el.css( "display", "block" );

					    if (Retina.isRetina()) {
				        	jQuery(window.retina.root).trigger( "load" );
					    }
					    fancybox_init();

					}, delay );
				});
			});
		});
	});
}


jQuery.fn.cws_flex_carousel = function ( parent_sel, header_sel ){
	parent_sel = parent_sel != undefined ? parent_sel : '';
	header_sel = header_sel != undefined ? header_sel : '';
	jQuery( this ).each( function (){
		var owl = jQuery( this );
		var nav = jQuery( ".carousel_nav_panel_container", parent_sel );
		owl.cws_flex_carousel_controller( parent_sel, header_sel );
		if ( nav.length ){
			jQuery( ".next", nav ).on("click", function (){
				owl.trigger( "owl.next" );
			});
			jQuery( ".prev", nav ).on("click", function (){
				owl.trigger( "owl.prev" );
			});						
		}
		jQuery( window ).resize( function (){
			owl.cws_flex_carousel_controller( parent_sel, header_sel );
		});
	});
}

jQuery.fn.cws_flex_carousel_controller = function ( parent_sel, header_sel ){
	var owl = jQuery(this);
	var nav = jQuery( ".carousel_nav_panel_container", parent_sel );
	var show_hide_el = nav.siblings().length ? nav : nav.closest( header_sel );
	var show_hide_el_display_prop = window.getComputedStyle( show_hide_el[0] ).display;
	var is_init = owl.hasClass( 'owl-carousel' );
	if ( is_init ){
		owl.data('owlCarousel').destroy();
		show_hide_el.css( 'display', 'none' );
	}
	var items_count = owl.children().length;
	var visible_items_count = count_carousel_items( owl );
	
	var args = {
		direction: directRTL,
		items: visible_items_count,
		slideSpeed: 300,
		navigation: false,
		pagination: false,
		responsive: false		
	}
	if ( items_count > visible_items_count ){
		owl.owlCarousel( args );
		show_hide_el.css( 'display', show_hide_el_display_prop );
	}	
}

function count_carousel_items ( cont, layout_class_prefix, item_class, margin ){
	var re, matches, cols, cont_width, items, item_width, margins_count, cont_without_margins, items_count;
	if ( !cont ) return 1;
	layout_class_prefix = layout_class_prefix ? layout_class_prefix : 'grid-';
	item_class = item_class ? item_class : 'item';
	margin = margin ? margin : 30;
	re = new RegExp( layout_class_prefix + "(\d+)" );
	matches = re.exec( cont.attr( "class" ) );
	cols = matches == null ? 1 : parseInt( matches[1], 10 );
	cont_width = cont.outerWidth();
	items = cont.children( "." + item_class );
	item_width = items.eq(0).outerWidth();
	margins_count = cols - 1;
	cont_without_margins = cont_width - ( margins_count * margin ); /* margins = 30px */
	items_count = Math.round( cont_without_margins / item_width );	
	return items_count;
}

function cws_sc_carousel_init (){
	jQuery( ".cws_sc_carousel" ).each( cws_sc_carousel_controller );
	window.addEventListener( 'resize', function (){
		jQuery( ".cws_sc_carousel" ).each( cws_sc_carousel_controller );	
		cws_patern_width		
	}, false);
}
var nav_init = true;
function cws_sc_carousel_controller (){	
	var el = jQuery( this );
	var bullets_nav = el.hasClass( "bullets_nav" );
	var content_wrapper = jQuery( ".cws_wrapper", el );
	var owl = content_wrapper;
	var content_top_level = content_wrapper.children();
	var nav = jQuery( ".carousel_nav_panel", el );
	var cols = el.data( "columns" );
	var items_count, grid_class, col_class, items, is_init, matches, args, page_content_section, sb_count;
	page_content_section = jQuery( ".page_content" );

	if ( page_content_section.hasClass( "double_sidebar" ) ){
		sb_count = 2;
	}
	else if ( page_content_section.hasClass( "single_sidebar" ) ){
		sb_count = 1;
	}
	else{
		sb_count = 0;
	}
	if ( content_top_level.is( ".gallery[class*='galleryid-']" ) ){
		owl = content_top_level.filter( ".gallery[class*='galleryid-']" );
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		owl.children( ":not(.gallery-item)" ).remove();
		items_count = count_carousel_items( owl, "gallery-columns-", "gallery-item" );
	}
	else if ( content_top_level.is( ".woocommerce" ) ){
		owl = content_top_level.children( ".products" );
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		owl.children( ":not(.product)" ).remove();
		matches = /columns-\d+/.exec( content_top_level.attr( "class" ) );
		grid_class = matches != null && matches[0] != undefined ? matches[0] : '';
		owl.addClass( grid_class );
		items_count = count_carousel_items( owl, "columns-", "product" );
		owl.removeClass( grid_class );
	}
	else if ( content_top_level.is( "ul" ) ){
		owl = content_top_level;
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		items = owl.children();
		grid_class = "crsl-grid-" + cols;
		col_class = "grid_col_" + Math.round( 12 / cols );
		owl.addClass( grid_class );
		if ( !items.hasClass( "item" ) ) items.addClass( "item" )
		items.addClass( col_class );
		items_count = count_carousel_items( owl, "crsl-grid-", "item" );
		owl.removeClass( grid_class );
		items.removeClass( col_class );
	}
	else {
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		items = owl.children();
		grid_class = "crsl-grid-" + cols;
		col_class = "grid_col_" + Math.round( 12 / cols );
		owl.addClass( grid_class );
		if ( !items.hasClass( "item" ) ) items.addClass( "item" )
		items.addClass( col_class );
		items_count = count_carousel_items( owl, "crsl-grid-", "item" );
		owl.removeClass( grid_class );
		items.removeClass( col_class );
	}
	args = {
		direction: directRTL,
		slideSpeed: 300,
		navigation: false,
		pagination: bullets_nav
	}
	switch ( items_count ){
		case 4:
			if ( sb_count == 2 ){
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,2],
					[1170, 4]
				];
			}
			else if ( sb_count == 1 ){
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,2],
					[1170, 4]
				];
			}
			else{
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,3],
					[1170, 4]
				];
			}
			break;
		case 3:
			if ( sb_count == 2 ){
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,1],
					[1170, 3]
				];
			}
			else if ( sb_count == 1 ){
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,2],
					[1170, 3]
				];
			}
			else{
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,3],
					[980,3]
				];	
			}
			break;
		case 2:
			if ( sb_count == 2 ){
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,2],
					[1170, 2]
				];
			}
			else if ( sb_count == 1 ){
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,2],
					[1170, 2]
				];
			}
			else{
				args.itemsCustom = [
					[0,1],
					[479,2],
					[767,2],
					[980,2],
					[1170, 2]
				];	
			}
			break;
		default:
			args.singleItem = true;
	}
	owl.owlCarousel(args);
	if ( nav.length && nav_init ){
		nav_init = false;
		jQuery( ".next", nav ).on("click", function (){
			owl.trigger( "owl.next" );
		});
		jQuery( ".prev", nav ).on("click", function (){
			owl.trigger( "owl.prev" );
		});
	}
}

function twitter_carousel_init (){
	jQuery( ".tweets_carousel" ).each( function (){
		var el = jQuery( this );
		var owl = jQuery( ".cws_wrapper", el );
		owl.owlCarousel({
			direction: directRTL,
			singleItem: true,
			slideSpeed: 300,
			navigation: false,
			pagination: true
		});
	});
}

/* \carousel */

/* carousel */

/* fancybox */

function fancybox_init (){
	jQuery(".fancy").fancybox();
}

/* \fancybox */



/* parallax */

function cws_parallax_init(){
	if (jQuery(".cws_prlx_section").length) {
		jQuery( ".cws_prlx_section" ).cws_prlx();
	}
}

/* \parallax */

/* widget archives hierarchy */

function widget_archives_hierarchy_init (){
	widget_archives_hierarchy_controller ( ".cws-widget>ul li", "ul.children", "parent_archive", "widget_archive_opener" );
	widget_archives_hierarchy_controller ( ".cws-widget .menu>li", "ul.sub-menu", "has_children", "opener" );
}

function widget_archives_hierarchy_controller ( list_item_selector, sublist_item_selector, parent_class, opener_class ){
	jQuery( list_item_selector ).has( sublist_item_selector ).each( function (){
		jQuery( this ).addClass( parent_class );
		var sublist = jQuery( this ).children( sublist_item_selector ).first();
		var level_height = jQuery( this ).outerHeight() - sublist.outerHeight();
		jQuery(this).append( "<span class='fa fa-angle-right " + opener_class + "' style='line-height:" + level_height + "px;'></span>" );
	});
	jQuery( list_item_selector + ">" + sublist_item_selector ).css( "display", "none" );
	jQuery( document ).on( "click", "." + opener_class, function (){
		var el = jQuery(this);
		var sublist = el.siblings( sublist_item_selector );
		if ( !sublist.length ) return;
		sublist = sublist.first();
		el.toggleClass( "active" );
		sublist.slideToggle( 300 );
	});
}

/* \widget archives hierarchy */

/* select 2 */

function select2_init (){
	jQuery("select").select2();
}

/* \select 2 */

/* tabs */

function cws_tabs_init (){
	jQuery.fn.cws_tabs = function (){
		jQuery(this).each(function (){
			var parent = jQuery(this);
			var tabs = parent.find("[role='tablist']");
			var tab_items_container = parent.find("[role='tabpanel']").parent();
			tabs.each(function(){
				jQuery(this).on("click", function (){
					var active_ind = jQuery(this).siblings(".active").eq(0).attr("tabindex");
					jQuery(this).addClass("active").siblings().removeClass("active");
					var item = tab_items_container.find("[tabindex='"+this.tabIndex+"']");
					item.siblings("[tabindex='"+active_ind+"']").eq(0).fadeToggle("150",'swing',function(){
						item.fadeToggle("150");
					});
				});
			});
		});
	}
}

function cws_accordion_init (){
	jQuery.fn.cws_accordion = function () {
		jQuery(this).each(function (){
			var sections = jQuery(this).find(".accordion_section");
			sections.each( function (index, value){
				var section_index = index;
				jQuery(this).find(".accordion_title").on("click", function (){
					jQuery(this).siblings(".accordion_content").slideDown("300");
					sections.eq(section_index).addClass("active");
					sections.eq(section_index).siblings().removeClass("active").find(".accordion_content").slideUp("300");
				});
			});
		});
	}
}

function cws_toggle_init (){
	jQuery.fn.cws_toggle = function ( item_class, opener_class, toggle_section_class ){
		var i=0;
		jQuery(this).each( function (){
			i++;
			var sections = jQuery(this).find("."+item_class);
			var j=0;
			sections.each( function (index, value){
				j++;
				var section_index = index;
				jQuery(this).find("."+opener_class).eq(0).on("click", function (){
					if (!sections.eq(section_index).hasClass("active")){
						sections.eq(section_index).addClass("active");
						sections.eq(section_index).find("."+toggle_section_class).eq(0).slideDown("300");
					}
					else{
						sections.eq(section_index).removeClass("active");
						sections.eq(section_index).find("."+toggle_section_class).eq(0).slideUp("300");
					}
				});
			});
		});
	}
}

/* \tabs */

/* message box */

function cws_message_box_init (){
	jQuery( document ).on( 'click', '.cws_msg_box.closable .cls_btn', function (){
		var cls_btn = jQuery(this);
		var el = cls_btn.closest( ".cws_msg_box" );
		el.animate({opacity: '0'}, 300, function() {
			el.slideUp(300, function() {
				el.remove();
			});
		});
	});
}

/* \message box */



/* progress bar */

function cws_progress_bar_init (){
	jQuery.fn.cws_progress_bar = function (){
		jQuery(this).each( function (){
			var el = jQuery(this);
			var done = false;
			if (!done) done = progress_bar_controller(el);
			jQuery(window).scroll(function (){
				if (!done) done = progress_bar_controller(el);
			});
		});
	}
}

function progress_bar_controller (el){
	if (el.is_visible()){
		var progress = el.find(".progress");
		var value = parseInt( progress.attr("data-value"), 10 );
		var width = parseInt(progress.css('width').replace(/%|(px)|(pt)/,""), 10);
		var ind = el.find(".indicator");
		if ( width < value ){
			var progress_interval = setInterval( function(){
				width ++;
				progress.css("width", width+"%");
				ind.text(' - '+width+'%');
				if (width == value){
					clearInterval(progress_interval);
				}
			}, 5);
		}
		return true;
	}
	return false;
}

/* \progress bar */

/* button */
function custom_colors_init (){
	jQuery(".cws_fa.customized").each(function (){
		var bg_color = jQuery(this).attr("data-bg-color");
		var font_color = jQuery(this).attr("data-font-color");
		var border_color = jQuery(this).attr("data-border-color");
		var alt = jQuery(this).hasClass("alt");
		var icon_wrapp = jQuery(this).parent('.cws_fa_wrapper');
		if ( alt ){
			jQuery(this).css({"background-color":bg_color,"color":font_color});
			jQuery(icon_wrapp).find('.ring').css({"border-color":border_color});
			if (jQuery(icon_wrapp).parent('a').length) {
				jQuery(icon_wrapp).on("mouseenter", function (){
					jQuery(this).find('.cws_fa').css({"background-color":font_color,"color":bg_color});
				});
				jQuery(icon_wrapp).on("mouseleave", function (){
					jQuery(this).find('.cws_fa').css({"background-color":bg_color,"color":font_color});
				});
			};
		}
		else{
			jQuery(this).css({"background-color":bg_color,"color":font_color});
			jQuery(icon_wrapp).find('.ring').css({"border-color":border_color});
			if (jQuery(icon_wrapp).parent('a').length) {
				jQuery(icon_wrapp).on("mouseenter", function (){
					jQuery(this).find('.cws_fa').css({"background-color":border_color,"color":font_color});
					jQuery(this).find('.ring').css({"border-color":bg_color});
				});
				jQuery(icon_wrapp).on("mouseleave", function (){
					jQuery(this).find('.cws_fa').css({"background-color":bg_color,"color":font_color});
					jQuery(this).find('.ring').css({"border-color":border_color});
				});
			};
		}
	});
}




function cws_button_init (){
	jQuery( '.cws_button.customized' ).each( function (){
		var el = jQuery(this);
		var bg_color = el.data( 'bg_color' ),
			bg_hover_color = el.data( 'bg_hover_color' ),
			text_color = el.data( 'text_color' ),
			alt = el.hasClass( 'alt' ),
			alternative;
		var def_state_style = '';
		var alt_state_style = '';
		if ( !bg_color || !bg_hover_color ) return;
		def_state_style += 'background-color:' + bg_color + ';border-color:' + bg_hover_color + ';color:' + text_color + ';';
		alt_state_style += 'background-color:' + bg_hover_color + ';border-color:' + bg_color + ';color:' + text_color + ';';
		if ( alt ){
			alternative = true;
			cws_button_colors_attach ( alternative , el, def_state_style , alt_state_style , bg_color , bg_hover_color);
		}
		else{
			alternative = false;
			cws_button_colors_attach ( alternative,  el, def_state_style, alt_state_style );
		}
	});
}
function cws_button_colors_attach (alternative, el, style1, style2 , bg_color , bg_hover_color ){
	if (alternative) {
		el.find('.cws_button_inner').attr( 'style', style1 );
		el.attr( 'style', 'border-color:' + bg_hover_color + ';' );
		el.on( 'hover', function (){
			el.attr( 'style', 'border-color:' + bg_color + ';' );
			el.find('.cws_button_inner').attr( 'style', style2 );
		});
		el.on( 'mouseleave', function (){
			el.attr( 'style', 'border-color:' + bg_hover_color + ';' );
			el.find('.cws_button_inner').attr( 'style', style1 );
		});	
	}else{
		el.attr( 'style', style1 );
		el.on( 'hover', function (){
			el.attr( 'style', style2 );
		});
		el.on( 'mouseleave', function (){
			el.attr( 'style', style1 );
		});	
	}
	
}
function cws_is_rtl(){
	return jQuery("body").hasClass("rtl");
}


/**/
/* Revolution slider */
/**/
if ( jQuery("#rev_slider_1_1").length ) {
	revolution_slider ()
}
function revolution_slider () {
	var setREVStartSize = function() {
        try {
            var e = new Object,
                i = jQuery(window).width(),
                t = 9999,
                r = 0,
                n = 0,
                l = 0,
                f = 0,
                s = 0,
                h = 0;
            e.c = jQuery('#rev_slider_1_1');
            e.gridwidth = [1170];
            e.gridheight = [650];

            e.sliderLayout = "fullwidth";
            if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
                    f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
                }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
                var u = (e.c.width(), jQuery(window).height());
                if (void 0 != e.fullScreenOffsetContainer) {
                    var c = e.fullScreenOffsetContainer.split(",");
                    if (c) jQuery.each(c, function(e, i) {
                        u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                    }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
                }
                f = u
            } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
            e.c.closest(".rev_slider_wrapper").css({
                height: f
            })
        } catch (d) {
            console.log("Failure at Presize of Slider:" + d)
        }
    };


    setREVStartSize();

    function revslider_showDoubleJqueryError(sliderID) {
        var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
        errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
        errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
        errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
        errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
        jQuery(sliderID).show().html(errorMessage);
    }
    var tpj = jQuery;
    tpj.noConflict();
    var revapi1;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_1_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1_1");
        } else {
            revapi1 = tpj("#rev_slider_1_1").show().revolution({
                sliderType: "standard",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: "uranus",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    }
                },
                gridwidth: 1170,
                gridheight: 650,
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 3000,
                    levels: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });
}


/* contact form */
if (jQuery(".contact-form").length) {
  /**/
  /* contact form */
  /**/

  /* validate the contact form fields */      
  jQuery(".contact-form").each(function(){

    jQuery(this).validate(  /*feedback-form*/{
        onkeyup: false,
        onfocusout: false,
        errorElement: 'p',
        errorLabelContainer: jQuery(this).find('.msg_box_text'),
        rules:
        {
          name:
          {
            required: true
          },
          email:
          {
            required: true,
            email: true
          },
          message:
          {
            required: true
          },
          verify: {
          	required: true,
          	remote: {
              url: 'php/check-capcha.php',
              type: "post",
              data:
              {
                  code: function()
                  {	
                      return jQuery('.verify').val();
                  }
              }
            }
	      }
        },
        messages:
        {
          name:
          {
            required: 'Please enter your name',
          },
          email:
          {
            required: 'Please enter your email address',
            email: 'Please enter a VALID email address'
          },
          message:
          {
            required: 'Please enter your message'
          },
          verify: {
          	required: 'Please enter Captcha',
          	remote: "Please enter a VALID Captcha"
	      }
        },
        invalidHandler: function()
        {
          jQuery(this).find(".cws_msg_box.error-box").slideDown('fast');
          jQuery("#feedback-form-success").slideUp('fast');

        },
        submitHandler: function(form)
        {   
          jQuery(form).find(".cws_msg_box.error-box").slideUp('fast'); 
          var $form = jQuery(form).ajaxSubmit();
          submit_handler($form, jQuery(form).parent().children(".email_server_responce") );
        }
      });
    })

  /* Ajax, Server response */ 
  var submit_handler =  function (form, wrapper){

    var $wrapper = jQuery(wrapper); //this class should be set in HTML code
    
    $wrapper.css("display","block");
    var data = {
      action: "email_server_responce",
      values: jQuery(form).serialize()
    };
    //send data to server
    jQuery.post("php/contacts-process.php", data, function(s_response) {
      s_response = jQuery.parseJSON(s_response);
      if(s_response.info == 'success'){
        $wrapper.addClass("message message-success").append('<div class="cws_msg_box success-box clearfix"><div class="icon_section"><i class="fa fa-thumbs-up"></i></div><div class="content_section"><div class="msg_box_title">Success!</div><div class="msg_box_text">Your message was successfully delivered.</div></div></div>');
        $wrapper.delay(5000).hide(500, function(){
          jQuery(this).removeClass("message message-success").text("").fadeIn(500);
          $wrapper.css("display","none");
        });
        jQuery(form)[0].reset(); 
      } else { 
        $wrapper.addClass("cws_msg_box error-box clearfix").append("<div class='icon_section'><i class='fa fa-exclamation'></i></div><div class='content_section'><div class='msg_box_title'>Server fail!</div><div class='msg_box_text'><p> Please try again later!</p></div></div>");
        $wrapper.delay(5000).hide(500, function(){
          jQuery(this).removeClass("cws_msg_box error-box clearfix").text("").fadeIn(500);
          $wrapper.css("display","none");
        });
      }
    });
  return false;
  }
}

/**/
/* Wrap this */
/**/
jQuery.fn.WrapThis = function(arg1, arg2) { /*=Takes 2 arguments, arg1 is how many elements to wrap together, arg2 is the element to wrap*/

  var wrapClass = "column"; //=Set class name for wrapping element

  var itemLength = jQuery(this).find(arg2).length; //=Get the total length of elements
  var remainder = itemLength%arg1; //=Calculate the remainder for the last array
  var lastArray = itemLength - remainder; //=Calculate where the last array should begin

  var arr = [];

  if(jQuery.isNumeric(arg1)) {
    jQuery(this).find(arg2).each(function(idx, item) {
      var newNum = idx + 1;

      if(newNum%arg1 !== 0 && newNum <= lastArray){
          arr.push(item);
      }
      else if(newNum%arg1 == 0 && newNum <= lastArray) {
          arr.push(item);
          var column = jQuery(this).pushStack(arr);
          column.wrapAll('<div class="' + wrapClass + '"/>'); //=If the array reaches arg1 setting then wrap the array in a column
          arr = [];
      }
      else if(newNum > lastArray && newNum !== itemLength){ //=If newNum is greater than the lastArray setting then start new array of elements
          arr.push(item);
      }
      else { //=If newNum is greater than the length of all the elements then wrap the remainder of elements in a column
          arr.push(item);
          var column = jQuery(this).pushStack(arr);
          column.wrapAll('<div class="' + wrapClass + '"/>');
          arr = []
      }
    });
  }
}

/**/
  /* calendar */
  /**/

function calendar_ui () {
	if (jQuery("#calendar").length) {
	    jQuery('#calendar').datepicker({
	      prevText: '<i class="fa fa-angle-double-left"></i>',
	      nextText: '<i class="fa fa-angle-double-right"></i>',
	      firstDay: 1,
	      dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ]
	    });
	}
}
  

/*twitter carousel*/
function cws_twitter_carousel () {
  jQuery('.twitter-carousel').tweet({
    username: 'Creative_WS',
    count: 9,
    loading_text: 'loading twitter feed...',
    template: "<a class='fa fa-twitter follow_us' href='{user_url}'></a><p class='tweet_content'>{join}{text}</p>"
  });

  jQuery('.twitter-carousel .tweet_list').WrapThis(3, 'li');

  jQuery(".twitter-carousel .tweet_list").each(function (){
    jQuery(this).owlCarousel({
      items: 1,
      singleItem:true,
      navigation: false,
      pagination: true,
    });
  });

}

