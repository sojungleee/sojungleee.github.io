import{u as c,s as u,a as r,f as m,g as d,r as o,o as _,c as f,b as e,t as g}from"./index-27791e3e.js";const p="/images/maru_result.jpg",x={class:"grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"},b={class:"text-center"},h=e("h1",{class:"mt-4 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"}," 퀴즈 결과 ",-1),v=e("div",{class:"flex justify-center"},[e("img",{class:"h-52 w-auto rounded-full",src:p,alt:"maru_result"})],-1),k={class:"mt-6 text-base leading-7 text-gray-600"},S={__name:"Result",setup(y){const a=c(),{getCount:n,getAnswerCount:s}=u(a),i=r(),t=m("");d(()=>{switch(n.value===0&&o.push({name:"main"}),s.value){case 0:t.value="하나도 맞히지 못했어요. 마루에게 관심을 더 가져 주세요!";break;case 1:case 2:t.value=s.value+"개를 맞혔어요. 마루가 고맙대요!";break;case 3:t.value="모두 맞혔어요! 마루를 아주 잘 아시는군요!";break}i.setResult(!0)});const l=()=>{o.push({name:"main"})};return(w,C)=>(_(),f("main",x,[e("div",b,[h,v,e("p",k,g(t.value),1),e("div",{class:"mt-10 flex items-center justify-center gap-x-6"},[e("button",{class:"animate-bounce rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:l}," 처음으로 ")])])]))}};export{S as default};
