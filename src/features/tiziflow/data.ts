import circuitDecouverte from "@/assets/circuit-decouverte.png";
import circuitPanorama from "@/assets/circuit-panorama.png";
import circuitVallee from "@/assets/circuit-vallee.png";
import circuitSunset from "@/assets/circuit-sunset.png";
import circuitTraversee from "@/assets/circuit-traversee.png";

export type StatusTone = "success" | "warning" | "danger" | "info" | "neutral";
export type Role = "Admin" | "Responsable" | "Guide" | "Fleet Manager";
export type Section =
  | "dashboard" | "reservations" | "planning" | "confirm" | "preparation" | "active" | "completed" | "cancelled"
  | "motos" | "circuits" | "services" | "maintenance" | "map" | "clients" | "complaints" | "team" | "users"
  | "payments" | "refunds" | "promotions" | "reports" | "activity";

export interface Circuit { id: string; name: string; duration: string; distance: number; difficulty: string; capacity: number; price: number; image: string; description: string; stops: Stop[] }
export interface Stop { id: string; name: string; type: string; lat: number; lng: number; duration: number; description: string }
export interface Customer { id: string; firstName: string; lastName: string; country: string; email: string; phone: string; language: string; reservations: number; spent: number; lastReservation: string; status: string; notes: string }
export interface Motorcycle { id: string; brand: string; model: string; category: string; battery: number; autonomy: number; mileage: number; status: string; position: [number, number]; acquisition: string; lastMaintenance: string; nextMaintenance: string; reservation?: string; circuit?: string }
export interface Guide { id: string; name: string; role: string; phone: string; email: string; languages: string[]; status: string; excursions: number }
export interface Reservation { id: string; customerId: string; circuitId: string; activity: string; date: string; time: string; participants: number; motorcycleIds: string[]; guideId: string; total: number; paid: number; paymentStatus: string; status: string }
export interface Payment { id: string; reservationId: string; customerId: string; channel: "En ligne" | "Carte à l’agence" | "Espèces à l’agence"; amount: number; date: string; reference: string; agent: string; status: string }
export interface Complaint { id: string; customerId: string; reservationId: string; category: string; priority: string; status: string; agent: string; date: string; description: string; resolution: string }
export interface Maintenance { id: string; motorcycleId: string; type: string; date: string; mileage: number; technician: string; cost: number; nextDate: string; status: string; description: string }
export interface Service { id: string; name: string; price: number; duration: string; capacity: number; availability: string; status: string; type: string }
export interface Promotion { id: string; code: string; type: string; value: number; start: string; end: string; limit: number; used: number; minimum: number; status: string }
export interface Incident { id: string; type: string; date: string; motorcycleId: string; reservationId: string; location: string; severity: string; status: string; description: string; cost: number }
export interface Activity { id: string; user: string; action: string; entity: string; date: string; previous: string; next: string }
export interface AppData { customers: Customer[]; motorcycles: Motorcycle[]; guides: Guide[]; circuits: Circuit[]; reservations: Reservation[]; payments: Payment[]; complaints: Complaint[]; maintenance: Maintenance[]; services: Service[]; promotions: Promotion[]; incidents: Incident[]; activity: Activity[] }

