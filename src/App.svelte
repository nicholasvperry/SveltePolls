<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatPollForm from "./components/CreatPollForm.svelte";
    import PollList from "./components/PollList.svelte";

	//tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	
	const tabChange = (e) => {
		activeItem = e.detail;
	}

	//dummpy polls information...temporary state
	let polls = [
		{
			id: 1,
			question: 'Python or JavaScript?',
			answerA: 'Python',
			answerB: 'JavaScript',
			votesA: 9,
			votesB: 15,
		}
	];

	const handleAdd = (e) => {
		const poll = e.detail;
		//make new array polls, add new poll, then add all data from polls array
		polls = [poll, ...polls]
		console.log(polls)
		activeItem = 'Current Polls'
	}

	const handleVote = (e) => {
		//e.detail is where you get the data sent
		console.log('you clicked me')
		const {id, option} = e.detail;
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
		console.log(option)
		if (option === 'a') {
			upvotedPoll.votesA++;
		}
		if (option === 'b') {
			upvotedPoll.votesB++;
		}

		polls = copiedPolls;
	}
</script>
<Header/>
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
	<!-- send polls to PollList as props-->
	<!-- listen -->
	<PollList {polls} on:vote={handleVote}/>
	{:else if activeItem === 'Add New Poll'}
	<!-- listen for event from poll -->
	 <CreatPollForm on:add={handleAdd}/>
	{/if}
	
</main>
<Footer/>
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>