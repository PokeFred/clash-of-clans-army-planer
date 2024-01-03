import Database from 'better-sqlite3'

const db: Database.Database = new Database(":memory:")

db.prepare("CREATE TABLE test (id INTEGER)").run()
const smt: Database.Statement = db.prepare("INSERT INTO test (id) VALUES ($id)")
smt.run({ id: 0 })
smt.run({ id: 1 })
smt.run({ id: 2 })

type Pet = {
    name: string,
    image: string,
    levels: PetLevel[]
}

type PetLevel = {
    level: number,
    townhall: number
}

const pets: Pet[] = [
    {
        name: "L.A.S.S.I",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Electro_Owl",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Mighty_Yak",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Unicorn",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Frosty",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Diggy",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Poison_Lizard",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Phoenix",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    },
    {
        name: "Spirit_Fox",
        image: "/public/pets/L.A.S.S.I.png",
        levels: []
    }
]

db.prepare("CREATE TABLE pet (id INTEGER, identifier char(256), name char(256), image char(256))").run()

function createPet(name: string) {
    db.prepare("INSERT INTO pet (id, identifier, name, image) VALUES ($id, $identifier, $name, $image)").run({
        id: 0,
        identifier: "",
        name: "",
        image: ""
    })
}

createPet("")

//console.log(pets)
/*
Townhall
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16

Pet
L.A.S.S.I       14
Electro Owl     14
Mighty Yak      14
Unicorn         14
Frosty          15
Doggy           15
Poison Lizard   15
Phoenix         15
Spirit Fox      16
*/

export default db