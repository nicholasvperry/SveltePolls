<script>
    import PollDetails from "./PollDetails.svelte";
    import PollStore from "../stores/PollStore.js"
    import { fade, slide, scale } from "svelte/transition";
    import { flip } from "svelte/animate";

</script>

<div class="poll-list">
    <!-- set key as poll.id -->
    {#each $PollStore as poll (poll.id)}
    <!-- pass poll prop to pollDetails -->
    <!-- Animate when deleting and adding -->
    <div in:fade out:scale|local animate:flip={{duration: 500}}>
        <PollDetails {poll} />
    </div>
    {/each}
</div>

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>