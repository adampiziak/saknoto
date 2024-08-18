import{e as rh,k as Sc,n as qa,i as ah,E as oh,t as sh}from"./web-DuEVvOp5.js";import{h as Mu,u as ch}from"./Context-D0aeQrfF.js";import"./chess-lriRiorr.js";class Ec extends Map{constructor(e,t=fh){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(wc(this,e))}has(e){return super.has(wc(this,e))}set(e,t){return super.set(lh(this,e),t)}delete(e){return super.delete(uh(this,e))}}function wc({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function lh({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function uh({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function fh(n){return n!==null&&typeof n=="object"?n.valueOf():n}function hh(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function dh(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}var ph={value:()=>{}};function Su(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new ua(t)}function ua(n){this._=n}function mh(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}ua.prototype=Su.prototype={constructor:ua,on:function(n,e){var t=this._,i=mh(n+"",t),r,a=-1,o=i.length;if(arguments.length<2){for(;++a<o;)if((r=(n=i[a]).type)&&(r=gh(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<o;)if(r=(n=i[a]).type)t[r]=Tc(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Tc(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new ua(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,a;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],i=0,r=a.length;i<r;++i)a[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,a=i.length;r<a;++r)i[r].value.apply(e,t)}};function gh(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Tc(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=ph,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Hi=0,hr=0,er=0,Eu=1e3,_a,dr,ya=0,ui=0,La=0,Mr=typeof performance=="object"&&performance.now?performance:Date,wu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Tu(){return ui||(wu(vh),ui=Mr.now()+La)}function vh(){ui=0}function Vo(){this._call=this._time=this._next=null}Vo.prototype=Au.prototype={constructor:Vo,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Tu():+t)+(e==null?0:+e),!this._next&&dr!==this&&(dr?dr._next=this:_a=this,dr=this),this._call=n,this._time=t,Go()},stop:function(){this._call&&(this._call=null,this._time=1/0,Go())}};function Au(n,e,t){var i=new Vo;return i.restart(n,e,t),i}function _h(){Tu(),++Hi;for(var n=_a,e;n;)(e=ui-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Hi}function Ac(){ui=(ya=Mr.now())+La,Hi=hr=0;try{_h()}finally{Hi=0,xh(),ui=0}}function yh(){var n=Mr.now(),e=n-ya;e>Eu&&(La-=e,ya=n)}function xh(){for(var n,e=_a,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:_a=t);dr=n,Go(i)}function Go(n){if(!Hi){hr&&(hr=clearTimeout(hr));var e=n-ui;e>24?(n<1/0&&(hr=setTimeout(Ac,n-Mr.now()-La)),er&&(er=clearInterval(er))):(er||(ya=Mr.now(),er=setInterval(yh,Eu)),Hi=1,wu(Ac))}}function bh(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Cu(this.cover(e,t),e,t,n)}function Cu(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,a=n._root,o={data:i},s=n._x0,c=n._y0,l=n._x1,u=n._y1,f,d,p,g,v,m,h,b;if(!a)return n._root=o,n;for(;a.length;)if((v=e>=(f=(s+l)/2))?s=f:l=f,(m=t>=(d=(c+u)/2))?c=d:u=d,r=a,!(a=a[h=m<<1|v]))return r[h]=o,n;if(p=+n._x.call(null,a.data),g=+n._y.call(null,a.data),e===p&&t===g)return o.next=a,r?r[h]=o:n._root=o,n;do r=r?r[h]=new Array(4):n._root=new Array(4),(v=e>=(f=(s+l)/2))?s=f:l=f,(m=t>=(d=(c+u)/2))?c=d:u=d;while((h=m<<1|v)===(b=(g>=d)<<1|p>=f));return r[b]=a,r[h]=o,n}function Mh(n){var e,t,i=n.length,r,a,o=new Array(i),s=new Array(i),c=1/0,l=1/0,u=-1/0,f=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(o[t]=r,s[t]=a,r<c&&(c=r),r>u&&(u=r),a<l&&(l=a),a>f&&(f=a));if(c>u||l>f)return this;for(this.cover(c,l).cover(u,f),t=0;t<i;++t)Cu(this,o[t],s[t],n[t]);return this}function Sh(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,a=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,a=(i=Math.floor(e))+1;else{for(var o=r-t||1,s=this._root,c,l;t>n||n>=r||i>e||e>=a;)switch(l=(e<i)<<1|n<t,c=new Array(4),c[l]=s,s=c,o*=2,l){case 0:r=t+o,a=i+o;break;case 1:t=r-o,a=i+o;break;case 2:r=t+o,i=a-o;break;case 3:t=r-o,i=a-o;break}this._root&&this._root.length&&(this._root=s)}return this._x0=t,this._y0=i,this._x1=r,this._y1=a,this}function Eh(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function wh(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function At(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function Th(n,e,t){var i,r=this._x0,a=this._y0,o,s,c,l,u=this._x1,f=this._y1,d=[],p=this._root,g,v;for(p&&d.push(new At(p,r,a,u,f)),t==null?t=1/0:(r=n-t,a=e-t,u=n+t,f=e+t,t*=t);g=d.pop();)if(!(!(p=g.node)||(o=g.x0)>u||(s=g.y0)>f||(c=g.x1)<r||(l=g.y1)<a))if(p.length){var m=(o+c)/2,h=(s+l)/2;d.push(new At(p[3],m,h,c,l),new At(p[2],o,h,m,l),new At(p[1],m,s,c,h),new At(p[0],o,s,m,h)),(v=(e>=h)<<1|n>=m)&&(g=d[d.length-1],d[d.length-1]=d[d.length-1-v],d[d.length-1-v]=g)}else{var b=n-+this._x.call(null,p.data),_=e-+this._y.call(null,p.data),y=b*b+_*_;if(y<t){var T=Math.sqrt(t=y);r=n-T,a=e-T,u=n+T,f=e+T,i=p.data}}return i}function Ah(n){if(isNaN(u=+this._x.call(null,n))||isNaN(f=+this._y.call(null,n)))return this;var e,t=this._root,i,r,a,o=this._x0,s=this._y0,c=this._x1,l=this._y1,u,f,d,p,g,v,m,h;if(!t)return this;if(t.length)for(;;){if((g=u>=(d=(o+c)/2))?o=d:c=d,(v=f>=(p=(s+l)/2))?s=p:l=p,e=t,!(t=t[m=v<<1|g]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,h=m)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[m]=a:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[h]=t:this._root=t),this):(this._root=a,this)}function Ch(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Rh(){return this._root}function Ph(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Lh(n){var e=[],t,i=this._root,r,a,o,s,c;for(i&&e.push(new At(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,a=t.x0,o=t.y0,s=t.x1,c=t.y1)&&i.length){var l=(a+s)/2,u=(o+c)/2;(r=i[3])&&e.push(new At(r,l,u,s,c)),(r=i[2])&&e.push(new At(r,a,u,l,c)),(r=i[1])&&e.push(new At(r,l,o,s,u)),(r=i[0])&&e.push(new At(r,a,o,l,u))}return this}function Dh(n){var e=[],t=[],i;for(this._root&&e.push(new At(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.y0,c=i.x1,l=i.y1,u=(o+c)/2,f=(s+l)/2;(a=r[0])&&e.push(new At(a,o,s,u,f)),(a=r[1])&&e.push(new At(a,u,s,c,f)),(a=r[2])&&e.push(new At(a,o,f,u,l)),(a=r[3])&&e.push(new At(a,u,f,c,l))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Ih(n){return n[0]}function Oh(n){return arguments.length?(this._x=n,this):this._x}function Nh(n){return n[1]}function Uh(n){return arguments.length?(this._y=n,this):this._y}function Ru(n,e,t){var i=new Hs(e??Ih,t??Nh,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Hs(n,e,t,i,r,a){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=a,this._root=void 0}function Cc(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Pt=Ru.prototype=Hs.prototype;Pt.copy=function(){var n=new Hs(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Cc(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=Cc(i));return n};Pt.add=bh;Pt.addAll=Mh;Pt.cover=Sh;Pt.data=Eh;Pt.extent=wh;Pt.find=Th;Pt.remove=Ah;Pt.removeAll=Ch;Pt.root=Rh;Pt.size=Ph;Pt.visit=Lh;Pt.visitAfter=Dh;Pt.x=Oh;Pt.y=Uh;function Fh(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const Rc=Symbol("implicit");function Pu(){var n=new Ec,e=[],t=[],i=Rc;function r(a){let o=n.get(a);if(o===void 0){if(i!==Rc)return i;n.set(a,o=e.push(a)-1)}return t[o%t.length]}return r.domain=function(a){if(!arguments.length)return e.slice();e=[],n=new Ec;for(const o of a)n.has(o)||n.set(o,e.push(o)-1);return r},r.range=function(a){return arguments.length?(t=Array.from(a),r):t.slice()},r.unknown=function(a){return arguments.length?(i=a,r):i},r.copy=function(){return Pu(e,t).unknown(i)},Fh.apply(r,arguments),r}function Bh(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const kh=Bh("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="167",an={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zh=0,Pc=1,Hh=2,Lu=1,Vh=2,bn=3,Wn=0,Ct=1,En=2,Cn=0,Bi=1,Lc=2,Dc=3,Ic=4,Gh=5,ai=100,Wh=101,jh=102,Xh=103,$h=104,qh=200,Yh=201,Kh=202,Zh=203,Wo=204,jo=205,Jh=206,Qh=207,ed=208,td=209,nd=210,id=211,rd=212,ad=213,od=214,sd=0,cd=1,ld=2,xa=3,ud=4,fd=5,hd=6,dd=7,Vs=0,pd=1,md=2,Gn=0,gd=1,vd=2,_d=3,yd=4,xd=5,bd=6,Md=7,Du=300,Vi=301,Gi=302,Xo=303,$o=304,Ia=306,qo=1e3,si=1001,Yo=1002,Gt=1003,Sd=1004,Ir=1005,Jt=1006,Ya=1007,ci=1008,Pn=1009,Iu=1010,Ou=1011,Sr=1012,Gs=1013,fi=1014,wn=1015,$i=1016,Ws=1017,js=1018,Wi=1020,Nu=35902,Uu=1021,Fu=1022,Qt=1023,Bu=1024,ku=1025,ki=1026,ji=1027,zu=1028,Xs=1029,Hu=1030,$s=1031,qs=1033,fa=33776,ha=33777,da=33778,pa=33779,Ko=35840,Zo=35841,Jo=35842,Qo=35843,es=36196,ts=37492,ns=37496,is=37808,rs=37809,as=37810,os=37811,ss=37812,cs=37813,ls=37814,us=37815,fs=37816,hs=37817,ds=37818,ps=37819,ms=37820,gs=37821,ma=36492,vs=36494,_s=36495,Vu=36283,ys=36284,xs=36285,bs=36286,Ed=3200,wd=3201,Gu=0,Td=1,Vn="",Kt="srgb",Xn="srgb-linear",Ys="display-p3",Oa="display-p3-linear",ba="linear",tt="srgb",Ma="rec709",Sa="p3",gi=7680,Oc=519,Ad=512,Cd=513,Rd=514,Wu=515,Pd=516,Ld=517,Dd=518,Id=519,Nc=35044,Uc="300 es",Tn=2e3,Ea=2001;class rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fc=1234567;const vr=Math.PI/180,Er=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function Ks(n,e){return(n%e+e)%e}function Od(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Nd(n,e,t){return n!==e?(t-n)/(e-n):0}function _r(n,e,t){return(1-t)*n+t*e}function Ud(n,e,t,i){return _r(n,e,1-Math.exp(-t*i))}function Fd(n,e=1){return e-Math.abs(Ks(n,e*2)-e)}function Bd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hd(n,e){return n+Math.random()*(e-n)}function Vd(n){return n*(.5-Math.random())}function Gd(n){n!==void 0&&(Fc=n);let e=Fc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wd(n){return n*vr}function jd(n){return n*Er}function Xd(n){return(n&n-1)===0&&n!==0}function $d(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yd(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),c=o(t/2),l=a((e+i)/2),u=o((e+i)/2),f=a((e-i)/2),d=o((e-i)/2),p=a((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(s*u,c*f,c*d,s*l);break;case"YZY":n.set(c*d,s*u,c*f,s*l);break;case"ZXZ":n.set(c*f,c*d,s*u,s*l);break;case"XZX":n.set(s*u,c*g,c*p,s*l);break;case"YXY":n.set(c*p,s*u,c*g,s*l);break;case"ZYZ":n.set(c*g,c*p,s*u,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:vr,RAD2DEG:Er,generateUUID:qi,clamp:_t,euclideanModulo:Ks,mapLinear:Od,inverseLerp:Nd,lerp:_r,damp:Ud,pingpong:Fd,smoothstep:Bd,smootherstep:kd,randInt:zd,randFloat:Hd,randFloatSpread:Vd,seededRandom:Gd,degToRad:Wd,radToDeg:jd,isPowerOfTwo:Xd,ceilPowerOfTwo:$d,floorPowerOfTwo:qd,setQuaternionFromProperEuler:Yd,normalize:wt,denormalize:Oi};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,a,o,s,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,l)}set(e,t,i,r,a,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],b=r[1],_=r[4],y=r[7],T=r[2],S=r[5],A=r[8];return a[0]=o*v+s*b+c*T,a[3]=o*m+s*_+c*S,a[6]=o*h+s*y+c*A,a[1]=l*v+u*b+f*T,a[4]=l*m+u*_+f*S,a[7]=l*h+u*y+f*A,a[2]=d*v+p*b+g*T,a[5]=d*m+p*_+g*S,a[8]=d*h+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-i*a*u+i*s*c+r*a*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=u*o-s*l,d=s*c-u*a,p=l*a-o*c,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*l-u*i)*v,e[2]=(s*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*a-s*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new He;function ju(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kd(){const n=wr("canvas");return n.style.display="block",n}const Bc={};function yr(n){n in Bc||(Bc[n]=!0,console.warn(n))}function Zd(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const kc=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tr={[Xn]:{transfer:ba,primaries:Ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Kt]:{transfer:tt,primaries:Ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oa]:{transfer:ba,primaries:Sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(zc),fromReference:n=>n.applyMatrix3(kc)},[Ys]:{transfer:tt,primaries:Sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(zc),fromReference:n=>n.applyMatrix3(kc).convertLinearToSRGB()}},Jd=new Set([Xn,Oa]),Ze={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=tr[e].toReference,r=tr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return tr[n].primaries},getTransfer:function(n){return n===Vn?ba:tr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(tr[e].luminanceCoefficients)}};function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Za(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vi;class Qd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=wr("canvas")),vi.width=e.width,vi.height=e.height;const i=vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=zi(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class Xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Ja(r[o].image)):a.push(Ja(r[o]))}else a=Ja(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class Rt extends rn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=si,r=si,a=Jt,o=ci,s=Qt,c=Pn,l=Rt.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=qi(),this.name="",this.source=new Xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qo:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qo:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Du;Rt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(p+1)/2,T=(h+1)/2,S=(u+d)/4,A=(f+v)/4,R=(g+m)/4;return _>y&&_>T?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=S/i,a=A/i):y>T?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=S/r,a=R/r):T<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),i=A/a,r=R/a),this.set(i,r,a,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends rn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends np{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $u extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||c!==d||l!==p||u!==g){let m=1-s;const h=c*d+l*p+u*g+f*v,b=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const T=Math.sqrt(_),S=Math.atan2(T,h*b);m=Math.sin(m*S)/T,s=Math.sin(s*S)/T}const y=s*b;if(c=c*m+d*y,l=l*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-s){const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=a[o],d=a[o+1],p=a[o+2],g=a[o+3];return e[t]=s*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-s*p,e[t+2]=l*g+u*p+s*d-c*f,e[t+3]=u*g-s*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(i/2),u=s(r/2),f=s(a/2),d=c(i/2),p=c(r/2),g=c(a/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(a-l)*p,this._z=(o-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+l)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-r)/p,this._x=(a+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*s+r*l-a*c,this._y=r*u+o*c+a*s-i*l,this._z=a*u+o*l+i*c-r*s,this._w=o*u-i*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*i),u=2*(s*t-a*r),f=2*(a*i-o*t);return this.x=t+c*l+o*f-s*u,this.y=i+c*u+s*l-a*f,this.z=r+c*f+a*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-i*c,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new N,Hc=new nn;class di{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(a,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Nr.subVectors(this.max,nr),_i.subVectors(e.a,nr),yi.subVectors(e.b,nr),xi.subVectors(e.c,nr),On.subVectors(yi,_i),Nn.subVectors(xi,yi),Zn.subVectors(_i,xi);let t=[0,-On.z,On.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,On.z,0,-On.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-On.y,On.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!eo(t,_i,yi,xi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,_i,yi,xi,Nr))?!1:(Ur.crossVectors(On,Nn),t=[Ur.x,Ur.y,Ur.z],eo(t,_i,yi,xi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new N,new N,new N,new N,new N,new N,new N,new N],Xt=new N,Or=new di,_i=new N,yi=new N,xi=new N,On=new N,Nn=new N,Zn=new N,nr=new N,Nr=new N,Ur=new N,Jn=new N;function eo(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Jn.fromArray(n,a);const s=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),c=e.dot(Jn),l=t.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const rp=new di,ir=new N,to=new N;class Na{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(to)),this.expandByPoint(ir.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new N,no=new N,Fr=new N,Un=new N,io=new N,Br=new N,ro=new N;class Ua{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){no.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(no);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),s=Un.dot(this.direction),c=-Un.dot(Fr),l=Un.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*c-s,d=o*s-c,g=a*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*s)+d*(o*f+d+2*c)+l}else d=a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*c)+l;else d=-a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-c),a),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-c),a),p=-f*f+d*(d+2*c)+l);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(no).addScaledVector(Fr,d),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),r=pn.dot(pn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,c=i+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,r,a){io.subVectors(t,e),Br.subVectors(i,e),ro.crossVectors(io,Br);let o=this.direction.dot(ro),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Un.subVectors(this.origin,e);const c=s*this.direction.dot(Br.crossVectors(Un,Br));if(c<0)return null;const l=s*this.direction.dot(io.cross(Un));if(l<0||c+l>o)return null;const u=-s*Un.dot(ro);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,r,a,o,s,c,l,u,f,d,p,g,v,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,l,u,f,d,p,g,v,m)}set(e,t,i,r,a,o,s,c,l,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),a=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*f,g=s*u,v=s*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-v*l,t[9]=-s*c,t[2]=v-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,v=l*f;t[0]=d+v*s,t[4]=g*s-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=p*s-g,t[6]=v+d*s,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,v=l*f;t[0]=d-v*s,t[4]=-o*f,t[8]=g+p*s,t[1]=p+g*s,t[5]=o*u,t[9]=v-d*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=s*u,v=s*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=p*l-g,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=s*c,v=s*l;t[0]=c*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*c,p=o*l,g=s*c,v=s*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=s*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ap,e,op)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Fn.crossVectors(i,Nt),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Fn.crossVectors(i,Nt)),Fn.normalize(),kr.crossVectors(Nt,Fn),r[0]=Fn.x,r[4]=kr.x,r[8]=Nt.x,r[1]=Fn.y,r[5]=kr.y,r[9]=Nt.y,r[2]=Fn.z,r[6]=kr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],b=i[3],_=i[7],y=i[11],T=i[15],S=r[0],A=r[4],R=r[8],E=r[12],M=r[1],P=r[5],B=r[9],H=r[13],I=r[2],O=r[6],U=r[10],Q=r[14],q=r[3],se=r[7],K=r[11],te=r[15];return a[0]=o*S+s*M+c*I+l*q,a[4]=o*A+s*P+c*O+l*se,a[8]=o*R+s*B+c*U+l*K,a[12]=o*E+s*H+c*Q+l*te,a[1]=u*S+f*M+d*I+p*q,a[5]=u*A+f*P+d*O+p*se,a[9]=u*R+f*B+d*U+p*K,a[13]=u*E+f*H+d*Q+p*te,a[2]=g*S+v*M+m*I+h*q,a[6]=g*A+v*P+m*O+h*se,a[10]=g*R+v*B+m*U+h*K,a[14]=g*E+v*H+m*Q+h*te,a[3]=b*S+_*M+y*I+T*q,a[7]=b*A+_*P+y*O+T*se,a[11]=b*R+_*B+y*U+T*K,a[15]=b*E+_*H+y*Q+T*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+a*c*f-r*l*f-a*s*d+i*l*d+r*s*p-i*c*p)+v*(+t*c*p-t*l*d+a*o*d-r*o*p+r*l*u-a*c*u)+m*(+t*l*f-t*s*p-a*o*f+i*o*p+a*s*u-i*l*u)+h*(-r*s*u-t*c*f+t*s*d+r*o*f-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],b=f*m*l-v*d*l+v*c*p-s*m*p-f*c*h+s*d*h,_=g*d*l-u*m*l-g*c*p+o*m*p+u*c*h-o*d*h,y=u*v*l-g*f*l+g*s*p-o*v*p-u*s*h+o*f*h,T=g*f*c-u*v*c-g*s*d+o*v*d+u*s*m-o*f*m,S=t*b+i*_+r*y+a*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=b*A,e[1]=(v*d*a-f*m*a-v*r*p+i*m*p+f*r*h-i*d*h)*A,e[2]=(s*m*a-v*c*a+v*r*l-i*m*l-s*r*h+i*c*h)*A,e[3]=(f*c*a-s*d*a-f*r*l+i*d*l+s*r*p-i*c*p)*A,e[4]=_*A,e[5]=(u*m*a-g*d*a+g*r*p-t*m*p-u*r*h+t*d*h)*A,e[6]=(g*c*a-o*m*a-g*r*l+t*m*l+o*r*h-t*c*h)*A,e[7]=(o*d*a-u*c*a+u*r*l-t*d*l-o*r*p+t*c*p)*A,e[8]=y*A,e[9]=(g*f*a-u*v*a-g*i*p+t*v*p+u*i*h-t*f*h)*A,e[10]=(o*v*a-g*s*a+g*i*l-t*v*l-o*i*h+t*s*h)*A,e[11]=(u*s*a-o*f*a-u*i*l+t*f*l+o*i*p-t*s*p)*A,e[12]=T*A,e[13]=(u*v*r-g*f*r+g*i*d-t*v*d-u*i*m+t*f*m)*A,e[14]=(g*s*r-o*v*r-g*i*c+t*v*c+o*i*m-t*s*m)*A,e[15]=(o*f*r-u*s*r+u*i*c-t*f*c-o*i*d+t*s*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,c=e.z,l=a*o,u=a*s;return this.set(l*o+i,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+i,u*c-r*o,0,l*c-r*s,u*c+r*o,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,u=o+o,f=s+s,d=a*l,p=a*u,g=a*f,v=o*u,m=o*f,h=s*f,b=c*l,_=c*u,y=c*f,T=i.x,S=i.y,A=i.z;return r[0]=(1-(v+h))*T,r[1]=(p+y)*T,r[2]=(g-_)*T,r[3]=0,r[4]=(p-y)*S,r[5]=(1-(d+h))*S,r[6]=(m+b)*S,r[7]=0,r[8]=(g+_)*A,r[9]=(m-b)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),s=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const l=1/a,u=1/o,f=1/s;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=f,$t.elements[9]*=f,$t.elements[10]*=f,t.setFromRotationMatrix($t),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Tn){const c=this.elements,l=2*a/(t-e),u=2*a/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(s===Tn)p=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===Ea)p=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Tn){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-a),d=(t+e)*l,p=(i+r)*u;let g,v;if(s===Tn)g=(o+a)*f,v=-2*f;else if(s===Ea)g=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new N,$t=new et,ap=new N(0,0,0),op=new N(1,1,1),Fn=new N,kr=new N,Nt=new N,Vc=new et,Gc=new nn;class ln{constructor(e=0,t=0,i=0,r=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Zs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sp=0;const Wc=new N,Mi=new nn,mn=new et,zr=new N,rr=new N,cp=new N,lp=new nn,jc=new N(1,0,0),Xc=new N(0,1,0),$c=new N(0,0,1),qc={type:"added"},up={type:"removed"},Si={type:"childadded",child:null},ao={type:"childremoved",child:null};class bt extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new N,t=new ln,i=new nn,r=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new He}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(rr,zr,this.up):mn.lookAt(zr,rr,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(mn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new N(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new N,gn=new N,oo=new N,vn=new N,Ei=new N,wi=new N,Yc=new N,so=new N,co=new N,lo=new N;class sn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qt.subVectors(r,t),gn.subVectors(i,t),oo.subVectors(e,t);const o=qt.dot(qt),s=qt.dot(gn),c=qt.dot(oo),l=gn.dot(gn),u=gn.dot(oo),f=o*l-s*s;if(f===0)return a.set(0,0,0),null;const d=1/f,p=(l*c-s*u)*d,g=(o*u-s*c)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,r,a,o,s,c){return this.getBarycoord(e,t,i,r,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(s,vn.z),c)}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),gn.subVectors(e,t),qt.cross(gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),qt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Ei.subVectors(r,i),wi.subVectors(a,i),so.subVectors(e,i);const c=Ei.dot(so),l=wi.dot(so);if(c<=0&&l<=0)return t.copy(i);co.subVectors(e,r);const u=Ei.dot(co),f=wi.dot(co);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ei,o);lo.subVectors(e,a);const p=Ei.dot(lo),g=wi.dot(lo);if(g>=0&&p<=g)return t.copy(a);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(i).addScaledVector(wi,s);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Yc.subVectors(a,r),s=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Yc,s);const h=1/(m+v+d);return o=v*h,s=d*h,t.copy(i).addScaledVector(Ei,o).addScaledVector(wi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function uo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Ks(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=uo(o,a,e+1/3),this.g=uo(o,a,e),this.b=uo(o,a,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.fromWorkingColorSpace(St.copy(this),e),Math.round(_t(St.r*255,0,255))*65536+Math.round(_t(St.g*255,0,255))*256+Math.round(_t(St.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,a=St.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const f=o-s;switch(l=u<=.5?f/(o+s):f/(2-o-s),o){case i:c=(r-a)/f+(r<a?6:0);break;case r:c=(a-i)/f+2;break;case a:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Kt){Ze.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Hr);const i=_r(Bn.h,Hr.h,t),r=_r(Bn.s,Hr.s,t),a=_r(Bn.l,Hr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new We;We.NAMES=qu;let fp=0;class Yi extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Bi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=jo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==jo&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Js extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new N,Vr=new fe;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return yr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}}class Yu extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ku extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hp=0;const Ht=new et,fo=new bt,Ti=new N,Ut=new di,ar=new di,vt=new N;class Bt extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?Ku:Yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new He().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Ut.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];ar.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(Ut.min,ar.min),Ut.expandByPoint(vt),vt.addVectors(Ut.max,ar.max),Ut.expandByPoint(vt)):(Ut.expandByPoint(ar.min),Ut.expandByPoint(ar.max))}Ut.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)vt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)vt.fromBufferAttribute(s,l),c&&(Ti.fromBufferAttribute(e,l),vt.add(Ti)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],c=[];for(let R=0;R<i.count;R++)s[R]=new N,c[R]=new N;const l=new N,u=new N,f=new N,d=new fe,p=new fe,g=new fe,v=new N,m=new N;function h(R,E,M){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(a,R),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),s[R].add(v),s[E].add(v),s[M].add(v),c[R].add(m),c[E].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,E=b.length;R<E;++R){const M=b[R],P=M.start,B=M.count;for(let H=P,I=P+B;H<I;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new N,y=new N,T=new N,S=new N;function A(R){T.fromBufferAttribute(r,R),S.copy(T);const E=s[R];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(S,E);const P=y.dot(c[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,E=b.length;R<E;++R){const M=b[R],P=M.start,B=M.count;for(let H=P,I=P+B;H<I;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,a=new N,o=new N,s=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),s.add(u),c.add(u),l.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,f=s.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){s.isInterleavedBufferAttribute?p=c[v]*s.data.stride+s.offset:p=c[v]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new tn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,i);t.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],f=a[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new et,Qn=new Ua,Gr=new Na,Zc=new N,Ai=new N,Ci=new N,Ri=new N,ho=new N,Wr=new N,jr=new fe,Xr=new fe,$r=new fe,Jc=new N,Qc=new N,el=new N,qr=new N,Yr=new N;class Wt extends bt{constructor(e=new Bt,t=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Wr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=s[c],f=a[c];u!==0&&(ho.fromBufferAttribute(f,e),o?Wr.addScaledVector(ho,u):Wr.addScaledVector(ho.sub(t),u))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(a),Qn.copy(e.ray).recast(e.near),!(Gr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Gr,Zc)===null||Qn.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&(Kc.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,T=_;y<T;y+=3){const S=s.getX(y),A=s.getX(y+1),R=s.getX(y+2);r=Kr(this,h,e,i,l,u,f,S,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const b=s.getX(m),_=s.getX(m+1),y=s.getX(m+2);r=Kr(this,o,e,i,l,u,f,b,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,T=_;y<T;y+=3){const S=y,A=y+1,R=y+2;r=Kr(this,h,e,i,l,u,f,S,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const b=m,_=m+1,y=m+2;r=Kr(this,o,e,i,l,u,f,b,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function dp(n,e,t,i,r,a,o,s){let c;if(e.side===Ct?c=i.intersectTriangle(o,a,r,!0,s):c=i.intersectTriangle(r,a,o,e.side===Wn,s),c===null)return null;Yr.copy(s),Yr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:n}}function Kr(n,e,t,i,r,a,o,s,c,l){n.getVertexPosition(s,Ai),n.getVertexPosition(c,Ci),n.getVertexPosition(l,Ri);const u=dp(n,e,t,i,Ai,Ci,Ri,qr);if(u){r&&(jr.fromBufferAttribute(r,s),Xr.fromBufferAttribute(r,c),$r.fromBufferAttribute(r,l),u.uv=sn.getInterpolation(qr,Ai,Ci,Ri,jr,Xr,$r,new fe)),a&&(jr.fromBufferAttribute(a,s),Xr.fromBufferAttribute(a,c),$r.fromBufferAttribute(a,l),u.uv1=sn.getInterpolation(qr,Ai,Ci,Ri,jr,Xr,$r,new fe)),o&&(Jc.fromBufferAttribute(o,s),Qc.fromBufferAttribute(o,c),el.fromBufferAttribute(o,l),u.normal=sn.getInterpolation(qr,Ai,Ci,Ri,Jc,Qc,el,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:c,c:l,normal:new N,materialIndex:0};sn.getNormal(Ai,Ci,Ri,f.normal),u.face=f}return u}class Cr extends Bt{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function g(v,m,h,b,_,y,T,S,A,R,E){const M=y/A,P=T/R,B=y/2,H=T/2,I=S/2,O=A+1,U=R+1;let Q=0,q=0;const se=new N;for(let K=0;K<U;K++){const te=K*P-H;for(let ue=0;ue<O;ue++){const Me=ue*M-B;se[v]=Me*b,se[m]=te*_,se[h]=I,l.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[h]=S>0?1:-1,u.push(se.x,se.y,se.z),f.push(ue/A),f.push(1-K/R),Q+=1}}for(let K=0;K<R;K++)for(let te=0;te<A;te++){const ue=d+te+O*K,Me=d+te+O*(K+1),z=d+(te+1)+O*(K+1),V=d+(te+1)+O*K;c.push(ue,Me,V),c.push(Me,z,V),q+=6}s.addGroup(p,q,E),p+=q,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Xi(n[t]);for(const r in i)e[r]=i[r]}return e}function pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ju={clone:Xi,merge:Tt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qu extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new N,tl=new fe,nl=new fe;class Vt extends Qu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class vp extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Pi,Li,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Pi,Li,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Pi,Li,e,t);o.layers=this.layers,this.add(o);const s=new Vt(Pi,Li,e,t);s.layers=this.layers,this.add(s);const c=new Vt(Pi,Li,e,t);c.layers=this.layers,this.add(c);const l=new Vt(Pi,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,c]=t;for(const l of t)this.remove(l);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ef extends Rt{constructor(e,t,i,r,a,o,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,i,r,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _p extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ef(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),a=new un({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:Cn});a.uniforms.tEquirect.value=t;const o=new Wt(r,a),s=t.minFilter;return t.minFilter===ci&&(t.minFilter=Jt),new vp(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const po=new N,yp=new N,xp=new He;class Mn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=po.subVectors(i,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xp.getNormalMatrix(e),r=this.coplanarPoint(po).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Na,Zr=new N;class Qs{constructor(e=new Mn,t=new Mn,i=new Mn,r=new Mn,a=new Mn,o=new Mn){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],b=r[13],_=r[14],y=r[15];if(i[0].setComponents(c-a,d-l,m-p,y-h).normalize(),i[1].setComponents(c+a,d+l,m+p,y+h).normalize(),i[2].setComponents(c+o,d+u,m+g,y+b).normalize(),i[3].setComponents(c-o,d-u,m-g,y-b).normalize(),i[4].setComponents(c-s,d-f,m-v,y-_).normalize(),t===Tn)i[5].setComponents(c+s,d+f,m+v,y+_).normalize();else if(t===Ea)i[5].setComponents(s,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zr.x=r.normal.x>0?e.max.x:e.min.x,Zr.y=r.normal.y>0?e.max.y:e.min.y,Zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function bp(n){const e=new WeakMap;function t(s,c){const l=s.array,u=s.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),s.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,c,l){const u=c.array,f=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,s),f.count===-1&&d.length===0&&n.bufferSubData(l,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(n.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,s,c),l.version=s.version}}return{get:r,remove:a,update:o}}class Fa extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),c=Math.floor(r),l=s+1,u=c+1,f=e/s,d=t/c,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const b=h*d-o;for(let _=0;_<l;_++){const y=_*f-a;g.push(y,-b,0),v.push(0,0,1),m.push(_/s),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<s;b++){const _=b+l*h,y=b+l*(h+1),T=b+1+l*(h+1),S=b+1+l*h;p.push(_,y,S),p.push(y,T,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Mp,alphahash_pars_fragment:Sp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Cp,aomap_pars_fragment:Rp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Ip,bsdfs:Op,iridescence_fragment:Np,bumpmap_pars_fragment:Up,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:zp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:jp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:$p,displacementmap_pars_vertex:qp,displacementmap_vertex:Yp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:rm,fog_vertex:am,fog_pars_vertex:om,fog_fragment:sm,fog_pars_fragment:cm,gradientmap_pars_fragment:lm,lightmap_pars_fragment:um,lights_lambert_fragment:fm,lights_lambert_pars_fragment:hm,lights_pars_begin:dm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:vm,lights_phong_pars_fragment:_m,lights_physical_fragment:ym,lights_physical_pars_fragment:xm,lights_fragment_begin:bm,lights_fragment_maps:Mm,lights_fragment_end:Sm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Cm,map_pars_fragment:Rm,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Om,morphcolor_vertex:Nm,morphnormal_vertex:Um,morphtarget_pars_vertex:Fm,morphtarget_vertex:Bm,normal_fragment_begin:km,normal_fragment_maps:zm,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:Km,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:rg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:sg,skinning_pars_vertex:cg,skinning_vertex:lg,skinnormal_vertex:ug,specularmap_fragment:fg,specularmap_pars_fragment:hg,tonemapping_fragment:dg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:vg,uv_pars_vertex:_g,uv_vertex:yg,worldpos_vertex:xg,background_vert:bg,background_frag:Mg,backgroundCube_vert:Sg,backgroundCube_frag:Eg,cube_vert:wg,cube_frag:Tg,depth_vert:Ag,depth_frag:Cg,distanceRGBA_vert:Rg,distanceRGBA_frag:Pg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Ig,linedashed_frag:Og,meshbasic_vert:Ng,meshbasic_frag:Ug,meshlambert_vert:Fg,meshlambert_frag:Bg,meshmatcap_vert:kg,meshmatcap_frag:zg,meshnormal_vert:Hg,meshnormal_frag:Vg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:jg,meshphysical_frag:Xg,meshtoon_vert:$g,meshtoon_frag:qg,points_vert:Yg,points_frag:Kg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:ev},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},on={basic:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Tt([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Tt([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};on.physical={uniforms:Tt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Jr={r:0,b:0,g:0},ti=new ln,tv=new et;function nv(n,e,t,i,r,a,o){const s=new We(0);let c=a===!0?0:1,l,u,f=null,d=0,p=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function v(b){let _=!1;const y=g(b);y===null?h(s,c):y&&y.isColor&&(h(y,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===Ia)?(u===void 0&&(u=new Wt(new Cr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Xi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ti.copy(_.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(ti)),u.material.toneMapped=Ze.getTransfer(y.colorSpace)!==tt,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Wt(new Fa(2,2),new un({name:"BackgroundMaterial",uniforms:Xi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,_){b.getRGB(Jr,Zu(n)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,_,o)}return{getClearColor:function(){return s},setClearColor:function(b,_=1){s.set(b),c=_,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(s,c)},render:v,addToRenderList:m}}function iv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,o=!1;function s(M,P,B,H,I){let O=!1;const U=f(H,B,P);a!==U&&(a=U,l(a.object)),O=p(M,H,B,I),O&&g(M,H,B,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(M,P,B,H),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,P,B){const H=B.wireframe===!0;let I=i[M.id];I===void 0&&(I={},i[M.id]=I);let O=I[P.id];O===void 0&&(O={},I[P.id]=O);let U=O[H];return U===void 0&&(U=d(c()),O[H]=U),U}function d(M){const P=[],B=[],H=[];for(let I=0;I<t;I++)P[I]=0,B[I]=0,H[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,P,B,H){const I=a.attributes,O=P.attributes;let U=0;const Q=B.getAttributes();for(const q in Q)if(Q[q].location>=0){const K=I[q];let te=O[q];if(te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),K===void 0||K.attribute!==te||te&&K.data!==te.data)return!0;U++}return a.attributesNum!==U||a.index!==H}function g(M,P,B,H){const I={},O=P.attributes;let U=0;const Q=B.getAttributes();for(const q in Q)if(Q[q].location>=0){let K=O[q];K===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const te={};te.attribute=K,K&&K.data&&(te.data=K.data),I[q]=te,U++}a.attributes=I,a.attributesNum=U,a.index=H}function v(){const M=a.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function m(M){h(M,0)}function h(M,P){const B=a.newAttributes,H=a.enabledAttributes,I=a.attributeDivisors;B[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),I[M]!==P&&(n.vertexAttribDivisor(M,P),I[M]=P)}function b(){const M=a.newAttributes,P=a.enabledAttributes;for(let B=0,H=P.length;B<H;B++)P[B]!==M[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function _(M,P,B,H,I,O,U){U===!0?n.vertexAttribIPointer(M,P,B,I,O):n.vertexAttribPointer(M,P,B,H,I,O)}function y(M,P,B,H){v();const I=H.attributes,O=B.getAttributes(),U=P.defaultAttributeValues;for(const Q in O){const q=O[Q];if(q.location>=0){let se=I[Q];if(se===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const K=se.normalized,te=se.itemSize,ue=e.get(se);if(ue===void 0)continue;const Me=ue.buffer,z=ue.type,V=ue.bytesPerElement,ee=z===n.INT||z===n.UNSIGNED_INT||se.gpuType===Gs;if(se.isInterleavedBufferAttribute){const F=se.data,J=F.stride,le=se.offset;if(F.isInstancedInterleavedBuffer){for(let pe=0;pe<q.locationSize;pe++)h(q.location+pe,F.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let pe=0;pe<q.locationSize;pe++)_(q.location+pe,te/q.locationSize,z,K,J*V,(le+te/q.locationSize*pe)*V,ee)}else{if(se.isInstancedBufferAttribute){for(let F=0;F<q.locationSize;F++)h(q.location+F,se.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let F=0;F<q.locationSize;F++)m(q.location+F);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let F=0;F<q.locationSize;F++)_(q.location+F,te/q.locationSize,z,K,te*V,te/q.locationSize*F*V,ee)}}else if(U!==void 0){const K=U[Q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(q.location,K);break;case 3:n.vertexAttrib3fv(q.location,K);break;case 4:n.vertexAttrib4fv(q.location,K);break;default:n.vertexAttrib1fv(q.location,K)}}}}b()}function T(){R();for(const M in i){const P=i[M];for(const B in P){const H=P[B];for(const I in H)u(H[I].object),delete H[I];delete P[B]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const B in P){const H=P[B];for(const I in H)u(H[I].object),delete H[I];delete P[B]}delete i[M.id]}function A(M){for(const P in i){const B=i[P];if(B[M.id]===void 0)continue;const H=B[M.id];for(const I in H)u(H[I].object),delete H[I];delete B[M.id]}}function R(){E(),o=!0,a!==r&&(a=r,l(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:R,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function rv(n,e,t){let i;function r(l){i=l}function a(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function s(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function c(l,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function av(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Qt&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(S){const A=S===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Pn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==wn&&!A)}function c(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:y,maxSamples:T}}function ov(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Mn,s=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||a&&!m)a?u(null):l();else{const b=a?0:i,_=b*4;let y=h.clippingState||null;c.value=y,y=u(g,d,_,p);for(let T=0;T!==_;++T)y[T]=t[T];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const h=p+v*4,b=d.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(f[_]).applyMatrix4(b,s),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function sv(n){let e=new WeakMap;function t(o,s){return s===Xo?o.mapping=Vi:s===$o&&(o.mapping=Gi),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Xo||s===$o)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new _p(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class ec extends Qu{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,il=[.125,.215,.35,.446,.526,.582],oi=20,mo=new ec,rl=new We;let go=null,vo=0,_o=0,yo=!1;const ii=(1+Math.sqrt(5))/2,Di=1/ii,al=[new N(-ii,Di,0),new N(ii,Di,0),new N(-Di,0,ii),new N(Di,0,ii),new N(0,ii,-Di),new N(0,ii,Di),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,vo,_o),this._renderer.xr.enabled=yo,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:$i,format:Qt,colorSpace:Xn,depthBuffer:!1},r=sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cv(a)),this._blurMaterial=lv(a,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,r){const s=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(rl),u.toneMapping=Gn,u.autoClear=!1;const p=new Js({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new Wt(new Cr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(rl),v=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(s.up.set(0,c[h],0),s.lookAt(l[h],0,0)):b===1?(s.up.set(0,0,c[h]),s.lookAt(0,l[h],0)):(s.up.set(0,c[h],0),s.lookAt(0,0,l[h]));const _=this._cubeSize;Qr(r,b*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;Qr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,mo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=al[(r-a-1)%al.length];this._blur(e,a-1,a,o,s)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*oi-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):oi;m>oi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const h=[];let b=0;for(let A=0;A<oi;++A){const R=A/v,E=Math.exp(-R*R/2);h.push(E),A===0?b+=E:A<m&&(b+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const y=this._sizeLods[r],T=3*y*(r>_-Ni?r-_+Ni:0),S=4*(this._cubeSize-y);Qr(t,T,S,3*y,2*y),c.setRenderTarget(t),c.render(f,mo)}}function cv(n){const e=[],t=[],i=[];let r=n;const a=n-Ni+1+il.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>n-Ni?c=il[o-n+Ni-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,b=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,R=S>2?0:-1,E=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];b.set(E,v*g*S),_.set(d,m*g*S);const M=[S,S,S,S,S,S];y.set(M,h*g*S)}const T=new Bt;T.setAttribute("position",new tn(b,v)),T.setAttribute("uv",new tn(_,m)),T.setAttribute("faceIndex",new tn(y,h)),e.push(T),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sl(n,e,t){const i=new jn(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lv(n,e,t){const i=new Float32Array(oi),r=new N(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function cl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ll(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uv(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===Xo||c===$o,u=c===Vi||c===Gi;if(l||u){let f=e.get(s);const d=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return t===null&&(t=new ol(n)),f=l?t.fromEquirectangular(s,f):t.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new ol(n)),f=l?t.fromEquirectangular(s):t.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",a),f.texture):null}}}return s}function r(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&yr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hv(n,e,t,i){const r={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let _=0,y=b.length;_<y;_+=3){const T=b[_+0],S=b[_+1],A=b[_+2];d.push(T,S,S,A,A,T)}}else if(g!==void 0){const b=g.array;v=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const T=_+0,S=_+1,A=_+2;d.push(T,S,S,A,A,T)}}else return;const m=new(ju(d)?Ku:Yu)(d,1);m.version=v;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return a.get(f)}return{get:s,update:c,getWireframeAttribute:u}}function dv(n,e,t){let i;function r(d){i=d}let a,o;function s(d){a=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,a,d*o),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,v,0,g);let h=0;for(let b=0;b<g;b++)h+=p[b];for(let b=0;b<v.length;b++)t.update(h,i,v[b])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mv(n,e,t){const i=new WeakMap,r=new dt;function a(o,s,c){const l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(s);if(d===void 0||d.count!==f){let E=function(){A.dispose(),i.delete(s),s.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,v=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],h=s.morphAttributes.normal||[],b=s.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let y=s.attributes.position.count*_,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*T*4*f),A=new $u(S,y,T,f);A.type=wn,A.needsUpdate=!0;const R=_*4;for(let M=0;M<f;M++){const P=m[M],B=h[M],H=b[M],I=y*T*4*M;for(let O=0;O<P.count;O++){const U=O*R;p===!0&&(r.fromBufferAttribute(P,O),S[I+U+0]=r.x,S[I+U+1]=r.y,S[I+U+2]=r.z,S[I+U+3]=0),g===!0&&(r.fromBufferAttribute(B,O),S[I+U+4]=r.x,S[I+U+5]=r.y,S[I+U+6]=r.z,S[I+U+7]=0),v===!0&&(r.fromBufferAttribute(H,O),S[I+U+8]=r.x,S[I+U+9]=r.y,S[I+U+10]=r.z,S[I+U+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new fe(y,T)},i.set(s,d),s.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=s.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function gv(n,e,t,i){let r=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}class nf extends Rt{constructor(e,t,i,r,a,o,s,c,l,u=ki){if(u!==ki&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ki&&(i=fi),i===void 0&&u===ji&&(i=Wi),super(null,r,a,o,s,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rf=new Rt,ul=new nf(1,1),af=new $u,of=new ip,sf=new ef,fl=[],hl=[],dl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function Ki(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=fl[r];if(a===void 0&&(a=new Float32Array(r),fl[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ba(n,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function bv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;ml.set(i),n.uniformMatrix2fv(this.addr,!1,ml),gt(t,i)}}function Mv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;pl.set(i),n.uniformMatrix3fv(this.addr,!1,pl),gt(t,i)}}function Sv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;dl.set(i),n.uniformMatrix4fv(this.addr,!1,dl),gt(t,i)}}function Ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function Cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function Pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function Dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(ul.compareFunction=Wu,a=ul):a=rf,t.setTexture2D(e||a,r)}function Iv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||of,r)}function Ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sf,r)}function Nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||af,r)}function Uv(n){switch(n){case 5126:return vv;case 35664:return _v;case 35665:return yv;case 35666:return xv;case 35674:return bv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return Ev;case 35667:case 35671:return wv;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Cv;case 36294:return Rv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Nv}}function Fv(n,e){n.uniform1fv(this.addr,e)}function Bv(n,e){const t=Ki(e,this.size,2);n.uniform2fv(this.addr,t)}function kv(n,e){const t=Ki(e,this.size,3);n.uniform3fv(this.addr,t)}function zv(n,e){const t=Ki(e,this.size,4);n.uniform4fv(this.addr,t)}function Hv(n,e){const t=Ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vv(n,e){const t=Ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gv(n,e){const t=Ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wv(n,e){n.uniform1iv(this.addr,e)}function jv(n,e){n.uniform2iv(this.addr,e)}function Xv(n,e){n.uniform3iv(this.addr,e)}function $v(n,e){n.uniform4iv(this.addr,e)}function qv(n,e){n.uniform1uiv(this.addr,e)}function Yv(n,e){n.uniform2uiv(this.addr,e)}function Kv(n,e){n.uniform3uiv(this.addr,e)}function Zv(n,e){n.uniform4uiv(this.addr,e)}function Jv(n,e,t){const i=this.cache,r=e.length,a=Ba(t,r);mt(i,a)||(n.uniform1iv(this.addr,a),gt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rf,a[o])}function Qv(n,e,t){const i=this.cache,r=e.length,a=Ba(t,r);mt(i,a)||(n.uniform1iv(this.addr,a),gt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||of,a[o])}function e_(n,e,t){const i=this.cache,r=e.length,a=Ba(t,r);mt(i,a)||(n.uniform1iv(this.addr,a),gt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||sf,a[o])}function t_(n,e,t){const i=this.cache,r=e.length,a=Ba(t,r);mt(i,a)||(n.uniform1iv(this.addr,a),gt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||af,a[o])}function n_(n){switch(n){case 5126:return Fv;case 35664:return Bv;case 35665:return kv;case 35666:return zv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return jv;case 35668:case 35672:return Xv;case 35669:case 35673:return $v;case 5125:return qv;case 36294:return Yv;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}class i_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function gl(n,e){n.seq.push(e),n.map[e.id]=e}function o_(n,e,t){const i=n.name,r=i.length;for(xo.lastIndex=0;;){const a=xo.exec(i),o=xo.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){gl(t,l===void 0?new i_(s,n,e):new r_(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new a_(s),gl(t,f)),t=f}}}class ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);o_(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const s_=37297;let c_=0;function l_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function u_(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Sa&&t===Ma?i="LinearDisplayP3ToLinearSRGB":e===Ma&&t===Sa&&(i="LinearSRGBToLinearDisplayP3"),n){case Xn:case Oa:return[i,"LinearTransferOETF"];case Kt:case Ys:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function _l(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+l_(n.getShaderSource(e),o)}else return r}function f_(n,e){const t=u_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function h_(n,e){let t;switch(e){case gd:t="Linear";break;case vd:t="Reinhard";break;case _d:t="OptimizedCineon";break;case yd:t="ACESFilmic";break;case bd:t="AgX";break;case Md:t="Neutral";break;case xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new N;function d_(){Ze.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function m_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function g_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function pr(n){return n!==""}function yl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ss(n){return n.replace(v_,y_)}const __=new Map;function y_(n,e){let t=ze[e];if(t===void 0){const i=__.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ss(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(n){return n.replace(x_,b_)}function b_(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ml(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function S_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vs:e="ENVMAP_BLENDING_MULTIPLY";break;case pd:e="ENVMAP_BLENDING_MIX";break;case md:e="ENVMAP_BLENDING_ADD";break}return e}function T_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function A_(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=M_(t),l=S_(t),u=E_(t),f=w_(t),d=T_(t),p=p_(t),g=m_(a),v=r.createProgram();let m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),h.length>0&&(h+=`
`)):(m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),h=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Gn?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),d_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=Ss(o),o=yl(o,t),o=xl(o,t),s=Ss(s),s=yl(s,t),s=xl(s,t),o=bl(o),s=bl(s),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=b+m+o,y=b+h+s,T=vl(r,r.VERTEX_SHADER,_),S=vl(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,S),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(T).trim(),I=r.getShaderInfoLog(S).trim();let O=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,S);else{const Q=_l(r,T,"vertex"),q=_l(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Q+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||I==="")&&(U=!1);U&&(P.diagnostics={runnable:O,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:I,prefix:h}})}r.deleteShader(T),r.deleteShader(S),R=new ga(r,v),E=g_(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,s_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=S,this}let C_=0;class R_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P_(e),t.set(e,i)),i}}class P_{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function L_(n,e,t,i,r,a,o){const s=new Zs,c=new R_,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,B,H){const I=B.fog,O=H.geometry,U=E.isMeshStandardMaterial?B.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||U),q=Q&&Q.mapping===Ia?Q.image.height:null,se=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=K!==void 0?K.length:0;let ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let Me,z,V,ee;if(se){const je=on[se];Me=je.vertexShader,z=je.fragmentShader}else Me=E.vertexShader,z=E.fragmentShader,c.update(E),V=c.getVertexShaderID(E),ee=c.getFragmentShaderID(E);const F=n.getRenderTarget(),J=H.isInstancedMesh===!0,le=H.isBatchedMesh===!0,pe=!!E.map,Ee=!!E.matcap,D=!!Q,Je=!!E.aoMap,Ie=!!E.lightMap,Ve=!!E.bumpMap,_e=!!E.normalMap,Xe=!!E.displacementMap,Re=!!E.emissiveMap,Be=!!E.metalnessMap,L=!!E.roughnessMap,w=E.anisotropy>0,Y=E.clearcoat>0,ie=E.dispersion>0,ae=E.iridescence>0,ne=E.sheen>0,Ae=E.transmission>0,he=w&&!!E.anisotropyMap,ge=Y&&!!E.clearcoatMap,ke=Y&&!!E.clearcoatNormalMap,oe=Y&&!!E.clearcoatRoughnessMap,ve=ae&&!!E.iridescenceMap,Ge=ae&&!!E.iridescenceThicknessMap,Le=ne&&!!E.sheenColorMap,ye=ne&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Fe=!!E.specularColorMap,nt=!!E.specularIntensityMap,x=Ae&&!!E.transmissionMap,W=Ae&&!!E.thicknessMap,j=!!E.gradientMap,Z=!!E.alphaMap,re=E.alphaTest>0,we=!!E.alphaHash,Ne=!!E.extensions;let st=Gn;E.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(st=n.toneMapping);const ft={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:z,defines:E.defines,customVertexShaderID:V,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:le,batchingColor:le&&H._colorsTexture!==null,instancing:J,instancingColor:J&&H.instanceColor!==null,instancingMorph:J&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xn,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:Ee,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:q,aoMap:Je,lightMap:Ie,bumpMap:Ve,normalMap:_e,displacementMap:d&&Xe,emissiveMap:Re,normalMapObjectSpace:_e&&E.normalMapType===Td,normalMapTangentSpace:_e&&E.normalMapType===Gu,metalnessMap:Be,roughnessMap:L,anisotropy:w,anisotropyMap:he,clearcoat:Y,clearcoatMap:ge,clearcoatNormalMap:ke,clearcoatRoughnessMap:oe,dispersion:ie,iridescence:ae,iridescenceMap:ve,iridescenceThicknessMap:Ge,sheen:ne,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:Oe,specularColorMap:Fe,specularIntensityMap:nt,transmission:Ae,transmissionMap:x,thicknessMap:W,gradientMap:j,opaque:E.transparent===!1&&E.blending===Bi&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:re,alphaHash:we,combine:E.combine,mapUv:pe&&v(E.map.channel),aoMapUv:Je&&v(E.aoMap.channel),lightMapUv:Ie&&v(E.lightMap.channel),bumpMapUv:Ve&&v(E.bumpMap.channel),normalMapUv:_e&&v(E.normalMap.channel),displacementMapUv:Xe&&v(E.displacementMap.channel),emissiveMapUv:Re&&v(E.emissiveMap.channel),metalnessMapUv:Be&&v(E.metalnessMap.channel),roughnessMapUv:L&&v(E.roughnessMap.channel),anisotropyMapUv:he&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(E.sheenRoughnessMap.channel),specularMapUv:Oe&&v(E.specularMap.channel),specularColorMapUv:Fe&&v(E.specularColorMap.channel),specularIntensityMapUv:nt&&v(E.specularIntensityMap.channel),transmissionMapUv:x&&v(E.transmissionMap.channel),thicknessMapUv:W&&v(E.thicknessMap.channel),alphaMapUv:Z&&v(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(pe||Z),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===Ct,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(M,E),_(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),E.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.doubleSided&&s.enable(10),M.flipSided&&s.enable(11),M.useDepthPacking&&s.enable(12),M.dithering&&s.enable(13),M.transmission&&s.enable(14),M.sheen&&s.enable(15),M.opaque&&s.enable(16),M.pointsUvs&&s.enable(17),M.decodeVideoTexture&&s.enable(18),M.alphaToCoverage&&s.enable(19),E.push(s.mask)}function y(E){const M=g[E.type];let P;if(M){const B=on[M];P=Ju.clone(B.uniforms)}else P=E.uniforms;return P}function T(E,M){let P;for(let B=0,H=u.length;B<H;B++){const I=u[B];if(I.cacheKey===M){P=I,++P.usedTimes;break}}return P===void 0&&(P=new A_(n,M,E,a),u.push(P)),P}function S(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){c.remove(E)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:R}}function D_(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function I_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function El(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function s(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||I_),i.length>1&&i.sort(d||Sl),r.length>1&&r.sort(d||Sl)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:u,sort:l}}function O_(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new El,n.set(i,[o])):r>=a.length?(o=new El,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function N_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new We};break;case"SpotLight":t={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function U_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let F_=0;function B_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k_(n){const e=new N_,t=U_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,a=new et,o=new et;function s(l){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,b=0,_=0,y=0,T=0,S=0,A=0;l.sort(B_);for(let E=0,M=l.length;E<M;E++){const P=l[E],B=P.color,H=P.intensity,I=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*H,f+=B.g*H,d+=B.b*H;else if(P.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(P.sh.coefficients[U],H);A++}else if(P.isDirectionalLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,q=t.get(P);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=U,p++}else if(P.isSpotLight){const U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(B).multiplyScalar(H),U.distance=I,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,i.spot[v]=U;const Q=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,Q.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[v]=Q.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=O,y++}v++}else if(P.isRectAreaLight){const U=e.get(P);U.color.copy(B).multiplyScalar(H),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=U,m++}else if(P.isPointLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const Q=P.shadow,q=t.get(P);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=U,g++}else if(P.isHemisphereLight){const U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(H),U.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[h]=U,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==b||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=b,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=T,R.numLightProbes=A,i.version=F_++)}function c(l,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){const _=l[h];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),a.copy(_.matrixWorld),a.premultiply(m),o.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:s,setupView:c,state:i}}function wl(n){const e=new k_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function s(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function z_(n){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new wl(n),e.set(r,[s])):a>=o.length?(s=new wl(n),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class H_ extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V_ extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j_(n,e,t){let i=new Qs;const r=new fe,a=new fe,o=new dt,s=new H_({depthPacking:wd}),c=new V_,l={},u=t.maxTextureSize,f={[Wn]:Ct,[Ct]:Wn,[En]:En},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:G_,fragmentShader:W_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let h=this.type;this.render=function(S,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Cn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=h!==bn&&this.type===bn,I=h===bn&&this.type!==bn;for(let O=0,U=S.length;O<U;O++){const Q=S[O],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const se=q.getFrameExtents();if(r.multiply(se),a.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/se.x),r.x=a.x*se.x,q.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/se.y),r.y=a.y*se.y,q.mapSize.y=a.y)),q.map===null||H===!0||I===!0){const te=this.type!==bn?{minFilter:Gt,magFilter:Gt}:{};q.map!==null&&q.map.dispose(),q.map=new jn(r.x,r.y,te),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const K=q.getViewportCount();for(let te=0;te<K;te++){const ue=q.getViewport(te);o.set(a.x*ue.x,a.y*ue.y,a.x*ue.z,a.y*ue.w),B.viewport(o),q.updateMatrices(Q,te),i=q.getFrustum(),y(A,R,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===bn&&b(q,R),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,P)};function b(S,A){const R=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jn(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,R,p,v,null)}function _(S,A,R,E){let M=null;const P=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:s,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=M.uuid,H=A.uuid;let I=l[B];I===void 0&&(I={},l[B]=I);let O=I[H];O===void 0&&(O=M.clone(),I[H]=O,A.addEventListener("dispose",T)),M=O}if(M.visible=A.visible,M.wireframe=A.wireframe,E===bn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=R}return M}function y(S,A,R,E,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===bn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const H=e.update(S),I=S.material;if(Array.isArray(I)){const O=H.groups;for(let U=0,Q=O.length;U<Q;U++){const q=O[U],se=I[q.materialIndex];if(se&&se.visible){const K=_(S,se,E,M);S.onBeforeShadow(n,S,A,R,H,K,q),n.renderBufferDirect(R,null,H,K,S,q),S.onAfterShadow(n,S,A,R,H,K,q)}}}else if(I.visible){const O=_(S,I,E,M);S.onBeforeShadow(n,S,A,R,H,O,null),n.renderBufferDirect(R,null,H,O,S,null),S.onAfterShadow(n,S,A,R,H,O,null)}}const B=S.children;for(let H=0,I=B.length;H<I;H++)y(B[H],A,R,E,M)}function T(S){S.target.removeEventListener("dispose",T);for(const R in l){const E=l[R],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function X_(n){function e(){let x=!1;const W=new dt;let j=null;const Z=new dt(0,0,0,0);return{setMask:function(re){j!==re&&!x&&(n.colorMask(re,re,re,re),j=re)},setLocked:function(re){x=re},setClear:function(re,we,Ne,st,ft){ft===!0&&(re*=st,we*=st,Ne*=st),W.set(re,we,Ne,st),Z.equals(W)===!1&&(n.clearColor(re,we,Ne,st),Z.copy(W))},reset:function(){x=!1,j=null,Z.set(-1,0,0,0)}}}function t(){let x=!1,W=null,j=null,Z=null;return{setTest:function(re){re?ee(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(re){W!==re&&!x&&(n.depthMask(re),W=re)},setFunc:function(re){if(j!==re){switch(re){case sd:n.depthFunc(n.NEVER);break;case cd:n.depthFunc(n.ALWAYS);break;case ld:n.depthFunc(n.LESS);break;case xa:n.depthFunc(n.LEQUAL);break;case ud:n.depthFunc(n.EQUAL);break;case fd:n.depthFunc(n.GEQUAL);break;case hd:n.depthFunc(n.GREATER);break;case dd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=re}},setLocked:function(re){x=re},setClear:function(re){Z!==re&&(n.clearDepth(re),Z=re)},reset:function(){x=!1,W=null,j=null,Z=null}}}function i(){let x=!1,W=null,j=null,Z=null,re=null,we=null,Ne=null,st=null,ft=null;return{setTest:function(je){x||(je?ee(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(je){W!==je&&!x&&(n.stencilMask(je),W=je)},setFunc:function(je,ht,ct){(j!==je||Z!==ht||re!==ct)&&(n.stencilFunc(je,ht,ct),j=je,Z=ht,re=ct)},setOp:function(je,ht,ct){(we!==je||Ne!==ht||st!==ct)&&(n.stencilOp(je,ht,ct),we=je,Ne=ht,st=ct)},setLocked:function(je){x=je},setClear:function(je){ft!==je&&(n.clearStencil(je),ft=je)},reset:function(){x=!1,W=null,j=null,Z=null,re=null,we=null,Ne=null,st=null,ft=null}}}const r=new e,a=new t,o=new i,s=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,b=null,_=null,y=null,T=null,S=new We(0,0,0),A=0,R=!1,E=null,M=null,P=null,B=null,H=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,U=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),O=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),O=U>=2);let q=null,se={};const K=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ue=new dt().fromArray(K),Me=new dt().fromArray(te);function z(x,W,j,Z){const re=new Uint8Array(4),we=n.createTexture();n.bindTexture(x,we),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<j;Ne++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(W,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(W+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return we}const V={};V[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(xa),Ve(!1),_e(Pc),ee(n.CULL_FACE),Je(Cn);function ee(x){l[x]!==!0&&(n.enable(x),l[x]=!0)}function F(x){l[x]!==!1&&(n.disable(x),l[x]=!1)}function J(x,W){return u[x]!==W?(n.bindFramebuffer(x,W),u[x]=W,x===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=W),x===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=W),!0):!1}function le(x,W){let j=d,Z=!1;if(x){j=f.get(W),j===void 0&&(j=[],f.set(W,j));const re=x.textures;if(j.length!==re.length||j[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Ne=re.length;we<Ne;we++)j[we]=n.COLOR_ATTACHMENT0+we;j.length=re.length,Z=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Z=!0);Z&&n.drawBuffers(j)}function pe(x){return p!==x?(n.useProgram(x),p=x,!0):!1}const Ee={[ai]:n.FUNC_ADD,[Wh]:n.FUNC_SUBTRACT,[jh]:n.FUNC_REVERSE_SUBTRACT};Ee[Xh]=n.MIN,Ee[$h]=n.MAX;const D={[qh]:n.ZERO,[Yh]:n.ONE,[Kh]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[nd]:n.SRC_ALPHA_SATURATE,[ed]:n.DST_COLOR,[Jh]:n.DST_ALPHA,[Zh]:n.ONE_MINUS_SRC_COLOR,[jo]:n.ONE_MINUS_SRC_ALPHA,[td]:n.ONE_MINUS_DST_COLOR,[Qh]:n.ONE_MINUS_DST_ALPHA,[id]:n.CONSTANT_COLOR,[rd]:n.ONE_MINUS_CONSTANT_COLOR,[ad]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(x,W,j,Z,re,we,Ne,st,ft,je){if(x===Cn){g===!0&&(F(n.BLEND),g=!1);return}if(g===!1&&(ee(n.BLEND),g=!0),x!==Gh){if(x!==v||je!==R){if((m!==ai||_!==ai)&&(n.blendEquation(n.FUNC_ADD),m=ai,_=ai),je)switch(x){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}h=null,b=null,y=null,T=null,S.set(0,0,0),A=0,v=x,R=je}return}re=re||W,we=we||j,Ne=Ne||Z,(W!==m||re!==_)&&(n.blendEquationSeparate(Ee[W],Ee[re]),m=W,_=re),(j!==h||Z!==b||we!==y||Ne!==T)&&(n.blendFuncSeparate(D[j],D[Z],D[we],D[Ne]),h=j,b=Z,y=we,T=Ne),(st.equals(S)===!1||ft!==A)&&(n.blendColor(st.r,st.g,st.b,ft),S.copy(st),A=ft),v=x,R=!1}function Ie(x,W){x.side===En?F(n.CULL_FACE):ee(n.CULL_FACE);let j=x.side===Ct;W&&(j=!j),Ve(j),x.blending===Bi&&x.transparent===!1?Je(Cn):Je(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),a.setFunc(x.depthFunc),a.setTest(x.depthTest),a.setMask(x.depthWrite),r.setMask(x.colorWrite);const Z=x.stencilWrite;o.setTest(Z),Z&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Re(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(x){E!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),E=x)}function _e(x){x!==zh?(ee(n.CULL_FACE),x!==M&&(x===Pc?n.cullFace(n.BACK):x===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),M=x}function Xe(x){x!==P&&(O&&n.lineWidth(x),P=x)}function Re(x,W,j){x?(ee(n.POLYGON_OFFSET_FILL),(B!==W||H!==j)&&(n.polygonOffset(W,j),B=W,H=j)):F(n.POLYGON_OFFSET_FILL)}function Be(x){x?ee(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function L(x){x===void 0&&(x=n.TEXTURE0+I-1),q!==x&&(n.activeTexture(x),q=x)}function w(x,W,j){j===void 0&&(q===null?j=n.TEXTURE0+I-1:j=q);let Z=se[j];Z===void 0&&(Z={type:void 0,texture:void 0},se[j]=Z),(Z.type!==x||Z.texture!==W)&&(q!==j&&(n.activeTexture(j),q=j),n.bindTexture(x,W||V[x]),Z.type=x,Z.texture=W)}function Y(){const x=se[q];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Le(x){ue.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),ue.copy(x))}function ye(x){Me.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),Me.copy(x))}function Oe(x,W){let j=c.get(W);j===void 0&&(j=new WeakMap,c.set(W,j));let Z=j.get(x);Z===void 0&&(Z=n.getUniformBlockIndex(W,x.name),j.set(x,Z))}function Fe(x,W){const Z=c.get(W).get(x);s.get(W)!==Z&&(n.uniformBlockBinding(W,Z,x.__bindingPointIndex),s.set(W,Z))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},q=null,se={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,b=null,_=null,y=null,T=null,S=new We(0,0,0),A=0,R=!1,E=null,M=null,P=null,B=null,H=null,ue.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:F,bindFramebuffer:J,drawBuffers:le,useProgram:pe,setBlending:Je,setMaterial:Ie,setFlipSided:Ve,setCullFace:_e,setLineWidth:Xe,setPolygonOffset:Re,setScissorTest:Be,activeTexture:L,bindTexture:w,unbindTexture:Y,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Ge,updateUBOMapping:Oe,uniformBlockBinding:Fe,texStorage2D:ke,texStorage3D:oe,texSubImage2D:ne,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Le,viewport:ye,reset:nt}}function Tl(n,e,t,i){const r=$_(i);switch(t){case Uu:return n*e;case Bu:return n*e;case ku:return n*e*2;case zu:return n*e/r.components*r.byteLength;case Xs:return n*e/r.components*r.byteLength;case Hu:return n*e*2/r.components*r.byteLength;case $s:return n*e*2/r.components*r.byteLength;case Fu:return n*e*3/r.components*r.byteLength;case Qt:return n*e*4/r.components*r.byteLength;case qs:return n*e*4/r.components*r.byteLength;case fa:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Qo:return Math.max(n,16)*Math.max(e,8)/4;case Ko:case Jo:return Math.max(n,8)*Math.max(e,8)/2;case es:case ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case as:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case os:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ss:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ls:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case us:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hs:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ds:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ps:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ms:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gs:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ma:case vs:case _s:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vu:case ys:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xs:case bs:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $_(n){switch(n){case Pn:case Iu:return{byteLength:1,components:1};case Sr:case Ou:case $i:return{byteLength:2,components:1};case Ws:case js:return{byteLength:2,components:4};case fi:case Gs:case wn:return{byteLength:4,components:1};case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function q_(n,e,t,i,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return p?new OffscreenCanvas(L,w):wr("canvas")}function v(L,w,Y){let ie=1;const ae=Be(L);if((ae.width>Y||ae.height>Y)&&(ie=Y/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ne=Math.floor(ie*ae.width),Ae=Math.floor(ie*ae.height);f===void 0&&(f=g(ne,Ae));const he=w?g(ne,Ae):f;return he.width=ne,he.height=Ae,he.getContext("2d").drawImage(L,0,0,ne,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Ae+")."),he}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Gt&&L.minFilter!==Jt}function h(L){n.generateMipmap(L)}function b(L,w,Y,ie,ae=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=w;if(w===n.RED&&(Y===n.FLOAT&&(ne=n.R32F),Y===n.HALF_FLOAT&&(ne=n.R16F),Y===n.UNSIGNED_BYTE&&(ne=n.R8)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.R8UI),Y===n.UNSIGNED_SHORT&&(ne=n.R16UI),Y===n.UNSIGNED_INT&&(ne=n.R32UI),Y===n.BYTE&&(ne=n.R8I),Y===n.SHORT&&(ne=n.R16I),Y===n.INT&&(ne=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(ne=n.RG32F),Y===n.HALF_FLOAT&&(ne=n.RG16F),Y===n.UNSIGNED_BYTE&&(ne=n.RG8)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RG16UI),Y===n.UNSIGNED_INT&&(ne=n.RG32UI),Y===n.BYTE&&(ne=n.RG8I),Y===n.SHORT&&(ne=n.RG16I),Y===n.INT&&(ne=n.RG32I)),w===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),w===n.RGBA){const Ae=ae?ba:Ze.getTransfer(ie);Y===n.FLOAT&&(ne=n.RGBA32F),Y===n.HALF_FLOAT&&(ne=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ne=Ae===tt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(L,w){let Y;return L?w===null||w===fi||w===Wi?Y=n.DEPTH24_STENCIL8:w===wn?Y=n.DEPTH32F_STENCIL8:w===Sr&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fi||w===Wi?Y=n.DEPTH_COMPONENT24:w===wn?Y=n.DEPTH_COMPONENT32F:w===Sr&&(Y=n.DEPTH_COMPONENT16),Y}function y(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Gt&&L.minFilter!==Jt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function T(L){const w=L.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&u.delete(w)}function S(L){const w=L.target;w.removeEventListener("dispose",S),E(w)}function A(L){const w=i.get(L);if(w.__webglInit===void 0)return;const Y=L.source,ie=d.get(Y);if(ie){const ae=ie[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(L),Object.keys(ie).length===0&&d.delete(Y)}i.remove(L)}function R(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const Y=L.source,ie=d.get(Y);delete ie[w.__cacheKey],o.memory.textures--}function E(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let ae=0;ae<w.__webglFramebuffer[ie].length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ie][ae]);else n.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)n.deleteFramebuffer(w.__webglFramebuffer[ie]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=L.textures;for(let ie=0,ae=Y.length;ie<ae;ie++){const ne=i.get(Y[ie]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(Y[ie])}i.remove(L)}let M=0;function P(){M=0}function B(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function H(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function I(L,w){const Y=i.get(L);if(L.isVideoTexture&&Xe(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Y,L,w);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function O(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Me(Y,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function U(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Me(Y,L,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function Q(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){z(Y,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const q={[qo]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},se={[Gt]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},K={[Ad]:n.NEVER,[Id]:n.ALWAYS,[Cd]:n.LESS,[Wu]:n.LEQUAL,[Rd]:n.EQUAL,[Dd]:n.GEQUAL,[Pd]:n.GREATER,[Ld]:n.NOTEQUAL};function te(L,w){if(w.type===wn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jt||w.magFilter===Ya||w.magFilter===Ir||w.magFilter===ci||w.minFilter===Jt||w.minFilter===Ya||w.minFilter===Ir||w.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,q[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,q[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,q[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,se[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Gt||w.minFilter!==Ir&&w.minFilter!==ci||w.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ue(L,w){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));const ie=w.source;let ae=d.get(ie);ae===void 0&&(ae={},d.set(ie,ae));const ne=H(w);if(ne!==L.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[ne].usedTimes++;const Ae=ae[L.__cacheKey];Ae!==void 0&&(ae[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(w)),L.__cacheKey=ne,L.__webglTexture=ae[ne].texture}return Y}function Me(L,w,Y){let ie=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=n.TEXTURE_3D);const ae=ue(L,w),ne=w.source;t.bindTexture(ie,L.__webglTexture,n.TEXTURE0+Y);const Ae=i.get(ne);if(ne.version!==Ae.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);const he=Ze.getPrimaries(Ze.workingColorSpace),ge=w.colorSpace===Vn?null:Ze.getPrimaries(w.colorSpace),ke=w.colorSpace===Vn||he===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let oe=v(w.image,!1,r.maxTextureSize);oe=Re(w,oe);const ve=a.convert(w.format,w.colorSpace),Ge=a.convert(w.type);let Le=b(w.internalFormat,ve,Ge,w.colorSpace,w.isVideoTexture);te(ie,w);let ye;const Oe=w.mipmaps,Fe=w.isVideoTexture!==!0,nt=Ae.__version===void 0||ae===!0,x=ne.dataReady,W=y(w,oe);if(w.isDepthTexture)Le=_(w.format===ji,w.type),nt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Le,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,ve,Ge,null));else if(w.isDataTexture)if(Oe.length>0){Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,W,Le,Oe[0].width,Oe[0].height);for(let j=0,Z=Oe.length;j<Z;j++)ye=Oe[j],Fe?x&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Ge,ye.data):t.texImage2D(n.TEXTURE_2D,j,Le,ye.width,ye.height,0,ve,Ge,ye.data);w.generateMipmaps=!1}else Fe?(nt&&t.texStorage2D(n.TEXTURE_2D,W,Le,oe.width,oe.height),x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,Ge,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,ve,Ge,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Le,Oe[0].width,Oe[0].height,oe.depth);for(let j=0,Z=Oe.length;j<Z;j++)if(ye=Oe[j],w.format!==Qt)if(ve!==null)if(Fe){if(x)if(w.layerUpdates.size>0){const re=Tl(ye.width,ye.height,w.format,w.type);for(const we of w.layerUpdates){const Ne=ye.data.subarray(we*re/ye.data.BYTES_PER_ELEMENT,(we+1)*re/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,we,ye.width,ye.height,1,ve,Ne,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,oe.depth,ve,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?x&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,oe.depth,ve,Ge,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,oe.depth,0,ve,Ge,ye.data)}else{Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,W,Le,Oe[0].width,Oe[0].height);for(let j=0,Z=Oe.length;j<Z;j++)ye=Oe[j],w.format!==Qt?ve!==null?Fe?x&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?x&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Ge,ye.data):t.texImage2D(n.TEXTURE_2D,j,Le,ye.width,ye.height,0,ve,Ge,ye.data)}else if(w.isDataArrayTexture)if(Fe){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Le,oe.width,oe.height,oe.depth),x)if(w.layerUpdates.size>0){const j=Tl(oe.width,oe.height,w.format,w.type);for(const Z of w.layerUpdates){const re=oe.data.subarray(Z*j/oe.data.BYTES_PER_ELEMENT,(Z+1)*j/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,ve,Ge,re)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ge,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,ve,Ge,oe.data);else if(w.isData3DTexture)Fe?(nt&&t.texStorage3D(n.TEXTURE_3D,W,Le,oe.width,oe.height,oe.depth),x&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ge,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,ve,Ge,oe.data);else if(w.isFramebufferTexture){if(nt)if(Fe)t.texStorage2D(n.TEXTURE_2D,W,Le,oe.width,oe.height);else{let j=oe.width,Z=oe.height;for(let re=0;re<W;re++)t.texImage2D(n.TEXTURE_2D,re,Le,j,Z,0,ve,Ge,null),j>>=1,Z>>=1}}else if(Oe.length>0){if(Fe&&nt){const j=Be(Oe[0]);t.texStorage2D(n.TEXTURE_2D,W,Le,j.width,j.height)}for(let j=0,Z=Oe.length;j<Z;j++)ye=Oe[j],Fe?x&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve,Ge,ye):t.texImage2D(n.TEXTURE_2D,j,Le,ve,Ge,ye);w.generateMipmaps=!1}else if(Fe){if(nt){const j=Be(oe);t.texStorage2D(n.TEXTURE_2D,W,Le,j.width,j.height)}x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ge,oe)}else t.texImage2D(n.TEXTURE_2D,0,Le,ve,Ge,oe);m(w)&&h(ie),Ae.__version=ne.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function z(L,w,Y){if(w.image.length!==6)return;const ie=ue(L,w),ae=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Y);const ne=i.get(ae);if(ae.version!==ne.__version||ie===!0){t.activeTexture(n.TEXTURE0+Y);const Ae=Ze.getPrimaries(Ze.workingColorSpace),he=w.colorSpace===Vn?null:Ze.getPrimaries(w.colorSpace),ge=w.colorSpace===Vn||Ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!ke&&!oe?ve[Z]=v(w.image[Z],!0,r.maxCubemapSize):ve[Z]=oe?w.image[Z].image:w.image[Z],ve[Z]=Re(w,ve[Z]);const Ge=ve[0],Le=a.convert(w.format,w.colorSpace),ye=a.convert(w.type),Oe=b(w.internalFormat,Le,ye,w.colorSpace),Fe=w.isVideoTexture!==!0,nt=ne.__version===void 0||ie===!0,x=ae.dataReady;let W=y(w,Ge);te(n.TEXTURE_CUBE_MAP,w);let j;if(ke){Fe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Oe,Ge.width,Ge.height);for(let Z=0;Z<6;Z++){j=ve[Z].mipmaps;for(let re=0;re<j.length;re++){const we=j[re];w.format!==Qt?Le!==null?Fe?x&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,we.width,we.height,Le,ye,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,Oe,we.width,we.height,0,Le,ye,we.data)}}}else{if(j=w.mipmaps,Fe&&nt){j.length>0&&W++;const Z=Be(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){Fe?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Le,ye,ve[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,ve[Z].width,ve[Z].height,0,Le,ye,ve[Z].data);for(let re=0;re<j.length;re++){const Ne=j[re].image[Z].image;Fe?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,Ne.width,Ne.height,Le,ye,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,Oe,Ne.width,Ne.height,0,Le,ye,Ne.data)}}else{Fe?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ye,ve[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Le,ye,ve[Z]);for(let re=0;re<j.length;re++){const we=j[re];Fe?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,Le,ye,we.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,Oe,Le,ye,we.image[Z])}}}m(w)&&h(n.TEXTURE_CUBE_MAP),ne.__version=ae.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function V(L,w,Y,ie,ae,ne){const Ae=a.convert(Y.format,Y.colorSpace),he=a.convert(Y.type),ge=b(Y.internalFormat,Ae,he,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const oe=Math.max(1,w.width>>ne),ve=Math.max(1,w.height>>ne);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,ge,oe,ve,w.depth,0,Ae,he,null):t.texImage2D(ae,ne,ge,oe,ve,0,Ae,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),_e(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ae,i.get(Y).__webglTexture,0,Ve(w)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ae,i.get(Y).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(L,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const ie=w.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,ne=_(w.stencilBuffer,ae),Ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Ve(w);_e(w)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ne,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ne,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ne,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,L)}else{const ie=w.textures;for(let ae=0;ae<ie.length;ae++){const ne=ie[ae],Ae=a.convert(ne.format,ne.colorSpace),he=a.convert(ne.type),ge=b(ne.internalFormat,Ae,he,ne.colorSpace),ke=Ve(w);Y&&_e(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ge,w.width,w.height):_e(w)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const ie=i.get(w.depthTexture).__webglTexture,ae=Ve(w);if(w.depthTexture.format===ki)_e(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(w.depthTexture.format===ji)_e(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function J(L){const w=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");F(w.__webglFramebuffer,L)}else if(Y){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=n.createRenderbuffer(),ee(w.__webglDepthbuffer[ie],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ee(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(L,w,Y){const ie=i.get(L);w!==void 0&&V(ie.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&J(L)}function pe(L){const w=L.texture,Y=i.get(L),ie=i.get(w);L.addEventListener("dispose",S);const ae=L.textures,ne=L.isWebGLCubeRenderTarget===!0,Ae=ae.length>1;if(Ae||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=w.version,o.memory.textures++),ne){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let ge=0;ge<w.mipmaps.length;ge++)Y.__webglFramebuffer[he][ge]=n.createFramebuffer()}else Y.__webglFramebuffer[he]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)Y.__webglFramebuffer[he]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let he=0,ge=ae.length;he<ge;he++){const ke=i.get(ae[he]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&_e(L)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const ge=ae[he];Y.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const ke=a.convert(ge.format,ge.colorSpace),oe=a.convert(ge.type),ve=b(ge.internalFormat,ke,oe,ge.colorSpace,L.isXRRenderTarget===!0),Ge=Ve(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,ve,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),te(n.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)V(Y.__webglFramebuffer[he][ge],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else V(Y.__webglFramebuffer[he],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(w)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,ge=ae.length;he<ge;he++){const ke=ae[he],oe=i.get(ke);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),te(n.TEXTURE_2D,ke),V(Y.__webglFramebuffer,L,ke,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(ke)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),te(he,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)V(Y.__webglFramebuffer[ge],L,w,n.COLOR_ATTACHMENT0,he,ge);else V(Y.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,he,0);m(w)&&h(he),t.unbindTexture()}L.depthBuffer&&J(L)}function Ee(L){const w=L.textures;for(let Y=0,ie=w.length;Y<ie;Y++){const ae=w[Y];if(m(ae)){const ne=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(ae).__webglTexture;t.bindTexture(ne,Ae),h(ne),t.unbindTexture()}}}const D=[],Je=[];function Ie(L){if(L.samples>0){if(_e(L)===!1){const w=L.textures,Y=L.width,ie=L.height;let ae=n.COLOR_BUFFER_BIT;const ne=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(L),he=w.length>1;if(he)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const ke=i.get(w[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,ae,n.NEAREST),c===!0&&(D.length=0,Je.length=0,D.push(n.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(ne),Je.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const ke=i.get(w[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ve(L){return Math.min(r.maxSamples,L.samples)}function _e(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Re(L,w){const Y=L.colorSpace,ie=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Xn&&Y!==Vn&&(Ze.getTransfer(Y)===tt?(ie!==Qt||ae!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function Be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=I,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=le,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=V,this.useMultisampledRTT=_e}function Y_(n,e){function t(i,r=Vn){let a;const o=Ze.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Ws)return n.UNSIGNED_SHORT_4_4_4_4;if(i===js)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.BYTE;if(i===Ou)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===Gs)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===$i)return n.HALF_FLOAT;if(i===Uu)return n.ALPHA;if(i===Fu)return n.RGB;if(i===Qt)return n.RGBA;if(i===Bu)return n.LUMINANCE;if(i===ku)return n.LUMINANCE_ALPHA;if(i===ki)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===zu)return n.RED;if(i===Xs)return n.RED_INTEGER;if(i===Hu)return n.RG;if(i===$s)return n.RG_INTEGER;if(i===qs)return n.RGBA_INTEGER;if(i===fa||i===ha||i===da||i===pa)if(o===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ko||i===Zo||i===Jo||i===Qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===es||i===ts||i===ns)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===es||i===ts)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ns)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===is||i===rs||i===as||i===os||i===ss||i===cs||i===ls||i===us||i===fs||i===hs||i===ds||i===ps||i===ms||i===gs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===is)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rs)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===as)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===os)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ss)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cs)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ls)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===us)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fs)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hs)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ds)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ps)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ms)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gs)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===vs||i===_s)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ma)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_s)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vu||i===ys||i===xs||i===bs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ma)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ys)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class K_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Ui=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Z_={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Rt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new un({vertexShader:J_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t0 extends rn{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const v=new e0,m=t.getContextAttributes();let h=null,b=null;const _=[],y=[],T=new fe;let S=null;const A=new Vt;A.layers.enable(1),A.viewport=new dt;const R=new Vt;R.layers.enable(2),R.viewport=new dt;const E=[A,R],M=new K_;M.layers.enable(1),M.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let V=_[z];return V===void 0&&(V=new bo,_[z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(z){let V=_[z];return V===void 0&&(V=new bo,_[z]=V),V.getGripSpace()},this.getHand=function(z){let V=_[z];return V===void 0&&(V=new bo,_[z]=V),V.getHandSpace()};function H(z){const V=y.indexOf(z.inputSource);if(V===-1)return;const ee=_[V];ee!==void 0&&(ee.update(z.inputSource,z.frame,l||o),ee.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",O);for(let z=0;z<_.length;z++){const V=y[z];V!==null&&(y[z]=null,_[z].disconnect(V))}P=null,B=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,b=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",I),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new jn(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,ee=null,F=null;m.depth&&(F=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?ji:ki,ee=m.stencil?Wi:fi);const J={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:a};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(J),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new jn(d.textureWidth,d.textureHeight,{format:Qt,type:Pn,depthTexture:new nf(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(z){for(let V=0;V<z.removed.length;V++){const ee=z.removed[V],F=y.indexOf(ee);F>=0&&(y[F]=null,_[F].disconnect(ee))}for(let V=0;V<z.added.length;V++){const ee=z.added[V];let F=y.indexOf(ee);if(F===-1){for(let le=0;le<_.length;le++)if(le>=y.length){y.push(ee),F=le;break}else if(y[le]===null){y[le]=ee,F=le;break}if(F===-1)break}const J=_[F];J&&J.connect(ee)}}const U=new N,Q=new N;function q(z,V,ee){U.setFromMatrixPosition(V.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);const F=U.distanceTo(Q),J=V.projectionMatrix.elements,le=ee.projectionMatrix.elements,pe=J[14]/(J[10]-1),Ee=J[14]/(J[10]+1),D=(J[9]+1)/J[5],Je=(J[9]-1)/J[5],Ie=(J[8]-1)/J[0],Ve=(le[8]+1)/le[0],_e=pe*Ie,Xe=pe*Ve,Re=F/(-Ie+Ve),Be=Re*-Ie;V.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Be),z.translateZ(Re),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const L=pe+Re,w=Ee+Re,Y=_e-Be,ie=Xe+(F-Be),ae=D*Ee/w*L,ne=Je*Ee/w*L;z.projectionMatrix.makePerspective(Y,ie,ae,ne,L,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function se(z,V){V===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(V.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;v.texture!==null&&(z.near=v.depthNear,z.far=v.depthFar),M.near=R.near=A.near=z.near,M.far=R.far=A.far=z.far,(P!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,B=M.far,A.near=P,A.far=B,R.near=P,R.far=B,A.updateProjectionMatrix(),R.updateProjectionMatrix(),z.updateProjectionMatrix());const V=z.parent,ee=M.cameras;se(M,V);for(let F=0;F<ee.length;F++)se(ee[F],V);ee.length===2?q(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),K(z,M,V)};function K(z,V,ee){ee===null?z.matrix.copy(V.matrixWorld):(z.matrix.copy(ee.matrixWorld),z.matrix.invert(),z.matrix.multiply(V.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(V.projectionMatrix),z.projectionMatrixInverse.copy(V.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Er*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let te=null;function ue(z,V){if(u=V.getViewerPose(l||o),g=V,u!==null){const ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let F=!1;ee.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let le=0;le<ee.length;le++){const pe=ee[le];let Ee=null;if(p!==null)Ee=p.getViewport(pe);else{const Je=f.getViewSubImage(d,pe);Ee=Je.viewport,le===0&&(e.setRenderTargetTextures(b,Je.colorTexture,d.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(b))}let D=E[le];D===void 0&&(D=new Vt,D.layers.enable(le),D.viewport=new dt,E[le]=D),D.matrix.fromArray(pe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(pe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),le===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(D)}const J=r.enabledFeatures;if(J&&J.includes("depth-sensing")){const le=f.getDepthInformation(ee[0]);le&&le.isValid&&le.texture&&v.init(e,le,r.renderState)}}for(let ee=0;ee<_.length;ee++){const F=y[ee],J=_[ee];F!==null&&J!==void 0&&J.update(F,V,l||o)}te&&te(z,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const Me=new tf;Me.setAnimationLoop(ue),this.setAnimationLoop=function(z){te=z},this.dispose=function(){}}}const ni=new ln,n0=new et;function i0(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Zu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?c(m,h,b,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ct&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ct&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,ni.copy(y),ni.x*=-1,ni.y*=-1,ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(ni)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ct&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function r0(n,e,t,i){let r={},a={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){const y=_.program;i.uniformBlockBinding(b,y)}function l(b,_){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const T=_.program;i.updateUBOMapping(b,T);const S=e.render.frame;a[b.id]!==S&&(d(b),a[b.id]=S)}function u(b){const _=f();b.__bindingPointIndex=_;const y=n.createBuffer(),T=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=r[b.id],y=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,A=y.length;S<A;S++){const R=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,M=R.length;E<M;E++){const P=R[E];if(p(P,S,E,T)===!0){const B=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let O=0;O<H.length;O++){const U=H[O],Q=v(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,B+I,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,_,y,T){const S=b.value,A=_+"_"+y;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{const R=T[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return T[A]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(b){const _=b.uniforms;let y=0;const T=16;for(let A=0,R=_.length;A<R;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,P=E.length;M<P;M++){const B=E[M],H=Array.isArray(B.value)?B.value:[B.value];for(let I=0,O=H.length;I<O;I++){const U=H[I],Q=v(U),q=y%T,se=q%Q.boundary,K=q+se;y+=se,K!==0&&T-K<Q.storage&&(y+=T-K),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Q.storage}}}const S=y%T;return S>0&&(y+=T-S),b.__size=y,b.__cache={},this}function v(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},a={}}return{bind:c,update:l,dispose:h}}class a0{constructor(e={}){const{canvas:t=Kd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Gn,this.toneMappingExposure=1;const _=this;let y=!1,T=0,S=0,A=null,R=-1,E=null;const M=new dt,P=new dt;let B=null;const H=new We(0);let I=0,O=t.width,U=t.height,Q=1,q=null,se=null;const K=new dt(0,0,O,U),te=new dt(0,0,O,U);let ue=!1;const Me=new Qs;let z=!1,V=!1;const ee=new et,F=new N,J=new dt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Ee(){return A===null?Q:1}let D=i;function Je(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",re,!1),D===null){const k="webgl2";if(D=Je(k,C),D===null)throw Je(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ie,Ve,_e,Xe,Re,Be,L,w,Y,ie,ae,ne,Ae,he,ge,ke,oe,ve,Ge,Le,ye,Oe,Fe,nt;function x(){Ie=new fv(D),Ie.init(),Oe=new Y_(D,Ie),Ve=new av(D,Ie,e,Oe),_e=new X_(D),Xe=new pv(D),Re=new D_,Be=new q_(D,Ie,_e,Re,Ve,Oe,Xe),L=new sv(_),w=new uv(_),Y=new bp(D),Fe=new iv(D,Y),ie=new hv(D,Y,Xe,Fe),ae=new gv(D,ie,Y,Xe),Ge=new mv(D,Ve,Be),ke=new ov(Re),ne=new L_(_,L,w,Ie,Ve,Fe,ke),Ae=new i0(_,Re),he=new O_,ge=new z_(Ie),ve=new nv(_,L,w,_e,ae,d,c),oe=new j_(_,ae,Ve),nt=new r0(D,Xe,Ve,_e),Le=new rv(D,Ie,Xe),ye=new dv(D,Ie,Xe),Xe.programs=ne.programs,_.capabilities=Ve,_.extensions=Ie,_.properties=Re,_.renderLists=he,_.shadowMap=oe,_.state=_e,_.info=Xe}x();const W=new t0(_,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(O,U,!1))},this.getSize=function(C){return C.set(O,U)},this.setSize=function(C,k,X=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,U=k,t.width=Math.floor(C*Q),t.height=Math.floor(k*Q),X===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(O*Q,U*Q).floor()},this.setDrawingBufferSize=function(C,k,X){O=C,U=k,Q=X,t.width=Math.floor(C*X),t.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,k,X,$){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,k,X,$),_e.viewport(M.copy(K).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,k,X,$){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,k,X,$),_e.scissor(P.copy(te).multiplyScalar(Q).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){_e.setScissorTest(ue=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(C=!0,k=!0,X=!0){let $=0;if(C){let G=!1;if(A!==null){const ce=A.texture.format;G=ce===qs||ce===$s||ce===Xs}if(G){const ce=A.texture.type,me=ce===Pn||ce===fi||ce===Sr||ce===Wi||ce===Ws||ce===js,xe=ve.getClearColor(),be=ve.getClearAlpha(),De=xe.r,Ue=xe.g,Ce=xe.b;me?(p[0]=De,p[1]=Ue,p[2]=Ce,p[3]=be,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=De,g[1]=Ue,g[2]=Ce,g[3]=be,D.clearBufferiv(D.COLOR,0,g))}else $|=D.COLOR_BUFFER_BIT}k&&($|=D.DEPTH_BUFFER_BIT),X&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",re,!1),he.dispose(),ge.dispose(),Re.dispose(),L.dispose(),w.dispose(),ae.dispose(),Fe.dispose(),nt.dispose(),ne.dispose(),W.dispose(),W.removeEventListener("sessionstart",ct),W.removeEventListener("sessionend",Dn),yt.stop()};function j(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Xe.autoReset,k=oe.enabled,X=oe.autoUpdate,$=oe.needsUpdate,G=oe.type;x(),Xe.autoReset=C,oe.enabled=k,oe.autoUpdate=X,oe.needsUpdate=$,oe.type=G}function re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const k=C.target;k.removeEventListener("dispose",we),Ne(k)}function Ne(C){st(C),Re.remove(C)}function st(C){const k=Re.get(C).programs;k!==void 0&&(k.forEach(function(X){ne.releaseProgram(X)}),C.isShaderMaterial&&ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,$,G,ce){k===null&&(k=le);const me=G.isMesh&&G.matrixWorld.determinant()<0,xe=eh(C,k,X,$,G);_e.setMaterial($,me);let be=X.index,De=1;if($.wireframe===!0){if(be=ie.getWireframeAttribute(X),be===void 0)return;De=2}const Ue=X.drawRange,Ce=X.attributes.position;let qe=Ue.start*De,at=(Ue.start+Ue.count)*De;ce!==null&&(qe=Math.max(qe,ce.start*De),at=Math.min(at,(ce.start+ce.count)*De)),be!==null?(qe=Math.max(qe,0),at=Math.min(at,be.count)):Ce!=null&&(qe=Math.max(qe,0),at=Math.min(at,Ce.count));const ot=at-qe;if(ot<0||ot===1/0)return;Fe.setup(G,$,xe,X,be);let It,Ye=Le;if(be!==null&&(It=Y.get(be),Ye=ye,Ye.setIndex(It)),G.isMesh)$.wireframe===!0?(_e.setLineWidth($.wireframeLinewidth*Ee()),Ye.setMode(D.LINES)):Ye.setMode(D.TRIANGLES);else if(G.isLine){let Te=$.linewidth;Te===void 0&&(Te=1),_e.setLineWidth(Te*Ee()),G.isLineSegments?Ye.setMode(D.LINES):G.isLineLoop?Ye.setMode(D.LINE_LOOP):Ye.setMode(D.LINE_STRIP)}else G.isPoints?Ye.setMode(D.POINTS):G.isSprite&&Ye.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ye.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Ye.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Te=G._multiDrawStarts,xt=G._multiDrawCounts,Ke=G._multiDrawCount,jt=be?Y.get(be).bytesPerElement:1,pi=Re.get($).currentProgram.getUniforms();for(let Ot=0;Ot<Ke;Ot++)pi.setValue(D,"_gl_DrawID",Ot),Ye.render(Te[Ot]/jt,xt[Ot])}else if(G.isInstancedMesh)Ye.renderInstances(qe,ot,G.count);else if(X.isInstancedBufferGeometry){const Te=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xt=Math.min(X.instanceCount,Te);Ye.renderInstances(qe,ot,xt)}else Ye.render(qe,ot)};function ft(C,k,X){C.transparent===!0&&C.side===En&&C.forceSinglePass===!1?(C.side=Ct,C.needsUpdate=!0,Dr(C,k,X),C.side=Wn,C.needsUpdate=!0,Dr(C,k,X),C.side=En):Dr(C,k,X)}this.compile=function(C,k,X=null){X===null&&(X=C),m=ge.get(X),m.init(k),b.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),C!==X&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const $=new Set;return C.traverse(function(G){const ce=G.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const xe=ce[me];ft(xe,X,G),$.add(xe)}else ft(ce,X,G),$.add(ce)}),b.pop(),m=null,$},this.compileAsync=function(C,k,X=null){const $=this.compile(C,k,X);return new Promise(G=>{function ce(){if($.forEach(function(me){Re.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){G(C);return}setTimeout(ce,10)}Ie.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let je=null;function ht(C){je&&je(C)}function ct(){yt.stop()}function Dn(){yt.start()}const yt=new tf;yt.setAnimationLoop(ht),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(C){je=C,W.setAnimationLoop(C),C===null?yt.stop():yt.start()},W.addEventListener("sessionstart",ct),W.addEventListener("sessionend",Dn),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(k),k=W.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,k,A),m=ge.get(C,b.length),m.init(k),b.push(m),ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Me.setFromProjectionMatrix(ee),V=this.localClippingEnabled,z=ke.init(this.clippingPlanes,V),v=he.get(C,h.length),v.init(),h.push(v),W.enabled===!0&&W.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&hn(ce,k,-1/0,_.sortObjects)}hn(C,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,se),pe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,pe&&ve.addToRenderList(v,C),this.info.render.frame++,z===!0&&ke.beginShadows();const X=m.state.shadowsArray;oe.render(X,C,k),z===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,G=v.transmissive;if(m.setupLights(),k.isArrayCamera){const ce=k.cameras;if(G.length>0)for(let me=0,xe=ce.length;me<xe;me++){const be=ce[me];Qi($,G,C,be)}pe&&ve.render(C);for(let me=0,xe=ce.length;me<xe;me++){const be=ce[me];Kn(v,C,be,be.viewport)}}else G.length>0&&Qi($,G,C,k),pe&&ve.render(C),Kn(v,C,k);A!==null&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,k),Fe.resetDefaultState(),R=-1,E=null,b.pop(),b.length>0?(m=b[b.length-1],z===!0&&ke.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function hn(C,k,X,$){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){$&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const me=ae.update(C),xe=C.material;xe.visible&&v.push(C,me,xe,X,J.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const me=ae.update(C),xe=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),J.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),J.copy(me.boundingSphere.center)),J.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(xe)){const be=me.groups;for(let De=0,Ue=be.length;De<Ue;De++){const Ce=be[De],qe=xe[Ce.materialIndex];qe&&qe.visible&&v.push(C,me,qe,X,J.z,Ce)}}else xe.visible&&v.push(C,me,xe,X,J.z,null)}}const ce=C.children;for(let me=0,xe=ce.length;me<xe;me++)hn(ce[me],k,X,$)}function Kn(C,k,X,$){const G=C.opaque,ce=C.transmissive,me=C.transparent;m.setupLightsView(X),z===!0&&ke.setGlobalState(_.clippingPlanes,X),$&&_e.viewport(M.copy($)),G.length>0&&Lr(G,k,X),ce.length>0&&Lr(ce,k,X),me.length>0&&Lr(me,k,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Qi(C,k,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new jn(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?$i:Pn,minFilter:ci,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ce=m.state.transmissionRenderTarget[$.id],me=$.viewport||M;ce.setSize(me.z,me.w);const xe=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(H),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear(),pe&&ve.render(X);const be=_.toneMapping;_.toneMapping=Gn;const De=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),z===!0&&ke.setGlobalState(_.clippingPlanes,$),Lr(C,X,$),Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ce=0,qe=k.length;Ce<qe;Ce++){const at=k[Ce],ot=at.object,It=at.geometry,Ye=at.material,Te=at.group;if(Ye.side===En&&ot.layers.test($.layers)){const xt=Ye.side;Ye.side=Ct,Ye.needsUpdate=!0,yc(ot,X,$,It,Ye,Te),Ye.side=xt,Ye.needsUpdate=!0,Ue=!0}}Ue===!0&&(Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce))}_.setRenderTarget(xe),_.setClearColor(H,I),De!==void 0&&($.viewport=De),_.toneMapping=be}function Lr(C,k,X){const $=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ce=C.length;G<ce;G++){const me=C[G],xe=me.object,be=me.geometry,De=$===null?me.material:$,Ue=me.group;xe.layers.test(X.layers)&&yc(xe,k,X,be,De,Ue)}}function yc(C,k,X,$,G,ce){C.onBeforeRender(_,k,X,$,G,ce),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.transparent===!0&&G.side===En&&G.forceSinglePass===!1?(G.side=Ct,G.needsUpdate=!0,_.renderBufferDirect(X,k,$,G,C,ce),G.side=Wn,G.needsUpdate=!0,_.renderBufferDirect(X,k,$,G,C,ce),G.side=En):_.renderBufferDirect(X,k,$,G,C,ce),C.onAfterRender(_,k,X,$,G,ce)}function Dr(C,k,X){k.isScene!==!0&&(k=le);const $=Re.get(C),G=m.state.lights,ce=m.state.shadowsArray,me=G.state.version,xe=ne.getParameters(C,G.state,ce,k,X),be=ne.getProgramCacheKey(xe);let De=$.programs;$.environment=C.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(C.isMeshStandardMaterial?w:L).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,De===void 0&&(C.addEventListener("dispose",we),De=new Map,$.programs=De);let Ue=De.get(be);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===me)return bc(C,xe),Ue}else xe.uniforms=ne.getUniforms(C),C.onBeforeCompile(xe,_),Ue=ne.acquireProgram(xe,be),De.set(be,Ue),$.uniforms=xe.uniforms;const Ce=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ce.clippingPlanes=ke.uniform),bc(C,xe),$.needsLights=nh(C),$.lightsStateVersion=me,$.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMap.value=G.state.directionalShadowMap,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotShadowMap.value=G.state.spotShadowMap,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMap.value=G.state.pointShadowMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Ue,$.uniformsList=null,Ue}function xc(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=ga.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function bc(C,k){const X=Re.get(C);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function eh(C,k,X,$,G){k.isScene!==!0&&(k=le),Be.resetTextureUnits();const ce=k.fog,me=$.isMeshStandardMaterial?k.environment:null,xe=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xn,be=($.isMeshStandardMaterial?w:L).get($.envMap||me),De=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let ot=Gn;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ot=_.toneMapping);const It=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ye=It!==void 0?It.length:0,Te=Re.get($),xt=m.state.lights;if(z===!0&&(V===!0||C!==E)){const zt=C===E&&$.id===R;ke.setState($,C,zt)}let Ke=!1;$.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==xt.state.version||Te.outputColorSpace!==xe||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==be||$.fog===!0&&Te.fog!==ce||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ke.numPlanes||Te.numIntersection!==ke.numIntersection)||Te.vertexAlphas!==De||Te.vertexTangents!==Ue||Te.morphTargets!==Ce||Te.morphNormals!==qe||Te.morphColors!==at||Te.toneMapping!==ot||Te.morphTargetsCount!==Ye)&&(Ke=!0):(Ke=!0,Te.__version=$.version);let jt=Te.currentProgram;Ke===!0&&(jt=Dr($,k,G));let pi=!1,Ot=!1,ja=!1;const lt=jt.getUniforms(),In=Te.uniforms;if(_e.useProgram(jt.program)&&(pi=!0,Ot=!0,ja=!0),$.id!==R&&(R=$.id,Ot=!0),pi||E!==C){lt.setValue(D,"projectionMatrix",C.projectionMatrix),lt.setValue(D,"viewMatrix",C.matrixWorldInverse);const zt=lt.map.cameraPosition;zt!==void 0&&zt.setValue(D,F.setFromMatrixPosition(C.matrixWorld)),Ve.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&lt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Ot=!0,ja=!0)}if(G.isSkinnedMesh){lt.setOptional(D,G,"bindMatrix"),lt.setOptional(D,G,"bindMatrixInverse");const zt=G.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),lt.setValue(D,"boneTexture",zt.boneTexture,Be))}G.isBatchedMesh&&(lt.setOptional(D,G,"batchingTexture"),lt.setValue(D,"batchingTexture",G._matricesTexture,Be),lt.setOptional(D,G,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",G._indirectTexture,Be),lt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",G._colorsTexture,Be));const Xa=X.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0)&&Ge.update(G,X,jt),(Ot||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,lt.setValue(D,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(In.envMap.value=be,In.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(In.envMapIntensity.value=k.environmentIntensity),Ot&&(lt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&th(In,ja),ce&&$.fog===!0&&Ae.refreshFogUniforms(In,ce),Ae.refreshMaterialUniforms(In,$,Q,U,m.state.transmissionRenderTarget[C.id]),ga.upload(D,xc(Te),In,Be)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ga.upload(D,xc(Te),In,Be),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&lt.setValue(D,"center",G.center),lt.setValue(D,"modelViewMatrix",G.modelViewMatrix),lt.setValue(D,"normalMatrix",G.normalMatrix),lt.setValue(D,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const zt=$.uniformsGroups;for(let $a=0,ih=zt.length;$a<ih;$a++){const Mc=zt[$a];nt.update(Mc,jt),nt.bind(Mc,jt)}}return jt}function th(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function nh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,k,X){Re.get(C.texture).__webglTexture=k,Re.get(C.depthTexture).__webglTexture=X;const $=Re.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const X=Re.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){A=C,T=k,S=X;let $=!0,G=null,ce=!1,me=!1;if(C){const be=Re.get(C);be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(D.FRAMEBUFFER,null),$=!1):be.__webglFramebuffer===void 0?Be.setupRenderTarget(C):be.__hasExternalTextures&&Be.rebindTextures(C,Re.get(C.texture).__webglTexture,Re.get(C.depthTexture).__webglTexture);const De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(me=!0);const Ue=Re.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?G=Ue[k][X]:G=Ue[k],ce=!0):C.samples>0&&Be.useMultisampledRTT(C)===!1?G=Re.get(C).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[X]:G=Ue,M.copy(C.viewport),P.copy(C.scissor),B=C.scissorTest}else M.copy(K).multiplyScalar(Q).floor(),P.copy(te).multiplyScalar(Q).floor(),B=ue;if(_e.bindFramebuffer(D.FRAMEBUFFER,G)&&$&&_e.drawBuffers(C,G),_e.viewport(M),_e.scissor(P),_e.setScissorTest(B),ce){const be=Re.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,X)}else if(me){const be=Re.get(C.texture),De=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,X||0,De)}R=-1},this.readRenderTargetPixels=function(C,k,X,$,G,ce,me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){_e.bindFramebuffer(D.FRAMEBUFFER,xe);try{const be=C.texture,De=be.format,Ue=be.type;if(!Ve.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-$&&X>=0&&X<=C.height-G&&D.readPixels(k,X,$,G,Oe.convert(De),Oe.convert(Ue),ce)}finally{const be=A!==null?Re.get(A).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(C,k,X,$,G,ce,me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){_e.bindFramebuffer(D.FRAMEBUFFER,xe);try{const be=C.texture,De=be.format,Ue=be.type;if(!Ve.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-$&&X>=0&&X<=C.height-G){const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),D.readPixels(k,X,$,G,Oe.convert(De),Oe.convert(Ue),0),D.flush();const qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Zd(D,qe,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce)}finally{D.deleteBuffer(Ce),D.deleteSync(qe)}return ce}}finally{const be=A!==null?Re.get(A).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,k=null,X=0){C.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const $=Math.pow(2,-X),G=Math.floor(C.image.width*$),ce=Math.floor(C.image.height*$),me=k!==null?k.x:0,xe=k!==null?k.y:0;Be.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,me,xe,G,ce),_e.unbindTexture()},this.copyTextureToTexture=function(C,k,X=null,$=null,G=0){C.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],k=arguments[2],G=arguments[3]||0,X=null);let ce,me,xe,be,De,Ue;X!==null?(ce=X.max.x-X.min.x,me=X.max.y-X.min.y,xe=X.min.x,be=X.min.y):(ce=C.image.width,me=C.image.height,xe=0,be=0),$!==null?(De=$.x,Ue=$.y):(De=0,Ue=0);const Ce=Oe.convert(k.format),qe=Oe.convert(k.type);Be.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),ot=D.getParameter(D.UNPACK_IMAGE_HEIGHT),It=D.getParameter(D.UNPACK_SKIP_PIXELS),Ye=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),xt=C.isCompressedTexture?C.mipmaps[G]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,G,De,Ue,ce,me,Ce,qe,xt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,G,De,Ue,xt.width,xt.height,Ce,xt.data):D.texSubImage2D(D.TEXTURE_2D,G,De,Ue,ce,me,Ce,qe,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),G===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X=null,$=null,G=0){C.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,C=arguments[2],k=arguments[3],G=arguments[4]||0);let ce,me,xe,be,De,Ue,Ce,qe,at;const ot=C.isCompressedTexture?C.mipmaps[G]:C.image;X!==null?(ce=X.max.x-X.min.x,me=X.max.y-X.min.y,xe=X.max.z-X.min.z,be=X.min.x,De=X.min.y,Ue=X.min.z):(ce=ot.width,me=ot.height,xe=ot.depth,be=0,De=0,Ue=0),$!==null?(Ce=$.x,qe=$.y,at=$.z):(Ce=0,qe=0,at=0);const It=Oe.convert(k.format),Ye=Oe.convert(k.type);let Te;if(k.isData3DTexture)Be.setTexture3D(k,0),Te=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Be.setTexture2DArray(k,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const xt=D.getParameter(D.UNPACK_ROW_LENGTH),Ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jt=D.getParameter(D.UNPACK_SKIP_PIXELS),pi=D.getParameter(D.UNPACK_SKIP_ROWS),Ot=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,De),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Te,G,Ce,qe,at,ce,me,xe,It,Ye,ot.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,G,Ce,qe,at,ce,me,xe,It,ot.data):D.texSubImage3D(Te,G,Ce,qe,at,ce,me,xe,It,Ye,ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,pi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot),G===0&&k.generateMipmaps&&D.generateMipmap(Te),_e.unbindTexture()},this.initRenderTarget=function(C){Re.get(C).__webglFramebuffer===void 0&&Be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Be.setTextureCube(C,0):C.isData3DTexture?Be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Be.setTexture2DArray(C,0):Be.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){T=0,S=0,A=null,_e.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ys?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Oa?"display-p3":"srgb"}}class o0 extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cf extends Yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wa=new N,Ta=new N,Al=new et,or=new Ua,ta=new Na,Mo=new N,Cl=new N;class s0 extends bt{constructor(e=new Bt,t=new cf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)wa.fromBufferAttribute(t,r-1),Ta.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=wa.distanceTo(Ta);e.setAttribute("lineDistance",new pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),ta.radius+=a,e.ray.intersectsSphere(ta)===!1)return;Al.copy(r).invert(),or.copy(e.ray).applyMatrix4(Al);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const h=u.getX(v),b=u.getX(v+1),_=na(this,e,or,c,h,b);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=na(this,e,or,c,v,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const h=na(this,e,or,c,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=na(this,e,or,c,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function na(n,e,t,i,r,a){const o=n.geometry.attributes.position;if(wa.fromBufferAttribute(o,r),Ta.fromBufferAttribute(o,a),t.distanceSqToSegment(wa,Ta,Mo,Cl)>i)return;Mo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Mo);if(!(c<e.near||c>e.far))return{distance:c,point:Cl.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let o;t?o=t:o=e*i[a-1];let s=0,c=a-1,l;for(;s<=c;)if(r=Math.floor(s+(c-s)/2),l=i[r]-o,l<0)s=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(a-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),c=t||(o.isVector2?new fe:new N);return c.copy(s).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,r=[],a=[],o=[],s=new N,c=new et;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new N)}a[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),o[p]=o[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(_t(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(s,g))}o[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(_t(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lf extends Ln{constructor(e=0,t=0,i=1,r=1,a=0,o=Math.PI*2,s=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=c}getPoint(e,t=new fe){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*f+this.aX,l=d*f+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c0 extends lf{constructor(e,t,i,r,a,o){super(e,t,i,i,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nc(){let n=0,e=0,t=0,i=0;function r(a,o,s,c){n=a,e=s,t=-3*a+3*o-2*s-c,i=2*a-2*o+s+c}return{initCatmullRom:function(a,o,s,c,l){r(o,s,l*(s-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,s,c,l,u,f){let d=(o-a)/l-(s-a)/(l+u)+(s-o)/u,p=(s-o)/u-(c-o)/(u+f)+(c-s)/f;d*=u,p*=u,r(o,s,d,p)},calc:function(a){const o=a*a,s=o*a;return n+e*a+t*o+i*s}}}const ia=new N,So=new nc,Eo=new nc,wo=new nc;class l0 extends Ln{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){const i=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:c===0&&s===a-1&&(s=a-2,c=1);let l,u;this.closed||s>0?l=r[(s-1)%a]:(ia.subVectors(r[0],r[1]).add(r[0]),l=ia);const f=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(ia.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),So.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,v,m),Eo.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,v,m),wo.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(So.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Eo.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),wo.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return i.set(So.calc(c),Eo.calc(c),wo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rl(n,e,t,i,r){const a=(i-e)*.5,o=(r-t)*.5,s=n*n,c=n*s;return(2*t-2*i+a+o)*c+(-3*t+3*i-2*a-o)*s+a*n+t}function u0(n,e){const t=1-n;return t*t*e}function f0(n,e){return 2*(1-n)*n*e}function h0(n,e){return n*n*e}function xr(n,e,t,i){return u0(n,e)+f0(n,t)+h0(n,i)}function d0(n,e){const t=1-n;return t*t*t*e}function p0(n,e){const t=1-n;return 3*t*t*n*e}function m0(n,e){return 3*(1-n)*n*n*e}function g0(n,e){return n*n*n*e}function br(n,e,t,i,r){return d0(n,e)+p0(n,t)+m0(n,i)+g0(n,r)}class v0 extends Ln{constructor(e=new fe,t=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new fe){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(br(e,r.x,a.x,o.x,s.x),br(e,r.y,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uf extends Ln{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(br(e,r.x,a.x,o.x,s.x),br(e,r.y,a.y,o.y,s.y),br(e,r.z,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _0 extends Ln{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y0 extends Ln{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x0 extends Ln{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(xr(e,r.x,a.x,o.x),xr(e,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ic extends Ln{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(xr(e,r.x,a.x,o.x),xr(e,r.y,a.y,o.y),xr(e,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b0 extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Rl(s,c.x,l.x,u.x,f.x),Rl(s,c.y,l.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var M0=Object.freeze({__proto__:null,ArcCurve:c0,CatmullRomCurve3:l0,CubicBezierCurve:v0,CubicBezierCurve3:uf,EllipseCurve:lf,LineCurve:_0,LineCurve3:y0,QuadraticBezierCurve:x0,QuadraticBezierCurve3:ic,SplineCurve:b0});class ka extends Bt{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};const l=this;r=Math.floor(r),a=Math.floor(a);const u=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;b(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(p,2));function b(){const y=new N,T=new N;let S=0;const A=(t-e)/i;for(let R=0;R<=a;R++){const E=[],M=R/a,P=M*(t-e)+e;for(let B=0;B<=r;B++){const H=B/r,I=H*c+s,O=Math.sin(I),U=Math.cos(I);T.x=P*O,T.y=-M*i+m,T.z=P*U,f.push(T.x,T.y,T.z),y.set(O,A,U).normalize(),d.push(y.x,y.y,y.z),p.push(H,1-M),E.push(g++)}v.push(E)}for(let R=0;R<r;R++)for(let E=0;E<a;E++){const M=v[E][R],P=v[E+1][R],B=v[E+1][R+1],H=v[E][R+1];u.push(M,P,H),u.push(P,B,H),S+=6}l.addGroup(h,S,0),h+=S}function _(y){const T=g,S=new fe,A=new N;let R=0;const E=y===!0?e:t,M=y===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let B=0;B<=r;B++){const I=B/r*c+s,O=Math.cos(I),U=Math.sin(I);A.x=E*U,A.y=m*M,A.z=E*O,f.push(A.x,A.y,A.z),d.push(0,M,0),S.x=O*.5+.5,S.y=U*.5*M+.5,p.push(S.x,S.y),g++}for(let B=0;B<r;B++){const H=T+B,I=P+B;y===!0?u.push(I,I+1,H):u.push(I+1,I,H),R+=3}l.addGroup(h,R,y===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rc extends ka{constructor(e=1,t=1,i=32,r=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,i,r,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new rc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends Bt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+s,Math.PI);let l=0;const u=[],f=new N,d=new N,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const b=[],_=h/i;let y=0;h===0&&o===0?y=.5/t:h===i&&c===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const S=T/t;f.x=-e*Math.cos(r+S*a)*Math.sin(o+_*s),f.y=e*Math.cos(o+_*s),f.z=e*Math.sin(r+S*a)*Math.sin(o+_*s),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(S+y,1-_),b.push(l++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<t;b++){const _=u[h][b+1],y=u[h][b],T=u[h+1][b],S=u[h+1][b+1];(h!==0||o>0)&&p.push(_,y,S),(h!==i-1||c<Math.PI)&&p.push(y,T,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ac extends Bt{constructor(e=new ic(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new N,c=new N,l=new fe;let u=new N;const f=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(p,2));function v(){for(let _=0;_<t;_++)m(_);m(a===!1?t:0),b(),h()}function m(_){u=e.getPointAt(_/t,u);const y=o.normals[_],T=o.binormals[_];for(let S=0;S<=r;S++){const A=S/r*Math.PI*2,R=Math.sin(A),E=-Math.cos(A);c.x=E*y.x+R*T.x,c.y=E*y.y+R*T.y,c.z=E*y.z+R*T.z,c.normalize(),d.push(c.x,c.y,c.z),s.x=u.x+i*c.x,s.y=u.y+i*c.y,s.z=u.z+i*c.z,f.push(s.x,s.y,s.z)}}function h(){for(let _=1;_<=t;_++)for(let y=1;y<=r;y++){const T=(r+1)*(_-1)+(y-1),S=(r+1)*_+(y-1),A=(r+1)*_+y,R=(r+1)*(_-1)+y;g.push(T,S,R),g.push(S,A,R)}}function b(){for(let _=0;_<=t;_++)for(let y=0;y<=r;y++)l.x=_/t,l.y=y/r,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ac(new M0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class S0 extends Yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Pl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class E0{constructor(e,t,i){const r=this;let a=!1,o=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const w0=new E0;class oc{constructor(e){this.manager=e!==void 0?e:w0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oc.DEFAULT_MATERIAL_NAME="__DEFAULT";class T0 extends oc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=Pl.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=wr("img");function c(){u(),Pl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class A0 extends oc{constructor(e){super(e)}load(e,t,i,r){const a=new Rt,o=new T0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class ff extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const To=new et,Ll=new N,Dl=new N;class C0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ll),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class R0 extends C0{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P0 extends ff{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new R0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class L0 extends ff{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Il();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Il(){return(typeof performance>"u"?Date:performance).now()}const Ol=new et;class df{constructor(e,t,i=0,r=1/0){this.ray=new Ua(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(e,t=!0,i=[]){return Es(e,this,i,t),i.sort(Nl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Es(e[r],this,i,t);return i.sort(Nl),i}}function Nl(n,e){return n.distance-e.distance}function Es(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let o=0,s=a.length;o<s;o++)Es(a[o],e,t,!0)}}class ws{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);const Ii=new Mn,zn=new df,_n=new fe,Ul=new N,Ao=new fe,ra=new fe,aa=new N,Co=new N,Fl=new et,Bl=new N,kl=new N;class D0 extends rn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,a=null;const o=[];this.mode="translate",this.rotateSpeed=1;const s=this;function c(){i.addEventListener("pointermove",g),i.addEventListener("pointerdown",v),i.addEventListener("pointerup",m),i.addEventListener("pointerleave",m)}function l(){i.removeEventListener("pointermove",g),i.removeEventListener("pointerdown",v),i.removeEventListener("pointerup",m),i.removeEventListener("pointerleave",m),i.style.cursor=""}function u(){l()}function f(){return e}function d(_){e=_}function p(){return zn}function g(_){if(s.enabled!==!1){if(h(_),zn.setFromCamera(_n,t),r)s.mode==="translate"?zn.ray.intersectPlane(Ii,aa)&&r.position.copy(aa.sub(Ul).applyMatrix4(Fl)):s.mode==="rotate"&&(Ao.subVectors(_n,ra).multiplyScalar(s.rotateSpeed),r.rotateOnWorldAxis(Bl,Ao.x),r.rotateOnWorldAxis(kl.normalize(),-Ao.y)),s.dispatchEvent({type:"drag",object:r}),ra.copy(_n);else if(_.pointerType==="mouse"||_.pointerType==="pen")if(o.length=0,zn.setFromCamera(_n,t),zn.intersectObjects(e,s.recursive,o),o.length>0){const y=o[0].object;Ii.setFromNormalAndCoplanarPoint(t.getWorldDirection(Ii.normal),Co.setFromMatrixPosition(y.matrixWorld)),a!==y&&a!==null&&(s.dispatchEvent({type:"hoveroff",object:a}),i.style.cursor="auto",a=null),a!==y&&(s.dispatchEvent({type:"hoveron",object:y}),i.style.cursor="pointer",a=y)}else a!==null&&(s.dispatchEvent({type:"hoveroff",object:a}),i.style.cursor="auto",a=null);ra.copy(_n)}}function v(_){s.enabled!==!1&&(h(_),o.length=0,zn.setFromCamera(_n,t),zn.intersectObjects(e,s.recursive,o),o.length>0&&(s.transformGroup===!0?r=b(o[0].object):r=o[0].object,Ii.setFromNormalAndCoplanarPoint(t.getWorldDirection(Ii.normal),Co.setFromMatrixPosition(r.matrixWorld)),zn.ray.intersectPlane(Ii,aa)&&(s.mode==="translate"?(Fl.copy(r.parent.matrixWorld).invert(),Ul.copy(aa).sub(Co.setFromMatrixPosition(r.matrixWorld))):s.mode==="rotate"&&(Bl.set(0,1,0).applyQuaternion(t.quaternion).normalize(),kl.set(1,0,0).applyQuaternion(t.quaternion).normalize())),i.style.cursor="move",s.dispatchEvent({type:"dragstart",object:r})),ra.copy(_n))}function m(){s.enabled!==!1&&(r&&(s.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=a?"pointer":"auto")}function h(_){const y=i.getBoundingClientRect();_n.x=(_.clientX-y.left)/y.width*2-1,_n.y=-(_.clientY-y.top)/y.height*2+1}function b(_,y=null){return _.isGroup&&(y=_),_.parent===null?y:b(_.parent,y)}c(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=c,this.deactivate=l,this.dispose=u,this.getObjects=f,this.getRaycaster=p,this.setObjects=d}}function I0(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var o,s=i.length,c,l=0,u=0,f=0;for(o=0;o<s;++o)c=i[o],l+=c.x||0,u+=c.y||0,f+=c.z||0;for(l=(l/s-n)*r,u=(u/s-e)*r,f=(f/s-t)*r,o=0;o<s;++o)c=i[o],l&&(c.x-=l),u&&(c.y-=u),f&&(c.z-=f)}return a.initialize=function(o){i=o},a.x=function(o){return arguments.length?(n=+o,a):n},a.y=function(o){return arguments.length?(e=+o,a):e},a.z=function(o){return arguments.length?(t=+o,a):t},a.strength=function(o){return arguments.length?(r=+o,a):r},a}function O0(n){const e=+this._x.call(null,n);return pf(this.cover(e),e,n)}function pf(n,e,t){if(isNaN(e))return n;var i,r=n._root,a={data:t},o=n._x0,s=n._x1,c,l,u,f,d;if(!r)return n._root=a,n;for(;r.length;)if((u=e>=(c=(o+s)/2))?o=c:s=c,i=r,!(r=r[f=+u]))return i[f]=a,n;if(l=+n._x.call(null,r.data),e===l)return a.next=r,i?i[f]=a:n._root=a,n;do i=i?i[f]=new Array(2):n._root=new Array(2),(u=e>=(c=(o+s)/2))?o=c:s=c;while((f=+u)==(d=+(l>=c)));return i[d]=r,i[f]=a,n}function N0(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let a=0,o;a<e;++a)isNaN(o=+this._x.call(null,n[a]))||(t[a]=o,o<i&&(i=o),o>r&&(r=o));if(i>r)return this;this.cover(i).cover(r);for(let a=0;a<e;++a)pf(this,t[a],n[a]);return this}function U0(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,a,o;e>n||n>=t;)switch(o=+(n<e),a=new Array(2),a[o]=r,r=a,i*=2,o){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function F0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function B0(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Rn(n,e,t){this.node=n,this.x0=e,this.x1=t}function k0(n,e){var t,i=this._x0,r,a,o=this._x1,s=[],c=this._root,l,u;for(c&&s.push(new Rn(c,i,o)),e==null?e=1/0:(i=n-e,o=n+e);l=s.pop();)if(!(!(c=l.node)||(r=l.x0)>o||(a=l.x1)<i))if(c.length){var f=(r+a)/2;s.push(new Rn(c[1],f,a),new Rn(c[0],r,f)),(u=+(n>=f))&&(l=s[s.length-1],s[s.length-1]=s[s.length-1-u],s[s.length-1-u]=l)}else{var d=Math.abs(n-+this._x.call(null,c.data));d<e&&(e=d,i=n-d,o=n+d,t=c.data)}return t}function z0(n){if(isNaN(c=+this._x.call(null,n)))return this;var e,t=this._root,i,r,a,o=this._x0,s=this._x1,c,l,u,f,d;if(!t)return this;if(t.length)for(;;){if((u=c>=(l=(o+s)/2))?o=l:s=l,e=t,!(t=t[f=+u]))return this;if(!t.length)break;e[f+1&1]&&(i=e,d=f)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[f]=a:delete e[f],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=a,this)}function H0(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function V0(){return this._root}function G0(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function W0(n){var e=[],t,i=this._root,r,a,o;for(i&&e.push(new Rn(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,a=t.x0,o=t.x1)&&i.length){var s=(a+o)/2;(r=i[1])&&e.push(new Rn(r,s,o)),(r=i[0])&&e.push(new Rn(r,a,s))}return this}function j0(n){var e=[],t=[],i;for(this._root&&e.push(new Rn(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.x1,c=(o+s)/2;(a=r[0])&&e.push(new Rn(a,o,c)),(a=r[1])&&e.push(new Rn(a,c,s))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function X0(n){return n[0]}function $0(n){return arguments.length?(this._x=n,this):this._x}function mf(n,e){var t=new sc(e??X0,NaN,NaN);return n==null?t:t.addAll(n)}function sc(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function zl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Dt=mf.prototype=sc.prototype;Dt.copy=function(){var n=new sc(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=zl(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=zl(i));return n};Dt.add=O0;Dt.addAll=N0;Dt.cover=U0;Dt.data=F0;Dt.extent=B0;Dt.find=k0;Dt.remove=z0;Dt.removeAll=H0;Dt.root=V0;Dt.size=G0;Dt.visit=W0;Dt.visitAfter=j0;Dt.x=$0;function q0(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return gf(this.cover(e,t,i),e,t,i,n)}function gf(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var a,o=n._root,s={data:r},c=n._x0,l=n._y0,u=n._z0,f=n._x1,d=n._y1,p=n._z1,g,v,m,h,b,_,y,T,S,A,R;if(!o)return n._root=s,n;for(;o.length;)if((y=e>=(g=(c+f)/2))?c=g:f=g,(T=t>=(v=(l+d)/2))?l=v:d=v,(S=i>=(m=(u+p)/2))?u=m:p=m,a=o,!(o=o[A=S<<2|T<<1|y]))return a[A]=s,n;if(h=+n._x.call(null,o.data),b=+n._y.call(null,o.data),_=+n._z.call(null,o.data),e===h&&t===b&&i===_)return s.next=o,a?a[A]=s:n._root=s,n;do a=a?a[A]=new Array(8):n._root=new Array(8),(y=e>=(g=(c+f)/2))?c=g:f=g,(T=t>=(v=(l+d)/2))?l=v:d=v,(S=i>=(m=(u+p)/2))?u=m:p=m;while((A=S<<2|T<<1|y)===(R=(_>=m)<<2|(b>=v)<<1|h>=g));return a[R]=o,a[A]=s,n}function Y0(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0;for(let f=0,d,p,g,v;f<e;++f)isNaN(p=+this._x.call(null,d=n[f]))||isNaN(g=+this._y.call(null,d))||isNaN(v=+this._z.call(null,d))||(t[f]=p,i[f]=g,r[f]=v,p<a&&(a=p),p>c&&(c=p),g<o&&(o=g),g>l&&(l=g),v<s&&(s=v),v>u&&(u=v));if(a>c||o>l||s>u)return this;this.cover(a,o,s).cover(c,l,u);for(let f=0;f<e;++f)gf(this,t[f],i[f],r[f],n[f]);return this}function K0(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,a=this._z0,o=this._x1,s=this._y1,c=this._z1;if(isNaN(i))o=(i=Math.floor(n))+1,s=(r=Math.floor(e))+1,c=(a=Math.floor(t))+1;else{for(var l=o-i||1,u=this._root,f,d;i>n||n>=o||r>e||e>=s||a>t||t>=c;)switch(d=(t<a)<<2|(e<r)<<1|n<i,f=new Array(8),f[d]=u,u=f,l*=2,d){case 0:o=i+l,s=r+l,c=a+l;break;case 1:i=o-l,s=r+l,c=a+l;break;case 2:o=i+l,r=s-l,c=a+l;break;case 3:i=o-l,r=s-l,c=a+l;break;case 4:o=i+l,s=r+l,a=c-l;break;case 5:i=o-l,s=r+l,a=c-l;break;case 6:o=i+l,r=s-l,a=c-l;break;case 7:i=o-l,r=s-l,a=c-l;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=a,this._x1=o,this._y1=s,this._z1=c,this}function Z0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function J0(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Qe(n,e,t,i,r,a,o){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=a,this.z1=o}function Q0(n,e,t,i){var r,a=this._x0,o=this._y0,s=this._z0,c,l,u,f,d,p,g=this._x1,v=this._y1,m=this._z1,h=[],b=this._root,_,y;for(b&&h.push(new Qe(b,a,o,s,g,v,m)),i==null?i=1/0:(a=n-i,o=e-i,s=t-i,g=n+i,v=e+i,m=t+i,i*=i);_=h.pop();)if(!(!(b=_.node)||(c=_.x0)>g||(l=_.y0)>v||(u=_.z0)>m||(f=_.x1)<a||(d=_.y1)<o||(p=_.z1)<s))if(b.length){var T=(c+f)/2,S=(l+d)/2,A=(u+p)/2;h.push(new Qe(b[7],T,S,A,f,d,p),new Qe(b[6],c,S,A,T,d,p),new Qe(b[5],T,l,A,f,S,p),new Qe(b[4],c,l,A,T,S,p),new Qe(b[3],T,S,u,f,d,A),new Qe(b[2],c,S,u,T,d,A),new Qe(b[1],T,l,u,f,S,A),new Qe(b[0],c,l,u,T,S,A)),(y=(t>=A)<<2|(e>=S)<<1|n>=T)&&(_=h[h.length-1],h[h.length-1]=h[h.length-1-y],h[h.length-1-y]=_)}else{var R=n-+this._x.call(null,b.data),E=e-+this._y.call(null,b.data),M=t-+this._z.call(null,b.data),P=R*R+E*E+M*M;if(P<i){var B=Math.sqrt(i=P);a=n-B,o=e-B,s=t-B,g=n+B,v=e+B,m=t+B,r=b.data}}return r}function ey(n){if(isNaN(d=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,a,o=this._x0,s=this._y0,c=this._z0,l=this._x1,u=this._y1,f=this._z1,d,p,g,v,m,h,b,_,y,T,S;if(!t)return this;if(t.length)for(;;){if((b=d>=(v=(o+l)/2))?o=v:l=v,(_=p>=(m=(s+u)/2))?s=m:u=m,(y=g>=(h=(c+f)/2))?c=h:f=h,e=t,!(t=t[T=y<<2|_<<1|b]))return this;if(!t.length)break;(e[T+1&7]||e[T+2&7]||e[T+3&7]||e[T+4&7]||e[T+5&7]||e[T+6&7]||e[T+7&7])&&(i=e,S=T)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[T]=a:delete e[T],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[S]=t:this._root=t),this):(this._root=a,this)}function ty(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function ny(){return this._root}function iy(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function ry(n){var e=[],t,i=this._root,r,a,o,s,c,l,u;for(i&&e.push(new Qe(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,a=t.x0,o=t.y0,s=t.z0,c=t.x1,l=t.y1,u=t.z1)&&i.length){var f=(a+c)/2,d=(o+l)/2,p=(s+u)/2;(r=i[7])&&e.push(new Qe(r,f,d,p,c,l,u)),(r=i[6])&&e.push(new Qe(r,a,d,p,f,l,u)),(r=i[5])&&e.push(new Qe(r,f,o,p,c,d,u)),(r=i[4])&&e.push(new Qe(r,a,o,p,f,d,u)),(r=i[3])&&e.push(new Qe(r,f,d,s,c,l,p)),(r=i[2])&&e.push(new Qe(r,a,d,s,f,l,p)),(r=i[1])&&e.push(new Qe(r,f,o,s,c,d,p)),(r=i[0])&&e.push(new Qe(r,a,o,s,f,d,p))}return this}function ay(n){var e=[],t=[],i;for(this._root&&e.push(new Qe(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.y0,c=i.z0,l=i.x1,u=i.y1,f=i.z1,d=(o+l)/2,p=(s+u)/2,g=(c+f)/2;(a=r[0])&&e.push(new Qe(a,o,s,c,d,p,g)),(a=r[1])&&e.push(new Qe(a,d,s,c,l,p,g)),(a=r[2])&&e.push(new Qe(a,o,p,c,d,u,g)),(a=r[3])&&e.push(new Qe(a,d,p,c,l,u,g)),(a=r[4])&&e.push(new Qe(a,o,s,g,d,p,f)),(a=r[5])&&e.push(new Qe(a,d,s,g,l,p,f)),(a=r[6])&&e.push(new Qe(a,o,p,g,d,u,f)),(a=r[7])&&e.push(new Qe(a,d,p,g,l,u,f))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function oy(n){return n[0]}function sy(n){return arguments.length?(this._x=n,this):this._x}function cy(n){return n[1]}function ly(n){return arguments.length?(this._y=n,this):this._y}function uy(n){return n[2]}function fy(n){return arguments.length?(this._z=n,this):this._z}function vf(n,e,t,i){var r=new cc(e??oy,t??cy,i??uy,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function cc(n,e,t,i,r,a,o,s,c){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=a,this._x1=o,this._y1=s,this._z1=c,this._root=void 0}function Hl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Et=vf.prototype=cc.prototype;Et.copy=function(){var n=new cc(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Hl(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=Hl(i));return n};Et.add=q0;Et.addAll=Y0;Et.cover=K0;Et.data=Z0;Et.extent=J0;Et.find=Q0;Et.remove=ey;Et.removeAll=ty;Et.root=ny;Et.size=iy;Et.visit=ry;Et.visitAfter=ay;Et.x=sy;Et.y=ly;Et.z=fy;function An(n){return function(){return n}}function Sn(n){return(n()-.5)*1e-6}function hy(n){return n.index}function Vl(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function dy(n){var e=hy,t=d,i,r=An(30),a,o,s,c,l,u,f=1;n==null&&(n=[]);function d(h){return 1/Math.min(c[h.source.index],c[h.target.index])}function p(h){for(var b=0,_=n.length;b<f;++b)for(var y=0,T,S,A,R=0,E=0,M=0,P,B;y<_;++y)T=n[y],S=T.source,A=T.target,R=A.x+A.vx-S.x-S.vx||Sn(u),s>1&&(E=A.y+A.vy-S.y-S.vy||Sn(u)),s>2&&(M=A.z+A.vz-S.z-S.vz||Sn(u)),P=Math.sqrt(R*R+E*E+M*M),P=(P-a[y])/P*h*i[y],R*=P,E*=P,M*=P,A.vx-=R*(B=l[y]),s>1&&(A.vy-=E*B),s>2&&(A.vz-=M*B),S.vx+=R*(B=1-B),s>1&&(S.vy+=E*B),s>2&&(S.vz+=M*B)}function g(){if(o){var h,b=o.length,_=n.length,y=new Map(o.map((S,A)=>[e(S,A,o),S])),T;for(h=0,c=new Array(b);h<_;++h)T=n[h],T.index=h,typeof T.source!="object"&&(T.source=Vl(y,T.source)),typeof T.target!="object"&&(T.target=Vl(y,T.target)),c[T.source.index]=(c[T.source.index]||0)+1,c[T.target.index]=(c[T.target.index]||0)+1;for(h=0,l=new Array(_);h<_;++h)T=n[h],l[h]=c[T.source.index]/(c[T.source.index]+c[T.target.index]);i=new Array(_),v(),a=new Array(_),m()}}function v(){if(o)for(var h=0,b=n.length;h<b;++h)i[h]=+t(n[h],h,n)}function m(){if(o)for(var h=0,b=n.length;h<b;++h)a[h]=+r(n[h],h,n)}return p.initialize=function(h,...b){o=h,u=b.find(_=>typeof _=="function")||Math.random,s=b.find(_=>[1,2,3].includes(_))||2,g()},p.links=function(h){return arguments.length?(n=h,g(),p):n},p.id=function(h){return arguments.length?(e=h,p):e},p.iterations=function(h){return arguments.length?(f=+h,p):f},p.strength=function(h){return arguments.length?(t=typeof h=="function"?h:An(+h),v(),p):t},p.distance=function(h){return arguments.length?(r=typeof h=="function"?h:An(+h),m(),p):r},p}const py=1664525,my=1013904223,Gl=4294967296;function gy(){let n=1;return()=>(n=(py*n+my)%Gl)/Gl}var Wl=3;function Ro(n){return n.x}function jl(n){return n.y}function vy(n){return n.z}var _y=10,yy=Math.PI*(3-Math.sqrt(5)),xy=Math.PI*20/(9+Math.sqrt(221));function by(n,e){e=e||2;var t=Math.min(Wl,Math.max(1,Math.round(e))),i,r=1,a=.001,o=1-Math.pow(a,1/300),s=0,c=.6,l=new Map,u=Au(p),f=Su("tick","end"),d=gy();n==null&&(n=[]);function p(){g(),f.call("tick",i),r<a&&(u.stop(),f.call("end",i))}function g(h){var b,_=n.length,y;h===void 0&&(h=1);for(var T=0;T<h;++T)for(r+=(s-r)*o,l.forEach(function(S){S(r)}),b=0;b<_;++b)y=n[b],y.fx==null?y.x+=y.vx*=c:(y.x=y.fx,y.vx=0),t>1&&(y.fy==null?y.y+=y.vy*=c:(y.y=y.fy,y.vy=0)),t>2&&(y.fz==null?y.z+=y.vz*=c:(y.z=y.fz,y.vz=0));return i}function v(){for(var h=0,b=n.length,_;h<b;++h){if(_=n[h],_.index=h,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||t>1&&isNaN(_.y)||t>2&&isNaN(_.z)){var y=_y*(t>2?Math.cbrt(.5+h):t>1?Math.sqrt(.5+h):h),T=h*yy,S=h*xy;t===1?_.x=y:t===2?(_.x=y*Math.cos(T),_.y=y*Math.sin(T)):(_.x=y*Math.sin(T)*Math.cos(S),_.y=y*Math.cos(T),_.z=y*Math.sin(T)*Math.sin(S))}(isNaN(_.vx)||t>1&&isNaN(_.vy)||t>2&&isNaN(_.vz))&&(_.vx=0,t>1&&(_.vy=0),t>2&&(_.vz=0))}}function m(h){return h.initialize&&h.initialize(n,d,t),h}return v(),i={tick:g,restart:function(){return u.restart(p),i},stop:function(){return u.stop(),i},numDimensions:function(h){return arguments.length?(t=Math.min(Wl,Math.max(1,Math.round(h))),l.forEach(m),i):t},nodes:function(h){return arguments.length?(n=h,v(),l.forEach(m),i):n},alpha:function(h){return arguments.length?(r=+h,i):r},alphaMin:function(h){return arguments.length?(a=+h,i):a},alphaDecay:function(h){return arguments.length?(o=+h,i):+o},alphaTarget:function(h){return arguments.length?(s=+h,i):s},velocityDecay:function(h){return arguments.length?(c=1-h,i):1-c},randomSource:function(h){return arguments.length?(d=h,l.forEach(m),i):d},force:function(h,b){return arguments.length>1?(b==null?l.delete(h):l.set(h,m(b)),i):l.get(h)},find:function(){var h=Array.prototype.slice.call(arguments),b=h.shift()||0,_=(t>1?h.shift():null)||0,y=(t>2?h.shift():null)||0,T=h.shift()||1/0,S=0,A=n.length,R,E,M,P,B,H;for(T*=T,S=0;S<A;++S)B=n[S],R=b-B.x,E=_-(B.y||0),M=y-(B.z||0),P=R*R+E*E+M*M,P<T&&(H=B,T=P);return H},on:function(h,b){return arguments.length>1?(f.on(h,b),i):f.on(h)}}}function My(){var n,e,t,i,r,a=An(-30),o,s=1,c=1/0,l=.81;function u(g){var v,m=n.length,h=(e===1?mf(n,Ro):e===2?Ru(n,Ro,jl):e===3?vf(n,Ro,jl,vy):null).visitAfter(d);for(r=g,v=0;v<m;++v)t=n[v],h.visit(p)}function f(){if(n){var g,v=n.length,m;for(o=new Array(v),g=0;g<v;++g)m=n[g],o[m.index]=+a(m,g,n)}}function d(g){var v=0,m,h,b=0,_,y,T,S,A=g.length;if(A){for(_=y=T=S=0;S<A;++S)(m=g[S])&&(h=Math.abs(m.value))&&(v+=m.value,b+=h,_+=h*(m.x||0),y+=h*(m.y||0),T+=h*(m.z||0));v*=Math.sqrt(4/A),g.x=_/b,e>1&&(g.y=y/b),e>2&&(g.z=T/b)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do v+=o[m.data.index];while(m=m.next)}g.value=v}function p(g,v,m,h,b){if(!g.value)return!0;var _=[m,h,b][e-1],y=g.x-t.x,T=e>1?g.y-t.y:0,S=e>2?g.z-t.z:0,A=_-v,R=y*y+T*T+S*S;if(A*A/l<R)return R<c&&(y===0&&(y=Sn(i),R+=y*y),e>1&&T===0&&(T=Sn(i),R+=T*T),e>2&&S===0&&(S=Sn(i),R+=S*S),R<s&&(R=Math.sqrt(s*R)),t.vx+=y*g.value*r/R,e>1&&(t.vy+=T*g.value*r/R),e>2&&(t.vz+=S*g.value*r/R)),!0;if(g.length||R>=c)return;(g.data!==t||g.next)&&(y===0&&(y=Sn(i),R+=y*y),e>1&&T===0&&(T=Sn(i),R+=T*T),e>2&&S===0&&(S=Sn(i),R+=S*S),R<s&&(R=Math.sqrt(s*R)));do g.data!==t&&(A=o[g.data.index]*r/R,t.vx+=y*A,e>1&&(t.vy+=T*A),e>2&&(t.vz+=S*A));while(g=g.next)}return u.initialize=function(g,...v){n=g,i=v.find(m=>typeof m=="function")||Math.random,e=v.find(m=>[1,2,3].includes(m))||2,f()},u.strength=function(g){return arguments.length?(a=typeof g=="function"?g:An(+g),f(),u):a},u.distanceMin=function(g){return arguments.length?(s=g*g,u):Math.sqrt(s)},u.distanceMax=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u.theta=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u}function Sy(n,e,t,i){var r,a,o=An(.1),s,c;typeof n!="function"&&(n=An(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function l(f){for(var d=0,p=r.length;d<p;++d){var g=r[d],v=g.x-e||1e-6,m=(g.y||0)-t||1e-6,h=(g.z||0)-i||1e-6,b=Math.sqrt(v*v+m*m+h*h),_=(c[d]-b)*s[d]*f/b;g.vx+=v*_,a>1&&(g.vy+=m*_),a>2&&(g.vz+=h*_)}}function u(){if(r){var f,d=r.length;for(s=new Array(d),c=new Array(d),f=0;f<d;++f)c[f]=+n(r[f],f,r),s[f]=isNaN(c[f])?0:+o(r[f],f,r)}}return l.initialize=function(f,...d){r=f,a=d.find(p=>[1,2,3].includes(p))||2,u()},l.strength=function(f){return arguments.length?(o=typeof f=="function"?f:An(+f),u(),l):o},l.radius=function(f){return arguments.length?(n=typeof f=="function"?f:An(+f),u(),l):n},l.x=function(f){return arguments.length?(e=+f,l):e},l.y=function(f){return arguments.length?(t=+f,l):t},l.z=function(f){return arguments.length?(i=+f,l):i},l}var lc=function(e){wy(e);var t=Ey(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function Ey(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var a=typeof i!="function";if(a)delete e[t];else for(var o=e[t],s=0;s<o.length;++s)o[s].callback===i&&o.splice(s,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var a=0;a<i.length;++a){var o=i[a];o.callback.apply(o.ctx,r)}return n}}}function wy(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var Ty=Cy,Ay=lc;function Cy(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,a=n.multigraph?y:_,o=[],s=U,c=U,l=U,u=U,f={version:20,addNode:v,addLink:b,removeLink:R,removeNode:h,getNode:m,getNodeCount:T,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:T,getLinks:A,forEachNode:se,forEachLinkedNode:H,forEachLink:B,beginUpdate:l,endUpdate:u,clear:P,hasLink:M,hasNode:m,getLink:M};return Ay(f),d(),f;function d(){var K=f.on;f.on=te;function te(){return f.beginUpdate=l=Q,f.endUpdate=u=q,s=p,c=g,f.on=K,K.apply(f,arguments)}}function p(K,te){o.push({link:K,changeType:te})}function g(K,te){o.push({node:K,changeType:te})}function v(K,te){if(K===void 0)throw new Error("Invalid node identifier");l();var ue=m(K);return ue?(ue.data=te,c(ue,"update")):(ue=new Ry(K,te),c(ue,"add")),e.set(K,ue),u(),ue}function m(K){return e.get(K)}function h(K){var te=m(K);if(!te)return!1;l();var ue=te.links;return ue&&(ue.forEach(E),te.links=null),e.delete(K),c(te,"remove"),u(),!0}function b(K,te,ue){l();var Me=m(K)||v(K),z=m(te)||v(te),V=a(K,te,ue),ee=t.has(V.id);return t.set(V.id,V),Xl(Me,V),K!==te&&Xl(z,V),s(V,ee?"update":"add"),u(),V}function _(K,te,ue){var Me=oa(K,te),z=t.get(Me);return z?(z.data=ue,z):new $l(K,te,ue,Me)}function y(K,te,ue){var Me=oa(K,te),z=i.hasOwnProperty(Me);if(z||M(K,te)){z||(i[Me]=0);var V="@"+ ++i[Me];Me=oa(K+V,te+V)}return new $l(K,te,ue,Me)}function T(){return e.size}function S(){return t.size}function A(K){var te=m(K);return te?te.links:null}function R(K,te){return te!==void 0&&(K=M(K,te)),E(K)}function E(K){if(!K||!t.get(K.id))return!1;l(),t.delete(K.id);var te=m(K.fromId),ue=m(K.toId);return te&&te.links.delete(K),ue&&ue.links.delete(K),s(K,"remove"),u(),!0}function M(K,te){if(!(K===void 0||te===void 0))return t.get(oa(K,te))}function P(){l(),se(function(K){h(K.id)}),u()}function B(K){if(typeof K=="function")for(var te=t.values(),ue=te.next();!ue.done;){if(K(ue.value))return!0;ue=te.next()}}function H(K,te,ue){var Me=m(K);if(Me&&Me.links&&typeof te=="function")return ue?O(Me.links,K,te):I(Me.links,K,te)}function I(K,te,ue){for(var Me,z=K.values(),V=z.next();!V.done;){var ee=V.value,F=ee.fromId===te?ee.toId:ee.fromId;if(Me=ue(e.get(F),ee),Me)return!0;V=z.next()}}function O(K,te,ue){for(var Me,z=K.values(),V=z.next();!V.done;){var ee=V.value;if(ee.fromId===te&&(Me=ue(e.get(ee.toId),ee),Me))return!0;V=z.next()}}function U(){}function Q(){r+=1}function q(){r-=1,r===0&&o.length>0&&(f.fire("changed",o),o.length=0)}function se(K){if(typeof K!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+K);for(var te=e.values(),ue=te.next();!ue.done;){if(K(ue.value))return!0;ue=te.next()}}}function Ry(n,e){this.id=n,this.links=null,this.data=e}function Xl(n,e){n.links?n.links.add(e):n.links=new Set([e])}function $l(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function oa(n,e){return n.toString()+"👉 "+e.toString()}const Py=Mu(Ty);var uc={exports:{}},Rr={exports:{}},_f=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const Ly=_f;var Zi=function(e){return t;function t(i,r){let a=r&&r.indent||0,o=r&&r.join!==void 0?r.join:`
`,s=Array(a+1).join(" "),c=[];for(let l=0;l<e;++l){let u=Ly(l),f=l===0?"":s;c.push(f+i.replace(/{var}/g,u))}return c.join(o)}};const yf=Zi;Rr.exports=Dy;Rr.exports.generateCreateBodyFunctionBody=xf;Rr.exports.getVectorCode=Mf;Rr.exports.getBodyCode=bf;function Dy(n,e){let t=xf(n,e),{Body:i}=new Function(t)();return i}function xf(n,e){return`
${Mf(n,e)}
${bf(n)}
return {Body: Body, Vector: Vector};
`}function bf(n){let e=yf(n),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Mf(n,e){let t=yf(n),i="";return e&&(i=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var Iy=Rr.exports,$n={exports:{}};const fc=Zi,Hn=_f;$n.exports=Oy;$n.exports.generateQuadTreeFunctionBody=Sf;$n.exports.getInsertStackCode=Cf;$n.exports.getQuadNodeCode=Af;$n.exports.isSamePosition=Ef;$n.exports.getChildBodyCode=Tf;$n.exports.setChildBodyCode=wf;function Oy(n){let e=Sf(n);return new Function(e)()}function Sf(n){let e=fc(n),t=Math.pow(2,n);return`
${Cf()}
${Af(n)}
${Ef(n)}
${Tf(n)}
${wf(n)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${o("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${Hn(0)} - node.min_${Hn(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${a()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(s){let c=[],l=Array(s+1).join(" ");for(let u=0;u<n;++u)c.push(l+`if (${Hn(u)} > max_${Hn(u)}) {`),c.push(l+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),c.push(l+`  min_${Hn(u)} = max_${Hn(u)};`),c.push(l+`  max_${Hn(u)} = node.max_${Hn(u)};`),c.push(l+"}");return c.join(`
`)}function a(){let s=Array(11).join(" "),c=[];for(let l=0;l<t;++l)c.push(s+`if (node.quad${l}) {`),c.push(s+`  queue[pushIdx] = node.quad${l};`),c.push(s+"  queueLength += 1;"),c.push(s+"  pushIdx += 1;"),c.push(s+"}");return c.join(`
`)}function o(s){let c=[];for(let l=0;l<t;++l)c.push(`${s}quad${l} = null;`);return c.join(`
`)}}function Ef(n){let e=fc(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function wf(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let a=r===0?"  ":"  else ";i.push(`${a}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function Tf(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function Af(n){let e=fc(n),t=Math.pow(2,n);var i=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return i;function r(a){let o=[];for(let s=0;s<t;++s)o.push(`${a}quad${s} = null;`);return o.join(`
`)}}function Cf(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Ny=$n.exports,hc={exports:{}};hc.exports=Fy;hc.exports.generateFunctionBody=Rf;const Uy=Zi;function Fy(n){let e=Rf(n);return new Function("bodies","settings","random",e)}function Rf(n){let e=Uy(n);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var By=hc.exports,dc={exports:{}};const ky=Zi;dc.exports=zy;dc.exports.generateCreateDragForceFunctionBody=Pf;function zy(n){let e=Pf(n);return new Function("options",e)}function Pf(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${ky(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Hy=dc.exports,pc={exports:{}};const Vy=Zi;pc.exports=Gy;pc.exports.generateCreateSpringForceFunctionBody=Lf;function Gy(n){let e=Lf(n);return new Function("options","random",e)}function Lf(n){let e=Vy(n);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var Wy=pc.exports,mc={exports:{}};const jy=Zi;mc.exports=Xy;mc.exports.generateIntegratorFunctionBody=Df;function Xy(n){let e=Df(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Df(n){let e=jy(n);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var $y=mc.exports,Po,ql;function qy(){if(ql)return Po;ql=1,Po=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return Po}var Lo,Yl;function Yy(){if(Yl)return Lo;Yl=1,Lo=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),a=typeof t[i],o=!r||typeof e[i]!==a;o?e[i]=t[i]:a==="object"&&(e[i]=n(e[i],t[i]))}}return e}return Lo}var sr={exports:{}},Kl;function Ky(){if(Kl)return sr.exports;Kl=1,sr.exports=n,sr.exports.random=n,sr.exports.randomIterator=s;function n(c){var l=typeof c=="number"?c:+new Date;return new e(l)}function e(c){this.seed=c}e.prototype.next=o,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var c,l,u;do l=this.nextDouble()*2-1,u=this.nextDouble()*2-1,c=l*l+u*u;while(c>=1||c===0);return l*Math.sqrt(-2*Math.log(c)/c)}e.prototype.levy=i;function i(){var c=1.5,l=Math.pow(r(1+c)*Math.sin(Math.PI*c/2)/(r((1+c)/2)*c*Math.pow(2,(c-1)/2)),1/c);return this.gaussian()*l/Math.pow(Math.abs(this.gaussian()),1/c)}function r(c){return Math.sqrt(2*Math.PI/c)*Math.pow(1/Math.E*(c+1/(12*c-1/(10*c))),c)}function a(){var c=this.seed;return c=c+2127912214+(c<<12)&4294967295,c=(c^3345072700^c>>>19)&4294967295,c=c+374761393+(c<<5)&4294967295,c=(c+3550635116^c<<9)&4294967295,c=c+4251993797+(c<<3)&4294967295,c=(c^3042594569^c>>>16)&4294967295,this.seed=c,(c&268435455)/268435456}function o(c){return Math.floor(this.nextDouble()*c)}function s(c,l){var u=l||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:d,shuffle:f};function f(){var p,g,v;for(p=c.length-1;p>0;--p)g=u.next(p+1),v=c[g],c[g]=c[p],c[p]=v;return c}function d(p){var g,v,m;for(g=c.length-1;g>0;--g)v=u.next(g+1),m=c[v],c[v]=c[g],c[g]=m,p(m);c.length&&p(c[0])}}return sr.exports}var If=ix,Zy=Iy,Jy=Ny,Qy=By,ex=Hy,tx=Wy,nx=$y,Zl={};function ix(n){var e=qy(),t=Yy(),i=lc;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=Zl[n.dimensions];if(!r){var a=n.dimensions;r={Body:Zy(a,n.debug),createQuadTree:Jy(a),createBounds:Qy(a),createDragForce:ex(a),createSpringForce:tx(a),integrate:nx(a)},Zl[a]=r}var o=r.Body,s=r.createQuadTree,c=r.createBounds,l=r.createDragForce,u=r.createSpringForce,f=r.integrate,d=O=>new o(O),p=Ky().random(42),g=[],v=[],m=s(n,p),h=c(g,n,p),b=u(n,p),_=l(n),y=0,T=[],S=new Map,A=0;M("nbody",H),M("spring",I);var R={bodies:g,quadTree:m,springs:v,settings:n,addForce:M,removeForce:P,getForces:B,step:function(){for(var O=0;O<T.length;++O)T[O](A);var U=f(g,n.timeStep,n.adaptiveTimeStepWeight);return A+=1,U},addBody:function(O){if(!O)throw new Error("Body is required");return g.push(O),O},addBodyAt:function(O){if(!O)throw new Error("Body position is required");var U=d(O);return g.push(U),U},removeBody:function(O){if(O){var U=g.indexOf(O);if(!(U<0))return g.splice(U,1),g.length===0&&h.reset(),!0}},addSpring:function(O,U,Q,q){if(!O||!U)throw new Error("Cannot add null spring to force simulator");typeof Q!="number"&&(Q=-1);var se=new e(O,U,Q,q>=0?q:-1);return v.push(se),se},getTotalMovement:function(){return y},removeSpring:function(O){if(O){var U=v.indexOf(O);if(U>-1)return v.splice(U,1),!0}},getBestNewBodyPosition:function(O){return h.getBestNewPosition(O)},getBBox:E,getBoundingBox:E,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(O){return O!==void 0?(n.gravity=O,m.options({gravity:O}),this):n.gravity},theta:function(O){return O!==void 0?(n.theta=O,m.options({theta:O}),this):n.theta},random:p};return rx(n,R),i(R),R;function E(){return h.update(),h.box}function M(O,U){if(S.has(O))throw new Error("Force "+O+" is already added");S.set(O,U),T.push(U)}function P(O){var U=T.indexOf(S.get(O));U<0||(T.splice(U,1),S.delete(O))}function B(){return S}function H(){if(g.length!==0){m.insertBodies(g);for(var O=g.length;O--;){var U=g[O];U.isPinned||(U.reset(),m.updateBodyForce(U),_.update(U))}}}function I(){for(var O=v.length;O--;)b.update(v[O])}}function rx(n,e){for(var t in n)ax(n,e,t)}function ax(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}uc.exports=sx;uc.exports.simulator=If;var ox=lc;function sx(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||If,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?H:B;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var a=new Map,o={},s=0,c=i.settings.springTransform||cx;_(),m();var l=!1,u={step:function(){if(s===0)return f(!0),!0;var I=i.step();u.lastMove=I,u.fire("step");var O=I/s,U=O<=.01;return f(U),U},getNodePosition:function(I){return P(I).pos},setNodePosition:function(I){var O=P(I);O.setPosition.apply(O,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(I){var O=o[I];if(O)return{from:O.from.pos,to:O.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:d,pinNode:function(I,O){var U=P(I.id);U.isPinned=!!O},isNodePinned:function(I){return P(I.id).isPinned},dispose:function(){n.off("changed",b),u.fire("disposed")},getBody:v,getSpring:g,getForceVectorLength:p,simulator:i,graph:n,lastMove:0};return ox(u),u;function f(I){l!==I&&(l=I,h(I))}function d(I){a.forEach(I)}function p(){var I=0,O=0;return d(function(U){I+=Math.abs(U.force.x),O+=Math.abs(U.force.y)}),Math.sqrt(I*I+O*O)}function g(I,O){var U;if(O===void 0)typeof I!="object"?U=I:U=I.id;else{var Q=n.hasLink(I,O);if(!Q)return;U=Q.id}return o[U]}function v(I){return a.get(I)}function m(){n.on("changed",b)}function h(I){u.fire("stable",I)}function b(I){for(var O=0;O<I.length;++O){var U=I[O];U.changeType==="add"?(U.node&&y(U.node.id),U.link&&S(U.link)):U.changeType==="remove"&&(U.node&&T(U.node),U.link&&A(U.link))}s=n.getNodesCount()}function _(){s=0,n.forEachNode(function(I){y(I.id),s+=1}),n.forEachLink(S)}function y(I){var O=a.get(I);if(!O){var U=n.getNode(I);if(!U)throw new Error("initBody() was called with unknown node id");var Q=U.position;if(!Q){var q=R(U);Q=i.getBestNewBodyPosition(q)}O=i.addBodyAt(Q),O.id=I,a.set(I,O),E(I),M(U)&&(O.isPinned=!0)}}function T(I){var O=I.id,U=a.get(O);U&&(a.delete(O),i.removeBody(U))}function S(I){E(I.fromId),E(I.toId);var O=a.get(I.fromId),U=a.get(I.toId),Q=i.addSpring(O,U,I.length);c(I,Q),o[I.id]=Q}function A(I){var O=o[I.id];if(O){var U=n.getNode(I.fromId),Q=n.getNode(I.toId);U&&E(U.id),Q&&E(Q.id),delete o[I.id],i.removeSpring(O)}}function R(I){var O=[];if(!I.links)return O;for(var U=Math.min(I.links.length,2),Q=0;Q<U;++Q){var q=I.links[Q],se=q.fromId!==I.id?a.get(q.fromId):a.get(q.toId);se&&se.pos&&O.push(se)}return O}function E(I){var O=a.get(I);if(O.mass=r(I),Number.isNaN(O.mass))throw new Error("Node mass should be a number")}function M(I){return I&&(I.isPinned||I.data&&I.data.isPinned)}function P(I){var O=a.get(I);return O||(y(I),O=a.get(I)),O}function B(I){var O=n.getLinks(I);return O?1+O.length/3:1}function H(I){var O=n.getLinks(I);return O?1+O.size/3:1}}function cx(){}var lx=uc.exports;const ux=Mu(lx);function Ts(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var fx=typeof global=="object"&&global&&global.Object===Object&&global,hx=typeof self=="object"&&self&&self.Object===Object&&self,Of=fx||hx||Function("return this")(),Do=function(){return Of.Date.now()},dx=/\s/;function px(n){for(var e=n.length;e--&&dx.test(n.charAt(e)););return e}var mx=/^\s+/;function gx(n){return n&&n.slice(0,px(n)+1).replace(mx,"")}var Aa=Of.Symbol,Nf=Object.prototype,vx=Nf.hasOwnProperty,_x=Nf.toString,cr=Aa?Aa.toStringTag:void 0;function yx(n){var e=vx.call(n,cr),t=n[cr];try{n[cr]=void 0;var i=!0}catch{}var r=_x.call(n);return i&&(e?n[cr]=t:delete n[cr]),r}var xx=Object.prototype,bx=xx.toString;function Mx(n){return bx.call(n)}var Sx="[object Null]",Ex="[object Undefined]",Jl=Aa?Aa.toStringTag:void 0;function wx(n){return n==null?n===void 0?Ex:Sx:Jl&&Jl in Object(n)?yx(n):Mx(n)}function Tx(n){return n!=null&&typeof n=="object"}var Ax="[object Symbol]";function Cx(n){return typeof n=="symbol"||Tx(n)&&wx(n)==Ax}var Ql=NaN,Rx=/^[-+]0x[0-9a-f]+$/i,Px=/^0b[01]+$/i,Lx=/^0o[0-7]+$/i,Dx=parseInt;function eu(n){if(typeof n=="number")return n;if(Cx(n))return Ql;if(Ts(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ts(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=gx(n);var t=Px.test(n);return t||Lx.test(n)?Dx(n.slice(2),t?2:8):Rx.test(n)?Ql:+n}var Ix="Expected a function",Ox=Math.max,Nx=Math.min;function Ux(n,e,t){var i,r,a,o,s,c,l=0,u=!1,f=!1,d=!0;if(typeof n!="function")throw new TypeError(Ix);e=eu(e)||0,Ts(t)&&(u=!!t.leading,f="maxWait"in t,a=f?Ox(eu(t.maxWait)||0,e):a,d="trailing"in t?!!t.trailing:d);function p(S){var A=i,R=r;return i=r=void 0,l=S,o=n.apply(R,A),o}function g(S){return l=S,s=setTimeout(h,e),u?p(S):o}function v(S){var A=S-c,R=S-l,E=e-A;return f?Nx(E,a-R):E}function m(S){var A=S-c,R=S-l;return c===void 0||A>=e||A<0||f&&R>=a}function h(){var S=Do();if(m(S))return b(S);s=setTimeout(h,v(S))}function b(S){return s=void 0,d&&i?p(S):(i=r=void 0,o)}function _(){s!==void 0&&clearTimeout(s),l=0,i=c=r=s=void 0}function y(){return s===void 0?o:b(Do())}function T(){var S=Do(),A=m(S);if(i=arguments,r=this,c=S,A){if(s===void 0)return g(c);if(f)return clearTimeout(s),s=setTimeout(h,e),p(c)}return s===void 0&&(s=setTimeout(h,e)),o}return T.cancel=_,T.flush=y,T}function Fx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e!==0)for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function Bx(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function kx(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function zx(n,e){return Hx(n)||Fx(n,e)||Vx(n,e)||Gx()}function Hx(n){if(Array.isArray(n))return n}function Vx(n,e){if(n){if(typeof n=="string")return tu(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tu(n,e)}}function tu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Gx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wx=kx(function n(e,t){var i=t.default,r=i===void 0?null:i,a=t.triggerUpdate,o=a===void 0?!0:a,s=t.onChange,c=s===void 0?function(l,u){}:s;Bx(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=o,this.onChange=c});function gc(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,a=n.methods,o=a===void 0?{}:a,s=n.aliases,c=s===void 0?{}:s,l=n.init,u=l===void 0?function(){}:l,f=n.update,d=f===void 0?function(){}:f,p=Object.keys(r).map(function(g){return new Wx(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),m={};function h(y){return b(y,g),_(),h}var b=function(T,S){u.call(h,T,v,S),v.initialised=!0},_=Ux(function(){v.initialised&&(d.call(h,v,m),m={})},1);return p.forEach(function(y){h[y.name]=T(y);function T(S){var A=S.name,R=S.triggerUpdate,E=R===void 0?!1:R,M=S.onChange,P=M===void 0?function(I,O){}:M,B=S.defaultVal,H=B===void 0?null:B;return function(I){var O=v[A];if(!arguments.length)return O;var U=I===void 0?H:I;return v[A]=U,P.call(h,U,v,O),!m.hasOwnProperty(A)&&(m[A]=O),E&&_(),h}}}),Object.keys(o).forEach(function(y){h[y]=function(){for(var T,S=arguments.length,A=new Array(S),R=0;R<S;R++)A[R]=arguments[R];return(T=o[y]).call.apply(T,[h,v].concat(A))}}),Object.entries(c).forEach(function(y){var T=zx(y,2),S=T[0],A=T[1];return h[S]=h[A]}),h.resetProps=function(){return p.forEach(function(y){h[y.name](y.defaultVal)}),h},h.resetProps(),v._rerender=_,h}}var $e=function(n){return typeof n=="function"?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};function As(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function jx(n){if(Array.isArray(n))return n}function Xx(n){if(Array.isArray(n))return As(n)}function $x(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function qx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e!==0)for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function Yx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zx(n,e){if(n==null)return{};var t,i,r=Jx(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.includes(t)||{}.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function Jx(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.includes(i))continue;t[i]=n[i]}return t}function Qx(n,e){return jx(n)||qx(n,e)||Uf(n,e)||Yx()}function eb(n){return Xx(n)||$x(n)||Uf(n)||Kx()}function tb(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function nb(n){var e=tb(n,"string");return typeof e=="symbol"?e:e+""}function Uf(n,e){if(n){if(typeof n=="string")return As(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?As(n,e):void 0}}var nu=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(s){return{keyAccessor:s,isProp:!(s instanceof Function)}}),a=n.reduce(function(s,c){var l=s,u=c;return r.forEach(function(f,d){var p=f.keyAccessor,g=f.isProp,v;if(g){var m=u,h=m[p],b=Zx(m,[p].map(nb));v=h,u=b}else v=p(u,d);d+1<r.length?(l.hasOwnProperty(v)||(l[v]={}),l=l[v]):t?(l.hasOwnProperty(v)||(l[v]=[]),l[v].push(u)):l[v]=u}),s},{});t instanceof Function&&function s(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;l===r.length?Object.keys(c).forEach(function(u){return c[u]=t(c[u])}):Object.values(c).forEach(function(u){return s(u,l+1)})}(a);var o=a;return i&&(o=[],function s(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];l.length===r.length?o.push({keys:l,vals:c}):Object.entries(c).forEach(function(u){var f=Qx(u,2),d=f[0],p=f[1];return s(p,[].concat(eb(l),[d]))})}(a),e instanceof Array&&e.length===0&&o.length===1&&(o[0].keys=[])),o};function ib(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e!==0)for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function iu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function rb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?iu(Object(t),!0).forEach(function(i){Ff(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):iu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ff(n,e,t){return e=db(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ab(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function ob(n,e){if(n==null)return{};var t=ab(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Bf(n,e){return cb(n)||ib(n,e)||kf(n,e)||fb()}function Ca(n){return sb(n)||lb(n)||kf(n)||ub()}function sb(n){if(Array.isArray(n))return Cs(n)}function cb(n){if(Array.isArray(n))return n}function lb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function kf(n,e){if(n){if(typeof n=="string")return Cs(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Cs(n,e)}}function Cs(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function ub(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function db(n){var e=hb(n,"string");return typeof e=="symbol"?e:String(e)}var pb=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function mb(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var o=nu(n,t,!1),s=nu(e,t,!1),c=Object.assign({},o,s);Object.entries(c).forEach(function(l){var u=Bf(l,2),f=u[0],d=u[1],p=o.hasOwnProperty(f)?s.hasOwnProperty(f)?"update":"exit":"enter";i[p].push(p==="update"?[o[f],s[f]]:d)})}else{var r=new Set(n),a=new Set(e);new Set([].concat(Ca(r),Ca(a))).forEach(function(l){var u=r.has(l)?a.has(l)?"update":"exit":"enter";i[u].push(u==="update"?[l,l]:l)})}return i}function gb(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,a=t.dataBindAttr,o=a===void 0?"__data":a,s=t.idAccessor,c=t.purge,l=c===void 0?!1:c,u=function(m){return m.hasOwnProperty(o)},f=e.filter(function(v){return!u(v)}),d=e.filter(u).map(function(v){return v[o]}),p=n,g=l?{enter:p,exit:d,update:[]}:mb(d,p,s);return g.update=g.update.map(function(v){var m=Bf(v,2),h=m[0],b=m[1];return h!==b&&(b[r]=h[r],b[r][o]=b),b}),g.exit=g.exit.concat(f.map(function(v){return Ff({},r,v)})),g}function vb(n,e,t,i,r){var a=r.createObj,o=a===void 0?function(R){return{}}:a,s=r.updateObj,c=s===void 0?function(R,E){}:s,l=r.exitObj,u=l===void 0?function(R){}:l,f=r.objBindAttr,d=f===void 0?"__obj":f,p=r.dataBindAttr,g=p===void 0?"__data":p,v=ob(r,pb),m=gb(n,e,rb({objBindAttr:d,dataBindAttr:g},v)),h=m.enter,b=m.update,_=m.exit;_.forEach(function(R){var E=R[d];delete R[d],u(E),i(E)});var y=S(h),T=[].concat(Ca(h),Ca(b));A(T),y.forEach(t);function S(R){var E=[];return R.forEach(function(M){var P=o(M);P&&(P[g]=M,M[d]=P,E.push(P))}),E}function A(R){R.forEach(function(E){var M=E[d];M&&(M[g]=E,c(M,E))})}}function Ra(n){"@babel/helpers - typeof";return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ra(n)}var _b=/^\s+/,yb=/\s+$/;function Se(n,e){if(n=n||"",e=e||{},n instanceof Se)return n;if(!(this instanceof Se))return new Se(n,e);var t=xb(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}Se.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,i,r,a,o,s;return t=e.r/255,i=e.g/255,r=e.b/255,t<=.03928?a=t/12.92:a=Math.pow((t+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),.2126*a+.7152*o+.0722*s},setAlpha:function(e){return this._a=zf(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=au(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=au(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+i+"%, "+r+"%)":"hsva("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=ru(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=ru(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+i+"%, "+r+"%)":"hsla("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return ou(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Eb(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(rt(this._r,255)*100)+"%",g:Math.round(rt(this._g,255)*100)+"%",b:Math.round(rt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(rt(this._r,255)*100)+"%, "+Math.round(rt(this._g,255)*100)+"%, "+Math.round(rt(this._b,255)*100)+"%)":"rgba("+Math.round(rt(this._r,255)*100)+"%, "+Math.round(rt(this._g,255)*100)+"%, "+Math.round(rt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Ub[ou(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+su(this._r,this._g,this._b,this._a),i=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=Se(e);i="#"+su(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,a=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return a?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return Se(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Cb,arguments)},brighten:function(){return this._applyModification(Rb,arguments)},darken:function(){return this._applyModification(Pb,arguments)},desaturate:function(){return this._applyModification(wb,arguments)},saturate:function(){return this._applyModification(Tb,arguments)},greyscale:function(){return this._applyModification(Ab,arguments)},spin:function(){return this._applyModification(Lb,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Ob,arguments)},complement:function(){return this._applyCombination(Db,arguments)},monochromatic:function(){return this._applyCombination(Nb,arguments)},splitcomplement:function(){return this._applyCombination(Ib,arguments)},triad:function(){return this._applyCombination(cu,[3])},tetrad:function(){return this._applyCombination(cu,[4])}};Se.fromRatio=function(n,e){if(Ra(n)=="object"){var t={};for(var i in n)n.hasOwnProperty(i)&&(i==="a"?t[i]=n[i]:t[i]=mr(n[i]));n=t}return Se(n,e)};function xb(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,a=null,o=!1,s=!1;return typeof n=="string"&&(n=zb(n)),Ra(n)=="object"&&(yn(n.r)&&yn(n.g)&&yn(n.b)?(e=bb(n.r,n.g,n.b),o=!0,s=String(n.r).substr(-1)==="%"?"prgb":"rgb"):yn(n.h)&&yn(n.s)&&yn(n.v)?(i=mr(n.s),r=mr(n.v),e=Sb(n.h,i,r),o=!0,s="hsv"):yn(n.h)&&yn(n.s)&&yn(n.l)&&(i=mr(n.s),a=mr(n.l),e=Mb(n.h,i,a),o=!0,s="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=zf(t),{ok:o,format:n.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function bb(n,e,t){return{r:rt(n,255)*255,g:rt(e,255)*255,b:rt(t,255)*255}}function ru(n,e,t){n=rt(n,255),e=rt(e,255),t=rt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),a,o,s=(i+r)/2;if(i==r)a=o=0;else{var c=i-r;switch(o=s>.5?c/(2-i-r):c/(i+r),i){case n:a=(e-t)/c+(e<t?6:0);break;case e:a=(t-n)/c+2;break;case t:a=(n-e)/c+4;break}a/=6}return{h:a,s:o,l:s}}function Mb(n,e,t){var i,r,a;n=rt(n,360),e=rt(e,100),t=rt(t,100);function o(l,u,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?l+(u-l)*6*f:f<1/2?u:f<2/3?l+(u-l)*(2/3-f)*6:l}if(e===0)i=r=a=t;else{var s=t<.5?t*(1+e):t+e-t*e,c=2*t-s;i=o(c,s,n+1/3),r=o(c,s,n),a=o(c,s,n-1/3)}return{r:i*255,g:r*255,b:a*255}}function au(n,e,t){n=rt(n,255),e=rt(e,255),t=rt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),a,o,s=i,c=i-r;if(o=i===0?0:c/i,i==r)a=0;else{switch(i){case n:a=(e-t)/c+(e<t?6:0);break;case e:a=(t-n)/c+2;break;case t:a=(n-e)/c+4;break}a/=6}return{h:a,s:o,v:s}}function Sb(n,e,t){n=rt(n,360)*6,e=rt(e,100),t=rt(t,100);var i=Math.floor(n),r=n-i,a=t*(1-e),o=t*(1-r*e),s=t*(1-(1-r)*e),c=i%6,l=[t,o,a,a,s,t][c],u=[s,t,t,o,a,a][c],f=[a,a,s,t,t,o][c];return{r:l*255,g:u*255,b:f*255}}function ou(n,e,t,i){var r=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Eb(n,e,t,i,r){var a=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16)),en(Hf(i))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function su(n,e,t,i){var r=[en(Hf(i)),en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return r.join("")}Se.equals=function(n,e){return!n||!e?!1:Se(n).toRgbString()==Se(e).toRgbString()};Se.random=function(){return Se.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function wb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.s-=e/100,t.s=Ha(t.s),Se(t)}function Tb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.s+=e/100,t.s=Ha(t.s),Se(t)}function Ab(n){return Se(n).desaturate(100)}function Cb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.l+=e/100,t.l=Ha(t.l),Se(t)}function Rb(n,e){e=e===0?0:e||10;var t=Se(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),Se(t)}function Pb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.l-=e/100,t.l=Ha(t.l),Se(t)}function Lb(n,e){var t=Se(n).toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,Se(t)}function Db(n){var e=Se(n).toHsl();return e.h=(e.h+180)%360,Se(e)}function cu(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=Se(n).toHsl(),i=[Se(n)],r=360/e,a=1;a<e;a++)i.push(Se({h:(t.h+a*r)%360,s:t.s,l:t.l}));return i}function Ib(n){var e=Se(n).toHsl(),t=e.h;return[Se(n),Se({h:(t+72)%360,s:e.s,l:e.l}),Se({h:(t+216)%360,s:e.s,l:e.l})]}function Ob(n,e,t){e=e||6,t=t||30;var i=Se(n).toHsl(),r=360/t,a=[Se(n)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,a.push(Se(i));return a}function Nb(n,e){e=e||6;for(var t=Se(n).toHsv(),i=t.h,r=t.s,a=t.v,o=[],s=1/e;e--;)o.push(Se({h:i,s:r,v:a})),a=(a+s)%1;return o}Se.mix=function(n,e,t){t=t===0?0:t||50;var i=Se(n).toRgb(),r=Se(e).toRgb(),a=t/100,o={r:(r.r-i.r)*a+i.r,g:(r.g-i.g)*a+i.g,b:(r.b-i.b)*a+i.b,a:(r.a-i.a)*a+i.a};return Se(o)};Se.readability=function(n,e){var t=Se(n),i=Se(e);return(Math.max(t.getLuminance(),i.getLuminance())+.05)/(Math.min(t.getLuminance(),i.getLuminance())+.05)};Se.isReadable=function(n,e,t){var i=Se.readability(n,e),r,a;switch(a=!1,r=Hb(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7;break}return a};Se.mostReadable=function(n,e,t){var i=null,r=0,a,o,s,c;t=t||{},o=t.includeFallbackColors,s=t.level,c=t.size;for(var l=0;l<e.length;l++)a=Se.readability(n,e[l]),a>r&&(r=a,i=Se(e[l]));return Se.isReadable(n,i,{level:s,size:c})||!o?i:(t.includeFallbackColors=!1,Se.mostReadable(n,["#fff","#000"],t))};var Rs=Se.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ub=Se.hexNames=Fb(Rs);function Fb(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function zf(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function rt(n,e){Bb(n)&&(n="100%");var t=kb(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function Ha(n){return Math.min(1,Math.max(0,n))}function Ft(n){return parseInt(n,16)}function Bb(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function kb(n){return typeof n=="string"&&n.indexOf("%")!=-1}function en(n){return n.length==1?"0"+n:""+n}function mr(n){return n<=1&&(n=n*100+"%"),n}function Hf(n){return Math.round(parseFloat(n)*255).toString(16)}function lu(n){return Ft(n)/255}var Yt=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function yn(n){return!!Yt.CSS_UNIT.exec(n)}function zb(n){n=n.replace(_b,"").replace(yb,"").toLowerCase();var e=!1;if(Rs[n])n=Rs[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Yt.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=Yt.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Yt.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=Yt.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Yt.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=Yt.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Yt.hex8.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),a:lu(t[4]),format:e?"name":"hex8"}:(t=Yt.hex6.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),format:e?"name":"hex"}:(t=Yt.hex4.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),a:lu(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Yt.hex3.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function Hb(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function Vb(n,e,t){return e=Pa(e),Jb(n,vc()?Reflect.construct(e,t||[],Pa(n).constructor):e.apply(n,t))}function Gb(n,e,t){if(vc())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var r=new(n.bind.apply(n,i));return r}function vc(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(vc=function(){return!!n})()}function Wb(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e!==0)for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function uu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Vf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?uu(Object(t),!0).forEach(function(i){_c(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):uu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function jb(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Xb(n){var e=jb(n,"string");return typeof e=="symbol"?e:String(e)}function Ps(n){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ps(n)}function $b(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function qb(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function _c(n,e,t){return e=Xb(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Yb(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ls(n,e)}function Pa(n){return Pa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Pa(n)}function Ls(n,e){return Ls=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Ls(n,e)}function Kb(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Zb(n,e){if(n==null)return{};var t=Kb(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Gf(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Jb(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gf(n)}function fu(n,e){return eM(n)||Wb(n,e)||Wf(n,e)||iM()}function Zt(n){return Qb(n)||tM(n)||Wf(n)||nM()}function Qb(n){if(Array.isArray(n))return Ds(n)}function eM(n){if(Array.isArray(n))return n}function tM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Wf(n,e){if(n){if(typeof n=="string")return Ds(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ds(n,e)}}function Ds(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function nM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rM=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},aM=function n(e){e.geometry&&e.geometry.dispose(),e.material&&rM(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},Is=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),aM(t)}},oM=["objFilter"];function lr(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,a=Zb(t,oM);return vb(n,e.children.filter(r),function(o){return e.add(o)},function(o){e.remove(o),Is(o)},Vf({objBindAttr:"__threeObj"},a))}var ur=function(e){return isNaN(e)?parseInt(Se(e).toHex(),16):e},Io=function(e){return isNaN(e)?Se(e).getAlpha():1},sM=Pu(kh);function hu(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=sM(e(i))})}function cM(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=r.nodeFilter,o=a===void 0?function(){return!0}:a,s=r.onLoopError,c=s===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:s,l={};t.forEach(function(p){return l[e(p)]={data:p,out:[],depth:-1,skip:!o(p)}}),i.forEach(function(p){var g=p.source,v=p.target,m=y(g),h=y(v);if(!l.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!l.hasOwnProperty(h))throw"Missing target node with id: ".concat(h);var b=l[m],_=l[h];b.out.push(_);function y(T){return Ps(T)==="object"?e(T):T}});var u=[];d(Object.values(l));var f=Object.assign.apply(Object,[{}].concat(Zt(Object.entries(l).filter(function(p){var g=fu(p,2),v=g[1];return!v.skip}).map(function(p){var g=fu(p,2),v=g[0],m=g[1];return _c({},v,m.depth)}))));return f;function d(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var y=p[h];if(g.indexOf(y)!==-1){var T=[].concat(Zt(g.slice(g.indexOf(y))),[y]).map(function(S){return e(S.data)});return u.some(function(S){return S.length===T.length&&S.every(function(A,R){return A===T[R]})})||(u.push(T),c(T)),1}v>y.depth&&(y.depth=v,d(y.out,[].concat(Zt(g),[y]),v+(y.skip?0:1)))},h=0,b=p.length;h<b;h++)m()}}var Pe=window.THREE?window.THREE:{Group:Ui,Mesh:Wt,MeshLambertMaterial:S0,Color:We,BufferGeometry:Bt,BufferAttribute:tn,Matrix4:et,Vector3:N,SphereGeometry:za,CylinderGeometry:ka,TubeGeometry:ac,ConeGeometry:rc,Line:s0,LineBasicMaterial:cf,QuadraticBezierCurve3:ic,CubicBezierCurve3:uf,Box3:di},du={graph:Py,forcelayout:ux},lM=2,pu=new Pe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",sa=new Pe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",uM=gc({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(a,o){a.forEach(function(s){delete s[o],delete s["v".concat(o)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),a(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var o=$e(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(d){var p=d.__threeObj;if(p){var g=t?d:e.layout.getNodePosition(d[e.nodeId]),v=o(d);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?p.children[0]:p,{x:g.x,y:g.y,z:g.z},d)||v)&&(p.position.x=g.x,p.position.y=g.y||0,p.position.z=g.z||0)}});var s=$e(e.linkWidth),c=$e(e.linkCurvature),l=$e(e.linkCurveRotation),u=$e(e.linkThreeObjectExtend);e.graphData.links.forEach(function(d){var p=d.__lineObj;if(p){var g=t?d:e.layout.getLinkPosition(e.layout.graph.getLink(d.source,d.target).id),v=g[t?"source":"from"],m=g[t?"target":"to"];if(!(!v||!m||!v.hasOwnProperty("x")||!m.hasOwnProperty("x"))){f(d);var h=u(d);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(h?p.children[1]:p,{start:{x:v.x,y:v.y,z:v.z},end:{x:m.x,y:m.y,z:m.z}},d)&&!h)){var b=30,_=d.__curve,y=p.children.length?p.children[0]:p;if(y.type==="Line"){if(_)y.geometry.setFromPoints(_.getPoints(b));else{var T=y.geometry.getAttribute("position");(!T||!T.array||T.array.length!==6)&&y.geometry[pu]("position",T=new Pe.BufferAttribute(new Float32Array(2*3),3)),T.array[0]=v.x,T.array[1]=v.y||0,T.array[2]=v.z||0,T.array[3]=m.x,T.array[4]=m.y||0,T.array[5]=m.z||0,T.needsUpdate=!0}y.geometry.computeBoundingSphere()}else if(y.type==="Mesh")if(_){y.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(y.position.set(0,0,0),y.rotation.set(0,0,0),y.scale.set(1,1,1));var B=Math.ceil(s(d)*10)/10,H=B/2,I=new Pe.TubeGeometry(_,b,H,e.linkResolution,!1);y.geometry.dispose(),y.geometry=I}else{if(!y.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var S=Math.ceil(s(d)*10)/10,A=S/2,R=new Pe.CylinderGeometry(A,A,1,e.linkResolution,1,!1);R[sa](new Pe.Matrix4().makeTranslation(0,1/2,0)),R[sa](new Pe.Matrix4().makeRotationX(Math.PI/2)),y.geometry.dispose(),y.geometry=R}var E=new Pe.Vector3(v.x,v.y||0,v.z||0),M=new Pe.Vector3(m.x,m.y||0,m.z||0),P=E.distanceTo(M);y.position.x=E.x,y.position.y=E.y,y.position.z=E.z,y.scale.z=P,y.parent.localToWorld(M),y.lookAt(M)}}}}});function f(d){var p=t?d:e.layout.getLinkPosition(e.layout.graph.getLink(d.source,d.target).id),g=p[t?"source":"from"],v=p[t?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var m=c(d);if(!m)d.__curve=null;else{var h=new Pe.Vector3(g.x,g.y||0,g.z||0),b=new Pe.Vector3(v.x,v.y||0,v.z||0),_=h.distanceTo(b),y,T=l(d);if(_>0){var S=v.x-g.x,A=v.y-g.y||0,R=new Pe.Vector3().subVectors(b,h),E=R.clone().multiplyScalar(m).cross(S!==0||A!==0?new Pe.Vector3(0,0,1):new Pe.Vector3(0,1,0)).applyAxisAngle(R.normalize(),T).add(new Pe.Vector3().addVectors(h,b).divideScalar(2));y=new Pe.QuadraticBezierCurve3(h,E,b)}else{var M=m*70,P=-T,B=P+Math.PI/2;y=new Pe.CubicBezierCurve3(h,new Pe.Vector3(M*Math.cos(B),M*Math.sin(B),0).add(h),new Pe.Vector3(M*Math.cos(P),M*Math.sin(P),0).add(h),b)}d.__curve=y}}}}function r(){var o=$e(e.linkDirectionalArrowRelPos),s=$e(e.linkDirectionalArrowLength),c=$e(e.nodeVal);e.graphData.links.forEach(function(l){var u=l.__arrowObj;if(u){var f=t?l:e.layout.getLinkPosition(e.layout.graph.getLink(l.source,l.target).id),d=f[t?"source":"from"],p=f[t?"target":"to"];if(!(!d||!p||!d.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,c(d)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,c(p)||1))*e.nodeRelSize,m=s(l),h=o(l),b=l.__curve?function(R){return l.__curve.getPoint(R)}:function(R){var E=function(P,B,H,I){return B[P]+(H[P]-B[P])*I||0};return{x:E("x",d,p,R),y:E("y",d,p,R),z:E("z",d,p,R)}},_=l.__curve?l.__curve.getLength():Math.sqrt(["x","y","z"].map(function(R){return Math.pow((p[R]||0)-(d[R]||0),2)}).reduce(function(R,E){return R+E},0)),y=g+m+(_-g-v-m)*h,T=b(y/_),S=b((y-m)/_);["x","y","z"].forEach(function(R){return u.position[R]=S[R]});var A=Gb(Pe.Vector3,Zt(["x","y","z"].map(function(R){return T[R]})));u.parent.localToWorld(A),u.lookAt(A)}}})}function a(){var o=$e(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(s){var c=s.__photonsObj&&s.__photonsObj.children,l=s.__singleHopPhotonsObj&&s.__singleHopPhotonsObj.children;if(!((!l||!l.length)&&(!c||!c.length))){var u=t?s:e.layout.getLinkPosition(e.layout.graph.getLink(s.source,s.target).id),f=u[t?"source":"from"],d=u[t?"target":"to"];if(!(!f||!d||!f.hasOwnProperty("x")||!d.hasOwnProperty("x"))){var p=o(s),g=s.__curve?function(m){return s.__curve.getPoint(m)}:function(m){var h=function(_,y,T,S){return y[_]+(T[_]-y[_])*S||0};return{x:h("x",f,d,m),y:h("y",f,d,m),z:h("z",f,d,m)}},v=[].concat(Zt(c||[]),Zt(l||[]));v.forEach(function(m,h){var b=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=b?0:h/c.length),m.__progressRatio+=p,m.__progressRatio>=1)if(!b)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),Is(m);return}var _=m.__progressRatio,y=g(_);["x","y","z"].forEach(function(T){return m.position[T]=y[T]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var i=new Pe.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=$e(e.linkDirectionalParticleWidth),a=Math.ceil(r(t)*10)/10/2,o=e.linkDirectionalParticleResolution,s=new Pe.SphereGeometry(a,o,o),c=$e(e.linkColor),l=$e(e.linkDirectionalParticleColor),u=l(t)||c(t)||"#f0f0f0",f=new Pe.Color(ur(u)),d=e.linkOpacity*3,p=new Pe.MeshLambertMaterial({color:f,transparent:!0,opacity:d});t.__singleHopPhotonsObj.add(new Pe.Mesh(s,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(a){var o=[];if(a.geometry){a.geometry.computeBoundingBox();var s=new Pe.Box3;s.copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld),o.push(s)}return o.concat.apply(o,Zt((a.children||[]).filter(function(c){return!c.hasOwnProperty("__graphObjType")||c.__graphObjType==="node"&&t(c.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,Zt(["x","y","z"].map(function(r){return _c({},r,[dh(i,function(a){return a.min[r]}),hh(i,function(a){return a.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:by().force("link",dy()).force("charge",My()).force("center",I0()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(V){return V.some(function(ee){return t.hasOwnProperty(ee)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&hu(e.graphData.nodes,$e(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&hu(e.graphData.links,$e(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=$e(e.nodeThreeObject),a=$e(e.nodeThreeObjectExtend),o=$e(e.nodeVal),s=$e(e.nodeColor),c=$e(e.nodeVisibility),l={},u={};lr(e.graphData.nodes.filter(c),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(V){return V.__graphObjType==="node"},createObj:function(V){var ee=r(V),F=a(V);ee&&e.nodeThreeObject===ee&&(ee=ee.clone());var J;return ee&&!F?J=ee:(J=new Pe.Mesh,J.__graphDefaultObj=!0,ee&&F&&J.add(ee)),J.__graphObjType="node",J},updateObj:function(V,ee){if(V.__graphDefaultObj){var F=o(ee)||1,J=Math.cbrt(F)*e.nodeRelSize,le=e.nodeResolution;(!V.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||V.geometry.parameters.radius!==J||V.geometry.parameters.widthSegments!==le)&&(l.hasOwnProperty(F)||(l[F]=new Pe.SphereGeometry(J,le,le)),V.geometry.dispose(),V.geometry=l[F]);var pe=s(ee),Ee=new Pe.Color(ur(pe||"#ffffaa")),D=e.nodeOpacity*Io(pe);(V.material.type!=="MeshLambertMaterial"||!V.material.color.equals(Ee)||V.material.opacity!==D)&&(u.hasOwnProperty(pe)||(u[pe]=new Pe.MeshLambertMaterial({color:Ee,transparent:!0,opacity:D})),V.material.dispose(),V.material=u[pe])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var f=$e(e.linkThreeObject),d=$e(e.linkThreeObjectExtend),p=$e(e.linkMaterial),g=$e(e.linkVisibility),v=$e(e.linkColor),m=$e(e.linkWidth),h={},b={},_={},y=e.graphData.links.filter(g);if(lr(y,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(V){return V.__graphObjType==="link"},exitObj:function(V){var ee=V.__data&&V.__data.__singleHopPhotonsObj;ee&&(ee.parent.remove(ee),Is(ee),delete V.__data.__singleHopPhotonsObj)},createObj:function(V){var ee=f(V),F=d(V);ee&&e.linkThreeObject===ee&&(ee=ee.clone());var J;if(!ee||F){var le=!!m(V);if(le)J=new Pe.Mesh;else{var pe=new Pe.BufferGeometry;pe[pu]("position",new Pe.BufferAttribute(new Float32Array(2*3),3)),J=new Pe.Line(pe)}}var Ee;return ee?F?(Ee=new Pe.Group,Ee.__graphDefaultObj=!0,Ee.add(J),Ee.add(ee)):Ee=ee:(Ee=J,Ee.__graphDefaultObj=!0),Ee.renderOrder=10,Ee.__graphObjType="link",Ee},updateObj:function(V,ee){if(V.__graphDefaultObj){var F=V.children.length?V.children[0]:V,J=Math.ceil(m(ee)*10)/10,le=!!J;if(le){var pe=J/2,Ee=e.linkResolution;if(!F.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||F.geometry.parameters.radiusTop!==pe||F.geometry.parameters.radialSegments!==Ee){if(!h.hasOwnProperty(J)){var D=new Pe.CylinderGeometry(pe,pe,1,Ee,1,!1);D[sa](new Pe.Matrix4().makeTranslation(0,1/2,0)),D[sa](new Pe.Matrix4().makeRotationX(Math.PI/2)),h[J]=D}F.geometry.dispose(),F.geometry=h[J]}}var Je=p(ee);if(Je)F.material=Je;else{var Ie=v(ee),Ve=new Pe.Color(ur(Ie||"#f0f0f0")),_e=e.linkOpacity*Io(Ie),Xe=le?"MeshLambertMaterial":"LineBasicMaterial";if(F.material.type!==Xe||!F.material.color.equals(Ve)||F.material.opacity!==_e){var Re=le?b:_;Re.hasOwnProperty(Ie)||(Re[Ie]=new Pe[Xe]({color:Ve,transparent:_e<1,opacity:_e,depthWrite:_e>=1})),F.material.dispose(),F.material=Re[Ie]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var T=$e(e.linkDirectionalArrowLength),S=$e(e.linkDirectionalArrowColor);lr(y.filter(T),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(V){return V.__linkThreeObjType==="arrow"},createObj:function(){var V=new Pe.Mesh(void 0,new Pe.MeshLambertMaterial({transparent:!0}));return V.__linkThreeObjType="arrow",V},updateObj:function(V,ee){var F=T(ee),J=e.linkDirectionalArrowResolution;if(!V.geometry.type.match(/^Cone(Buffer)?Geometry$/)||V.geometry.parameters.height!==F||V.geometry.parameters.radialSegments!==J){var le=new Pe.ConeGeometry(F*.25,F,J);le.translate(0,F/2,0),le.rotateX(Math.PI/2),V.geometry.dispose(),V.geometry=le}var pe=S(ee)||v(ee)||"#f0f0f0";V.material.color=new Pe.Color(ur(pe)),V.material.opacity=e.linkOpacity*3*Io(pe)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var A=$e(e.linkDirectionalParticles),R=$e(e.linkDirectionalParticleWidth),E=$e(e.linkDirectionalParticleColor),M={},P={};lr(y.filter(A),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(V){return V.__linkThreeObjType==="photons"},createObj:function(){var V=new Pe.Group;return V.__linkThreeObjType="photons",V},updateObj:function(V,ee){var F=Math.round(Math.abs(A(ee))),J=!!V.children.length&&V.children[0],le=Math.ceil(R(ee)*10)/10/2,pe=e.linkDirectionalParticleResolution,Ee;J&&J.geometry.parameters.radius===le&&J.geometry.parameters.widthSegments===pe?Ee=J.geometry:(P.hasOwnProperty(le)||(P[le]=new Pe.SphereGeometry(le,pe,pe)),Ee=P[le],J&&J.geometry.dispose());var D=E(ee)||v(ee)||"#f0f0f0",Je=new Pe.Color(ur(D)),Ie=e.linkOpacity*3,Ve;J&&J.material.color.equals(Je)&&J.material.opacity===Ie?Ve=J.material:(M.hasOwnProperty(D)||(M[D]=new Pe.MeshLambertMaterial({color:Je,transparent:!0,opacity:Ie})),Ve=M[D],J&&J.material.dispose()),lr(Zt(new Array(F)).map(function(_e,Xe){return{idx:Xe}}),V,{idAccessor:function(Xe){return Xe.idx},createObj:function(){return new Pe.Mesh(Ee,Ve)},updateObj:function(Xe){Xe.geometry=Ee,Xe.material=Ve}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(z){z.source=z[e.linkSource],z.target=z[e.linkTarget]});var B=e.forceEngine!=="ngraph",H;if(B){(H=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var I=e.d3ForceLayout.force("link");I&&I.id(function(z){return z[e.nodeId]}).links(e.graphData.links);var O=e.dagMode&&cM(e.graphData,function(z){return z[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),U=Math.max.apply(Math,Zt(Object.values(O||[]))),Q=e.dagLevelDistance||e.graphData.nodes.length/(U||1)*lM*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var q=function(V,ee){return function(F){return V?(O[F[e.nodeId]]-U/2)*Q*(ee?-1:1):void 0}},se=q(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),K=q(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),te=q(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(z){z.fx=se(z),z.fy=K(z),z.fz=te(z)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?Sy(function(z){var V=O[z[e.nodeId]]||-1;return(e.dagMode==="radialin"?U-V:V)*Q}).strength(function(z){return e.dagNodeFilter(z)?1:0}):null)}else{var ue=du.graph();e.graphData.nodes.forEach(function(z){ue.addNode(z[e.nodeId])}),e.graphData.links.forEach(function(z){ue.addLink(z.source,z.target)}),H=du.forcelayout(ue,Vf({dimensions:e.numDimensions},e.ngraphPhysics)),H.graph=ue}for(var Me=0;Me<e.warmupTicks&&!(B&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);Me++)H[B?"tick":"step"]();e.layout=H,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function fM(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){Yb(a,r);function a(){var o;$b(this,a);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return o=Vb(this,a,[].concat(c)),o.__kapsuleInstance=n().apply(void 0,[].concat(Zt(t?[Gf(o)]:[]),c)),o}return qb(a)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var a,o=(a=this.__kapsuleInstance)[r].apply(a,arguments);return o===this.__kapsuleInstance?this:o}}),i}var hM=window.THREE?window.THREE:{Group:Ui},jf=fM(uM,hM.Group,!0);const Oo={type:"change"},No={type:"start"},Uo={type:"end"};class dM extends rn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.target=new N;const a=1e-6,o=new N;let s=1,c=r.NONE,l=r.NONE,u=0,f=0,d=0;const p=new N,g=new fe,v=new fe,m=new N,h=new fe,b=new fe,_=new fe,y=new fe,T=[],S={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const F=i.domElement.getBoundingClientRect(),J=i.domElement.ownerDocument.documentElement;i.screen.left=F.left+window.pageXOffset-J.clientLeft,i.screen.top=F.top+window.pageYOffset-J.clientTop,i.screen.width=F.width,i.screen.height=F.height};const A=function(){const F=new fe;return function(le,pe){return F.set((le-i.screen.left)/i.screen.width,(pe-i.screen.top)/i.screen.height),F}}(),R=function(){const F=new fe;return function(le,pe){return F.set((le-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-pe))/i.screen.width),F}}();this.rotateCamera=function(){const F=new N,J=new nn,le=new N,pe=new N,Ee=new N,D=new N;return function(){D.set(v.x-g.x,v.y-g.y,0);let Ie=D.length();Ie?(p.copy(i.object.position).sub(i.target),le.copy(p).normalize(),pe.copy(i.object.up).normalize(),Ee.crossVectors(pe,le).normalize(),pe.setLength(v.y-g.y),Ee.setLength(v.x-g.x),D.copy(pe.add(Ee)),F.crossVectors(D,p).normalize(),Ie*=i.rotateSpeed,J.setFromAxisAngle(F,Ie),p.applyQuaternion(J),i.object.up.applyQuaternion(J),m.copy(F),d=Ie):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),J.setFromAxisAngle(m,d),p.applyQuaternion(J),i.object.up.applyQuaternion(J)),g.copy(v)}}(),this.zoomCamera=function(){let F;c===r.TOUCH_ZOOM_PAN?(F=u/f,u=f,i.object.isPerspectiveCamera?p.multiplyScalar(F):i.object.isOrthographicCamera?(i.object.zoom=Ms.clamp(i.object.zoom/F,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(F=1+(b.y-h.y)*i.zoomSpeed,F!==1&&F>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(F):i.object.isOrthographicCamera?(i.object.zoom=Ms.clamp(i.object.zoom/F,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?h.copy(b):h.y+=(b.y-h.y)*this.dynamicDampingFactor)},this.panCamera=function(){const F=new fe,J=new N,le=new N;return function(){if(F.copy(y).sub(_),F.lengthSq()){if(i.object.isOrthographicCamera){const Ee=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,D=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;F.x*=Ee,F.y*=D}F.multiplyScalar(p.length()*i.panSpeed),le.copy(p).cross(i.object.up).setLength(F.x),le.add(J.copy(i.object.up).setLength(F.y)),i.object.position.add(le),i.target.add(le),i.staticMoving?_.copy(y):_.add(F.subVectors(y,_).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),h.copy(b)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),h.copy(b)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(Oo),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>a||s!==i.object.zoom)&&(i.dispatchEvent(Oo),o.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Oo),o.copy(i.object.position),s=i.object.zoom};function E(F){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(F.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",P)),Me(F),F.pointerType==="touch"?se(F):O(F))}function M(F){i.enabled!==!1&&(F.pointerType==="touch"?K(F):U(F))}function P(F){i.enabled!==!1&&(F.pointerType==="touch"?te(F):Q(),z(F),T.length===0&&(i.domElement.releasePointerCapture(F.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",P)))}function B(F){z(F)}function H(F){i.enabled!==!1&&(window.removeEventListener("keydown",H),l===r.NONE&&(F.code===i.keys[r.ROTATE]&&!i.noRotate?l=r.ROTATE:F.code===i.keys[r.ZOOM]&&!i.noZoom?l=r.ZOOM:F.code===i.keys[r.PAN]&&!i.noPan&&(l=r.PAN)))}function I(){i.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",H))}function O(F){if(c===r.NONE)switch(F.button){case i.mouseButtons.LEFT:c=r.ROTATE;break;case i.mouseButtons.MIDDLE:c=r.ZOOM;break;case i.mouseButtons.RIGHT:c=r.PAN;break}const J=l!==r.NONE?l:c;J===r.ROTATE&&!i.noRotate?(v.copy(R(F.pageX,F.pageY)),g.copy(v)):J===r.ZOOM&&!i.noZoom?(h.copy(A(F.pageX,F.pageY)),b.copy(h)):J===r.PAN&&!i.noPan&&(_.copy(A(F.pageX,F.pageY)),y.copy(_)),i.dispatchEvent(No)}function U(F){const J=l!==r.NONE?l:c;J===r.ROTATE&&!i.noRotate?(g.copy(v),v.copy(R(F.pageX,F.pageY))):J===r.ZOOM&&!i.noZoom?b.copy(A(F.pageX,F.pageY)):J===r.PAN&&!i.noPan&&y.copy(A(F.pageX,F.pageY))}function Q(){c=r.NONE,i.dispatchEvent(Uo)}function q(F){if(i.enabled!==!1&&i.noZoom!==!0){switch(F.preventDefault(),F.deltaMode){case 2:h.y-=F.deltaY*.025;break;case 1:h.y-=F.deltaY*.01;break;default:h.y-=F.deltaY*25e-5;break}i.dispatchEvent(No),i.dispatchEvent(Uo)}}function se(F){switch(V(F),T.length){case 1:c=r.TOUCH_ROTATE,v.copy(R(T[0].pageX,T[0].pageY)),g.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const J=T[0].pageX-T[1].pageX,le=T[0].pageY-T[1].pageY;f=u=Math.sqrt(J*J+le*le);const pe=(T[0].pageX+T[1].pageX)/2,Ee=(T[0].pageY+T[1].pageY)/2;_.copy(A(pe,Ee)),y.copy(_);break}i.dispatchEvent(No)}function K(F){switch(V(F),T.length){case 1:g.copy(v),v.copy(R(F.pageX,F.pageY));break;default:const J=ee(F),le=F.pageX-J.x,pe=F.pageY-J.y;f=Math.sqrt(le*le+pe*pe);const Ee=(F.pageX+J.x)/2,D=(F.pageY+J.y)/2;y.copy(A(Ee,D));break}}function te(F){switch(T.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(R(F.pageX,F.pageY)),g.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let J=0;J<T.length;J++)if(T[J].pointerId!==F.pointerId){const le=S[T[J].pointerId];v.copy(R(le.x,le.y)),g.copy(v);break}break}i.dispatchEvent(Uo)}function ue(F){i.enabled!==!1&&F.preventDefault()}function Me(F){T.push(F)}function z(F){delete S[F.pointerId];for(let J=0;J<T.length;J++)if(T[J].pointerId==F.pointerId){T.splice(J,1);return}}function V(F){let J=S[F.pointerId];J===void 0&&(J=new fe,S[F.pointerId]=J),J.set(F.pageX,F.pageY)}function ee(F){const J=F.pointerId===T[0].pointerId?T[1]:T[0];return S[J.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ue),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",q),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",H),window.removeEventListener("keyup",I)},this.domElement.addEventListener("contextmenu",ue),this.domElement.addEventListener("pointerdown",E),this.domElement.addEventListener("pointercancel",B),this.domElement.addEventListener("wheel",q,{passive:!1}),window.addEventListener("keydown",H),window.addEventListener("keyup",I),this.handleResize(),this.update()}}const mu={type:"change"},Fo={type:"start"},gu={type:"end"},ca=new Ua,vu=new Mn,pM=Math.cos(70*Ms.DEG2RAD);class mM extends rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",ge),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ge),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mu),i.update(),a=r.NONE},this.update=function(){const x=new N,W=new nn().setFromUnitVectors(e.up,new N(0,1,0)),j=W.clone().invert(),Z=new N,re=new nn,we=new N,Ne=2*Math.PI;return function(ft=null){const je=i.object.position;x.copy(je).sub(i.target),x.applyQuaternion(W),s.setFromVector3(x),i.autoRotate&&a===r.NONE&&B(M(ft)),i.enableDamping?(s.theta+=c.theta*i.dampingFactor,s.phi+=c.phi*i.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let ht=i.minAzimuthAngle,ct=i.maxAzimuthAngle;isFinite(ht)&&isFinite(ct)&&(ht<-Math.PI?ht+=Ne:ht>Math.PI&&(ht-=Ne),ct<-Math.PI?ct+=Ne:ct>Math.PI&&(ct-=Ne),ht<=ct?s.theta=Math.max(ht,Math.min(ct,s.theta)):s.theta=s.theta>(ht+ct)/2?Math.max(ht,s.theta):Math.min(ct,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Dn=!1;if(i.zoomToCursor&&S||i.object.isOrthographicCamera)s.radius=K(s.radius);else{const yt=s.radius;s.radius=K(s.radius*l),Dn=yt!=s.radius}if(x.setFromSpherical(s),x.applyQuaternion(j),je.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&S){let yt=null;if(i.object.isPerspectiveCamera){const hn=x.length();yt=K(hn*l);const Kn=hn-yt;i.object.position.addScaledVector(y,Kn),i.object.updateMatrixWorld(),Dn=!!Kn}else if(i.object.isOrthographicCamera){const hn=new N(T.x,T.y,0);hn.unproject(i.object);const Kn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Dn=Kn!==i.object.zoom;const Qi=new N(T.x,T.y,0);Qi.unproject(i.object),i.object.position.sub(Qi).add(hn),i.object.updateMatrixWorld(),yt=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;yt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(yt).add(i.object.position):(ca.origin.copy(i.object.position),ca.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ca.direction))<pM?e.lookAt(i.target):(vu.setFromNormalAndCoplanarPoint(i.object.up,i.target),ca.intersectPlane(vu,i.target))))}else if(i.object.isOrthographicCamera){const yt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),yt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Dn=!0)}return l=1,S=!1,Dn||Z.distanceToSquared(i.object.position)>o||8*(1-re.dot(i.object.quaternion))>o||we.distanceToSquared(i.target)>o?(i.dispatchEvent(mu),Z.copy(i.object.position),re.copy(i.object.quaternion),we.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",Be),i.domElement.removeEventListener("pointercancel",w),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.domElement.getRootNode().removeEventListener("keydown",Ae,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ge),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new ws,c=new ws;let l=1;const u=new N,f=new fe,d=new fe,p=new fe,g=new fe,v=new fe,m=new fe,h=new fe,b=new fe,_=new fe,y=new N,T=new fe;let S=!1;const A=[],R={};let E=!1;function M(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function P(x){const W=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*W)}function B(x){c.theta-=x}function H(x){c.phi-=x}const I=function(){const x=new N;return function(j,Z){x.setFromMatrixColumn(Z,0),x.multiplyScalar(-j),u.add(x)}}(),O=function(){const x=new N;return function(j,Z){i.screenSpacePanning===!0?x.setFromMatrixColumn(Z,1):(x.setFromMatrixColumn(Z,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(j),u.add(x)}}(),U=function(){const x=new N;return function(j,Z){const re=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;x.copy(we).sub(i.target);let Ne=x.length();Ne*=Math.tan(i.object.fov/2*Math.PI/180),I(2*j*Ne/re.clientHeight,i.object.matrix),O(2*Z*Ne/re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(j*(i.object.right-i.object.left)/i.object.zoom/re.clientWidth,i.object.matrix),O(Z*(i.object.top-i.object.bottom)/i.object.zoom/re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(x,W){if(!i.zoomToCursor)return;S=!0;const j=i.domElement.getBoundingClientRect(),Z=x-j.left,re=W-j.top,we=j.width,Ne=j.height;T.x=Z/we*2-1,T.y=-(re/Ne)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function te(x){f.set(x.clientX,x.clientY)}function ue(x){se(x.clientX,x.clientX),h.set(x.clientX,x.clientY)}function Me(x){g.set(x.clientX,x.clientY)}function z(x){d.set(x.clientX,x.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const W=i.domElement;B(2*Math.PI*p.x/W.clientHeight),H(2*Math.PI*p.y/W.clientHeight),f.copy(d),i.update()}function V(x){b.set(x.clientX,x.clientY),_.subVectors(b,h),_.y>0?Q(P(_.y)):_.y<0&&q(P(_.y)),h.copy(b),i.update()}function ee(x){v.set(x.clientX,x.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),U(m.x,m.y),g.copy(v),i.update()}function F(x){se(x.clientX,x.clientY),x.deltaY<0?q(P(x.deltaY)):x.deltaY>0&&Q(P(x.deltaY)),i.update()}function J(x){let W=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),W=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),W=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),W=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),W=!0;break}W&&(x.preventDefault(),i.update())}function le(x){if(A.length===1)f.set(x.pageX,x.pageY);else{const W=Fe(x),j=.5*(x.pageX+W.x),Z=.5*(x.pageY+W.y);f.set(j,Z)}}function pe(x){if(A.length===1)g.set(x.pageX,x.pageY);else{const W=Fe(x),j=.5*(x.pageX+W.x),Z=.5*(x.pageY+W.y);g.set(j,Z)}}function Ee(x){const W=Fe(x),j=x.pageX-W.x,Z=x.pageY-W.y,re=Math.sqrt(j*j+Z*Z);h.set(0,re)}function D(x){i.enableZoom&&Ee(x),i.enablePan&&pe(x)}function Je(x){i.enableZoom&&Ee(x),i.enableRotate&&le(x)}function Ie(x){if(A.length==1)d.set(x.pageX,x.pageY);else{const j=Fe(x),Z=.5*(x.pageX+j.x),re=.5*(x.pageY+j.y);d.set(Z,re)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const W=i.domElement;B(2*Math.PI*p.x/W.clientHeight),H(2*Math.PI*p.y/W.clientHeight),f.copy(d)}function Ve(x){if(A.length===1)v.set(x.pageX,x.pageY);else{const W=Fe(x),j=.5*(x.pageX+W.x),Z=.5*(x.pageY+W.y);v.set(j,Z)}m.subVectors(v,g).multiplyScalar(i.panSpeed),U(m.x,m.y),g.copy(v)}function _e(x){const W=Fe(x),j=x.pageX-W.x,Z=x.pageY-W.y,re=Math.sqrt(j*j+Z*Z);b.set(0,re),_.set(0,Math.pow(b.y/h.y,i.zoomSpeed)),Q(_.y),h.copy(b);const we=(x.pageX+W.x)*.5,Ne=(x.pageY+W.y)*.5;se(we,Ne)}function Xe(x){i.enableZoom&&_e(x),i.enablePan&&Ve(x)}function Re(x){i.enableZoom&&_e(x),i.enableRotate&&Ie(x)}function Be(x){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",w)),!ye(x)&&(Ge(x),x.pointerType==="touch"?ke(x):Y(x)))}function L(x){i.enabled!==!1&&(x.pointerType==="touch"?oe(x):ie(x))}function w(x){switch(Le(x),A.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.dispatchEvent(gu),a=r.NONE;break;case 1:const W=A[0],j=R[W];ke({pointerId:W,pageX:j.x,pageY:j.y});break}}function Y(x){let W;switch(x.button){case 0:W=i.mouseButtons.LEFT;break;case 1:W=i.mouseButtons.MIDDLE;break;case 2:W=i.mouseButtons.RIGHT;break;default:W=-1}switch(W){case an.DOLLY:if(i.enableZoom===!1)return;ue(x),a=r.DOLLY;break;case an.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;Me(x),a=r.PAN}else{if(i.enableRotate===!1)return;te(x),a=r.ROTATE}break;case an.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;te(x),a=r.ROTATE}else{if(i.enablePan===!1)return;Me(x),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Fo)}function ie(x){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;z(x);break;case r.DOLLY:if(i.enableZoom===!1)return;V(x);break;case r.PAN:if(i.enablePan===!1)return;ee(x);break}}function ae(x){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(x.preventDefault(),i.dispatchEvent(Fo),F(ne(x)),i.dispatchEvent(gu))}function ne(x){const W=x.deltaMode,j={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(W){case 1:j.deltaY*=16;break;case 2:j.deltaY*=100;break}return x.ctrlKey&&!E&&(j.deltaY*=10),j}function Ae(x){x.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(x){x.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",he,{passive:!0,capture:!0}))}function ge(x){i.enabled===!1||i.enablePan===!1||J(x)}function ke(x){switch(Oe(x),A.length){case 1:switch(i.touches.ONE){case mi.ROTATE:if(i.enableRotate===!1)return;le(x),a=r.TOUCH_ROTATE;break;case mi.PAN:if(i.enablePan===!1)return;pe(x),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case mi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(x),a=r.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Je(x),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Fo)}function oe(x){switch(Oe(x),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ie(x),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ve(x),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(x),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Re(x),i.update();break;default:a=r.NONE}}function ve(x){i.enabled!==!1&&x.preventDefault()}function Ge(x){A.push(x.pointerId)}function Le(x){delete R[x.pointerId];for(let W=0;W<A.length;W++)if(A[W]==x.pointerId){A.splice(W,1);return}}function ye(x){for(let W=0;W<A.length;W++)if(A[W]==x.pointerId)return!0;return!1}function Oe(x){let W=R[x.pointerId];W===void 0&&(W=new fe,R[x.pointerId]=W),W.set(x.pageX,x.pageY)}function Fe(x){const W=x.pointerId===A[0]?A[1]:A[0];return R[W]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",Be),i.domElement.addEventListener("pointercancel",w),i.domElement.addEventListener("wheel",ae,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ae,{passive:!0,capture:!0}),this.update()}}const gM={type:"change"};class vM extends rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,a=new nn,o=new N;this.tmpQuaternion=new nn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new N(0,0,0),this.rotationVector=new N(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),m=v.size[0]/2,h=v.size[1]/2;this.moveState.yawLeft=-(g.pageX-v.offset[0]-m)/m,this.moveState.pitchDown=(g.pageY-v.offset[1]-h)/h,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const v=g*i.movementSpeed,m=g*i.rollSpeed;i.object.translateX(i.moveVector.x*v),i.object.translateY(i.moveVector.y*v),i.object.translateZ(i.moveVector.z*v),i.tmpQuaternion.set(i.rotationVector.x*m,i.rotationVector.y*m,i.rotationVector.z*m,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(o.distanceToSquared(i.object.position)>r||8*(1-a.dot(i.object.quaternion))>r)&&(i.dispatchEvent(gM),a.copy(i.object.quaternion),o.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",s),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",c),this.domElement.removeEventListener("pointerup",u),this.domElement.removeEventListener("pointercancel",f),window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)};const s=this.contextMenu.bind(this),c=this.pointermove.bind(this),l=this.pointerdown.bind(this),u=this.pointerup.bind(this),f=this.pointercancel.bind(this),d=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",s),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",c),this.domElement.addEventListener("pointerup",u),this.domElement.addEventListener("pointercancel",f),window.addEventListener("keydown",d),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}const _M={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Va{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yM=new ec(-1,1,1,-1,0,1);class xM extends Bt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const bM=new xM;class MM{constructor(e){this._mesh=new Wt(bM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class SM extends Va{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ju.clone(e.uniforms),this.material=new un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new MM(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _u extends Va{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class EM extends Va{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new SM(_M),this.copyPass.material.blending=Cn,this.clock=new hf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}_u!==void 0&&(o instanceof _u?i=!0:o instanceof EM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class TM extends Va{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}function Lt(){return Lt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Lt.apply(null,arguments)}function AM(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Tr(n,e){return Tr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},Tr(n,e)}function CM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Tr(n,e)}function Os(n){return Os=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Os(n)}function RM(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch{return typeof n=="function"}}function Xf(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Xf=function(){return!!n})()}function PM(n,e,t){if(Xf())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var r=new(n.bind.apply(n,i));return t&&Tr(r,t.prototype),r}function Ns(n){var e=typeof Map=="function"?new Map:void 0;return Ns=function(i){if(i===null||!RM(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return PM(i,arguments,Os(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Tr(r,i)},Ns(n)}var cn=function(n){CM(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,AM(i)}return e}(Ns(Error));function Bo(n){return Math.round(n*255)}function LM(n,e,t){return Bo(n)+","+Bo(e)+","+Bo(t)}function Ar(n,e,t,i){if(i===void 0&&(i=LM),e===0)return i(t,t,t);var r=(n%360+360)%360/60,a=(1-Math.abs(2*t-1))*e,o=a*(1-Math.abs(r%2-1)),s=0,c=0,l=0;r>=0&&r<1?(s=a,c=o):r>=1&&r<2?(s=o,c=a):r>=2&&r<3?(c=a,l=o):r>=3&&r<4?(c=o,l=a):r>=4&&r<5?(s=o,l=a):r>=5&&r<6&&(s=a,l=o);var u=t-a/2,f=s+u,d=c+u,p=l+u;return i(f,d,p)}var yu={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function DM(n){if(typeof n!="string")return n;var e=n.toLowerCase();return yu[e]?"#"+yu[e]:n}var IM=/^#[a-fA-F0-9]{6}$/,OM=/^#[a-fA-F0-9]{8}$/,NM=/^#[a-fA-F0-9]{3}$/,UM=/^#[a-fA-F0-9]{4}$/,ko=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,FM=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,BM=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,kM=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function hi(n){if(typeof n!="string")throw new cn(3);var e=DM(n);if(e.match(IM))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(OM)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(NM))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(UM)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=ko.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var a=FM.exec(e.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var o=BM.exec(e);if(o){var s=parseInt(""+o[1],10),c=parseInt(""+o[2],10)/100,l=parseInt(""+o[3],10)/100,u="rgb("+Ar(s,c,l)+")",f=ko.exec(u);if(!f)throw new cn(4,e,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var d=kM.exec(e.substring(0,50));if(d){var p=parseInt(""+d[1],10),g=parseInt(""+d[2],10)/100,v=parseInt(""+d[3],10)/100,m="rgb("+Ar(p,g,v)+")",h=ko.exec(m);if(!h)throw new cn(4,e,m);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10),alpha:parseFloat(""+d[4])>1?parseFloat(""+d[4])/100:parseFloat(""+d[4])}}throw new cn(5)}function zM(n){var e=n.red/255,t=n.green/255,i=n.blue/255,r=Math.max(e,t,i),a=Math.min(e,t,i),o=(r+a)/2;if(r===a)return n.alpha!==void 0?{hue:0,saturation:0,lightness:o,alpha:n.alpha}:{hue:0,saturation:0,lightness:o};var s,c=r-a,l=o>.5?c/(2-r-a):c/(r+a);switch(r){case e:s=(t-i)/c+(t<i?6:0);break;case t:s=(i-e)/c+2;break;default:s=(e-t)/c+4;break}return s*=60,n.alpha!==void 0?{hue:s,saturation:l,lightness:o,alpha:n.alpha}:{hue:s,saturation:l,lightness:o}}function qn(n){return zM(hi(n))}var HM=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},Us=HM;function ri(n){var e=n.toString(16);return e.length===1?"0"+e:e}function zo(n){return ri(Math.round(n*255))}function VM(n,e,t){return Us("#"+zo(n)+zo(e)+zo(t))}function Fs(n,e,t){return Ar(n,e,t,VM)}function GM(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return Fs(n,e,t);if(typeof n=="object"&&e===void 0&&t===void 0)return Fs(n.hue,n.saturation,n.lightness);throw new cn(1)}function WM(n,e,t,i){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return"rgba("+Ar(n,e,t)+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?Fs(n.hue,n.saturation,n.lightness):"rgba("+Ar(n.hue,n.saturation,n.lightness)+","+n.alpha+")";throw new cn(2)}function $f(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return Us("#"+ri(n)+ri(e)+ri(t));if(typeof n=="object"&&e===void 0&&t===void 0)return Us("#"+ri(n.red)+ri(n.green)+ri(n.blue));throw new cn(6)}function Ga(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=hi(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?$f(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new cn(7)}var jM=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},XM=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},$M=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},qM=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function Yn(n){if(typeof n!="object")throw new cn(8);if(XM(n))return Ga(n);if(jM(n))return $f(n);if(qM(n))return WM(n);if($M(n))return GM(n);throw new cn(8)}function qf(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):qf(n,e,r)}}function kt(n){return qf(n,n.length,[])}function YM(n,e){if(e==="transparent")return e;var t=qn(e);return Yn(Lt({},t,{hue:t.hue+parseFloat(n)}))}kt(YM);function Ji(n,e,t){return Math.max(n,Math.min(e,t))}function KM(n,e){if(e==="transparent")return e;var t=qn(e);return Yn(Lt({},t,{lightness:Ji(0,1,t.lightness-parseFloat(n))}))}kt(KM);function ZM(n,e){if(e==="transparent")return e;var t=qn(e);return Yn(Lt({},t,{saturation:Ji(0,1,t.saturation-parseFloat(n))}))}kt(ZM);function JM(n,e){if(e==="transparent")return e;var t=qn(e);return Yn(Lt({},t,{lightness:Ji(0,1,t.lightness+parseFloat(n))}))}kt(JM);function QM(n,e,t){if(e==="transparent")return t;if(t==="transparent")return e;if(n===0)return t;var i=hi(e),r=Lt({},i,{alpha:typeof i.alpha=="number"?i.alpha:1}),a=hi(t),o=Lt({},a,{alpha:typeof a.alpha=="number"?a.alpha:1}),s=r.alpha-o.alpha,c=parseFloat(n)*2-1,l=c*s===-1?c:c+s,u=1+c*s,f=(l/u+1)/2,d=1-f,p={red:Math.floor(r.red*f+o.red*d),green:Math.floor(r.green*f+o.green*d),blue:Math.floor(r.blue*f+o.blue*d),alpha:r.alpha*parseFloat(n)+o.alpha*(1-parseFloat(n))};return Ga(p)}var eS=kt(QM),Yf=eS;function tS(n,e){if(e==="transparent")return e;var t=hi(e),i=typeof t.alpha=="number"?t.alpha:1,r=Lt({},t,{alpha:Ji(0,1,(i*100+parseFloat(n)*100)/100)});return Ga(r)}var nS=kt(tS),iS=nS;function rS(n,e){if(e==="transparent")return e;var t=qn(e);return Yn(Lt({},t,{saturation:Ji(0,1,t.saturation+parseFloat(n))}))}kt(rS);function aS(n,e){return e==="transparent"?e:Yn(Lt({},qn(e),{hue:parseFloat(n)}))}kt(aS);function oS(n,e){return e==="transparent"?e:Yn(Lt({},qn(e),{lightness:parseFloat(n)}))}kt(oS);function sS(n,e){return e==="transparent"?e:Yn(Lt({},qn(e),{saturation:parseFloat(n)}))}kt(sS);function cS(n,e){return e==="transparent"?e:Yf(parseFloat(n),"rgb(0, 0, 0)",e)}kt(cS);function lS(n,e){return e==="transparent"?e:Yf(parseFloat(n),"rgb(255, 255, 255)",e)}kt(lS);function uS(n,e){if(e==="transparent")return e;var t=hi(e),i=typeof t.alpha=="number"?t.alpha:1,r=Lt({},t,{alpha:Ji(0,1,+(i*100-parseFloat(n)*100).toFixed(2)/100)});return Ga(r)}kt(uS);var li=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-li.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?li.Bounce.In(n*2)*.5:li.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),gr=function(){return performance.now()},fS=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=gr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var a=this._tweens[i[r]],o=!t;a&&a.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Fi={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),a=Fi.Utils.Linear;return e<0?a(n[0],n[1],i):e>1?a(n[t],n[t-1],t-i):a(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,a=Fi.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*a(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),a=Fi.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),a(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(a(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(a(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):a(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Fi.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var a=(t-n)*.5,o=(i-e)*.5,s=r*r,c=r*s;return(2*e-2*t+a+o)*c+(-3*e+3*t-2*a-o)*s+a*r+e}}},hS=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Bs=new fS,xu=function(){function n(e,t){t===void 0&&(t=Bs),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=li.Linear.None,this._interpolationFunction=Fi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=hS.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=gr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var a in this._valuesEnd)r[a]=this._valuesEnd[a];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,a){for(var o in i){var s=e[o],c=Array.isArray(s),l=c?"array":typeof s,u=!c&&Array.isArray(i[o]);if(!(l==="undefined"||l==="function")){if(u){var f=i[o];if(f.length===0)continue;for(var d=[s],p=0,g=f.length;p<g;p+=1){var v=this._handleRelativeValue(s,f[p]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(v)}u&&(i[o]=d)}if((l==="object"||c)&&s&&!u){t[o]=c?[]:{};var m=s;for(var h in m)t[o][h]=m[h];r[o]=c?[]:{};var f=i[o];if(!this._isDynamic){var b={};for(var h in f)b[h]=f[h];i[o]=f=b}this._setupProperties(m,t[o],f,r[o],a)}else(typeof t[o]>"u"||a)&&(t[o]=s),c||(t[o]*=1),u?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=gr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=gr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=Bs),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=li.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Fi.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=gr()),t===void 0&&(t=!0),this._isPaused)return!0;var a,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var s=e-this._startTime,c=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),l=this._duration+this._repeat*c,u=function(){if(i._duration===0||s>l)return 1;var m=Math.trunc(s/c),h=s-m*c,b=Math.min(h/i._duration,1);return b===0&&s===i._duration?1:b},f=u(),d=this._easingFunction(f);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,f),this._duration===0||s>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((s-this._duration)/c)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(a in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[a]=="string"&&(this._valuesStartRepeat[a]=this._valuesStartRepeat[a]+parseFloat(this._valuesEnd[a])),this._yoyo&&this._swapEndStartRepeatValues(a),this._valuesStart[a]=this._valuesStartRepeat[a];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=c*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,v=this._chainedTweens.length;g<v;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var a in i)if(t[a]!==void 0){var o=t[a]||0,s=i[a],c=Array.isArray(e[a]),l=Array.isArray(s),u=!c&&l;u?e[a]=this._interpolationFunction(s,r):typeof s=="object"&&s?this._updateProperties(e[a],o,s,r):(s=this._handleRelativeValue(o,s),typeof s=="number"&&(e[a]=o+(s-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),fn=Bs;fn.getAll.bind(fn);fn.removeAll.bind(fn);fn.add.bind(fn);fn.remove.bind(fn);var dS=fn.update.bind(fn);function pS(n,e){if(e={},e.insertAt,!(typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var mS=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;pS(mS);function gS(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e!==0)for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function vS(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function _S(n){var e=vS(n,"string");return typeof e=="symbol"?e:e+""}function yS(n,e,t){return e=_S(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xS(n,e){return MS(n)||gS(n,e)||Kf(n,e)||wS()}function fr(n){return bS(n)||SS(n)||Kf(n)||ES()}function bS(n){if(Array.isArray(n))return ks(n)}function MS(n){if(Array.isArray(n))return n}function SS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Kf(n,e){if(n){if(typeof n=="string")return ks(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ks(n,e)}}function ks(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function ES(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var it=window.THREE?window.THREE:{WebGLRenderer:a0,Scene:o0,PerspectiveCamera:Vt,Raycaster:df,SRGBColorSpace:Kt,TextureLoader:A0,Vector2:fe,Vector3:N,Box3:di,Color:We,Mesh:Wt,SphereGeometry:za,MeshBasicMaterial:Js,BackSide:Ct,EventDispatcher:rn,MOUSE:an,Quaternion:nn,Spherical:ws,Clock:hf},Zf=gc({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(Math.min(1,e.clock.getDelta())),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(a){return a.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(a){return e.hoverFilter(a.object)}).sort(function(a,o){return e.hoverOrderComparator(a.object,o.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&$e(e.tooltipContent)(t)||"",e.hoverObj=t)}dS()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var a=e.camera;if(t&&e.initialised){var o=t,s=i||{x:0,y:0,z:0};if(!r)u(o),f(s);else{var c=Object.assign({},a.position),l=d();new xu(c).to(o,r).easing(li.Quadratic.Out).onUpdate(u).start(),new xu(l).to(s,r/3).easing(li.Quadratic.Out).onUpdate(f).start()}return this}return Object.assign({},a.position,{lookAt:d()});function u(p){var g=p.x,v=p.y,m=p.z;g!==void 0&&(a.position.x=g),v!==void 0&&(a.position.y=v),m!==void 0&&(a.position.z=m)}function f(p){var g=new it.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:a.lookAt(g)}function d(){return Object.assign(new it.Vector3(0,0,-1e3).applyQuaternion(a.quaternion).add(a.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return this.fitToBbox(this.getBbox.apply(this,a),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,a=e.camera;if(t){var o=new it.Vector3(0,0,0),s=Math.max.apply(Math,fr(Object.entries(t).map(function(p){var g=xS(p,2),v=g[0],m=g[1];return Math.max.apply(Math,fr(m.map(function(h){return Math.abs(o[v]-h)})))})))*2,c=(1-r*2/e.height)*a.fov,l=s/Math.atan(c*Math.PI/180),u=l/a.aspect,f=Math.max(l,u);if(f>0){var d=o.clone().sub(a.position).normalize().multiplyScalar(-f);this.cameraPosition(d,o,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new it.Box3(new it.Vector3(0,0,0),new it.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(a){return i.expandByObject(a)}),Object.assign.apply(Object,fr(["x","y","z"].map(function(a){return yS({},a,[i.min[a],i.max[a]])})))):null},getScreenCoords:function(e,t,i,r){var a=new it.Vector3(t,i,r);return a.project(this.camera()),{x:(a.x+1)*e.width/2,y:-(a.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=new it.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new it.Raycaster;return o.setFromCamera(a,e.camera),Object.assign({},o.ray.at(r,new it.Vector3))},intersectingObjects:function(e,t,i){var r=new it.Vector2(t/e.width*2-1,-(i/e.height)*2+1),a=new it.Raycaster;return a.params.Line.threshold=e.lineHoverPrecision,a.setFromCamera(r,e.camera),a.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new it.Scene,camera:new it.PerspectiveCamera,clock:new it.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,a=r===void 0?"trackball":r,o=i.rendererConfig,s=o===void 0?{}:o,c=i.extraRenderers,l=c===void 0?[]:c,u=i.waitForLoadComplete,f=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[a]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new it.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(d){return t.container.addEventListener(d,function(p){if(d==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(m){return Math.abs(m)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=v(t.container);t.pointerPos.x=p.pageX-g.left,t.pointerPos.y=p.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(m){var h=m.getBoundingClientRect(),b=window.pageXOffset||document.documentElement.scrollLeft,_=window.pageYOffset||document.documentElement.scrollTop;return{top:h.top+_,left:h.left+b}}},{passive:!0})}),t.container.addEventListener("pointerup",function(d){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){d.button===0&&t.onClick(t.hoverObj||null,d,t.intersectionPoint),d.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,d,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(d){t.onRightClick&&d.preventDefault()}),t.renderer=new it.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},s)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=l,t.extraRenderers.forEach(function(d){d.domElement.style.position="absolute",d.domElement.style.top="0px",d.domElement.style.pointerEvents="none",t.container.appendChild(d.domElement)}),t.postProcessingComposer=new wM(t.renderer),t.postProcessingComposer.addPass(new TM(t.scene,t.camera)),t.controls=new{trackball:dM,orbit:mM,fly:vM}[a](t.camera,t.renderer.domElement),a==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(a==="trackball"||a==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(fr(t.extraRenderers)).forEach(function(d){return d.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new it.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!f,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(fr(e.extraRenderers)).forEach(function(a){return a.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new it.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=hi(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new it.Color(iS(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new it.TextureLoader().load(e.backgroundImageUrl,function(a){a.colorSpace=it.SRGBColorSpace,e.skysphere.material=new it.MeshBasicMaterial({map:a,side:it.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("lights")&&((t.lights||[]).forEach(function(a){return e.scene.remove(a)}),e.lights.forEach(function(a){return e.scene.add(a)})),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(a){return e.scene.remove(a)}),e.objects.forEach(function(a){return e.scene.add(a)}));function r(){e.loadComplete=e.scene.visible=!0}}});function TS(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var AS=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;TS(AS);function bu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function la(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?bu(Object(t),!0).forEach(function(i){Pr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function CS(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function RS(n){var e=CS(n,"string");return typeof e=="symbol"?e:e+""}function Pr(n,e,t){return e=RS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Wa(n){return PS(n)||LS(n)||DS(n)||IS()}function PS(n){if(Array.isArray(n))return zs(n)}function LS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function DS(n,e){if(n){if(typeof n=="string")return zs(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zs(n,e)}}function zs(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function IS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jf(n,e){var t=new e;return t._destructor&&t._destructor(),{linkProp:function(r){return{default:t[r](),onChange:function(o,s){s[n][r](o)},triggerUpdate:!1}},linkMethod:function(r){return function(a){for(var o=a[n],s=arguments.length,c=new Array(s>1?s-1:0),l=1;l<s;l++)c[l-1]=arguments[l];var u=o[r].apply(o,c);return u===o?this:u}}}}var Ho=window.THREE?window.THREE:{AmbientLight:L0,DirectionalLight:P0,Vector3:N,REVISION:Da},OS=170,Qf=Jf("forceGraph",jf),NS=Object.assign.apply(Object,Wa(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return Pr({},n,Qf.linkProp(n))}))),US=Object.assign.apply(Object,Wa(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return Pr({},n,Qf.linkMethod(n))}))),va=Jf("renderObjs",Zf),FS=Object.assign.apply(Object,Wa(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return Pr({},n,va.linkProp(n))}))),BS=Object.assign.apply(Object,Wa(["lights","cameraPosition","postProcessingComposer"].map(function(n){return Pr({},n,va.linkMethod(n))})).concat([{graph2ScreenCoords:va.linkMethod("getScreenCoords"),screen2GraphCoords:va.linkMethod("getSceneCoords")}])),kS=gc({props:la(la({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},NS),FS),methods:la(la({zoomToFit:function(e,t,i){for(var r,a=arguments.length,o=new Array(a>3?a-3:0),s=3;s<a;s++)o[s-3]=arguments[s];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,o),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},US),BS),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers,a=new jf;return{forceGraph:a,renderObjs:Zf({controlType:t,rendererConfig:i,extraRenderers:r}).objects([a]).lights([new Ho.AmbientLight(13421772,Math.PI),new Ho.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),a=t.renderObjs.renderer(),o=t.renderObjs.controls();o.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var s;t.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",t.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*OS)}).onFinishUpdate(function(){if(t._dragControls){var c=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});c?c.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var l=t._dragControls=new D0(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,a.domElement);l.addEventListener("dragstart",function(u){o.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var f=xn(u.object).__data;!f.__initialFixedPos&&(f.__initialFixedPos={fx:f.fx,fy:f.fy,fz:f.fz}),!f.__initialPos&&(f.__initialPos={x:f.x,y:f.y,z:f.z}),["x","y","z"].forEach(function(d){return f["f".concat(d)]=f[d]}),a.domElement.classList.add("grabbable")}),l.addEventListener("drag",function(u){var f=xn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var d=u.object.__initialPos,p=u.object.__prevPos,g=u.object.position;f.position.add(g.clone().sub(p)),p.copy(g),g.copy(d)}var v=f.__data,m=f.position,h={x:m.x-v.x,y:m.y-v.y,z:m.z-v.z};["x","y","z"].forEach(function(b){return v["f".concat(b)]=v[b]=m[b]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,t.onNodeDrag(v,h)}),l.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var f=xn(u.object).__data;f.__disposeControlsAfterDrag&&(l.dispose(),delete f.__disposeControlsAfterDrag);var d=f.__initialFixedPos,p=f.__initialPos,g={x:p.x-f.x,y:p.y-f.y,z:p.z-f.z};d&&(["x","y","z"].forEach(function(v){var m="f".concat(v);d[m]===void 0&&delete f[m]}),delete f.__initialFixedPos,delete f.__initialPos,f.__dragged&&(delete f.__dragged,t.onNodeDragEnd(f,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(o.enabled=!0,o.domElement&&o.domElement.ownerDocument&&o.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),a.domElement.classList.remove("grabbable")})}}),Ho.REVISION<155&&(t.renderObjs.renderer().useLegacyLights=!1),t.renderObjs.hoverOrderComparator(function(c,l){var u=xn(c);if(!u)return 1;var f=xn(l);if(!f)return-1;var d=function(g){return g.__graphObjType==="node"};return d(f)-d(u)}).tooltipContent(function(c){var l=xn(c);return l&&$e(t["".concat(l.__graphObjType,"Label")])(l.__data)||""}).hoverDuringDrag(!1).onHover(function(c){var l=xn(c);if(l!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,f=t.hoverObj?t.hoverObj.__data:null,d=l?l.__graphObjType:null,p=l?l.__data:null;if(u&&u!==d){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,f)}if(d){var v=t["on".concat(d==="node"?"Node":"Link","Hover")];v&&v(p,u===d?f:null)}a.domElement.classList[l&&t["on".concat(d==="node"?"Node":"Link","Click")]||!l&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=l}}).clickAfterDrag(!1).onClick(function(c,l){var u=xn(c);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];f&&f(u.__data,l)}else t.onBackgroundClick&&t.onBackgroundClick(l)}).onRightClick(function(c,l){var u=xn(c);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];f&&f(u.__data,l)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(l)}),this._animationCycle()}});function xn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}var zS=sh("<div class=grow>hola");function jS(n){let e;const t=ch(),[i,r]=rh(null),a=kS();return Sc(()=>{t.themeManager.onChange((o,s)=>{r(o)}),a(e)}),qa(()=>{const[o,s]=n.size;o===0||s===0||(a.width(o),a.height(s))}),qa(()=>{console.log("NEW DATYA");const o=n.data;a.graphData(o)}),qa(()=>{if(!i())return;if(n.data&&e)if(a.linkOpacity(.5),a.onNodeClick((s,c)=>{t.ui.sidebar.set({active:!0,view:"board",data:s.id})}),a.nodeResolution(32),i()==="light"){let s=getComputedStyle(document.body).getPropertyValue("--hex-accent-50");a.backgroundColor(s)}else{let s=getComputedStyle(document.body).getPropertyValue("--hex-accent-950");a.backgroundColor(s)}}),Sc(()=>{setTimeout(()=>{a.graphData().nodes.forEach(o=>{o.fx=o.x,o.fy=o.y,o.fz=o.z})},2e3),a.enableNodeDrag(!1)}),(()=>{var o=ah(zS),s=e;return typeof s=="function"?oh(s,o):e=o,o})()}export{jS as default};
