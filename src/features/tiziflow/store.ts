import { useCallback, useEffect, useState } from "react";
import { seedData, type AppData, type Role } from "./data";

const DATA_KEY="tiziflow-ops-v1";
const AUTH_KEY="tiziflow-auth";
const cloneSeed=()=>JSON.parse(JSON.stringify(seedData)) as AppData;
export function useTiziFlowStore(){
 const [data,setDataState]=useState<AppData>(cloneSeed);
 const [authenticated,setAuthenticated]=useState(false);
 const [role,setRoleState]=useState<Role>("Admin");
 const [hydrated,setHydrated]=useState(false);
 useEffect(()=>{try{const saved=sessionStorage.getItem(DATA_KEY);if(saved)setDataState(JSON.parse(saved) as AppData);const auth=localStorage.getItem(AUTH_KEY)??sessionStorage.getItem(AUTH_KEY);if(auth){const parsed=JSON.parse(auth) as {authenticated:boolean;role:Role};setAuthenticated(parsed.authenticated);setRoleState(parsed.role)}}finally{setHydrated(true)}},[]);
 const setData=useCallback((updater:AppData|((prev:AppData)=>AppData))=>setDataState(prev=>{const next=typeof updater==="function"?updater(prev):updater;sessionStorage.setItem(DATA_KEY,JSON.stringify(next));return next}),[]);
 const login=useCallback((remember:boolean)=>{const auth={authenticated:true,role:"Admin" as Role};(remember?localStorage:sessionStorage).setItem(AUTH_KEY,JSON.stringify(auth));setAuthenticated(true)},[]);
 const logout=useCallback(()=>{localStorage.removeItem(AUTH_KEY);sessionStorage.removeItem(AUTH_KEY);setAuthenticated(false)},[]);
 const setRole=useCallback((next:Role)=>{setRoleState(next);sessionStorage.setItem(AUTH_KEY,JSON.stringify({authenticated:true,role:next}))},[]);
 const reset=useCallback(()=>setData(cloneSeed()),[setData]);
 return {data,setData,authenticated,hydrated,role,setRole,login,logout,reset};
}
