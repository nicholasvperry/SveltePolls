<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatPollForm from "./components/CreatPollForm.svelte";
    import PollList from "./components/PollList.svelte";
	import {tweened} from 'svelte/motion'

	//tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	
	const tabChange = (e) => {
		activeItem = e.detail;
	}

	

	const handleAdd = (e) => {
		activeItem = 'Current Polls'
	}

</script>
<Header/>
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
	<!-- send polls to PollList as props-->
	<!-- listen -->
	<PollList />
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