(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"27dc":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Search"),this.$store.state.notif.err?a("ErrorNotif"):t._e(),this.$store.state.loadingData?a("LoadingData"):t._e(),this.$store.state.weatherData&&!this.$store.state.loadingData?a("WeatherDashboard"):t._e()],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bySearch,expression:"bySearch"}],attrs:{type:"text",name:"",id:""},domProps:{value:t.bySearch},on:{keypress:t.getBySearch,input:function(e){e.target.composing||(t.bySearch=e.target.value)}}}),a("button",{on:{click:t.getBySearch}},[t._v("Search")]),a("button",{on:{click:t.getByLocation}},[t._v("Place")]),a("button",{on:{click:t.clearData}},[t._v("Clear")])])},s=[],c=(a("99af"),{name:"Search",data:function(){return{apiKey:"d2a9887d08726ec158f84a1205d0b8f3",urlBase:"https://api.openweathermap.org/data/2.5/",bySearch:""}},methods:{getBySearch:function(){if("Enter"===event.key||"click"===event.type){this.$store.dispatch("showLoading"),this.$store.dispatch("hideNotif","err");var t="".concat(this.urlBase,"weather?q=").concat(this.bySearch,"&&units=metric&appid=").concat(this.apiKey);this.$http.get(t).then(this.searchResult,this.loading=!1).catch(this.catchedErr)}},getByLocation:function(){var t=this;navigator.geolocation&&(this.$store.dispatch("showLoading"),this.$store.dispatch("hideNotif","err"),navigator.geolocation.getCurrentPosition((function(e){var a=e.coords.latitude,r=e.coords.longitude,n="".concat(t.urlBase,"weather?lat=").concat(a,"&lon=").concat(r,"&units=metric&appid=").concat(t.apiKey);t.$http.get(n).then(t.searchResult).catch(t.catchedErr)})))},searchResult:function(t){200===t.status&&(this.$store.dispatch("getBySearch",t),this.$store.dispatch("hideLoading"))},catchedErr:function(t){400!==t.response.status&&404!==t.response.status||(this.$store.dispatch("hideLoading"),this.$store.dispatch("showNotif","err"))},clearData:function(){this.bySearch="",this.$store.dispatch("clearData")}}}),u=c,h=a("2877"),l=Object(h["a"])(u,i,s,!1,null,null,null),d=l.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" loading ")])},f=[],m={name:"LoadingData"},v=m,g=Object(h["a"])(v,p,f,!1,null,null,null),_=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Error ")])},w=[],y={name:"ErrorNotif"},D=y,S=Object(h["a"])(D,b,w,!1,null,null,null),$=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("data")]),t._v(" city: "+t._s(t.weatherData.name)+" "),a("br"),t._v(" temp: "+t._s(Math.round(t.weatherData.main.temp))+" °C "),a("br"),t._v(" temp feel: "+t._s(Math.round(t.weatherData.main.feels_like))+" °C "),a("br"),t._v(" min temp: "+t._s(Math.round(t.weatherData.main.temp_min))+" °C "),a("br"),t._v(" max temp: "+t._s(Math.round(t.weatherData.main.temp_max))+" °C "),a("br"),t._v(" weather: "+t._s(t.weatherData.weather[0].main)+" "),a("br"),t._v(" description: "+t._s(t.weatherData.weather[0].description)+" "),a("br"),t._v(" humidity: "+t._s(t.weatherData.main.humidity)+" % "),a("br"),t._v(" pressure: "+t._s(t.weatherData.main.pressure)+" hPa "),a("br"),t._v(" wind speed: "+t._s(t.weatherData.wind.speed)+" m/s "),a("br"),t._v(" sunrise: "+t._s(t.getDate(t.weatherData.sys.sunrise))+" "),a("br"),t._v(" sunset: "+t._s(t.getDate(t.weatherData.sys.sunset))+" ")])},x=[],j={name:"WeatherDashboard",computed:{weatherData:function(){return this.$store.state.weatherData}},methods:{getDate:function(t){var e=new Date(1e3*t),a=e.getHours(),r=e.getMinutes(),n=e.getSeconds(),o="".concat(a," : ").concat(r," : ").concat(n);return o}}},E=j,N=Object(h["a"])(E,O,x,!1,null,null,null),L=N.exports,P={name:"App",components:{Search:d,LoadingData:_,ErrorNotif:$,WeatherDashboard:L}},k=P,B=Object(h["a"])(k,n,o,!1,null,null,null),M=B.exports,C=a("2f62");r["a"].use(C["a"]);var W=new C["a"].Store({state:{weatherData:null,loadingData:!1,notif:{err:!1,warn:!1,success:!1}},mutations:{setWeatherData:function(t,e){t.weatherData=e.data,console.log(e.data)},loading:function(t){t.loadingData=!0},loaded:function(t){t.loadingData=!1},showNotif:function(t,e){t.notif[e]=!0},hideNotif:function(t,e){t.notif[e]=!1},clear:function(t){t.weatherData=null,t.loadingData=!1}},actions:{getBySearch:function(t,e){var a=t.commit;a("setWeatherData",e)},showLoading:function(t){var e=t.commit;e("loading")},hideLoading:function(t){var e=t.commit;e("loaded")},showNotif:function(t,e){var a=t.commit;a("showNotif",e)},hideNotif:function(t,e){var a=t.commit;a("hideNotif",e)},clearData:function(t){var e=t.commit;e("clear")}},modules:{}}),K=a("bc3a"),R=a.n(K);a("27dc");r["a"].config.productionTip=!1,r["a"].prototype.$http=R.a,new r["a"]({store:W,render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.ca326040.js.map