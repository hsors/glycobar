import './style.css'
import { elisaPlateIcon, plateletBagIcon } from './shared/icons'
import { initSiteChrome, siteContact, siteFooter, siteHeader } from './shared/site'

/* An organ crossing the group barrier: the dashed wall is drawn with a gap
   where the arrow passes through it. */
const crossGroupIcon = `
  <svg class="figure-icon impact-icon" viewBox="0 0 48 40" role="img" aria-label="A donation crossing the blood group barrier">
    <path class="icon-barrier" d="M24 2v9M24 29v9" />
    <circle cx="10" cy="20" r="7.5" />
    <circle cx="38" cy="20" r="7.5" />
    <path d="M18.5 20h11m-3.5-3.5 3.5 3.5-3.5 3.5" />
    <text x="10" y="23.5">A</text>
    <text x="38" y="23.5">B</text>
  </svg>
`

/* Four group-locked inventories collapsing into a single one. */
const inventoryIcon = `
  <svg class="figure-icon impact-icon" viewBox="0 0 48 40" role="img" aria-label="Four separate inventories becoming one">
    <rect x="4" y="6" width="14" height="5" rx="1" />
    <rect x="4" y="14" width="14" height="5" rx="1" />
    <rect x="4" y="22" width="14" height="5" rx="1" />
    <rect x="4" y="30" width="14" height="5" rx="1" />
    <path d="M22 20.5h6m-2.5-3.5 3.5 3.5-3.5 3.5" />
    <rect class="icon-solid" x="33" y="12" width="12" height="17" rx="1.5" />
  </svg>
`

/* A glycan branching into new structures — the square, circle and triangle
   are the same sugar shapes used in the hero figure. */
const newTherapyIcon = `
  <svg class="figure-icon impact-icon" viewBox="0 0 48 40" role="img" aria-label="A glycan branching into new therapeutic structures">
    <path d="M24 20 12 11M24 20l12-9M24 20v12" />
    <rect class="icon-solid" x="5.5" y="4" width="10" height="10" rx="1" />
    <circle class="icon-solid" cx="36.5" cy="9" r="5" />
    <path class="icon-solid" d="M24 29l5.5 9.5h-11z" />
    <circle class="icon-solid" cx="24" cy="20" r="5" />
  </svg>
`

const flowTip = `
  <svg class="flow-tip" viewBox="0 0 12 10" aria-hidden="true">
    <path d="M1 1.5 6 8l5-6.5" />
  </svg>
`

/* Points right, not down: it marks "results in" inside a card, and a downward
   arrow beside "Lives saved" would read as a decline. */
