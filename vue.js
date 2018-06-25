new Vue({
  el: '#app',
  data: {
    talk: '',
    pokemons: [
      {
        key: 'p',
        code: 80,
        file: 'pikachu',
        selected: false
      },
      {
        key: 'c',
        code: 67,
        file: 'charmander',
        selected: false
      },
      {
        key: 's',
        code: 83,
        file: 'squirtle',
        selected: false
      },
    ]
  },
  created () {
    window.addEventListener('keydown', this.selectPokemon);
    window.addEventListener('keydown', this.showWelcomeMessage);
  },
  methods: {
    selectPokemon(e) {
      const keys = this.pokemons.map(pokemon => pokemon.code);
      const code = e.keyCode;
      const selectedPokemon = this.pokemons.find(pokemon => pokemon.code === code)

      if(!keys.includes(code)) return;

      selectedPokemon.selected = true;
      this.talk = selectedPokemon.file;
      this.playSound(`sounds/${selectedPokemon.file}.mp3`)

      setTimeout(() => {
        selectedPokemon.selected = false;
      }, 1000);
    },
    playSound(sound) {
      var audio = new Audio(sound);
      audio.play();
    },
    resetTalk() {
      this.talk = '';
    },
    showWelcomeMessage() {
      setTimeout(() => {
        this.talk = '';
      }, 5000);
    }
  }
});
