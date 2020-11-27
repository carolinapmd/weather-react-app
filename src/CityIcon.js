import React from "react"

import AbuSimbel from "./img/png/Abu Simbel.png";
import Agra from "./img/png/Agra.png";
import AireysInlet from "./img/png/Aireys Inlet.png";
import Alhambra from "./img/png/Alhambra.png";
import Antioquia from "./img/png/Antioquia.png";
import Bagan from "./img/png/Bagan.png";
import Baghdad from "./img/png/Baghdad.png";
import Bangkok from "./img/png/Bangkok.png";
import Barcelona from "./img/png/Barcelona.png";
import Beijing from "./img/png/Beijing.png";
import Berlin from "./img/png/Berlin.png";
import Boston from "./img/png/Boston.png";
import Brasilia from "./img/png/Brasilia.png";
import Brussels from "./img/png/Brussels.png";
import Cambodia from "./img/png/Cambodia.png";
import Casablanca from "./img/png/Casablanca.png";
import Chartres from "./img/png/Chartres.png";
import Cordoba from "./img/png/Cordoba.png";
import Delhi from "./img/png/Delhi.png";
import Delphi from "./img/png/Delphi.png";
import Dubai from "./img/png/Dubai.png";
import EasterIsland from "./img/png/Easter Island.png";
import Galata from "./img/png/Galata.png";
import Giza from "./img/png/Giza.png";
import Hatsukaichi from "./img/png/Hatsukaichi.png";
import Istanbul from "./img/png/Istanbul.png";
import Jakarta from "./img/png/Jakarta.png";
import Kashgar from "./img/png/Kashgar.png";
import KualaLumpur from "./img/png/Kuala Lumpur.png";
import Lahore from "./img/png/Lahore.png";
import Lisbon from "./img/png/Lisbon.png";
import London from "./img/png/London.png";
import LosAngeles from "./img/png/Los Angeles.png";
import Lubeck from "./img/png/Lubeck.png";
import Madrid from "./img/png/Madrid.png";
import Málaga from "./img/png/Málaga.png";
import Melbourne from "./img/png/Melbourne.png";
import Merida from "./img/png/Merida.png";
import Milan from "./img/png/Milan.png";
import Morelia from "./img/png/Morelia.png";
import Mostar from "./img/png/Mostar.png";
import Mumbai from "./img/png/Mumbai.png";
import Nevyansk from "./img/png/Nevyansk.png";
import NewYork from "./img/png/New York.png";
import Paris from "./img/png/Paris.png";
import Pisa from "./img/png/Pisa.png";
import Pula from "./img/png/Pula.png";
import QuezonCity from "./img/png/Quezon City.png";
import Reykjavík from "./img/png/Reykjavík.png";
import RioDeJaneiro from "./img/png/Rio de Janeiro.png";
import Rome from "./img/png/Rome.png";
import Samarra from "./img/png/Samarra.png";
import SantaMarta from "./img/png/Santa Marta.png";
import Santorini from "./img/png/Santorini.png";
import Seattle from "./img/png/Seattle.png";
import Segovia from "./img/png/Segovia.png";
import Sevilla from "./img/png/Sevilla.png";
import Skanderborg from "./img/png/Skanderborg.png";
import Smeaton from "./img/png/Smeaton.png";
import Sydney from "./img/png/Sydney.png";
import Taiwan from "./img/png/Taiwan.png";
import Teotihuacan from "./img/png/Teotihuacan.png";
import Thessaloniki from "./img/png/Thessaloniki.png";
import Tokyo from "./img/png/Tokyo.png";
import Toronto from "./img/png/Toronto.png";
import Tulum from "./img/png/Tulum.png";
import Turin from "./img/png/Turin.png";
import Uxmal from "./img/png/Uxmal.png";
import Washington from "./img/png/Delphi.png";
import WatMuang from "./img/png/Wat Muang.png";
import Zaragoza from "./img/png/Zaragoza.png";

import "./CityIcon.css"


export default function CityIcon(props) {
    
    const cityMapping = {        
    "Abu Simbel":  AbuSimbel ,
    "Agra": Agra,
    "Aireys Inlet": AireysInlet,
    "Alhambra": Alhambra,
    "Antioquia": Antioquia ,
    "Bagan": Bagan ,
    "Baghdad": Baghdad ,
    "Bangkok": Bangkok ,
    "Barcelona": Barcelona ,
    "Beijing": Beijing ,
    "Berlin": Berlin ,
    "Boston": Boston ,
    "Brasilia": Brasilia, 
    "Brussels": Brussels ,
    "Cambodia": Cambodia,
    "Casablanca": Casablanca,
    "Chartres": Chartres ,
    "Cordoba":Cordoba ,
    "Delhi": Delhi ,
    "Delphi":Delphi ,
    "Dubai":Dubai ,
    "EasterIsland": EasterIsland,
    "Galata":    Galata,
    "Giza":     Giza ,
    "Hatsukaichi": Hatsukaichi,
    "Istanbul": Istanbul,
    "Jakarta": Jakarta,
    "Kashgar":     Kashgar ,
                        "Kuala Lumpur":     KualaLumpur ,
                            "Lahore":     Lahore,
                                "Lisbon":     Lisbon ,
                                    "London":     London,
                                        "Los Angeles":     LosAngeles ,
                                            "Lubeck":     Lubeck,
                                                "Madrid":     Madrid ,
                                                    "Málaga":     Málaga , 
                                                       "Melbourne":     Melbourne ,
                                                           "Merida":     Merida , 
                                                              "Milan":     Milan,
                                                                  "Morelia":     Morelia ,
                                                                      "Mostar":     Mostar ,
                                                                          "Mumbai":     Mumbai ,
                                                                              "Nevyansk":     Nevyansk ,
                                                                                  "New York":     NewYork ,
                                                                                      "Paris":     Paris ,
                                                                                          "Pisa":     Pisa,
                                                                                              "Pula":     Pula ,
                                                                                                  "Quezon City":     QuezonCity,    "Reykjavík":     Reykjavík ,    "Rio de Janeiro":     RioDeJaneiro ,    "Rome":     Rome ,    "Samarra":     Samarra,    "Santa Marta" :     SantaMarta  ,    "Santorini":     Santorini ,    "Seattle":     Seattle ,    "Segovia":     Segovia,    "Sevilla":     Sevilla ,    "Skanderborg":     Skanderborg ,    "Smeaton":     Smeaton ,    "Sydney":     Sydney ,    "Taiwan":     Taiwan ,    "Teotihuacan":     Teotihuacan ,    "Thessaloniki":     Thessaloniki ,    "Tokyo":    Tokyo ,    "Toronto":     Toronto ,    "Tulum":     Tulum ,    "Turin":     Turin ,    "Uxmal":     Uxmal ,    "Washington":     Washington ,    "Wat Muan":     WatMuang ,    "Zarago":     Zaragoza     }
    



    let CityIcon = cityMapping[props.city]

       if(CityIcon) {

           return (<div className="CityIcon">
            <img src={CityIcon} alt={`${props.city} Icon`} />
        </div>
        );
    } else {
        return null;
    }

       

}