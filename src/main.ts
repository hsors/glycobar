import './style.css'
import plantExterior from './assets/brand/plant-exterior.png'
import thermoFisherLogo from './assets/partners/thermo-fisher.svg'
import nhsbtLogo from './assets/partners/nhsbt.svg'
import vitrosorbLogo from './assets/partners/vitrosorb.png'
import cytosorbentsLogo from './assets/partners/cytosorbents.svg'
import cnrsLogo from './assets/partners/cnrs.svg'
import henriSorsPhoto from './assets/team/henri-sors.jpg'
import bernardMandrandPhoto from './assets/team/bernard-mandrand.png'
import vivienDeloulePhoto from './assets/team/vivien-deloule.png'
import ludovicBastidePhoto from './assets/team/ludovic-bastide.png'
import jacquelineHuetPhoto from './assets/team/jacqueline-huet.png'
import davidCuccoloPhoto from './assets/team/david-cuccolo.jpg'
import alexandreConroyPhoto from './assets/team/alexandre-conroy.png'
import vivienSayvePhoto from './assets/team/vivien-sayve.png'
import guyRigaudPhoto from './assets/team/guy-rigaud.png'
import { arrowIcon } from './shared/icons'
import { applicationGrid, pipelineTable } from './shared/pipeline'
import { initSiteChrome, siteContact, siteFooter, siteHeader } from './shared/site'

const antiAGlycan = `
  <svg class="glycan-figure" viewBox="0 0 640 360" role="img" aria-labelledby="glycan-title glycan-desc">
    <title id="glycan-title">Glycan ligand covalently grafted onto cellulose</title>
    <desc id="glycan-desc">An elegant molecular abstraction showing the supplied ABO glycan ligand on the left, a short covalent linker and a compact cellulose wall on the right.</desc>

    <defs>
      <linearGradient id="ligand-stroke" x1="20" y1="0" x2="425" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8c6138" stop-opacity=".48" />
        <stop offset=".72" stop-color="#c5996b" stop-opacity=".9" />
        <stop offset="1" stop-color="#e4d2be" />
      </linearGradient>
      <linearGradient id="wall-fill" x1="440" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#a87b4c" stop-opacity=".12" />
        <stop offset=".45" stop-color="#714d2c" stop-opacity=".22" />
        <stop offset="1" stop-color="#3d2410" stop-opacity=".04" />
      </linearGradient>
      <radialGradient id="graft-core" cx="50%" cy="50%" r="50%">
        <stop stop-color="#faf6f1" />
        <stop offset=".35" stop-color="#d3b694" />
        <stop offset="1" stop-color="#8c6138" stop-opacity=".15" />
      </radialGradient>
      <filter id="graft-glow" x="-180%" y="-180%" width="460%" height="460%">
        <feGaussianBlur stdDeviation="7" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    <g class="ligand-assembly" aria-hidden="true">
      <path class="ligand-backbone" d="M22 180h42m54 0h42m54 0h42" />
      <path class="ligand-backbone" d="M187 153V111" />

      <g class="sugar-node" transform="translate(91 180)">
        <rect class="sugar-gal" x="-27" y="-27" width="54" height="54" rx="2" />
      </g>
      <g class="sugar-node" transform="translate(187 180)">
        <circle class="sugar-gal" r="27" />
      </g>
      <g class="sugar-node" transform="translate(187 81)">
        <path class="sugar-fuc" d="M0-30 28 20h-56z" />
      </g>
      <g class="sugar-node" transform="translate(283 180)">
        <circle class="sugar-glc" r="27" />
      </g>

      <g class="spacer-arm">
        <path d="M310 180h18l10-13 14 26 14-26 14 13h20" />
        <circle cx="328" cy="180" r="2.5" /><circle cx="352" cy="193" r="2.5" />
      </g>
    </g>

    <g class="graft-junction" aria-hidden="true">
      <path class="graft-link" d="M400 180h28" />
      <circle class="graft-halo" cx="430" cy="180" r="24" />
      <circle class="graft-ring" cx="430" cy="180" r="12" />
      <circle class="graft-core" cx="430" cy="180" r="3.5" />
      <path class="graft-bond" d="M422 180h16m-8-8v16" />
      <path class="graft-orbit" d="M413 168a21 21 0 0 1 34 3M447 193a21 21 0 0 1-34 0" />
    </g>

    <g class="cellulose-wall" aria-hidden="true">
      <path class="wall-fill" d="M458 43c24 8 30 4 48 0h134v274H506c-18-5-27-8-48 0 8-48 9-91 0-137 9-46 8-89 0-137z" />
      <path class="wall-surface" d="M459 43c13 45 13 91 0 137 13 46 13 92 0 137" />

      <g class="wall-fibers">
        <path d="M467 72c45 8 103-9 173 1M465 104c51-7 108 8 175 0M463 136c50 8 111-8 177 1M461 180c54-7 110 8 179 0M463 224c52 8 111-8 177 1M465 256c49-7 108 8 175 0M467 288c45 8 102-9 173 1" />
      </g>

      <g class="cellulose-units">
        <g transform="translate(490 104)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(535 100)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(580 104)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(625 101)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>

        <g transform="translate(482 180)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(527 184)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(572 180)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(617 184)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>

        <g transform="translate(490 256)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(535 252)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(580 256)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
        <g transform="translate(625 253)"><path d="m-14 0 7-12H7l7 12-7 12H-7z" /><path d="M7-12l6-7M14 0l8 2" /><circle cx="-14" r="2" /></g>
      </g>

      <g class="wall-crosslinks">
        <path d="M505 117v50M550 113v58M595 117v50M505 197v47M550 197v43M595 197v47" />
        <circle cx="505" cy="142" r="1.5" /><circle cx="550" cy="142" r="1.5" /><circle cx="595" cy="142" r="1.5" />
        <circle cx="505" cy="220" r="1.5" /><circle cx="550" cy="220" r="1.5" /><circle cx="595" cy="220" r="1.5" />
      </g>
    </g>

    <g class="diagram-labels" aria-hidden="true">
      <text x="72" y="244">ABO GLYCAN LIGAND</text>
      <text class="label-emphasis" x="377" y="229">COVALENT GRAFT</text>
      <text x="496" y="337">CELLULOSE SUPPORT</text>
      <path d="M114 231v-18M430 216v-15M544 324v-18" />
    </g>
  </svg>
`

