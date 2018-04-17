import { Image } from './image';
import { Quartier } from "./quartier";
import { Typebien } from "./typebien";

export interface Bien {
   
    id: number;
    nom_bien: string;
    prix_location: number;
    date_ajout: Date;
    surface: string;
    nbre_chambre: number;
    nbre_etage: number;
    nbre_salon: number;
    nbre_sale_bain: number;
    balcon: boolean;
    meuble: boolean;
    parking: boolean;
    description: Text;
    adresse: string;
    etat: boolean;

}
