(self.webpackChunkART_in_Augmented_Reality=self.webpackChunkART_in_Augmented_Reality||[]).push([[7089],{7089:(e,t,s)=>{"use strict";s.r(t),s.d(t,{startFocusVisible:()=>a});const n="ion-focused",o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],a=()=>{let e=[],t=!0;const s=document,a=t=>{e.forEach(e=>e.classList.remove(n)),t.forEach(e=>e.classList.add(n)),e=t},c=()=>{t=!1,a([])};s.addEventListener("keydown",e=>{t=o.includes(e.key),t||a([])}),s.addEventListener("focusin",e=>{if(t&&e.composedPath){const t=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));a(t)}}),s.addEventListener("focusout",()=>{s.activeElement===s.body&&a([])}),s.addEventListener("touchstart",c),s.addEventListener("mousedown",c)}}}]);