const team = [
  {
    name: 'Henri Sors',
    nickname: 'The seasoned entrepreneur',
    role: 'Co-founder & CEO',
    bio: 'Background of EE engineering + MBA. 25 years with Hewlett-Packard.',
    photo: henriSorsPhoto,
  },
  {
    name: 'Bernard Mandrand',
    nickname: 'The idea wrangler',
    role: 'Co-founder & scientific manager',
    bio: '33 years at bioMérieux and 7 years at Lyonbiopole as head of research programs.',
    photo: bernardMandrandPhoto,
  },
  {
    name: 'Vivien Deloule',
    nickname: 'The multitasking specialist',
    role: 'Operations manager',
    bio: 'Engineering degree and PhD. Balances lab logistics, supply chain nightmares, and frantic grant deadlines without breaking a sweat.',
    photo: vivienDeloulePhoto,
  },
  {
    name: 'Ludovic Bastide',
    nickname: 'The bacteria whisperer',
    role: 'Technical manager',
    bio: 'PhD in microbiology. Transforms biology madness into structured workflows while keeping everyone (mostly) sane.',
    photo: ludovicBastidePhoto,
  },
  {
    name: 'Jacqueline Huet',
    nickname: 'The compliance gatekeeper',
    role: 'Quality manager',
    bio: 'Operational support for technology SMEs and start-ups. Trained at the École Nationale Supérieure de Chimie Industrielle de Rouen.',
    photo: jacquelineHuetPhoto,
  },
  {
    name: 'David Cuccolo',
    nickname: 'The human calculator',
    role: 'Financial manager',
    bio: 'Speaks fluent Excel, sees the future in cash flow, and ensures the company doesn’t go broke.',
    photo: davidCuccoloPhoto,
  },
]

/* Advisors are outside the company, so they carry no nickname — the card just
   drops that line. */
