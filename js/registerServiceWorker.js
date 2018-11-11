if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./service-worker.js')
	.then(function() {
		console.log('Registration completed!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}