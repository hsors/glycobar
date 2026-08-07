import './style.css'
import { arrowIcon } from './shared/icons'
import { comparisonGlycans, coreProducts, otherProducts, type CatalogueItem } from './shared/catalogue'
import { glycanSymbols } from './shared/glycan'
import { applicationGrid, pipelineTable } from './shared/pipeline'
import { initSiteChrome, siteContact, siteFooter, siteHeader } from './shared/site'

/* Each card holds both representations and its own stage decides which one is
   painted, so a reader can put two drawings of different kinds side by side. */
const catalogueCard = (item: CatalogueItem, featured = false) => `
  <article class="catalogue-card${featured ? ' is-featured' : ''} reveal">
    <div class="catalogue-card-head">
      <span class="group-badge group-${item.group.toLowerCase()}">Group ${item.group}</span>
      <span class="chain-tag">${item.chain}</span>
    </div>

    <div class="glycan-stage" data-view="symbol">
      <div class="glycan-view symbol-view">
        ${glycanSymbols(item.glycan)}
      </div>
      <button
        class="glycan-view structure-view"
        type="button"
        data-structure="${item.structure}"
        data-structure-caption="${item.name} — ${item.chain}"
        aria-label="Enlarge the structure of ${item.name}"
      >
        <img src="${item.structure}" alt="Chemical structure of the ${item.name.toLowerCase()}" loading="lazy" />
        <span class="structure-zoom" aria-hidden="true">Enlarge</span>
      </button>
      <div class="stage-toggle" role="group" aria-label="How ${item.name} is drawn">
        <button type="button" data-view-option="symbol" aria-pressed="true">Symbol</button>
        <button type="button" data-view-option="structure" aria-pressed="false">Structure</button>
      </div>
    </div>

    <h3>${item.name}</h3>
    <p>${item.note}</p>

    <dl class="tech-specs catalogue-specs">
      <div><dt>Residues</dt><dd>${item.residues}</dd></div>
      <div><dt>Termination</dt><dd>${item.termination}</dd></div>
      <div><dt>Supply</dt><dd>Any quantity</dd></div>
    </dl>
  </article>
`

/* The claim this diagram carries comes straight from the catalogue: the
   tetraose plus its linker arm reaches about as far as the natural
   hexa-saccharide antigen, with two fewer sugars to synthesise. */