const advisors = [
  {
    name: 'Alexandre Conroy',
    role: 'Independent Board Director',
    bio: 'Former BD Executive Vice President. 30 years of international leadership across MedTech, Life Sciences and drug-device businesses.',
    photo: alexandreConroyPhoto,
  },
  {
    name: 'Vivien Sayve',
    role: 'Managing Partner, Iron Hands Capital',
    bio: 'Deeptech investor.',
    photo: vivienSayvePhoto,
  },
  {
    name: 'Guy Rigaud',
    role: 'Supervisory Board member, Kalray',
    bio: '',
    photo: guyRigaudPhoto,
  },
]

const memberCards = (members: { name: string; nickname?: string; role: string; bio: string; photo: string }[]) =>
  members
    .map(
      ({ name, nickname, role, bio, photo }) => `
          <li class="team-card reveal">
            <div class="team-card-head">
              <img class="team-photo" src="${photo}" alt="${name}" width="88" height="88" loading="lazy" />
              <div>
                <h3>${name}</h3>${nickname ? `
                <p class="team-nickname">“${nickname}”</p>` : ''}
              </div>
            </div>
            <p class="team-role">${role}</p>${bio ? `
            <p class="team-bio">${bio}</p>` : ''}
          </li>`,
    )
    .join('')

