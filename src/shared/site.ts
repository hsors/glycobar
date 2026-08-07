import glycobarLogo from '../assets/brand/glycobar-logo.png'
import glycobarLogoReversed from '../assets/brand/glycobar-logo-reversed.png'
import france2030Logo from '../assets/partners/france-2030.svg'
import { arrowIcon } from './icons'

export type SitePage = 'home' | 'products' | 'impact'

/* Anchors that live on the home page need an absolute path once the header is
   rendered on a sub-page. */
const homeAnchor = (page: SitePage, hash: string) => (page === 'home' ? hash : `/${hash}`)

export const siteHeader = (page: SitePage) => `
  <header class="site-header" data-header>
    <div class="nav-shell">
      <a class="brand" href="${page === 'home' ? '#top' : '/'}" aria-label="GlycoBAR — home">
        <img class="brand-logo brand-logo-reversed" src="${glycobarLogoReversed}" alt="" aria-hidden="true" />
        <img class="brand-logo" src="${glycobarLogo}" alt="GlycoBAR" />
      </a>

      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-navigation" data-menu-toggle>
        <span></span><span></span>
      </button>

      <nav class="main-nav" id="main-navigation" aria-label="Main navigation" data-menu>
        <a href="${homeAnchor(page, '#company')}">Company</a>
        <a href="${page === 'products' ? '#top' : '/products/'}"${page === 'products' ? ' aria-current="page"' : ''}>Product &amp; Pipeline</a>
        <a href="${page === 'impact' ? '#top' : '/impact/'}"${page === 'impact' ? ' aria-current="page"' : ''}>Our impact</a>
        <a class="nav-contact" href="mailto:contact@glycobar.com">Contact us ${arrowIcon}</a>
      </nav>
    </div>
  </header>
`

export const siteContact = () => `
  <section class="contact" id="contact">
    <div class="section-shell contact-grid reveal">
      <div>
        <p class="eyebrow">Start a conversation</p>
        <h2>Ready to remove the blood group barrier?</h2>
      </div>
      <div>
        <p>Collaborate with our scientists, request a sample or visit the production facility in Grenoble.</p>
        <a class="button button-dark" href="mailto:contact@glycobar.com">Contact our team ${arrowIcon}</a>
      </div>
    </div>
  </section>
`

export const siteFooter = () => `
  <footer class="site-footer">
    <div class="section-shell footer-grid">
      <a class="footer-brand" href="#top" aria-label="GlycoBAR — back to top"><img src="${glycobarLogo}" alt="GlycoBAR" /></a>
      <p>Blood group antigen ligands<br />for an ABO antibody-free world.</p>
      <div>
        <span>Grenoble, France</span>
        <a href="mailto:contact@glycobar.com">contact@glycobar.com</a>
      </div>
      <div class="footer-support">
        <span class="made-in-france">Proudly made in France <i class="france-flag" role="img" aria-label="French flag"></i></span>
        <span class="support-copy">With the support of</span>
        <img src="${france2030Logo}" alt="France 2030" />
      </div>
      <p class="copyright">© ${new Date().getFullYear()} GlycoBAR</p>
    </div>
  </footer>
`

type ChromeOptions = {
  /* Pages that open on a dark hero let the header start transparent and turn
     solid on scroll. Sub-pages open on light content, so it starts solid. */
  heroTrigger?: string
}

export const initSiteChrome = ({ heroTrigger }: ChromeOptions = {}) => {
  const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]')
  const menu = document.querySelector<HTMLElement>('[data-menu]')
  const header = document.querySelector<HTMLElement>('[data-header]')
  const trigger = heroTrigger ? document.querySelector<HTMLElement>(heroTrigger) : null

  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!isOpen))
    menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu')
    menu?.classList.toggle('is-open', !isOpen)
    document.body.classList.toggle('menu-open', !isOpen)
  })

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle?.setAttribute('aria-expanded', 'false')
      menu?.classList.remove('is-open')
      document.body.classList.remove('menu-open')
    })
  })

  let scrollFrame = 0

  const updateScrollEffects = () => {
    const secondSectionReached = !heroTrigger
      || (trigger ? trigger.getBoundingClientRect().top <= 86 : window.scrollY >= window.innerHeight)
    header?.classList.toggle('is-scrolled', secondSectionReached)

    scrollFrame = 0
  }

  const requestScrollEffects = () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects)
  }

  window.addEventListener('scroll', requestScrollEffects, { passive: true })
  window.addEventListener('resize', requestScrollEffects, { passive: true })
  updateScrollEffects()

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
}
