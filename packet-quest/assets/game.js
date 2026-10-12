export const canonicalId=id=>id==='U6-S7'?'U6-S4':id;
export const dayKey=(date=new Date())=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
export const initialProgress=()=>({version:1,earned:[],cleared:[],written:[],mistakes:[],hearts:5,practice:false,recovery:0,combo:0,bestCombo:0,attempts:0,correct:0,dates:[],drafts:{},checks:{},settings:{sound:false,theme:'light'},sprint:{running:false,remaining:14400000,startedAt:null}});
export function normalizeProgress(input,challengeIds=[],questionIds=[]){
 const base=initialProgress();if(!input||typeof input!=='object'||Array.isArray(input))return base;
 const strings=(value,allowed)=>Array.isArray(value)?[...new Set(value.filter(v=>typeof v==='string'&&allowed.includes(v)))]:[];
 for(const key of ['earned','mistakes'])base[key]=strings(input[key],challengeIds);
 for(const key of ['cleared','written'])base[key]=strings(input[key],questionIds.map(canonicalId));
 for(const key of ['hearts','recovery','combo','bestCombo','attempts','correct']){const v=input[key];if(Number.isSafeInteger(v)&&v>=0)base[key]=Math.min(v,key==='hearts'?5:key==='recovery'?2:1000000)}
 base.correct=Math.min(base.correct,base.attempts);base.practice=Boolean(input.practice)||base.hearts===0;
 base.dates=Array.isArray(input.dates)?[...new Set(input.dates.filter(v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v))].slice(-370):[];
 if(input.drafts&&typeof input.drafts==='object')for(const [id,value] of Object.entries(input.drafts))if(questionIds.includes(id)&&typeof value==='string')base.drafts[id]=value.slice(0,24000);
 if(input.checks&&typeof input.checks==='object')for(const [id,value] of Object.entries(input.checks))if(questionIds.includes(id)&&Array.isArray(value))base.checks[id]=value.filter(v=>Number.isInteger(v)&&v>=0&&v<20);
 if(input.settings){base.settings.sound=input.settings.sound===true;base.settings.theme=input.settings.theme==='dark'?'dark':'light'}
 if(input.sprint&&Number.isFinite(input.sprint.remaining)){base.sprint.remaining=Math.max(0,Math.min(14400000,input.sprint.remaining));base.sprint.running=input.sprint.running===true;base.sprint.startedAt=Number.isFinite(input.sprint.startedAt)?input.sprint.startedAt:null;if(base.sprint.running&&base.sprint.startedAt===null)base.sprint.running=false}
 return base;
}
export function recordAnswer(progress,id,correct,today=dayKey()){
 const p=structuredClone(progress);let gained=0,recovered=false;p.attempts++;
 if(correct){p.correct++;p.combo++;p.bestCombo=Math.max(p.combo,p.bestCombo);if(!p.earned.includes(id)){p.earned.push(id);gained=10}p.mistakes=p.mistakes.filter(x=>x!==id);if(!p.dates.includes(today))p.dates.push(today);
  if(p.practice&&p.hearts<5){p.recovery++;if(p.recovery>=3){p.hearts++;p.recovery=0;recovered=true}}
 }else{p.combo=0;p.recovery=0;if(!p.mistakes.includes(id))p.mistakes.push(id);if(!p.practice)p.hearts=Math.max(0,p.hearts-1);if(p.hearts===0)p.practice=true}
 return {progress:p,gained,recovered};
}
export function clearMission(progress,id,challengeIds){const p=structuredClone(progress),key=canonicalId(id);if(challengeIds.every(x=>p.earned.includes(x))&&!p.cleared.includes(key))p.cleared.push(key);return p}
export function currentStreak(dates,today=dayKey()){
 const set=new Set(dates);let cursor=new Date(today+'T12:00:00Z');if(!set.has(today))cursor.setUTCDate(cursor.getUTCDate()-1);let count=0;while(set.has(cursor.toISOString().slice(0,10))){count++;cursor.setUTCDate(cursor.getUTCDate()-1)}return count;
}
export function stats(progress){return {xp:progress.earned.length*10,cleared:progress.cleared.length,written:progress.written.length,accuracy:progress.attempts?Math.round(progress.correct/progress.attempts*100):null,streak:currentStreak(progress.dates)}}
export const normalNumber=value=>String(value??'').trim().replace(/^\//,'');
export function validateChallenge(challenge,response){
 if(challenge.type==='choice')return response===challenge.answer;
 if(challenge.type==='number')return challenge.fields.every((f,i)=>{const val=normalNumber(response?.[i]);return f.answers.some(a=>{const expected=normalNumber(a);return /^\d+(?:\.\d+)?$/.test(expected)?/^\d+(?:\.\d+)?$/.test(val)&&Number(val)===Number(expected):val.toLowerCase()===expected.toLowerCase()})});
 if(challenge.type==='order')return Array.isArray(response)&&response.length===challenge.items.length&&response.every((v,i)=>v===challenge.answer[i]);
 if(challenge.type==='match')return challenge.pairs.every(([left,right])=>response?.[left]===right);
 return false;
}
