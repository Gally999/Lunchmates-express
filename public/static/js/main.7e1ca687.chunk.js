(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(88)},33:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),l=a(92),s=(a(33),a(2)),i=a(3),u=a(5),m=a(4),h=a(6),p=a(93),d=a(89),v=a(7),g=a.n(v),f=(a(54),a(65)),E=a(91),y=(a(56),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={userInput:"",searchSubmitted:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchUserInput",value:function(e){var t=e.target.value;this.setState({userInput:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getSearchedTerm(this.state.userInput),this.setState({searchSubmitted:!0})}},{key:"render",value:function(){var e=this;return this.state.searchSubmitted?r.a.createElement(E.a,{to:"/shop"}):r.a.createElement("section",{className:"HomePageSearch"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,r.a.createElement("input",{onChange:function(t){return e.fetchUserInput(t)},value:this.state.userInput,type:"text",name:"userInput",placeholder:"What are you looking for?"}),r.a.createElement("button",null,"Look for a place!"))))}}]),t}(n.Component)),b=(a(61),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={allReviewsArray:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){!1!==this.props.currentUser&&this.getReviews()}},{key:"componentDidUpdate",value:function(e){!1===e.currentUser&&!1!==this.props.currentUser&&this.getReviews()}},{key:"getReviews",value:function(){var e=this;this.props.currentUser?g.a.get("/api/reviews-workmates",{withCredentials:!0}).then(function(t){console.log("Response data of /all reviews by workmates sorted by createdAt",t.data),e.setState({allReviewsArray:t.data}),console.log("ALL REVIEWS ARRAY by workmates",e.state.allReviewsArray)}).catch(function(e){console.log("Search page ERROR",e),alert("Something went wrong with the search, sorray")}):g.a.get("/api/reviews",{withCredentials:!0}).then(function(t){console.log("Response data of /all reviews sorted by createdAt",t.data),e.setState({allReviewsArray:t.data}),console.log("ALL REVIEWS ARRAY",e.state.allReviewsArray)}).catch(function(e){console.log("Search page ERROR",e),alert("Something went wrong with the search, sorray")})}},{key:"render",value:function(){var e=this.state.allReviewsArray;return console.log("ALL REVIEWS ARRAY IN RENDER",e),r.a.createElement("section",{className:"OneReviewPreview"},e.map(function(e){return r.a.createElement("div",{className:"ReviewPreview"},r.a.createElement("div",{className:"ReviewerPicture"},r.a.createElement("img",{src:"user-picture",alt:"reviewer"}),r.a.createElement("h4",null,e.userId.firstName)),r.a.createElement("div",{className:"ReviewInfo"},r.a.createElement("h2",null,e.rating,"/5"),r.a.createElement("p",null,e.shopId.name),r.a.createElement("p",null,e.comment)))}))}}]),t}(n.Component));a(63);function S(e){return e.yelpId?"/shop-details/".concat(e.yelpId):(console.log("oneResult.yelpId",e.yelpId),"/shop-details/".concat(e.id))}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={searchResults:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("RestaurantPicturePreview",this.props.currentUser),this.props.currentUser?(console.log("heyheyhey",this.props.currentUser),g.a.get("/api/user-favorites",{withCredentials:!0}).then(function(t){e.setState({searchResults:t.data.favorites})}).catch(function(e){console.log("Display Favorite Resto FAILED",e),alert("Something went wrong with the display of your fav resto, sorry")})):g.a.get("/api/shops/",{withCredentials:!0}).then(function(t){t.data.businesses.splice(4),e.setState({searchResults:t.data.businesses})}).catch(function(e){console.log("Search page ERROR",e),alert("Something went wrong with the search, sorray")})}},{key:"render",value:function(){var e=this.state.searchResults;return console.log("SearchResults",e),r.a.createElement("section",{className:"RestaurantPicturePreview"},r.a.createElement("ul",{className:"ListofRestaurantPicturePreview"},e.map(function(e){return r.a.createElement("li",{key:e.alias,className:"OneRestaurantPicturePreview"},r.a.createElement("img",{src:e.image_url,alt:"restaurant"}),r.a.createElement(f.a,{to:S(e)},r.a.createElement("div",{className:"RestaurantInfoOverlay"},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.rating))))})))}}]),t}(n.Component),O=(a(66),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={companyName:"",companyAddress:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getCompanyInfo()}},{key:"componentDidUpdate",value:function(e){!e.currentUser&&this.props.currentUser&&this.getCompanyInfo()}},{key:"getCompanyInfo",value:function(){var e=this;this.props.currentUser&&g.a.get("/api/user-company",{withCredentials:!0}).then(function(t){var a=t.data.addressCoordinates,n=t.data.name;console.log("company name",n),console.log("company address",a.string),e.setState({companyName:n,companyAddress:a.string})}).catch(function(e){console.log("user company info",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this.props.currentUser,t=this.state.companyName;console.log("HEYAAAAAAA",t);var a=this.state.companyAddress;return console.log("HOAAAAA",a),r.a.createElement("section",{className:"HomePage"},r.a.createElement("div",{className:"HomePageHeader"},r.a.createElement("h1",null,"Find the perfect place to have lunch!"),r.a.createElement(y,{getSearchedTerm:this.props.getSearchedTerm}),r.a.createElement("div",{className:"TextUnderSearch"},e&&r.a.createElement("div",{className:"UserCompanyInfo"},r.a.createElement("p",null,t,", ",a)),r.a.createElement(f.a,{to:"/shop",className:"FilterLink"},r.a.createElement("button",null,"+ All filters")))),r.a.createElement("div",{className:"LastAddedReviews"},e?r.a.createElement("h3",null,"Last Added Reviews by your Workmates"):r.a.createElement("h3",null,"Last Added Reviews"),r.a.createElement("div",{className:"reviewsCaroussel"},r.a.createElement(b,{currentUser:this.props.currentUser}))),r.a.createElement("div",{className:"bestRatedPlaces"},e?r.a.createElement("h3",null,"Best Rated Places Around You"):r.a.createElement("h3",null,"Best Rated Places"),r.a.createElement(w,null)))}}]),t}(n.Component)),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"NotFound"},"Sorry we're lost")}}]),t}(n.Component),C=a(13),k=(a(68),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={email:"",originalPassword:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(C.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("/api/login",this.state,{withCredentials:!0}).then(function(e){var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("Login Page ERROR",e),alert("Sorry! Something went wrong")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(E.a,{to:"/"}):r.a.createElement("section",{className:"Login"},r.a.createElement("h2",null,"Log In"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"Email"}),r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"*****"}),r.a.createElement("button",null,"Log In")))}}]),t}(n.Component)),j=a(27),A=(a(70),a(17)),N=a.n(A),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){Object(A.geocodeByAddress)(e).then(function(e){console.log("geocode by address result",e);var t=e[0].formatted_address;a.setState({address:t,fullAddress:e[0]})}).then(function(){return Object(A.getLatLng)(a.state.fullAddress)}).then(function(e){var t=e.lat,n=e.lng;a.setState({longitude:n,latitude:t})}).catch(function(e){return console.error("Error",e)})},a.state={companyName:"",subOffice:"",fullAddress:{},address:"",longitude:0,latitude:0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleSubmitEvent",value:function(e){var t=this;e.preventDefault(),console.log("SUBMIT THIS STATE (add company form)",this.state),g.a.post("/api/add-company",this.state,{withCredentials:!0}).then(function(e){console.log("Add company form ",e.data);var a=e.data.companyDoc;t.props.onUserChange(a)}).catch(function(e){console.log("Add company form ERROR",e),alert("Something went wrong")})}},{key:"render",value:function(){var e=this,t=this.state,a=t.companyName,n=t.subOffice;return r.a.createElement("form",{className:"AddYourCompany",onSubmit:function(t){return e.handleSubmitEvent(t)}},r.a.createElement("input",{name:"name",value:a,onChange:function(t){return e.setState({companyName:t.target.value})},placeholder:"Company Name"}),r.a.createElement("input",{name:"subOffice",value:n,onChange:function(t){return e.setState({subOffice:t.target.value})},placeholder:"Company SUbOffice"}),r.a.createElement(N.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,o=e.loading;return r.a.createElement("div",null,r.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},o&&r.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))})))}),r.a.createElement("button",null,"Submit"))}}]),t}(r.a.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={firstName:"",lastName:"",email:"",companyId:"",originalPassword:"",messenger:!1,currentUser:null,companiesArray:[],validationError:"",isAddingCompany:!1,companyDoc:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(C.a)({},a,n))}},{key:"checkboxSync",value:function(e){var t=e.target,a=t.name,n=t.checked;this.setState(Object(C.a)({},a,n))}},{key:"handleSubmitEvent",value:function(e){var t=this;e.preventDefault(),g.a.post("/api/signup",this.state,{withCredentials:!0}).then(function(e){var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("Signup Page ERROR",e),alert("Something went wrong")})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/companies",{withCredentials:!0}).then(function(t){var a=t.data;e.setState({companiesArray:a,companyId:a[0]._id})}).catch(function(e){console.log("COMPANIES ARRAY ERROR",e),alert("Something went wrong")})}},{key:"onUserChange",value:function(e){var t=this.state.companiesArray,a=Object(j.a)(t);a.push(e),this.setState({companiesArray:a})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(E.a,{to:"/"}):r.a.createElement("section",{className:"Signup"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmitEvent(t)}},r.a.createElement("input",{value:this.state.firstName,onChange:function(t){return e.genericSync(t)},type:"text",name:"firstName",placeholder:"First Name"}),r.a.createElement("input",{value:this.state.lastName,onChange:function(t){return e.genericSync(t)},type:"text",name:"lastName",placeholder:"Last Name"}),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"Email"}),r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"*****"}),r.a.createElement("label",null,"Please, select your company:",r.a.createElement("select",{value:this.state.companyId,onChange:function(t){return e.setState({companyId:t.target.value})}},this.state.companiesArray.map(function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name,", ",e.subOffice)}))),r.a.createElement("div",{className:"SignupCheckbox"},r.a.createElement("input",{value:this.state.messenger,onChange:function(t){return e.checkboxSync(t)},type:"checkbox",name:"messenger"}),"Do you allow other lunchmates to you you to go to lunch?"),r.a.createElement("button",null,"Sign Up")),r.a.createElement("label",null,"If your company doesn't appear in the list, please",r.a.createElement("button",{className:"AddCompanyBtn",onClick:function(){return e.setState({isAddingCompany:!0})}},"add it")),this.state.isAddingCompany&&r.a.createElement(U,{onUserChange:function(t){return e.onUserChange(t)}}))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignLogPage"},r.a.createElement(k,{currentUser:this.props.currentUser,onUserChange:this.props.onUserChange}),r.a.createElement(I,{currentUser:this.props.currentUser,onUserChange:this.props.onUserChange}))}}]),t}(n.Component),P=(a(76),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={shopFavored:!1,searchResults:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.searchTerm;console.log("RestoList/searchTerm",t),g.a.get(""+"/api/shop-search/".concat(t),{withCredentials:!0}).then(function(t){var a=t.data.shop.businesses;if(e.props.currentUser)for(var n=0;n<a.length;n++)t.data.user.yelpFavorites.includes(a[n].id)?a[n].shopinFav=!0:a[n].shopinFav=!1;e.setState({searchResults:a})}).catch(function(e){console.log("Search page ERROR Mount",e),alert("Something went wrong with the search, sorray")})}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.searchTerm;a!==e.searchTerm&&g.a.get(""+"/api/shop-search/".concat(a),{withCredentials:!0}).then(function(e){var a=e.data.shop.businesses;if(t.props.currentUser)for(var n=0;n<a.length;n++)e.data.user.yelpFavorites.includes(a[n].id)?a[n].shopinFav=!0:a[n].shopinFav=!1;t.setState({searchResults:a})}).catch(function(e){console.log("Search page ERROR Update",e),alert("Something went wrong with the search, sorray")})}},{key:"addShopToFav",value:function(e){var t=this,a=e.id;return g.a.put(""+"/api/add-shop/".concat(a),{},{withCredentials:!0}).then(function(e){t.setState({shopFavored:!0})}).catch(function(e){console.log("Add-Shop ERROR",e),alert("Something went wrong with adding the shop to your favorites, sorry!")})}},{key:"render",value:function(){var e=this,t=this.state.searchResults;return r.a.createElement("section",{className:"RestaurantsList"},r.a.createElement("ul",null,t.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("img",{src:t.image_url,alt:t.name}),r.a.createElement("h3",null,r.a.createElement(f.a,{to:"/shop-details/".concat(t.id)},t.name)),r.a.createElement("p",null,"rating Yelp: ",t.rating),e.props.currentUser&&r.a.createElement("div",null,t.shopinFav?r.a.createElement("p",null,"This place is already in your favorites"):r.a.createElement("div",null,e.state.shopFavored?r.a.createElement("p",null,"Added to your list of favorites"):r.a.createElement("button",{onClick:function(){return e.addShopToFav(t)}},"+ Add to your favorites"))))})))}}]),t}(n.Component)),D=(a(78),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleMultipleSelectChangeDiet=function(e){var t=Array.from(e.target.selectedOptions).map(function(e){return e.value});a.setState({diet:t})},a.state={userInput:"",cuisine:"",diet:[],price_level:"",searchSubmitted:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.searchTerm;this.setState({userInput:e})}},{key:"fetchUserInput",value:function(e){var t=e.target.value;this.setState({userInput:t})}},{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(C.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getSearchedTerm(this.state.userInput),this.setState({searchSubmitted:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"Search"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,r.a.createElement("input",{onChange:function(t){return e.fetchUserInput(t)},value:this.state.userInput,type:"text",name:"userInput",placeholder:"Search...",className:"searchInput"})),r.a.createElement("label",null,"Cuisine:",r.a.createElement("select",{onChange:function(t){return e.genericSync(t)},name:"cuisine",value:this.state.cuisine},r.a.createElement("option",{value:"American"},"American"),r.a.createElement("option",{value:"British"},"British"),r.a.createElement("option",{value:"Chinese"},"Chinese"),r.a.createElement("option",{value:"French"},"French"),r.a.createElement("option",{value:"Greek"},"Greek"),r.a.createElement("option",{value:"Burgers"},"Burgers"),r.a.createElement("option",{value:"Indian"},"Indian"),r.a.createElement("option",{value:"Italian"},"Italian"),r.a.createElement("option",{value:"Pizza"},"Pizza"),r.a.createElement("option",{value:"Japanese"},"Japanese"),r.a.createElement("option",{value:"Mexican"},"Mexican"),r.a.createElement("option",{value:"Moroccan"},"Moroccan"),r.a.createElement("option",{value:"Spanish"},"Spanish"),r.a.createElement("option",{value:"Tha\xef"},"Tha\xef"),r.a.createElement("option",{value:"Lebansese"},"Lebansese"),r.a.createElement("option",{value:"Turkish"},"Turkish"),r.a.createElement("option",{value:"Vietnamese"},"Vietnamese"),r.a.createElement("option",{value:"Healthy"},"Healthy"),r.a.createElement("option",{value:"Portuguese"},"Portuguese"),r.a.createElement("option",{value:"Gourmet"},"Gourmet"),r.a.createElement("option",{value:"German"},"German"))),r.a.createElement("label",null,"Type of diet:",r.a.createElement("select",{onChange:this.handleMultipleSelectChangeDiet,name:"diet",value:this.state.diet,multiple:!0},r.a.createElement("option",{value:"Vegan"},"Vegan"),r.a.createElement("option",{value:"Veggie"},"Veggie"),r.a.createElement("option",{value:"Gluten Free"},"Gluten Free"),r.a.createElement("option",{value:"Dairy-free"},"Dairy-free"),r.a.createElement("option",{value:"Paleo"},"Paleo"))),r.a.createElement("label",null,"Price range:",r.a.createElement("select",{onChange:function(t){return e.genericSync(t)},name:"price_level",value:this.state.price_level},r.a.createElement("option",{value:"\u20ac"},"\u20ac"),r.a.createElement("option",{value:"\u20ac\u20ac"},"\u20ac\u20ac"),r.a.createElement("option",{value:"\u20ac\u20ac\u20ac"},"\u20ac\u20ac\u20ac"),r.a.createElement("option",{value:"\u20ac\u20ac\u20ac\u20ac"},"\u20ac\u20ac\u20ac\u20ac"))),r.a.createElement("button",null,"Look for a place!")))}}]),t}(n.Component)),L=(a(80),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getSearchedTerm",value:function(e){this.setState({searchTerm:e})}},{key:"render",value:function(){return r.a.createElement("section",{className:"ResearchResultsListPage"},r.a.createElement(D,{searchTerm:this.props.searchTerm,getSearchedTerm:this.props.getSearchedTerm}),r.a.createElement(P,{currentUser:this.props.currentUser,searchTerm:this.props.searchTerm}))}}]),t}(n.Component)),F=(a(82),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleMultiSelectChangeCuisine=function(e){console.log("handleMultiSelectChange");var t=Array.from(e.target.selectedOptions).map(function(e){return e.value});a.setState({cuisine:t},function(){console.log(a.state.cuisine)})},a.handleMultiSelectChangeDiet=function(e){console.log("handleMultiSelectChange");var t=Array.from(e.target.selectedOptions).map(function(e){return e.value});console.log(a.state.diet),a.setState({diet:t})},a.handleMultiSelectChangeTypes=function(e){console.log("handleMultiSelectChange");var t=Array.from(e.target.selectedOptions).map(function(e){return e.value});console.log(a.state.types),a.setState({types:t})},a.state={rating:0,cuisine:[],diet:[],timeframe:["quick and easy"],types:[],price_level:"\u20ac",comment:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState(Object(C.a)({},n,r),function(){console.log("hello",t.state)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("PROPS",this.props.shop);var t=this.props.shop;console.log("params from the front",t),g.a.post(""+"/api/shop-details/".concat(t),this.state,{withCredentials:!0}).then(function(e){console.log("add review",e.data)}).catch(function(e){console.log("add review",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this,t=this.state,a=t.rating,n=t.cuisine,o=t.diet,c=t.timeframe,l=t.types,s=t.price_level,i=t.comment;return console.log(this.props.match),r.a.createElement("div",{className:"AddReview"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Rating",r.a.createElement("input",{value:a,onChange:function(t){return e.genericSync(t)},type:"number",name:"rating",className:"Rating",max:"5",min:"0"})),r.a.createElement("p",null,"What type of cuisine was it?"),r.a.createElement("select",{value:n,onChange:this.handleMultiSelectChangeCuisine,multiple:!0,name:"cuisine"},r.a.createElement("option",{value:"American"},"American"),r.a.createElement("option",{value:"British"},"British"),r.a.createElement("option",{value:"Chinese"},"Chinese"),r.a.createElement("option",{value:"French"},"French"),r.a.createElement("option",{value:"Greek"},"Greek"),r.a.createElement("option",{value:"Burgers"},"Burgers"),r.a.createElement("option",{value:"Indian"},"Indian"),r.a.createElement("option",{value:"Italian"},"Italian"),r.a.createElement("option",{value:"Pizza"},"Pizza"),r.a.createElement("option",{value:"Japanese"},"Japanese"),r.a.createElement("option",{value:"Mexican"},"Mexican"),r.a.createElement("option",{value:"Moroccan"},"Moroccan"),r.a.createElement("option",{value:"Spanish"},"Spanish"),r.a.createElement("option",{value:"Tha\xef"},"Tha\xef"),r.a.createElement("option",{value:"Lebanese"},"Lebanese"),r.a.createElement("option",{value:"Turkish"},"Turkish"),r.a.createElement("option",{value:"Vietnamese"},"Vietnamese"),r.a.createElement("option",{value:"Healthy"},"Healthy"),r.a.createElement("option",{value:"Portuguese"},"Portuguese"),r.a.createElement("option",{value:"Gourmet"},"Gourmet"),r.a.createElement("option",{value:"German"},"German")),r.a.createElement("label",null,"What type of diet did you found?",r.a.createElement("select",{value:o,onChange:this.handleMultiSelectChangeDiet,multiple:!0,name:"diet"},r.a.createElement("option",{value:"Vegan"},"Vegan"),r.a.createElement("option",{value:"Veggie"},"Veggie"),r.a.createElement("option",{value:"Gluten Free"},"Gluten Free"),r.a.createElement("option",{value:"Paleo"},"Paleo"),r.a.createElement("option",{value:"Dairy-free"},"Dairy-free"))),r.a.createElement("label",null,"How long did you wait?",r.a.createElement("select",{name:"timeframe",value:c,onChange:function(t){return e.genericSync(t)}},r.a.createElement("option",{value:"quick and easy"},"Quick and Easy"),r.a.createElement("option",{value:"time to chat"},"Time to chat"),r.a.createElement("option",{value:"be patient"},"Be patient"))),r.a.createElement("label",null,"What about the price?",r.a.createElement("select",{value:s,onChange:function(t){return e.genericSync(t)},name:"price_level"},r.a.createElement("option",{value:"\u20ac"},"\u20ac"),r.a.createElement("option",{value:"\u20ac\u20ac"},"\u20ac\u20ac"),r.a.createElement("option",{value:"\u20ac\u20ac\u20ac"},"\u20ac\u20ac\u20ac"),r.a.createElement("option",{value:"\u20ac\u20ac\u20ac\u20ac"},"\u20ac\u20ac\u20ac\u20ac"))),r.a.createElement("label",null,"Was it possible to sit? And to take away?",r.a.createElement("select",{value:l,onChange:this.handleMultiSelectChangeTypes,name:"types",multiple:!0},r.a.createElement("option",{value:"Take away"},"Take away"),r.a.createElement("option",{value:"Sit-in"},"Sit-in"))),r.a.createElement("input",{value:i,onChange:function(t){return e.genericSync(t)},type:"text",name:"comment",className:"Comment",placeholder:"Let the world know!"}),r.a.createElement("button",null,"Submit Your Review")))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={reviewsArray:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.shop;this.props.currentUser?g.a.get("/api/review-user",{withCredentials:!0}).then(function(t){console.log("Response data of the user reviews",t.data),e.setState({reviewsArray:t.data})}).catch(function(e){console.log("One Review User ID ERROR",e),alert("Something wen twrong with the retrieval of the reviews of the user, sorry!")}):g.a.get(""+"/api/review/".concat(t),{withCredentials:!0}).then(function(t){console.log("Response data of /reviews by shopId",t.data),e.setState({reviewsArray:t.data}),console.log("REVIEWS ARRAY",e.state.reviewsArray)}).catch(function(e){console.log("One Review ERROR",e),alert("Something went wrong with the review retrieval, sorray")})}},{key:"render",value:function(){var e=this.state.reviewsArray;return console.log("REVIEWS ARRAY IN RENDER",e),r.a.createElement("section",{className:"OneReview"},e.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("div",{className:"ReviewerPicture"},r.a.createElement("img",{src:"user-picture",alt:"reviewer"})),r.a.createElement("div",{className:"ReviewInfo"},r.a.createElement("h3",null,e.userId.firstName),r.a.createElement("p",null,e.rating),r.a.createElement("div",null,e.diet.map(function(e){return r.a.createElement("p",{key:e},e)})),r.a.createElement("div",null,e.cuisine.map(function(e){return r.a.createElement("p",{key:e},e)})),r.a.createElement("p",null,e.price_level),r.a.createElement("p",null,e.timeframe),r.a.createElement("p",null,e.comment),r.a.createElement("div",null,e.types.map(function(e){return r.a.createElement("p",{key:e},e)}))))}))}}]),t}(n.Component),_=(a(84),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={shopInFav:!1,shopFavored:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;g.a.get(""+"/api/shop-details/".concat(t.shopId),{withCredentials:!0}).then(function(a){a.data.user.yelpFavorites.includes(t.shopId)&&e.setState({shopInFav:!0}),e.setState(a.data.shop)}).catch(function(e){console.log("Shop Details ERROR",e),alert("Something went wrong with the shop details list, sorray")})}},{key:"addShopToFav",value:function(){var e=this;console.log("coucou");var t=this.props.match.params;g.a.put(""+"/api/add-shop/".concat(t.shopId),{},{withCredentials:!0}).then(function(t){e.setState({shopFavored:!0})}).catch(function(e){console.log("Add-Shop ERROR",e),alert("Something went wrong with adding the shop to your favorites, sorry!")})}},{key:"render",value:function(){var e=this,t=this.props.match.params.shopId;console.log("resto details",t);var a=this.state,n=a.name,o=a.rating,c=a.display_phone,l=a.price,s=a.image_url;return r.a.createElement("section",{className:"RestaurantDetails"},r.a.createElement("h2",null,"Hey I'm your Restaurant Details Component!"),r.a.createElement("div",{className:"RestaurantDetailsHeader"},r.a.createElement("img",{src:s,alt:n}),r.a.createElement("div",{className:"RestaurantDetailsInfo"},r.a.createElement("h2",null,n),r.a.createElement("p",null,"Rating: ",o),r.a.createElement("p",null,c),r.a.createElement("p",null,"Type of cuisine"),r.a.createElement("p",null,"Diets available"),r.a.createElement("p",null,l),this.state.shopInFav?r.a.createElement("p",null,"This place is in your favorites"):r.a.createElement("div",null,this.state.shopFavored?r.a.createElement("p",null,"Added to your list of favorites!"):r.a.createElement("button",{onClick:function(){return e.addShopToFav()}},"+ Add to your favorites")))),r.a.createElement("div",{className:"ReviewsList"},r.a.createElement(F,{shop:t,className:"HiddenAddReviewForm"}),r.a.createElement(M,{shop:t})))}}]),t}(n.Component)),x=a(90),B=(a(86),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"logOutClick",value:function(){var e=this;g.a.delete("/api/logout",{withCredentials:!0}).then(function(){e.props.onLogOut(null)}).catch(function(e){console.log("Logout Error",e),alert("Sorry, something went wrong!")})}},{key:"render",value:function(){var e=this,t=this.props.currentUser;return r.a.createElement("section",{className:"NavBar"},r.a.createElement("div",{className:"NavContain"},r.a.createElement("div",{className:"logo"},r.a.createElement(x.a,{to:"/"},r.a.createElement("img",{src:"../images/logo_lunchm8.png",alt:"LunchMates"}))),r.a.createElement("nav",null,t?r.a.createElement("div",{className:"LoggedinUserNav"},r.a.createElement("p",null,r.a.createElement(x.a,{to:"/profile"},"Hi, ",t.firstName)),r.a.createElement("button",{onClick:function(){return e.logOutClick()}},"Log out")):r.a.createElement("button",null,r.a.createElement(x.a,{to:"/signup-page"},"Sign Up / Log In")))))}}]),t}(n.Component)),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.currentUser;return r.a.createElement("section",{className:"UserProfile"},r.a.createElement("div",{className:"UserProfileHeader"},r.a.createElement("img",{src:"avatar",alt:"user"}),r.a.createElement("div",{className:"UserInfo"},r.a.createElement("h2",null,"Name "),r.a.createElement("h3",null,"Company "),r.a.createElement("p",null,"Email"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"messenger"}),"Enable other users to contact me and have lunch"),r.a.createElement("div",null,r.a.createElement(f.a,{to:"/"},"Send A message to have Lunch")))),r.a.createElement("div",{className:"FavoritePlaces"},r.a.createElement("h2",null,"My favorite places"),r.a.createElement(w,{currentUser:this.props.currentUser})),r.a.createElement("div",{className:"MyLastReviews"},r.a.createElement("h2",null,"My last reviews"),r.a.createElement(M,{currentUser:this.props.currentUser})))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={currentUser:!1,searchTerm:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/checkuser",{withCredentials:!0}).then(function(t){var a=t.data.userDoc;e.syncCurrentUser(a)}).catch(function(e){console.log("current user",e),alert("Sorry! Something went wrong")})}},{key:"syncCurrentUser",value:function(e){this.setState({currentUser:e})}},{key:"getSearchedTerm",value:function(e){this.setState({searchTerm:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(B,{currentUser:this.state.currentUser,onLogOut:function(t){return e.syncCurrentUser(t)}}),r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{currentUser:e.state.currentUser,onLogOut:function(t){return e.syncCurrentUser(t)},getSearchedTerm:function(t){return e.getSearchedTerm(t)}})}}),r.a.createElement(d.a,{path:"/shop-search/:searchTerm",component:L}),r.a.createElement(d.a,{path:"/shop-details/:shopId",component:_}),r.a.createElement(d.a,{path:"/shop",render:function(){return r.a.createElement(L,{currentUser:e.state.currentUser,searchTerm:e.state.searchTerm,getSearchedTerm:function(t){return e.getSearchedTerm(t)}})}}),r.a.createElement(d.a,{path:"/signup-page",render:function(){return r.a.createElement(T,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(d.a,{path:"/profile",render:function(){return r.a.createElement(H,{currentUser:e.state.currentUser})}}),r.a.createElement(d.a,{component:R})),r.a.createElement("footer",null,r.a.createElement("p",null,"Made with Sparkles, by ",r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/ceciledaguin/"},"C\xe9cile Daguin")," et ",r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/adele-revert/"},"Ad\xe8le Revert"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.7e1ca687.chunk.js.map