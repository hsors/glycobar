export const arrowIcon = `
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 6l4 4-4 4" />
  </svg>
`

/* A 96-well ELISA plate: 12 columns x 8 rows. At icon size the wells are ~2px
   across, so they are drawn as filled dots — a stroked ring closes up. Each
   row fades from left to right to read as a serial dilution across the plate. */
const elisaWells = Array.from({ length: 8 }, (_, row) =>
  Array.from({ length: 12 }, (_, column) => {
    const cx = (6 + (36 / 12) * (column + 0.5)).toFixed(2)
    const cy = (9 + (22 / 8) * (row + 0.5)).toFixed(2)
    const opacity = (0.12 + 0.78 * Math.pow(0.8, column)).toFixed(3)
    return `<circle class="icon-well" cx="${cx}" cy="${cy}" r="1.05" fill-opacity="${opacity}" />`
  }).join(''),
).join('')

/* The two R&D programmes appear on both the home pipeline table and the impact
   page, so their icons are built once and sized by the class passed in. */
export const elisaPlateIcon = (className: string) => `
  <svg class="figure-icon ${className}" viewBox="0 0 48 40" role="img" aria-label="96-well ELISA plate">
    <rect x="3" y="6" width="42" height="28" rx="2" />
    ${elisaWells}
  </svg>
`

export const plateletBagIcon = (className: string) => `
  <svg class="figure-icon ${className}" viewBox="0 0 48 40" role="img" aria-label="Platelet bag">
    <path class="icon-fill" d="M14.5 19h19v9.5a3.5 3.5 0 0 1-3.5 3.5h-12a3.5 3.5 0 0 1-3.5-3.5z" />
    <rect x="14.5" y="8" width="19" height="24" rx="3.5" />
    <path d="M19.5 8V5.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V8" />
    <path d="M14.5 19h19" />
    <path d="M24 32v4.5" />
  </svg>
`