const outcomeArrow = `
  <svg class="outcome-arrow" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7h8m-4-4 4 4-4 4" />
  </svg>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${siteHeader('impact')}

  <main class="subpage-main" id="top">
    <section class="impact page-panel" aria-labelledby="impact-heading">
      <div class="section-shell">
        <div class="section-heading page-heading reveal">
          <div>
            <p class="eyebrow">Our impact</p>
            <h1 id="impact-heading">What changes when the ligand stops being the bottleneck</h1>
          </div>
          <p>It starts with one enabling layer. Below it, the three things that layer makes possible — and the programmes we are already building out of it.</p>
        </div>

        <div class="impact-stack">
          <div class="impact-base reveal">
            <div class="impact-base-copy">
              <p class="eyebrow eyebrow-light">The foundation</p>
              <h2>Ligands within reach, on a support that competes on cost</h2>
              <p>Bacterial biofermentation puts A and B antigen ligands within industrial reach, and our patented chemistry fixes them covalently onto cellulosic media, or onto other supports such as chromatography resins, at economics the market can adopt.</p>
            </div>
            <ul class="impact-base-keys">
              <li><span>Ligand</span><strong>ABO tetraose at industrial scale</strong></li>
              <li><span>Graft</span><strong>Covalent, patented chemistry</strong></li>
              <li><span>Support</span><strong>Cellulose, chromatography resins</strong></li>
            </ul>
          </div>

          <div class="impact-flow" aria-hidden="true">
            <span class="flow-label">Which unlocks</span>
            <div class="flow-rails flow-rails-3">
              <span class="flow-rail">${flowTip}</span>
              <span class="flow-rail">${flowTip}</span>
              <span class="flow-rail">${flowTip}</span>
            </div>
          </div>

          <div class="impact-tier impact-tier-3">
            <article class="impact-card reveal">
              <div class="impact-card-head">
                <span class="card-index">01</span>
                <p class="eyebrow">Transplantation</p>
              </div>
              ${crossGroupIcon}
              <h2>Transplant across blood groups</h2>
              <p>Affinity columns designed using our ligands remove anti-A and anti-B antibodies from a patient’s blood; as a result, the organ donor’s blood type no longer needs to be compatible with that of the recipient.</p>
              <div class="impact-outcome">
                ${outcomeArrow}
                <div>
                  <span class="impact-outcome-label">Impact</span>
                  <strong>Lives saved</strong>
                </div>
              </div>
            </article>

            <article class="impact-card reveal">
              <div class="impact-card-head">
                <span class="card-index">02</span>
                <p class="eyebrow">Blood supply economics</p>
              </div>
              ${inventoryIcon}
              <h2>Limit wastage of blood components</h2>
              <p>Without a group constraint, units that would have expired unmatched stay usable. One inventory instead of four, less outdating, simpler logistics for every transfusion service.</p>
              <div class="impact-outcome">
                ${outcomeArrow}
                <div>
                  <span class="impact-outcome-label">Impact</span>
                  <strong>Lower operating cost for health systems</strong>
                </div>
              </div>
            </article>

            <article class="impact-card reveal">
              <div class="impact-card-head">
                <span class="card-index">03</span>
                <p class="eyebrow">Therapeutic innovation</p>
              </div>
              ${newTherapyIcon}
              <h2>De-risk and unlock new medicines</h2>
              <p>Stripping isoagglutinins takes the haemolytic risk out of high-value plasma-derived drugs such as IVIG, and opens therapies that could never have cleared that risk before.</p>
              <div class="impact-outcome">
                ${outcomeArrow}
                <div>
                  <span class="impact-outcome-label">Impact</span>
                  <strong>New therapeutic ground</strong>
                </div>
              </div>
            </article>
          </div>

          <div class="impact-flow" aria-hidden="true">
            <span class="flow-label">And the platform goes further</span>
            <div class="flow-rails flow-rails-2">
              <span class="flow-rail">${flowTip}</span>
              <span class="flow-rail">${flowTip}</span>
            </div>
          </div>

          <div class="impact-tier impact-tier-2">
            <article class="impact-card impact-card-next reveal">
              <div class="impact-card-head">
                <p class="eyebrow">R&amp;D &middot; Diagnostics</p>
                <span class="partner-badge">PoC demonstrated</span>
              </div>
              ${elisaPlateIcon('impact-icon')}
              <h2>ELISA titration plate</h2>
              <p>Our ligands coat a 96-well plate that reads isoagglutinin titres quantitatively, replacing manual tube and gel-card work — for plasmapheresis monitoring, IVIG release and routine quality control.</p>
              <div class="impact-outcome">
                ${outcomeArrow}
                <div>
                  <span class="impact-outcome-label">Impact</span>
                  <strong>More titres per shift, at a fraction of the cost</strong>
                </div>
              </div>
            </article>

            <article class="impact-card impact-card-next reveal">
              <div class="impact-card-head">
                <p class="eyebrow">R&amp;D &middot; Blood components</p>
                <span class="partner-badge">PoC demonstrated</span>
              </div>
              ${plateletBagIcon('impact-icon')}
              <h2>Universal platelets</h2>
              <p>Grafted inside the storage bag, our ligands clear anti-A and anti-B from the plasma a platelet unit sits in. On a component that expires within seven days, that is where the matching constraint costs most.</p>
              <div class="impact-outcome">
                ${outcomeArrow}
                <div>
                  <span class="impact-outcome-label">Impact</span>
                  <strong>Any platelet unit, to any patient</strong>
                </div>
              </div>
            </article>
          </div>

          <div class="impact-flow impact-flow-short" aria-hidden="true">
            <div class="flow-rails flow-rails-1">
              <span class="flow-rail">${flowTip}</span>
            </div>
          </div>

          <div class="impact-conclusion reveal">
            <p class="eyebrow">Where it leads</p>
            <strong>A standard of care that no longer stops at the blood group</strong>
          </div>
        </div>
      </div>
    </section>

    ${siteContact()}
  </main>

  ${siteFooter()}
`

initSiteChrome()
