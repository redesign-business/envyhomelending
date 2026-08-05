const applyHref = "mailto:lupe@envyhomelending.com?subject=Start%20My%20Application";

export default function Home() {
  return (
    <main>
      <style>{`
        :root { --ink:#173a35; --paper:#f6f1e8; --cream:#fffaf1; --lime:#d9ee78; --coral:#ef765f; --line:rgba(23,58,53,.18); }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--paper); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; }
        .wrap { width:min(1180px, calc(100% - 40px)); margin:auto; }
        nav { height:88px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--line); }
        .brand { display:flex; align-items:center; gap:12px; font-weight:900; letter-spacing:-.04em; text-decoration:none; font-size:21px; }
        .brandMark { width:34px; height:34px; border:8px solid var(--ink); border-top-color:var(--coral); transform:rotate(45deg); }
        .navLinks { display:flex; gap:28px; align-items:center; font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:.08em; }
        .navLinks a { text-decoration:none; }
        .cta { display:inline-flex; align-items:center; justify-content:center; min-height:50px; padding:0 24px; border:2px solid var(--ink); background:var(--lime); box-shadow:5px 5px 0 var(--ink); text-decoration:none; text-transform:uppercase; font-weight:900; letter-spacing:.06em; font-size:12px; transition:.2s ease; }
        .cta:hover { transform:translate(3px,3px); box-shadow:2px 2px 0 var(--ink); }
        .hero { display:grid; grid-template-columns:1.05fr .95fr; min-height:680px; align-items:center; gap:64px; padding:72px 0; }
        .eyebrow { display:flex; align-items:center; gap:10px; margin:0 0 20px; text-transform:uppercase; font-size:12px; font-weight:900; letter-spacing:.14em; }
        .eyebrow:before { content:''; width:36px; height:4px; background:var(--coral); }
        h1 { margin:0; max-width:720px; font-family:Georgia, serif; font-size:clamp(58px, 7.4vw, 108px); line-height:.88; letter-spacing:-.065em; font-weight:500; }
        .hero p { font-size:19px; line-height:1.55; max-width:580px; margin:30px 0; }
        .heroVisual { position:relative; min-height:520px; background:var(--ink); border-radius:50% 50% 4px 4px; overflow:hidden; display:flex; align-items:center; justify-content:center; padding:54px; }
        .heroVisual:before, .heroVisual:after { content:''; position:absolute; border:2px solid var(--lime); border-radius:50%; }
        .heroVisual:before { width:380px; height:380px; top:-90px; right:-100px; }
        .heroVisual:after { width:180px; height:180px; bottom:-70px; left:-40px; }
        .heroVisual img { position:relative; width:100%; max-width:460px; height:auto; z-index:1; box-shadow:0 22px 60px rgba(0,0,0,.28); }
        .stamp { position:absolute; z-index:2; left:22px; bottom:30px; width:120px; height:120px; border-radius:50%; background:var(--lime); display:grid; place-items:center; text-align:center; font-size:11px; font-weight:900; text-transform:uppercase; letter-spacing:.12em; transform:rotate(-9deg); }
        .proofBar { background:var(--coral); border-block:2px solid var(--ink); }
        .proofBar .wrap { min-height:112px; display:grid; grid-template-columns:repeat(3,1fr); }
        .barItem { display:flex; gap:14px; align-items:center; padding:22px 32px; border-right:1px solid rgba(23,58,53,.35); font-weight:800; }
        .barItem:first-child { border-left:1px solid rgba(23,58,53,.35); }
        .barItem b { font-family:Georgia,serif; font-size:38px; font-weight:500; }
        section { padding:110px 0; }
        .sectionHead { display:grid; grid-template-columns:.75fr 1.25fr; gap:70px; align-items:end; margin-bottom:52px; }
        h2 { font-family:Georgia, serif; font-weight:500; letter-spacing:-.045em; font-size:clamp(44px,6vw,78px); line-height:.98; margin:0; }
        .sectionHead p { font-size:17px; line-height:1.65; max-width:620px; margin:0; }
        .people { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
        .person { min-height:390px; border:2px solid var(--ink); background:var(--cream); display:grid; grid-template-columns:160px 1fr; overflow:hidden; }
        .years { background:var(--ink); color:var(--cream); padding:30px 20px; display:flex; flex-direction:column; justify-content:space-between; }
        .years strong { font-family:Georgia,serif; color:var(--lime); font-size:86px; font-weight:500; line-height:.8; letter-spacing:-.08em; }
        .years span { text-transform:uppercase; font-size:11px; line-height:1.5; font-weight:900; letter-spacing:.13em; }
        .personCopy { padding:42px 34px; display:flex; flex-direction:column; justify-content:space-between; }
        .person h3 { font-family:Georgia,serif; font-size:36px; font-weight:500; margin:0 0 12px; }
        .person p { line-height:1.65; margin:0; }
        .license { border-top:1px solid var(--line); padding-top:20px; font-size:12px; text-transform:uppercase; letter-spacing:.1em; font-weight:900; }
        .buyerFirst { background:var(--ink); color:var(--cream); }
        .buyerGrid { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:90px; }
        .buyerFirst .eyebrow { color:var(--lime); }
        .buyerFirst h2 { max-width:650px; }
        .buyerFirst p { color:#dbe3dc; font-size:18px; line-height:1.65; max-width:580px; margin:28px 0 34px; }
        .rateVisual { border:1px solid rgba(255,255,255,.25); padding:36px; background:#204b44; }
        .rateTop { display:flex; justify-content:space-between; text-transform:uppercase; letter-spacing:.12em; font-size:11px; font-weight:900; margin-bottom:50px; }
        .rateLine { display:grid; grid-template-columns:90px 1fr; gap:18px; align-items:center; margin:26px 0; font-size:12px; text-transform:uppercase; font-weight:900; letter-spacing:.08em; }
        .track { height:28px; border:1px solid rgba(255,255,255,.35); }
        .fill { height:100%; background:#77918c; width:88%; }
        .fill.wholesale { width:61%; background:var(--lime); position:relative; }
        .fill.wholesale:after { content:'buyer-first access'; position:absolute; left:14px; top:7px; color:var(--ink); font-size:10px; white-space:nowrap; }
        .rateNote { margin-top:44px; padding-top:22px; border-top:1px solid rgba(255,255,255,.2); display:flex; justify-content:space-between; gap:20px; font-family:Georgia,serif; font-size:22px; }
        .programs { display:grid; grid-template-columns:.8fr 1.2fr; gap:70px; align-items:stretch; }
        .programArt { background:var(--coral); border:2px solid var(--ink); padding:42px; display:flex; flex-direction:column; justify-content:space-between; min-height:520px; }
        .house { position:relative; width:76%; aspect-ratio:1; margin:30px auto; border:18px solid var(--ink); border-top:0; }
        .house:before { content:''; position:absolute; width:72%; height:72%; border-left:18px solid var(--ink); border-top:18px solid var(--ink); transform:rotate(45deg); left:11%; top:-34%; }
        .house:after { content:''; position:absolute; width:26%; height:42%; background:var(--lime); border:10px solid var(--ink); bottom:-18px; left:34%; }
        .programArt strong { font-family:Georgia,serif; font-size:28px; font-weight:500; }
        .programCopy h2 { margin-bottom:26px; }
        .chips { display:flex; flex-wrap:wrap; gap:10px; margin:34px 0 42px; }
        .chip { padding:14px 18px; border:1px solid var(--ink); background:var(--cream); font-weight:800; font-size:13px; }
        .guide { padding-top:0; }
        .guideCard { display:grid; grid-template-columns:1fr 1fr; background:var(--lime); border:2px solid var(--ink); }
        .guideImage { min-height:580px; overflow:hidden; background:#ddd; }
        .guideImage img { display:block; width:100%; height:100%; object-fit:cover; object-position:top center; }
        .guideCopy { padding:70px; display:flex; flex-direction:column; justify-content:center; }
        .guideCopy p { font-size:18px; line-height:1.65; margin:25px 0 34px; }
        .equal { background:var(--cream); }
        .equalGrid { display:grid; grid-template-columns:.9fr 1.1fr; gap:75px; align-items:center; }
        .seal { min-height:430px; border:2px solid var(--ink); background:white; display:grid; place-items:center; padding:50px; position:relative; }
        .seal:before { content:'EQUAL OPPORTUNITY'; position:absolute; top:22px; left:22px; font-size:10px; letter-spacing:.16em; font-weight:900; }
        .seal img { max-width:100%; height:auto; }
        .credentialList { display:grid; gap:0; margin-top:34px; border-top:1px solid var(--line); }
        .credential { display:flex; justify-content:space-between; gap:20px; padding:19px 0; border-bottom:1px solid var(--line); font-weight:800; }
        .credential span { color:#60706d; font-size:12px; text-transform:uppercase; letter-spacing:.1em; }
        .faqGrid { display:grid; grid-template-columns:.85fr 1.15fr; gap:80px; }
        .faqVisual { background:var(--ink); color:var(--lime); min-height:480px; padding:50px; display:flex; flex-direction:column; justify-content:space-between; }
        .questionMark { font-family:Georgia,serif; font-size:250px; line-height:.7; }
        details { border-top:1px solid var(--line); padding:24px 0; }
        details:last-child { border-bottom:1px solid var(--line); }
        summary { cursor:pointer; font-family:Georgia,serif; font-size:22px; font-weight:500; }
        details p { line-height:1.6; color:#52625f; }
        .final { background:var(--coral); text-align:center; border-block:2px solid var(--ink); }
        .finalArt { width:82px; height:82px; margin:0 auto 30px; border-radius:50%; background:var(--lime); border:2px solid var(--ink); display:grid; place-items:center; font-size:35px; }
        .final h2 { max-width:850px; margin:0 auto 26px; }
        .final p { font-size:18px; margin:0 auto 32px; }
        footer { background:var(--ink); color:var(--cream); padding:55px 0; }
        .footerGrid { display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:50px; }
        footer strong { color:var(--lime); text-transform:uppercase; font-size:12px; letter-spacing:.12em; }
        footer p, footer a { line-height:1.7; font-size:14px; color:#dbe3dc; }
        .legal { margin-top:42px; padding-top:24px; border-top:1px solid rgba(255,255,255,.15); font-size:11px; color:#9eafaa; }
        @media (max-width: 850px) {
          .navLinks > a:not(.cta) { display:none; }
          .hero, .buyerGrid, .programs, .guideCard, .equalGrid, .faqGrid, .sectionHead { grid-template-columns:1fr; gap:36px; }
          .hero { padding-top:45px; }
          .heroVisual { min-height:430px; }
          .proofBar .wrap { grid-template-columns:1fr; }
          .barItem, .barItem:first-child { border-left:0; border-right:0; border-bottom:1px solid rgba(23,58,53,.35); }
          .people { grid-template-columns:1fr; }
          .guideImage { min-height:440px; }
          .guideCopy { padding:45px 30px; }
          .footerGrid { grid-template-columns:1fr; gap:25px; }
          section { padding:78px 0; }
        }
        @media (max-width: 520px) {
          .wrap { width:min(100% - 26px, 1180px); }
          .brand span { display:none; }
          .cta { padding:0 15px; }
          .heroVisual { padding:28px; min-height:340px; }
          .person { grid-template-columns:105px 1fr; }
          .years strong { font-size:60px; }
          .personCopy { padding:30px 22px; }
          .programArt, .rateVisual, .faqVisual { padding:28px; }
          .seal { min-height:300px; padding:35px; }
        }
      `}</style>

      <nav className="wrap" aria-label="Main navigation">
        <a className="brand" href="#top"><i className="brandMark" aria-hidden="true" /><span>Envy Home Lending</span></a>
        <div className="navLinks">
          <a href="#advisors">Advisors</a><a href="#loans">Loan options</a><a href="#faq">FAQ</a>
          <a className="cta" href={applyHref}>Start Your Application</a>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <div>
          <p className="eyebrow">Mortgage guidance in Sparks, Nevada</p>
          <h1>More clarity. Less mortgage noise.</h1>
          <p>Seasoned local advisors, wholesale interest rates, and a process built around your goals, not a lender&apos;s agenda.</p>
          <a className="cta" href={applyHref}>Start Your Application</a>
        </div>
        <div className="heroVisual">
          <img src="/images/cr-t-0-l-0-w-100-h-de892e3b80.jpg" alt="Envy Home Lending" />
          <div className="stamp">We work for you, not lenders</div>
        </div>
      </header>

      <div className="proofBar" aria-label="Key facts">
        <div className="wrap">
          <div className="barItem"><b>21+</b><span>Years of mortgage experience<br />with Lupe Mendoza</span></div>
          <div className="barItem"><b>23+</b><span>Years of loan origination<br />with Adriana Hernandez</span></div>
          <div className="barItem"><b>1</b><span>Buyer-first team with<br />wholesale rate access</span></div>
        </div>
      </div>

      <section id="advisors">
        <div className="wrap">
          <div className="sectionHead">
            <p className="eyebrow">Human expertise</p>
            <div><h2>Experience you can actually reach.</h2><p>Two established mortgage professionals guide you from the first question through closing with direct, consistent communication.</p></div>
          </div>
          <div className="people">
            <article className="person">
              <div className="years"><strong>21+</strong><span>years in mortgage &amp; lending</span></div>
              <div className="personCopy"><div><h3>Lupe Mendoza</h3><p>A Mortgage Advisor with deep knowledge across first-time buyer programs, refinancing, and investment property loans.</p></div><div className="license">Mortgage Advisor · NMLS #383577</div></div>
            </article>
            <article className="person">
              <div className="years"><strong>23+</strong><span>years in home loan origination</span></div>
              <div className="personCopy"><div><h3>Adriana Hernandez</h3><p>Known for quality service and honest, transparent, consistent communication with clients and industry partners.</p></div><div className="license">Mortgage Consultant · NMLS #442440</div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="buyerFirst">
        <div className="wrap buyerGrid">
          <div><p className="eyebrow">The buyer-first difference</p><h2>We work for you. Not the lenders.</h2><p>Envy Home Lending pairs independent mortgage consulting with access to wholesale interest rates, helping you evaluate a broad range of options around what fits your life.</p><a className="cta" href={applyHref}>Start Your Application</a></div>
          <div className="rateVisual" aria-label="Illustration of wholesale access">
            <div className="rateTop"><span>How we shop</span><span>Built around you</span></div>
            <div className="rateLine"><span>Retail path</span><div className="track"><div className="fill" /></div></div>
            <div className="rateLine"><span>Our access</span><div className="track"><div className="fill wholesale" /></div></div>
            <div className="rateNote"><span>Wholesale interest rates</span><span>More choice →</span></div>
          </div>
        </div>
      </section>

      <section id="loans">
        <div className="wrap programs">
          <div className="programArt"><strong>From first keys to next investments.</strong><div className="house" aria-hidden="true" /><span>Residential · Commercial · Second Home · Investment</span></div>
          <div className="programCopy"><p className="eyebrow">Financing that fits</p><h2>There is more than one way home.</h2><p>Explore programs for different incomes, properties, and stages of ownership with an advisor who can explain the tradeoffs clearly.</p><div className="chips"><span className="chip">Down Payment Assistance</span><span className="chip">First-Time Buyers</span><span className="chip">Conventional</span><span className="chip">FHA</span><span className="chip">VA</span><span className="chip">USDA</span><span className="chip">ITIN</span><span className="chip">Non-QM</span></div><a className="cta" href={applyHref}>Start Your Application</a></div>
        </div>
      </section>

      <section className="guide">
        <div className="wrap guideCard">
          <div className="guideImage"><img src="/images/rs-w-1240-cg--3a6fe97617.jpg" alt="Lupe Mendoza mortgage guide" /></div>
          <div className="guideCopy"><p className="eyebrow">Learn before you leap</p><h2>Your homebuying road map.</h2><p>Lupe&apos;s free mortgage guide walks through the journey from pre-approval to closing, so you can move forward feeling informed and prepared.</p><a className="cta" href={applyHref}>Start Your Application</a></div>
        </div>
      </section>

      <section className="equal">
        <div className="wrap equalGrid">
          <div className="seal"><img src="/images/rs-w-850a1a6145.jpg" alt="Equal Housing Opportunity Lender" /></div>
          <div><p className="eyebrow">Credentialed &amp; accountable</p><h2>Opportunity belongs to everyone.</h2><p>Envy Home Lending, LLC is an Equal Housing Opportunity Lender. Our team&apos;s credentials are clear, public, and part of the trust we build with every client.</p><div className="credentialList"><div className="credential">Envy Home Lending, LLC <span>NMLS #2416073</span></div><div className="credential">Lupe Mendoza <span>NMLS #383577</span></div><div className="credential">Adriana Hernandez <span>NMLS #442440</span></div></div></div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap faqGrid">
          <div className="faqVisual"><span className="questionMark">?</span><h2>Ask early. Ask often.</h2></div>
          <div><p className="eyebrow">Common questions</p><details open><summary>What types of loans do you help with?</summary><p>Residential, commercial, second-home and investment loans, including Conventional, FHA, VA, USDA, ITIN, Non-QM and down payment assistance programs.</p></details><details><summary>Do you only work with first-time buyers?</summary><p>No. The team supports first purchases, refinancing, second homes, and investment properties.</p></details><details><summary>When is the office open?</summary><p>Monday through Friday, 9am to 5pm. Saturday appointments are available, and the office is closed Sunday.</p></details><details><summary>Where are you located?</summary><p>4894 Sparks Blvd., Suite 102, Sparks, Nevada 89436.</p></details></div>
        </div>
      </section>

      <section className="final" id="contact">
        <div className="wrap"><div className="finalArt" aria-hidden="true">⌂</div><h2>A clearer path to your next address starts here.</h2><p>Local guidance. Decades of experience. A mortgage strategy centered on you.</p><a className="cta" href={applyHref}>Start Your Application</a></div>
      </section>

      <footer>
        <div className="wrap"><div className="footerGrid"><div><div className="brand"><i className="brandMark" aria-hidden="true" /><span>Envy Home Lending</span></div><p>We work for you, not the lenders.</p></div><div><strong>Visit</strong><p>4894 Sparks Blvd., Ste 102<br />Sparks, NV 89436<br />(775) 433-0111</p></div><div><strong>Hours</strong><p>Mon–Fri · 9am–5pm<br />Saturday · By appointment<br />Sunday · Closed</p></div></div><div className="legal">Envy Home Lending, LLC · NMLS #2416073 · Equal Housing Opportunity Lender</div></div>
      </footer>
    </main>
  );
}
