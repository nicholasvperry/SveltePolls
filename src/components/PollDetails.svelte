<script>
    //---------May need to add .js
    import PollStore from "../stores/PollStore";
    import Card from "../shared/Card.svelte";
    import Button from "../shared/Button.svelte";
    import {tweened} from 'svelte/motion'
    //import poll from pollList
    export let poll;
    

    //reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    //sets width of vote bar. It is set as a style in the div
    // double pipe makes default value 0 instead of nan
    //value would be nan because 100/0 is nan
    $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
    $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;

    //tweened percentages
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
    //$: console.log($tweenedA, $tweenedB);

    //handle votes passes to pollList then to App
    const handleVote = (option, id) => {
        //e.detail is where you get the data sent
		console.log('you clicked me')
		
        PollStore.update(currentPolls => {
            let copiedPolls = [...currentPolls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
		console.log(option)
		if (option === 'a') {
			upvotedPoll.votesA++;
		}
		if (option === 'b') {
			upvotedPoll.votesB++;
		}

		return copiedPolls;
        
        })
    }

    //deleting a poll
    const handleDelete = (id) => {
        PollStore.update(currentPolls => {
            return currentPolls.filter(poll => poll.id != id)
        })
    }
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVotes}</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {$tweenedA}%"/>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {$tweenedB}%"/>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a{
        background: rgba(217,27,66,0.2);
        border-left: 4px solid #d91b42;
    }
    .percent-b{
        background: rgba(69,196,150,0.2);
        border-left: 4px solid #45c496;

    }
    .delete{
        margin-top: 30px;
        text-align: center;
    }

</style>
