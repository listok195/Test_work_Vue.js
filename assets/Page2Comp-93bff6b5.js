import{_ as t,d as s}from"./index-4739f447.js";const n=s({name:"Page2",data(){return{difflist:[]}},methods:{},mounted(){this.$bus.on("diffChange",e=>{this.difflist.push(e),this.difflist.length>3e3&&this.difflist.shift()})}});function f(e,i,d,o,_,a){return null}const r=t(n,[["render",f],["__scopeId","data-v-5e5d74f5"]]);export{r as default};