const circuitImages = [circuitDecouverte, circuitPanorama, circuitVallee, circuitSunset, circuitTraversee];
const circuitNames = ["Boucle Découverte de Midelt", "Panorama des Crêtes", "Vallée et Villages", "Coucher de Soleil en Montagne", "Grande Traversée", "Aventure Électrique de Midelt", "Oasis & Montagnes", "Nature & Panoramas"];
const circuitMeta = [[3,42,"Facile",8,680],[4,58,"Modérée",7,890],[5,64,"Modérée",8,960],[3,38,"Facile",6,740],[7,96,"Sportive",6,1380],[4,52,"Modérée",8,820],[6,76,"Sportive",7,1120],[5,69,"Modérée",8,990]] as const;
export const circuits: Circuit[] = circuitNames.map((name, i) => {
  const meta = circuitMeta[i] ?? circuitMeta[0];
  const lat = 32.68 + i * .018;
  const lng = -4.75 + (i % 3) * .028;
  return { id:`CIR-${String(i+1).padStart(3,"0")}`, name, duration:`${meta[0]} h`, distance:meta[1], difficulty:meta[2], capacity:meta[3], price:meta[4], image:circuitImages[i%circuitImages.length] ?? circuitImages[0], description:"Parcours de démonstration inspiré des pistes, vallées et panoramas autour de Midelt. Itinéraire non vérifié à des fins touristiques.", stops:[
    {id:`ST-${i}-1`,name:"Base TiziFlow",type:"Départ",lat,lng,duration:15,description:"Briefing et contrôle des équipements"},
    {id:`ST-${i}-2`,name:i%2?"Belvédère de l’Atlas":"Village de montagne",type:i%2?"Panorama":"Village",lat:lat+.045,lng:lng+.032,duration:25,description:"Pause et découverte du paysage"},
    {id:`ST-${i}-3`,name:i%3?"Plateau des nomades":"Oasis de Tatiouine",type:i%3?"Nature":"Oasis",lat:lat+.068,lng:lng-.012,duration:30,description:"Étape nature et rafraîchissements"},
    {id:`ST-${i}-4`,name:"Retour TiziFlow",type:"Arrivée",lat:lat+.006,lng:lng+.004,duration:10,description:"Retour et débriefing"},
  ]};
});

const people = [
 ["Salma","Bennani","Maroc","fr"],["Thomas","Leroux","France","fr"],["Lucía","Navarro","Espagne","es"],["Felix","Weber","Allemagne","de"],["Amelia","Clarke","Royaume-Uni","en"],["Nora","Peeters","Belgique","fr"],["Daan","Visser","Pays-Bas","nl"],["Maya","Johnson","États-Unis","en"],["Émile","Tremblay","Canada","fr"],["Yasmine","El Amrani","Maroc","ar"],["Hugo","Moreau","France","fr"],["Sofía","Martínez","Espagne","es"],["Lena","Fischer","Allemagne","de"],["Oliver","Wilson","Royaume-Uni","en"],["Amine","Aït Lahcen","Maroc","ar"],["Camille","Dubois","France","fr"],["Inès","Lamrani","Maroc","fr"],["Noah","De Smet","Belgique","nl"],["Sophie","Jansen","Pays-Bas","en"],["Ethan","Miller","États-Unis","en"],["Chloé","Gagnon","Canada","fr"],["Rachid","Ouazzani","Maroc","ar"],["Javier","Ortega","Espagne","es"],["Anna","Keller","Allemagne","de"],["William","Brown","Royaume-Uni","en"],["Nadia","Tazi","Maroc","fr"],["Louis","Bernard","France","fr"],["Emma","Van Dijk","Pays-Bas","nl"]
];
export const customers: Customer[] = people.map((p,i)=>({id:`CLI-${String(i+1).padStart(4,"0")}`,firstName:p[0]??"",lastName:p[1]??"",country:p[2]??"",email:`${(p[0]??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}.${(p[1]??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s/g,"").toLowerCase()}@example.com`,phone:i%4===0?`+212 6${String(12000000+i*731).slice(0,8)}`:`+33 6 ${String(12000000+i*983).slice(0,8)}`,language:p[3]??"fr",reservations:1+i%6,spent:680+(i%8)*740,lastReservation:`2026-10-${String(1+(i%25)).padStart(2,"0")}`,status:i%9===0?"VIP":"Actif",notes:i%5===0?"Préfère les départs matinaux":""}));

const motoModels = [["Zero","FXE"],["Stark","VARG EX"],["Electric Motion","Escape XR"],["Zero","DSR/X"]];
export const motorcycles: Motorcycle[] = Array.from({length:14},(_,i)=>({id:`M-${String(i+1).padStart(3,"0")}`,brand:motoModels[i%4]?.[0]??"Zero",model:`${motoModels[i%4]?.[1]??"FXE"} ${i+1}`,category:i%3===0?"Discovery":"E-Trail",battery:[96,74,100,42,88,61,100,53,88,91,35,100,68,82][i]??90,autonomy:[118,82,130,46,104,71,128,64,101,110,38,125,77,95][i]??90,mileage:1680+i*847,status:["Disponible","En excursion","Réservée","Maintenance","Disponible","En excursion","En préparation","Disponible","En excursion","Disponible","Hors service","Disponible","Réservée","Disponible"][i]??"Disponible",position:[32.68+(i%5)*.022,-4.74+(i%4)*.027],acquisition:`202${3+i%3}-0${1+i%8}-12`,lastMaintenance:`2026-0${7+i%3}-18`,nextMaintenance:`2026-${String(10+i%3).padStart(2,"0")}-${String(8+i%18).padStart(2,"0")}`,...([1,5,8].includes(i)?{reservation:`RES-2026-${String(124+i).padStart(5,"0")}`,circuit:circuits[i%8]?.name}: {})}));

