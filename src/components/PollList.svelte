<script>
    import PollDetails from "./PollDetails.svelte";
    
    export let polls = [];
</script>

<div class="poll-list">
    <!-- set key as poll.id -->
    {#each polls as poll (poll.id)}
    <!-- pass poll prop to pollDetails     -->
    <!-- pass handleVotes from polldetails to app-->
    <div><PollDetails {poll} on:vote/></div>
    {/each}
</div>

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>