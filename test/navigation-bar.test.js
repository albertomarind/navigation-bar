import { html, fixture, expect } from '@open-wc/testing';
import img from '/assets/images/image.png';
import imgActive from '/assets/images/image-active.png';
import '../navigation-bar.js';

describe('NavigationBar', () => {
  it('set items', async () => {
    let items = [
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: true,
      },
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: false,
      },
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: false,
      },
    ];
    const el = await fixture(
      html`<navigation-bar .items="${items}"></navigation-bar>`
    );
    expect(el.items).to.equal(items);
  });

  it('unselect item, change state true to false', async () => {
    let items = [
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: true,
      },
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: false,
      },
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: false,
      },
    ];
    const el = await fixture(
      html`<navigation-bar .items="${items}"></navigation-bar>`
    );
    el.unselectItem();
    let itemsSettedFalse = items.filter(item => !item.selected);
    expect(itemsSettedFalse.length).to.equal(3);
  });

  it('select item, change state false to true', async () => {
    let items = [
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: true,
      },
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: false,
      },
    ];
    const el = await fixture(
      html`<navigation-bar .items="${items}"></navigation-bar>`
    );
    el.selectItem(null, el.items[1], 1);
    expect(el.items[1].selected).to.equal(true);
  });

  it('select item, dont change state when item is already selected', async () => {
    let items = [
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: true,
      },
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: false,
      },
    ];
    const el = await fixture(
      html`<navigation-bar .items="${items}"></navigation-bar>`
    );
    el.selectItem(null, el.items[0], 0);
    expect(el.items[0].selected).to.equal(true);
  });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture(html`<navigation-bar></navigation-bar>`);
  //   el.shadowRoot.querySelector('button').click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el = await fixture(html`<navigation-bar title="attribute title"></navigation-bar>`);

  //   expect(el.title).to.equal('attribute title');
  // });

  // it('passes the a11y audit', async () => {
  //   const el = await fixture(html`<navigation-bar></navigation-bar>`);

  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
