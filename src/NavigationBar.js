import { html, css, LitElement } from 'lit-element';

export class NavigationBar extends LitElement {
  static get properties() {
    return {
      items: {
        type: Array,
        attribute: true,
        reflect: true,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
      }
      .navigation-bar {
        border-radius: 0.75rem;
        overflow: hidden;
      }
      .navigation-bar__wp-items {
        display: flex;
        justify-content: space-around;
        background-color: var(--element-background-color, white);
        padding: 0.5rem 0.25rem;
      }

      .navigation-bar__item,
      .navigation-bar__item--active {
        display: flex;
        align-items: center;
      }
      .navigation-bar__item {
        justify-content: space-around;
        color: var(--item-label-color, black);
        background-color: var(--item-background-color, white);
      }
      .navigation-bar__item--active {
        justify-content: flex-start;
        border-radius: var(--item-selected-border-radius, 5rem);
        color: var(--item-selected-label-color, white);
        background-color: var(--item-selected-background-color, #213f7f);
        padding: 0.125rem 2rem 0.125rem 0.5rem;
        cursor: pointer;
      }
      .navigation-bar__item-img {
        transform: scale(0.8);
        width: var(--item-img-width, 25px);
        height: var(--item-img-height, 25px);
        cursor: pointer;
      }
      .navigation-bar__item-label {
        font-size: var(--item-label-font-size, 0.75rem);
        font-weight: 700;
        margin-left: 0.75rem;
      }
    `;
  }

  constructor() {
    super();
    this.items = [];
  }

  render() {
    return html`
      <div class="navigation-bar">
        <div class="navigation-bar__wp-items">
          ${this.items.length === 0 ? 'The menu has no items' : ''}
          ${this.items.map(
            (item, index) => html`
              ${item.selected
                ? html`
                    <div
                      class="navigation-bar__item--active"
                      @click="${e => this._selectItem(e, item, index)}"
                    >
                      <img
                        class="navigation-bar__item-img"
                        src="${item.urlImgActive}"
                      />
                      <span class="navigation-bar__item-label">
                        ${item.label}</span
                      >
                    </div>
                  `
                : html`
                    <div
                      class="navigation-bar__item"
                      @click="${e => this._selectItem(e, item, index)}"
                    >
                      <img
                        class="navigation-bar__item-img"
                        src="${item.urlImg}"
                      />
                    </div>
                  `}
            `
          )}
        </div>
      </div>
    `;
  }
  _selectItem(e, selectedItem, index) {
    if (!selectedItem.selected) {
      this._unselectItem();
      selectedItem.selected = true;
      this.requestUpdate();
    }
    this.dispatchEvent(
      new CustomEvent('on-select-item', {
        detail: { ...selectedItem, index },
      })
    );
  }
  _unselectItem() {
    let itemFound = this.items.find(item => item.selected);
    if (itemFound) {
      itemFound.selected = false;
    }
  }
}
