"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("@popperjs/core");const o=({strokeWidth:t=2.5,strokeLinecap:r="round",strokeLinejoin:o="round",...n})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:r,strokeLinejoin:o,...n,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),n=({strokeWidth:t=2.5,strokeLinecap:r="round",strokeLinejoin:o="round",...n})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:r,strokeLinejoin:o,...n,children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),s=({strokeWidth:t=2.5,strokeLinecap:r="round",strokeLinejoin:o="round",...n})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:r,strokeLinejoin:o,...n,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),i=({strokeWidth:t=2.5,strokeLinecap:r="round",strokeLinejoin:o="round",...n})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:r,strokeLinejoin:o,...n,children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),a=({onClose:e,onConfirm:t,setIsLoading:r,setError:o,asyncOptions:n})=>({handleClose:()=>{o(null),e()},handleConfirm:async()=>{try{r(!0),await t(),n?.successText&&o(n.successText)}catch(e){o(n?.errorText?n.errorText:"An error occurred"),console.error(e)}finally{r(!1)}}});function l(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=l(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}const d={tailwind:{container:"z-50 bg-white rounded-lg shadow-xl p-4 border border-gray-200 transition-all duration-200",arrow:"absolute bg-white w-2 h-2 rotate-45 border border-gray-200 -z-[1]",closeButton:"absolute right-2 top-2 text-gray-400 hover:text-gray-500",closeIcon:"w-4 h-4",header:"flex items-center gap-2 mb-3",icon:"w-5 h-5",title:"text-base font-semibold text-gray-900",message:"text-sm text-gray-600 mb-4",form:"space-y-3 mb-4",formField:"flex flex-col gap-1",label:"text-sm font-medium text-gray-700",input:"px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",footer:"flex justify-end gap-2",cancelButton:"px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md",confirmButton:{danger:"px-3 py-1.5 text-xs font-medium text-white rounded-md bg-red-600 hover:bg-red-700",warning:"px-3 py-1.5 text-xs font-medium text-white rounded-md bg-yellow-600 hover:bg-yellow-700",info:"px-3 py-1.5 text-xs font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700"},sizeSM:"w-[320px]",sizeMD:"w-[400px]",sizeLG:"w-[512px]",darkMode:{container:"bg-gray-800 border-gray-700",title:"text-gray-100",message:"text-gray-300",label:"text-gray-300",input:"bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500 focus:border-blue-500",cancelButton:"text-gray-300 bg-gray-700 hover:bg-gray-600",confirmButton:{danger:"bg-red-500 hover:bg-red-600",warning:"bg-yellow-500 hover:bg-yellow-600",info:"bg-blue-500 hover:bg-blue-600"}}},bootstrap:{container:"popover bs-popover-auto bg-white rounded shadow-lg p-3 border transition",arrow:"popover-arrow position-absolute",closeButton:"btn-close position-absolute top-0 end-0 p-2",closeIcon:"d-none",header:"d-flex align-items-center gap-2 mb-2",icon:"",title:"h6 mb-0",message:"small text-body-secondary mb-3",form:"mb-3",formField:"mb-2",label:"form-label small",input:"form-control form-control-sm",footer:"d-flex justify-content-end gap-2",cancelButton:"btn btn-sm btn-light",confirmButton:{danger:"btn btn-sm btn-danger",warning:"btn btn-sm btn-warning",info:"btn btn-sm btn-primary"},sizeSM:"w-320px",sizeMD:"w-400px",sizeLG:"w-512px",darkMode:{container:"bg-dark text-light border-secondary",title:"text-light",message:"text-light-50",label:"text-light",input:"bg-dark text-light border-secondary",cancelButton:"btn-dark",confirmButton:{danger:"btn-outline-danger",warning:"btn-outline-warning",info:"btn-outline-primary"}}},none:{container:"",arrow:"",closeButton:"",closeIcon:"",header:"",icon:"",title:"",message:"",form:"",formField:"",label:"",input:"",footer:"",cancelButton:"",confirmButton:{danger:"",warning:"",info:""},sizeSM:"",sizeMD:"",sizeLG:"",darkMode:{container:"",title:"",message:"",label:"",input:"",cancelButton:"",confirmButton:{danger:"",warning:"",info:""}}}};function c({isOpen:c,onClose:u,onConfirm:g,triggerRef:m,title:x="Confirm Action",message:f="Are you sure you want to proceed?",confirmText:p="Confirm",cancelText:b="Cancel",type:h="warning",size:y="md",position:w="top",framework:k="tailwind",styles:j={},className:v="",darkMode:C=!1,customIcon:B,zIndex:L=50,formFields:M=[],asyncOptions:z,stackOrder:N=0}){const[S,D]=t.useState(!1),[I,R]=t.useState(null),{dialogRef:O,arrowRef:T,getPositionClasses:W}=(({isOpen:e,triggerRef:o,position:n})=>{const s=t.useRef(null),i=t.useRef(null),a=t.useRef(null);return t.useEffect((()=>{if(e&&o?.current&&s.current)return a.current&&a.current.destroy(),a.current=r.createPopper(o.current,s.current,{placement:"top"===n?"top":"bottom"===n?"bottom":"auto",modifiers:[{name:"arrow",options:{element:i.current,padding:8}},{name:"offset",options:{offset:[0,8]}},{name:"preventOverflow",options:{padding:8,boundariesElement:"viewport"}},{name:"flip",options:{fallbackPlacements:["top","bottom","left","right"]}}]}),()=>{a.current&&(a.current.destroy(),a.current=null)}}),[e,n,o]),{dialogRef:s,arrowRef:i,getPositionClasses:()=>{if(!o)switch(n){case"top":return"fixed top-4 left-1/2 transform -translate-x-1/2";case"bottom":return"fixed bottom-4 left-1/2 transform -translate-x-1/2";default:return"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}return""}}})({isOpen:c,triggerRef:m,position:w}),{handleClose:$,handleConfirm:P}=a({onClose:u,onConfirm:g,setIsLoading:D,setError:R,asyncOptions:z}),{mergedStyles:q,getDarkModeStyles:F,getSizeClass:A,getConfirmButtonStyles:E,Icon:G}=(({framework:e,styles:t={},size:r="md",darkMode:i=!1,type:a="warning",customIcon:l})=>{const c={...d[e],...t};return{mergedStyles:c,getDarkModeStyles:e=>i&&c.darkMode&&("string"==typeof c.darkMode[e]?c.darkMode[e]:"")||"",getSizeClass:()=>{switch(r){case"sm":return c.sizeSM||"";case"md":return c.sizeMD||"";case"lg":return c.sizeLG||"";default:return""}},getConfirmButtonStyles:e=>{const t=c.confirmButton[e];return i&&c.darkMode?.confirmButton?`${t} ${c.darkMode.confirmButton[e]||""}`:t},Icon:(()=>{if(l)return l;switch(a){case"danger":return o;case"warning":return n;default:return s}})()}})({framework:k,styles:j,size:y,darkMode:C,type:h,customIcon:B});if(!c)return null;const Q=function(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o}(W(),q.container,F("container"),A(),v);return console.log(Q),e.jsxs("div",{ref:O,className:Q,role:"dialog","aria-modal":"true","aria-labelledby":"dialog-title",children:[m&&e.jsx("div",{ref:T,className:q.arrow,"data-popper-arrow":!0}),e.jsx("button",{onClick:$,className:q.closeButton,"aria-label":"Close dialog",children:e.jsx(i,{className:q.closeIcon})}),e.jsxs("div",{className:q.header,children:[e.jsx(G,{className:q.icon}),e.jsx("h3",{id:"dialog-title",className:`\n            ${q.title}\n            ${F("title")}\n          `,children:x})]}),e.jsx("p",{className:`\n          ${q.message}\n          ${F("message")}\n        `,children:I||f}),M.length>0&&e.jsx("div",{className:q.form,children:M.map((t=>e.jsxs("div",{className:q.formField,children:[e.jsxs("label",{htmlFor:t.name,className:q.label,children:[t.label,t.required&&e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{id:t.name,type:t.type||"text",placeholder:t.placeholder,required:t.required,className:q.input})]},t.name)))}),e.jsxs("div",{className:q.footer,children:[e.jsx("button",{onClick:$,className:`\n            ${q.cancelButton}\n            ${F("cancelButton")}\n          `,disabled:S,children:b}),e.jsx("button",{onClick:P,className:E(h),disabled:S,children:S&&z?.loadingText?z.loadingText:p})]})]})}const u=t.createContext(void 0);exports.Confirmy=c,exports.DialogContext=u,exports.DialogProvider=function({children:r}){const[o,n]=t.useState([]);return e.jsxs(u.Provider,{value:{dialogQueue:o,addDialog:e=>{const t={id:Math.random().toString(36).substr(2,9),props:e};n((e=>[...e,t]))},removeDialog:e=>{n((t=>t.filter((t=>t.id!==e))))},updateDialog:(e,t)=>{n((r=>r.map((r=>r.id===e?{...r,props:{...r.props,...t}}:r))))}},children:[r,o.map((t=>e.jsx(c,{...t.props},t.id)))]})},exports.defaultStyles=d,exports.useConfirmy=a,exports.useDialog=function(){const e=t.useContext(u);if(!e)throw new Error("useDialog must be used within a DialogProvider");return e};
//# sourceMappingURL=index.cjs.map
