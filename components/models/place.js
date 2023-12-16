export class Place{
    constructor(title,imagUri,location){
        this.title = title;
        this.imagUri = imagUri;
        this.address = location.address;
        this.location = {lat:location.lat,lng:location.lng}
        this.id= new Date().toString() + Math.random().toString()
    }
}