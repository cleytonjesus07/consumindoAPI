import{j as d,r as f,R as p,a as g}from"./vendor.81b4fc21.js";const y=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=c(r);fetch(r.href,i)}};y();var v="https://api.b7web.com.br/cinema/";const e=d.exports.jsx,t=d.exports.jsxs,u=d.exports.Fragment;function x(){const[s,l]=f.exports.useState([]),[c,n]=f.exports.useState(!1);return t(u,{children:[e(b,{}),c&&t("div",{className:"loading-screen",children:[e("span",{children:"Loading"}),e("div",{className:"loading-container",children:e("div",{className:"fluid"})})]}),!c&&t(u,{children:[t("h1",{children:["Consumindo API ",e("span",{children:"N"})]}),e("button",{onClick:async()=>{try{if(s.length===0){n(!0),(await(await fetch(v)).json()).forEach(a=>{const m=new Image;m.src=a.avatar,m.onload=()=>{console.log(a),a.titulo.indexOf("Route")===-1&&l(h=>[...h,a])}}),n(!1);return}document.querySelector("button").innerText="Filmes j\xE1 carregados",setTimeout(()=>document.querySelector("button").innerText="Carregar Filmes",1e3)}catch{document.querySelector(".loading-screen > span").innerText="Ops! houve algum erro.",setTimeout(()=>{n(!1),document.querySelector(".loading-screen").style.visibility="hidden"},1e3)}},children:"Carregar Filmes"}),t("p",{children:["Total de filmes: ",s.length]}),e("div",{className:"filmes",children:s.map((i,o)=>t("div",{children:[e("img",{src:i.avatar,alt:i.titulo}),i.titulo]},o))})]})]})}function b(){return e(u,{children:t("ul",{className:"background",children:[e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{})]})})}p.render(t(g.StrictMode,{children:[e(x,{}),t("footer",{children:["Desenvolvido por ",e("a",{href:"https://cleytonjesus07.github.io/LinkToLinktree/",children:"@cleyton_jesus07"})," ",e("a",{href:"https://wweb.dev/resources/animated-css-background-generator/",children:"(Background Generator - credit: Bjorn)"})]})]}),document.getElementById("root"));
