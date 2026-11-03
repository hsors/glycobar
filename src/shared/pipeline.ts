import thermoFisherLogo from '../assets/partners/thermo-fisher.svg'
import nhsbtLogo from '../assets/partners/nhsbt.svg'
import vitrosorbLogo from '../assets/partners/vitrosorb.png'
import cytosorbentsLogo from '../assets/partners/cytosorbents.svg'
import grifolsLogo from '../assets/partners/grifols.png'
import { arrowIcon, elisaPlateIcon, plateletBagIcon } from './icons'

/* The applications grid and the R&D table appear on both the home page and the
   Product & Pipeline page, so they are written once here and the headings above
   them stay with each page. */

export const applicationGrid = () => `
  <div class="product-grid">
    <article class="product-card reveal">
      <span class="product-state market">CE-certified device</span>
      <h3><span class="card-index">01 /</span>Organ transplant across the blood barrier</h3>
      <p>GlycoBAR ligands sit inside an affinity column device that enables ABO-incompatible organ transplants, primarily kidneys. A commercial product, with real patients already treated.</p>
      <div class="product-art column-art" aria-hidden="true"><span></span><span></span></div>
      <div class="product-users">
        <span class="product-users-label">Used by</span>
        <div class="user-logos">
          <img src="${vitrosorbLogo}" alt="VitroSorb" />
        </div>
      </div>
      <a class="text-link" href="#contact">Discuss supply ${arrowIcon}</a>
    </article>

    <article class="product-card reveal">
      <span class="product-state pilot">Phase 3 clinical trials</span>
      <h3><span class="card-index">02 /</span>Universal IVIG drug</h3>
      <p>Resin manufacturers buy our ligands and graft them onto their affinity resins. Plasma fractionators then use those resins to produce an isoagglutinin-free IVIG drug, avoiding hemolytic adverse events and enabling a new class of drugs.</p>
      <div class="product-art resin-art" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="product-users">
        <span class="product-users-label">Used by</span>
        <div class="user-logos">
          <img src="${thermoFisherLogo}" alt="Thermo Fisher Scientific" />
          <img src="${grifolsLogo}" alt="Grifols" />
        </div>
      </div>
      <a class="text-link" href="#contact">Discuss supply ${arrowIcon}</a>
    </article>

    <article class="product-card reveal">
      <span class="product-state market">Regulatory-ready device</span>
      <h3><span class="card-index">03 /</span>Universal plasma</h3>
      <p>GlycoBAR ligands is used in filter device for universal plasma, developed for the US military and for hospitals. The product is ready for regulatory submission.</p>
      <div class="product-art filter-art" aria-hidden="true"><span></span><span></span></div>
      <div class="product-users">
        <span class="product-users-label">Used by</span>
        <div class="user-logos">
          <img src="${cytosorbentsLogo}" alt="CytoSorbents" />
        </div>
      </div>
      <a class="text-link" href="#contact">Discuss supply ${arrowIcon}</a>
    </article>

    <article class="product-card reveal">
      <span class="product-state market">On the market</span>
      <h3><span class="card-index">04 /</span>Ligand integration &amp; grafting</h3>
      <p>GlycoBAR helps its customers integrate its ligands into their own supports and devices, through its patented grafting technology.</p>
      <div class="product-art graft-art" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
      <div class="product-users">
        <span class="product-users-label">Used by all of our customers</span>
        <div class="user-logos">
          <img src="${thermoFisherLogo}" alt="Thermo Fisher Scientific" />
          <img src="${nhsbtLogo}" alt="NHS Blood and Transplant" />
          <img src="${vitrosorbLogo}" alt="VitroSorb" />
          <img src="${cytosorbentsLogo}" alt="CytoSorbents" />
        </div>
      </div>
      <a class="text-link" href="#contact">Develop with us ${arrowIcon}</a>
    </article>
  </div>
`

export const pipelineTable = () => `
  <div class="pipeline-table reveal" aria-label="Development pipeline">
    <div class="pipeline-title-row">
      <div>
        <p class="eyebrow">R&amp;D pipeline</p>
        <h2 id="pipeline-heading">Products ready for partnership development</h2>
      </div>
    </div>

    <div class="pipeline-labels" aria-hidden="true">
      <span>Programme</span><span>Objective</span><span>Progress</span><span>Maturity &amp; next step</span><span>Status</span>
    </div>
    <div class="pipeline-row">
      <div class="pipeline-programme">
        ${plateletBagIcon('pipeline-icon')}
        <div><strong>Universal platelets</strong><small>Blood component</small></div>
      </div>
      <p>Reduce ABO group constraints and simplify inventory across transfusion services.</p>
      <div class="progress" aria-label="Proof of concept reached"><span></span><span></span><span class="active" data-stage="Proof of concept"></span><span></span><span></span></div>
      <p class="maturity">PoC demonstrated strong results. <br /> Seeking a bag manufacturing partner to scale up and commercialise.</p>
      <span class="partner-badge">Seeking partner</span>
    </div>
    <div class="pipeline-row">
      <div class="pipeline-programme">
        ${elisaPlateIcon('pipeline-icon')}
        <div><strong>Antibody titration</strong><small>Diagnostic application</small></div>
      </div>
      <p>Quantify isoagglutinin titres for plasmapheresis, IVIG and quality control, on a standard 96-well ELISA support.</p>
      <div class="progress" aria-label="Proof of concept reached"><span></span><span></span><span class="active" data-stage="Proof of concept"></span><span></span><span></span></div>
      <p class="maturity">PoC demonstrated. <br /> Seeking a partner to scale up and commercialise.</p>
      <span class="partner-badge">Seeking partner</span>
    </div>
    <p class="pipeline-note">Both programmes have already demonstrated superior technical performance and lower implementation costs than existing approaches.</p>
  </div>
`
