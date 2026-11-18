/* "Contact us" / "Contact our team" open this dialog instead of a bare mailto:
   link, which does nothing on a computer with no mail program set up.

   The form posts to /contact.php (public/contact.php, which sends the mail to
   contact@glycobar.com). If the message cannot be sent — no PHP on the host,
   server error — the dialog says so and offers the plain mailto: link. */

const CONTACT_EMAIL = 'contact@glycobar.com'
const ENDPOINT = '/contact.php'

const markup = `
  <dialog class="contact-dialog" aria-labelledby="contact-dialog-title">
    <button class="structure-dialog-close" type="button" data-contact-close aria-label="Close">
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" /></svg>
    </button>

    <p class="eyebrow" data-contact-eyebrow>Contact</p>
    <h2 id="contact-dialog-title" data-contact-title>Send us a message</h2>
    <p class="contact-dialog-lead" data-contact-lead>Collaboration, sample request or visit: we answer within a few working days.</p>

    <form class="contact-form" method="post" action="${ENDPOINT}" novalidate>
      <label>
        <span>Name</span>
        <input type="text" name="name" autocomplete="name" maxlength="100" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" autocomplete="email" maxlength="150" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows="6" minlength="5" maxlength="5000" required data-contact-message></textarea>
      </label>
      <input type="hidden" name="topic" value="" data-contact-topic-field />
      <!-- honeypot: invisible to people, filled in by bots -->
      <label class="contact-hp" aria-hidden="true">
        <span>Website</span>
        <input type="text" name="website" tabindex="-1" autocomplete="off" />
      </label>

      <p class="contact-status" role="status" aria-live="polite" data-contact-status></p>

      <div class="contact-actions">
        <button class="button button-dark" type="submit" data-contact-submit>Send message</button>
        <a class="contact-direct" href="mailto:${CONTACT_EMAIL}" data-contact-direct>or write to ${CONTACT_EMAIL}</a>
      </div>
    </form>
  </dialog>
`

export const initContactDialog = () => {
  document.body.insertAdjacentHTML('beforeend', markup)

  const dialog = document.querySelector<HTMLDialogElement>('.contact-dialog')!
  const form = dialog.querySelector<HTMLFormElement>('.contact-form')!
  const status = dialog.querySelector<HTMLElement>('[data-contact-status]')!
  const submit = dialog.querySelector<HTMLButtonElement>('[data-contact-submit]')!

  const setStatus = (text: string, kind: '' | 'ok' | 'error' = '') => {
    status.textContent = text
    status.dataset.kind = kind
  }

  const eyebrow = dialog.querySelector<HTMLElement>('[data-contact-eyebrow]')!
  const title = dialog.querySelector<HTMLElement>('[data-contact-title]')!
  const lead = dialog.querySelector<HTMLElement>('[data-contact-lead]')!
  const topicField = dialog.querySelector<HTMLInputElement>('[data-contact-topic-field]')!
  const message = dialog.querySelector<HTMLTextAreaElement>('[data-contact-message]')!
  const direct = dialog.querySelector<HTMLAnchorElement>('[data-contact-direct]')!

  /* The dialog serves two entry points: the general contact links, and the
     "Request a quote" button of the products page, which sets a topic. */
  const texts = {
    default: {
      eyebrow: eyebrow.textContent!,
      title: title.textContent!,
      lead: lead.textContent!,
      placeholder: '',
    },
    quote: {
      eyebrow: 'Quotation',
      title: 'Request a quote',
      lead: 'Tell us which product, quantity and delivery date you need: we will send you a quotation.',
      placeholder: 'Product (e.g. BAR-4A-S-NH2), quantity, delivery date, quality documents needed…',
    },
  }

  const open = (topic = '') => {
    const t = topic ? texts.quote : texts.default
    eyebrow.textContent = t.eyebrow
    title.textContent = t.title
    lead.textContent = t.lead
    message.placeholder = t.placeholder
    topicField.value = topic
    direct.href = `mailto:${CONTACT_EMAIL}${topic ? `?subject=${encodeURIComponent(topic)}` : ''}`
    setStatus('')
    dialog.showModal()
    dialog.querySelector<HTMLInputElement>('input[name="name"]')?.focus()
  }

  document.querySelectorAll<HTMLAnchorElement>('[data-contact-open]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      /* the mobile menu is full screen: close it so the dialog is not hidden */
      document.querySelector('[data-menu].is-open')?.classList.remove('is-open')
      document.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('menu-open')
      open(link.dataset.contactTopic)
    })
  })

  dialog.querySelector('[data-contact-close]')?.addEventListener('click', () => dialog.close())

  /* a click on the backdrop lands on the dialog element itself */
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close()
  })

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    /* the server trims the message and wants at least 5 characters */
    if (message.value.trim().length < 5) {
      setStatus('Please write a message (at least 5 characters).', 'error')
      message.focus()
      return
    }

    submit.disabled = true
    setStatus('Sending…')

    try {
      const response = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form) })
      const result = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !result.ok) {
        /* a 4xx answer is the server explaining what to fix in the form (too
           short, bad address, too fast): show it as is */
        const failure = new Error(result.error || 'The message could not be sent.') as Error & { fixable?: boolean }
        failure.fixable = response.status >= 400 && response.status < 500
        throw failure
      }

      form.reset()
      setStatus('Thank you — your message has been sent. We will get back to you shortly.', 'ok')
    } catch (error) {
      const reason = error instanceof SyntaxError ? 'The message could not be sent.' : (error as Error).message
      const fixable = (error as { fixable?: boolean }).fixable === true
      setStatus(fixable ? reason : `${reason} Please write to ${CONTACT_EMAIL} instead.`, 'error')
    } finally {
      submit.disabled = false
    }
  })
}
