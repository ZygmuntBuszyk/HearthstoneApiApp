class Set {
  static Witchwood() {
    console.log('You choose witchwood expansion');
    this.currentExpansion = 'The Witchwood';
    let localObject = JSON.parse(localStorage.getItem('first'))[
      this.currentExpansion
    ];
    this.currentCards(localObject);
  }
}

export default Set;
