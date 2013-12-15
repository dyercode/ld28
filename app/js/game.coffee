window.game = ->
  html = JST['app/templates/game.us']()
  document.body.innerHTML += html
window.description = ->
  html = JST['app/templates/description.us']()
  document.body.innerHTML += html

$ ->
	game()
	description()
	Game.start()