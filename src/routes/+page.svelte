<script lang="ts">
    import {onMount} from "svelte"

    onMount((): void => {
        fetch("/", { method: "POST" })
    })

    type Pet = {
        id: number,
        identifier: string,
        name: string,
        image: string
    }

    class PetClient {
        private pets: Pet[]

        public constructor() {
            this.pets = []
        }

        public addPet(name: string): void {
            const pet: Pet = {
                id: this.pets.length,
                identifier: `pet:${name.replaceAll(" ", "_").toLowerCase()}`,
                name: name,
                image: `/public/pets/${name.replaceAll(" ", "_")}.png`
            }

            this.pets.push(pet)
        }

        public getAll(): Pet[] {
            return this.pets
        }
    }

    // typeof usersTable.$inferInser
    // $g
    // $g

    class TroopClient {
        private troops: Pet[]

        public constructor() {
            this.troops = []
        }

        public addPet(name: string): void {
            const pet: Pet = {
                id: this.troops.length,
                identifier: `pet:${name.replaceAll(" ", "_").toLowerCase()}`,
                name: name,
                image: `/public/pets/${name.replaceAll(" ", "_")}.png`
            }

            this.troops.push(pet)
        }

        public getAll(): Pet[] {
            return this.troops
        }
    }

    const heroes: { name: string, image: string }[] = [
        { name: "Barbarian King", image: "/public/heroes/barbarian_king.png" },
        { name: "Archer Queen", image: "/public/heroes/archer_queen.png" },
        { name: "Grand Warden", image: "/public/heroes/grand_warden.png" },
        { name: "Royal Champion", image: "/public/heroes/royal_champion.png" }
    ]

    const pets: PetClient = new PetClient()
    pets.addPet("L.A.S.S.I")
    pets.addPet("Electro Owl")
    pets.addPet("Mighty Yak")
    pets.addPet("Unicorn")
    pets.addPet("Frosty")
    pets.addPet("Diggy")
    pets.addPet("Poison Lizard")
    pets.addPet("Phoenix")
    pets.addPet("Spirit Fox")
    //pets.getAll().forEach((element: Pet): void => console.log(element))

    const troops: { name: string, image: string }[] = [
        // Elexir Troops
        { name: "Barbarian", image: "" }

        // Dark Elexir Troops
    ]
</script>

<!--
function getAvailableTownHalls(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
}

type ArmyCamp = {}
-->

<div class="text-5xl text-center">Heroes</div>
<div class="mx-auto w-fit h-auto grid grid-cols-4">
    {#each heroes as element}
        <div class="mx-4">
            <div class="w-[100px] h-[136px] relative">
                <div class="left-0 bottom-0 w-[100px] h-[100px] border border-black absolute"></div>
                <img src="{element.image}" alt="" class="top-0 left-0 w-[100px] h-[136px] absolute">
                <div class="top-[12.5px] left-[-12.5px] w-[25px] h-[25px] border border-black absolute"></div>
            </div>
            <div class="w-[100px] h-[50px] text-center bg-red-500">{element.name}</div>
        </div>
    {/each}
</div>

<div class="text-5xl text-center">Pets</div>
<div class="mx-auto w-fit h-auto grid grid-cols-4">
    {#each pets.getAll() as element}
        <div class="w-40 h-40 group">
            <div class="mx-auto w-32 h-32 cursor-pointer">
                <img src="{element.image}" alt="" class="w-32 h-32 border border-black rounded-xl">
            </div>
            <div class="w-40 h-8 flex justify-center items-center opacity-0 transition-opacity duration-300 px-2 py-1 group-hover:opacity-100">
                <div class="w-full h-full bg-amber-400 rounded-xl flex justify-center items-center">{element.name}</div>
            </div>
        </div>
        <!--
        <div>
            <div class="w-32 h-32"><img src="{element.image}" alt="" class="w-32 h-32 border border-black"></div>
            <div class="w-32 h-8 text-center bg-red-500">{element.name}</div>
        </div>
        -->
    {/each}
</div>
