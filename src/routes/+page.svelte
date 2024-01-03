<script lang="ts">
    import { onMount } from 'svelte'

    let townhalls: number[] = []

    let text: string = ''
    onMount(async () => {
        const response: Response = await fetch('/', {
            method: 'POST',
        })
        const data: string = await response.text()

        text = data
    })
</script>

<!--
function getAvailableTownHalls(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
}

type ArmyCamp = {}
-->https://static.wikia.nocookie.net/clashofclans/images/6/62/Avatar_L.A.S.S.I.png/revision/latest?cb=20210413063518
<img src="https://clashofclans.fandom.com/wiki/File:Avatar_L.A.S.S.I.png" alt="" style="width: 64px; height: 64px; border: 1px solid black;">
<div>{text}</div>
