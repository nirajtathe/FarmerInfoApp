export class FarmerDataModel{
    public farmerName: string;
    public age: number;
    public address: string;
    //Farm 
    public farm: [{
        farmName: string;
        GeoLocation: number;
        //seasons
        rainy: [{
            fieldName: string;
            cropName: string;
            polygonData: number;
        }];
        winter:[{
            fieldName: string;
            cropName: string;
            polygonData: number;
        }];
        summer:[{
            fieldName: string;
            cropName: string;
            polygonData: number;
        }];
    }];
}

/*
class Farm{
    public farmName: string;
    public GeoLocation: number;
    //seasons
    public rainy: Season[];
    public winter:Season[];
    public summer:Season[];
}

class Season{
    public fieldName: string;
    public cropName: string;
    public polygonData: number;
}
*/