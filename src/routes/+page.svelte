<script lang="ts">
    import { onMount } from 'svelte'

    let text: string = ''
    onMount(async () => {
        const response: Response = await fetch('/', {
            method: 'POST',
        })
        const data: string = await response.text()

        text = data
    })

</script>

<div>{text}</div>
