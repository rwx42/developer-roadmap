import{j as e}from"./jsx-runtime.6940b965.js";import{r as n}from"./index.070054a4.js";import{c as p}from"./classname.585fc13a.js";import{i as g}from"./jwt.ab9b7b25.js";const i=[{title:"Roadmap Editor",description:'<span class="font-semibold">Powerful editor</span> to create custom roadmaps and other trackable documents',image:"/images/team-promo/roadmap-editor.png"},{title:"Invite Members",description:'Invite your <span class="font-semibold">team members and assign roles</span>',image:"/images/team-promo/invite-members.png"},{title:"Track Progress",description:'You and your team can <span class="font-semibold">track progress</span> on the roadmaps',image:"/images/team-promo/update-progress.png"},{title:"Team Dashboard",description:'Keep an eye on the team progress through <span class="font-semibold">team dashboards</span>',image:"/images/team-promo/team-dashboard.png"},{title:"Roadmaps and Documents",description:'Create as many <span class="font-semibold">roadmaps or trackable documents</span> as you want',image:"/images/team-promo/many-roadmaps.png"},{title:"Community Roadmaps",description:'Create custom roadmaps or customize <span class="font-semibold">community roadmaps</span> to fit your needs',image:"/images/team-promo/our-roadmaps.png"},{title:"Sharing Settings",description:'Share a roadmap or trackable document with <span class="font-semibold">everyone or specific people</span>',image:"/images/team-promo/sharing-settings.png"},{title:"More Coming Soon!",description:'<span class="font-semibold">We have a lot more coming soon!</span>'}];function f(){const[o,m]=n.useState([0]),[a,l]=n.useState(i[0]),t=g();return e.jsx("div",{className:"hidden border-t py-12 sm:block",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"mb-2 text-3xl font-bold",children:"See how it works"}),e.jsx("p",{children:"Here is a sneak peek of what you can do today (more coming soon!)"}),e.jsx("div",{className:"relative mt-7 flex flex-row items-center gap-2.5",children:i.map((s,r)=>{const d=s===a,c=o.includes(r);return d?e.jsx("span",{className:" rounded-full bg-black px-3 py-0.5 text-sm text-white",children:a.title},s.title):e.jsxs("span",{className:"relative flex items-center",children:[e.jsx("span",{onClick:()=>{m([...o,r]),l(s)},className:p("z-50 cursor-pointer rounded-full p-[6px]",{"bg-black":s===a,"bg-gray-300 hover:bg-gray-400":s!==a})}),!c&&e.jsx("span",{className:"pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"})]},s.title)})}),e.jsxs("div",{className:"mt-4 overflow-hidden rounded-xl border border-gray-300",children:[e.jsx("div",{className:"p-3",children:e.jsx("p",{className:"text-base text-black",dangerouslySetInnerHTML:{__html:a.description}})}),a.image&&e.jsx("img",{className:"rounded-b-xl border-t",src:a.image,alt:""}),!a.image&&e.jsxs("div",{className:"bg-gray-50 py-4 pl-3",children:[e.jsx("p",{className:"mb-3",children:"Register your team now and help us shape the future of teams in roadmap.sh!"}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx("a",{onClick:()=>{t||localStorage.setItem("authRedirect","/team/new")},href:t?"/team/new":"/signup",className:"inline-flex items-center justify-center rounded-lg border border-transparent bg-purple-600 px-5 py-2 text-base font-medium text-white hover:bg-purple-700",children:"Create your Team"}),!t&&e.jsxs("span",{className:"ml-1 text-base",children:["or  ",e.jsx("a",{onClick:()=>{localStorage.setItem("authRedirect","/team/new")},href:"/login",className:"text-purple-600 underline  hover:text-purple-700",children:"Login to your account"})]})]})]})]})]})})}export{f as TeamDemo};
