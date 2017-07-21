console.log('Start');

setTimeout(() => {
	console.log('Mid');
}, 2000);

setTimeout(() => {
	console.log('Second');
}, 0);

console.log('End');