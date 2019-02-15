(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(module,exports,__webpack_require__){__webpack_require__(238),__webpack_require__(318),module.exports=__webpack_require__(319)},319:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(104);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(425)},module)}.call(this,__webpack_require__(178)(module))},425:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(426),__webpack_require__(104)),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(235),_components_comments__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(71),_mockData__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(70),getTranslationForType=function(type){switch(type){case"1":return"Internal Clients";case"2":return"External Clients";case"3":return"Super Clients";default:return type}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Comments",module).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo).addParameters({info:"\n    #### Comments component workflow\n    - accepting array of comments in proper shape\n    - grouping comments by types\n    - generating comments types tabs based on count of types\n    - using hooks to show active comments by type \n\n    ##### Captions\n    - Buttons are generated based on type in ASC order => 0,1,2 ...\n    - it uses package lodash.groupby\n        \n    ##### TODO\n    - Add support for custom order of type buttons.\n    - Add overrides for styles. (To edit styles just copy source code of components and edit it :) )\n    "}).add("only comments prop",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comments__WEBPACK_IMPORTED_MODULE_4__.a,{comments:_mockData__WEBPACK_IMPORTED_MODULE_5__.a})}).add("with formatDate prop",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comments__WEBPACK_IMPORTED_MODULE_4__.a,{comments:_mockData__WEBPACK_IMPORTED_MODULE_5__.a,formatDate:function(createdAt){return new Date(createdAt).toLocaleDateString()}})}).add("with formatCommentsType prop",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comments__WEBPACK_IMPORTED_MODULE_4__.a,{comments:_mockData__WEBPACK_IMPORTED_MODULE_5__.a,formatDate:function(createdAt){return new Date(createdAt).toLocaleDateString()},formatCommentsType:function(type){return getTranslationForType(type)}})}).add("with defaultSelectedType prop",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comments__WEBPACK_IMPORTED_MODULE_4__.a,{comments:_mockData__WEBPACK_IMPORTED_MODULE_5__.a,formatDate:function(createdAt){return new Date(createdAt).toLocaleDateString()},formatCommentsType:function(type){return getTranslationForType(type)},defaultSelectedType:"2"})}).add("with groupBy 'author.name' prop",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comments__WEBPACK_IMPORTED_MODULE_4__.a,{comments:_mockData__WEBPACK_IMPORTED_MODULE_5__.a,formatDate:function(createdAt){return new Date(createdAt).toLocaleDateString()},formatCommentsType:function(type){return getTranslationForType(type)},defaultSelectedType:"Milos Zemanka",groupBy:"author.name"})})}.call(this,__webpack_require__(178)(module))},426:function(module,exports,__webpack_require__){},429:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":212,"./nestedObjectAssign.js":212};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=429},70:function(module,__webpack_exports__,__webpack_require__){"use strict";var getRandomDate=function(){return String(Date(+new Date-Math.floor(1e10*Math.random())))};__webpack_exports__.a=[{id:"1",text:"Jujubes pie tootsie roll lemon drops cake danish pastry. Liquorice brownie soufflé liquorice cheesecake sweet gummi bears tiramisu. Lemon drops gummi bears cupcake.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://picsum.photos/100/100/?random"}},{id:"2",text:"Liquorice brownie soufflé liquorice cheesecake sweet gummi bears tiramisu. Lemon drops gummi bears cupcake.",type:2,createdAt:getRandomDate(),author:{id:"1212414",name:"Ferko Mrkvicka",avatarSrc:"https://picsum.photos/100/100/?random"}},{id:"3",type:1,text:"Jelly fruitcake toffee chocolate bar caramels chocolate bar muffin.",createdAt:getRandomDate(),author:{id:"1212414",name:"Janka Hospodarova",avatarSrc:"https://picsum.photos/100/100/?random"}},{id:"4",text:"Powder biscuit sweet roll pastry apple pie pie oat cake.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Pamela Anderson",avatarSrc:"https://picsum.photos/100/100/?random"}},{id:"5",text:"Pudding gingerbread pastry apple pie. ",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://loremflickr.com/100/100"}},{id:"6",text:"Cupcake wafer oat cake candy canes powder halvah danish sweet candy canes",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Leonardo Davinci",avatarSrc:"https://loremflickr.com/100/100"}},{id:"7",text:"Love halvah toffee tart tootsie roll liquorice pastry cupcake.",type:3,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://loremflickr.com/100/100"}},{id:"8",text:"Cotton candy ice cream I love muffin.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Lenoardo Davinci",avatarSrc:"https://loremflickr.com/100/100"}},{id:"9",text:"Love gummi bears croissant muffin tiramisu chocolate cookie cake carrot cake",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://loremflickr.com/100/100"}},{id:"10",text:"Chocolate bar cotton candy jelly. Jujubes chocolate I love gummi bears. Tart oat cake donut jujubes bear claw muffin powder I love cake.",type:2,createdAt:getRandomDate(),author:{id:"1212414",name:"Jana Hrmova",avatarSrc:"https://loremflickr.com/100/100"}},{id:"11",text:" Fruitcake sweet gummi bears danish tiramisu danish jelly jujubes dragée. Fruitcake donut carrot cake oat cake.",type:2,createdAt:getRandomDate(),author:{id:"1212414",name:"Skutek utek",avatarSrc:"https://loremflickr.com/100/100"}},{id:"12",text:"I love jujubes tart marshmallow powder cotton candy jelly-o brownie",type:3,createdAt:getRandomDate(),author:{id:"1212414",name:"Skutek Utek",avatarSrc:"https://loremflickr.com/100/100"}},{id:"13",text:" love I love cotton candy chocolate bar tiramisu.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://loremflickr.com/100/100"}},{id:"14",text:"Fruitcake donut carrot cake oat cake.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Robert Pico",avatarSrc:"https://loremflickr.com/100/100"}},{id:"15",text:"Gummi bears dessert marzipan sweet cake. Tootsie roll I love topping muffin I love",type:3,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://loremflickr.com/100/100"}},{id:"16",text:"Cheesecake chupa chups pie brownie. Pudding I love jelly cake fruitcake brownie. Lollipop cake I love bonbon toffee jelly-o cookie I love powder.",type:2,createdAt:getRandomDate(),author:{id:"1212414",name:"Jurko Drapak",avatarSrc:"https://loremflickr.com/100/100"}},{id:"17",text:" asdn askjnd sfsd fds fdsf ad afs dgsdfsdf s",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://loremflickr.com/100/100"}},{id:"18",text:"Lemon drops icing gingerbread ice cream. Chocolate cake ice cream caramels jelly beans.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"KPT. Danko",avatarSrc:"https://loremflickr.com/100/100"}},{id:"19",text:"elly beans I love toffee jelly-o.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Milos Zemanka",avatarSrc:"https://loremflickr.com/100/100"}},{id:"20",text:" Carrot cake macaroon wafer gummi bears. Halvah bonbon cookie muffin cupcake dessert chocolate bar candy canes.",type:2,createdAt:getRandomDate(),author:{id:"1212414",name:"KTP. Danko",avatarSrc:"https://loremflickr.com/100/100"}},{id:"21",text:"Oat cake I love bear claw pie pie. ",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"KPT. Danko",avatarSrc:"https://picsum.photos/300/300/?random"}},{id:"22",text:" I love lemon drops sugar plum gummies macaroon candy lemon drops. Pudding macaroon biscuit I love liquorice.",type:2,createdAt:getRandomDate(),author:{id:"1212414",name:"Elon Musk",avatarSrc:"https://loremflickr.com/100/100"}},{id:"23",text:"Apple pie apple pie gummi bears. ",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Riaditel Zemegule",avatarSrc:"https://loremflickr.com/100/100"}},{id:"24",text:"Chocolate tiramisu sweet roll.",type:2,createdAt:getRandomDate(),author:{id:"1212414",name:"Ale prestan uz",avatarSrc:"https://loremflickr.com/100/100"}},{id:"25",text:"Jelly-o toffee I love muffin.",type:1,createdAt:getRandomDate(),author:{id:"1212414",name:"Ferko Mrkva",avatarSrc:"https://loremflickr.com/100/100"}}]},71:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(158),react=__webpack_require__(0),react_default=__webpack_require__.n(react),lodash_groupby=__webpack_require__(236),lodash_groupby_default=__webpack_require__.n(lodash_groupby),objectSpread=__webpack_require__(88),styles={typeButton:{padding:"0.5rem",marginRight:"1rem",borderRadius:"5px",backgroundColor:"#D9DCD6",cursor:"pointer"},activeTypeButton:{backgroundColor:"#75485E"},typeName:{fontWeight:"bold"},activeTypeName:{color:"white"}},CommentsTypesListItem_CommentsTypesListItem=function(_ref){var onClick=_ref.onClick,isActive=_ref.isActive,typeName=_ref.typeName,count=_ref.count,activeButtonStyles=Object(objectSpread.a)({},styles.typeButton,styles.activeTypeButton),activeTextStyles=Object(objectSpread.a)({},styles.typeName,styles.activeTypeName);return react_default.a.createElement("div",{style:isActive?activeButtonStyles:styles.typeButton,onClick:onClick},react_default.a.createElement("span",{style:isActive?activeTextStyles:styles.typeName},"".concat(typeName," (").concat(count,")")))},comments_CommentsTypesListItem=CommentsTypesListItem_CommentsTypesListItem;CommentsTypesListItem_CommentsTypesListItem.__docgenInfo={description:"",methods:[],displayName:"CommentsTypesListItem"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/comments/CommentsTypesListItem.js"]={name:"CommentsTypesListItem",docgenInfo:CommentsTypesListItem_CommentsTypesListItem.__docgenInfo,path:"src/components/comments/CommentsTypesListItem.js"});var CommentsTypesList_styles={commentsTypesContainer:{display:"flex",borderBottom:"solid",borderWidth:"1px",borderColor:"lightgrey",padding:"0.5rem",overflowX:"scroll"}},CommentsTypesList_CommentsTypesList=function(_ref){var commentsTypes=_ref.commentsTypes,setActiveType=_ref.setActiveType,activeType=_ref.activeType,formatCommentsType=_ref.formatCommentsType;return react_default.a.createElement("div",{style:CommentsTypesList_styles.commentsTypesContainer},commentsTypes.map(function(commentType){return react_default.a.createElement(comments_CommentsTypesListItem,{key:"commentType".concat(commentType.type),typeName:formatCommentsType(commentType.type),isActive:(type=commentType.type,type===activeType),count:String(commentType.count),onClick:function(){return setActiveType(commentType.type)}});var type}))},comments_CommentsTypesList=CommentsTypesList_CommentsTypesList;CommentsTypesList_CommentsTypesList.__docgenInfo={description:"",methods:[],displayName:"CommentsTypesList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/comments/CommentsTypesList.js"]={name:"CommentsTypesList",docgenInfo:CommentsTypesList_CommentsTypesList.__docgenInfo,path:"src/components/comments/CommentsTypesList.js"});var CommentsListItem_styles={container:{display:"flex",alignItems:"flex-end",marginBottom:"1rem"},authorAvatar:{flexShrink:0,marginRight:"1rem",height:"40px",width:"40px",borderRadius:"50%",backgroundSize:"cover",backgroundPosition:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"lightgrey"},content:{padding:"0.7rem",borderRadius:"10px",backgroundColor:"#51A3A3",color:"white"},contentContainer:{},authorName:{display:"block",fontWeight:"bold",marginBottom:"0.5rem"},createdAt:{display:"block",fontSize:"14px",opacity:"0.85",marginTop:"0.2rem",marginLeft:"0.4rem"}},CommentsListItem_CommentsListItem=function(_ref){var comment=_ref.comment,formatDate=_ref.formatDate,author=comment.author,text=comment.text,createdAt=comment.createdAt;return react_default.a.createElement("div",{style:CommentsListItem_styles.container},react_default.a.createElement("div",{style:Object(objectSpread.a)({},CommentsListItem_styles.authorAvatar,{backgroundImage:"url('".concat(author&&author.avatarSrc,"')")})}),react_default.a.createElement("div",{style:CommentsListItem_styles.contentContainer},react_default.a.createElement("div",{style:CommentsListItem_styles.content},react_default.a.createElement("span",{style:CommentsListItem_styles.authorName},author&&author.name),react_default.a.createElement("span",{style:CommentsListItem_styles.text},text)),react_default.a.createElement("span",{style:CommentsListItem_styles.createdAt},formatDate(createdAt))))},comments_CommentsListItem=CommentsListItem_CommentsListItem;CommentsListItem_CommentsListItem.__docgenInfo={description:"",methods:[],displayName:"CommentsListItem"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/comments/CommentsListItem.js"]={name:"CommentsListItem",docgenInfo:CommentsListItem_CommentsListItem.__docgenInfo,path:"src/components/comments/CommentsListItem.js"});var CommentsList_styles={commentsListContainer:{paddingTop:"0.5rem",overflowY:"scroll",paddingLeft:"0.5rem",paddingRight:"0.5rem",maxHeight:"50vh"}},CommentsList_CommentsList=function(_ref){var activeComments=_ref.activeComments,formatDate=_ref.formatDate;return react_default.a.createElement("div",{style:CommentsList_styles.commentsListContainer},Array.isArray(activeComments)&&activeComments.map(function(comment){return react_default.a.createElement(comments_CommentsListItem,{comment:comment,key:comment.id,formatDate:formatDate})}))},comments_CommentsList=CommentsList_CommentsList;CommentsList_CommentsList.__docgenInfo={description:"",methods:[],displayName:"CommentsList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/comments/CommentsList.js"]={name:"CommentsList",docgenInfo:CommentsList_CommentsList.__docgenInfo,path:"src/components/comments/CommentsList.js"});var comments_styles={commentsContainer:{borderWidth:"1px",borderStyle:"solid",borderColor:"lightGrey"}},comments_Comments=function(_ref){var comments=_ref.comments,formatDate=_ref.formatDate,formatCommentsType=_ref.formatCommentsType,defaultSelectedType=_ref.defaultSelectedType,groupBy=_ref.groupBy,_useState=Object(react.useState)(defaultSelectedType),_useState2=Object(slicedToArray.a)(_useState,2),activeType=_useState2[0],setActiveType=_useState2[1],_useState3=Object(react.useState)({}),_useState4=Object(slicedToArray.a)(_useState3,2),groupedComments=_useState4[0],setGroupedComments=_useState4[1];Object(react.useEffect)(function(){setGroupedComments(lodash_groupby_default()(comments,groupBy))},[comments]);var commentsTypes=function(groupedComments){return Object.keys(groupedComments).map(function(type){return{count:groupedComments[type].length,type:type}})}(groupedComments);return react_default.a.createElement("div",{style:comments_styles.commentsContainer},react_default.a.createElement(comments_CommentsTypesList,{commentsTypes:commentsTypes,setActiveType:setActiveType,activeType:activeType,formatCommentsType:formatCommentsType}),react_default.a.createElement(comments_CommentsList,{activeComments:groupedComments[activeType]||[],formatDate:formatDate}))};comments_Comments.defaultProps={defaultSelectedType:"1",formatDate:function(date){return date},formatCommentsType:function(type){return type},groupBy:"type"};__webpack_exports__.a=comments_Comments;comments_Comments.__docgenInfo={description:"",methods:[],displayName:"Comments",props:{defaultSelectedType:{defaultValue:{value:"'1'",computed:!1},required:!1},formatDate:{defaultValue:{value:"function formatDate(date){return date;}",computed:!1},required:!1},formatCommentsType:{defaultValue:{value:"function formatCommentsType(type){return type;}",computed:!1},required:!1},groupBy:{defaultValue:{value:"'type'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/comments/index.js"]={name:"Comments",docgenInfo:comments_Comments.__docgenInfo,path:"src/components/comments/index.js"})}},[[237,1,2]]]);
//# sourceMappingURL=main.702620c8e5937a1584fc.bundle.js.map