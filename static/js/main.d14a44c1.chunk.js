(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(74),d=a(75),m=a(84),p=a(83),f=a(13),v=a.n(f),h=a(224),b=a(228),E=a(225),y=a(226),g=a(32),_=a.n(g),x=a(33),C=a.n(x),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:v.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:C()(v.a.card,v.a.infected)}," ",r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0}," ","Infected"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:a.value,duration:2.2,separator:","}))," ",r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Covid-19 active cases"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:C()(v.a.card,v.a.recovered)}," ",r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0}," ","Recovered"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:n.value,duration:2.2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Recovered Covid-19 patients"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:C()(v.a.card,v.a.deaths)}," ",r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0}," ","Deaths"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:c.value,duration:2.2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Covid-19 related deaths"))))):"Page Loading..."},w=a(31),O=a(34),k=a.n(O),S="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(45),P=a(81),U=a.n(P),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(w.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(111, 166, 232)","rgba(133, 242, 131)","rgba(97, 21, 29)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=m[0]?r.a.createElement(B.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(111, 166, 232)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(97, 21, 29)",fill:!0}]}}):null;return r.a.createElement("div",{className:U.a.container},u?f:v)},R=a(229),z=a(227),G=a(82),J=a.n(G),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(R.a,{className:J.a.formControl},r.a.createElement(z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global "),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e}," ",e," ")}))))},Q=a(46),Y=a.n(Q),q=a.p+"static/media/image1.e13b52e3.jpg";var F=function(){return r.a.createElement("div",null,r.a.createElement(y.a,{color:"textSecondary"}," ","\xa9 ",(new Date).getFullYear()," Copyright:"))},L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:Y.a.container},r.a.createElement("img",{className:Y.a.image,src:q,alt:"corona"}),r.a.createElement(j,{data:t}),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{data:t,country:a}),r.a.createElement(F,null))}}]),a}(n.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},81:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}}},[[206,1,2]]]);
//# sourceMappingURL=main.d14a44c1.chunk.js.map