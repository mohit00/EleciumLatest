(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3xIc":function(t,e,i){"use strict";i.r(e);var n=i("DtyJ");i.d(e,"BehaviorSubject",function(){return n.BehaviorSubject})},TgQZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i("CcnG"),i("jtrZ"),i("dWZg");var n=i("t/UT");e.FusePerfectScrollbarDirective=function(){function t(t,e,i){var n=this;this.element=t,this.fuseConfig=e,this.platform=i,this.isDisableCustomScrollbars=!1,this.isMobile=!1,this.isInitialized=!0,this.onSettingsChanged=this.fuseConfig.onSettingsChanged.subscribe(function(t){n.isDisableCustomScrollbars=!t.customScrollbars}),(this.platform.ANDROID||this.platform.IOS)&&(this.isMobile=!0)}return t.prototype.ngAfterViewInit=function(){this.isMobile||this.isDisableCustomScrollbars?this.isInitialized=!1:this.ps=new n.default(this.element.nativeElement,{wheelPropagation:!0})},t.prototype.ngOnDestroy=function(){this.isInitialized&&this.ps&&(this.onSettingsChanged.unsubscribe(),this.ps.destroy())},t.prototype.documentClick=function(t){this.isInitialized&&this.ps&&this.ps.update()},t.prototype.update=function(){this.isInitialized&&this.ps.update()},t.prototype.destroy=function(){this.ngOnDestroy()},t.prototype.scrollToX=function(t,e){this.animateScrolling("scrollLeft",t,e)},t.prototype.scrollToY=function(t,e){this.animateScrolling("scrollTop",t,e)},t.prototype.scrollToTop=function(t,e){this.animateScrolling("scrollTop",t||0,e)},t.prototype.scrollToLeft=function(t,e){this.animateScrolling("scrollLeft",t||0,e)},t.prototype.scrollToRight=function(t,e){this.animateScrolling("scrollLeft",this.element.nativeElement.scrollWidth-(t||0),e)},t.prototype.scrollToBottom=function(t,e){this.animateScrolling("scrollTop",this.element.nativeElement.scrollHeight-(t||0),e)},t.prototype.animateScrolling=function(t,e,i){var n=this;if(i){if(e!==this.element.nativeElement[t]){var r=0,l=0,o=performance.now(),s=this.element.nativeElement[t],a=(s-e)/2,c=function(h){l+=Math.PI/(i/(h-o)),r=Math.round(e+a+a*Math.cos(l)),n.element.nativeElement[t]===s&&(l>=Math.PI?(n.element.nativeElement[t]=e,n.update(),n.update()):(n.element.nativeElement[t]=s=r,o=h,window.requestAnimationFrame(c)))};window.requestAnimationFrame(c)}}else this.element.nativeElement[t]=e,this.update(),this.update()},t}()},jtrZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("3xIc"),r=i("ZYCi");i("dWZg"),e.FuseConfigService=function(){function t(t,e){var i=this;this.router=t,this.platform=e,this.defaultSettings={layout:{navigation:"top",navigationFolded:!1,toolbar:"above",footer:"none",mode:"fullwidth"},colorClasses:{toolbar:"mat-white-500-bg",navbar:"mainolor",footer:"mainolor"},customScrollbars:!0,routerAnimation:"fadeIn"},(this.platform.ANDROID||this.platform.IOS)&&(this.defaultSettings.customScrollbars=!1),this.settings=Object.assign({},this.defaultSettings),t.events.subscribe(function(t){t instanceof r.NavigationStart&&i.setSettings({layout:i.defaultSettings.layout})}),this.onSettingsChanged=new n.BehaviorSubject(this.settings)}return t.prototype.setSettings=function(t){this.settings=Object.assign({},this.settings,t),this.onSettingsChanged.next(this.settings)},t}()},"t/UT":function(t,e,i){"use strict";function n(t){return getComputedStyle(t)}function r(t,e){for(var i in e){var n=e[i];"number"==typeof n&&(n+="px"),t.style[i]=n}return t}function l(t){var e=document.createElement("div");return e.className=t,e}i.r(e);var o="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function s(t,e){if(!o)throw new Error("No element matching method supported");return o.call(t,e)}function a(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function c(t,e){return Array.prototype.filter.call(t.children,function(t){return s(t,e)})}var h={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},u={x:null,y:null};function d(t,e){var i=t.element.classList,n=h.state.scrolling(e);i.contains(n)?clearTimeout(u[e]):i.add(n)}function f(t,e){u[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(h.state.scrolling(e))},t.settings.scrollingThreshold)}var p=function(t){this.element=t,this.handlers={}},g={isEmpty:{configurable:!0}};p.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},p.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(n){return!(!e||n===e)||(i.element.removeEventListener(t,n,!1),!1)})},p.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},g.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(p.prototype,g);var b=function(){this.eventElements=[]};function m(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}b.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new p(t),this.eventElements.push(e)),e},b.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},b.prototype.unbind=function(t,e,i){var n=this.eventElement(t);n.unbind(e,i),n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n),1)},b.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},b.prototype.once=function(t,e,i){var n=this.eventElement(t),r=function(t){n.unbind(e,r),i(t)};n.bind(e,r)};var v=function(t,e,i,n,r){var l;if(void 0===n&&(n=!0),void 0===r&&(r=!1),"top"===e)l=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");l=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,i,n,r){var o=l[0],s=l[1],a=l[2],c=l[3],h=l[4],u=l[5];void 0===n&&(n=!0),void 0===r&&(r=!1);var p=t.element;t.reach[c]=null,p[a]<1&&(t.reach[c]="start"),p[a]>t[o]-t[s]-1&&(t.reach[c]="end"),e&&(p.dispatchEvent(m("ps-scroll-"+c)),e<0?p.dispatchEvent(m("ps-scroll-"+h)):e>0&&p.dispatchEvent(m("ps-scroll-"+u)),n&&function(t,e){d(t,e),f(t,e)}(t,c)),t.reach[c]&&(e||r)&&p.dispatchEvent(m("ps-"+c+"-reach-"+t.reach[c]))}(t,i,0,n,r)};function w(t){return parseInt(t,10)||0}var y={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},Y=function(t){var e=t.element,i=Math.floor(e.scrollTop);t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(c(e,h.element.rail("x")).forEach(function(t){return a(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(c(e,h.element.rail("y")).forEach(function(t){return a(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=X(t,w(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=w((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=X(t,w(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=w(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,e){var i={width:e.railXWidth},n=Math.floor(t.scrollTop);i.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:t.scrollLeft,e.isScrollbarXUsingBottom?i.bottom=e.scrollbarXBottom-n:i.top=e.scrollbarXTop+n,r(e.scrollbarXRail,i);var l={top:n,height:e.railYHeight};e.isScrollbarYUsingRight?l.right=e.isRtl?e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:e.scrollbarYRight-t.scrollLeft:l.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:e.scrollbarYLeft+t.scrollLeft,r(e.scrollbarYRail,l),r(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),r(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(e,t),t.scrollbarXActive?e.classList.add(h.state.active("x")):(e.classList.remove(h.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=0),t.scrollbarYActive?e.classList.add(h.state.active("y")):(e.classList.remove(h.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)};function X(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function S(t,e){var i=e[0],n=e[1],r=e[2],l=e[3],o=e[5],s=e[6],a=e[7],c=e[8],u=t.element,p=null,g=null,b=null;function m(e){u[s]=p+b*(e[r]-g),d(t,a),Y(t),e.stopPropagation(),e.preventDefault()}function v(){f(t,a),t[c].classList.remove(h.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",m)}t.event.bind(t[e[4]],"mousedown",function(e){p=u[s],g=e[r],b=(t[n]-t[i])/(t[l]-t[o]),t.event.bind(t.ownerDocument,"mousemove",m),t.event.once(t.ownerDocument,"mouseup",v),t[c].classList.add(h.state.clicking),e.stopPropagation(),e.preventDefault()})}var W={"click-rail":function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top;t.element.scrollTop+=(i>t.scrollbarYTop?1:-1)*t.containerHeight,Y(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left;t.element.scrollLeft+=(i>t.scrollbarXLeft?1:-1)*t.containerWidth,Y(t),e.stopPropagation()})},"drag-thumb":function(t){S(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),S(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&(s(e,":hover")||s(t.scrollbarX,":focus")||s(t.scrollbarY,":focus"))){var n,r=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(r){if("IFRAME"===r.tagName)r=r.contentDocument.activeElement;else for(;r.shadowRoot;)r=r.shadowRoot.activeElement;if(s(n=r,"input,[contenteditable]")||s(n,"select,[contenteditable]")||s(n,"textarea,[contenteditable]")||s(n,"button,[contenteditable]"))return}var l=0,o=0;switch(i.which){case 37:l=i.metaKey?-t.contentWidth:i.altKey?-t.containerWidth:-30;break;case 38:o=i.metaKey?t.contentHeight:i.altKey?t.containerHeight:30;break;case 39:l=i.metaKey?t.contentWidth:i.altKey?t.containerWidth:30;break;case 40:o=i.metaKey?-t.contentHeight:i.altKey?-t.containerHeight:-30;break;case 32:o=i.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:o=t.containerHeight;break;case 34:o=-t.containerHeight;break;case 36:o=t.contentHeight;break;case 35:o=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==l||t.settings.suppressScrollY&&0!==o||(e.scrollTop-=o,e.scrollLeft+=l,Y(t),function(i,n){var r=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===r&&n>0||r>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===l&&i<0||l>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}(l,o)&&i.preventDefault())}})},wheel:function(t){var e=t.element;function i(i){var r=function(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!=e&&i!=i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}(i),l=r[0],o=r[1];if(!function(t,i,r){if(!y.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;for(var l=t;l&&l!==e;){if(l.classList.contains(h.element.consuming))return!0;var o=n(l);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&!(0===l.scrollTop&&r>0||l.scrollTop===s&&r<0))return!0;var a=l.scrollWidth-l.clientWidth;if(a>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===a&&i>0))return!0}l=l.parentNode}return!1}(i.target,l,o)){var s=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(o?e.scrollTop-=o*t.settings.wheelSpeed:e.scrollTop+=l*t.settings.wheelSpeed,s=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(l?e.scrollLeft+=l*t.settings.wheelSpeed:e.scrollLeft-=o*t.settings.wheelSpeed,s=!0):(e.scrollTop-=o*t.settings.wheelSpeed,e.scrollLeft+=l*t.settings.wheelSpeed),Y(t),(s=s||function(i,n){var r=Math.floor(e.scrollTop),l=0===e.scrollTop,o=r+e.offsetHeight===e.scrollHeight,s=0===e.scrollLeft,a=e.scrollLeft+e.offsetWidth===e.scrollWidth;return!(Math.abs(n)>Math.abs(i)?l||o:s||a)||!t.settings.wheelPropagation}(l,o))&&!i.ctrlKey&&(i.stopPropagation(),i.preventDefault())}}void 0!==window.onwheel?t.event.bind(e,"wheel",i):void 0!==window.onmousewheel&&t.event.bind(e,"mousewheel",i)},touch:function(t){if(y.supportsTouch||y.supportsIePointer){var e=t.element,i={},r=0,l={},o=null;y.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",d),t.event.bind(e,"touchend",f)):y.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",d),t.event.bind(e,"pointerup",f)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",d),t.event.bind(e,"MSPointerUp",f)))}function s(i,n){e.scrollTop-=n,e.scrollLeft-=i,Y(t)}function a(t){return t.targetTouches?t.targetTouches[0]:t}function c(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(c(t)){var e=a(t);i.pageX=e.pageX,i.pageY=e.pageY,r=(new Date).getTime(),null!==o&&clearInterval(o)}}function d(o){if(c(o)){var u=a(o),d={pageX:u.pageX,pageY:u.pageY},f=d.pageX-i.pageX,p=d.pageY-i.pageY;if(function(t,i,r){if(!e.contains(t))return!1;for(var l=t;l&&l!==e;){if(l.classList.contains(h.element.consuming))return!0;var o=n(l);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&!(0===l.scrollTop&&r>0||l.scrollTop===s&&r<0))return!0;var a=l.scrollLeft-l.clientWidth;if(a>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===a&&i>0))return!0}l=l.parentNode}return!1}(o.target,f,p))return;s(f,p),i=d;var g=(new Date).getTime(),b=g-r;b>0&&(l.x=f/b,l.y=p/b,r=g),function(i,n){var r=Math.floor(e.scrollTop),l=e.scrollLeft,o=Math.abs(i),s=Math.abs(n);if(s>o){if(n<0&&r===t.contentHeight-t.containerHeight||n>0&&0===r)return 0===window.scrollY&&n>0&&y.isChrome}else if(o>s&&(i<0&&l===t.contentWidth-t.containerWidth||i>0&&0===l))return!0;return!0}(f,p)&&o.preventDefault()}}function f(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval(function(){t.isInitialized?clearInterval(o):l.x||l.y?Math.abs(l.x)<.01&&Math.abs(l.y)<.01?clearInterval(o):(s(30*l.x,30*l.y),l.x*=.8,l.y*=.8):clearInterval(o)},10))}}},L=function(t,e){var i=this;if(void 0===e&&(e={}),"string"==typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var o in this.element=t,t.classList.add(h.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},e)i.settings[o]=e[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s,a,c=function(){return t.classList.add(h.state.focus)},u=function(){return t.classList.remove(h.state.focus)};this.isRtl="rtl"===n(t).direction,this.isNegativeScroll=(a=t.scrollLeft,t.scrollLeft=-1,s=t.scrollLeft<0,t.scrollLeft=a,s),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new b,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=l(h.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=l(h.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",c),this.event.bind(this.scrollbarX,"blur",u),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var d=n(this.scrollbarXRail);this.scrollbarXBottom=parseInt(d.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=w(d.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=w(d.borderLeftWidth)+w(d.borderRightWidth),r(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=w(d.marginLeft)+w(d.marginRight),r(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=l(h.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=l(h.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",c),this.event.bind(this.scrollbarY,"blur",u),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var f=n(this.scrollbarYRail);this.scrollbarYRight=parseInt(f.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=w(f.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(t){var e=n(t);return w(e.width)+w(e.paddingLeft)+w(e.paddingRight)+w(e.borderLeftWidth)+w(e.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=w(f.borderTopWidth)+w(f.borderBottomWidth),r(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=w(f.marginTop)+w(f.marginBottom),r(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return W[t](i)}),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(t){return i.onScroll(t)}),Y(this)};L.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,r(this.scrollbarXRail,{display:"block"}),r(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=w(n(this.scrollbarXRail).marginLeft)+w(n(this.scrollbarXRail).marginRight),this.railYMarginHeight=w(n(this.scrollbarYRail).marginTop)+w(n(this.scrollbarYRail).marginBottom),r(this.scrollbarXRail,{display:"none"}),r(this.scrollbarYRail,{display:"none"}),Y(this),v(this,"top",0,!1,!0),v(this,"left",0,!1,!0),r(this.scrollbarXRail,{display:""}),r(this.scrollbarYRail,{display:""}))},L.prototype.onScroll=function(t){this.isAlive&&(Y(this),v(this,"top",this.element.scrollTop-this.lastScrollTop),v(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},L.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),a(this.scrollbarX),a(this.scrollbarY),a(this.scrollbarXRail),a(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},L.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},e.default=L}}]);