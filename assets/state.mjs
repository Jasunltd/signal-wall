export const EFFECTS=['off','low','medium','high'];
export function createState(selectedChannelId){return Object.freeze({powered:true,selectedChannelId,focusId:selectedChannelId,pendingChannelId:null,tuneToken:0,phase:'live',muted:true,effects:'medium',route:{kind:'available',id:selectedChannelId}})}
export function requestTune(state,id,reduced){if(!state.powered||id===state.selectedChannelId)return state;const token=state.tuneToken+1;if(reduced)return Object.freeze({...state,selectedChannelId:id,focusId:id,tuneToken:token,phase:'live',route:{kind:'available',id}});return Object.freeze({...state,pendingChannelId:id,tuneToken:token,phase:'static'})}
export function settleTune(state,token){if(!state.powered||token!==state.tuneToken||!state.pendingChannelId)return state;const id=state.pendingChannelId;return Object.freeze({...state,selectedChannelId:id,focusId:id,pendingChannelId:null,phase:'live',route:{kind:'available',id}})}
export function togglePower(state){const powered=!state.powered;return Object.freeze({...state,powered,pendingChannelId:null,phase:powered?'live':'off'})}
export function toggleMute(state){return Object.freeze({...state,muted:!state.muted})}
export function stepChannel(ids,id,step){const i=ids.indexOf(id);return ids[(i+step+ids.length)%ids.length]}
export function moveFocus(state,ids,step){return Object.freeze({...state,focusId:stepChannel(ids,state.focusId,step)})}
export function setEffects(state,effects){return EFFECTS.includes(effects)?Object.freeze({...state,effects}):state}
export function unavailable(state,fragment){return Object.freeze({...state,route:{kind:'unavailable',fragment}})}
