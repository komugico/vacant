(this.webpackJsonpvillage=this.webpackJsonpvillage||[]).push([[0],{66:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"WELCOME",(function(){return M})),n.d(r,"act_welcome",(function(){return L}));var s={};n.r(s),n.d(s,"INIT_STATE",(function(){return R})),n.d(s,"CREATE_PROBLEM_RANDOM",(function(){return I})),n.d(s,"FLIP_ANSWER_PANELS",(function(){return N})),n.d(s,"JUDGE_ANSWER",(function(){return U})),n.d(s,"RESET_ANSER",(function(){return H})),n.d(s,"act_init_state",(function(){return F})),n.d(s,"act_create_problem_random",(function(){return G})),n.d(s,"act_flip_answer_panels",(function(){return J})),n.d(s,"act_judge_answer",(function(){return W})),n.d(s,"act_reset_answer",(function(){return V}));var a={};n.r(a),n.d(a,"INIT_STATE",(function(){return le})),n.d(a,"GRAB_STONE",(function(){return pe})),n.d(a,"PUT_STONE",(function(){return ue})),n.d(a,"UPDATE_SCORE",(function(){return be})),n.d(a,"UPDATE_BOARD_SIZE",(function(){return he})),n.d(a,"THINK_CPU",(function(){return je})),n.d(a,"act_init_state",(function(){return de})),n.d(a,"act_grab_stone",(function(){return Oe})),n.d(a,"act_put_stone",(function(){return fe})),n.d(a,"act_update_score",(function(){return xe})),n.d(a,"act_update_board_size",(function(){return ye})),n.d(a,"act_think_cpu",(function(){return me}));var i=n(0),c=n.n(i),o=n(21),l=n.n(o),p=n(27),u=n(7),b=n(8),h=n(10),j=n(9),d=n(12),O=n(20),f=n(6),x=n(71),y=n(72),m=n(73),v=n(51),g=n(34),_=n(75),S=n(76),k=n(74),z=n(1),P=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(_.a,{bg:"light",variant:"light",children:[Object(z.jsx)(g.LinkContainer,{to:"/",children:Object(z.jsx)(_.a.Brand,{href:"/",children:"Vacant"})}),Object(z.jsx)(g.LinkContainer,{to:"/",children:Object(z.jsx)(S.a.Link,{href:"/",children:"Home"})}),Object(z.jsxs)(k.a,{title:"GameCenter",children:[Object(z.jsx)(g.LinkContainer,{to:"/gamecenter/puzzlepanel",children:Object(z.jsx)(k.a.Item,{children:"PuzzlePanel"})}),Object(z.jsx)(g.LinkContainer,{to:"/gamecenter/lattice",children:Object(z.jsx)(k.a.Item,{children:"Lattice"})})]})]})}}]),n}(c.a.Component),M="@home/home/welcome",L=function(){return{type:M}},T=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(P,{}),Object(z.jsx)("br",{}),Object(z.jsx)(x.a,{fluid:!0,children:Object(z.jsxs)(y.a,{children:[Object(z.jsx)(m.a,{}),Object(z.jsxs)(m.a,{xl:8,lg:8,md:8,sm:8,xs:8,children:[Object(z.jsx)("h1",{children:"Welcome to My Home"}),Object(z.jsx)(v.a,{onClick:this.props.act_welcome,size:"lg",block:!0,children:"Click Me"})]}),Object(z.jsx)(m.a,{})]})})]})}}]),n}(c.a.Component),C=Object(O.b)((function(e){return Object(f.a)({},e)}),r)(T),w=n(30),B={message:"welcome"},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return alert(e.message),e;default:return e}},A=Object(w.a)(E),D=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsx)("div",{children:Object(z.jsx)(d.d,{exact:!0,path:"/",children:Object(z.jsx)(O.a,{store:A,children:Object(z.jsx)(C,{})})})})}}]),n}(c.a.Component),R="@gamecenter/puzzlepanel/init_state",I="@gamecenter/puzzlepanel/create_prob_random",N="@gamecenter/puzzlepanel/flip_answer_panels",U="@gamecenter/puzzlepanel/judge_answer",H="@gamecenter/puzzlepanel/reset_answer",F=function(){return{type:R}},G=function(){return{type:I}},J=function(e,t){return{type:N,x:e,y:t}},W=function(){return{type:U}},V=function(){return{type:H}},Y=n(77),K=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"imgPanel",value:function(){return 0===this.props.panel?Object(z.jsx)("img",{src:"/vacant/images/luffy.png",style:{height:"50px"}}):Object(z.jsx)("img",{src:"/vacant/images/enel.png",style:{height:"50px"}})}},{key:"render",value:function(){return Object(z.jsx)("div",{children:this.imgPanel()})}}]),n}(c.a.Component),Z=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"tableBoard",value:function(){var e=this,t=this.props.panels.map((function(t,n){return e.trBoard(t,n)}));return Object(z.jsx)("table",{style:{border:"solid 1px"},children:Object(z.jsx)("tbody",{children:t})})}},{key:"trBoard",value:function(e,t){var n=this,r=e.map((function(e,r){return n.tdBoard(e,t,r)}));return Object(z.jsx)("tr",{style:{border:"solid 1px"},children:r})}},{key:"tdBoard",value:function(e,t,n){var r=this;return Object(z.jsx)("td",{style:{border:"solid 1px"},onClick:function(){return r.props.handle_click(n,t)},children:Object(z.jsx)(K,{panel:e,x:n,y:t})})}},{key:"render",value:function(){return Object(z.jsxs)(y.a,{children:[Object(z.jsx)(m.a,{}),Object(z.jsx)(m.a,{xl:10,lg:10,md:10,sm:10,xs:10,children:this.tableBoard()}),Object(z.jsx)(m.a,{})]})}}]),n}(c.a.Component),q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(Y.a,{children:[Object(z.jsx)(Y.a.Header,{children:Object(z.jsx)("b",{children:"Problem"})}),Object(z.jsx)(Y.a.Body,{children:Object(z.jsx)(Z,{panels:this.props.panels,handle_click:function(){return alert("\u30ba\u30eb\u306f\u3044\u3051\u307e\u305b\u3093")}})})]})}}]),n}(c.a.Component),Q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(Y.a,{children:[Object(z.jsx)(Y.a.Header,{children:Object(z.jsx)("b",{children:"Answer"})}),Object(z.jsx)(Y.a.Body,{children:Object(z.jsx)(Z,{panels:this.props.panels,handle_click:this.props.act_flip_answer_panels})})]})}}]),n}(c.a.Component),X=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(z.jsxs)(Y.a,{children:[Object(z.jsx)(Y.a.Header,{children:Object(z.jsx)("b",{children:"Operation"})}),Object(z.jsx)(Y.a.Body,{children:Object(z.jsxs)(y.a,{children:[Object(z.jsx)(m.a,{children:Object(z.jsx)(v.a,{onClick:function(){return e.props.act_create_problem_random()},children:"\u554f\u984c\u751f\u6210"})}),Object(z.jsx)(m.a,{children:Object(z.jsx)(v.a,{onClick:function(){return e.props.act_reset_answer()},children:"\u89e3\u7b54\u30ea\u30bb\u30c3\u30c8"})})]})})]})}}]),n}(c.a.Component),$=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.act_init_state()}},{key:"componentDidUpdate",value:function(e,t,n){e.cntFlip!==this.props.cntFlip&&this.props.act_judge_answer()}},{key:"render",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(P,{}),Object(z.jsx)("br",{}),Object(z.jsxs)(x.a,{fluid:!0,children:[Object(z.jsx)(y.a,{children:Object(z.jsx)(m.a,{xl:12,lg:12,md:12,sm:12,xs:12,children:Object(z.jsx)(X,{act_create_problem_random:this.props.act_create_problem_random,act_reset_answer:this.props.act_reset_answer})})}),Object(z.jsx)("br",{}),Object(z.jsxs)(y.a,{children:[Object(z.jsx)(m.a,{xl:6,lg:6,md:6,sm:12,xs:12,children:Object(z.jsx)(q,{panels:this.props.problemPanels})}),Object(z.jsx)(m.a,{xl:6,lg:6,md:6,sm:12,xs:12,children:Object(z.jsx)(Q,{panels:this.props.answerPanels,act_flip_answer_panels:this.props.act_flip_answer_panels})})]})]})]})}}]),n}(c.a.Component),ee=Object(O.b)((function(e){return Object(f.a)({},e)}),s)($),te=function(){return{numPanel:4,cntFlip:0,problemPanels:ie(4),answerPanels:ie(4)}},ne=function(e){for(var t=[],n=0;n<e;n++){t.push([]);for(var r=0;r<e;r++)t[n].push(0)}for(var s=Math.floor(11*Math.random())+3,a=0;a<s;a++){var i=Math.floor(Math.random()*(e+1)),c=Math.floor(Math.random()*(e+1));t=re(t,i,c,e)}return t},re=function(e,t,n,r){return e=se(e,t-1,n-1,r),e=se(e,t-1,n,r),e=se(e,t-1,n+1,r),e=se(e,t,n-1,r),e=se(e,t,n,r),e=se(e,t,n+1,r),e=se(e,t+1,n-1,r),e=se(e,t+1,n,r),e=se(e,t+1,n+1,r)},se=function(e,t,n,r){return t>=0&&t<r&&n>=0&&n<r&&(0===e[n][t]?e[n][t]=1:e[n][t]=0),e},ae=function(e,t,n){for(var r=0;r<n;r++)for(var s=0;s<n;s++)if(e[r][s]!==t[r][s])return!1;return!0},ie=function(e){for(var t=[],n=0;n<e;n++){t.push([]);for(var r=0;r<e;r++)t[n].push(0)}return t},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return te();case I:return Object(f.a)(Object(f.a)({},e),{},{problemPanels:ne(e.numPanel),answerPanels:ie(e.numPanel)});case N:var n=JSON.parse(JSON.stringify(e.answerPanels));e.cntFlip;return Object(f.a)(Object(f.a)({},e),{},{answerPanels:re(n,t.x,t.y,e.numPanel),cntFlip:e.cntFlip+1});case U:return ae(e.problemPanels,e.answerPanels,e.numPanel)&&setTimeout((function(){return alert("CLEAR")}),1),Object(f.a)({},e);case H:return Object(f.a)(Object(f.a)({},e),{},{answerPanels:ie(e.numPanel),cntFlip:0});default:return e}},oe=Object(w.a)(ce),le="@gamecenter/lattice/init_state",pe="@gamecenter/lattice/grab_stone",ue="@gamecenter/lattice/put_stone",be="@gamecenter/lattice/update_score",he="@gamecenter/lattice/update_board_size",je="@gmaecenter/lattice/think_cpu",de=function(){return{type:le}},Oe=function(e){return{type:pe,stone:e}},fe=function(e,t){return{type:ue,x:e,y:t}},xe=function(){return{type:be}},ye=function(e){return{type:he,boardSize:e}},me=function(){return{type:je}},ve=-1,ge=ve,_e=n(37),Se=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){var e={height:this.props.size+"px",position:"relative"};return 1===this.props.stone?Object(z.jsx)("img",{src:"/vacant/images/black.png",style:e}):this.props.stone===ve?Object(z.jsx)("img",{src:"/vacant/images/white.png",style:e}):Object(z.jsx)("div",{})}}]),n}(c.a.Component),ke=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={px:-1,py:-1},r}return Object(b.a)(n,[{key:"styleSelected",value:function(){return Object(_e.a)({backgroundImage:"-webkit-radial-gradient(#ff0000 0%, #ffffff 70%)"},"backgroundImage","radial-gradient(#ff0000 0%, #ffffff 70%)")}},{key:"tbodyBoard",value:function(){var e=this,t=this.props.stones.map((function(t,n){return e.trBoard(t,n)}));return Object(z.jsx)("tbody",{children:t})}},{key:"trBoard",value:function(e,t){var n=this,r=e.map((function(e,r){return n.tdBoard(e,t,r)}));return Object(z.jsx)("tr",{children:r})}},{key:"tdBoard",value:function(e,t,n){var r=this,s=this.props.styles.td;return this.props.px===n&&this.props.py===t&&this.props.isGrabbed&&(s=Object(f.a)(Object(f.a)({},s),this.styleSelected())),Object(z.jsx)("td",{style:s,onMouseEnter:function(){return r.handle_enter_td(n,t)},onTouchStart:function(){return r.handle_enter_td(n,t)},onTouchEnd:function(){return r.handle_leave()},onClick:function(){return r.handle_click_td(n,t)},children:Object(z.jsx)(Se,{stone:e,size:this.props.size})})}},{key:"handle_enter_td",value:function(e,t){this.props.updatePxPy&&this.props.updatePxPy(e,t)}},{key:"handle_click_td",value:function(e,t){this.props.act_put_stone&&this.props.act_put_stone(e,t),this.props.updatePxPy&&this.props.updatePxPy(-1,-1)}},{key:"handle_leave",value:function(){this.props.updatePxPy&&this.props.updatePxPy(-1,-1)}},{key:"render",value:function(){var e=this;return Object(z.jsx)("table",{style:this.props.styles.table,onMouseLeave:function(){return e.handle_leave()},children:this.tbodyBoard()})}}]),n}(c.a.Component),ze=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={px:-1,py:-1},window.addEventListener("resize",(function(){return r.handleUpdateBoardSize()})),r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.handleUpdateBoardSize()}},{key:"handleUpdateBoardSize",value:function(){var e=Math.floor(.8*document.getElementById("board-parent").clientWidth);this.props.act_update_board_size(e)}},{key:"updatePxPy",value:function(e,t){this.setState({px:e,py:t})}},{key:"stonesDummy",value:function(e){for(var t=[],n=0;n<e;n++){t.push([]);for(var r=0;r<e;r++)t[n].push(0)}return t}},{key:"stylesDummyLattices",value:function(){return{table:{position:"absolute",left:0,top:0},td:{width:Math.floor(this.props.boardSize/this.props.numLattice)+"px",height:Math.floor(this.props.boardSize/this.props.numLattice)+"px",border:"none",textAlign:"center"}}}},{key:"stylesDummyCells",value:function(){return{table:{position:"absolute",left:Math.floor(this.props.boardSize/this.props.numLattice)/2+"px",top:Math.floor(this.props.boardSize/this.props.numLattice)/2+"px"},td:{width:Math.floor(this.props.boardSize/this.props.numLattice)+"px",height:Math.floor(this.props.boardSize/this.props.numLattice)+"px",border:"solid 1px",textAlign:"center"}}}},{key:"stylesLattices",value:function(){return{table:{position:"absolute",left:0,top:0},td:{width:Math.floor(this.props.boardSize/this.props.numLattice)+"px",height:Math.floor(this.props.boardSize/this.props.numLattice)+"px",border:"none",textAlign:"center"}}}},{key:"stylesCells",value:function(){return{table:{position:"absolute",left:Math.floor(this.props.boardSize/this.props.numLattice)/2+"px",top:Math.floor(this.props.boardSize/this.props.numLattice)/2+"px"},td:{width:Math.floor(this.props.boardSize/this.props.numLattice)+"px",height:Math.floor(this.props.boardSize/this.props.numLattice)+"px",border:"none",textAlign:"center"}}}},{key:"boardBlocksDummy",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(ke,{stones:this.stonesDummy(this.props.lattices.length),styles:this.stylesDummyLattices(),isGrabbed:1===Math.abs(this.props.grabbedStone),px:this.state.px,py:this.state.py,size:0}),Object(z.jsx)(ke,{stones:this.stonesDummy(this.props.cells.length),styles:this.stylesDummyCells(),isGrabbed:2===Math.abs(this.props.grabbedStone),px:this.state.px,py:this.state.py,size:0})]})}},{key:"boardBlocksStones",value:function(){var e=this;return 2===Math.abs(this.props.grabbedStone)?Object(z.jsxs)("div",{children:[Object(z.jsx)(ke,{stones:this.props.lattices,styles:this.stylesLattices(),size:Math.floor(this.props.boardSize/this.props.numLattice*.3)}),Object(z.jsx)(ke,{stones:this.props.cells,styles:this.stylesCells(),updatePxPy:function(t,n){return e.updatePxPy(t,n)},act_put_stone:function(t,n){return e.props.act_put_stone(t,n)},size:Math.floor(this.props.boardSize/this.props.numLattice*.7)})]}):1===Math.abs(this.props.grabbedStone)?Object(z.jsxs)("div",{children:[Object(z.jsx)(ke,{stones:this.props.cells,styles:this.stylesCells(),size:Math.floor(this.props.boardSize/this.props.numLattice*.7)}),Object(z.jsx)(ke,{stones:this.props.lattices,styles:this.stylesLattices(),updatePxPy:function(t,n){return e.updatePxPy(t,n)},act_put_stone:function(t,n){return e.props.act_put_stone(t,n)},size:Math.floor(this.props.boardSize/this.props.numLattice*.3)})]}):Object(z.jsxs)("div",{children:[Object(z.jsx)(ke,{stones:this.props.lattices,styles:this.stylesLattices(),size:Math.floor(this.props.boardSize/this.props.numLattice*.3)}),Object(z.jsx)(ke,{stones:this.props.cells,styles:this.stylesCells(),size:Math.floor(this.props.boardSize/this.props.numLattice*.7)})]})}},{key:"render",value:function(){return Object(z.jsxs)(Y.a,{children:[Object(z.jsx)(Y.a.Header,{children:Object(z.jsx)("b",{children:"Lattice Board"})}),Object(z.jsx)(Y.a.Body,{children:Object(z.jsxs)("div",{id:"board-parent",style:{position:"relative",paddingTop:"80%",left:Math.floor(this.props.boardSize/8)+"px"},children:[this.boardBlocksDummy(),this.boardBlocksStones()]})})]})}}]),n}(c.a.Component),Pe=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(z.jsxs)(Y.a,{children:[Object(z.jsx)(Y.a.Header,{children:Object(z.jsx)("b",{children:"Operation"})}),Object(z.jsx)(Y.a.Body,{children:Object(z.jsx)(v.a,{onClick:function(){return e.props.act_init_state()},children:"Reset"})})]})}}]),n}(c.a.Component),Me=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"stoneAtomsSmall",value:function(){for(var e=[],t=0;t<this.props.smallStones;t++)e.push(Object(z.jsx)(Se,{stone:this.props.player,size:Math.floor(this.props.boardSize/this.props.numLattice*.3)}));return e}},{key:"stoneAtomsBig",value:function(){for(var e=[],t=0;t<this.props.bigStones;t++)e.push(Object(z.jsx)(Se,{stone:this.props.player,size:Math.floor(this.props.boardSize/this.props.numLattice*.7)}));return e}},{key:"render",value:function(){var e=this;return Object(z.jsxs)("div",{children:[Object(z.jsxs)(y.a,{children:[Object(z.jsx)(m.a,{xl:4,lg:4,md:4,sm:4,xs:4,children:Object(z.jsx)(v.a,{variant:"outline-secondary",size:"sm",onClick:function(){return e.props.act_grab_stone(1*e.props.player)},disabled:!this.props.isMyTurn||!this.props.smallStones,block:!0,children:"Grab"})}),Object(z.jsx)(m.a,{xl:8,lg:8,md:8,sm:8,xs:8,children:this.stoneAtomsSmall()})]}),Object(z.jsx)("br",{}),Object(z.jsxs)(y.a,{children:[Object(z.jsx)(m.a,{xl:4,lg:4,md:4,sm:4,xs:4,children:Object(z.jsx)(v.a,{variant:"outline-secondary",size:"sm",onClick:function(){return e.props.act_grab_stone(2*e.props.player)},disabled:!this.props.isMyTurn||!this.props.bigStones,block:!0,children:"Grab"})}),Object(z.jsx)(m.a,{xl:8,lg:8,md:8,sm:8,xs:8,children:this.stoneAtomsBig()})]})]})}}]),n}(c.a.Component),Le=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(Y.a,{children:[Object(z.jsxs)(Y.a.Header,{children:[Object(z.jsx)("b",{children:this.props.name}),Object(z.jsx)("i",{children:this.props.isMyTurn&&" It's your turn."})]}),Object(z.jsxs)(Y.a.Body,{children:[Object(z.jsx)(Y.a.Title,{children:"Score"}),this.props.score," Victory Points",Object(z.jsx)("hr",{}),Object(z.jsx)(Y.a.Title,{children:"Operations"}),Object(z.jsx)(v.a,{variant:"outline-danger",disabled:!this.props.isMyTurn,children:"Surrender"}),Object(z.jsx)("hr",{}),Object(z.jsx)(Y.a.Title,{children:"Stones"}),Object(z.jsx)(Me,{numLattice:this.props.numLattice,player:this.props.player,smallStones:this.props.smallStones,bigStones:this.props.bigStones,boardSize:this.props.boardSize,isMyTurn:this.props.isMyTurn,act_grab_stone:this.props.act_grab_stone})]})]})}}]),n}(c.a.Component),Te=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,n){e.cntTurn!==this.props.cntTurn&&(this.props.act_update_score(),this.props.nextPlayer===ge&&this.props.act_think_cpu())}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(P,{}),Object(z.jsx)("br",{}),Object(z.jsxs)(x.a,{fluid:!0,children:[Object(z.jsx)(y.a,{children:Object(z.jsx)(m.a,{xl:12,lg:12,md:12,sm:12,xs:12,children:Object(z.jsx)(Pe,{act_init_state:this.props.act_init_state})})}),Object(z.jsx)("br",{}),Object(z.jsxs)(y.a,{children:[Object(z.jsx)(m.a,{xl:3,lg:3,md:3,sm:12,xs:12,children:Object(z.jsx)(Le,{name:"PLAYER 1",score:this.props.player1.score,player:1,numLattice:this.props.numLattice,boardSize:this.props.boardSize,smallStones:this.props.player1.smallStones,bigStones:this.props.player1.bigStones,isMyTurn:1===this.props.nextPlayer,act_grab_stone:this.props.act_grab_stone})}),Object(z.jsx)(m.a,{xl:6,lg:6,md:6,sm:12,xs:12,children:Object(z.jsx)(ze,{numLattice:this.props.numLattice,boardSize:this.props.boardSize,lattices:this.props.lattices,cells:this.props.cells,grabbedStone:this.props.grabbedStone,act_put_stone:this.props.act_put_stone,act_update_board_size:this.props.act_update_board_size})}),Object(z.jsx)(m.a,{xl:3,lg:3,md:3,sm:12,xs:12,children:Object(z.jsx)(Le,{name:"PLAYER 2",score:this.props.player2.score,player:ve,numLattice:this.props.numLattice,boardSize:this.props.boardSize,smallStones:this.props.player2.smallStones,bigStones:this.props.player2.bigStones,isMyTurn:this.props.nextPlayer===ge,act_grab_stone:this.props.act_grab_stone})})]})]})]})}}]),n}(c.a.Component),Ce=Object(O.b)((function(e){return Object(f.a)({},e)}),a)(Te),we=function(){return{numLattice:5,lattices:Be(5),cells:Be(4),player1:{smallStones:Ee(),bigStones:Ae(),score:0},player2:{smallStones:Ee(),bigStones:Ae(),score:0},cntTurn:0,nextPlayer:1,grabbedStone:0,boardSize:50}},Be=function(e){for(var t=[],n=0;n<e;n++){t.push([]);for(var r=0;r<e;r++)t[n].push(0)}return t},Ee=function(){return Math.floor(10)},Ae=function(){return Math.floor(4.5)},De=function(e){return JSON.parse(JSON.stringify(e))},Re=function(e,t,n){return Ie(e,t,n)},Ie=function(e,t,n){for(var r=0,s=0;s<t.length;s++)for(var a=0;a<t.length;a++)if(t[s][a]==n){var i=0;i+=n*e[s][a],i+=n*e[s+1][a],i+=n*e[s][a+1],r+=4==(i+=n*e[s+1][a+1])?5:i}return r},Ne=function(e,t,n){return 0===e[n][t]},Ue=new(function(){function e(){Object(u.a)(this,e)}return Object(b.a)(e,[{key:"think",value:function(e,t,n,r,s,a,i){return this.minMax(e,t,n,r,s,a,i,i,!0,[])}},{key:"minMax",value:function(e,t,n,r,s,a,i,c,o,l){var p=0,u=0,b=-1,h=-1;if(p=o?-9999:9999,0==i)return Re(e,t,ge)-Re(e,t,1);if(o){if(s+s===0)return Re(e,t,ge)-Re(e,t,1);if(s>0)for(var j=0;j<e.length;j++)for(var d=0;d<e.length;d++)if(Ne(e,d,j)){this.putStone(e,j,d,ve);var O=this.minMax(e,t,n,r,s-1,a,i-1,c,!o,l);O>p&&(p=O,u=-1,b=d,h=j),this.removeStone(e,j,d)}if(a>0)for(var f=0;f<t.length;f++)for(var x=0;x<t.length;x++)if(Ne(t,x,f)){this.putStone(t,f,x,ve);var y=this.minMax(e,t,n,r,s,a-1,i-1,c,!o,l);y>p&&(p=y,u=-2,b=x,h=f),this.removeStone(t,f,x)}}else{if(n+n===0)return Re(e,t,ge)-Re(e,t,1);if(n>0)for(var m=0;m<e.length;m++)for(var v=0;v<e.length;v++)if(Ne(e,v,m)){this.putStone(e,m,v,1);var g=this.minMax(e,t,n-1,r,s,a,i-1,c,!o,l);g<p&&(p=g,u=1,b=v,h=m),this.removeStone(e,m,v)}if(r>0)for(var _=0;_<t.length;_++)for(var S=0;S<t.length;S++)if(Ne(t,S,_)){this.putStone(t,_,S,1);var k=this.minMax(e,t,n,r-1,s,a,i-1,c,!o,l);k<p&&(p=k,u=2,b=S,h=_),this.removeStone(t,_,S)}}return i===c?{score:p,stone:u,px:b,py:h}:(console.log(i+" - ("+b+", "+h+") ="+p),p)}},{key:"putStone",value:function(e,t,n,r){e[t][n]=r}},{key:"removeStone",value:function(e,t,n){e[t][n]=0}}]),e}()),He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(f.a)(Object(f.a)({},we()),{},{boardSize:e.boardSize});case pe:return Object(f.a)(Object(f.a)({},e),{},{grabbedStone:t.stone});case ue:if(1===Math.abs(e.grabbedStone)){if(0===e.lattices[t.y][t.x]){var n=De(e.lattices);return e.grabbedStone>=1?(n[t.y][t.x]=1,Object(f.a)(Object(f.a)({},e),{},{lattices:n,player1:{smallStones:e.player1.smallStones-1,bigStones:e.player1.bigStones,score:e.player1.score},cntTurn:e.cntTurn+1,nextPlayer:ge,grabbedStone:0})):(n[t.y][t.x]=ve,Object(f.a)(Object(f.a)({},e),{},{lattices:n,player2:{smallStones:e.player2.smallStones-1,bigStones:e.player2.bigStones,score:e.player2.score},cntTurn:e.cntTurn+1,nextPlayer:1,grabbedStone:0}))}}else if(2===Math.abs(e.grabbedStone)&&0===e.cells[t.y][t.x]){var r=De(e.cells);return e.grabbedStone>=1?(r[t.y][t.x]=1,Object(f.a)(Object(f.a)({},e),{},{cells:r,player1:{smallStones:e.player1.smallStones,bigStones:e.player1.bigStones-1,score:e.player1.score},cntTurn:e.cntTurn+1,nextPlayer:ge,grabbedStone:0})):(r[t.y][t.x]=ve,Object(f.a)(Object(f.a)({},e),{},{cells:r,player2:{smallStones:e.player2.smallStones,bigStones:e.player2.bigStones-1,score:e.player2.score},cntTurn:e.cntTurn+1,nextPlayer:1,grabbedStone:0}))}return Object(f.a)({},e);case be:return Object(f.a)(Object(f.a)({},e),{},{player1:{smallStones:e.player1.smallStones,bigStones:e.player1.bigStones,score:Re(e.lattices,e.cells,1)},player2:{smallStones:e.player2.smallStones,bigStones:e.player2.bigStones,score:Re(e.lattices,e.cells,ge)}});case he:return Object(f.a)(Object(f.a)({},e),{},{boardSize:t.boardSize});case je:var s=Ue.think(e.lattices,e.cells,e.player1.smallStones,e.player1.bigStones,e.player2.smallStones,e.player2.bigStones,3);if(console.dir(s),s){if(1===Math.abs(s.stone)){var a=De(e.lattices);return a[s.py][s.px]=ve,Object(f.a)(Object(f.a)({},e),{},{lattices:a,player2:{smallStones:e.player2.smallStones-1,bigStones:e.player2.bigStones,score:e.player2.score},cntTurn:e.cntTurn+1,nextPlayer:1,grabbedStone:0})}var i=De(e.cells);return i[s.py][s.px]=ve,Object(f.a)(Object(f.a)({},e),{},{cells:i,player2:{smallStones:e.player2.smallStones,bigStones:e.player2.bigStones-1,score:e.player2.score},cntTurn:e.cntTurn+1,nextPlayer:1,grabbedStone:0})}return Object(f.a)({},e);default:return Object(f.a)({},e)}},Fe=Object(w.a)(He),Ge=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(d.d,{exact:!0,path:"/gamecenter/puzzlepanel",children:Object(z.jsx)(O.a,{store:oe,children:Object(z.jsx)(ee,{})})}),Object(z.jsx)(d.d,{exact:!0,path:"/gamecenter/lattice",children:Object(z.jsx)(O.a,{store:Fe,children:Object(z.jsx)(Ce,{})})})]})}}]),n}(c.a.Component);l.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsxs)(p.BrowserRouter,{basename:"/vacant",children:[Object(z.jsx)(D,{}),Object(z.jsx)(Ge,{})]})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7ae61188.chunk.js.map