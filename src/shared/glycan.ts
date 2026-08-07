/* SNFG-style glycan symbols — the schematic view of the catalogue.

   Symbol shapes follow the standard nomenclature: square = HexNAc,
   circle = hexose, triangle = deoxyhexose. The nomenclature separates GalNAc
   from GlcNAc by colour alone (yellow vs blue), which the clay palette cannot
   carry, so every residue is named underneath its symbol instead. */

export type Residue = {
  shape: 'square' | 'circle' | 'triangle'
  label: string
  /* the terminal residue that decides A from B — drawn solid so the single
     difference between the two families reads at a glance */
  defining?: boolean
}

export type Glycan = {
  /* non-reducing end first, so the chain reads left to right into the linker,
     matching the orientation of the structure drawings it toggles with */
  backbone: Residue[]
  /* linkages[i] joins backbone[i] to backbone[i + 1] */
  linkages: string[]
  branch?: { at: number; residue: Residue; linkage: string }
  /* tail label, e.g. NH₂ — omitted for the bare sugar forms */
  linker?: string
}

export const GAL: Residue = { shape: 'circle', label: 'Gal' }
export const GLC: Residue = { shape: 'circle', label: 'Glc' }
export const GLCNAC: Residue = { shape: 'square', label: 'GlcNAc' }
export const FUC: Residue = { shape: 'triangle', label: 'Fuc' }
export const GALNAC_A: Residue = { shape: 'square', label: 'GalNAc', defining: true }
export const GAL_B: Residue = { shape: 'circle', label: 'Gal', defining: true }

const RADIUS = 17
/* wide enough that a linkage label centred on a bond clears the branch label
   hanging off the residue beside it */
const STEP = 96
const START_X = 26
const BASE_Y = 104
const BRANCH_Y = 36
const HEIGHT = 152
const LINKER_RUN = 64

const residueSymbol = ({ shape, label, defining }: Residue, x: number, y: number) => {
  const cls = `glycan-residue${defining ? ' is-defining' : ''}`
  const symbol = shape === 'square'
    ? `<rect class="${cls}" x="${x - RADIUS}" y="${y - RADIUS}" width="${RADIUS * 2}" height="${RADIUS * 2}" rx="2" />`
    : shape === 'circle'
      ? `<circle class="${cls}" cx="${x}" cy="${y}" r="${RADIUS}" />`
      : `<path class="${cls}" d="M${x} ${y - 19}l19 33h-38z" />`

  const labelY = shape === 'triangle' ? y - 25 : y + RADIUS + 20
  return `${symbol}<text class="glycan-name" x="${x}" y="${labelY}">${label}</text>`
}

/* The visual is decorative on its own, so the whole figure carries one spoken
   description instead of leaking dozens of loose <text> nodes to a reader. */
export const describeGlycan = ({ backbone, linkages, branch, linker }: Glycan) => {
  const chain = backbone
    .map((residue, index) => {
      const attached = branch?.at === index ? ` carrying ${branch.residue.label} ${branch.linkage}` : ''
      const bond = index < linkages.length ? ` ${linkages[index]} ` : ''
      return `${residue.label}${attached}${bond}`
    })
    .join('')

  return `${chain}${linker ? `, terminated by an ${linker} linker arm` : ', bare sugar'}`
}

type SymbolOptions = { className?: string; label?: string }

export const glycanSymbols = (glycan: Glycan, { className = '', label }: SymbolOptions = {}) => {
  const { backbone, linkages, branch, linker } = glycan
  const centre = (index: number) => START_X + index * STEP
  const tailX = centre(backbone.length - 1) + RADIUS
  const width = linker ? tailX + LINKER_RUN + 46 : tailX + 16

  const bonds = backbone
    .slice(0, -1)
    .map((_, index) => `<path d="M${centre(index) + RADIUS} ${BASE_Y}H${centre(index + 1) - RADIUS}" />`)
    .join('')

  const linkageLabels = linkages
    .map((linkage, index) => {
      const midpoint = (centre(index) + centre(index + 1)) / 2
      return `<text class="glycan-linkage" x="${midpoint}" y="${BASE_Y - 24}">${linkage}</text>`
    })
    .join('')

  const branchGroup = branch
    ? `<path d="M${centre(branch.at)} ${BASE_Y - RADIUS}V${BRANCH_Y + 14}" />
       <text class="glycan-linkage glycan-linkage-branch" x="${centre(branch.at) + 11}" y="${BASE_Y - 36}">${branch.linkage}</text>`
    : ''

  /* Mirrors the spacer-arm zigzag used in the hero figure, so the linker reads
     as the same object across the site. */
  const linkerGroup = linker
    ? `<path class="glycan-linker" d="M${tailX} ${BASE_Y}h14l8-11 11 22 11-22 8 11h12" />
       <circle class="glycan-linker-dot" cx="${tailX + 22}" cy="${BASE_Y - 11}" r="2.5" />
       <circle class="glycan-linker-dot" cx="${tailX + 44}" cy="${BASE_Y + 11}" r="2.5" />
       <text class="glycan-terminus" x="${tailX + LINKER_RUN + 8}" y="${BASE_Y + 5}">${linker}</text>`
    : ''

  return `
    <svg class="glycan-symbols ${className}" viewBox="0 0 ${width} ${HEIGHT}" role="img" aria-label="${label ?? describeGlycan(glycan)}">
      <g class="glycan-bonds" aria-hidden="true">${bonds}${branchGroup}</g>
      <g class="glycan-nodes" aria-hidden="true">
        ${backbone.map((residue, index) => residueSymbol(residue, centre(index), BASE_Y)).join('')}
        ${branch ? residueSymbol(branch.residue, centre(branch.at), BRANCH_Y) : ''}
      </g>
      <g class="glycan-annotations" aria-hidden="true">${linkageLabels}${linkerGroup}</g>
    </svg>
  `
}

export const glycanLegend = () => `
  <ul class="glycan-legend" aria-label="Symbol key">
    <li><svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="2.5" width="15" height="15" rx="1" /></svg>N-acetylhexosamine</li>
    <li><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5" /></svg>Hexose</li>
    <li><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2l8 15H2z" /></svg>Deoxyhexose (fucose)</li>
  </ul>
`
