(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},16:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),s=n(7),r=n.n(s),l=(n(15),n(1)),c=n(2),i=n(4),u=n(3),m=n(5),d=n(8),p=n.n(d),h=(n(16),function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={days:0,hours:0,min:0,sec:0},n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){var a=e.calculateCountdown(e.props.date);a?e.setState(a):e.stop()},1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var a=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(a<=0)return!1;var n={years:0,days:0,hours:0,min:0,sec:0};return a>=31557600&&(n.years=Math.floor(a/31557600),a-=365.25*n.years*86400),a>=86400&&(n.days=Math.floor(a/86400),a-=86400*n.days),a>=3600&&(n.hours=Math.floor(a/3600),a-=3600*n.hours),a>=60&&(n.min=Math.floor(a/60),a-=60*n.min),n.sec=a,n}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return o.a.createElement("div",{className:"Countdown"},o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.days)),o.a.createElement("span",null,1===e.days?"Day":"Days"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.hours)),o.a.createElement("span",null,"Hours"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.min)),o.a.createElement("span",null,"Min"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.sec)),o.a.createElement("span",null,"Sec"))))}}]),a}(t.Component));h.defaultProps={date:new Date};var v=h,w=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),o.a.createElement(v,{date:"2019-05-09T09:00:00"})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},9:function(e,a,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.969bd82f.chunk.js.map