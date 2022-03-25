// Make sure sw are supported
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('../sw_cached_pages.js')
			.then((reg) => console.log(`Service Worker: Registered (Pages): ${JSON.stringify(reg)}`))
			.catch((err) => console.log(`Service Worker: Error: ${err}`));
	});
}