const guideNames=["Youssef Aït Ali","Ahmed El Mansouri","Khadija Berrada","Mehdi Amrani","Sara Benchekroun","Omar Ziani","Imane Tazi","Hamza Alaoui"];
export const guides: Guide[]=guideNames.map((name,i)=>({id:`GUI-${String(i+1).padStart(3,"0")}`,name,role:i<6?"Guide terrain":"Guide coordinatrice",phone:`+212 6${String(41000000+i*9203).slice(0,8)}`,email:`${name.toLowerCase().replace(/[^a-z ]/g,"").replace(/ /g,".")}@tiziflow.ma`,languages:i%2?["Arabe","Français","Anglais"]:["Arabe","Français","Amazigh"],status:["En excursion","Disponible","Disponible","Indisponible","En excursion","Disponible","Disponible","Hors service"][i]??"Disponible",excursions:18+i*7}));

const reservationStatuses=["Confirmée","En préparation","En cours","Terminée","En attente confirmation","Confirmée","Terminée","Annulée","Acompte payé","Payée"];
export const reservations: Reservation[]=Array.from({length:36},(_,i)=>{const circuit=circuits[i%8]??circuits[0]; const total=(circuit?.price??680)*(1+i%4); const paid=i%5===0?0:i%4===0?Math.round(total*.3):i%3===0?Math.round(total*.65):total; return {id:`RES-2026-${String(124+i).padStart(5,"0")}`,customerId:customers[i%customers.length]?.id??"",circuitId:circuit?.id??"",activity:i%7===0?"Excursion privée":"Circuit guidé",date:`2026-10-${String(2+(i%24)).padStart(2,"0")}`,time:["08:30","09:00","10:30","14:30","17:30"][i%5]??"09:00",participants:1+i%4,motorcycleIds:[motorcycles[i%14]?.id??""],guideId:guides[i%8]?.id??"",total,paid,paymentStatus:paid===0?"Non payé":paid<total?"Partiellement payé":"Payé",status:reservationStatuses[i%reservationStatuses.length]??"Confirmée"};});

