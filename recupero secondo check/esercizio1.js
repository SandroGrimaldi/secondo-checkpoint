
class Team{
    constructor(members,members_number){
        this.members = [];
        this.members_number = 0;
    }
   /* get members (){

    }*/
    set members (data){
        this.members= data.results;
        this.members_number= data.results.lenght;
    }
}




fetch("https://randomuser.me/api/")
.then ((res)=>res.json())
//.then ((team)=>console.log(team))
.then ((res) => {let team = new Team(res.results,res.results.length);
console.log(team)})

.then((team)=>console.log(team)) 
.catch((err)=>console.error(err))