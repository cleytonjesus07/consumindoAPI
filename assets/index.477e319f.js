import{j as c,r as u,R as m,a as f}from"./vendor.81b4fc21.js";const h=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}};h();var p="https://api.b7web.com.br/cinema/";const e=c.exports.jsx,l=c.exports.jsxs,g=c.exports.Fragment;function v(){const[s,o]=u.exports.useState([]);return l(g,{children:[l("div",{className:"loading-screen",children:[e("span",{children:"Loading"}),e("div",{className:"loading-container",children:e("div",{className:"fluid"})})]}),l("ul",{className:"background",children:[e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{})]}),l("h1",{children:["Consumindo API ",e("span",{children:"N"})]}),e("button",{onClick:()=>{if(s.length===0){const t=document.querySelector(".loading-screen");t.style.visibility="visible",fetch(p).then(i=>i.json()).then(i=>{i.forEach(r=>{const n=new Image;n.src=r.avatar,n.onload=()=>{console.log(r),o(d=>[...d,r]),t.style.visibility="hidden"}})})}document.querySelector("button").innerText="Filmes j\xE1 carregados",setTimeout(()=>document.querySelector("button").innerText="Carregar Filmes",1e3)},children:"Carregar Filmes"}),l("p",{children:["Total de filmes: ",s.length]}),e("div",{className:"filmes",children:s.map((t,i)=>l("div",{children:[e("img",{src:t.avatar,alt:t.titulo}),t.titulo]},i))})]})}m.render(l(f.StrictMode,{children:[e(v,{}),l("footer",{children:["Desenvolvido por ",e("a",{href:"https://cleytonjesus07.github.io/LinkToLinktree/",children:"@cleyton_jesus07"})," ",e("a",{href:"https://wweb.dev/resources/animated-css-background-generator/",children:"(Background Generator - credit: Bjorn)"})]})]}),document.getElementById("root"));