const teamCards = memberCards(team)
const advisorCards = memberCards(advisors)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${siteHeader('home')}

  <main id="top">
    <section class="hero page-panel">
      <div class="hero-shell">
        <div class="hero-copy reveal">
          <p class="eyebrow eyebrow-light">Blood group antigen ligands · Made in France</p>
          <h1>Make universal blood plasma available at scale</h1>
          <p class="hero-lead">We engineer and manufacture high-affinity blood group antigen ligands to remove anti-A and anti-B antibodies.</p>
          <div class="hero-actions">
            <a class="button button-light" href="#technology">Our technology ${arrowIcon}</a>
            <a class="button button-outline" href="#pipeline">Explore the pipeline</a>
          </div>
        </div>

        <div class="hero-science reveal" aria-label="ABO glycan ligand covalently grafted onto a cellulose wall">
          ${antiAGlycan}
        </div>
      </div>
    </section>

    <section class="manifesto page-panel" id="company">
      <div class="section-shell manifesto-grid">
        <p class="section-number">01 / Company</p>
        <div class="manifesto-copy reveal">
          <p class="eyebrow">Born at the CNRS &middot; Seventeen years of research</p>
          <h2>French expertise in glycan and cellulose binding, turned into competitive ligands</h2>
          <p class="manifesto-lead">Our technology comes out of CNRS laboratories, where seventeen years of research on bacterial glycan synthesis and cellulose-binding chemistry were carried out before being transferred to industrial scale.</p>
          <p>Our multidisciplinary team connects bacterial biofermentation, glycan chemistry and grafting onto cellulose and other supports in one integrated platform. The result: consistent performance, industrial quantities and economics designed for broad access.</p>
        </div>
        <div class="manifesto-stat reveal">
          <strong>17</strong>
          <span>years advancing glycan<br />and cellulose binding</span>
          <strong class="manifesto-stat-secondary"><img src="${cnrsLogo}" alt="CNRS" /></strong>
          <span>research origin of the<br />ligand and grafting technology</span>
        </div>
      </div>
    </section>

    <section class="team" id="team" aria-labelledby="team-heading">
      <div class="section-shell">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">Company</p>
            <h2 id="team-heading">Our team</h2>
          </div>
        </div>

        <ul class="team-grid">${teamCards}
        </ul>

        <div class="section-heading team-subheading reveal">
          <div>
            <h2 id="advisory-heading">Advisory board</h2>
          </div>
        </div>

        <ul class="team-grid" aria-labelledby="advisory-heading">${advisorCards}
        </ul>
      </div>
    </section>

    <section class="proof-band page-panel" aria-labelledby="proof-heading">
      <div class="section-shell">
        <div class="section-heading proof-heading reveal">
          <div>
            <p class="eyebrow">References</p>
            <h2 id="proof-heading">Customers and research partners</h2>
          </div>
        </div>

        <div class="logo-grid reveal">
          <div class="logo-cell"><img src="${thermoFisherLogo}" alt="Thermo Fisher Scientific" /></div>
          <div class="logo-cell"><img src="${nhsbtLogo}" alt="NHS Blood and Transplant" /></div>
          <div class="logo-cell"><img src="${vitrosorbLogo}" alt="VitroSorb" /></div>
          <div class="logo-cell"><img src="${cytosorbentsLogo}" alt="CytoSorbents" /></div>
        </div>
      </div>
    </section>

    <section class="technology page-panel" id="technology" aria-labelledby="technology-heading">
      <div class="section-shell">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">Protected intellectual property</p>
            <h2 id="technology-heading">Our multi-patented technologies</h2>
          </div>
        </div>

        <div class="technology-grid">
          <article class="tech-card reveal">
            <div class="tech-card-content">
              <div class="tech-card-top">
                <div>
                  <span class="card-index">01</span>
                  <p class="eyebrow">The ligand</p>
                </div>
              </div>
              <svg class="tech-process-figure ligand-only-figure" viewBox="0 0 320 122" role="img" aria-label="ABO antigen ligand without linker">
                <g class="process-antigen" transform="translate(50 0)" aria-hidden="true">
                  <path d="M40 60h38m44 0h38m44 0h38M100 38V17" />
                  <rect class="sugar-gal" x="14" y="38" width="44" height="44" rx="2" />
                  <circle class="sugar-gal" cx="100" cy="60" r="22" />
                  <path class="sugar-fuc" d="M100 4l21 35H79z" />
                  <circle class="sugar-glc" cx="182" cy="60" r="22" />
                </g>
                <g class="process-caption" transform="translate(50 0)" aria-hidden="true">
                  <text x="14" y="112">ABO ANTIGEN</text>
                  <path d="M77 105h127" />
                </g>
              </svg>
              <h3>ABO antigens</h3>
              <p>A and B tetraose antigens produced by bacterial biofermentation. At this stage, the glycan is isolated — without a linker or support.</p>
              <dl class="tech-specs">
                <div><dt>Process</dt><dd>Bacterial biofermentation</dd></div>
                <div><dt>Output</dt><dd>Purified ABO tetraose</dd></div>
                <div><dt>Function</dt><dd>Antibody recognition</dd></div>
              </dl>
              <div class="card-mark">
                <svg class="card-mark-seal patent-seal" viewBox="0 0 64 64" role="img" aria-label="Patented technology">
                  <path class="patent-seal-shield" d="M32 4 56 13v20c0 14-10 23-24 27C18 56 8 47 8 33V13z" />
                  <path class="patent-seal-check" d="M22 32.5l7.5 7.5L43 26" />
                </svg>
                <div class="card-mark-copy">
                  <span class="card-mark-head">Protected</span>
                  <strong class="card-mark-title">Patented technology</strong>
                  <span class="card-mark-note">ABO tetraose ligand production</span>
                </div>
              </div>
            </div>
          </article>

          <article class="tech-card reveal">
            <div class="tech-card-content">
              <div class="tech-card-top">
                <div>
                  <span class="card-index">02</span>
                  <p class="eyebrow">The ligand</p>
                </div>
              </div>
              <svg class="tech-process-figure linker-figure" viewBox="0 0 320 122" role="img" aria-label="The ABO antigen receives an amine-terminated spacer arm">
                <g transform="translate(46 0)">
                  <g class="process-antigen" aria-hidden="true">
                    <path d="M18 55h24m34 0h24m34 0h18M59 38V21" />
                    <rect class="sugar-gal" x="4" y="38" width="28" height="34" rx="2" />
                    <circle class="sugar-gal" cx="59" cy="55" r="17" />
                    <path class="sugar-fuc" d="M59 10l16 28H43z" />
                    <circle class="sugar-glc" cx="117" cy="55" r="17" />
                  </g>
                  <g class="process-addition" aria-hidden="true">
                    <path d="M134 55h15l8-10 10 20 11-20 11 10h22" />
                    <circle cx="149" cy="55" r="2.5" /><circle cx="167" cy="65" r="2.5" />
                    <circle class="process-anchor" cx="215" cy="55" r="8" />
                    <path d="M211 55h8m-4-4v8" />
                  </g>
                  <g class="process-caption" aria-hidden="true">
                    <text x="4" y="114">ANTIGEN</text><text class="process-caption-added" x="146" y="114">+ LINKER</text>
                  </g>
                </g>
              </svg>
              <h3>ABO antigen ligands</h3>
              <p>We add an amine-terminated spacer arm to the antigen.</p>
              <dl class="tech-specs">
                <div><dt>Addition</dt><dd>Amine-terminated arm</dd></div>
                <div><dt>Output</dt><dd>Linker-bearing ABO antigen</dd></div>
                <div><dt>Function</dt><dd>Attachment to the support</dd></div>
              </dl>
              <div class="card-mark">
                <svg class="card-mark-seal patent-seal" viewBox="0 0 64 64" role="img" aria-label="Patented technology">
                  <path class="patent-seal-shield" d="M32 4 56 13v20c0 14-10 23-24 27C18 56 8 47 8 33V13z" />
                  <path class="patent-seal-check" d="M22 32.5l7.5 7.5L43 26" />
                </svg>
                <div class="card-mark-copy">
                  <span class="card-mark-head">Protected</span>
                  <strong class="card-mark-title">Patented technology</strong>
                  <span class="card-mark-note">ABO ligand functionalisation</span>
                </div>
              </div>
            </div>
          </article>

          <article class="tech-card reveal">
            <div class="tech-card-content">
              <div class="tech-card-top">
                <div>
                  <span class="card-index">03</span>
                  <p class="eyebrow">The connection</p>
                </div>
              </div>
              <svg class="tech-process-figure grafted-figure" viewBox="0 0 320 122" role="img" aria-label="The ABO antigen receives an amine linker and is covalently grafted onto cellulose">
                <g class="process-antigen" aria-hidden="true">
                  <path d="M18 55h24m34 0h24m34 0h18M59 38V21" />
                  <rect class="sugar-gal" x="4" y="38" width="28" height="34" rx="2" />
                  <circle class="sugar-gal" cx="59" cy="55" r="17" />
                  <path class="sugar-fuc" d="M59 10l16 28H43z" />
                  <circle class="sugar-glc" cx="117" cy="55" r="17" />
                </g>
                <g class="process-addition" aria-hidden="true">
                  <path d="M134 55h15l8-10 10 20 11-20 11 10h22" />
                  <circle cx="149" cy="55" r="2.5" /><circle cx="167" cy="65" r="2.5" />
                  <circle class="process-anchor" cx="215" cy="55" r="8" />
                  <path d="M211 55h8m-4-4v8M223 55h16" />
                </g>
                <g class="process-wall" aria-hidden="true">
                  <path class="process-wall-fill" d="M240 13c8 14 8 28 0 42 8 15 8 29 0 44h80V13z" />
                  <path class="process-wall-edge" d="M240 13c8 14 8 28 0 42 8 15 8 29 0 44" />
                  <path d="M248 26h72M246 44h74M246 66h74M248 84h72" />
                  <circle cx="266" cy="35" r="7" /><circle cx="293" cy="35" r="7" />
                  <circle cx="266" cy="75" r="7" /><circle cx="293" cy="75" r="7" />
                </g>
                <g class="process-caption" aria-hidden="true">
                  <text x="4" y="114">ANTIGEN</text><text class="process-caption-added" x="146" y="114">+ LINKER</text><text x="249" y="114">CELLULOSE</text>
                </g>
              </svg>
              <h3>Grafting onto supports</h3>
              <p>We covalently anchor the functionalised ligand onto cellulose, or onto other supports such as chromatography resins.</p>
              <dl class="tech-specs">
                <div><dt>Addition</dt><dd>Amine-terminated arm</dd></div>
                <div><dt>Bond</dt><dd>Covalent grafting</dd></div>
                <div><dt>Support</dt><dd>Cellulose, chromatography resins</dd></div>
              </dl>
              <div class="card-mark">
                <svg class="card-mark-seal patent-seal" viewBox="0 0 64 64" role="img" aria-label="Patented technology">
                  <path class="patent-seal-shield" d="M32 4 56 13v20c0 14-10 23-24 27C18 56 8 47 8 33V13z" />
                  <path class="patent-seal-check" d="M22 32.5l7.5 7.5L43 26" />
                </svg>
                <div class="card-mark-copy">
                  <span class="card-mark-head">Protected</span>
                  <strong class="card-mark-title">Patented technology</strong>
                  <span class="card-mark-note">Glycan grafting onto supports</span>
                </div>
              </div>
            </div>
          </article>

          <article class="tech-card industrial-card reveal">
            <div class="tech-card-content">
              <div class="tech-card-top">
                <div>
                  <span class="card-index">04</span>
                  <p class="eyebrow">The Manufacturing process</p>
                </div>
              </div>
              <svg class="tech-process-figure manufacturing-figure" viewBox="0 0 320 122" role="img" aria-label="Precision fermentation followed by purification and final batch production">
                <g class="process-equipment" aria-hidden="true">
                  <path d="M37 26h62M45 26v8h46v-8M45 34v35c0 14 10 22 23 22s23-8 23-22V34" />
                  <path d="M68 13v13M58 13h20M68 34v35M58 54h20" />
                  <circle cx="57" cy="43" r="2.5" /><circle cx="79" cy="47" r="2" /><circle cx="58" cy="67" r="2" />
                  <path d="M45 55h-8v13h8M91 47h10v18" />

                  <path d="M118 35h45v50h-45zM123 45h35M123 55h35M123 65h35M123 75h35" />
                  <path d="M140.5 25v10M134 25h13" />

                  <path d="M215 39h48v38c0 8-6 14-14 14h-20c-8 0-14-6-14-14z" />
                  <path d="M211 39h56M226 39v-9h26v9M224 58h30M224 68h30" />
                  <path d="M263 53h10v20h-10" />
                </g>
                <g class="process-flow" aria-hidden="true">
                  <path d="M101 60h17M163 60h52" />
                  <path d="m112 56 6 4-6 4M209 56l6 4-6 4" />
                </g>
                <g class="process-caption" aria-hidden="true">
                  <text x="39" y="114">FERMENTATION</text><text x="116" y="114">PURIFICATION</text><text x="218" y="114">FINAL BATCH</text>
                </g>
              </svg>
              <h3>Precision fermentation</h3>
              <p>Audited production in Grenoble, with qualified batches supplied to international customers.</p>
              <dl class="tech-specs">
                <div><dt>Facility</dt><dd>450 m² Grenoble (France)</dd></div>
                <div><dt>Capacity</dt><dd>Multi-kg per year</dd></div>
                <div><dt>Quality</dt><dd>ISO 9001 quality system</dd></div>
              </dl>
              <div class="card-mark">
                <svg class="card-mark-seal quality-seal" viewBox="0 0 64 64" role="img" aria-label="ISO 9001 certified">
                  <circle class="quality-seal-ring" cx="32" cy="32" r="30" />
                  <circle class="quality-seal-ring quality-seal-ring-inner" cx="32" cy="32" r="25.5" />
                  <text class="quality-seal-top" x="32" y="27">ISO</text>
                  <text class="quality-seal-main" x="32" y="43">9001</text>
                  <path class="quality-seal-rule" d="M22 48.5h20" />
                </svg>
                <div class="card-mark-copy">
                  <span class="card-mark-head">Certified</span>
                  <strong class="card-mark-title">ISO 9001:2015</strong>
                  <span class="card-mark-note">Quality management system</span>
                </div>
              </div>
            </div>
            <figure class="tech-photo">
              <img src="${plantExterior}" alt="GlycoBAR production facility in Grenoble, France" />
              <figcaption>Grenoble · France</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>

    <section class="products page-panel" id="pipeline" aria-labelledby="products-heading">
      <div class="section-shell">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">Product</p>
            <h2 id="products-heading">Our products are already used by top pharma companies</h2>
          </div>
          <p>The A and B antigen sugars behind them — tri-, tetra- and hexa-saccharides — are listed in the catalogue. <a class="text-link" href="/products/">See the full catalogue ${arrowIcon}</a></p>
        </div>


        ${applicationGrid()}

      </div>
    </section>

    <section class="pipeline page-panel" id="development" aria-labelledby="pipeline-heading">
      <div class="section-shell">
        <div class="stage-marker stage-marker-next reveal">
          <span class="stage-step">Stage 02 — Next</span>
          <div class="stage-copy">
            <h3>What we are building on top of it</h3>
            <p>R&amp;D programmes with proof of concept already demonstrated, now looking for industrial and commercial partners.</p>
          </div>
        </div>

        ${pipelineTable()}
      </div>
    </section>

    ${siteContact()}
  </main>

  ${siteFooter()}
`

initSiteChrome({ heroTrigger: '#company' })
