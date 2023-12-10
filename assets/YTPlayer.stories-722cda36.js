import{_ as Y,d as F,i as M,c as N,a as D,u as L,h as _,r as g,b as q,e as G,m as U,j as d,f as z,g as J,k as W,l as b,s as p,n as H,o as v,p as K,B as Q}from"./Button-3086be62.js";import{r as P,R as j}from"./index-76fb7be0.js";import{_ as u}from"./assertThisInitialized-1077688d.js";import"./_commonjsHelpers-de833af9.js";const X=["sx"],Z=e=>{var t,o;const s={systemProps:{},otherProps:{}},r=(t=e==null||(o=e.theme)==null?void 0:o.unstable_sxConfig)!=null?t:F;return Object.keys(e).forEach(n=>{r[n]?s.systemProps[n]=e[n]:s.otherProps[n]=e[n]}),s};function ee(e){const{sx:t}=e,o=Y(e,X),{systemProps:s,otherProps:r}=Z(o);let n;return Array.isArray(t)?n=[s,...t]:typeof t=="function"?n=(...y)=>{const l=t(...y);return M(l)?u({},s,l):s}:n=u({},s,t),u({},r,{sx:n})}const te=N(),se=te,ne=["component","direction","spacing","divider","children","className","useFlexGap"],oe=D(),re=se("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function ae(e){return L({props:e,name:"MuiStack",defaultTheme:oe})}function ie(e,t){const o=P.Children.toArray(e).filter(Boolean);return o.reduce((s,r,n)=>(s.push(r),n<o.length-1&&s.push(P.cloneElement(t,{key:`separator-${n}`})),s),[])}const ce=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],le=({ownerState:e,theme:t})=>{let o=u({display:"flex",flexDirection:"column"},_({theme:t},g({values:e.direction,breakpoints:t.breakpoints.values}),s=>({flexDirection:s})));if(e.spacing){const s=q(t),r=Object.keys(t.breakpoints.values).reduce((a,i)=>((typeof e.spacing=="object"&&e.spacing[i]!=null||typeof e.direction=="object"&&e.direction[i]!=null)&&(a[i]=!0),a),{}),n=g({values:e.direction,base:r}),y=g({values:e.spacing,base:r});typeof n=="object"&&Object.keys(n).forEach((a,i,m)=>{if(!n[a]){const h=i>0?n[m[i-1]]:"column";n[a]=h}}),o=G(o,_({theme:t},y,(a,i)=>e.useFlexGap?{gap:b(s,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ce(i?n[i]:e.direction)}`]:b(s,a)}}))}return o=U(t.breakpoints,o),o};function de(e={}){const{createStyledComponent:t=re,useThemeProps:o=ae,componentName:s="MuiStack"}=e,r=()=>J({root:["root"]},a=>W(s,a),{}),n=t(le);return P.forwardRef(function(a,i){const m=o(a),f=ee(m),{component:h="div",direction:V="column",spacing:A=0,divider:x,children:k,className:B,useFlexGap:E=!1}=f,O=Y(f,ne),$={direction:V,spacing:A,useFlexGap:E},I=r();return d(n,u({as:h,ownerState:$,ref:i,className:z(I.root,B)},O,{children:x?ie(k,x):k}))})}const ue=de({createStyledComponent:p("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>H({props:e,name:"MuiStack"})}),w=ue,T=({id:e="yt-player",onReady:t,...o})=>(j.useEffect(()=>{const s=document.getElementById("yt-api-src");s&&document.body.removeChild(s);const r=document.createElement("script");r.id="yt-api-src",r.src="https://www.youtube.com/iframe_api",document.body.appendChild(r)},[]),window.onYouTubePlayerAPIReady=()=>{const s=new YT.Player(e,{host:"https://www.youtube-nocookie.com",videoId:"pUrg3b5AJmc",events:o});t(s)},d(ye,{id:e})),ye=p("div")(v`
    height: 100%;
    width: 100%;
    border: none;
`);T.__docgenInfo={description:`Customized Youtube video player.
- \`id\` _string_

The id of the player.

**Events**
See the Youtube Player API Reference
https://developers.google.com/youtube/iframe_api_reference?hl=en#Events`,methods:[],displayName:"YTPlayer",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'yt-player'",computed:!1}},onReady:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: YT.Player) => void",signature:{arguments:[{type:{name:"YT.Player"},name:"e"}],return:{name:"void"}}},description:""}}};const ve={title:"Playground/YTPlayer",component:T},c=e=>{const[t,o]=j.useState();return K(pe,{children:[d(me,{children:d(Q,{onClick:()=>t==null?void 0:t.playVideo(),children:"Play"})}),d(T,{id:"yt-demo-player",onReady:n=>o(n)})]})},pe=p(w)(v`
    width: 100vw;
    height: 100vh;
`),me=p(w)(v`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    & .MuiTextField-root {
        width: 50%;
        max-width: 500px;
    }
`);c.argTypes={};c.args={};c.__docgenInfo={description:"",methods:[],displayName:"Safari_YTPlayer",props:{id:{required:!1,tsType:{name:"string"},description:""},onReady:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: YT.Player) => void",signature:{arguments:[{type:{name:"YT.Player"},name:"e"}],return:{name:"void"}}},description:""}}};var S,C,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(args: YTPlayerProps) => {
  const [player, setPlayer] = React.useState<YT.Player>();
  const handleOnReady = (e: YT.Player) => setPlayer(e);
  const handlePlayClick = () => player?.playVideo();
  return <Layout>
            <Actions>
                <Button onClick={handlePlayClick}>Play</Button>
            </Actions>
            <YTPlayer id="yt-demo-player" onReady={handleOnReady} />
        </Layout>;
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const Te=["Safari_YTPlayer"];export{c as Safari_YTPlayer,Te as __namedExportsOrder,ve as default};
