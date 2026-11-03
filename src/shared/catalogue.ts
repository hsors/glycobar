import aTetraoseStructure from '../assets/products/a-tetraose.png'
import bTetraoseStructure from '../assets/products/b-tetraose.png'
import aTriaoseStructure from '../assets/products/a-triaose.png'
import bTriaoseStructure from '../assets/products/b-triaose.png'
import aHexaoseStructure from '../assets/products/a-hexaose.png'
import bHexaoseStructure from '../assets/products/b-hexaose.png'
import { FUC, GAL, GALNAC_A, GAL_B, GLC, GLCNAC, type Glycan } from './glycan'

export type CatalogueItem = {
  id: string
  group: 'A' | 'B'
  name: string
  chain: string
  note: string
  residues: string
  termination: string
  glycan: Glycan
  structure: string
}

/* The A and B families are identical apart from the terminal residue, so both
   are built from one shape per chain length. */
const terminal = (group: 'A' | 'B') => (group === 'A' ? GALNAC_A : GAL_B)

const triaose = (group: 'A' | 'B'): Glycan => ({
  backbone: [terminal(group), GAL],
  linkages: ['α1,3'],
  branch: { at: 1, residue: FUC, linkage: 'α1,2' },
  linker: 'NH₂',
})

const tetraose = (group: 'A' | 'B'): Glycan => ({
  backbone: [terminal(group), GAL, GLC],
  linkages: ['α1,3', 'β1,4'],
  branch: { at: 1, residue: FUC, linkage: 'α1,2' },
  linker: 'NH₂',
})

const hexaose = (group: 'A' | 'B'): Glycan => ({
  backbone: [terminal(group), GAL, GLCNAC, GAL, GLC],
  linkages: ['α1,3', 'β1,4', 'β1,3', 'β1,4'],
  branch: { at: 1, residue: FUC, linkage: 'α1,2' },
})

export const coreProducts: CatalogueItem[] = [
  {
    id: 'a-tetraose',
    group: 'A',
    name: 'Blood group A antigen ligand',
    chain: 'Tetraose',
    note: 'Standard form: amine termination on a linker arm that brings the molecule to roughly the length of the natural hexa-saccharide antigen on the red cell.',
    residues: '4 · tetraose',
    termination: 'Amine + linker arm',
    glycan: tetraose('A'),
    structure: aTetraoseStructure,
  },
  {
    id: 'b-tetraose',
    group: 'B',
    name: 'Blood group B antigen ligand',
    chain: 'Tetraose',
    note: 'Standard form: amine termination on a linker arm that brings the molecule to roughly the length of the natural hexa-saccharide antigen on the red cell.',
    residues: '4 · tetraose',
    termination: 'Amine + linker arm',
    glycan: tetraose('B'),
    structure: bTetraoseStructure,
  },
]

export const otherProducts: CatalogueItem[] = [
  {
    id: 'a-triaose',
    group: 'A',
    name: 'Blood group A tri-saccharide antigen',
    chain: 'Tri-saccharide',
    note: 'The shortest A determinant: the terminal GalNAc and its fucose, on a single galactose.',
    residues: '3 · tri-saccharide',
    termination: 'Amine + linker arm',
    glycan: triaose('A'),
    structure: aTriaoseStructure,
  },
  {
    id: 'b-triaose',
    group: 'B',
    name: 'Blood group B tri-saccharide antigen',
    chain: 'Tri-saccharide',
    note: 'The shortest B determinant: the terminal galactose and its fucose, on a single galactose.',
    residues: '3 · tri-saccharide',
    termination: 'Amine + linker arm',
    glycan: triaose('B'),
    structure: bTriaoseStructure,
  },
  {
    id: 'a-hexaose',
    group: 'A',
    name: 'Blood group A hexa-saccharide antigen',
    chain: 'Hexa-saccharide',
    note: 'The full-length A antigen as it appears on the erythrocyte. Bare sugar version shown; amine termination is also available.',
    residues: '6 · hexa-saccharide',
    termination: 'Bare sugar or amine',
    glycan: hexaose('A'),
    structure: aHexaoseStructure,
  },
  {
    id: 'b-hexaose',
    group: 'B',
    name: 'Blood group B hexa-saccharide antigen',
    chain: 'Hexa-saccharide',
    note: 'The full-length B antigen as it appears on the erythrocyte. Bare sugar version shown; amine termination is also available.',
    residues: '6 · hexa-saccharide',
    termination: 'Bare sugar or amine',
    glycan: hexaose('B'),
    structure: bHexaoseStructure,
  },
]
