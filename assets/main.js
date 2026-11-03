/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qi="150";const Ct="srgb",Un="srgb-linear",Vr="display-p3";const Ki="300 es";class vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ji=1234567;const Fn=Math.PI/180,ui=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tt[s&255]+tt[s>>8&255]+tt[s>>16&255]+tt[s>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[n&255]+tt[n>>8&255]+tt[n>>16&255]+tt[n>>24&255]).toLowerCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function Xi(s,e){return(s%e+e)%e}function ms(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gs(s,e,t){return s!==e?(t-s)/(e-s):0}function In(s,e,t){return(1-t)*s+t*e}function _s(s,e,t,n){return In(s,e,1-Math.exp(-t*n))}function xs(s,e=1){return e-Math.abs(Xi(s,e*2)-e)}function vs(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ms(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ss(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ys(s,e){return s+Math.random()*(e-s)}function bs(s){return s*(.5-Math.random())}function ws(s){s!==void 0&&(Ji=s);let e=Ji+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ts(s){return s*Fn}function Es(s){return s*ui}function ki(s){return(s&s-1)===0&&s!==0}function As(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cs(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),u=o(t/2),c=r((e+n)/2),l=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*l,u*h,u*d,a*c);break;case"YZY":s.set(u*d,a*l,u*h,a*c);break;case"ZXZ":s.set(u*h,u*d,a*l,a*c);break;case"XZX":s.set(a*l,u*_,u*m,a*c);break;case"YXY":s.set(u*m,a*l,u*_,a*c);break;case"ZYZ":s.set(u*_,u*m,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:Fn,RAD2DEG:ui,generateUUID:Mn,clamp:ct,euclideanModulo:Xi,mapLinear:ms,inverseLerp:gs,lerp:In,damp:_s,pingpong:xs,smoothstep:vs,smootherstep:Ms,randInt:Ss,randFloat:ys,randFloatSpread:bs,seededRandom:ws,degToRad:Ts,radToDeg:Es,isPowerOfTwo:ki,ceilPowerOfTwo:As,floorPowerOfTwo:kr,setQuaternionFromProperEuler:Cs,normalize:lt,denormalize:Ln};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,u,c){const l=this.elements;return l[0]=e,l[1]=i,l[2]=a,l[3]=t,l[4]=r,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],l=n[4],h=n[7],d=n[2],m=n[5],_=n[8],p=i[0],f=i[3],v=i[6],T=i[1],S=i[4],y=i[7],E=i[2],A=i[5],P=i[8];return r[0]=o*p+a*T+u*E,r[3]=o*f+a*S+u*A,r[6]=o*v+a*y+u*P,r[1]=c*p+l*T+h*E,r[4]=c*f+l*S+h*A,r[7]=c*v+l*y+h*P,r[2]=d*p+m*T+_*E,r[5]=d*f+m*S+_*A,r[8]=d*v+m*y+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*r*l+n*a*u+i*r*c-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],h=l*o-a*c,d=a*u-l*r,m=c*r-o*u,_=t*h+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*c-l*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(l*t-i*u)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*u-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const u=Math.cos(r),c=Math.sin(r);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-i*c,i*u,-i*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vi.makeScale(e,t)),this}rotate(e){return this.premultiply(vi.makeRotation(-e)),this}translate(e,t){return this.premultiply(vi.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vi=new Qe;function Wr(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bn(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}class On{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let u=n[i+0],c=n[i+1],l=n[i+2],h=n[i+3];const d=r[o+0],m=r[o+1],_=r[o+2],p=r[o+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(h!==p||u!==d||c!==m||l!==_){let f=1-a;const v=u*d+c*m+l*_+h*p,T=v>=0?1:-1,S=1-v*v;if(S>Number.EPSILON){const E=Math.sqrt(S),A=Math.atan2(E,v*T);f=Math.sin(f*A)/E,a=Math.sin(a*A)/E}const y=a*T;if(u=u*f+d*y,c=c*f+m*y,l=l*f+_*y,h=h*f+p*y,f===1-a){const E=1/Math.sqrt(u*u+c*c+l*l+h*h);u*=E,c*=E,l*=E,h*=E}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],u=n[i+1],c=n[i+2],l=n[i+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+l*h+u*m-c*d,e[t+1]=u*_+l*d+c*h-a*m,e[t+2]=c*_+l*m+a*d-u*h,e[t+3]=l*_-a*h-u*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(i/2),h=a(r/2),d=u(n/2),m=u(i/2),_=u(r/2);switch(o){case"XYZ":this._x=d*l*h+c*m*_,this._y=c*m*h-d*l*_,this._z=c*l*_+d*m*h,this._w=c*l*h-d*m*_;break;case"YXZ":this._x=d*l*h+c*m*_,this._y=c*m*h-d*l*_,this._z=c*l*_-d*m*h,this._w=c*l*h+d*m*_;break;case"ZXY":this._x=d*l*h-c*m*_,this._y=c*m*h+d*l*_,this._z=c*l*_+d*m*h,this._w=c*l*h-d*m*_;break;case"ZYX":this._x=d*l*h-c*m*_,this._y=c*m*h+d*l*_,this._z=c*l*_-d*m*h,this._w=c*l*h+d*m*_;break;case"YZX":this._x=d*l*h+c*m*_,this._y=c*m*h+d*l*_,this._z=c*l*_-d*m*h,this._w=c*l*h-d*m*_;break;case"XZY":this._x=d*l*h-c*m*_,this._y=c*m*h-d*l*_,this._z=c*l*_+d*m*h,this._w=c*l*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],u=t[9],c=t[2],l=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(l-u)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(l-u)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(u+l)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(u+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,u=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+i*c-r*u,this._y=i*l+o*u+r*a-n*c,this._z=r*l+o*c+n*u-i*a,this._w=o*l-n*a-i*u-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),h=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qi.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qi.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,u=e.w,c=u*t+o*i-a*n,l=u*n+a*t-r*i,h=u*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=c*u+d*-r+l*-a-h*-o,this.y=l*u+d*-o+h*-r-c*-a,this.z=h*u+d*-a+c*-o-l*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,u=t.z;return this.x=i*u-r*a,this.y=r*o-n*u,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mi.copy(this).projectOnVector(e),this.sub(Mi)}reflect(e){return this.sub(Mi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mi=new B,Qi=new On;function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Si(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Rs=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ls=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Ht=new B;function Ds(s){return s.convertSRGBToLinear(),Ht.set(s.r,s.g,s.b).applyMatrix3(Ls),s.setRGB(Ht.x,Ht.y,Ht.z)}function Ps(s){return Ht.set(s.r,s.g,s.b).applyMatrix3(Rs),s.setRGB(Ht.x,Ht.y,Ht.z).convertLinearToSRGB()}const Fs={[Un]:s=>s,[Ct]:s=>s.convertSRGBToLinear(),[Vr]:Ds},Is={[Un]:s=>s,[Ct]:s=>s.convertLinearToSRGB(),[Vr]:Ps},st={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Un},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Fs[e],i=Is[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let tn;class Hr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tn===void 0&&(tn=Bn("canvas")),tn.width=e.width,tn.height=e.height;const n=tn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bn("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class qr{constructor(e=null){this.isSource=!0,this.uuid=Mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(yi(i[o].image)):r.push(yi(i[o]))}else r=yi(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function yi(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ns=0;class ot extends vn{constructor(e=ot.DEFAULT_IMAGE,t=ot.DEFAULT_MAPPING,n=1001,i=1001,r=1006,o=1008,a=1023,u=1009,c=ot.DEFAULT_ANISOTROPY,l=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ns++}),this.uuid=Mn(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ot.DEFAULT_IMAGE=null;ot.DEFAULT_MAPPING=300;ot.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const u=e.elements,c=u[0],l=u[4],h=u[8],d=u[1],m=u[5],_=u[9],p=u[2],f=u[6],v=u[10];if(Math.abs(l-d)<.01&&Math.abs(h-p)<.01&&Math.abs(_-f)<.01){if(Math.abs(l+d)<.1&&Math.abs(h+p)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,E=(v+1)/2,A=(l+d)/4,P=(h+p)/4,g=(_+f)/4;return S>y&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=P/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=g/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=P/r,i=g/r),this.set(n,i,r,t),this}let T=Math.sqrt((f-_)*(f-_)+(h-p)*(h-p)+(d-l)*(d-l));return Math.abs(T)<.001&&(T=1),this.x=(f-_)/T,this.y=(h-p)/T,this.z=(d-l)/T,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zt extends vn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let u=0,c=e.length;u<c;u+=3){const l=e[u],h=e[u+1],d=e[u+2];l<t&&(t=l),h<n&&(n=h),d<i&&(i=d),l>r&&(r=l),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let u=0,c=e.count;u<c;u++){const l=e.getX(u),h=e.getY(u),d=e.getZ(u);l<t&&(t=l),h<n&&(n=h),d<i&&(i=d),l>r&&(r=l),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)jt.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(jt)}else n.boundingBox===null&&n.computeBoundingBox(),bi.copy(n.boundingBox),bi.applyMatrix4(e.matrixWorld),this.union(bi);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bn),Wn.subVectors(this.max,bn),nn.subVectors(e.a,bn),rn.subVectors(e.b,bn),sn.subVectors(e.c,bn),Gt.subVectors(rn,nn),Vt.subVectors(sn,rn),Zt.subVectors(nn,sn);let t=[0,-Gt.z,Gt.y,0,-Vt.z,Vt.y,0,-Zt.z,Zt.y,Gt.z,0,-Gt.x,Vt.z,0,-Vt.x,Zt.z,0,-Zt.x,-Gt.y,Gt.x,0,-Vt.y,Vt.x,0,-Zt.y,Zt.x,0];return!wi(t,nn,rn,sn,Wn)||(t=[1,0,0,0,1,0,0,0,1],!wi(t,nn,rn,sn,Wn))?!1:(Hn.crossVectors(Gt,Vt),t=[Hn.x,Hn.y,Hn.z],wi(t,nn,rn,sn,Wn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dt=[new B,new B,new B,new B,new B,new B,new B,new B],jt=new B,bi=new Gn,nn=new B,rn=new B,sn=new B,Gt=new B,Vt=new B,Zt=new B,bn=new B,Wn=new B,Hn=new B,$t=new B;function wi(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$t.fromArray(s,r);const a=i.x*Math.abs($t.x)+i.y*Math.abs($t.y)+i.z*Math.abs($t.z),u=e.dot($t),c=t.dot($t),l=n.dot($t);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const Bs=new Gn,wn=new B,Ti=new B;class di{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bs.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wn.subVectors(e,this.center);const t=wn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ti.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wn.copy(e.center).add(Ti)),this.expandByPoint(wn.copy(e.center).sub(Ti))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pt=new B,Ei=new B,qn=new B,kt=new B,Ai=new B,Xn=new B,Ci=new B;class Yr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pt.copy(this.origin).addScaledVector(this.direction,t),Pt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ei.copy(e).add(t).multiplyScalar(.5),qn.copy(t).sub(e).normalize(),kt.copy(this.origin).sub(Ei);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qn),a=kt.dot(this.direction),u=-kt.dot(qn),c=kt.lengthSq(),l=Math.abs(1-o*o);let h,d,m,_;if(l>0)if(h=o*u-a,d=o*a-u,_=r*l,h>=0)if(d>=-_)if(d<=_){const p=1/l;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*u)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*u)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*u)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-u),r),m=-h*h+d*(d+2*u)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-u),r),m=d*(d+2*u)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-u),r),m=-h*h+d*(d+2*u)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ei).addScaledVector(qn,d),m}intersectSphere(e,t){Pt.subVectors(e.center,this.origin);const n=Pt.dot(this.direction),i=Pt.dot(Pt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,u;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),l>=0?(r=(e.min.y-d.y)*l,o=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,o=(e.min.y-d.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,u=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,u=(e.min.z-d.z)*h),n>u||a>i)||((a>n||n!==n)&&(n=a),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pt)!==null}intersectTriangle(e,t,n,i,r){Ai.subVectors(t,e),Xn.subVectors(n,e),Ci.crossVectors(Ai,Xn);let o=this.direction.dot(Ci),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kt.subVectors(this.origin,e);const u=a*this.direction.dot(Xn.crossVectors(kt,Xn));if(u<0)return null;const c=a*this.direction.dot(Ai.cross(kt));if(c<0||u+c>o)return null;const l=-a*kt.dot(Ci);return l<0?null:this.at(l/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,u,c,l,h,d,m,_,p,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=u,v[2]=c,v[6]=l,v[10]=h,v[14]=d,v[3]=m,v[7]=_,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/an.setFromMatrixColumn(e,0).length(),r=1/an.setFromMatrixColumn(e,1).length(),o=1/an.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(i),c=Math.sin(i),l=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*l,m=o*h,_=a*l,p=a*h;t[0]=u*l,t[4]=-u*h,t[8]=c,t[1]=m+_*c,t[5]=d-p*c,t[9]=-a*u,t[2]=p-d*c,t[6]=_+m*c,t[10]=o*u}else if(e.order==="YXZ"){const d=u*l,m=u*h,_=c*l,p=c*h;t[0]=d+p*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*l,t[9]=-a,t[2]=m*a-_,t[6]=p+d*a,t[10]=o*u}else if(e.order==="ZXY"){const d=u*l,m=u*h,_=c*l,p=c*h;t[0]=d-p*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*l,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const d=o*l,m=o*h,_=a*l,p=a*h;t[0]=u*l,t[4]=_*c-m,t[8]=d*c+p,t[1]=u*h,t[5]=p*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const d=o*u,m=o*c,_=a*u,p=a*c;t[0]=u*l,t[4]=p-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=m*h+_,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*u,m=o*c,_=a*u,p=a*c;t[0]=u*l,t[4]=-h,t[8]=c*l,t[1]=d*h+p,t[5]=o*l,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*l,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zs,e,Os)}lookAt(e,t,n){const i=this.elements;return pt.subVectors(e,t),pt.lengthSq()===0&&(pt.z=1),pt.normalize(),Wt.crossVectors(n,pt),Wt.lengthSq()===0&&(Math.abs(n.z)===1?pt.x+=1e-4:pt.z+=1e-4,pt.normalize(),Wt.crossVectors(n,pt)),Wt.normalize(),Yn.crossVectors(pt,Wt),i[0]=Wt.x,i[4]=Yn.x,i[8]=pt.x,i[1]=Wt.y,i[5]=Yn.y,i[9]=pt.y,i[2]=Wt.z,i[6]=Yn.z,i[10]=pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],u=n[8],c=n[12],l=n[1],h=n[5],d=n[9],m=n[13],_=n[2],p=n[6],f=n[10],v=n[14],T=n[3],S=n[7],y=n[11],E=n[15],A=i[0],P=i[4],g=i[8],w=i[12],R=i[1],H=i[5],j=i[9],U=i[13],L=i[2],z=i[6],X=i[10],J=i[14],W=i[3],K=i[7],Y=i[11],he=i[15];return r[0]=o*A+a*R+u*L+c*W,r[4]=o*P+a*H+u*z+c*K,r[8]=o*g+a*j+u*X+c*Y,r[12]=o*w+a*U+u*J+c*he,r[1]=l*A+h*R+d*L+m*W,r[5]=l*P+h*H+d*z+m*K,r[9]=l*g+h*j+d*X+m*Y,r[13]=l*w+h*U+d*J+m*he,r[2]=_*A+p*R+f*L+v*W,r[6]=_*P+p*H+f*z+v*K,r[10]=_*g+p*j+f*X+v*Y,r[14]=_*w+p*U+f*J+v*he,r[3]=T*A+S*R+y*L+E*W,r[7]=T*P+S*H+y*z+E*K,r[11]=T*g+S*j+y*X+E*Y,r[15]=T*w+S*U+y*J+E*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],u=e[9],c=e[13],l=e[2],h=e[6],d=e[10],m=e[14],_=e[3],p=e[7],f=e[11],v=e[15];return _*(+r*u*h-i*c*h-r*a*d+n*c*d+i*a*m-n*u*m)+p*(+t*u*m-t*c*d+r*o*d-i*o*m+i*c*l-r*u*l)+f*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*l-n*c*l)+v*(-i*a*l-t*u*h+t*a*d+i*o*h-n*o*d+n*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],h=e[9],d=e[10],m=e[11],_=e[12],p=e[13],f=e[14],v=e[15],T=h*f*c-p*d*c+p*u*m-a*f*m-h*u*v+a*d*v,S=_*d*c-l*f*c-_*u*m+o*f*m+l*u*v-o*d*v,y=l*p*c-_*h*c+_*a*m-o*p*m-l*a*v+o*h*v,E=_*h*u-l*p*u-_*a*d+o*p*d+l*a*f-o*h*f,A=t*T+n*S+i*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=T*P,e[1]=(p*d*r-h*f*r-p*i*m+n*f*m+h*i*v-n*d*v)*P,e[2]=(a*f*r-p*u*r+p*i*c-n*f*c-a*i*v+n*u*v)*P,e[3]=(h*u*r-a*d*r-h*i*c+n*d*c+a*i*m-n*u*m)*P,e[4]=S*P,e[5]=(l*f*r-_*d*r+_*i*m-t*f*m-l*i*v+t*d*v)*P,e[6]=(_*u*r-o*f*r-_*i*c+t*f*c+o*i*v-t*u*v)*P,e[7]=(o*d*r-l*u*r+l*i*c-t*d*c-o*i*m+t*u*m)*P,e[8]=y*P,e[9]=(_*h*r-l*p*r-_*n*m+t*p*m+l*n*v-t*h*v)*P,e[10]=(o*p*r-_*a*r+_*n*c-t*p*c-o*n*v+t*a*v)*P,e[11]=(l*a*r-o*h*r-l*n*c+t*h*c+o*n*m-t*a*m)*P,e[12]=E*P,e[13]=(l*p*i-_*h*i+_*n*d-t*p*d-l*n*f+t*h*f)*P,e[14]=(_*a*i-o*p*i-_*n*u+t*p*u+o*n*f-t*a*f)*P,e[15]=(o*h*i-l*a*i+l*n*u-t*h*u-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,u=e.z,c=r*o,l=r*a;return this.set(c*o+n,c*a-i*u,c*u+i*a,0,c*a+i*u,l*a+n,l*u-i*o,0,c*u-i*a,l*u+i*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,u=t._w,c=r+r,l=o+o,h=a+a,d=r*c,m=r*l,_=r*h,p=o*l,f=o*h,v=a*h,T=u*c,S=u*l,y=u*h,E=n.x,A=n.y,P=n.z;return i[0]=(1-(p+v))*E,i[1]=(m+y)*E,i[2]=(_-S)*E,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(d+v))*A,i[6]=(f+T)*A,i[7]=0,i[8]=(_+S)*P,i[9]=(f-T)*P,i[10]=(1-(d+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=an.set(i[0],i[1],i[2]).length();const o=an.set(i[4],i[5],i[6]).length(),a=an.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],St.copy(this);const c=1/r,l=1/o,h=1/a;return St.elements[0]*=c,St.elements[1]*=c,St.elements[2]*=c,St.elements[4]*=l,St.elements[5]*=l,St.elements[6]*=l,St.elements[8]*=h,St.elements[9]*=h,St.elements[10]*=h,t.setFromRotationMatrix(St),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,u=2*r/(t-e),c=2*r/(n-i),l=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=u,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,u=1/(t-e),c=1/(n-i),l=1/(o-r),h=(t+e)*u,d=(n+i)*c,m=(o+r)*l;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const an=new B,St=new ke,zs=new B(0,0,0),Os=new B(1,1,1),Wt=new B,Yn=new B,pt=new B,er=new ke,tr=new On;class hi{constructor(e=0,t=0,n=0,i=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],u=i[1],c=i[5],l=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return er.makeRotationFromQuaternion(e),this.setFromRotationMatrix(er,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tr.setFromEuler(this),this.setFromQuaternion(tr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class jr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gs=0;const nr=new B,on=new On,Ft=new ke,jn=new B,Tn=new B,Vs=new B,ks=new On,ir=new B(1,0,0),rr=new B(0,1,0),sr=new B(0,0,1),Ws={type:"added"},ar={type:"removed"};class dt extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gs++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new B,t=new hi,n=new On,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Qe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.multiply(on),this}rotateOnWorldAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.premultiply(on),this}rotateX(e){return this.rotateOnAxis(ir,e)}rotateY(e){return this.rotateOnAxis(rr,e)}rotateZ(e){return this.rotateOnAxis(sr,e)}translateOnAxis(e,t){return nr.copy(e).applyQuaternion(this.quaternion),this.position.add(nr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ir,e)}translateY(e){return this.translateOnAxis(rr,e)}translateZ(e){return this.translateOnAxis(sr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ft.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jn.copy(e):jn.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ft.lookAt(Tn,jn,this.up):Ft.lookAt(jn,Tn,this.up),this.quaternion.setFromRotationMatrix(Ft),i&&(Ft.extractRotation(i.matrixWorld),on.setFromRotationMatrix(Ft),this.quaternion.premultiply(on.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ws)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ar)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ar)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ft.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ft.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ft),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,Vs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,ks,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const h=u[c];r(e.shapes,h)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(r(e.materials,this.material[u]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];i.animations.push(r(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),l=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new B(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yt=new B,It=new B,Ri=new B,Nt=new B,ln=new B,cn=new B,or=new B,Li=new B,Di=new B,Pi=new B;class Ut{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yt.subVectors(e,t),i.cross(yt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yt.subVectors(i,t),It.subVectors(n,t),Ri.subVectors(e,t);const o=yt.dot(yt),a=yt.dot(It),u=yt.dot(Ri),c=It.dot(It),l=It.dot(Ri),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(c*u-a*l)*d,_=(o*l-a*u)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nt),Nt.x>=0&&Nt.y>=0&&Nt.x+Nt.y<=1}static getUV(e,t,n,i,r,o,a,u){return this.getBarycoord(e,t,n,i,Nt),u.set(0,0),u.addScaledVector(r,Nt.x),u.addScaledVector(o,Nt.y),u.addScaledVector(a,Nt.z),u}static isFrontFacing(e,t,n,i){return yt.subVectors(n,t),It.subVectors(e,t),yt.cross(It).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yt.subVectors(this.c,this.b),It.subVectors(this.a,this.b),yt.cross(It).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ut.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ut.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ut.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ut.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ut.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ln.subVectors(i,n),cn.subVectors(r,n),Li.subVectors(e,n);const u=ln.dot(Li),c=cn.dot(Li);if(u<=0&&c<=0)return t.copy(n);Di.subVectors(e,i);const l=ln.dot(Di),h=cn.dot(Di);if(l>=0&&h<=l)return t.copy(i);const d=u*h-l*c;if(d<=0&&u>=0&&l<=0)return o=u/(u-l),t.copy(n).addScaledVector(ln,o);Pi.subVectors(e,r);const m=ln.dot(Pi),_=cn.dot(Pi);if(_>=0&&m<=_)return t.copy(r);const p=m*c-u*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(cn,a);const f=l*_-m*h;if(f<=0&&h-l>=0&&m-_>=0)return or.subVectors(r,i),a=(h-l)/(h-l+(m-_)),t.copy(i).addScaledVector(or,a);const v=1/(f+p+d);return o=p*v,a=d*v,t.copy(n).addScaledVector(ln,o).addScaledVector(cn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hs=0;class Vn extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hs++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const u=r[a];delete u.metadata,o.push(u)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bt={h:0,s:0,l:0},Zn={h:0,s:0,l:0};function Fi(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Xi(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fi(o,r,e+1/3),this.g=Fi(o,r,e),this.b=Fi(o,r,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,st.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,st.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(r[1])/360,c=parseFloat(r[2])/100,l=parseFloat(r[3])/100;return n(r[4]),this.setHSL(u,c,l,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,st.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,st.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Zr[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return st.fromWorkingColorSpace(nt.copy(this),e),ct(nt.r*255,0,255)<<16^ct(nt.g*255,0,255)<<8^ct(nt.b*255,0,255)<<0}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(nt.copy(this),t);const n=nt.r,i=nt.g,r=nt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let u,c;const l=(a+o)/2;if(a===o)u=0,c=0;else{const h=o-a;switch(c=l<=.5?h/(o+a):h/(2-o-a),o){case n:u=(i-r)/h+(i<r?6:0);break;case i:u=(r-n)/h+2;break;case r:u=(n-i)/h+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(nt.copy(this),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=Ct){st.fromWorkingColorSpace(nt.copy(this),e);const t=nt.r,n=nt.g,i=nt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(bt),bt.h+=e,bt.s+=t,bt.l+=n,this.setHSL(bt.h,bt.s,bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bt),e.getHSL(Zn);const n=In(bt.h,Zn.h,t),i=In(bt.s,Zn.s,t),r=In(bt.l,Zn.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nt=new Oe;Oe.NAMES=Zr;class $r extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new B,$n=new Fe;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXY(t,$n.x,$n.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Kr extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jr extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qs=0;const xt=new ke,Ii=new dt,un=new B,mt=new Gn,En=new Gn,Ke=new B;class Ot extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qs++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wr(e)?Jr:Kr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xt.makeRotationFromQuaternion(e),this.applyMatrix4(xt),this}rotateX(e){return xt.makeRotationX(e),this.applyMatrix4(xt),this}rotateY(e){return xt.makeRotationY(e),this.applyMatrix4(xt),this}rotateZ(e){return xt.makeRotationZ(e),this.applyMatrix4(xt),this}translate(e,t,n){return xt.makeTranslation(e,t,n),this.applyMatrix4(xt),this}scale(e,t,n){return xt.makeScale(e,t,n),this.applyMatrix4(xt),this}lookAt(e){return Ii.lookAt(e),Ii.updateMatrix(),this.applyMatrix4(Ii.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(un).negate(),this.translate(un.x,un.y,un.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];mt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,mt.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,mt.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(mt.min),this.boundingBox.expandByPoint(mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(mt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];En.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(mt.min,En.min),mt.expandByPoint(Ke),Ke.addVectors(mt.max,En.max),mt.expandByPoint(Ke)):(mt.expandByPoint(En.min),mt.expandByPoint(En.max))}mt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ke.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ke));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Ke.fromBufferAttribute(a,c),u&&(un.fromBufferAttribute(e,c),Ke.add(un)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],l=[];for(let R=0;R<a;R++)c[R]=new B,l[R]=new B;const h=new B,d=new B,m=new B,_=new Fe,p=new Fe,f=new Fe,v=new B,T=new B;function S(R,H,j){h.fromArray(i,R*3),d.fromArray(i,H*3),m.fromArray(i,j*3),_.fromArray(o,R*2),p.fromArray(o,H*2),f.fromArray(o,j*2),d.sub(h),m.sub(h),p.sub(_),f.sub(_);const U=1/(p.x*f.y-f.x*p.y);isFinite(U)&&(v.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(U),T.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(U),c[R].add(v),c[H].add(v),c[j].add(v),l[R].add(T),l[H].add(T),l[j].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,H=y.length;R<H;++R){const j=y[R],U=j.start,L=j.count;for(let z=U,X=U+L;z<X;z+=3)S(n[z+0],n[z+1],n[z+2])}const E=new B,A=new B,P=new B,g=new B;function w(R){P.fromArray(r,R*3),g.copy(P);const H=c[R];E.copy(H),E.sub(P.multiplyScalar(P.dot(H))).normalize(),A.crossVectors(g,H);const U=A.dot(l[R])<0?-1:1;u[R*4]=E.x,u[R*4+1]=E.y,u[R*4+2]=E.z,u[R*4+3]=U}for(let R=0,H=y.length;R<H;++R){const j=y[R],U=j.start,L=j.count;for(let z=U,X=U+L;z<X;z+=3)w(n[z+0]),w(n[z+1]),w(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new B,r=new B,o=new B,a=new B,u=new B,c=new B,l=new B,h=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),a.fromBufferAttribute(n,_),u.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(l),u.add(l),c.add(l),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,u.x,u.y,u.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ke.fromBufferAttribute(e,t),Ke.normalize(),e.setXYZ(t,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function e(a,u){const c=a.array,l=a.itemSize,h=a.normalized,d=new c.constructor(u.length*l);let m=0,_=0;for(let p=0,f=u.length;p<f;p++){a.isInterleavedBufferAttribute?m=u[p]*a.data.stride+a.offset:m=u[p]*l;for(let v=0;v<l;v++)d[_++]=c[m++]}return new gt(d,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const a in i){const u=i[a],c=e(u,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const u=[],c=r[a];for(let l=0,h=c.length;l<h;l++){const d=c[l],m=e(d,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];l.push(m.toJSON(e.data))}l.length>0&&(i[u]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],h=r[c];for(let d=0,m=h.length;d<m;d++)l.push(h[d].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,l=o.length;c<l;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lr=new ke,At=new Yr,Kn=new di,cr=new B,An=new B,Cn=new B,Rn=new B,Ni=new B,Jn=new B,Qn=new Fe,ei=new Fe,ti=new Fe,Ui=new B,ni=new B;class Bt extends dt{constructor(e=new Ot,t=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Jn.set(0,0,0);for(let u=0,c=r.length;u<c;u++){const l=a[u],h=r[u];l!==0&&(Ni.fromBufferAttribute(h,e),o?Jn.addScaledVector(Ni,l):Jn.addScaledVector(Ni.sub(t),l))}t.add(Jn)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Kn.copy(n.boundingSphere),Kn.applyMatrix4(r),At.copy(e.ray).recast(e.near),Kn.containsPoint(At.origin)===!1&&(At.intersectSphere(Kn,cr)===null||At.origin.distanceToSquared(cr)>(e.far-e.near)**2))||(lr.copy(r).invert(),At.copy(e.ray).applyMatrix4(lr),n.boundingBox!==null&&At.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,u=n.attributes.position,c=n.attributes.uv,l=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],f=i[p.materialIndex],v=Math.max(p.start,d.start),T=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,y=T;S<y;S+=3){const E=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);o=ii(this,f,e,At,c,l,E,A,P),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const v=a.getX(p),T=a.getX(p+1),S=a.getX(p+2);o=ii(this,i,e,At,c,l,v,T,S),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],f=i[p.materialIndex],v=Math.max(p.start,d.start),T=Math.min(u.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,y=T;S<y;S+=3){const E=S,A=S+1,P=S+2;o=ii(this,f,e,At,c,l,E,A,P),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(u.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const v=p,T=p+1,S=p+2;o=ii(this,i,e,At,c,l,v,T,S),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Xs(s,e,t,n,i,r,o,a){let u;if(e.side===1?u=n.intersectTriangle(o,r,i,!0,a):u=n.intersectTriangle(i,r,o,e.side===0,a),u===null)return null;ni.copy(a),ni.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ni);return c<t.near||c>t.far?null:{distance:c,point:ni.clone(),object:s}}function ii(s,e,t,n,i,r,o,a,u){s.getVertexPosition(o,An),s.getVertexPosition(a,Cn),s.getVertexPosition(u,Rn);const c=Xs(s,e,t,n,An,Cn,Rn,Ui);if(c){i&&(Qn.fromBufferAttribute(i,o),ei.fromBufferAttribute(i,a),ti.fromBufferAttribute(i,u),c.uv=Ut.getUV(Ui,An,Cn,Rn,Qn,ei,ti,new Fe)),r&&(Qn.fromBufferAttribute(r,o),ei.fromBufferAttribute(r,a),ti.fromBufferAttribute(r,u),c.uv2=Ut.getUV(Ui,An,Cn,Rn,Qn,ei,ti,new Fe));const l={a:o,b:a,c:u,normal:new B,materialIndex:0};Ut.getNormal(An,Cn,Rn,l.normal),c.face=l}return c}class kn extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const u=[],c=[],l=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(l,3)),this.setAttribute("uv",new en(h,2));function _(p,f,v,T,S,y,E,A,P,g,w){const R=y/P,H=E/g,j=y/2,U=E/2,L=A/2,z=P+1,X=g+1;let J=0,W=0;const K=new B;for(let Y=0;Y<X;Y++){const he=Y*H-U;for(let N=0;N<z;N++){const Z=N*R-j;K[p]=Z*T,K[f]=he*S,K[v]=L,c.push(K.x,K.y,K.z),K[p]=0,K[f]=0,K[v]=A>0?1:-1,l.push(K.x,K.y,K.z),h.push(N/P),h.push(1-Y/g),J+=1}}for(let Y=0;Y<g;Y++)for(let he=0;he<P;he++){const N=d+he+z*Y,Z=d+he+z*(Y+1),ne=d+(he+1)+z*(Y+1),F=d+(he+1)+z*Y;u.push(N,Z,F),u.push(Z,ne,F),W+=6}a.addGroup(m,W,w),m+=W,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function at(s){const e={};for(let t=0;t<s.length;t++){const n=xn(s[t]);for(const i in n)e[i]=n[i]}return e}function Ys(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qr(s){return s.getRenderTarget()===null&&s.outputEncoding===3001?Ct:Un}const js={clone:xn,merge:at};var Zs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$s=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ut extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zs,this.fragmentShader=$s,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xn(e.uniforms),this.uniformsGroups=Ys(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class es extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vt extends es{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ui*2*Math.atan(Math.tan(Fn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fn*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/u,t-=o.offsetY*n/c,i*=o.width/u,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dn=-90,hn=1;class Ks extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new vt(dn,hn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new vt(dn,hn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new vt(dn,hn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new vt(dn,hn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new vt(dn,hn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const c=new vt(dn,hn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,u,c]=this.children,l=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(l),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ts extends ot{constructor(e,t,n,i,r,o,a,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,i,r,o,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Js extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ts(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kn(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new Bt(i,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ks(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Bi=new B,Qs=new B,ea=new Qe;class Kt{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bi.subVectors(n,t).cross(Qs.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bi),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ea.getNormalMatrix(e),i=this.coplanarPoint(Bi).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fn=new di,ri=new B;class ns{constructor(e=new Kt,t=new Kt,n=new Kt,i=new Kt,r=new Kt,o=new Kt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],u=n[4],c=n[5],l=n[6],h=n[7],d=n[8],m=n[9],_=n[10],p=n[11],f=n[12],v=n[13],T=n[14],S=n[15];return t[0].setComponents(a-i,h-u,p-d,S-f).normalize(),t[1].setComponents(a+i,h+u,p+d,S+f).normalize(),t[2].setComponents(a+r,h+c,p+m,S+v).normalize(),t[3].setComponents(a-r,h-c,p-m,S-v).normalize(),t[4].setComponents(a-o,h-l,p-_,S-T).normalize(),t[5].setComponents(a+o,h+l,p+_,S+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fn)}intersectsSprite(e){return fn.center.set(0,0,0),fn.radius=.7071067811865476,fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(fn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ri.x=i.normal.x>0?e.max.x:e.min.x,ri.y=i.normal.y>0?e.max.y:e.min.y,ri.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ri)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function is(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ta(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,l){const h=c.array,d=c.usage,m=s.createBuffer();s.bindBuffer(l,m),s.bufferData(l,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,l,h){const d=l.array,m=l.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(s.deleteBuffer(l.buffer),n.delete(c))}function u(c,l){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,l)):h.version<c.version&&(r(h.buffer,c,l),h.version=c.version)}return{get:o,remove:a,update:u}}class fi extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),u=Math.floor(i),c=a+1,l=u+1,h=e/a,d=t/u,m=[],_=[],p=[],f=[];for(let v=0;v<l;v++){const T=v*d-o;for(let S=0;S<c;S++){const y=S*h-r;_.push(y,-T,0),p.push(0,0,1),f.push(S/a),f.push(1-v/u)}}for(let v=0;v<u;v++)for(let T=0;T<a;T++){const S=T+c*v,y=T+c*(v+1),E=T+1+c*(v+1),A=T+1+c*v;m.push(S,y,A),m.push(y,E,A)}this.setIndex(m),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var na=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ia=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ra=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sa=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aa=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oa=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,la="vec3 transformed = vec3( position );",ca=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ua=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,da=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,ha=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fa=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,pa=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ma=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ga=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_a=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xa=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,va=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ma=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sa=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ya=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ba=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wa=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ta=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ea=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Aa=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ca="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ra=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,La=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Da=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pa=`#ifdef USE_ENVMAP
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
#endif`,Fa=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ia=`#ifdef USE_ENVMAP
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
#endif`,Na=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ua=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ba=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,za=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oa=`#ifdef USE_GRADIENTMAP
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
}`,Ga=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Va=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ka=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wa=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ha=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,qa=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xa=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ya=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ja=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Za=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$a=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ka=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ja=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qa=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eo=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,to=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,no=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,io=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ro=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,so=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ao=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oo=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lo=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,co=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uo=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ho=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fo=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,po=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mo=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,go=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_o=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xo=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vo=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mo=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,So=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yo=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bo=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,wo=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,To=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eo=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ao=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Co=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ro=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lo=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Do=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Po=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fo=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Io=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,No=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uo=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bo=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zo=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oo=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Go=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vo=`#ifdef USE_SKINNING
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
#endif`,ko=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wo=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ho=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qo=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xo=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Yo=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jo=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Zo=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,$o=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ko=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jo=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Qo=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,el=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nl=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,il=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,al=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ol=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ll=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ul=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ml=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_l=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,xl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ml=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wl=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,El=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Al=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Cl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Ll=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dl=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Pl=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fl=`uniform float rotation;
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
}`,Il=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:na,alphamap_pars_fragment:ia,alphatest_fragment:ra,alphatest_pars_fragment:sa,aomap_fragment:aa,aomap_pars_fragment:oa,begin_vertex:la,beginnormal_vertex:ca,bsdfs:ua,iridescence_fragment:da,bumpmap_pars_fragment:ha,clipping_planes_fragment:fa,clipping_planes_pars_fragment:pa,clipping_planes_pars_vertex:ma,clipping_planes_vertex:ga,color_fragment:_a,color_pars_fragment:xa,color_pars_vertex:va,color_vertex:Ma,common:Sa,cube_uv_reflection_fragment:ya,defaultnormal_vertex:ba,displacementmap_pars_vertex:wa,displacementmap_vertex:Ta,emissivemap_fragment:Ea,emissivemap_pars_fragment:Aa,encodings_fragment:Ca,encodings_pars_fragment:Ra,envmap_fragment:La,envmap_common_pars_fragment:Da,envmap_pars_fragment:Pa,envmap_pars_vertex:Fa,envmap_physical_pars_fragment:qa,envmap_vertex:Ia,fog_vertex:Na,fog_pars_vertex:Ua,fog_fragment:Ba,fog_pars_fragment:za,gradientmap_pars_fragment:Oa,lightmap_fragment:Ga,lightmap_pars_fragment:Va,lights_lambert_fragment:ka,lights_lambert_pars_fragment:Wa,lights_pars_begin:Ha,lights_toon_fragment:Xa,lights_toon_pars_fragment:Ya,lights_phong_fragment:ja,lights_phong_pars_fragment:Za,lights_physical_fragment:$a,lights_physical_pars_fragment:Ka,lights_fragment_begin:Ja,lights_fragment_maps:Qa,lights_fragment_end:eo,logdepthbuf_fragment:to,logdepthbuf_pars_fragment:no,logdepthbuf_pars_vertex:io,logdepthbuf_vertex:ro,map_fragment:so,map_pars_fragment:ao,map_particle_fragment:oo,map_particle_pars_fragment:lo,metalnessmap_fragment:co,metalnessmap_pars_fragment:uo,morphcolor_vertex:ho,morphnormal_vertex:fo,morphtarget_pars_vertex:po,morphtarget_vertex:mo,normal_fragment_begin:go,normal_fragment_maps:_o,normal_pars_fragment:xo,normal_pars_vertex:vo,normal_vertex:Mo,normalmap_pars_fragment:So,clearcoat_normal_fragment_begin:yo,clearcoat_normal_fragment_maps:bo,clearcoat_pars_fragment:wo,iridescence_pars_fragment:To,output_fragment:Eo,packing:Ao,premultiplied_alpha_fragment:Co,project_vertex:Ro,dithering_fragment:Lo,dithering_pars_fragment:Do,roughnessmap_fragment:Po,roughnessmap_pars_fragment:Fo,shadowmap_pars_fragment:Io,shadowmap_pars_vertex:No,shadowmap_vertex:Uo,shadowmask_pars_fragment:Bo,skinbase_vertex:zo,skinning_pars_vertex:Oo,skinning_vertex:Go,skinnormal_vertex:Vo,specularmap_fragment:ko,specularmap_pars_fragment:Wo,tonemapping_fragment:Ho,tonemapping_pars_fragment:qo,transmission_fragment:Xo,transmission_pars_fragment:Yo,uv_pars_fragment:jo,uv_pars_vertex:Zo,uv_vertex:$o,uv2_pars_fragment:Ko,uv2_pars_vertex:Jo,uv2_vertex:Qo,worldpos_vertex:el,background_vert:tl,background_frag:nl,backgroundCube_vert:il,backgroundCube_frag:rl,cube_vert:sl,cube_frag:al,depth_vert:ol,depth_frag:ll,distanceRGBA_vert:cl,distanceRGBA_frag:ul,equirect_vert:dl,equirect_frag:hl,linedashed_vert:fl,linedashed_frag:pl,meshbasic_vert:ml,meshbasic_frag:gl,meshlambert_vert:_l,meshlambert_frag:xl,meshmatcap_vert:vl,meshmatcap_frag:Ml,meshnormal_vert:Sl,meshnormal_frag:yl,meshphong_vert:bl,meshphong_frag:wl,meshphysical_vert:Tl,meshphysical_frag:El,meshtoon_vert:Al,meshtoon_frag:Cl,points_vert:Rl,points_frag:Ll,shadow_vert:Dl,shadow_frag:Pl,sprite_vert:Fl,sprite_frag:Il},te={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qe},uv2Transform:{value:new Qe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}}},Rt={basic:{uniforms:at([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:at([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:at([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:at([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:at([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:at([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:at([te.points,te.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:at([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:at([te.common,te.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:at([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:at([te.sprite,te.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:at([te.common,te.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:at([te.lights,te.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Rt.physical={uniforms:at([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const si={r:0,b:0,g:0};function Nl(s,e,t,n,i,r,o){const a=new Oe(0);let u=r===!0?0:1,c,l,h=null,d=0,m=null;function _(f,v){let T=!1,S=v.isScene===!0?v.background:null;S&&S.isTexture&&(S=(v.backgroundBlurriness>0?t:e).get(S));const y=s.xr,E=y.getSession&&y.getSession();E&&E.environmentBlendMode==="additive"&&(S=null),S===null?p(a,u):S&&S.isColor&&(p(S,1),T=!0),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===306)?(l===void 0&&(l=new Bt(new kn(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:xn(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,P,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=S.encoding!==3001,(h!==S||d!==S.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Bt(new fi(2,2),new ut({name:"BackgroundMaterial",uniforms:xn(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=S.encoding!==3001,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,v){f.getRGB(si,Qr(s)),n.buffers.color.setClear(si.r,si.g,si.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(f,v=1){a.set(f),u=v,p(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(f){u=f,p(a,u)},render:_}}function Ul(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},u=f(null);let c=u,l=!1;function h(L,z,X,J,W){let K=!1;if(o){const Y=p(J,X,z);c!==Y&&(c=Y,m(c.object)),K=v(L,J,X,W),K&&T(L,J,X,W)}else{const Y=z.wireframe===!0;(c.geometry!==J.id||c.program!==X.id||c.wireframe!==Y)&&(c.geometry=J.id,c.program=X.id,c.wireframe=Y,K=!0)}W!==null&&t.update(W,34963),(K||l)&&(l=!1,g(L,z,X,J),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function p(L,z,X){const J=X.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let K=W[z.id];K===void 0&&(K={},W[z.id]=K);let Y=K[J];return Y===void 0&&(Y=f(d()),K[J]=Y),Y}function f(L){const z=[],X=[],J=[];for(let W=0;W<i;W++)z[W]=0,X[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:J,object:L,attributes:{},index:null}}function v(L,z,X,J){const W=c.attributes,K=z.attributes;let Y=0;const he=X.getAttributes();for(const N in he)if(he[N].location>=0){const ne=W[N];let F=K[N];if(F===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),ne===void 0||ne.attribute!==F||F&&ne.data!==F.data)return!0;Y++}return c.attributesNum!==Y||c.index!==J}function T(L,z,X,J){const W={},K=z.attributes;let Y=0;const he=X.getAttributes();for(const N in he)if(he[N].location>=0){let ne=K[N];ne===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const F={};F.attribute=ne,ne&&ne.data&&(F.data=ne.data),W[N]=F,Y++}c.attributes=W,c.attributesNum=Y,c.index=J}function S(){const L=c.newAttributes;for(let z=0,X=L.length;z<X;z++)L[z]=0}function y(L){E(L,0)}function E(L,z){const X=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;X[L]=1,J[L]===0&&(s.enableVertexAttribArray(L),J[L]=1),W[L]!==z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),W[L]=z)}function A(){const L=c.newAttributes,z=c.enabledAttributes;for(let X=0,J=z.length;X<J;X++)z[X]!==L[X]&&(s.disableVertexAttribArray(X),z[X]=0)}function P(L,z,X,J,W,K){n.isWebGL2===!0&&(X===5124||X===5125)?s.vertexAttribIPointer(L,z,X,W,K):s.vertexAttribPointer(L,z,X,J,W,K)}function g(L,z,X,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=J.attributes,K=X.getAttributes(),Y=z.defaultAttributeValues;for(const he in K){const N=K[he];if(N.location>=0){let Z=W[he];if(Z===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ne=Z.normalized,F=Z.itemSize,ae=t.get(Z);if(ae===void 0)continue;const oe=ae.buffer,ce=ae.type,le=ae.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ge=Z.data,Se=ge.stride,ye=Z.offset;if(ge.isInstancedInterleavedBuffer){for(let Le=0;Le<N.locationSize;Le++)E(N.location+Le,ge.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Le=0;Le<N.locationSize;Le++)y(N.location+Le);s.bindBuffer(34962,oe);for(let Le=0;Le<N.locationSize;Le++)P(N.location+Le,F/N.locationSize,ce,ne,Se*le,(ye+F/N.locationSize*Le)*le)}else{if(Z.isInstancedBufferAttribute){for(let ge=0;ge<N.locationSize;ge++)E(N.location+ge,Z.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<N.locationSize;ge++)y(N.location+ge);s.bindBuffer(34962,oe);for(let ge=0;ge<N.locationSize;ge++)P(N.location+ge,F/N.locationSize,ce,ne,F*le,F/N.locationSize*ge*le)}}else if(Y!==void 0){const ne=Y[he];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(N.location,ne);break;case 3:s.vertexAttrib3fv(N.location,ne);break;case 4:s.vertexAttrib4fv(N.location,ne);break;default:s.vertexAttrib1fv(N.location,ne)}}}}A()}function w(){j();for(const L in a){const z=a[L];for(const X in z){const J=z[X];for(const W in J)_(J[W].object),delete J[W];delete z[X]}delete a[L]}}function R(L){if(a[L.id]===void 0)return;const z=a[L.id];for(const X in z){const J=z[X];for(const W in J)_(J[W].object),delete J[W];delete z[X]}delete a[L.id]}function H(L){for(const z in a){const X=a[z];if(X[L.id]===void 0)continue;const J=X[L.id];for(const W in J)_(J[W].object),delete J[W];delete X[L.id]}}function j(){U(),l=!0,c!==u&&(c=u,m(c.object))}function U(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:j,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:H,initAttributes:S,enableAttribute:y,disableUnusedAttributes:A}}function Bl(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,l){s.drawArrays(r,c,l),t.update(l,r,1)}function u(c,l,h){if(h===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,l,h),t.update(l,r,h)}this.setMode=o,this.render=a,this.renderInstances=u}function zl(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=r(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),p=s.getParameter(34921),f=s.getParameter(36347),v=s.getParameter(36348),T=s.getParameter(36349),S=d>0,y=o||e.has("OES_texture_float"),E=S&&y,A=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function Ol(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Kt,a=new Qe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,v=s.get(h);if(!i||_===null||_.length===0||r&&!f)r?l(null):c();else{const T=r?0:n,S=T*4;let y=v.clippingState||null;u.value=y,y=l(_,d,S,m);for(let E=0;E!==S;++E)y[E]=t[E];v.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,d,m,_){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=u.value,_!==!0||f===null){const v=m+p*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<v)&&(f=new Float32Array(v));for(let S=0,y=m;S!==p;++S,y+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(f,y),f[y+3]=o.constant}u.value=f,u.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Gl(s){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new Js(u.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class rs extends es{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gn=4,ur=[.125,.215,.35,.446,.526,.582],Qt=20,zi=new rs,dr=new Oe;let Oi=null;const Jt=(1+Math.sqrt(5))/2,pn=1/Jt,hr=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Jt,pn),new B(0,Jt,-pn),new B(pn,0,Jt),new B(-pn,0,Jt),new B(Jt,pn,0),new B(-Jt,pn,0)];class fr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Oi=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oi),e.scissorTest=!1,ai(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oi=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=pr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pr(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vl(r)),this._blurMaterial=kl(r,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,zi)}_sceneToCubeUV(e,t,n,i){const a=new vt(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(dr),l.toneMapping=0,l.autoClear=!1;const m=new $r({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Bt(new kn,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(dr),p=!0);for(let v=0;v<6;v++){const T=v%3;T===0?(a.up.set(0,u[v],0),a.lookAt(c[v],0,0)):T===1?(a.up.set(0,0,u[v]),a.lookAt(0,c[v],0)):(a.up.set(0,u[v],0),a.lookAt(0,0,c[v]));const S=this._cubeSize;ai(i,T*S,v>2?S:0,S,S),l.setRenderTarget(i),p&&l.render(_,a),l.render(e,a)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=d,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mr());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const u=this._cubeSize;ai(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=hr[(i-1)%hr.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new Bt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Qt-1),p=r/_,f=isFinite(r)?1+Math.floor(l*p):Qt;f>Qt&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Qt}`);const v=[];let T=0;for(let P=0;P<Qt;++P){const g=P/p,w=Math.exp(-g*g/2);v.push(w),P===0?T+=w:P<f&&(T+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/T;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const y=this._sizeLods[i],E=3*y*(i>S-gn?i-S+gn:0),A=4*(this._cubeSize-y);ai(t,E,A,3*y,2*y),u.setRenderTarget(t),u.render(h,zi)}}function Vl(s){const e=[],t=[],n=[];let i=s;const r=s-gn+1+ur.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let u=1/a;o>s-gn?u=ur[o-s+gn-1]:o===0&&(u=0),n.push(u);const c=1/(a-2),l=-c,h=1+c,d=[l,l,h,l,h,h,l,l,h,h,l,h],m=6,_=6,p=3,f=2,v=1,T=new Float32Array(p*_*m),S=new Float32Array(f*_*m),y=new Float32Array(v*_*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,g=A>2?0:-1,w=[P,g,0,P+2/3,g,0,P+2/3,g+1,0,P,g,0,P+2/3,g+1,0,P,g+1,0];T.set(w,p*_*A),S.set(d,f*_*A);const R=[A,A,A,A,A,A];y.set(R,v*_*A)}const E=new Ot;E.setAttribute("position",new gt(T,p)),E.setAttribute("uv",new gt(S,f)),E.setAttribute("faceIndex",new gt(y,v)),e.push(E),i>gn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pr(s,e,t){const n=new zt(s,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ai(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kl(s,e,t){const n=new Float32Array(Qt),i=new B(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:Qt,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mr(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function gr(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yi(){return`

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
	`}function Wl(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===303||u===304,l=u===301||u===302;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new fr(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||l&&h&&i(h)){t===null&&(t=new fr(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function r(a){const u=a.target;u.removeEventListener("dispose",r);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hl(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ql(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function u(h){const d=h.attributes;for(const _ in d)e.update(d[_],34962);const m=h.morphAttributes;for(const _ in m){const p=m[_];for(let f=0,v=p.length;f<v;f++)e.update(p[f],34962)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let S=0,y=T.length;S<y;S+=3){const E=T[S+0],A=T[S+1],P=T[S+2];d.push(E,A,A,P,P,E)}}else{const T=_.array;p=_.version;for(let S=0,y=T.length/3-1;S<y;S+=3){const E=S+0,A=S+1,P=S+2;d.push(E,A,A,P,P,E)}}const f=new(Wr(d)?Jr:Kr)(d,1);f.version=p;const v=r.get(h);v&&e.remove(v),r.set(h,f)}function l(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:u,getWireframeAttribute:l}}function Xl(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,u;function c(d){a=d.type,u=d.bytesPerElement}function l(d,m){s.drawElements(r,m,a,d*u),t.update(m,r,1)}function h(d,m,_){if(_===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,a,d*u,_),t.update(m,r,_)}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=h}function Yl(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jl(s,e){return s[0]-e[0]}function Zl(s,e){return Math.abs(e[1])-Math.abs(s[1])}function $l(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,l,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=_!==void 0?_.length:0;let f=r.get(l);if(f===void 0||f.count!==p){let z=function(){U.dispose(),r.delete(l),l.removeEventListener("dispose",z)};var m=z;f!==void 0&&f.texture.dispose();const S=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,A=l.morphAttributes.position||[],P=l.morphAttributes.normal||[],g=l.morphAttributes.color||[];let w=0;S===!0&&(w=1),y===!0&&(w=2),E===!0&&(w=3);let R=l.attributes.position.count*w,H=1;R>e.maxTextureSize&&(H=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const j=new Float32Array(R*H*4*p),U=new Xr(j,R,H,p);U.type=1015,U.needsUpdate=!0;const L=w*4;for(let X=0;X<p;X++){const J=A[X],W=P[X],K=g[X],Y=R*H*4*X;for(let he=0;he<J.count;he++){const N=he*L;S===!0&&(o.fromBufferAttribute(J,he),j[Y+N+0]=o.x,j[Y+N+1]=o.y,j[Y+N+2]=o.z,j[Y+N+3]=0),y===!0&&(o.fromBufferAttribute(W,he),j[Y+N+4]=o.x,j[Y+N+5]=o.y,j[Y+N+6]=o.z,j[Y+N+7]=0),E===!0&&(o.fromBufferAttribute(K,he),j[Y+N+8]=o.x,j[Y+N+9]=o.y,j[Y+N+10]=o.z,j[Y+N+11]=K.itemSize===4?o.w:1)}}f={count:p,texture:U,size:new Fe(R,H)},r.set(l,f),l.addEventListener("dispose",z)}let v=0;for(let S=0;S<d.length;S++)v+=d[S];const T=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const _=d===void 0?0:d.length;let p=n[l.id];if(p===void 0||p.length!==_){p=[];for(let y=0;y<_;y++)p[y]=[y,0];n[l.id]=p}for(let y=0;y<_;y++){const E=p[y];E[0]=y,E[1]=d[y]}p.sort(Zl);for(let y=0;y<8;y++)y<_&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(jl);const f=l.morphAttributes.position,v=l.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const E=a[y],A=E[0],P=E[1];A!==Number.MAX_SAFE_INTEGER&&P?(f&&l.getAttribute("morphTarget"+y)!==f[A]&&l.setAttribute("morphTarget"+y,f[A]),v&&l.getAttribute("morphNormal"+y)!==v[A]&&l.setAttribute("morphNormal"+y,v[A]),i[y]=P,T+=P):(f&&l.hasAttribute("morphTarget"+y)===!0&&l.deleteAttribute("morphTarget"+y),v&&l.hasAttribute("morphNormal"+y)===!0&&l.deleteAttribute("morphNormal"+y),i[y]=0)}const S=l.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:u}}function Kl(s,e,t,n){let i=new WeakMap;function r(u){const c=n.render.frame,l=u.geometry,h=e.get(u,l);return i.get(h)!==c&&(e.update(h),i.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function o(){i=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ss=new ot,as=new Xr,os=new Us,ls=new ts,_r=[],xr=[],vr=new Float32Array(16),Mr=new Float32Array(9),Sr=new Float32Array(4);function Sn(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=_r[i];if(r===void 0&&(r=new Float32Array(i),_r[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Xe(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ye(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function pi(s,e){let t=xr[e];t===void 0&&(t=new Int32Array(e),xr[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jl(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ql(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;s.uniform2fv(this.addr,e),Ye(t,e)}}function ec(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xe(t,e))return;s.uniform3fv(this.addr,e),Ye(t,e)}}function tc(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;s.uniform4fv(this.addr,e),Ye(t,e)}}function nc(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,n))return;Sr.set(n),s.uniformMatrix2fv(this.addr,!1,Sr),Ye(t,n)}}function ic(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,n))return;Mr.set(n),s.uniformMatrix3fv(this.addr,!1,Mr),Ye(t,n)}}function rc(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,n))return;vr.set(n),s.uniformMatrix4fv(this.addr,!1,vr),Ye(t,n)}}function sc(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ac(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;s.uniform2iv(this.addr,e),Ye(t,e)}}function oc(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;s.uniform3iv(this.addr,e),Ye(t,e)}}function lc(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;s.uniform4iv(this.addr,e),Ye(t,e)}}function cc(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uc(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;s.uniform2uiv(this.addr,e),Ye(t,e)}}function dc(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;s.uniform3uiv(this.addr,e),Ye(t,e)}}function hc(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;s.uniform4uiv(this.addr,e),Ye(t,e)}}function fc(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ss,i)}function pc(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||os,i)}function mc(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ls,i)}function gc(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||as,i)}function _c(s){switch(s){case 5126:return Jl;case 35664:return Ql;case 35665:return ec;case 35666:return tc;case 35674:return nc;case 35675:return ic;case 35676:return rc;case 5124:case 35670:return sc;case 35667:case 35671:return ac;case 35668:case 35672:return oc;case 35669:case 35673:return lc;case 5125:return cc;case 36294:return uc;case 36295:return dc;case 36296:return hc;case 35678:case 36198:case 36298:case 36306:case 35682:return fc;case 35679:case 36299:case 36307:return pc;case 35680:case 36300:case 36308:case 36293:return mc;case 36289:case 36303:case 36311:case 36292:return gc}}function xc(s,e){s.uniform1fv(this.addr,e)}function vc(s,e){const t=Sn(e,this.size,2);s.uniform2fv(this.addr,t)}function Mc(s,e){const t=Sn(e,this.size,3);s.uniform3fv(this.addr,t)}function Sc(s,e){const t=Sn(e,this.size,4);s.uniform4fv(this.addr,t)}function yc(s,e){const t=Sn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bc(s,e){const t=Sn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wc(s,e){const t=Sn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tc(s,e){s.uniform1iv(this.addr,e)}function Ec(s,e){s.uniform2iv(this.addr,e)}function Ac(s,e){s.uniform3iv(this.addr,e)}function Cc(s,e){s.uniform4iv(this.addr,e)}function Rc(s,e){s.uniform1uiv(this.addr,e)}function Lc(s,e){s.uniform2uiv(this.addr,e)}function Dc(s,e){s.uniform3uiv(this.addr,e)}function Pc(s,e){s.uniform4uiv(this.addr,e)}function Fc(s,e,t){const n=this.cache,i=e.length,r=pi(t,i);Xe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ss,r[o])}function Ic(s,e,t){const n=this.cache,i=e.length,r=pi(t,i);Xe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||os,r[o])}function Nc(s,e,t){const n=this.cache,i=e.length,r=pi(t,i);Xe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ls,r[o])}function Uc(s,e,t){const n=this.cache,i=e.length,r=pi(t,i);Xe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||as,r[o])}function Bc(s){switch(s){case 5126:return xc;case 35664:return vc;case 35665:return Mc;case 35666:return Sc;case 35674:return yc;case 35675:return bc;case 35676:return wc;case 5124:case 35670:return Tc;case 35667:case 35671:return Ec;case 35668:case 35672:return Ac;case 35669:case 35673:return Cc;case 5125:return Rc;case 36294:return Lc;case 36295:return Dc;case 36296:return Pc;case 35678:case 36198:case 36298:case 36306:case 35682:return Fc;case 35679:case 36299:case 36307:return Ic;case 35680:case 36300:case 36308:case 36293:return Nc;case 36289:case 36303:case 36311:case 36292:return Uc}}class zc{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_c(t.type)}}class Oc{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Bc(t.type)}}class Gc{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Gi=/(\w+)(\])?(\[|\.)?/g;function yr(s,e){s.seq.push(e),s.map[e.id]=e}function Vc(s,e,t){const n=s.name,i=n.length;for(Gi.lastIndex=0;;){const r=Gi.exec(n),o=Gi.lastIndex;let a=r[1];const u=r[2]==="]",c=r[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===i){yr(t,c===void 0?new zc(a,s,e):new Oc(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Gc(a),yr(t,h)),t=h}}}class ci{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Vc(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function br(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let kc=0;function Wc(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hc(s){switch(s){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function wr(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Wc(s.getShaderSource(e),o)}else return i}function qc(s,e){const t=Hc(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xc(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yc(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dn).join(`
`)}function jc(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zc(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Dn(s){return s!==""}function Tr(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Er(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $c=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wi(s){return s.replace($c,Kc)}function Kc(s,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wi(t)}const Jc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ar(s){return s.replace(Jc,Qc)}function Qc(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cr(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eu(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function tu(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nu(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function iu(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function ru(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function su(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=eu(t),c=tu(t),l=nu(t),h=iu(t),d=ru(t),m=t.isWebGL2?"":Yc(t),_=jc(r),p=i.createProgram();let f,v,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[_].filter(Dn).join(`
`),f.length>0&&(f+=`
`),v=[m,_].filter(Dn).join(`
`),v.length>0&&(v+=`
`)):(f=[Cr(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dn).join(`
`),v=[m,Cr(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?be.tonemapping_pars_fragment:"",t.toneMapping!==0?Xc("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,qc("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dn).join(`
`)),o=Wi(o),o=Tr(o,t),o=Er(o,t),a=Wi(a),a=Tr(a,t),a=Er(a,t),o=Ar(o),a=Ar(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===Ki?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ki?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=T+f+o,y=T+v+a,E=br(i,35633,S),A=br(i,35632,y);if(i.attachShader(p,E),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(E).trim(),H=i.getShaderInfoLog(A).trim();let j=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){j=!1;const L=wr(i,E,"vertex"),z=wr(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+L+`
`+z)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||H==="")&&(U=!1);U&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:R,prefix:f},fragmentShader:{log:H,prefix:v}})}i.deleteShader(E),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new ci(i,p)),P};let g;return this.getAttributes=function(){return g===void 0&&(g=Zc(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=kc++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}let au=0;class ou{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lu(e),t.set(e,n)),n}}class lu{constructor(e){this.id=au++,this.code=e,this.usedTimes=0}}function cu(s,e,t,n,i,r,o){const a=new jr,u=new ou,c=[],l=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,w,R,H,j){const U=H.fog,L=j.geometry,z=g.isMeshStandardMaterial?H.environment:null,X=(g.isMeshStandardMaterial?t:e).get(g.envMap||z),J=X&&X.mapping===306?X.image.height:null,W=_[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Y=K!==void 0?K.length:0;let he=0;L.morphAttributes.position!==void 0&&(he=1),L.morphAttributes.normal!==void 0&&(he=2),L.morphAttributes.color!==void 0&&(he=3);let N,Z,ne,F;if(W){const Se=Rt[W];N=Se.vertexShader,Z=Se.fragmentShader}else N=g.vertexShader,Z=g.fragmentShader,u.update(g),ne=u.getVertexShaderID(g),F=u.getFragmentShaderID(g);const ae=s.getRenderTarget(),oe=g.alphaTest>0,ce=g.clearcoat>0,le=g.iridescence>0;return{isWebGL2:l,shaderID:W,shaderName:g.type,vertexShader:N,fragmentShader:Z,defines:g.defines,customVertexShaderID:ne,customFragmentShaderID:F,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:ae===null?s.outputEncoding:ae.isXRRenderTarget===!0?ae.texture.encoding:3e3,map:!!g.map,matcap:!!g.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:J,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===1,tangentSpaceNormalMap:g.normalMapType===0,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===3001,clearcoat:ce,clearcoatMap:ce&&!!g.clearcoatMap,clearcoatRoughnessMap:ce&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!g.clearcoatNormalMap,iridescence:le,iridescenceMap:le&&!!g.iridescenceMap,iridescenceThicknessMap:le&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===1,alphaMap:!!g.alphaMap,alphaTest:oe,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!L.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!U,useFog:g.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:0,useLegacyLights:s.useLegacyLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function f(g){const w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)w.push(R),w.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(v(w,g),T(w,g),w.push(s.outputEncoding)),w.push(g.customProgramCacheKey),w.join()}function v(g,w){g.push(w.precision),g.push(w.outputEncoding),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.combine),g.push(w.vertexUvs),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function T(g,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),g.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),g.push(a.mask)}function S(g){const w=_[g.type];let R;if(w){const H=Rt[w];R=js.clone(H.uniforms)}else R=g.uniforms;return R}function y(g,w){let R;for(let H=0,j=c.length;H<j;H++){const U=c[H];if(U.cacheKey===w){R=U,++R.usedTimes;break}}return R===void 0&&(R=new su(s,w,g,r),c.push(R)),R}function E(g){if(--g.usedTimes===0){const w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),g.destroy()}}function A(g){u.remove(g)}function P(){u.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:P}}function uu(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function du(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rr(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lr(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,_,p,f){let v=s[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:p,group:f},s[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=m,v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=p,v.group=f),e++,v}function a(h,d,m,_,p,f){const v=o(h,d,m,_,p,f);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function u(h,d,m,_,p,f){const v=o(h,d,m,_,p,f);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,d){t.length>1&&t.sort(h||du),n.length>1&&n.sort(d||Rr),i.length>1&&i.sort(d||Rr)}function l(){for(let h=e,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:u,finish:l,sort:c}}function hu(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Lr,s.set(n,[o])):i>=r.length?(o=new Lr,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function fu(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Oe};break;case"SpotLight":t={position:new B,direction:new B,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function pu(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let mu=0;function gu(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _u(s,e){const t=new fu,n=pu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)i.probe.push(new B);const r=new B,o=new ke,a=new ke;function u(l,h){let d=0,m=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,f=0,v=0,T=0,S=0,y=0,E=0,A=0,P=0,g=0;l.sort(gu);const w=h===!0?Math.PI:1;for(let H=0,j=l.length;H<j;H++){const U=l[H],L=U.color,z=U.intensity,X=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=L.r*z*w,m+=L.g*z*w,_+=L.b*z*w;else if(U.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],z);else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const K=U.shadow,Y=n.get(U);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=U.shadow.matrix,y++}i.directional[p]=W,p++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(L).multiplyScalar(z*w),W.distance=X,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[v]=W;const K=U.shadow;if(U.map&&(i.spotLightMap[P]=U.map,P++,K.updateMatrices(U),U.castShadow&&g++),i.spotLightMatrix[v]=K.matrix,U.castShadow){const Y=n.get(U);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=J,A++}v++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(L).multiplyScalar(z),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[T]=W,T++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*w),W.distance=U.distance,W.decay=U.decay,U.castShadow){const K=U.shadow,Y=n.get(U);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=U.shadow.matrix,E++}i.point[f]=W,f++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(z*w),W.groundColor.copy(U.groundColor).multiplyScalar(z*w),i.hemi[S]=W,S++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const R=i.hash;(R.directionalLength!==p||R.pointLength!==f||R.spotLength!==v||R.rectAreaLength!==T||R.hemiLength!==S||R.numDirectionalShadows!==y||R.numPointShadows!==E||R.numSpotShadows!==A||R.numSpotMaps!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=T,i.point.length=f,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+P-g,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=g,R.directionalLength=p,R.pointLength=f,R.spotLength=v,R.rectAreaLength=T,R.hemiLength=S,R.numDirectionalShadows=y,R.numPointShadows=E,R.numSpotShadows=A,R.numSpotMaps=P,i.version=mu++)}function c(l,h){let d=0,m=0,_=0,p=0,f=0;const v=h.matrixWorldInverse;for(let T=0,S=l.length;T<S;T++){const y=l[T];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(v),d++}else if(y.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(v),_++}else if(y.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(v),m++}else if(y.isHemisphereLight){const E=i.hemi[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(v),f++}}}return{setup:u,setupView:c,state:i}}function Dr(s,e){const t=new _u(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function u(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a}}function xu(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let u;return a===void 0?(u=new Dr(s,e),t.set(r,[u])):o>=a.length?(u=new Dr(s,e),a.push(u)):u=a[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class vu extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mu extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Su=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yu=`uniform sampler2D shadow_pass;
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
}`;function bu(s,e,t){let n=new ns;const i=new Fe,r=new Fe,o=new et,a=new vu({depthPacking:3201}),u=new Mu,c={},l=t.maxTextureSize,h={0:1,1:0,2:2},d=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Su,fragmentShader:yu}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ot;_.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Bt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(y,E,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const P=s.getRenderTarget(),g=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),R=s.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let H=0,j=y.length;H<j;H++){const U=y[H],L=U.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const z=L.getFrameExtents();if(i.multiply(z),r.copy(L.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/z.x),i.x=r.x*z.x,L.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/z.y),i.y=r.y*z.y,L.mapSize.y=r.y)),L.map===null){const J=this.type!==3?{minFilter:1003,magFilter:1003}:{};L.map=new zt(i.x,i.y,J),L.map.texture.name=U.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const X=L.getViewportCount();for(let J=0;J<X;J++){const W=L.getViewport(J);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),R.viewport(o),L.updateMatrices(U,J),n=L.getFrustum(),S(E,A,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===3&&v(L,A),L.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(P,g,w)};function v(y,E){const A=e.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new zt(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(E,null,A,d,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(E,null,A,m,p,null)}function T(y,E,A,P,g,w){let R=null;const H=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(H!==void 0)R=H;else if(R=A.isPointLight===!0?u:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const j=R.uuid,U=E.uuid;let L=c[j];L===void 0&&(L={},c[j]=L);let z=L[U];z===void 0&&(z=R.clone(),L[U]=z),R=z}return R.visible=E.visible,R.wireframe=E.wireframe,w===3?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:h[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,A.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(A.matrixWorld),R.nearDistance=P,R.farDistance=g),R}function S(y,E,A,P,g){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&g===3)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const H=e.update(y),j=y.material;if(Array.isArray(j)){const U=H.groups;for(let L=0,z=U.length;L<z;L++){const X=U[L],J=j[X.materialIndex];if(J&&J.visible){const W=T(y,J,P,A.near,A.far,g);s.renderBufferDirect(A,null,H,W,y,X)}}}else if(j.visible){const U=T(y,j,P,A.near,A.far,g);s.renderBufferDirect(A,null,H,U,y,null)}}const R=y.children;for(let H=0,j=R.length;H<j;H++)S(R[H],E,A,P,g)}}function wu(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const G=new et;let $=null;const re=new et(0,0,0,0);return{setMask:function(ue){$!==ue&&!C&&(s.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){C=ue},setClear:function(ue,ze,Ze,it,Tt){Tt===!0&&(ue*=it,ze*=it,Ze*=it),G.set(ue,ze,Ze,it),re.equals(G)===!1&&(s.clearColor(ue,ze,Ze,it),re.copy(G))},reset:function(){C=!1,$=null,re.set(-1,0,0,0)}}}function r(){let C=!1,G=null,$=null,re=null;return{setTest:function(ue){ue?oe(2929):ce(2929)},setMask:function(ue){G!==ue&&!C&&(s.depthMask(ue),G=ue)},setFunc:function(ue){if($!==ue){switch(ue){case 0:s.depthFunc(512);break;case 1:s.depthFunc(519);break;case 2:s.depthFunc(513);break;case 3:s.depthFunc(515);break;case 4:s.depthFunc(514);break;case 5:s.depthFunc(518);break;case 6:s.depthFunc(516);break;case 7:s.depthFunc(517);break;default:s.depthFunc(515)}$=ue}},setLocked:function(ue){C=ue},setClear:function(ue){re!==ue&&(s.clearDepth(ue),re=ue)},reset:function(){C=!1,G=null,$=null,re=null}}}function o(){let C=!1,G=null,$=null,re=null,ue=null,ze=null,Ze=null,it=null,Tt=null;return{setTest:function(Ve){C||(Ve?oe(2960):ce(2960))},setMask:function(Ve){G!==Ve&&!C&&(s.stencilMask(Ve),G=Ve)},setFunc:function(Ve,_t,Et){($!==Ve||re!==_t||ue!==Et)&&(s.stencilFunc(Ve,_t,Et),$=Ve,re=_t,ue=Et)},setOp:function(Ve,_t,Et){(ze!==Ve||Ze!==_t||it!==Et)&&(s.stencilOp(Ve,_t,Et),ze=Ve,Ze=_t,it=Et)},setLocked:function(Ve){C=Ve},setClear:function(Ve){Tt!==Ve&&(s.clearStencil(Ve),Tt=Ve)},reset:function(){C=!1,G=null,$=null,re=null,ue=null,ze=null,Ze=null,it=null,Tt=null}}}const a=new i,u=new r,c=new o,l=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,p=[],f=null,v=!1,T=null,S=null,y=null,E=null,A=null,P=null,g=null,w=!1,R=null,H=null,j=null,U=null,L=null;const z=s.getParameter(35661);let X=!1,J=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=J>=2);let K=null,Y={};const he=s.getParameter(3088),N=s.getParameter(2978),Z=new et().fromArray(he),ne=new et().fromArray(N);function F(C,G,$){const re=new Uint8Array(4),ue=s.createTexture();s.bindTexture(C,ue),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let ze=0;ze<$;ze++)s.texImage2D(G+ze,0,6408,1,1,0,6408,5121,re);return ue}const ae={};ae[3553]=F(3553,3553,1),ae[34067]=F(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),oe(2929),u.setFunc(3),Be(!1),Ue(1),oe(2884),Je(0);function oe(C){d[C]!==!0&&(s.enable(C),d[C]=!0)}function ce(C){d[C]!==!1&&(s.disable(C),d[C]=!1)}function le(C,G){return m[C]!==G?(s.bindFramebuffer(C,G),m[C]=G,n&&(C===36009&&(m[36160]=G),C===36160&&(m[36009]=G)),!0):!1}function ge(C,G){let $=p,re=!1;if(C)if($=_.get(G),$===void 0&&($=[],_.set(G,$)),C.isWebGLMultipleRenderTargets){const ue=C.texture;if($.length!==ue.length||$[0]!==36064){for(let ze=0,Ze=ue.length;ze<Ze;ze++)$[ze]=36064+ze;$.length=ue.length,re=!0}}else $[0]!==36064&&($[0]=36064,re=!0);else $[0]!==1029&&($[0]=1029,re=!0);re&&(t.isWebGL2?s.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Se(C){return f!==C?(s.useProgram(C),f=C,!0):!1}const ye={100:32774,101:32778,102:32779};if(n)ye[103]=32775,ye[104]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(ye[103]=C.MIN_EXT,ye[104]=C.MAX_EXT)}const Le={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function Je(C,G,$,re,ue,ze,Ze,it){if(C===0){v===!0&&(ce(3042),v=!1);return}if(v===!1&&(oe(3042),v=!0),C!==5){if(C!==T||it!==w){if((S!==100||A!==100)&&(s.blendEquation(32774),S=100,A=100),it)switch(C){case 1:s.blendFuncSeparate(1,771,1,771);break;case 2:s.blendFunc(1,1);break;case 3:s.blendFuncSeparate(0,769,0,1);break;case 4:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case 1:s.blendFuncSeparate(770,771,1,771);break;case 2:s.blendFunc(770,1);break;case 3:s.blendFuncSeparate(0,769,0,1);break;case 4:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,E=null,P=null,g=null,T=C,w=it}return}ue=ue||G,ze=ze||$,Ze=Ze||re,(G!==S||ue!==A)&&(s.blendEquationSeparate(ye[G],ye[ue]),S=G,A=ue),($!==y||re!==E||ze!==P||Ze!==g)&&(s.blendFuncSeparate(Le[$],Le[re],Le[ze],Le[Ze]),y=$,E=re,P=ze,g=Ze),T=C,w=!1}function Te(C,G){C.side===2?ce(2884):oe(2884);let $=C.side===1;G&&($=!$),Be($),C.blending===1&&C.transparent===!1?Je(0):Je(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),u.setFunc(C.depthFunc),u.setTest(C.depthTest),u.setMask(C.depthWrite),a.setMask(C.colorWrite);const re=C.stencilWrite;c.setTest(re),re&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?oe(32926):ce(32926)}function Be(C){R!==C&&(C?s.frontFace(2304):s.frontFace(2305),R=C)}function Ue(C){C!==0?(oe(2884),C!==H&&(C===1?s.cullFace(1029):C===2?s.cullFace(1028):s.cullFace(1032))):ce(2884),H=C}function Ie(C){C!==j&&(X&&s.lineWidth(C),j=C)}function Ne(C,G,$){C?(oe(32823),(U!==G||L!==$)&&(s.polygonOffset(G,$),U=G,L=$)):ce(32823)}function wt(C){C?oe(3089):ce(3089)}function Mt(C){C===void 0&&(C=33984+z-1),K!==C&&(s.activeTexture(C),K=C)}function b(C,G,$){$===void 0&&(K===null?$=33984+z-1:$=K);let re=Y[$];re===void 0&&(re={type:void 0,texture:void 0},Y[$]=re),(re.type!==C||re.texture!==G)&&(K!==$&&(s.activeTexture($),K=$),s.bindTexture(C,G||ae[C]),re.type=C,re.texture=G)}function x(){const C=Y[K];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(C){Z.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function fe(C){ne.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ne.copy(C))}function De(C,G){let $=h.get(G);$===void 0&&($=new WeakMap,h.set(G,$));let re=$.get(C);re===void 0&&(re=s.getUniformBlockIndex(G,C.name),$.set(C,re))}function Ge(C,G){const re=h.get(G).get(C);l.get(G)!==re&&(s.uniformBlockBinding(G,re,C.__bindingPointIndex),l.set(G,re))}function je(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},K=null,Y={},m={},_=new WeakMap,p=[],f=null,v=!1,T=null,S=null,y=null,E=null,A=null,P=null,g=null,w=!1,R=null,H=null,j=null,U=null,L=null,Z.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:oe,disable:ce,bindFramebuffer:le,drawBuffers:ge,useProgram:Se,setBlending:Je,setMaterial:Te,setFlipSided:Be,setCullFace:Ue,setLineWidth:Ie,setPolygonOffset:Ne,setScissorTest:wt,activeTexture:Mt,bindTexture:b,unbindTexture:x,compressedTexImage2D:V,compressedTexImage3D:Q,texImage2D:de,texImage3D:ve,updateUBOMapping:De,uniformBlockBinding:Ge,texStorage2D:q,texStorage3D:xe,texSubImage2D:ee,texSubImage3D:ie,compressedTexSubImage2D:pe,compressedTexSubImage3D:se,scissor:_e,viewport:fe,reset:je}}function Tu(s,e,t,n,i,r,o){const a=i.isWebGL2,u=i.maxTextures,c=i.maxCubemapSize,l=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,x){return v?new OffscreenCanvas(b,x):Bn("canvas")}function S(b,x,V,Q){let ee=1;if((b.width>Q||b.height>Q)&&(ee=Q/Math.max(b.width,b.height)),ee<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=x?kr:Math.floor,pe=ie(ee*b.width),se=ie(ee*b.height);p===void 0&&(p=T(pe,se));const q=V?T(pe,se):p;return q.width=pe,q.height=se,q.getContext("2d").drawImage(b,0,0,pe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+pe+"x"+se+")."),q}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return ki(b.width)&&ki(b.height)}function E(b){return a?!1:b.wrapS!==1001||b.wrapT!==1001||b.minFilter!==1003&&b.minFilter!==1006}function A(b,x){return b.generateMipmaps&&x&&b.minFilter!==1003&&b.minFilter!==1006}function P(b){s.generateMipmap(b)}function g(b,x,V,Q,ee=!1){if(a===!1)return x;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=x;return x===6403&&(V===5126&&(ie=33326),V===5131&&(ie=33325),V===5121&&(ie=33321)),x===33319&&(V===5126&&(ie=33328),V===5131&&(ie=33327),V===5121&&(ie=33323)),x===6408&&(V===5126&&(ie=34836),V===5131&&(ie=34842),V===5121&&(ie=Q===3001&&ee===!1?35907:32856),V===32819&&(ie=32854),V===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function w(b,x,V){return A(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){return b===1003||b===1004||b===1005?9728:9729}function H(b){const x=b.target;x.removeEventListener("dispose",H),U(x),x.isVideoTexture&&_.delete(x)}function j(b){const x=b.target;x.removeEventListener("dispose",j),z(x)}function U(b){const x=n.get(b);if(x.__webglInit===void 0)return;const V=b.source,Q=f.get(V);if(Q){const ee=Q[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(b),Object.keys(Q).length===0&&f.delete(V)}n.remove(b)}function L(b){const x=n.get(b);s.deleteTexture(x.__webglTexture);const V=b.source,Q=f.get(V);delete Q[x.__cacheKey],o.memory.textures--}function z(b){const x=b.texture,V=n.get(b),Q=n.get(x);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(V.__webglFramebuffer[ee]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ee]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ie=x.length;ee<ie;ee++){const pe=n.get(x[ee]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(x[ee])}n.remove(x),n.remove(b)}let X=0;function J(){X=0}function W(){const b=X;return b>=u&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+u),X+=1,b}function K(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function Y(b,x){const V=n.get(b);if(b.isVideoTexture&&wt(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,b,x);return}}t.bindTexture(3553,V.__webglTexture,33984+x)}function he(b,x){const V=n.get(b);if(b.version>0&&V.__version!==b.version){ce(V,b,x);return}t.bindTexture(35866,V.__webglTexture,33984+x)}function N(b,x){const V=n.get(b);if(b.version>0&&V.__version!==b.version){ce(V,b,x);return}t.bindTexture(32879,V.__webglTexture,33984+x)}function Z(b,x){const V=n.get(b);if(b.version>0&&V.__version!==b.version){le(V,b,x);return}t.bindTexture(34067,V.__webglTexture,33984+x)}const ne={1e3:10497,1001:33071,1002:33648},F={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function ae(b,x,V){if(V?(s.texParameteri(b,10242,ne[x.wrapS]),s.texParameteri(b,10243,ne[x.wrapT]),(b===32879||b===35866)&&s.texParameteri(b,32882,ne[x.wrapR]),s.texParameteri(b,10240,F[x.magFilter]),s.texParameteri(b,10241,F[x.minFilter])):(s.texParameteri(b,10242,33071),s.texParameteri(b,10243,33071),(b===32879||b===35866)&&s.texParameteri(b,32882,33071),(x.wrapS!==1001||x.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,10240,R(x.magFilter)),s.texParameteri(b,10241,R(x.minFilter)),x.minFilter!==1003&&x.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function oe(b,x){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",H));const Q=x.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const ie=K(x);if(ie!==b.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[ie].usedTimes++;const pe=ee[b.__cacheKey];pe!==void 0&&(ee[b.__cacheKey].usedTimes--,pe.usedTimes===0&&L(x)),b.__cacheKey=ie,b.__webglTexture=ee[ie].texture}return V}function ce(b,x,V){let Q=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=35866),x.isData3DTexture&&(Q=32879);const ee=oe(b,x),ie=x.source;t.bindTexture(Q,b.__webglTexture,33984+V);const pe=n.get(ie);if(ie.version!==pe.__version||ee===!0){t.activeTexture(33984+V),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const se=E(x)&&y(x.image)===!1;let q=S(x.image,se,!1,l);q=Mt(x,q);const xe=y(q)||a,de=r.convert(x.format,x.encoding);let ve=r.convert(x.type),_e=g(x.internalFormat,de,ve,x.encoding,x.isVideoTexture);ae(Q,x,xe);let fe;const De=x.mipmaps,Ge=a&&x.isVideoTexture!==!0,je=pe.__version===void 0||ee===!0,C=w(x,q,xe);if(x.isDepthTexture)_e=6402,a?x.type===1015?_e=36012:x.type===1014?_e=33190:x.type===1020?_e=35056:_e=33189:x.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===1026&&_e===6402&&x.type!==1012&&x.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=1014,ve=r.convert(x.type)),x.format===1027&&_e===6402&&(_e=34041,x.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=1020,ve=r.convert(x.type))),je&&(Ge?t.texStorage2D(3553,1,_e,q.width,q.height):t.texImage2D(3553,0,_e,q.width,q.height,0,de,ve,null));else if(x.isDataTexture)if(De.length>0&&xe){Ge&&je&&t.texStorage2D(3553,C,_e,De[0].width,De[0].height);for(let G=0,$=De.length;G<$;G++)fe=De[G],Ge?t.texSubImage2D(3553,G,0,0,fe.width,fe.height,de,ve,fe.data):t.texImage2D(3553,G,_e,fe.width,fe.height,0,de,ve,fe.data);x.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(3553,C,_e,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,de,ve,q.data)):t.texImage2D(3553,0,_e,q.width,q.height,0,de,ve,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&je&&t.texStorage3D(35866,C,_e,De[0].width,De[0].height,q.depth);for(let G=0,$=De.length;G<$;G++)fe=De[G],x.format!==1023?de!==null?Ge?t.compressedTexSubImage3D(35866,G,0,0,0,fe.width,fe.height,q.depth,de,fe.data,0,0):t.compressedTexImage3D(35866,G,_e,fe.width,fe.height,q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(35866,G,0,0,0,fe.width,fe.height,q.depth,de,ve,fe.data):t.texImage3D(35866,G,_e,fe.width,fe.height,q.depth,0,de,ve,fe.data)}else{Ge&&je&&t.texStorage2D(3553,C,_e,De[0].width,De[0].height);for(let G=0,$=De.length;G<$;G++)fe=De[G],x.format!==1023?de!==null?Ge?t.compressedTexSubImage2D(3553,G,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(3553,G,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,G,0,0,fe.width,fe.height,de,ve,fe.data):t.texImage2D(3553,G,_e,fe.width,fe.height,0,de,ve,fe.data)}else if(x.isDataArrayTexture)Ge?(je&&t.texStorage3D(35866,C,_e,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,de,ve,q.data)):t.texImage3D(35866,0,_e,q.width,q.height,q.depth,0,de,ve,q.data);else if(x.isData3DTexture)Ge?(je&&t.texStorage3D(32879,C,_e,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,de,ve,q.data)):t.texImage3D(32879,0,_e,q.width,q.height,q.depth,0,de,ve,q.data);else if(x.isFramebufferTexture){if(je)if(Ge)t.texStorage2D(3553,C,_e,q.width,q.height);else{let G=q.width,$=q.height;for(let re=0;re<C;re++)t.texImage2D(3553,re,_e,G,$,0,de,ve,null),G>>=1,$>>=1}}else if(De.length>0&&xe){Ge&&je&&t.texStorage2D(3553,C,_e,De[0].width,De[0].height);for(let G=0,$=De.length;G<$;G++)fe=De[G],Ge?t.texSubImage2D(3553,G,0,0,de,ve,fe):t.texImage2D(3553,G,_e,de,ve,fe);x.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(3553,C,_e,q.width,q.height),t.texSubImage2D(3553,0,0,0,de,ve,q)):t.texImage2D(3553,0,_e,de,ve,q);A(x,xe)&&P(Q),pe.__version=ie.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function le(b,x,V){if(x.image.length!==6)return;const Q=oe(b,x),ee=x.source;t.bindTexture(34067,b.__webglTexture,33984+V);const ie=n.get(ee);if(ee.version!==ie.__version||Q===!0){t.activeTexture(33984+V),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,q=[];for(let G=0;G<6;G++)!pe&&!se?q[G]=S(x.image[G],!1,!0,c):q[G]=se?x.image[G].image:x.image[G],q[G]=Mt(x,q[G]);const xe=q[0],de=y(xe)||a,ve=r.convert(x.format,x.encoding),_e=r.convert(x.type),fe=g(x.internalFormat,ve,_e,x.encoding),De=a&&x.isVideoTexture!==!0,Ge=ie.__version===void 0||Q===!0;let je=w(x,xe,de);ae(34067,x,de);let C;if(pe){De&&Ge&&t.texStorage2D(34067,je,fe,xe.width,xe.height);for(let G=0;G<6;G++){C=q[G].mipmaps;for(let $=0;$<C.length;$++){const re=C[$];x.format!==1023?ve!==null?De?t.compressedTexSubImage2D(34069+G,$,0,0,re.width,re.height,ve,re.data):t.compressedTexImage2D(34069+G,$,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+G,$,0,0,re.width,re.height,ve,_e,re.data):t.texImage2D(34069+G,$,fe,re.width,re.height,0,ve,_e,re.data)}}}else{C=x.mipmaps,De&&Ge&&(C.length>0&&je++,t.texStorage2D(34067,je,fe,q[0].width,q[0].height));for(let G=0;G<6;G++)if(se){De?t.texSubImage2D(34069+G,0,0,0,q[G].width,q[G].height,ve,_e,q[G].data):t.texImage2D(34069+G,0,fe,q[G].width,q[G].height,0,ve,_e,q[G].data);for(let $=0;$<C.length;$++){const ue=C[$].image[G].image;De?t.texSubImage2D(34069+G,$+1,0,0,ue.width,ue.height,ve,_e,ue.data):t.texImage2D(34069+G,$+1,fe,ue.width,ue.height,0,ve,_e,ue.data)}}else{De?t.texSubImage2D(34069+G,0,0,0,ve,_e,q[G]):t.texImage2D(34069+G,0,fe,ve,_e,q[G]);for(let $=0;$<C.length;$++){const re=C[$];De?t.texSubImage2D(34069+G,$+1,0,0,ve,_e,re.image[G]):t.texImage2D(34069+G,$+1,fe,ve,_e,re.image[G])}}}A(x,de)&&P(34067),ie.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ge(b,x,V,Q,ee){const ie=r.convert(V.format,V.encoding),pe=r.convert(V.type),se=g(V.internalFormat,ie,pe,V.encoding);n.get(x).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,se,x.width,x.height,x.depth,0,ie,pe,null):t.texImage2D(ee,0,se,x.width,x.height,0,ie,pe,null)),t.bindFramebuffer(36160,b),Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,Q,ee,n.get(V).__webglTexture,0,Ie(x)):(ee===3553||ee>=34069&&ee<=34074)&&s.framebufferTexture2D(36160,Q,ee,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(b,x,V){if(s.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let Q=33189;if(V||Ne(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===1015?Q=36012:ee.type===1014&&(Q=33190));const ie=Ie(x);Ne(x)?d.renderbufferStorageMultisampleEXT(36161,ie,Q,x.width,x.height):s.renderbufferStorageMultisample(36161,ie,Q,x.width,x.height)}else s.renderbufferStorage(36161,Q,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const Q=Ie(x);V&&Ne(x)===!1?s.renderbufferStorageMultisample(36161,Q,35056,x.width,x.height):Ne(x)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,b)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ee=0;ee<Q.length;ee++){const ie=Q[ee],pe=r.convert(ie.format,ie.encoding),se=r.convert(ie.type),q=g(ie.internalFormat,pe,se,ie.encoding),xe=Ie(x);V&&Ne(x)===!1?s.renderbufferStorageMultisample(36161,xe,q,x.width,x.height):Ne(x)?d.renderbufferStorageMultisampleEXT(36161,xe,q,x.width,x.height):s.renderbufferStorage(36161,q,x.width,x.height)}}s.bindRenderbuffer(36161,null)}function ye(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,ee=Ie(x);if(x.depthTexture.format===1026)Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):s.framebufferTexture2D(36160,36096,3553,Q,0);else if(x.depthTexture.format===1027)Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):s.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Le(b){const x=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ye(x.__webglFramebuffer,b)}else if(V){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=s.createRenderbuffer(),Se(x.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Se(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Je(b,x,V){const Q=n.get(b);x!==void 0&&ge(Q.__webglFramebuffer,b,b.texture,36064,3553),V!==void 0&&Le(b)}function Te(b){const x=b.texture,V=n.get(b),Q=n.get(x);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=x.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,pe=y(b)||a;if(ee){V.__webglFramebuffer=[];for(let se=0;se<6;se++)V.__webglFramebuffer[se]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),ie)if(i.drawBuffers){const se=b.texture;for(let q=0,xe=se.length;q<xe;q++){const de=n.get(se[q]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ne(b)===!1){const se=ie?x:[x];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let q=0;q<se.length;q++){const xe=se[q];V.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[q]);const de=r.convert(xe.format,xe.encoding),ve=r.convert(xe.type),_e=g(xe.internalFormat,de,ve,xe.encoding,b.isXRRenderTarget===!0),fe=Ie(b);s.renderbufferStorageMultisample(36161,fe,_e,b.width,b.height),s.framebufferRenderbuffer(36160,36064+q,36161,V.__webglColorRenderbuffer[q])}s.bindRenderbuffer(36161,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Q.__webglTexture),ae(34067,x,pe);for(let se=0;se<6;se++)ge(V.__webglFramebuffer[se],b,x,36064,34069+se);A(x,pe)&&P(34067),t.unbindTexture()}else if(ie){const se=b.texture;for(let q=0,xe=se.length;q<xe;q++){const de=se[q],ve=n.get(de);t.bindTexture(3553,ve.__webglTexture),ae(3553,de,pe),ge(V.__webglFramebuffer,b,de,36064+q,3553),A(de,pe)&&P(3553)}t.unbindTexture()}else{let se=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Q.__webglTexture),ae(se,x,pe),ge(V.__webglFramebuffer,b,x,36064,se),A(x,pe)&&P(se),t.unbindTexture()}b.depthBuffer&&Le(b)}function Be(b){const x=y(b)||a,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,ee=V.length;Q<ee;Q++){const ie=V[Q];if(A(ie,x)){const pe=b.isWebGLCubeRenderTarget?34067:3553,se=n.get(ie).__webglTexture;t.bindTexture(pe,se),P(pe),t.unbindTexture()}}}function Ue(b){if(a&&b.samples>0&&Ne(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,Q=b.height;let ee=16384;const ie=[],pe=b.stencilBuffer?33306:36096,se=n.get(b),q=b.isWebGLMultipleRenderTargets===!0;if(q)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){ie.push(36064+xe),b.depthBuffer&&ie.push(pe);const de=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(de===!1&&(b.depthBuffer&&(ee|=256),b.stencilBuffer&&(ee|=1024)),q&&s.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[xe]),de===!0&&(s.invalidateFramebuffer(36008,[pe]),s.invalidateFramebuffer(36009,[pe])),q){const ve=n.get(x[xe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ve,0)}s.blitFramebuffer(0,0,V,Q,0,0,V,Q,ee,9728),m&&s.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,se.__webglColorRenderbuffer[xe]);const de=n.get(x[xe]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,de,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function Ie(b){return Math.min(h,b.samples)}function Ne(b){const x=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(b){const x=o.render.frame;_.get(b)!==x&&(_.set(b,x),b.update())}function Mt(b,x){const V=b.encoding,Q=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===1035||V!==3e3&&(V===3001?a===!1?e.has("EXT_sRGB")===!0&&Q===1023?(b.format=1035,b.minFilter=1006,b.generateMipmaps=!1):x=Hr.sRGBToLinear(x):(Q!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),x}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=he,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=Je,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ne}function Eu(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===1009)return 5121;if(r===1017)return 32819;if(r===1018)return 32820;if(r===1010)return 5120;if(r===1011)return 5122;if(r===1012)return 5123;if(r===1013)return 5124;if(r===1014)return 5125;if(r===1015)return 5126;if(r===1016)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return 6406;if(r===1023)return 6408;if(r===1024)return 6409;if(r===1025)return 6410;if(r===1026)return 6402;if(r===1027)return 34041;if(r===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return 6403;if(r===1029)return 36244;if(r===1030)return 33319;if(r===1031)return 33320;if(r===1033)return 36249;if(r===33776||r===33777||r===33778||r===33779)if(o===3001)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===37492)return o===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===37808)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===36492)return o===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Au extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cu={type:"move"};class Vi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),v=this._getHandJoint(c,p);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=l.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cu)))}return a!==null&&(a.visible=i!==null),u!==null&&(u.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ru extends ot{constructor(e,t,n,i,r,o,a,u,c,l){if(l=l!==void 0?l:1026,l!==1026&&l!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===1026&&(n=1014),n===void 0&&l===1027&&(n=1020),super(null,i,r,o,a,u,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=u!==void 0?u:1003,this.flipY=!1,this.generateMipmaps=!1}}class Lu extends vn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",u=1,c=null,l=null,h=null,d=null,m=null,_=null;const p=t.getContextAttributes();let f=null,v=null;const T=[],S=[],y=new Set,E=new Map,A=new vt;A.layers.enable(1),A.viewport=new et;const P=new vt;P.layers.enable(2),P.viewport=new et;const g=[A,P],w=new Au;w.layers.enable(1),w.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Z=T[N];return Z===void 0&&(Z=new Vi,T[N]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(N){let Z=T[N];return Z===void 0&&(Z=new Vi,T[N]=Z),Z.getGripSpace()},this.getHand=function(N){let Z=T[N];return Z===void 0&&(Z=new Vi,T[N]=Z),Z.getHandSpace()};function j(N){const Z=S.indexOf(N.inputSource);if(Z===-1)return;const ne=T[Z];ne!==void 0&&ne.dispatchEvent({type:N.type,data:N.inputSource})}function U(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",L);for(let N=0;N<T.length;N++){const Z=S[N];Z!==null&&(S[N]=null,T[N].disconnect(Z))}R=null,H=null,e.setRenderTarget(f),m=null,d=null,h=null,i=null,v=null,he.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",U),i.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),v=new zt(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,ne=null,F=null;p.depth&&(F=p.stencil?35056:33190,Z=p.stencil?1027:1026,ne=p.stencil?1020:1014);const ae={colorFormat:32856,depthFormat:F,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ae),i.updateRenderState({layers:[d]}),v=new zt(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Ru(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const oe=e.properties.get(v);oe.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(N){for(let Z=0;Z<N.removed.length;Z++){const ne=N.removed[Z],F=S.indexOf(ne);F>=0&&(S[F]=null,T[F].disconnect(ne))}for(let Z=0;Z<N.added.length;Z++){const ne=N.added[Z];let F=S.indexOf(ne);if(F===-1){for(let oe=0;oe<T.length;oe++)if(oe>=S.length){S.push(ne),F=oe;break}else if(S[oe]===null){S[oe]=ne,F=oe;break}if(F===-1)break}const ae=T[F];ae&&ae.connect(ne)}}const z=new B,X=new B;function J(N,Z,ne){z.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(ne.matrixWorld);const F=z.distanceTo(X),ae=Z.projectionMatrix.elements,oe=ne.projectionMatrix.elements,ce=ae[14]/(ae[10]-1),le=ae[14]/(ae[10]+1),ge=(ae[9]+1)/ae[5],Se=(ae[9]-1)/ae[5],ye=(ae[8]-1)/ae[0],Le=(oe[8]+1)/oe[0],Je=ce*ye,Te=ce*Le,Be=F/(-ye+Le),Ue=Be*-ye;Z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ue),N.translateZ(Be),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ie=ce+Be,Ne=le+Be,wt=Je-Ue,Mt=Te+(F-Ue),b=ge*le/Ne*Ie,x=Se*le/Ne*Ie;N.projectionMatrix.makePerspective(wt,Mt,b,x,Ie,Ne)}function W(N,Z){Z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;w.near=P.near=A.near=N.near,w.far=P.far=A.far=N.far,(R!==w.near||H!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,H=w.far);const Z=N.parent,ne=w.cameras;W(w,Z);for(let ae=0;ae<ne.length;ae++)W(ne[ae],Z);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),N.matrix.copy(w.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const F=N.children;for(let ae=0,oe=F.length;ae<oe;ae++)F[ae].updateMatrixWorld(!0);ne.length===2?J(w,A,P):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return u},this.setFoveation=function(N){u=N,d!==null&&(d.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.getPlanes=function(){return y};let K=null;function Y(N,Z){if(l=Z.getViewerPose(c||o),_=Z,l!==null){const ne=l.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let F=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,F=!0);for(let ae=0;ae<ne.length;ae++){const oe=ne[ae];let ce=null;if(m!==null)ce=m.getViewport(oe);else{const ge=h.getViewSubImage(d,oe);ce=ge.viewport,ae===0&&(e.setRenderTargetTextures(v,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(v))}let le=g[ae];le===void 0&&(le=new vt,le.layers.enable(ae),le.viewport=new et,g[ae]=le),le.matrix.fromArray(oe.transform.matrix),le.projectionMatrix.fromArray(oe.projectionMatrix),le.viewport.set(ce.x,ce.y,ce.width,ce.height),ae===0&&w.matrix.copy(le.matrix),F===!0&&w.cameras.push(le)}}for(let ne=0;ne<T.length;ne++){const F=S[ne],ae=T[ne];F!==null&&ae!==void 0&&ae.update(F,Z,c||o)}if(K&&K(N,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ne=null;for(const F of y)Z.detectedPlanes.has(F)||(ne===null&&(ne=[]),ne.push(F));if(ne!==null)for(const F of ne)y.delete(F),E.delete(F),n.dispatchEvent({type:"planeremoved",data:F});for(const F of Z.detectedPlanes)if(!y.has(F))y.add(F),E.set(F,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:F});else{const ae=E.get(F);F.lastChangedTime>ae&&(E.set(F,F.lastChangedTime),n.dispatchEvent({type:"planechanged",data:F}))}}_=null}const he=new is;he.setAnimationLoop(Y),this.setAnimationLoop=function(N){K=N},this.dispose=function(){}}}function Du(s,e){function t(p,f){f.color.getRGB(p.fogColor.value,Qr(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),l(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,S)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),_(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,v,T):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=s.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let T;f.map?T=f.map:f.specularMap?T=f.specularMap:f.displacementMap?T=f.displacementMap:f.normalMap?T=f.normalMap:f.bumpMap?T=f.bumpMap:f.roughnessMap?T=f.roughnessMap:f.metalnessMap?T=f.metalnessMap:f.alphaMap?T=f.alphaMap:f.emissiveMap?T=f.emissiveMap:f.clearcoatMap?T=f.clearcoatMap:f.clearcoatNormalMap?T=f.clearcoatNormalMap:f.clearcoatRoughnessMap?T=f.clearcoatRoughnessMap:f.iridescenceMap?T=f.iridescenceMap:f.iridescenceThicknessMap?T=f.iridescenceThicknessMap:f.specularIntensityMap?T=f.specularIntensityMap:f.specularColorMap?T=f.specularColorMap:f.transmissionMap?T=f.transmissionMap:f.thicknessMap?T=f.thicknessMap:f.sheenColorMap?T=f.sheenColorMap:f.sheenRoughnessMap&&(T=f.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let S;f.aoMap?S=f.aoMap:f.lightMap&&(S=f.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,v,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=T*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S;f.map?S=f.map:f.alphaMap&&(S=f.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function l(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===1&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Pu(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function u(T,S){const y=S.program;n.uniformBlockBinding(T,y)}function c(T,S){let y=i[T.id];y===void 0&&(_(T),y=l(T),i[T.id]=y,T.addEventListener("dispose",f));const E=S.program;n.updateUBOMapping(T,E);const A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function l(T){const S=h();T.__bindingPointIndex=S;const y=s.createBuffer(),E=T.__size,A=T.usage;return s.bindBuffer(35345,y),s.bufferData(35345,E,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,S,y),y}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=i[T.id],y=T.uniforms,E=T.__cache;s.bindBuffer(35345,S);for(let A=0,P=y.length;A<P;A++){const g=y[A];if(m(g,A,E)===!0){const w=g.__offset,R=Array.isArray(g.value)?g.value:[g.value];let H=0;for(let j=0;j<R.length;j++){const U=R[j],L=p(U);typeof U=="number"?(g.__data[0]=U,s.bufferSubData(35345,w+H,g.__data)):U.isMatrix3?(g.__data[0]=U.elements[0],g.__data[1]=U.elements[1],g.__data[2]=U.elements[2],g.__data[3]=U.elements[0],g.__data[4]=U.elements[3],g.__data[5]=U.elements[4],g.__data[6]=U.elements[5],g.__data[7]=U.elements[0],g.__data[8]=U.elements[6],g.__data[9]=U.elements[7],g.__data[10]=U.elements[8],g.__data[11]=U.elements[0]):(U.toArray(g.__data,H),H+=L.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,w,g.__data)}}s.bindBuffer(35345,null)}function m(T,S,y){const E=T.value;if(y[S]===void 0){if(typeof E=="number")y[S]=E;else{const A=Array.isArray(E)?E:[E],P=[];for(let g=0;g<A.length;g++)P.push(A[g].clone());y[S]=P}return!0}else if(typeof E=="number"){if(y[S]!==E)return y[S]=E,!0}else{const A=Array.isArray(y[S])?y[S]:[y[S]],P=Array.isArray(E)?E:[E];for(let g=0;g<A.length;g++){const w=A[g];if(w.equals(P[g])===!1)return w.copy(P[g]),!0}}return!1}function _(T){const S=T.uniforms;let y=0;const E=16;let A=0;for(let P=0,g=S.length;P<g;P++){const w=S[P],R={boundary:0,storage:0},H=Array.isArray(w.value)?w.value:[w.value];for(let j=0,U=H.length;j<U;j++){const L=H[j],z=p(L);R.boundary+=z.boundary,R.storage+=z.storage}if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,P>0){A=y%E;const j=E-A;A!==0&&j-R.boundary<0&&(y+=E-A,w.__offset=y)}y+=R.storage}return A=y%E,A>0&&(y+=E-A),T.__size=y,T.__cache={},this}function p(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function f(T){const S=T.target;S.removeEventListener("dispose",f);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function v(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:u,update:c,dispose:v}}function Fu(){const s=Bn("canvas");return s.style.display="block",s}function ji(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Fu(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,u=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let l;t!==null?l=t.getContextAttributes().alpha:l=s.alpha!==void 0?s.alpha:!1;let h=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const p=this;let f=!1,v=0,T=0,S=null,y=-1,E=null;const A=new et,P=new et;let g=null,w=e.width,R=e.height,H=1,j=null,U=null;const L=new et(0,0,w,R),z=new et(0,0,w,R);let X=!1;const J=new ns;let W=!1,K=!1,Y=null;const he=new ke,N=new B,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return S===null?H:1}let F=t;function ae(M,I){for(let O=0;O<M.length;O++){const D=M[O],k=e.getContext(D,I);if(k!==null)return k}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qi}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",fe,!1),F===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),F=ae(I,M),F===null)throw ae(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let oe,ce,le,ge,Se,ye,Le,Je,Te,Be,Ue,Ie,Ne,wt,Mt,b,x,V,Q,ee,ie,pe,se,q;function xe(){oe=new Hl(F),ce=new zl(F,oe,s),oe.init(ce),pe=new Eu(F,oe,ce),le=new wu(F,oe,ce),ge=new Yl,Se=new uu,ye=new Tu(F,oe,le,Se,ce,pe,ge),Le=new Gl(p),Je=new Wl(p),Te=new ta(F,ce),se=new Ul(F,oe,Te,ce),Be=new ql(F,Te,ge,se),Ue=new Kl(F,Be,Te,ge),Q=new $l(F,ce,ye),b=new Ol(Se),Ie=new cu(p,Le,Je,oe,ce,se,b),Ne=new Du(p,Se),wt=new hu,Mt=new xu(oe,ce),V=new Nl(p,Le,Je,le,Ue,l,o),x=new bu(p,Ue,ce),q=new Pu(F,ge,ce,le),ee=new Bl(F,oe,ge,ce),ie=new Xl(F,oe,ge,ce),ge.programs=Ie.programs,p.capabilities=ce,p.extensions=oe,p.properties=Se,p.renderLists=wt,p.shadowMap=x,p.state=le,p.info=ge}xe();const de=new Lu(p,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(w,R,!1))},this.getSize=function(M){return M.set(w,R)},this.setSize=function(M,I,O=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=M,R=I,e.width=Math.floor(M*H),e.height=Math.floor(I*H),O===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(w*H,R*H).floor()},this.setDrawingBufferSize=function(M,I,O){w=M,R=I,H=O,e.width=Math.floor(M*O),e.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(L)},this.setViewport=function(M,I,O,D){M.isVector4?L.set(M.x,M.y,M.z,M.w):L.set(M,I,O,D),le.viewport(A.copy(L).multiplyScalar(H).floor())},this.getScissor=function(M){return M.copy(z)},this.setScissor=function(M,I,O,D){M.isVector4?z.set(M.x,M.y,M.z,M.w):z.set(M,I,O,D),le.scissor(P.copy(z).multiplyScalar(H).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(M){le.setScissorTest(X=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){U=M},this.getClearColor=function(M){return M.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(M=!0,I=!0,O=!0){let D=0;M&&(D|=16384),I&&(D|=256),O&&(D|=1024),F.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),wt.dispose(),Mt.dispose(),Se.dispose(),Le.dispose(),Je.dispose(),Ue.dispose(),se.dispose(),q.dispose(),Ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",$),de.removeEventListener("sessionend",re),Y&&(Y.dispose(),Y=null),ue.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=ge.autoReset,I=x.enabled,O=x.autoUpdate,D=x.needsUpdate,k=x.type;xe(),ge.autoReset=M,x.enabled=I,x.autoUpdate=O,x.needsUpdate=D,x.type=k}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function De(M){const I=M.target;I.removeEventListener("dispose",De),Ge(I)}function Ge(M){je(M),Se.remove(M)}function je(M){const I=Se.get(M).programs;I!==void 0&&(I.forEach(function(O){Ie.releaseProgram(O)}),M.isShaderMaterial&&Ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,D,k,me){I===null&&(I=Z);const Me=k.isMesh&&k.matrixWorld.determinant()<0,we=ds(M,I,O,D,k);le.setMaterial(D,Me);let Ee=O.index,Pe=1;D.wireframe===!0&&(Ee=Be.getWireframeAttribute(O),Pe=2);const Ae=O.drawRange,Ce=O.attributes.position;let We=Ae.start*Pe,ht=(Ae.start+Ae.count)*Pe;me!==null&&(We=Math.max(We,me.start*Pe),ht=Math.min(ht,(me.start+me.count)*Pe)),Ee!==null?(We=Math.max(We,0),ht=Math.min(ht,Ee.count)):Ce!=null&&(We=Math.max(We,0),ht=Math.min(ht,Ce.count));const Lt=ht-We;if(Lt<0||Lt===1/0)return;se.setup(k,D,we,O,Ee);let qt,He=ee;if(Ee!==null&&(qt=Te.get(Ee),He=ie,He.setIndex(qt)),k.isMesh)D.wireframe===!0?(le.setLineWidth(D.wireframeLinewidth*ne()),He.setMode(1)):He.setMode(4);else if(k.isLine){let Re=D.linewidth;Re===void 0&&(Re=1),le.setLineWidth(Re*ne()),k.isLineSegments?He.setMode(1):k.isLineLoop?He.setMode(2):He.setMode(3)}else k.isPoints?He.setMode(0):k.isSprite&&He.setMode(4);if(k.isInstancedMesh)He.renderInstances(We,Lt,k.count);else if(O.isInstancedBufferGeometry){const Re=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,mi=Math.min(O.instanceCount,Re);He.renderInstances(We,Lt,mi)}else He.render(We,Lt)},this.compile=function(M,I){function O(D,k,me){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,_t(D,k,me),D.side=0,D.needsUpdate=!0,_t(D,k,me),D.side=2):_t(D,k,me)}d=Mt.get(M),d.init(),_.push(d),M.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights(p.useLegacyLights),M.traverse(function(D){const k=D.material;if(k)if(Array.isArray(k))for(let me=0;me<k.length;me++){const Me=k[me];O(Me,M,D)}else O(k,M,D)}),_.pop(),d=null};let C=null;function G(M){C&&C(M)}function $(){ue.stop()}function re(){ue.start()}const ue=new is;ue.setAnimationLoop(G),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(M){C=M,de.setAnimationLoop(M),M===null?ue.stop():ue.start()},de.addEventListener("sessionstart",$),de.addEventListener("sessionend",re),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(I),I=de.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,I,S),d=Mt.get(M,_.length),d.init(),_.push(d),he.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),J.setFromProjectionMatrix(he),K=this.localClippingEnabled,W=b.init(this.clippingPlanes,K),h=wt.get(M,m.length),h.init(),m.push(h),ze(M,I,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(j,U),W===!0&&b.beginShadows();const O=d.state.shadowsArray;if(x.render(O,M,I),W===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(h,M),d.setupLights(p.useLegacyLights),I.isArrayCamera){const D=I.cameras;for(let k=0,me=D.length;k<me;k++){const Me=D[k];Ze(h,M,Me,Me.viewport)}}else Ze(h,M,I);S!==null&&(ye.updateMultisampleRenderTarget(S),ye.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(p,M,I),se.resetDefaultState(),y=-1,E=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ze(M,I,O,D){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){D&&N.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);const Me=Ue.update(M),we=M.material;we.visible&&h.push(M,Me,we,O,N.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==ge.render.frame&&(M.skeleton.update(),M.skeleton.frame=ge.render.frame),!M.frustumCulled||J.intersectsObject(M))){D&&N.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);const Me=Ue.update(M),we=M.material;if(Array.isArray(we)){const Ee=Me.groups;for(let Pe=0,Ae=Ee.length;Pe<Ae;Pe++){const Ce=Ee[Pe],We=we[Ce.materialIndex];We&&We.visible&&h.push(M,Me,We,O,N.z,Ce)}}else we.visible&&h.push(M,Me,we,O,N.z,null)}}const me=M.children;for(let Me=0,we=me.length;Me<we;Me++)ze(me[Me],I,O,D)}function Ze(M,I,O,D){const k=M.opaque,me=M.transmissive,Me=M.transparent;d.setupLightsView(O),W===!0&&b.setGlobalState(p.clippingPlanes,O),me.length>0&&it(k,I,O),D&&le.viewport(A.copy(D)),k.length>0&&Tt(k,I,O),me.length>0&&Tt(me,I,O),Me.length>0&&Tt(Me,I,O),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function it(M,I,O){const D=ce.isWebGL2;Y===null&&(Y=new zt(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:D&&r===!0?4:0}));const k=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const me=p.toneMapping;p.toneMapping=0,Tt(M,I,O),p.toneMapping=me,ye.updateMultisampleRenderTarget(Y),ye.updateRenderTargetMipmap(Y),p.setRenderTarget(k)}function Tt(M,I,O){const D=I.isScene===!0?I.overrideMaterial:null;for(let k=0,me=M.length;k<me;k++){const Me=M[k],we=Me.object,Ee=Me.geometry,Pe=D===null?Me.material:D,Ae=Me.group;we.layers.test(O.layers)&&Ve(we,I,O,Ee,Pe,Ae)}}function Ve(M,I,O,D,k,me){M.onBeforeRender(p,I,O,D,k,me),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(p,I,O,D,M,me),k.transparent===!0&&k.side===2&&k.forceSinglePass===!1?(k.side=1,k.needsUpdate=!0,p.renderBufferDirect(O,I,D,k,M,me),k.side=0,k.needsUpdate=!0,p.renderBufferDirect(O,I,D,k,M,me),k.side=2):p.renderBufferDirect(O,I,D,k,M,me),M.onAfterRender(p,I,O,D,k,me)}function _t(M,I,O){I.isScene!==!0&&(I=Z);const D=Se.get(M),k=d.state.lights,me=d.state.shadowsArray,Me=k.state.version,we=Ie.getParameters(M,k.state,me,I,O),Ee=Ie.getProgramCacheKey(we);let Pe=D.programs;D.environment=M.isMeshStandardMaterial?I.environment:null,D.fog=I.fog,D.envMap=(M.isMeshStandardMaterial?Je:Le).get(M.envMap||D.environment),Pe===void 0&&(M.addEventListener("dispose",De),Pe=new Map,D.programs=Pe);let Ae=Pe.get(Ee);if(Ae!==void 0){if(D.currentProgram===Ae&&D.lightsStateVersion===Me)return Et(M,we),Ae}else we.uniforms=Ie.getUniforms(M),M.onBuild(O,we,p),M.onBeforeCompile(we,p),Ae=Ie.acquireProgram(we,Ee),Pe.set(Ee,Ae),D.uniforms=we.uniforms;const Ce=D.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=b.uniform),Et(M,we),D.needsLights=fs(M),D.lightsStateVersion=Me,D.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix);const We=Ae.getUniforms(),ht=ci.seqWithValue(We.seq,Ce);return D.currentProgram=Ae,D.uniformsList=ht,Ae}function Et(M,I){const O=Se.get(M);O.outputEncoding=I.outputEncoding,O.instancing=I.instancing,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function ds(M,I,O,D,k){I.isScene!==!0&&(I=Z),ye.resetTextureUnits();const me=I.fog,Me=D.isMeshStandardMaterial?I.environment:null,we=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:3e3,Ee=(D.isMeshStandardMaterial?Je:Le).get(D.envMap||Me),Pe=D.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ae=!!D.normalMap&&!!O.attributes.tangent,Ce=!!O.morphAttributes.position,We=!!O.morphAttributes.normal,ht=!!O.morphAttributes.color,Lt=D.toneMapped?p.toneMapping:0,qt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,He=qt!==void 0?qt.length:0,Re=Se.get(D),mi=d.state.lights;if(W===!0&&(K===!0||M!==E)){const ft=M===E&&D.id===y;b.setState(D,M,ft)}let $e=!1;D.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==mi.state.version||Re.outputEncoding!==we||k.isInstancedMesh&&Re.instancing===!1||!k.isInstancedMesh&&Re.instancing===!0||k.isSkinnedMesh&&Re.skinning===!1||!k.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ee||D.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==b.numPlanes||Re.numIntersection!==b.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ae||Re.morphTargets!==Ce||Re.morphNormals!==We||Re.morphColors!==ht||Re.toneMapping!==Lt||ce.isWebGL2===!0&&Re.morphTargetsCount!==He)&&($e=!0):($e=!0,Re.__version=D.version);let Xt=Re.currentProgram;$e===!0&&(Xt=_t(D,I,k));let Zi=!1,yn=!1,gi=!1;const rt=Xt.getUniforms(),Yt=Re.uniforms;if(le.useProgram(Xt.program)&&(Zi=!0,yn=!0,gi=!0),D.id!==y&&(y=D.id,yn=!0),Zi||E!==M){if(rt.setValue(F,"projectionMatrix",M.projectionMatrix),ce.logarithmicDepthBuffer&&rt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,yn=!0,gi=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const ft=rt.map.cameraPosition;ft!==void 0&&ft.setValue(F,N.setFromMatrixPosition(M.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&rt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||k.isSkinnedMesh)&&rt.setValue(F,"viewMatrix",M.matrixWorldInverse)}if(k.isSkinnedMesh){rt.setOptional(F,k,"bindMatrix"),rt.setOptional(F,k,"bindMatrixInverse");const ft=k.skeleton;ft&&(ce.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),rt.setValue(F,"boneTexture",ft.boneTexture,ye),rt.setValue(F,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _i=O.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0&&ce.isWebGL2===!0)&&Q.update(k,O,Xt),(yn||Re.receiveShadow!==k.receiveShadow)&&(Re.receiveShadow=k.receiveShadow,rt.setValue(F,"receiveShadow",k.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Yt.envMap.value=Ee,Yt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),yn&&(rt.setValue(F,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&hs(Yt,gi),me&&D.fog===!0&&Ne.refreshFogUniforms(Yt,me),Ne.refreshMaterialUniforms(Yt,D,H,R,Y),ci.upload(F,Re.uniformsList,Yt,ye)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ci.upload(F,Re.uniformsList,Yt,ye),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&rt.setValue(F,"center",k.center),rt.setValue(F,"modelViewMatrix",k.modelViewMatrix),rt.setValue(F,"normalMatrix",k.normalMatrix),rt.setValue(F,"modelMatrix",k.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const ft=D.uniformsGroups;for(let xi=0,ps=ft.length;xi<ps;xi++)if(ce.isWebGL2){const $i=ft[xi];q.update($i,Xt),q.bind($i,Xt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xt}function hs(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function fs(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,I,O){Se.get(M.texture).__webglTexture=I,Se.get(M.depthTexture).__webglTexture=O;const D=Se.get(M);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=O===void 0,D.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const O=Se.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){S=M,v=I,T=O;let D=!0,k=null,me=!1,Me=!1;if(M){const Ee=Se.get(M);Ee.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),D=!1):Ee.__webglFramebuffer===void 0?ye.setupRenderTarget(M):Ee.__hasExternalTextures&&ye.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture);const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Me=!0);const Ae=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(k=Ae[I],me=!0):ce.isWebGL2&&M.samples>0&&ye.useMultisampledRTT(M)===!1?k=Se.get(M).__webglMultisampledFramebuffer:k=Ae,A.copy(M.viewport),P.copy(M.scissor),g=M.scissorTest}else A.copy(L).multiplyScalar(H).floor(),P.copy(z).multiplyScalar(H).floor(),g=X;if(le.bindFramebuffer(36160,k)&&ce.drawBuffers&&D&&le.drawBuffers(M,k),le.viewport(A),le.scissor(P),le.setScissorTest(g),me){const Ee=Se.get(M.texture);F.framebufferTexture2D(36160,36064,34069+I,Ee.__webglTexture,O)}else if(Me){const Ee=Se.get(M.texture),Pe=I||0;F.framebufferTextureLayer(36160,36064,Ee.__webglTexture,O||0,Pe)}y=-1},this.readRenderTargetPixels=function(M,I,O,D,k,me,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){le.bindFramebuffer(36160,we);try{const Ee=M.texture,Pe=Ee.format,Ae=Ee.type;if(Pe!==1023&&pe.convert(Pe)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===1016&&(oe.has("EXT_color_buffer_half_float")||ce.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ae!==1009&&pe.convert(Ae)!==F.getParameter(35738)&&!(Ae===1015&&(ce.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-D&&O>=0&&O<=M.height-k&&F.readPixels(I,O,D,k,pe.convert(Pe),pe.convert(Ae),me)}finally{const Ee=S!==null?Se.get(S).__webglFramebuffer:null;le.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(M,I,O=0){const D=Math.pow(2,-O),k=Math.floor(I.image.width*D),me=Math.floor(I.image.height*D);ye.setTexture2D(I,0),F.copyTexSubImage2D(3553,O,0,0,M.x,M.y,k,me),le.unbindTexture()},this.copyTextureToTexture=function(M,I,O,D=0){const k=I.image.width,me=I.image.height,Me=pe.convert(O.format),we=pe.convert(O.type);ye.setTexture2D(O,0),F.pixelStorei(37440,O.flipY),F.pixelStorei(37441,O.premultiplyAlpha),F.pixelStorei(3317,O.unpackAlignment),I.isDataTexture?F.texSubImage2D(3553,D,M.x,M.y,k,me,Me,we,I.image.data):I.isCompressedTexture?F.compressedTexSubImage2D(3553,D,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,Me,I.mipmaps[0].data):F.texSubImage2D(3553,D,M.x,M.y,Me,we,I.image),D===0&&O.generateMipmaps&&F.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O,D,k=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,we=M.max.z-M.min.z+1,Ee=pe.convert(D.format),Pe=pe.convert(D.type);let Ae;if(D.isData3DTexture)ye.setTexture3D(D,0),Ae=32879;else if(D.isDataArrayTexture)ye.setTexture2DArray(D,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,D.flipY),F.pixelStorei(37441,D.premultiplyAlpha),F.pixelStorei(3317,D.unpackAlignment);const Ce=F.getParameter(3314),We=F.getParameter(32878),ht=F.getParameter(3316),Lt=F.getParameter(3315),qt=F.getParameter(32877),He=O.isCompressedTexture?O.mipmaps[0]:O.image;F.pixelStorei(3314,He.width),F.pixelStorei(32878,He.height),F.pixelStorei(3316,M.min.x),F.pixelStorei(3315,M.min.y),F.pixelStorei(32877,M.min.z),O.isDataTexture||O.isData3DTexture?F.texSubImage3D(Ae,k,I.x,I.y,I.z,me,Me,we,Ee,Pe,He.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ae,k,I.x,I.y,I.z,me,Me,we,Ee,He.data)):F.texSubImage3D(Ae,k,I.x,I.y,I.z,me,Me,we,Ee,Pe,He),F.pixelStorei(3314,Ce),F.pixelStorei(32878,We),F.pixelStorei(3316,ht),F.pixelStorei(3315,Lt),F.pixelStorei(32877,qt),k===0&&D.generateMipmaps&&F.generateMipmap(Ae),le.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ye.setTextureCube(M,0):M.isData3DTexture?ye.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ye.setTexture2DArray(M,0):ye.setTexture2D(M,0),le.unbindTexture()},this.resetState=function(){v=0,T=0,S=null,le.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(ji.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(s){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!s}}});class Iu extends ji{}Iu.prototype.isWebGL1Renderer=!0;class Pr extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Nu extends ot{constructor(e=null,t=1,n=1,i,r,o,a,u,c=1003,l=1003,h,d){super(null,o,a,u,c,l,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fr=new ke,Hi=new Yr,oi=new di,li=new B;class Bu extends dt{constructor(e=new Ot,t=new Uu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oi.copy(n.boundingSphere),oi.applyMatrix4(i),oi.radius+=r,e.ray.intersectsSphere(oi)===!1)return;Fr.copy(i).invert(),Hi.copy(e.ray).applyMatrix4(Fr);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,p=m;_<p;_++){const f=c.getX(_);li.fromBufferAttribute(h,f),Ir(li,f,u,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,p=m;_<p;_++)li.fromBufferAttribute(h,_),Ir(li,_,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ir(s,e,t,n,i,r,o){const a=Hi.distanceSqToPoint(s);if(a<t){const u=new B;Hi.closestPointToPoint(s,u),u.applyMatrix4(n);const c=i.ray.origin.distanceTo(u);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,object:o})}}const Nr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zu{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return u?u(l):l},this.setURLModifier=function(l){return u=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){const h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(l))return _}return null}}}const Ou=new zu;class cs{constructor(e){this.manager=e!==void 0?e:Ou,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Gu extends cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Nr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Bn("img");function u(){l(),Nr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){l(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){a.removeEventListener("load",u,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Vu extends cs{constructor(e){super(e)}load(e,t,n,i){const r=new ot,o=new Gu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ur(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ur();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ur(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qi);const mn=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Wu=`
  precision highp float;
  uniform sampler2D uTarget;
  uniform vec2 uPoint;
  uniform vec3 uColor;
  uniform float uRadius;
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv - uPoint;
    p.x *= uAspect;
    vec3 splat = exp(-dot(p, p) / (uRadius * uRadius)) * uColor;
    vec3 base = texture2D(uTarget, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
  }
`,Hu=`
  precision highp float;
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 uTexelSize;
  uniform float uDelta;
  uniform float uDissipation;
  varying vec2 vUv;

  void main() {
    vec2 coord = vUv - uDelta * texture2D(uVelocity, vUv).xy * uTexelSize;
    gl_FragColor = uDissipation * texture2D(uSource, coord);
  }
`,qu=`
  precision highp float;
  uniform sampler2D uVelocity;
  uniform vec2 uTexelSize;
  varying vec2 vUv;

  void main() {
    float L = texture2D(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).x;
    float R = texture2D(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).x;
    float B = texture2D(uVelocity, vUv - vec2(0.0, uTexelSize.y)).y;
    float T = texture2D(uVelocity, vUv + vec2(0.0, uTexelSize.y)).y;
    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`,Xu=`
  precision highp float;
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;
  uniform vec2 uTexelSize;
  varying vec2 vUv;

  void main() {
    float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
    float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
    float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
    float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
    float div = texture2D(uDivergence, vUv).x;
    float p = (L + R + B + T - div) * 0.25;
    gl_FragColor = vec4(p * 0.95, 0.0, 0.0, 1.0);
  }
`,Yu=`
  precision highp float;
  uniform sampler2D uPressure;
  uniform sampler2D uVelocity;
  uniform vec2 uTexelSize;
  varying vec2 vUv;

  void main() {
    float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
    float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
    float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
    float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
    vec2 vel = texture2D(uVelocity, vUv).xy - 0.5 * vec2(R - L, T - B);
    gl_FragColor = vec4(vel, 0.0, 1.0);
  }
`,ju=`
  // Analytic Curl Noise
  vec3 potential(vec3 p) {
    return vec3(
      sin(p.y + cos(p.z * 1.5)) * 0.5 + sin(p.z * 0.8),
      sin(p.z + cos(p.x * 1.5)) * 0.5 + sin(p.x * 0.8),
      sin(p.x + cos(p.y * 1.5)) * 0.5 + sin(p.y * 0.8)
    );
  }

  vec3 curlNoise(vec3 p) {
    const float e = 0.001;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(e, 0.0, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);

    vec3 p_x0 = potential(p - dx);
    vec3 p_x1 = potential(p + dx);
    vec3 p_y0 = potential(p - dy);
    vec3 p_y1 = potential(p + dy);
    vec3 p_z0 = potential(p - dz);
    vec3 p_z1 = potential(p + dz);

    float x = (p_y1.z - p_y0.z) - (p_z1.y - p_y0.y);
    float y = (p_z1.x - p_z0.x) - (p_x1.z - p_x0.z);
    float z = (p_x1.y - p_x0.y) - (p_y1.x - p_y0.x);

    return normalize(vec3(x, y, z) / (2.0 * e));
  }

  // Signed Distance Function: Bent sculpted torus framing the core
  float sdfShape(vec3 p) {
    p.z = sqrt(p.z * p.z + 0.0215) - sqrt(0.012);

    const vec4 q = vec4(0.5, 0.5, 0.5, 0.5);
    vec3 qv = q.xyz;
    float qw = q.w;
    p = p + 2.0 * cross(qv, cross(qv, p) + qw * p);

    if (length(p) > 0.85) return length(p) - 0.7;

    vec2 ring = vec2(length(p.xz) - 0.46, p.y);
    float d = length(ring) - 0.12;
    d += sin(p.x * 5.0) * sin(p.y * 5.0) * sin(p.z * 5.0) * 0.025;
    return d;
  }

  vec3 sdfNormal(vec3 p) {
    const float eps = 0.001;
    return normalize(vec3(
      sdfShape(p + vec3(eps, 0.0, 0.0)) - sdfShape(p - vec3(eps, 0.0, 0.0)),
      sdfShape(p + vec3(0.0, eps, 0.0)) - sdfShape(p - vec3(0.0, eps, 0.0)),
      sdfShape(p + vec3(0.0, 0.0, eps)) - sdfShape(p - vec3(0.0, 0.0, eps))
    ));
  }
`,Zu=`
  precision highp float;
  uniform sampler2D uCurrentPos;
  uniform sampler2D uOriginTex;
  uniform sampler2D uFluidVelocity;
  uniform sampler2D uFluidDensity;
  uniform float uTime;
  uniform float uHZ;
  uniform mat4 uModelMatrix;
  uniform mat4 uProjectionMatrix;
  uniform mat3 uCamWorldRot;
  varying vec2 vUv;

  ${ju}

  void main() {
    vec3 pos = texture2D(uCurrentPos, vUv).xyz;
    vec3 origin = texture2D(uOriginTex, vUv).xyz;

    if (length(pos) < 0.0001) {
      pos = origin;
    }

    if (length(pos) > 0.75) pos /= 1.5;

    pos += curlNoise(pos * 0.1 + uTime * 0.05) * 1.0 * 0.0002 * uHZ;

    vec3 gradient = sdfNormal(pos);
    float sdf = sdfShape(pos);
    pos += cross(normalize(pos + 0.0001), normalize(gradient)) * 0.0005;
    pos += -gradient * sdf * 0.5;

    pos += (origin - pos) * 0.0002 * uHZ;

    vec4 clip = uProjectionMatrix * (uModelMatrix * vec4(pos, 1.0));
    vec2 screenUV = (clip.xy / clip.w) * 0.5 + 0.5;

    if (screenUV.x >= 0.0 && screenUV.x <= 1.0 && screenUV.y >= 0.0 && screenUV.y <= 1.0) {
      vec2 fv = texture2D(uFluidVelocity, screenUV).xy;
      vec3 flow = uCamWorldRot * vec3(fv, 0.0);
      pos += flow * 0.0001 * uHZ * 0.4 * texture2D(uFluidDensity, screenUV).r;
    }

    gl_FragColor = vec4(pos, 1.0);
  }
`,$u=`
  uniform sampler2D uPosTex;
  uniform float uDPR;
  attribute vec2 aUv;
  attribute vec4 aRandom;
  varying vec4 vRandom;
  varying float vScale;

  void main() {
    vec3 pos = texture2D(uPosTex, aUv).xyz;
    pos *= mix(1.0, 1.4, pow(aRandom.y, 120.0));
    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    float distToCamera = length(mvPos.xyz);
    float scale = smoothstep(3.0, 15.0, distToCamera) * mix(0.5, 1.0, aRandom.z);
    vScale = scale;
    vRandom = aRandom;

    // Delicate stardust particle size clamped to prevent giant blobs
    gl_PointSize = clamp(0.024 * uDPR * 2.0 * scale * (1000.0 / distToCamera), 1.0, 3.2);
    gl_Position = projectionMatrix * mvPos;
  }
`,Ku=`
  precision highp float;
  uniform sampler2D uMatcapGrey;
  uniform sampler2D uMatcapBronze;
  uniform float uTheme;
  uniform float uTime;
  varying vec4 vRandom;
  varying float vScale;

  void main() {
    if (vScale < 0.1) discard;
    vec2 uv = gl_PointCoord - vec2(0.5);
    float distSq = dot(uv, uv);
    if (distSq > 0.25) discard;

    float circleAlpha = 1.0 - smoothstep(0.14, 0.25, distSq);

    float rot = sin(uTime + vRandom.z * 20.0) * 0.5 + 1.0;
    float c = cos(rot);
    float s = sin(rot);
    vec2 rotUv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y) + 0.5;

    if (uTheme > 0.5) {
      // DARK MODE: Pure black background, Additive Blending, Lavender & Stardust
      vec3 grey = vec3(mix(0.0, 0.2, vRandom.x));
      vec3 lavender = vec3(0.66, 0.53, 1.0);
      vec3 baseColor = mix(grey, lavender, pow(vRandom.z, 100.0));
      float sparkle = 0.5 + (0.4 + sin(uTime * 4.0 + vRandom.y * 20.0)) * pow(vRandom.z, 10.0) * 2.5;

      vec4 matcap = texture2D(uMatcapGrey, rotUv);
      vec3 col = baseColor * sparkle;
      vec3 softLight = (1.0 - 2.0 * matcap.rgb) * col * col + 2.0 * matcap.rgb * col;
      col = mix(col, softLight, 0.8);
      vec3 overlay = mix(2.0 * col * matcap.rgb, 1.0 - 2.0 * (1.0 - col) * (1.0 - matcap.rgb), step(0.5, col));
      col = mix(col, overlay, 0.2);

      gl_FragColor = vec4(col, circleAlpha);
    } else {
      // LIGHT MODE: Warm Alabaster Ivory background, Normal Blending, Metallic Bronze & Deep Charcoal
      vec3 charcoal = vec3(0.18, 0.16, 0.14);
      vec3 bronze = vec3(0.72, 0.45, 0.32);
      vec3 champagne = vec3(0.85, 0.65, 0.45);
      vec3 baseColor = mix(charcoal, bronze, pow(vRandom.z, 24.0));
      baseColor = mix(baseColor, champagne, pow(vRandom.x, 60.0));

      float shimmer = 0.88 + 0.25 * sin(uTime * 3.0 + vRandom.y * 15.0);

      vec4 matcap = texture2D(uMatcapBronze, rotUv);
      vec3 col = mix(baseColor, matcap.rgb * 0.95, 0.4) * shimmer;

      float alpha = circleAlpha * mix(0.75, 0.95, vRandom.w);
      gl_FragColor = vec4(col, alpha);
    }
  }
`;function Ju(s,e,t,n,i){const r=n==="dark",o=new Pn;o.position.set(0,-.05,-1),o.rotation.set(Nn.degToRad(-28.4),Nn.degToRad(390),Nn.degToRad(4.92)),o.scale.set(5,5,6);function a(g,w){return new zt(g,w,{type:i,format:1023,minFilter:1003,magFilter:1003,depthBuffer:!1,stencilBuffer:!1})}let u=a(s,s),c=a(s,s);const l=new Float32Array(e*4);for(let g=0;g<e;g++){const w=Math.random()*Math.PI*2,R=Math.acos(Math.random()*2-1),H=.4+Math.random()*.3;l[g*4+0]=H*Math.sin(R)*Math.cos(w),l[g*4+1]=H*Math.sin(R)*Math.sin(w),l[g*4+2]=(Math.random()*2-1)*.35,l[g*4+3]=1}const h=new Nu(l,s,s,1023,1015);h.needsUpdate=!0;const d=new ut({uniforms:{uCurrentPos:{value:null},uOriginTex:{value:h},uFluidVelocity:{value:null},uFluidDensity:{value:null},uTime:{value:0},uHZ:{value:1},uModelMatrix:{value:new ke},uProjectionMatrix:{value:new ke},uCamWorldRot:{value:new Qe}},vertexShader:mn,fragmentShader:Zu,depthTest:!1,depthWrite:!1}),m=new Vu,_=m.load("assets/images/matcap-grey.png"),p=m.load("assets/images/matcap-bronze.png"),f=new Ot,v=new Float32Array(e*2),T=new Float32Array(e*4);for(let g=0;g<s;g++)for(let w=0;w<s;w++){const R=g*s+w;v[R*2+0]=(w+.5)/s,v[R*2+1]=(g+.5)/s,T[R*4+0]=Math.random(),T[R*4+1]=Math.random(),T[R*4+2]=Math.random(),T[R*4+3]=Math.random()}f.setAttribute("position",new gt(new Float32Array(e*3),3)),f.setAttribute("aUv",new gt(v,2)),f.setAttribute("aRandom",new gt(T,4));const S=new ut({uniforms:{uPosTex:{value:null},uMatcapGrey:{value:_},uMatcapBronze:{value:p},uTheme:{value:r?1:0},uTime:{value:0},uDPR:{value:t}},vertexShader:$u,fragmentShader:Ku,transparent:!0,depthTest:!0,depthWrite:!1,blending:r?2:1}),y=new Bu(f,S);o.add(y);function E(g,w,R,H,j,U,L,z,X){X.updateMatrixWorld(),o.updateMatrixWorld();const J=new ke().multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),W=new Qe().setFromMatrix4(X.matrixWorld);d.uniforms.uCurrentPos.value=u.texture,d.uniforms.uFluidVelocity.value=j,d.uniforms.uFluidDensity.value=U,d.uniforms.uTime.value=L,d.uniforms.uHZ.value=z,d.uniforms.uModelMatrix.value.copy(o.matrixWorld),d.uniforms.uProjectionMatrix.value.copy(J),d.uniforms.uCamWorldRot.value.copy(W),H.material=d,g.setRenderTarget(c),g.render(w,R),g.setRenderTarget(null);const K=u;u=c,c=K,S.uniforms.uPosTex.value=u.texture,S.uniforms.uTime.value=L}function A(g){S.uniforms.uTheme.value=g?1:0,S.blending=g?2:1,S.needsUpdate=!0}function P(){u.dispose(),c.dispose(),h.dispose(),_.dispose(),p.dispose(),f.dispose(),d.dispose(),S.dispose()}return{group:o,renderMat:S,simMat:d,stepSimulation:E,updateTheme:A,dispose:P}}function Br(){const s=typeof window<"u"?window.innerWidth:1200,e=typeof window<"u"?window.innerHeight:800,t=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1,n=s<=760;return{width:s,height:e,dpr:t,isMobile:n}}function Qu(){if(typeof window>"u")return{simSize:512,particleCount:262144,isHighEnd:!0};const s=window.innerWidth<=760,e=navigator.deviceMemory||4,t=navigator.hardwareConcurrency||4,n=!s&&e>=4&&t>=4,i=s?128:n?512:256,r=i*i;return{simSize:i,particleCount:r,isHighEnd:n}}function zr(s,e,t,n,i){if(e===t)return n;const r=Math.max(0,Math.min(1,(s-e)/(t-e)));return n+r*(i-n)}function ed(s,e,t=0,n=0){const i={x:s*.5,y:e*.5,prevX:s*.5,prevY:e*.5,normX:0,normY:0,targetCamX:t,targetCamY:n,lastMoveTime:performance.now()};function r(o,a,u,c,l){const h=performance.now();i.lastMoveTime=h;const d=o-i.prevX,m=a-i.prevY,_=Math.sqrt(d*d+m*m),p=o/u*2-1,f=a/c*2-1;i.normX=p,i.normY=f,i.targetCamX=t+p*-1,i.targetCamY=n+f*2;let v=null;if(_>.01){const T=zr(_,0,5,0,60)*(l?.8:.6),S=zr(_,0,15,0,10);v={point:[o/u,1-a/c],color:[d*S*.1,-m*S*.1,1],radius:T/200/(u/c),aspect:u/c}}return i.prevX=o,i.prevY=a,v}return{mouse:i,updatePointer:r}}function td(s){if(!s)return null;let{width:e,height:t,dpr:n,isMobile:i}=Br();const{simSize:r,particleCount:o}=Qu();let a=!1,u=0,c=document.documentElement.getAttribute("data-theme")||localStorage.getItem("theme")||"light";const l=new ji({canvas:s,antialias:!1,alpha:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(n),c==="dark"?l.setClearColor(0,1):l.setClearColor(16118507,0);const h=l.getContext(),m=h.getExtension("OES_texture_half_float")||h.getExtension("EXT_color_buffer_half_float")?1016:1015,_=new Pr,p=new vt(30,e/t,.1,1e3),f=new B(0,0,6);p.position.copy(f),p.lookAt(0,0,0);const v=new rs(-1,1,1,-1,0,1),T=new Pr,S=new fi(2,2),y=new Bt(S);T.add(y);function E(Te,Be){return new zt(Te,Be,{type:m,format:1023,minFilter:1006,magFilter:1006,depthBuffer:!1,stencilBuffer:!1})}const A=256,P=512;let g=E(A,A),w=E(A,A),R=E(P,P),H=E(P,P),j=E(A,A),U=E(A,A),L=E(A,A);const z=new ut({uniforms:{uTarget:{value:null},uPoint:{value:new Fe},uColor:{value:new B},uRadius:{value:.05},uAspect:{value:e/t}},vertexShader:mn,fragmentShader:Wu,depthTest:!1,depthWrite:!1}),X=new ut({uniforms:{uVelocity:{value:null},uSource:{value:null},uTexelSize:{value:new Fe(1/A,1/A)},uDelta:{value:1/60},uDissipation:{value:.98}},vertexShader:mn,fragmentShader:Hu,depthTest:!1,depthWrite:!1}),J=new ut({uniforms:{uVelocity:{value:null},uTexelSize:{value:new Fe(1/A,1/A)}},vertexShader:mn,fragmentShader:qu,depthTest:!1,depthWrite:!1}),W=new ut({uniforms:{uPressure:{value:null},uDivergence:{value:null},uTexelSize:{value:new Fe(1/A,1/A)}},vertexShader:mn,fragmentShader:Xu,depthTest:!1,depthWrite:!1}),K=new ut({uniforms:{uPressure:{value:null},uVelocity:{value:null},uTexelSize:{value:new Fe(1/A,1/A)}},vertexShader:mn,fragmentShader:Yu,depthTest:!1,depthWrite:!1});let Y=Ju(r,o,n,c,m);_.add(Y.group);const he=document.getElementById("portrait-wrapper"),{mouse:N,updatePointer:Z}=ed(e,t,f.x,f.y);function ne(Te,Be){if(a)return;const Ue=Z(Te,Be,e,t,i);if(Ue){z.uniforms.uTarget.value=g.texture,z.uniforms.uPoint.value.set(Ue.point[0],Ue.point[1]),z.uniforms.uColor.value.set(Ue.color[0],Ue.color[1],Ue.color[2]),z.uniforms.uRadius.value=Ue.radius,z.uniforms.uAspect.value=Ue.aspect,y.material=z,l.setRenderTarget(w),l.render(T,v);let Ie=g;g=w,w=Ie,z.uniforms.uTarget.value=R.texture,z.uniforms.uColor.value.set(1,1,1),l.setRenderTarget(H),l.render(T,v);let Ne=R;R=H,H=Ne,l.setRenderTarget(null)}}const F=Te=>ne(Te.clientX,Te.clientY),ae=Te=>{Te.touches.length>0&&ne(Te.touches[0].clientX,Te.touches[0].clientY)};window.addEventListener("pointermove",F,{passive:!0}),window.addEventListener("touchmove",ae,{passive:!0});function oe(Te){X.uniforms.uVelocity.value=g.texture,X.uniforms.uSource.value=g.texture,X.uniforms.uDelta.value=Te,X.uniforms.uDissipation.value=.98,X.uniforms.uTexelSize.value.set(1/A,1/A),y.material=X,l.setRenderTarget(w),l.render(T,v);let Be=g;g=w,w=Be,X.uniforms.uVelocity.value=g.texture,X.uniforms.uSource.value=R.texture,X.uniforms.uDissipation.value=.97,l.setRenderTarget(H),l.render(T,v);let Ue=R;R=H,H=Ue,J.uniforms.uVelocity.value=g.texture,y.material=J,l.setRenderTarget(j),l.render(T,v),W.uniforms.uDivergence.value=j.texture,y.material=W;for(let Ie=0;Ie<5;Ie++){W.uniforms.uPressure.value=U.texture,l.setRenderTarget(L),l.render(T,v);let Ne=U;U=L,L=Ne}K.uniforms.uPressure.value=U.texture,K.uniforms.uVelocity.value=g.texture,y.material=K,l.setRenderTarget(w),l.render(T,v),Be=g,g=w,w=Be,l.setRenderTarget(null)}const ce=new ku;function le(){if(a)return;u=requestAnimationFrame(le);const Te=Math.min(ce.getDelta(),.05),Be=ce.getElapsedTime(),Ue=Te*60;if(oe(Te),p.position.x=Nn.lerp(p.position.x,N.targetCamX,.05),p.position.y=Nn.lerp(p.position.y,N.targetCamY,.05),p.lookAt(0,0,0),he){const Ie=N.normX*-14,Ne=N.normY*-8;he.style.transform=`translate3d(${Ie}px, ${Ne}px, 0)`}Y&&Y.stepSimulation(l,T,v,y,g.texture,R.texture,Be,Ue,p),l.render(_,p)}le();const ge=()=>{const Te=Br();e=Te.width,t=Te.height,n=Te.dpr,i=Te.isMobile,p.aspect=e/t,p.updateProjectionMatrix(),l.setSize(e,t),z.uniforms.uAspect.value=e/t};window.addEventListener("resize",ge);const Se=Te=>{Te.preventDefault(),a=!0,cancelAnimationFrame(u)},ye=()=>{a=!1,g=E(A,A),w=E(A,A),R=E(P,P),H=E(P,P),j=E(A,A),U=E(A,A),L=E(A,A),le()};s.addEventListener("webglcontextlost",Se,!1),s.addEventListener("webglcontextrestored",ye,!1);function Le(Te){c=Te;const Be=Te==="dark";Be?l.setClearColor(0,1):l.setClearColor(16118507,0),Y&&Y.updateTheme(Be)}function Je(){cancelAnimationFrame(u),window.removeEventListener("pointermove",F),window.removeEventListener("touchmove",ae),window.removeEventListener("resize",ge),s.removeEventListener("webglcontextlost",Se),s.removeEventListener("webglcontextrestored",ye),g.dispose(),w.dispose(),R.dispose(),H.dispose(),j.dispose(),U.dispose(),L.dispose(),z.dispose(),X.dispose(),J.dispose(),W.dispose(),K.dispose(),S.dispose(),Y&&(Y.dispose(),_.remove(Y.group),Y=null),l.dispose()}return{setTheme:Le,dispose:Je}}const zn={name:"NETHUNA SAHAS",company:"Nevucore",experienceYears:"6+ Years Exp",linkedinUrl:"https://www.linkedin.com/in/nethuna-sahas-a83544394"};function nd(s){const e=document.getElementById("theme-toggle");e&&e.addEventListener("click",()=>{const i=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i),s&&s(i)}),document.querySelectorAll('.top-nav a[target="_blank"]').forEach(n=>{n.setAttribute("rel","noopener noreferrer"),n.href.includes("linkedin.com")&&(n.href=zn.linkedinUrl)})}function id(){const s=document.querySelector(".brand-subtitle");s&&(s.textContent=`Founder at ${zn.company} · ${zn.experienceYears}`)}function rd(){document.querySelectorAll(".footer-back-link").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})});const e=document.querySelector(".footer-inner > div");if(e){const t=new Date().getFullYear();e.textContent=`${zn.name} © ${t} · FOUNDER AT ${zn.company.toUpperCase()} · ALL RIGHTS RESERVED`}}function sd(){const s=document.querySelectorAll(".home-tags .chip"),e=document.querySelectorAll(".home-card");s.forEach(n=>{n.addEventListener("click",()=>{s.forEach(r=>r.classList.remove("active")),n.classList.add("active");const i=n.getAttribute("data-filter")||"all";e.forEach(r=>{const o=r.getAttribute("data-category")||"";i==="all"||o.includes(i)?(r.style.opacity="1",r.style.transform="translateX(0)",r.style.pointerEvents="auto"):(r.style.opacity="0.22",r.style.transform="translateX(-4px)",r.style.pointerEvents="none")})})});const t=document.querySelector(".scroll-down-indicator");t&&t.addEventListener("click",n=>{n.preventDefault();const i=document.getElementById("showcase");i&&i.scrollIntoView({behavior:"smooth"})})}function ad(){const s=document.querySelectorAll(".scroll-reveal");if(s.length!==0)if("IntersectionObserver"in window){const e=new IntersectionObserver((t,n)=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("in-view"),n.unobserve(i.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});s.forEach(t=>e.observe(t))}else s.forEach(e=>e.classList.add("in-view"))}function od(s,e=15e3){try{const t=`rate_limit_${s}`,n=parseInt(localStorage.getItem(t)||"0",10),i=Date.now(),r=i-n;return r<e?{allowed:!1,remainingSec:Math.ceil((e-r)/1e3)}:(localStorage.setItem(t,i.toString()),{allowed:!0,remainingSec:0})}catch{return{allowed:!0,remainingSec:0}}}function us(){document.querySelectorAll('a[target="_blank"]').forEach(e=>{const t=(e.getAttribute("rel")||"").toLowerCase();(!t.includes("noopener")||!t.includes("noreferrer"))&&e.setAttribute("rel","noopener noreferrer")})}function ld(){us()}function Or(s){return typeof s!="string"?"":s.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")}function cd(s){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(s.trim())&&s.length<=100}function ud(){if(typeof window>"u")return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.querySelectorAll(".hero-mask-line > span").forEach(d=>{d.style.transform="translateY(0%)",d.style.opacity="1"});const l=document.querySelector(".portrait-stage");l&&(l.style.transform="translate(-50%, 0px) scale(1)",l.style.filter="blur(0px)",l.style.opacity="1");const h=document.querySelector(".top-nav");h&&(h.style.transform="translateY(0px)",h.style.opacity="1"),document.querySelectorAll(".card-progress-fill").forEach(d=>{d.style.transform="scaleX(1)"});return}document.querySelectorAll(".hero-mask-line > span").forEach((l,h)=>{l.style.opacity="1",l.animate([{transform:"translateY(110%)",opacity:0},{transform:"translateY(0%)",opacity:1}],{duration:1e3,delay:h*110,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"})});const t=document.querySelector(".portrait-stage");t&&t.animate([{transform:"translate(-50%, 40px) scale(0.98)",filter:"blur(16px)",opacity:0},{transform:"translate(-50%, 0px) scale(1)",filter:"blur(0px)",opacity:1}],{duration:1300,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"});const n=document.querySelector(".top-nav");n&&n.animate([{transform:"translateY(-28px)",opacity:0},{transform:"translateY(0px)",opacity:1}],{duration:800,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});const i=document.querySelector(".nav-links");if(i){let l=function(_,p=1){if(!h||!_){h&&(h.style.opacity="0");return}const f=i.getBoundingClientRect(),v=_.getBoundingClientRect(),T=v.left-f.left,S=v.width;h.style.transform=`translateX(${T}px)`,h.style.width=`${S}px`,h.style.opacity=`${p}`},h=i.querySelector(".nav-sliding-pill");h||(h=document.createElement("div"),h.className="nav-sliding-pill",i.prepend(h));const d=i.querySelectorAll(".nav-link"),m=i.querySelector(".nav-link.active");d.forEach(_=>{_.addEventListener("mouseenter",()=>{d.forEach(p=>p.classList.remove("hovered")),_.classList.add("hovered"),l(_,1)})}),i.addEventListener("mouseleave",()=>{d.forEach(_=>_.classList.remove("hovered")),m?l(m,.15):l(null,0)}),m&&setTimeout(()=>l(m,.15),300)}const r=[],o=document.querySelector(".nav-status"),a=document.querySelector(".counter-badge"),u=document.querySelector(".top-nav .cta-btn");o&&r.push(o),a&&r.push(a),u&&r.push(u),document.querySelectorAll(".home-tags .chip").forEach(l=>r.push(l)),document.querySelectorAll(".home-list .home-card").forEach(l=>r.push(l)),document.querySelectorAll(".home-about-brief .block").forEach(l=>r.push(l)),r.forEach((l,h)=>{l.animate([{transform:"translateY(14px)",opacity:0},{transform:"translateY(0px)",opacity:1}],{duration:750,delay:200+h*55,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"})}),document.querySelectorAll(".card-progress-fill").forEach((l,h)=>{l.animate([{transform:"scaleX(0)"},{transform:"scaleX(1)"}],{duration:1200,delay:400+h*80,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"})}),dd(),hd(),fd()}function dd(){const s=document.querySelectorAll(".counter-badge, .stat-counter, .tag-badge, .pillar-num"),e=new Set;function t(i){if(e.has(i))return;e.add(i);const r=i.textContent||"",o=r.match(/(\d+)(\+|%|\b)/);if(!o)return;const a=o[0],u=parseInt(o[1],10),c=o[2]||"",l=o[1].length===2&&o[1].startsWith("0"),h=r.trim()===a,d=performance.now(),m=1400;function _(p){const f=p-d,v=Math.min(f/m,1),T=1-Math.pow(1-v,3),S=Math.floor(T*u);let y=String(S);l&&S<10&&(y="0"+y),h?i.textContent=`${y}${c}`:i.textContent=r.replace(a,`${y}${c}`),v<1?requestAnimationFrame(_):i.textContent=r}requestAnimationFrame(_)}const n=document.querySelector(".counter-badge");if(n&&t(n),"IntersectionObserver"in window){const i=new IntersectionObserver((r,o)=>{r.forEach(a=>{a.isIntersecting&&(t(a.target),o.unobserve(a.target))})},{threshold:.2});s.forEach(r=>i.observe(r))}else s.forEach(i=>t(i))}function hd(){const s=document.getElementById("portrait-wrapper");if(!s)return;let e=!1;window.addEventListener("scroll",()=>{e||(requestAnimationFrame(()=>{const n=window.scrollY*.12;s.style.setProperty("--scroll-drift",`${n}px`),e=!1}),e=!0)},{passive:!0})}function fd(){const s=document.querySelectorAll(".word-fill-text");s.length!==0&&s.forEach(e=>{const n=(e.textContent||"").trim().split(/\s+/);e.innerHTML="";const i=[];n.forEach(o=>{const a=document.createElement("span");a.className="word-fill-word",a.textContent=o+" ",e.appendChild(a),i.push(a)});function r(){const o=e.getBoundingClientRect(),a=window.innerHeight,u=a*.85,c=a*.35,l=Math.max(0,Math.min(1,(u-o.top)/(u-c))),h=i.length,d=Math.floor(l*h);i.forEach((m,_)=>{_<d-2?(m.style.color="var(--text-pure)",m.style.opacity="1"):_===d-2?(m.style.color="var(--text-pure)",m.style.opacity="0.85"):_===d-1?(m.style.color="var(--accent)",m.style.opacity="0.95"):_===d?(m.style.color="var(--accent)",m.style.opacity="0.70"):(m.style.color="var(--muted)",m.style.opacity="0.35")})}window.addEventListener("scroll",r,{passive:!0}),r()})}function Gr(){const s=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",s);const e=document.getElementById("bg"),t=e?td(e):null;nd(i=>{t&&t.setTheme(i)}),id(),rd(),sd(),ad(),ld(),us(),ud();const n=document.querySelector(".contact-form-box form");if(n){let i=n.querySelector('input[name="_hp_security_check"]');i||(i=document.createElement("input"),i.type="text",i.name="_hp_security_check",i.tabIndex=-1,i.autocomplete="off",i.style.cssText="position:absolute;left:-9999px;opacity:0;pointer-events:none;",n.prepend(i)),n.addEventListener("submit",r=>{if(r.preventDefault(),i&&i.value.trim()!=="")return;const o=od("contact_form",15e3);if(!o.allowed){alert(`Transmission rate limit exceeded. Please wait ${o.remainingSec}s before transmitting.`);return}const a=n.querySelector("#name"),u=n.querySelector("#email"),c=n.querySelector("#message"),l=Or((a==null?void 0:a.value)||""),h=((u==null?void 0:u.value)||"").trim(),d=Or((c==null?void 0:c.value)||"");if(!l||l.length>100){alert("Please enter a valid entity / contact name (maximum 100 characters).");return}if(!h||!cd(h)){alert("Please enter a valid electronic mail address.");return}if(!d||d.length>2e3){alert("Please provide scope details (maximum 2000 characters).");return}const m=n.querySelector('button[type="submit"]');if(m){const _=m.textContent;m.disabled=!0,m.textContent="TRANSMISSION DISPATCHED ->",setTimeout(()=>{m.textContent=_,m.disabled=!1,n.reset()},3e3)}})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Gr):Gr();
