import Database from 'better-sqlite3'

const db: Database.Database = new Database(":memory:")

/*
export default {
    identifier: "",
    name: "",
    image_url: "",
    capacity: 0,
    levels: [
        {
            laboratory: 0
        }
    ]
} satisfies Troop
*/

type Troop = {
    identifier: string,
    name: string,
    image_url: string
}

type $Troop = {
    id: number,
    identifier: string,
    name: string,
    image_url: string
}

db.prepare("CREATE TABLE troop (id INTEGER, identifier char(256), name char(256), image_url char(256))").run()

function createTroop(id: number, name: string): void {
    const smt: Database.Statement = db.prepare("INSERT INTO troop (id, identifier, name, image_url) VALUES ($id, $identifier, $name, $image_url)")

    smt.run({
        id: id,
        identifier: `troop:${name.replaceAll(" ", "_").toLowerCase()}`,
        name: name,
        image_url: `/public/troops/${name.replaceAll(" ", "_").toLowerCase()}.png`
    })
}

createTroop(0, "Barbarian")
createTroop(1, "Archer")
createTroop(2, "Giant")
createTroop(3, "Goblin")
createTroop(4, "Wall Breaker")
createTroop(5, "Balloon")
createTroop(6, "Wizard")
createTroop(7, "Healer")
createTroop(8, "Dragon")
createTroop(9, "P.E.K.K.A")
createTroop(10, "Baby Dragon")
createTroop(11, "Miner")
createTroop(12, "Electro Dragon")
createTroop(13, "Yeti")
createTroop(14, "Dragon Rider")
createTroop(15, "Electro Titan")
createTroop(16, "Root Rider")

createTroop(17, "Minion")
createTroop(18, "Hog Rider")
createTroop(19, "Valkyrie")
createTroop(20, "Golem")
createTroop(21, "Witch")
createTroop(22, "Lava Hound")
createTroop(23, "Bowler")
createTroop(24, "Ice Golem")
createTroop(25, "Headhunter")
createTroop(26, "Apprentice Warden")

export type { Troop, $Troop }
export default db