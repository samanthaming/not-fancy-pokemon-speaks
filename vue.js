var timer = 0;

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

    setInterval(() => {
      timer++;
      if(timer === 3) {
        this.resetTalk();
      }
    }, 1000);

  },
  methods: {
    selectPokemon(e) {
      const keys = this.pokemons.map(pokemon => pokemon.code);
      const code = e.keyCode;
      const selectedPokemon = this.pokemons.find(pokemon => pokemon.code === code)

      if(!keys.includes(code)) return;

      timer = 0;
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
  }
});
