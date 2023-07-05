class Pokemon {
    constructor(abilities,base_experience,forms,game_indicies,height,held_items,id,is_default,location_area_encounters,moves,name,order,past_types,species,sprites,stats,types,weight){
        this.abilities=abilities;
        this.base_experience=base_experience;
        this.forms=forms;
        this.game_indicies=game_indicies;
        this.height=height;
        this.held_items=held_items;
        this.id=id;
        this.is_default=is_default;
        this.location_area_encounters=location_area_encounters;
        this.moves=moves;
        this.name=name;
        this.order=order;
        this.past_types=past_types;
        this.species=species;
        this.sprites=sprites;
        this.stats=stats;
        this.types=types;
        this.weight=weight;
    }
    
}

const charmander = new Pokemon()




fetch("https://pokeapi.co/api/v2/pokemon/charmander")
.then((res) => res.json())
.then((val)=>console.log(val))
.then((val)=> val.name)
.catch((err)=>console.error(err))