(this["webpackJsonpvirtual-background"]=this["webpackJsonpvirtual-background"]||[]).push([[0],{331:function(e,t,n){},332:function(e,t,n){},337:function(e,t){},338:function(e,t){},346:function(e,t){},349:function(e,t){},350:function(e,t){},351:function(e,t,n){"use strict";n.r(t);var r=n(22),o=n(403),a=n(7),c=n.n(a),i=n(50),s=n.n(i),u=n(5),l=n(395),d=n(406),b=(n(397),n(398),n(354),n(228)),g=n.n(b),f=n(229),p=n.n(f),h=["architecture-5082700_1280","porch-691330_1280","saxon-switzerland-539418_1280","shibuyasky-4768679_1280"].map((function(e){return"".concat("/virtual-background","/backgrounds/").concat(e,".jpg")})),j=n(4),O=n.n(j),m=n(12);n(396);var v=n(26);n(391);Object(l.a)((function(e){return Object(d.a)({root:{padding:0,minWidth:e.spacing(7)+2,height:e.spacing(7)+2,width:e.spacing(7)+2,marginRight:e.spacing(1),marginBottom:e.spacing(1),border:"2px solid transparent",alignItems:"stretch",transitionProperty:"transform, border-color",transitionDuration:"".concat(e.transitions.duration.shorter,"ms"),transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{transform:"scale(1.125)"}},active:{borderColor:e.palette.primary.main,transform:"scale(1.125)"}})}));Object(l.a)((function(e){return Object(d.a)({scalableContent:{width:"calc(100% + 2px)",height:"calc(100% + 2px)",margin:-1,borderRadius:e.shape.borderRadius},image:{objectFit:"cover"}})}));Object(l.a)((function(e){return Object(d.a)({root:{width:"100%",height:"100%",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.23)",borderRadius:e.shape.borderRadius,margin:-1,boxSizing:"content-box",display:"flex",justifyContent:"center",alignItems:"center"}})}));Object(l.a)((function(e){return Object(d.a)({root:{height:"100%"}})})),n(399),n(405);Object(l.a)((function(e){return Object(d.a)({root:{height:"100%"}})})),n(187),n(400),n(407),n(408),n(404);Object(l.a)((function(e){return Object(d.a)({root:{height:"100%"},formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginRight:e.spacing(2),minWidth:120}})})),n(289);var x=["girl-919048_1280","doctor-5871743_640","woman-5883428_1280"].map((function(e){return"".concat("/virtual-background","/images/").concat(e,".jpg")}));["Dance - 32938","Doctor - 26732","Thoughtful - 35590"].map((function(e){return"".concat("/virtual-background","/videos/").concat(e,".mp4")})),n(288);Object(l.a)((function(e){return Object(d.a)({icon:{position:"absolute",bottom:0,right:0,color:e.palette.common.white}})}));Object(l.a)((function(e){return Object(d.a)({root:{height:"100%"}})}));var y=n(290),w=n.n(y);var C=function(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(O.a.mark((function t(){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={video:!0},t.next=4,navigator.mediaDevices.getUserMedia(n);case 4:r=t.sent,e.current.srcObject=r,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error opening video camera.",t.t0),alert("Error opening video camera. ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),e};var k=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),c=Object(u.a)(o,2),i=c[0],s=c[1],l=Object(a.useRef)(0),d=Object(a.useRef)(0),b=Object(a.useRef)([]),g=Object(a.useRef)(0),f=Object(a.useRef)(0);return{fps:n,durations:i,beginFrame:Object(a.useCallback)((function(){d.current=Date.now()}),[]),addFrameEvent:Object(a.useCallback)((function(){var e=Date.now();b.current[g.current]=e-d.current,d.current=e,g.current++}),[]),endFrame:Object(a.useCallback)((function(){var e=Date.now();b.current[g.current]=e-d.current,f.current++,e>=l.current+1e3&&(r(1e3*f.current/(e-l.current)),s(b.current),l.current=e,f.current=0),g.current=0}),[])}};var I=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(0),i=Object(u.a)(c,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){if(e.current){var t=e.current;return console.log("Listening for video resize"),t.addEventListener("resize",n),function(){t.removeEventListener("resize",n)}}function n(){console.log("Video was resized"),o(t.videoWidth),l(t.videoHeight)}}),[e]),{videoWidth:r,videoHeight:s}};n(331);var _=function(e){return Object(r.jsx)("button",{className:Object(v.a)("VideoControl",e.isActivated&&"VideoControl-activated"),onClick:e.onClick,children:e.children})};n(332);var F=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),o=Object(a.useRef)(null),c=C(),i=I(c),s=i.videoWidth,l=i.videoHeight,d=Object(a.useState)(!1),b=Object(u.a)(d,2),f=b[0],h=b[1],j=Object(a.useState)("none"),v=Object(u.a)(j,2),x=v[0],y=v[1],F=k(),R=F.fps,P=Object(u.a)(F.durations,2),S=P[0],D=P[1],E=F.beginFrame,L=F.addFrameEvent,M=F.endFrame;return Object(a.useEffect)((function(){if(f){var r=t.current.getContext("2d"),a=n.current.getContext("2d"),i=new ImageData(s,l),u=s*l,d=o.current.naturalWidth,b=o.current.naturalHeight,g=Math.max(1,s/d,l/b);d*=g,b*=g;var p,h=!0;return j(),console.log("Animation started:",x),function(){h=!1,cancelAnimationFrame(p),console.log("Animation stopped:",x)}}function j(){return v.apply(this,arguments)}function v(){return(v=Object(m.a)(O.a.mark((function t(){var s,l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=2;break}return t.abrupt("return");case 2:if(E(),"none"===x){t.next=9;break}return t.next=6,e.bodyPixNeuralNetwork.segmentPerson(c.current);case 6:for(s=t.sent,l=0;l<u;l++)i.data[4*l+3]=s.data[l]?255:0;a.putImageData(i,0,0);case 9:L(),"blur"===x?(r.globalCompositeOperation="copy",r.filter="blur(8px)",r.drawImage(n.current,0,0),r.globalCompositeOperation="source-out",r.drawImage(c.current,0,0),r.globalCompositeOperation="destination-over",r.filter="none"):"image"===x?(r.globalCompositeOperation="copy",r.filter="blur(2px)",r.drawImage(n.current,0,0),r.globalCompositeOperation="source-out",r.filter="none",r.drawImage(o.current,0,0,d,b),r.globalCompositeOperation="destination-over"):r.globalCompositeOperation="source-over",r.drawImage(c.current,0,0),M(),p=requestAnimationFrame(j);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}),[e.bodyPixNeuralNetwork,c,x,s,l,f,E,L,M]),Object(r.jsx)("div",{className:"VideoPlayer",children:Object(r.jsxs)("div",{className:"VideoPlayer-root",children:[Object(r.jsxs)("div",{className:"VideoPlayer-stats",children:[Object(r.jsxs)("span",{children:[Math.round(R)," fps"]})," (",Object(r.jsxs)("span",{children:["inference ",S,"ms"]}),","," ",Object(r.jsxs)("span",{children:["post-processing ",D,"ms"]}),")"]}),Object(r.jsx)("video",{ref:c,width:s,height:l,autoPlay:!0,playsInline:!0,controls:!1,hidden:!0,onLoadedData:function(){return h(!0)},onAbort:function(){return h(!1)}}),Object(r.jsx)("img",{ref:o,src:"".concat("/virtual-background","/backgrounds/trees-4830285_640.jpg"),alt:"",hidden:!0}),Object(r.jsx)("canvas",{ref:n,width:s,height:l,hidden:!0}),Object(r.jsx)("canvas",{ref:t,className:"VideoPlayer-video",width:s,height:l}),Object(r.jsxs)("div",{className:"VideoPlayer-controls",children:[Object(r.jsx)(_,{isActivated:"none"===x,onClick:function(){return y("none")},children:Object(r.jsx)(g.a,{})}),Object(r.jsx)(_,{isActivated:"blur"===x,onClick:function(){return y("blur")},children:Object(r.jsx)(p.a,{})}),Object(r.jsx)(_,{isActivated:"image"===x,onClick:function(){return y("image")},children:Object(r.jsx)(w.a,{})})]})]})})};n(409),n(402),n(353);Object(l.a)((function(e){return Object(d.a)({render:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"},stats:{position:"absolute",top:0,right:0,left:0,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.48)",color:e.palette.common.white}})})),n(401),n(291);Object(l.a)((function(e){return Object(d.a)({sourcePlayback:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"}})}));Object(l.a)((function(e){return Object(d.a)({root:{minHeight:e.spacing(52),height:"100%",display:"flex",overflow:"hidden"},sourceCell:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightStyle:"solid",borderRightColor:e.palette.divider},outputCell:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:e.spacing(20),height:e.spacing(20)}})}));var R=n(292),P=n(312);var S=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading TensorFlow.js and BodyPix segmentation model"),e.next=3,P.a();case 3:return e.t0=r,e.next=6,R.a();case 6:e.t1=e.sent,(0,e.t0)(e.t1),console.log("TensorFlow.js and BodyPix loaded");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var D=function(){Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(O.a.mark((function e(){var t,n,r,o,a,c,i,s,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,createTFLiteModule();case 2:return t=e.sent,e.next=5,fetch("".concat("/virtual-background","/models/segm_lite_v681.tflite"));case 5:return n=e.sent,e.next=8,n.arrayBuffer();case 8:return r=e.sent,console.log("Lite model buffer size:",r.byteLength),e.next=12,fetch("".concat("/virtual-background","/models/segm_full_v679.tflite"));case 12:return o=e.sent,e.next=15,o.arrayBuffer();case 15:a=e.sent,console.log("Full model buffer size:",a.byteLength),c=t._getModelBufferMemoryOffset(),console.log("Model buffer memory offset:",c),console.log("Loading light model buffer..."),t.HEAPU8.set(new Uint8Array(r),c),console.log("_loadModel result:",t._loadModel(r.byteLength)),console.log("Input memory offset:",t._getInputMemoryOffset()),console.log("Input height:",t._getInputHeight()),console.log("Input width:",t._getInputWidth()),console.log("Input channels:",t._getInputChannelCount()),console.log("Output memory offset:",t._getOutputMemoryOffset()),console.log("Output height:",t._getOutputHeight()),console.log("Output width:",t._getOutputWidth()),console.log("Output channels:",t._getOutputChannelCount()),i=Date.now(),s=t._runInference(),u=Date.now()-i,console.log("_runInference result: ".concat(s," (").concat(u,"ms)"));case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[])};var E=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(2)}})})),L=function(){var e=S();D(),E();var t=Object(a.useState)({type:"image",url:x[0]}),n=Object(u.a)(t,2),o=(n[0],n[1],Object(a.useState)({type:"image",url:h[0]})),c=Object(u.a)(o,2),i=(c[0],c[1],Object(a.useState)({model:"bodyPix",inputResolution:"360p"})),s=Object(u.a)(i,2),l=(s[0],s[1],Object(a.useState)({smoothSegmentationMask:!0})),d=Object(u.a)(l,2);return d[0],d[1],e?Object(r.jsx)(F,{bodyPixNeuralNetwork:e}):null},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))};s.a.render(Object(r.jsxs)(c.a.StrictMode,{children:[Object(r.jsx)(o.a,{}),Object(r.jsx)(L,{})]}),document.getElementById("root")),M()}},[[351,1,2]]]);
//# sourceMappingURL=main.5fba88d7.chunk.js.map