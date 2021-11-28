"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[643],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3887:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},u="Coviwad - Documents",s={type:"mdx",permalink:"/documents",source:"@site/src/pages/documents.md"},l=[{value:"Setup database for documents (vaccines and tests)",id:"setup-database-for-documents-vaccines-and-tests",children:[],level:2},{value:"Launch microservice",id:"launch-microservice",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coviwad---documents"},"Coviwad - Documents"),(0,a.kt)("h2",{id:"setup-database-for-documents-vaccines-and-tests"},"Setup database for documents (vaccines and tests)"),(0,a.kt)("p",null,"Run docker-compose configuration:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker compose up")),(0,a.kt)("p",null,"After the services have started, the database should be available thanks to the command : ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec -it covid-postgres-documents psql -U postgres"),"\nThen connect to the database '\\c documents_covid'"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'If there is no table named "documents" : copy/paste the content of ',(0,a.kt)("inlineCode",{parentName:"strong"},"./sql/create-tables.sql"))),(0,a.kt)("h2",{id:"launch-microservice"},"Launch microservice"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"bootRun")," with the given environment variables (in consignes.txt)."),(0,a.kt)("p",null,"Voir ",(0,a.kt)("a",{parentName:"p",href:"/news"},"les news"),"."))}d.isMDXComponent=!0}}]);