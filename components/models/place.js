class Place{
    constructor(title,imagUri,location,address){
        this.title = title;
        this.imagUri = imagUri;
        this.location = location
        this.address = address;
        this.id= new Date().toString() + Math.random().toString()
    }
}