const channels: Payment["channel"][]=["En ligne","Carte à l’agence","Espèces à l’agence"];
export const payments: Payment[]=reservations.slice(0,32).map((r,i)=>({id:`PAY-2026-${String(842+i).padStart(5,"0")}`,reservationId:r.id,customerId:r.customerId,channel:channels[i%3]??"En ligne",amount:r.paid||Math.round(r.total*.3),date:`2026-10-${String(1+i%24).padStart(2,"0")}`,reference:`TF-${channels[i%3]==="En ligne"?"ONL":channels[i%3]==="Carte à l’agence"?"TPE":"CSH"}-${10240+i*17}`,agent:i%2?"Nadia El Idrissi":"Admin TiziFlow",status:i%11===0?"Échec":"Validé"}));
export const services: Service[]=["Guide local","Transfert hôtel","Pique-nique Atlas","Équipement premium","Photographe","Transport moto","Excursion privée","Rafraîchissements","Recharge rapide","Assurance renforcée"].map((name,i)=>({id:`SER-${String(i+1).padStart(3,"0")}`,name,price:[350,280,140,90,620,400,950,65,110,180][i]??100,duration:i%3===0?"Journée":`${1+i%4} h`,capacity:4+i%8,availability:i%6===0?"Sur demande":"Tous les jours",status:i===8?"Indisponible":"Actif",type:i%3===0?"Inclus":i%3===1?"Optionnel":"Réservable"}));
export const complaints: Complaint[]=Array.from({length:12},(_,i)=>({id:`CMP-2026-${String(15+i).padStart(5,"0")}`,customerId:customers[(i*2)%customers.length]?.id??"",reservationId:reservations[i]?.id??"",category:["réservation","paiement","moto","retard","guide","circuit","service","remboursement"][i%8]??"autre",priority:["normale","haute","urgente","basse"][i%4]??"normale",status:["nouvelle","en cours","attente client","résolue","clôturée"][i%5]??"nouvelle",agent:guideNames[i%guideNames.length]??"Admin",date:`2026-09-${String(10+i).padStart(2,"0")}`,description:["Retard au point de départ","Écart sur le montant d’acompte","Équipement à remplacer","Retour plus tardif que prévu"][i%4]??"Suivi nécessaire",resolution:i%3===0?"Geste commercial proposé":""}));
export const maintenance: Maintenance[]=Array.from({length:8},(_,i)=>({id:`MNT-${String(31+i).padStart(4,"0")}`,motorcycleId:motorcycles[(i+3)%motorcycles.length]?.id??"",type:["Contrôle batterie","Révision générale","Pneumatiques","Freinage"][i%4]??"Révision",date:`2026-10-${String(5+i*2).padStart(2,"0")}`,mileage:4200+i*900,technician:i%2?"Atelier Atlas E-Motion":"Karim Boulahya",cost:450+i*210,nextDate:`2027-0${1+i%5}-10`,status:["Planifiée","En cours","Terminée","Planifiée"][i%4]??"Planifiée",description:"Contrôle préventif et diagnostic complet."}));
export const promotions: Promotion[]=["ATLAS10","SUNSET15","MIDELT200","GROUPE12","WELCOME"].map((code,i)=>({id:`PRO-${i+1}`,code,type:i===2?"Montant fixe":"Pourcentage",value:i===2?200:10+i*2,start:"2026-09-01",end:`2026-1${i%3}-30`,limit:30+i*20,used:6+i*7,minimum:800+i*300,status:i===4?"Planifiée":"Active"}));
export const incidents: Incident[]=Array.from({length:7},(_,i)=>({id:`INC-2026-${String(18+i).padStart(5,"0")}`,type:["batterie","panne","retard retour","dommage","problème itinéraire"][i%5]??"panne",date:`2026-10-${String(2+i*3).padStart(2,"0")}`,motorcycleId:motorcycles[(i+1)%motorcycles.length]?.id??"",reservationId:reservations[i]?.id??"",location:i%2?"Plateau d’Ahouli":"Piste de Tatiouine",severity:["Faible","Modérée","Élevée"][i%3]??"Faible",status:i%3===0?"Ouvert":"Résolu",description:"Signalement terrain transmis par le guide.",cost:i%2?0:350}));
export const activity: Activity[]=Array.from({length:18},(_,i)=>({id:`ACT-${i+1}`,user:["Youssef Aït Ali","Ahmed El Mansouri","Admin TiziFlow","Nadia El Idrissi"][i%4]??"Admin",action:["a changé le statut","a assigné une moto","a créé un remboursement","a confirmé la réservation"][i%4]??"a mis à jour",entity:i%2?reservations[i]?.id??"":motorcycles[i%14]?.id??"",date:`2026-10-02 ${String(8+i%10).padStart(2,"0")}:${String((i*7)%60).padStart(2,"0")}`,previous:i%3===0?"En attente":"—",next:i%3===0?"Confirmée":"Mis à jour"}));

export const seedData: AppData={customers,motorcycles,guides,circuits,reservations,payments,complaints,maintenance,services,promotions,incidents,activity};
export const money=(n:number)=>new Intl.NumberFormat("fr-MA",{style:"currency",currency:"MAD",maximumFractionDigits:0}).format(n);
export const customerName=(id:string,data:AppData)=>{const c=data.customers.find(x=>x.id===id);return c?`${c.firstName} ${c.lastName}`:id};
export const circuitName=(id:string,data:AppData)=>data.circuits.find(x=>x.id===id)?.name??id;
export const guideName=(id:string,data:AppData)=>data.guides.find(x=>x.id===id)?.name??id;
