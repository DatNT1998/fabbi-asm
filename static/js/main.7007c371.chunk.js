(this["webpackJsonpfabbi-asm-1"]=this["webpackJsonpfabbi-asm-1"]||[]).push([[0],{129:function(e,a,t){e.exports=t(245)},134:function(e,a,t){},241:function(e,a,t){},245:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),i=t.n(r),s=(t(134),t(135),t(124)),o=t(12),c=t(25),u=t(246),m=t(247),d=t(250),p=t(248),b=function(e){var a=u.a.useForm(),t=Object(c.a)(a,1)[0];console.log("props",e);var r=Object(n.useState)(e.location&&e.location.state&&e.location.state.numberPeople?e.location.state.numberPeople:""),i=Object(c.a)(r,2),s=i[0],o=i[1],b=Object(n.useState)(e.location&&e.location.state&&e.location.state.meal?e.location.state.meal:""),v=Object(c.a)(b,2),h=v[0],f=v[1];return l.a.createElement(u.a,{form:t,layout:"vertical"},l.a.createElement(u.a.Item,{label:"Please select a meal"},l.a.createElement(m.a,{value:h,onChange:function(e){f(e)}},[{value:"1",label:"breakfast"},{value:"2",label:"lunch"},{value:"3",label:"dinner"}].map((function(e,a){return l.a.createElement(m.a.Option,{key:a,value:e.label},e.label)})))),l.a.createElement(u.a.Item,{label:"Please Enter Number of people"},l.a.createElement(d.a,{value:""===s?o(1):s,max:10,min:1,onChange:function(e){o(e)}})),l.a.createElement(p.a,{type:"primary",onClick:function(){""===h?alert("Please select a meal"):e.history.push({pathname:"/step2/".concat(h),state:{numberPeople:s,meal:h}})}},"Next"))},v=t(123),h=t(81),f=function(e){var a=u.a.useForm(),t=Object(c.a)(a,1)[0],r=h.dishes;console.log(e,"props step 2");var i=Object(n.useState)(e.location&&e.location.state&&e.location.state.restaurant?e.location.state.restaurant:""),s=Object(c.a)(i,2),o=s[0],d=s[1],b=[],f=[];r.map((function(a){var t,n=Object(v.a)(a.availableMeals);try{for(n.s();!(t=n.n()).done;){var l=t.value;e.location.state.meal===l&&b.push(a)}}catch(r){n.e(r)}finally{n.f()}})),f=(f=b.map((function(e){return e.restaurant}))).filter((function(e,a){return f.indexOf(e)===a}));return l.a.createElement(u.a,{form:t,layout:"vertical"},l.a.createElement(u.a.Item,{label:"Please select a Restaurant"},l.a.createElement(m.a,{value:o,onChange:function(e){d(e)}},f.map((function(e,a){return l.a.createElement(m.a.Option,{key:a,value:e},e)})))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(p.a,{type:"primary",onClick:function(){""===o?alert("Please select a restaurant"):e.history.push({pathname:"/",state:{numberPeople:e.location.state.numberPeople,meal:e.location.state.meal}})}},"Previous"),l.a.createElement(p.a,{type:"primary",onClick:function(){e.history.push({pathname:"/step3/".concat(o),state:{numberPeople:e.location.state.numberPeople,meal:e.location.state.meal,restaurant:o}})}},"Next")))},E=function(e){var a=u.a.useForm(),t=Object(c.a)(a,1)[0],r=h.dishes,i=[];console.log(e,"props step 3"),r.map((function(a){a.restaurant===e.location.state.restaurant&&i.push(a)}));var s=Object(n.useState)(e.location&&e.location.state&&e.location.state.dish?e.location.state.dish:""),o=Object(c.a)(s,2),b=o[0],v=o[1],f=Object(n.useState)(e.location&&e.location.state&&e.location.state.numOfServing?e.location.state.numOfServing:""),E=Object(c.a)(f,2),M=E[0],P=E[1];return l.a.createElement(u.a,{form:t,layout:"vertical"},l.a.createElement(u.a.Item,{label:"Please select a dish"},l.a.createElement(m.a,{value:b,onChange:function(e){v(e)}},i.map((function(e){return l.a.createElement(m.a.Option,{key:e.id,value:e.name},e.name)})))),l.a.createElement(u.a.Item,{label:"Please enter no of servings"},l.a.createElement(d.a,{value:""===M?P(1):M,max:10,min:0,onChange:function(e){P(e)}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(p.a,{type:"primary",onClick:function(){e.history.push({pathname:"/step2/".concat(e.location.state.restaurant),state:{meal:e.location.state.meal,numberPeople:e.location.state.numberPeople,restaurant:e.location.state.restaurant}})}},"Previous"),l.a.createElement(p.a,{type:"primary",onClick:function(){""===b?alert("please select a dish"):e.history.push({pathname:"/step4/review",state:{numberPeople:e.location.state.numberPeople,meal:e.location.state.meal,restaurant:e.location.state.restaurant,dish:b,numOfServing:M}})}},"Next")))},M=function(e){var a=u.a.useForm(),t=Object(c.a)(a,1)[0],n=e.location.state,r=n.restaurant,i=n.numOfServing,s=n.meal,o=n.dish,m=n.numberPeople;return l.a.createElement("div",null,l.a.createElement(u.a,{form:t,className:"ant-form-customize"},l.a.createElement("div",null," Meal: ",l.a.createElement("span",null,s)," "),l.a.createElement("div",null," No of People: ",l.a.createElement("span",null,m)," "),l.a.createElement("div",null," Restaurant: ",l.a.createElement("span",null,r)," "),l.a.createElement("div",null," Dishes: ",l.a.createElement("span",null," ",o," - ",i," ")," ")),l.a.createElement("div",{className:"buttons"},l.a.createElement(p.a,{type:"primary",onClick:function(){e.history.push({pathname:"/step3/".concat(e.location.state.restaurant),state:{meal:e.location.state.meal,restaurant:e.location.state.restaurant,numberPeople:e.location.state.numberPeople,dish:e.location.state.dish,numOfServing:e.location.state.numOfServing}})}}," Previous "),l.a.createElement(p.a,{type:"primary",onClick:function(){alert("Thank you for using our services!!")}}," Submit ")))};t(241);var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,{basename:"/fabbi-asm"},l.a.createElement(o.a,{exact:!0,path:"/",component:b}),l.a.createElement(o.a,{path:"/step2/:id",component:f}),l.a.createElement(o.a,{path:"/step3/:id",component:E}),l.a.createElement(o.a,{path:"/step4/review",component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e){e.exports=JSON.parse('{"dishes":[{"id":1,"name":"Chicken Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":2,"name":"Ham Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":3,"name":"Cheese Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":4,"name":"Fries","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":5,"name":"Egg Muffin","restaurant":"Mc Donalds","availableMeals":["breakfast"]},{"id":6,"name":"Burrito","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":7,"name":"Tacos","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":8,"name":"Quesadilla","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":9,"name":"Steak","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":10,"name":"Yakitori","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":11,"name":"Nankotsu","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":12,"name":"Piman","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":13,"name":"Vegan Bento","restaurant":"Vege Deli","availableMeals":["lunch"]},{"id":14,"name":"Coleslaw Sandwich","restaurant":"Vege Deli","availableMeals":["breakfast"]},{"id":15,"name":"Grilled Sandwich","restaurant":"Vege Deli","availableMeals":["breakfast"]},{"id":16,"name":"Veg. Salad","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":17,"name":"Fruit Salad","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":18,"name":"Corn Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":19,"name":"Tomato Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":20,"name":"Minestrone Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":21,"name":"Pepperoni Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":22,"name":"Pepperoni Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":23,"name":"Hawaiian Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":24,"name":"Seafood Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":25,"name":"Deep Dish Pizza","restaurant":"Pizzeria","availableMeals":["dinner"]},{"id":26,"name":"Chow Mein","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":27,"name":"Mapo Tofu","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":28,"name":"Kung Pao","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":29,"name":"Wontons","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":30,"name":"Garlic Bread","restaurant":"Olive Garden","availableMeals":["breakfast","lunch","dinner"]},{"id":31,"name":"Ravioli","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]},{"id":32,"name":"Rigatoni Spaghetti","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]},{"id":33,"name":"Fettucine Pasta","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]}]}')}},[[129,1,2]]]);
//# sourceMappingURL=main.7007c371.chunk.js.map