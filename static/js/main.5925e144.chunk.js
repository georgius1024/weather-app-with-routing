(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/Weather-PNG-File.3d7b78de.png"},28:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),i=a.n(l),r=a(6),s=a(13),o=a(21),m=a(16),u={addCity:"ADD_CITY",removeCity:"REMOVE_CITY"};var d=function(e,t){var a=!1;return function(n,c){if(!a){var l=localStorage.getItem(t);if(l)try{n=JSON.parse(l)}catch(r){n=void 0}a=!0}var i=e(n,c);return localStorage.setItem(t,JSON.stringify(i)),i}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.addCity:var a=Object(m.a)({},t.payload),n=Object(o.a)(e).filter(function(e){return e.id!==a.id});return n.push(a),n;case u.removeCity:return Object(o.a)(e).filter(function(e){return String(e.id)!==t.payload})}return e},"cities-db"),p=Object(s.b)(d),h=a(7),E=a(8),y=a(10),f=a(9),v=a(11),N=a(53),b=a(55),g=a(54),w=a(26),k=a.n(w),C=(a(37),function(e){return c.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("a",{className:"navbar-item",href:"/"},c.a.createElement("img",{src:k.a,className:"logo",width:"28",height:"28",alt:"logo"}),c.a.createElement("div",{className:"is-size-4 m-l-3"},e.config.appName))))}),O=(a(39),function(e){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"content is-small"},c.a.createElement("a",{href:e.config.contactUrl,target:"_blank",className:"has-text-white",rel:"noopener"},e.config.copyright)))}),j=a(4),D=a(52),A=a(20),x=a.n(A),_={appName:"Weather App",copyright:"\xa9 MyCompany, 2019",contactUrl:"https://github.com/georgius1024/react-weather-app.git",APIXU_KEY:"28dca99ff68243d19d9115506191801",APIXU_URL:"https://api.apixu.com/v1"};a(41);var S=function(e){return{type:u.addCity,payload:e}},T=function(e){return{type:u.removeCity,payload:e}},I=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(y.a)(this,Object(f.a)(t).call(this,e))).state={temperature:"N/A",feelsLike:"N/A",cloud:"N/A",wind:"N/A",direction:"N/A",pressure:"N/A",conditionIcon:"",conditionDesc:"N/A",localTime:"N/A",forecast:[]},a.onKeyDown=a.onKeyDown.bind(Object(j.a)(a)),a.removeCity=a.removeCity.bind(Object(j.a)(a)),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown),this.requestApi()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"onKeyDown",value:function(e){"Escape"===e.key&&window.history.go(-1)}},{key:"removeCity",value:function(){window.history.go(-1),this.props.removeCity()}},{key:"componentDidUpdate",value:function(e,t,a){e.city.name!==this.props.city.name&&this.requestApi()}},{key:"requestApi",value:function(){var e=this;if(this.props.city&&this.props.city.id){var t=_.APIXU_URL+"/forecast.json?key="+_.APIXU_KEY+"&q="+this.props.city.lat+","+this.props.city.lng+"&days=5";fetch(t).then(function(e){return e.json()}).then(function(t){var a=t.current,n=t.location,c=t.forecast;var l=n.localtime.split(" ")[1],i=n.localtime.split(" ")[0];e.setState({temperature:a.temp_c,feelsLike:a.feelslike_c,cloud:a.cloud,wind:(.277778*a.wind_kph).toFixed(1),direction:a.wind_dir,degree:a.wind_degree,pressure:(.750062*a.pressure_mb).toFixed(0),conditionIcon:a.condition.icon,conditionDesc:a.condition.text,humidity:a.humidity,localTime:x()(i).format("ddd, DD MMM")+", "+l,forecast:c.forecastday.map(function(e){return{date:x()(e.date).format("DD.MM"),maxTemp:e.day.maxtemp_c,minTemp:e.day.mintemp_c,icon:e.day.condition.icon,conditionDesc:e.day.condition.text,humidity:e.day.avghumidity,wind:(.277778*e.day.maxwind_kph).toFixed(1)}})})})}}},{key:"render",value:function(){var e=this.props.city,t=this.state,a=t.forecast,n="https://maps.google.com/?q=".concat(e.lat,",").concat(e.lng);return c.a.createElement("div",{className:"city-view"},c.a.createElement("nav",{className:"breadcrumb","aria-label":"breadcrumbs"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(D.a,{to:"/"},"Main")),c.a.createElement("li",{className:"is-active"},c.a.createElement("a",null,e.name)))),c.a.createElement("section",{className:"hero is-primary is-small is-bold"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"pull-right"},c.a.createElement("a",{className:"has-text-light",href:n,target:"_blank"},c.a.createElement("span",{className:"icon is-small  mr4"},c.a.createElement("i",{className:"fas fa-map-marker-alt"})),"Open map")),c.a.createElement("h1",{className:"title"},e.name),c.a.createElement("h2",{className:"subtitle"},t.localTime),c.a.createElement("div",{className:"columns is-vcentered"},c.a.createElement("div",{className:"column mr4"},c.a.createElement("div",{className:" is-size-4"},t.temperature,"\xb0C")),c.a.createElement("div",{className:"column",style:{paddingTop:24}},c.a.createElement("span",{className:"icon is-large",style:{whiteSpace:"nowrap"}},c.a.createElement("img",{align:"left",src:t.conditionIcon,alt:"conditions"}))),c.a.createElement("div",{className:"column is-full"},t.conditionDesc)),c.a.createElement("table",{className:"table is-narrow "},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Feels like"),c.a.createElement("td",null,t.feelsLike,"\xb0C")),c.a.createElement("tr",null,c.a.createElement("td",null,"Wind"),c.a.createElement("td",null,c.a.createElement("span",{className:"mr4"}," ",t.wind,"m/s"),c.a.createElement("span",{className:"icon is-small",title:t.direction},c.a.createElement("i",{className:"fas fa-arrow-down",style:{transform:"rotate("+t.degree+"deg)"}})))),c.a.createElement("tr",null,c.a.createElement("td",null,"Pressure"),c.a.createElement("td",null,t.pressure,"mmHg")),c.a.createElement("tr",null,c.a.createElement("td",null,"Himidity"),c.a.createElement("td",null,t.humidity,"%")))),c.a.createElement("div",null)))),c.a.createElement("section",{className:"hero is-light"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:"subtitle"},"Forecast"),c.a.createElement("table",{className:"table is-bordered is-condensed"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Date"),c.a.createElement("td",null,"T",c.a.createElement("sub",null,"min,")," \xb0C"),c.a.createElement("td",null,"T",c.a.createElement("sub",null,"max,")," \xb0C"),c.a.createElement("td",null,"Himidity, %"),c.a.createElement("td",{colSpan:"2"},"Weather conditions")),a.map(function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",{className:"right"},e.date),c.a.createElement("td",{className:"right"},e.maxTemp),c.a.createElement("td",{className:"right"},e.minTemp),c.a.createElement("td",{className:"right"},e.humidity),c.a.createElement("td",null,c.a.createElement("span",{className:"icon"},c.a.createElement("img",{align:"left",src:t.conditionIcon,alt:"conditions"}))),c.a.createElement("td",null,t.conditionDesc))})))))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"},c.a.createElement(D.a,{to:"/",className:"button is-primary"},c.a.createElement("span",{className:"icon is-medium mr4"},c.a.createElement("i",{className:"fa fa-chevron-left"})),"Back")),c.a.createElement("div",{className:"column"},c.a.createElement("a",{className:"button is-danger pull-right",onClick:this.removeCity},c.a.createElement("span",{className:"icon  mr4"},c.a.createElement("i",{className:"fas fa-trash-alt"})),"Delete city"))))))}}],[{key:"shouldComponentUpdate",value:function(e,t){return e.city.name!==this.props.city.name&&(this.requestApi(e.city.name),!0)}}]),t}(n.Component),U=Object(r.b)(function(e,t){var a=t.match.params.id;return{city:e.find(function(e){return String(e.id)===a})||{}}},function(e,t){var a=t.match.params.id;return{removeCity:function(){return e(T(a))}}})(I),M=function(e){function t(e,a){var n;return Object(h.a)(this,t),(n=Object(y.a)(this,Object(f.a)(t).call(this,e,a))).state={search:""},n.onChange=n.onChange.bind(Object(j.a)(n)),n}return Object(v.a)(t,e),Object(E.a)(t,[{key:"onChange",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){var e=(this.state||{}).search,t=this.props.cities.map(function(t,a){return!(e&&!t.fullName.toLowerCase().includes(e.toLowerCase()))&&c.a.createElement("li",{key:a},c.a.createElement(D.a,{to:"/city/".concat(t.id,"/")},t.fullName))}).filter(function(e){return Boolean(e)});return c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column",style:{padding:"16px"}},c.a.createElement("div",{className:"control",style:{margin:"16px"}},c.a.createElement("input",{className:"input",type:"text",placeholder:"Enter city name",value:e,onChange:this.onChange})),c.a.createElement("aside",{className:"menu"},!!t.length&&c.a.createElement("div",null,c.a.createElement("p",{className:"menu-label"},"Select city"),c.a.createElement("ul",{className:"menu-list"},t)),!(t.length||!e)&&c.a.createElement("ul",{className:"menu-list"},c.a.createElement("li",null,'Search string "',e,'" not found in list')),t.length?c.a.createElement("div",{className:"menu-label"},c.a.createElement("hr",null)):"",c.a.createElement("ul",{className:"menu-list"},c.a.createElement("li",null,c.a.createElement(D.a,{to:"/add"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-plus"})),"Add city"))))))}}]),t}(n.Component),K=Object(r.b)(function(e){return{cities:e}})(M),L=(a(43),S),P=a(45),q=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(y.a)(this,Object(f.a)(t).call(this,e))).state={value:"",typeahead:[]},a.onChange=a.onChange.bind(Object(j.a)(a)),a.onKeyDown=a.onKeyDown.bind(Object(j.a)(a)),a.fetchTypeahead=P(a.fetchTypeahead.bind(Object(j.a)(a)),300),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"onChange",value:function(e){this.setValue(e.target.value)}},{key:"onKeyDown",value:function(e){"Escape"===e.key&&window.history.go(-1)}},{key:"setValue",value:function(e){this.setState({value:e}),this.fetchTypeahead()}},{key:"fetchTypeahead",value:function(){var e=this,t=this.state.value;t.length>3?fetch(_.APIXU_URL+"/search.json?key="+_.APIXU_KEY+"&q="+t).then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){var t=e.name.split(",");return{id:e.id,fullName:e.name,name:t[0],lat:e.lat,lng:e.lon}});e.setState({typeahead:a})}):this.setState({typeahead:[]})}},{key:"render",value:function(){var e,t=this;if(this.state.typeahead.length>1){var a=this.state.typeahead.map(function(e,a){return c.a.createElement("a",{key:a,className:"typeahead-item",onClick:function(){var a=Object(m.a)({},e);t.props.addCity(a),t.setState({value:"",typeahead:[]}),window.history.go(-1)}},e.fullName)});e=c.a.createElement("div",{className:"typeahead"},a)}else e=c.a.createElement("div",{className:"typeahead"});return c.a.createElement("div",{className:"add-city-view"},c.a.createElement("nav",{className:"breadcrumb","aria-label":"breadcrumbs"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(D.a,{to:"/"},"Main")),c.a.createElement("li",{className:"is-active"},c.a.createElement("a",null,"Add city")))),c.a.createElement("section",{className:"hero is-primary"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"pull-right"},c.a.createElement(D.a,{to:"/"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-lg fa-times"})))),c.a.createElement("h1",{className:"title"},"Add city"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Enter city name",value:this.state.value,onChange:this.onChange}),e)))))}}]),t}(n.Component),F=Object(r.b)(function(e,t){return{cities:e}},function(e,t){return{addCity:function(t){return e(L(t))}}})(q),W=function(){return c.a.createElement("section",{className:"hero is-danger"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:"title"},"Ooops!"),c.a.createElement("p",{className:"subtitle"},"Page not found"),c.a.createElement(D.a,{to:"/",className:"button is-primary"},"Go to main page"))))},X=function(e){function t(){return Object(h.a)(this,t),Object(y.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){0===this.props.cities.length&&this.addCity()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(C,{config:_}),c.a.createElement(N.a,{basename:"weather-app-with-routing"},c.a.createElement(b.a,null,c.a.createElement(g.a,{exact:!0,path:"/",component:K}),c.a.createElement(g.a,{exact:!0,path:"/city/:id",component:U}),c.a.createElement(g.a,{exact:!0,path:"/add",component:F}),c.a.createElement(g.a,{exact:!0,path:"*",component:W}))),c.a.createElement(O,{config:_}))}},{key:"removeCity",value:function(e){this.props.removeCity(e),1===this.props.cities.length&&this.addCity()}},{key:"addCity",value:function(){this.setState({modalActive:!0})}},{key:"submitCity",value:function(e){this.closeModal(),this.props.addCity(e)}},{key:"closeModal",value:function(){this.setState({modalActive:!1})}}]),t}(n.Component),Y=Object(r.b)(function(e){return{cities:e}})(X);a(47),a(49);i.a.render(c.a.createElement(r.a,{store:p},c.a.createElement(Y,null)),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.5925e144.chunk.js.map