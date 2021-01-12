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

  it('unselect item', async () => {
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
      }
    ];
    const el = await fixture(
      html`<navigation-bar .items="${items}"></navigation-bar>`
    );
    el.unselectItem();
    let itemFound = items.find(item => item.selected);
    expect(itemFound).to.equal(undefined);
  });

  it('select item', async () => {
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
      }
    ];
    const el = await fixture(
      html`<navigation-bar .items="${items}"></navigation-bar>`
    );
    el.selectItem(
      null,
      {
        urlImg: img,
        urlImgActive: imgActive,
        label: 'Desc',
        selected: false,
      },
      1
    );
    console.log(el.items);
    let itemFound = el.items.find(item => item.selected);
    console.log('item encontrado',itemFound);
  
    expect(itemFound.selected).to.equal(true);
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
