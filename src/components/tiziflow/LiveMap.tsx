import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import { BatteryCharging, Gauge, MapPin, Navigation } from "lucide-react";
import type { AppData } from "@/features/tiziflow/data";

const motoIcon=L.divIcon({className:"moto-map-marker",html:'<span>⚡</span>',iconSize:[34,34],iconAnchor:[17,17]});
export default function LiveMap({data}:{data:AppData}){
 const active=data.motorcycles.filter(m=>m.status==="En excursion");
 const [tick,setTick]=useState(0); const [selected,setSelected]=useState(active[0]?.id??"");
 useEffect(()=>{const timer=window.setInterval(()=>setTick(t=>t+1),2200);return()=>window.clearInterval(timer)},[]);
 const positions=useMemo(()=>Object.fromEntries(active.map((m,i)=>[m.id,[m.position[0]+Math.sin((tick+i)*.32)*.004,m.position[1]+Math.cos((tick+i)*.27)*.004] as [number,number]])),[active,tick]);
 const chosen=active.find(m=>m.id===selected)??active[0];
 return <div className="map-workspace">
   <MapContainer center={[32.68,-4.74]} zoom={11} scrollWheelZoom className="h-full w-full" zoomControl={false}>
    <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {data.circuits.slice(0,4).map((c,i)=><Polyline key={c.id} positions={c.stops.map(s=>[s.lat,s.lng])} pathOptions={{color:["#1a9481","#b75a24","#34c0a9","#d18255"][i],weight:4,dashArray:i%2?"8 8":undefined}} />)}
    {data.circuits.slice(0,4).flatMap(c=>c.stops).map(s=><CircleMarker key={s.id} center={[s.lat,s.lng]} radius={5} pathOptions={{color:"#0d3039",fillColor:"#f8f0e6",fillOpacity:1}}><Popup><b>{s.name}</b><br/>{s.type}</Popup></CircleMarker>)}
    {active.map(m=><Marker key={m.id} position={positions[m.id]??m.position} icon={motoIcon} eventHandlers={{click:()=>setSelected(m.id)}}><Popup>{m.id} · {m.model}<br/>Batterie {m.battery}%</Popup></Marker>)}
   </MapContainer>
   {chosen&&<aside className="map-vehicle-panel animate-enter">
    <div className="flex items-start justify-between"><div><span className="eyebrow">EXCURSION ACTIVE</span><h3>{chosen.id} · {chosen.model}</h3></div><span className="live-dot">LIVE</span></div>
    <p className="mt-1 text-sm text-muted-foreground">{chosen.circuit}</p>
    <div className="map-metrics"><div><BatteryCharging/><b>{chosen.battery}%</b><span>Batterie</span></div><div><Gauge/><b>{28+(tick%8)} km/h</b><span>Vitesse</span></div><div><Navigation/><b>{chosen.autonomy} km</b><span>Autonomie</span></div></div>
    <div className="progress-track"><span style={{width:`${Math.min(88,45+tick%35)}%`}}/></div>
    <div className="flex justify-between text-xs"><span>Stop 2 · Plateau</span><span>ETA 13:06</span></div>
    <div className="map-details"><p><MapPin/> Prochaine étape <b>Village d’Aït Ayach</b></p><p>Client <b>{data.customers[2]?.firstName} {data.customers[2]?.lastName}</b></p><p>Guide <b>Youssef Aït Ali</b></p><p>Dernière mise à jour <b>{2+(tick%12)} sec</b></p></div>
   </aside>}
   <div className="map-status-strip">{active.map(m=><button key={m.id} onClick={()=>setSelected(m.id)} className={selected===m.id?"active":""}><span>{m.id}</span><b>{m.battery}%</b><small>{m.circuit?.replace(" en Montagne","")}</small></button>)}</div>
 </div>
}
