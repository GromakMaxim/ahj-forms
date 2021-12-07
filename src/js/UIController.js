export default class UIConroller {
  constructor() {
    this.setTip();
  }

  setTip() {
    console.log('ui');
    const btn = document.getElementsByClassName('button')[0];

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('click');

      const tip = document.querySelector('div.tip');

      tip.classList.toggle('hidden');
    });
  }
}
