		window.onload = function() {
  newQuote();
};
		
		var quotes = [
		'look at your life, look at your choices', 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', 'The best preparation for tomorrow is doing your best today. ',
		'It is during our darkest moments that we must focus to see the light. ', 'I cant change the direction of the wind, but I can adjust my sails to always reach my destination.', 'Change your thoughts and you change your world',
		'Someone is sitting in the shade today because someone planted a tree a long time ago.', 'Try to be a rainbow in someones cloud.', 'The bird is powered by its own life and by its motivation.']
		function newQuote() {
			var randomNumber = Math.floor(Math.random() * (quotes.length));
			document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
		}