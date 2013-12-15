window.game = ->
  html = JST['app/templates/game.us']()
  document.body.innerHTML += html

$ ->
	game()
	Game.start()