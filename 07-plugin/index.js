// Implement the Dropdown class, which will initialize the element selector
// in functionality similar to a normal HTML select element,
// but fully implemented by your code without the select tag.

// Example:
// const dropdown = new Dropdown('dropdown', {
//     items: [
//       {label: 'Tallinn', id: 'msk'},
//       {label: 'Helsinki', id: 'spb'},
//       {label: 'Kyiv', id: 'nsk'},
//       {label: 'Stockholm', id: 'krdr'}
//     ]
//   })

class Dropdown {
    // 2 parameters are passed to the constructor - a selector and a set of elements
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        // an array where all the elements of our plugin are located
        this.items = options.items;

        console.log(this.$el);
        // this.open();

        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

        // show the menu when clicking on the dropdown - use the event delegation method
        this.$el.addEventListener('click', event => {
            // if we clicked on an element that has a class dropdown__label
            if (event.target.classList.contains('dropdown__label')) {
                // check if dropdown is open (if dropdown has class open)
                // element 'dropdown' is an element this.$el
                if (this.$el.classList.contains('open')) {
                    this.close();
                } else {
                    this.open();
                }
            } else if (event.target.tagName.toLowerCase() === 'li') {
                // console.log(event.target.dataset.id);
                this.select(event.target.dataset.id);
            }
        })

        // add dropdown list
        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`;
        // without join will be commas
        }).join(' ');

        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin',
        itemsHTML);
    }

    select(id) {
        const item = this.items.find(i => i.id === id);
        console.log(item);
        this.$el.querySelector('.dropdown__label').textContent = item.label;
        // close our dropdown
        this.close();
    }

    open() {
        this.$el.classList.add('open');
    }

    close() {
        this.$el.classList.remove('open');
    }
}

const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Tallinn', id: 'tln'},
        {label: 'Helsinki', id: 'hsnk'},
        {label: 'Kyiv', id: 'kv'},
        {label: 'Stockholm', id: 'sthm'}
    ]
})