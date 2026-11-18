import './style.css'
import { initSiteChrome, siteFooter, siteHeader } from './shared/site'

/* Legal notice. The conditions of use, liability, property rights and personal
   data texts come from the previous glycobar.com website; the publisher and
   hosting block, the contact form and cookie paragraphs and the data subject
   rights are specific to this version of the site. */

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${siteHeader('legals')}

  <main class="subpage-main" id="top">
    <section class="legals" aria-labelledby="legals-heading">
      <div class="section-shell">
        <div class="section-heading page-heading reveal">
          <div>
            <p class="eyebrow">Legals</p>
            <h1 id="legals-heading">Legal notice</h1>
          </div>
        </div>

        <div class="legal-text">
          <section class="legal-section">
            <h2><span>01 |</span> Publisher and hosting</h2>
            <p>This website is published by GlycoBAR SAS, a French simplified joint-stock company (société par actions simplifiée) with a share capital of €421,038, registered with the Grenoble Trade and Companies Register (RCS Grenoble) under number 813 495 207.</p>
            <p>Registered office: Espace Colombiers, 19 rue Casimir Julhiet, 38420 Domène, France. Contact: <a href="mailto:contact@glycobar.com">contact@glycobar.com</a>.</p>
            <p>The website is hosted by OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.</p>
          </section>

          <section class="legal-section">
            <h2><span>02 |</span> Conditions of use</h2>
            <p>You may only use this Website in compliance with these Terms of Use and, in any case, you may only use this Website for lawful purposes, i.e. in compliance with all applicable legislation, regulations and practices in France or in the country from which the Website is accessed.</p>
            <p>In particular, you agree:</p>
            <ul>
              <li>Not to publish, send or distribute any prejudicial, obscene, defamatory or unlawful information either on or from this Website;</li>
              <li>Not to use this Website in a manner liable to infringe the rights of others;</li>
              <li>Not to make unauthorised, false or fraudulent reservations;</li>
              <li>Not to use any software, routine or device with a view to hindering or attempting to hinder the proper operation of the Website, either manually or electronically, by any means, particularly with respect to the uploading or accessibility of files containing altered data or viruses;</li>
              <li>Not to degrade, alter or change the graphic appearance of this Website or the constituent software codes thereof;</li>
              <li>Not to undertake any action liable to cause unreasonable or disproportionate traffic on the Website or on an associated infrastructure;</li>
              <li>Not to obtain or attempt to obtain unauthorised access to any of Our networks, by any means.</li>
            </ul>
            <p>Without prejudice to the other rights thereof (regardless of whether they are legal in origin or not), the GlycoBar group reserves the right to deny access to this Website if it deems (at its entire discretion) that you are in breach of any of the clauses of these Terms of Use.</p>
            <p>GlycoBar reserves the right to improve or amend the information, services, products and other items on this Website, or to shut the Website down, at any time, without notice. The GlycoBar group also reserves the right to amend these Terms of Use at any time, these amendments being applicable immediately, as soon as they are published online on this Website.</p>
            <p>Therefore, by continuing to access or use this Website, you are deemed to have accepted the amendments of these Terms of Use.</p>
          </section>

          <section class="legal-section">
            <h2><span>03 |</span> Exclusions and responsibilities</h2>
            <h3>Website content</h3>
            <p>Although GlycoBar makes every effort to provide reliable content, and despite the care taken in the wording of the text and publishing of photographs, some errors may be found in the information given on this website. Under no circumstances can GlycoBar be held liable for direct or indirect damage resulting from accessing the website or using the information contained therein (e.g.: errors, omissions, inaccessibility, data loss, damage, destruction or viruses liable to affect the user’s I.T. equipment). Therefore, the user accepts to use this information under his/her sole liability and is invited to make any necessary checks.</p>
            <h3>Hypertext links</h3>
            <p>GlycoBar has no control over the content of third party websites. GlycoBar and its subsidiaries thus formally deny any liability for the content of the linked websites. These links are provided to users of the GlycoBar website or its subsidiaries’ or affiliated entities’ websites as a service. The decision to activate the links is solely up to Internet users. Please note that non-affiliated websites are subject to their own terms of use.</p>
          </section>

          <section class="legal-section">
            <h2><span>04 |</span> Property rights</h2>
            <p>The GlycoBar group owns, reserves and retains all property rights, particularly intellectual property, including copyright for this website and the information contained therein. The brands cited on this website (non-exhaustive list: GlycoBar©) are registered trademarks. All the patents, logos, texts, page layouts, visuals, photographs, graphics, icons and any other distinctive items contained in the pages of this website are the exclusive property of GlycoBar. Pursuant to the French act dated 11 March 1957 on copyright and the intellectual property code, any representation or reproduction, in part or in whole, for collective use, on any medium or using any process, is strictly prohibited without written permission from GlycoBar or the assignees or successors thereof. Any breach of this copyright would thus constitute infringement sanctioned by articles L 335-2 and following of the intellectual property code.</p>
          </section>

          <section class="legal-section">
            <h2><span>05 |</span> Personal information</h2>
            <p>This website has been the subject of an internal statement with GlycoBar’s Data Protection Correspondent, notified and validated by the French Data Protection Authority – CNIL, pursuant to French act No. 667724 of 6 August 2005 on the protection of individuals with respect to personal data processing amending the amended act No. 78-17 of 6 January 1978 on data processing, files and individual liberties.</p>
            <p>GlycoBar has drawn up a charter for personal data collection and undertakes to adhere strictly to the French Data Protection Act.</p>
            <h3>Charter: GlycoBar and compliance with the French Data Protection Act</h3>
            <h3>Nature of data</h3>
            <p>The term “personal data” refers to any data relating to an individual and enabling same to be identified. This includes names, telephone numbers, postal and e-mail addresses, company registration Nos. and names.</p>
            <h3>Use of data collected</h3>
            <p>This data is reserved for strictly internal use within GlycoBar and will not be the subject of any commercial use or transmission or transfer to any party for commercial or canvassing purposes. GlycoBar may share, provide or send data to other companies in the GlycoBar group in Europe and companies of the group based world-wide (subject to GlycoBar adhering with the utmost strictness to the applicable legislation on commercial and intellectual data protection). The companies belonging to the GlycoBar group are GlycoBar FRANCE and any entity, firm or company in which GlycoBar has a direct or indirect majority holding of its shares or assets. The companies in the GlycoBar group will only use your Personal Data within the scope of the purposes defined hereinafter and are or will be subject to strict policies and terms on Personal Data use and protection.</p>
            <p>GlycoBar wishes to collect, store and use your Personal Data for the following purposes:</p>
            <ul>
              <li>providing customer support, including services such as the warranty and after-sales support</li>
              <li>facilitating and processing your queries and requests for information on GlycoBar, its products and services</li>
              <li>providing you with the latest information on GlycoBar’s products and services</li>
              <li>finding out your opinion on GlycoBar’s products and services (product surveys)</li>
              <li>organising events and other special offers</li>
              <li>possibly contacting you if your application matches the required profile in a job offer published by GlycoBar on one of its websites</li>
            </ul>
            <h3>Lack of data</h3>
            <p>As a general rule, you may visit GlycoBar’s websites without needing to provide your personal data. However, fields marked with an asterisk specify that some basic data is sometimes required. Failure to complete the relevant input fields may result in GlycoBar being unable to provide you with some access or services.</p>
            <h3>Security and confidentiality of data collected</h3>
            <p>GlycoBar has implemented physical, electronic and administrative protection measures in compliance with regulations to protect your Personal Data.</p>
            <p>This data can only be accessed by a restricted number of authorised parties.</p>
            <h3>Contact form</h3>
            <p>The contact form of this website collects your name, your email address and your message. They are sent by email to GlycoBar (<a href="mailto:contact@glycobar.com">contact@glycobar.com</a>) for the sole purpose of answering your request, and are not stored on the website.</p>
            <h3>Your rights</h3>
            <p>In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act, you have the right to access, rectify and erase your personal data, to restrict or object to its processing, and to its portability. To exercise these rights, write to <a href="mailto:contact@glycobar.com">contact@glycobar.com</a>. If you consider that your rights are not respected, you may lodge a complaint with the CNIL (<a href="https://www.cnil.fr" rel="noopener">www.cnil.fr</a>).</p>
          </section>

          <section class="legal-section">
            <h2><span>06 |</span> Cookies</h2>
            <p>This website does not set any cookie on your device and does not use any audience measurement, advertising or social network tracker. No consent banner is therefore needed.</p>
          </section>
        </div>
      </div>
    </section>
  </main>

  ${siteFooter()}
`

initSiteChrome()
