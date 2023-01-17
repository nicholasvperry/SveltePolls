import { writable } from 'svelte/store'

//create a writeable store of data
const PollStore = writable([
    {
        id: 1,
        question: 'Python or JavaScript?',
        answerA: 'Python',
        answerB: 'JavaScript',
        votesA: 9,
        votesB: 15,
    }
]);

export default PollStore;