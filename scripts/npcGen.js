function createButton() {
  $('#actors > .directory-footer').append('<button id="createNPC">NPC Generator</button>');
  $("#createNPC").click(function () {
    new RandomNPC().render(true, {})
  });

}
Hooks.on('renderSidebarTab', (bar, html) => {
  if (bar.options.id == 'actors') {
   createButton();
  }

});

class RandomNPC extends FormApplication {
  getData(options) {
    return {
      ancestries: game.packs.get('pf2e.ancestries').index,
      classes: game.packs.get('pf2e.classes').index,
      backgrounds: game.packs.get('pf2e.backgrounds').index
    }
  }
  static get defaultOptions() {
    const defaults = super.defaultOptions;

    const overrides = {
      height: 'auto',
      id: 'npc-creator',
      template: "modules/npc-generator/templates/canvas.hbs",
      title: 'Random NPC Generator',
      userId: game.userId,
    };
    const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
    return mergedOptions;
  }
}


