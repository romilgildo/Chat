var assert = require("assert");
chat = require(__dirname+"/../server.js");

describe('Chat', function(){
	describe('Carga', function(){
		it('Debe cargar el programa', function(){
			assert(chat, "Cargado");
		});
	});
});