const reachRow = (
  label: string,
  sublabel: string,
  sugars: number,
  linker: number,
  note: string,
  emphasis = false,
) => `
  <div class="reach-row${emphasis ? ' is-emphasis' : ''}">
    <div class="reach-label">
      <strong>${label}</strong>
      <span>${sublabel}</span>
    </div>
    <div class="reach-track">
      <span class="reach-seg reach-sugar" style="--units:${sugars}">${sugars} sugars</span>
      ${linker ? `<span class="reach-seg reach-linker" style="--units:${linker}">linker arm</span>` : ''}
    </div>
    <span class="reach-note">${note}</span>
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${siteHeader('products')}

  <main class="subpage-main" id="top">
    <section class="catalogue page-panel" data-catalogue aria-labelledby="catalogue-heading">
      <div class="section-shell">
        <div class="section-heading page-heading reveal">
          <div>
            <p class="eyebrow">Product &amp; pipeline</p>
            <h1 id="catalogue-heading">Commercial antigen products</h1>
          </div>
        </div>

        <div class="catalogue-block reveal">
          <p class="eyebrow">Core products</p>
          <h2>A and B tetraose sugars</h2>
          <p class="catalogue-lede">The standard form carries an amine termination on a linker arm, giving the molecule approximately the same length as the hexa-saccharide antigens naturally attached to erythrocytes.</p>
        </div>

        <div class="catalogue-grid catalogue-core">
          ${coreProducts.map((item) => catalogueCard(item, true)).join('')}
        </div>

        <div class="catalogue-block catalogue-block-more reveal">
          <p class="eyebrow">Also available</p>
          <h2>Other blood group antigen sugars</h2>
        </div>

        <div class="catalogue-grid catalogue-more">
          ${otherProducts.map((item) => catalogueCard(item)).join('')}
        </div>
      </div>
    </section>

    <section class="reading page-panel" aria-labelledby="reading-heading">
      <div class="section-shell">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">Reading the catalogue</p>
            <h2 id="reading-heading">Two things the structures do not say out loud</h2>
          </div>
          <p>The same six molecules, drawn to answer the two questions customers actually ask: how far does the ligand reach, and what separates an A product from a B one.</p>
        </div>

        <div class="reading-grid">
          <article class="reading-card reveal">
            <div class="reading-card-head">
              <span class="card-index">01</span>
              <p class="eyebrow">Reach</p>
            </div>
            <h3>Four sugars and an arm, not six sugars</h3>
            <p>The linker arm does the work the two missing residues would have done. The ligand presents the determinant at the same distance from its support, without paying to synthesise the spacer in sugar.</p>

            <div class="reach-chart" aria-label="Length comparison between the catalogue forms">
              ${reachRow('Natural antigen', 'On the erythrocyte', 6, 0, 'Reference')}
              ${reachRow('Hexa-saccharide', 'Catalogue', 6, 0, 'Matched in sugar')}
              ${reachRow('Tetraose + linker', 'Core product', 4, 2, 'Matched in reach', true)}
              ${reachRow('Tri-saccharide', 'Catalogue', 3, 1.5, 'Shorter determinant')}
              <div class="reach-axis" aria-hidden="true">
                <span class="reach-axis-mark">Natural antigen reach</span>
              </div>
            </div>
          </article>

          <article class="reading-card reveal">
            <div class="reading-card-head">
              <span class="card-index">02</span>
              <p class="eyebrow">A versus B</p>
            </div>
            <h3>One residue apart</h3>
            <p>Every A product and its B counterpart share an identical chain. Only the terminal residue changes — an N-acetylhexosamine instead of a hexose. That single acetyl group is the whole blood group barrier.</p>

            <div class="compare-stack">
              <div class="compare-row">
                <span class="group-badge group-a">Group A</span>
                ${glycanSymbols(comparisonGlycans.a, { className: 'glycan-compare', label: 'Blood group A tetraose, terminating in GalNAc' })}
              </div>
              <div class="compare-row">
                <span class="group-badge group-b">Group B</span>
                ${glycanSymbols(comparisonGlycans.b, { className: 'glycan-compare', label: 'Blood group B tetraose, terminating in Gal' })}
              </div>
              <p class="compare-note"><span class="compare-swatch" aria-hidden="true"></span>The solid residue is the only difference: GalNAc for A, Gal for B.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="products page-panel" id="applications" aria-labelledby="applications-heading">
      <div class="section-shell">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">Applications</p>
            <h2 id="applications-heading">Where these ligands are already at work</h2>
          </div>
          <p>Our customers build the devices, resins and drugs. We supply the antigen ligand — and, where they want it, graft it onto their own support.</p>
        </div>

        ${applicationGrid()}
      </div>
    </section>

    <section class="pipeline page-panel" id="pipeline" aria-labelledby="pipeline-heading">
      <div class="section-shell">
        <div class="stage-marker stage-marker-next reveal">
          <span class="stage-step">Stage 02 — Next</span>
          <div class="stage-copy">
            <h3>What we are building on top of it</h3>
            <p>R&amp;D programmes with proof of concept already demonstrated, now looking for industrial and commercial partners.</p>
          </div>
        </div>

        ${pipelineTable()}

        <div class="catalogue-cta reveal">
          <div>
            <p class="eyebrow">Quotation</p>
            <h3>Interested in one of these products?</h3>
          </div>
          <a class="button button-dark" href="mailto:contact@glycobar.com?subject=Quotation%20request">Request a quote ${arrowIcon}</a>
        </div>
      </div>
    </section>

    ${siteContact()}
  </main>

  ${siteFooter()}

  <dialog class="structure-dialog" data-structure-dialog aria-label="Chemical structure">
    <button class="structure-dialog-close" type="button" data-dialog-close aria-label="Close">
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" /></svg>
    </button>
    <img data-dialog-image alt="" />
    <p class="structure-dialog-caption" data-dialog-caption></p>
  </dialog>
`

initSiteChrome()

const catalogue = document.querySelector<HTMLElement>('[data-catalogue]')!

catalogue.querySelectorAll<HTMLElement>('.glycan-stage').forEach((stage) => {
  const options = stage.querySelectorAll<HTMLButtonElement>('[data-view-option]')

  options.forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.dataset.viewOption!
      stage.dataset.view = view
      options.forEach((option) => {
        option.setAttribute('aria-pressed', String(option.dataset.viewOption === view))
      })
    })
  })
})

/* The structure drawings are dense enough that they are unreadable at card
   width, so every one of them opens full size. */
const dialog = document.querySelector<HTMLDialogElement>('[data-structure-dialog]')!
const dialogImage = dialog.querySelector<HTMLImageElement>('[data-dialog-image]')!
const dialogCaption = dialog.querySelector<HTMLParagraphElement>('[data-dialog-caption]')!

document.querySelectorAll<HTMLButtonElement>('[data-structure]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const caption = trigger.dataset.structureCaption ?? ''
    dialogImage.src = trigger.dataset.structure!
    dialogImage.alt = `Chemical structure — ${caption}`
    dialogCaption.textContent = caption
    dialog.showModal()
  })
})

dialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog.close())

/* showModal() makes the backdrop part of the dialog's own box, so a click that
   lands on the element itself rather than its children is a backdrop click. */
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})
