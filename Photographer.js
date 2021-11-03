class Photographer{
    constructor(data){
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tags = data.tags
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
    }

    createHTML() {

        return `
        <div class= "photographe">
                <a class="photographer__profil">
                    <p class="id">${this.id}</p>
                    <img class="vignette" src="photos/ID/${this.portrait}" alt="">
                    <h2 class="photographer__profil__name">${this.name}</h2>
                </a>
                <p class="location">${this.city}, ${this.country}</p>
                <p class="tagline">${this.tagline}</p>
                <p class="price">${this.price}€/jour</p>
        </div>`

    }
}