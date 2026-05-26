(function() {
    var style = document.createElement('style');
    style.textContent = '.mc-logo-link > a > img { height: 80px !important; width: auto !important; } #mc-primary-header-bar { height: 80px !important; } .moduletable.join-now { display: inline-flex !important; gap: 10px; }'

    + ' #right-bar .moduletable > h3 { font-size: 1.3rem; color: #005189; border-bottom: 2px solid #005189; padding-bottom: 10px; margin-bottom: 16px; }'
    + ' #right-bar .mod_events_latest_table { border-collapse: separate; border-spacing: 0 8px; }'
    + ' #right-bar .mc-event-listing { border-left: none !important; border-radius: 8px !important; background: #f7f9fb !important; padding: 14px 16px !important; display: block !important; transition: box-shadow 0.2s, transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }'
    + ' #right-bar .mc-event-listing:hover { box-shadow: 0 4px 12px rgba(0,81,137,0.15); transform: translateY(-2px); }'
    + ' #right-bar .mod_events_latest_date { display: inline-block; background: #005189; color: #fff !important; font-size: 0.75rem; font-weight: 600; padding: 3px 10px; border-radius: 12px; margin-bottom: 6px; letter-spacing: 0.3px; }'
    + ' #right-bar .mod_events_latest_content { display: block; margin-top: 4px; }'
    + ' #right-bar .mod_events_latest_content a { color: #1a1a1a !important; font-weight: 600; font-size: 0.95rem; text-decoration: none !important; }'
    + ' #right-bar .mod_events_latest_content a:hover { color: #005189 !important; }'
    + ' #right-bar .event-list-cat { font-size: 0.75rem; color: #888; margin-top: 4px; }'
    + ' #right-bar h6 a { display: block; text-align: center; background: #005189; color: #fff !important; padding: 10px 20px; border-radius: 8px; text-decoration: none !important; font-size: 0.9rem; font-weight: 600; transition: background 0.2s; }'
    + ' #right-bar h6 a:hover { background: #003d66; }'

    /* Lock the right sidebar to a fixed width on desktop so rotating sponsor
       images of varying dimensions can't push the main content column around.
       Only applies on wide viewports — on narrow screens MemberClicks stacks
       the sidebar below the main content, where it should be full-width. */
    + ' @media (min-width: 1024px) { #right-bar { width: 350px !important; min-width: 350px !important; max-width: 350px !important; flex-shrink: 0 !important; box-sizing: border-box !important; } }'
    + ' #right-bar img { max-width: 100% !important; height: auto !important; display: block; margin-left: auto; margin-right: auto; }'

    + ' .home-main { padding: 0 !important; }'
    + ' .home-main .pad { background: #fff; border-radius: 12px; padding: 40px 48px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); margin-bottom: 24px; }'
    + ' .home-main .pad h1 { font-size: 2rem; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 8px; }'
    + ' .home-main .pad h2 { font-size: 1.15rem; font-weight: 400; color: #336b8f !important; margin-bottom: 16px; }'
    + ' .home-main .pad h2 span { color: #336b8f !important; }'
    + ' .home-main .pad p { font-size: 1.05rem; line-height: 1.7; color: #444; }'

    + ' .sub-modules-flex { gap: 24px; }'
    + ' .sub-modules-flex .home-sub { padding: 0 !important; }'
    + ' .home-sub .pad { background: #fff; border-radius: 12px; padding: 32px 36px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); margin-bottom: 0px; }'
    + ' .home-sub .pad h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; border-bottom: 2px solid #005189; padding-bottom: 10px; display: inline-block; }'
    + ' .home-sub .pad p { line-height: 1.7; color: #444; }'
    + ' .home-sub .pad a { color: #005189; text-decoration: none; font-weight: 600; transition: color 0.2s; }'
    + ' .home-sub .pad a:hover { color: #003d66; text-decoration: underline; }'

    + ' .home-sub .pad ul { list-style: none; padding: 0; margin: 16px 0; }'
    + ' .home-sub .pad ul li { background: #f7f9fb; border-radius: 8px; padding: 12px 16px; margin-bottom: 8px; font-size: 0.95rem; color: #333; border-left: 3px solid #005189; transition: background 0.2s, transform 0.2s; }'
    + ' .home-sub .pad ul li:hover { background: #edf3f8; transform: translateX(4px); }'

    + ' .home-sub .pad h6 { margin-top: 24px; }'
    + ' .home-sub .pad h6 a { display: inline-block; background: #005189; color: #fff !important; padding: 12px 28px; border-radius: 8px; text-decoration: none !important; font-size: 0.95rem; font-weight: 600; transition: background 0.2s, transform 0.2s; }'
    + ' .home-sub .pad h6 a:hover { background: #003d66; color: #fff !important; transform: translateY(-2px); }'

    + ' .home-sub .pad img { border-radius: 8px; transition: transform 0.2s; }'
    + ' .home-sub .pad img:hover { transform: scale(1.03); }'

    + ' .nbca-membership-divider { border: none; border-top: 2px solid #e8e8e8; margin: 28px 0; }'

    /* Inner pages: card treatment for #component-wrap, skipping home (.home-template-01) */
    + ' #component-wrap:not(:has(.home-template-01)) { min-width: 0; overflow-wrap: break-word; }'
    + ' #component-wrap:not(:has(.home-template-01)) p, #component-wrap:not(:has(.home-template-01)) h1, #component-wrap:not(:has(.home-template-01)) h2, #component-wrap:not(:has(.home-template-01)) h3, #component-wrap:not(:has(.home-template-01)) li { max-width: 100%; overflow-wrap: break-word; }'

    /* Typography for inner pages */
    + ' #component-wrap:not(:has(.home-template-01)) h1 { font-size: 2rem; font-weight: 700; letter-spacing: -0.5px; color: #005189; margin: 0 0 16px; padding-bottom: 12px; border-bottom: 2px solid #005189; }'
    + ' #component-wrap:not(:has(.home-template-01)) h2 { font-size: 1.4rem; font-weight: 600; color: #005189; margin: 28px 0 12px; }'
    + ' #component-wrap:not(:has(.home-template-01)) h3 { font-size: 1.15rem; font-weight: 600; color: #336b8f; margin: 24px 0 10px; }'
    + ' #component-wrap:not(:has(.home-template-01)) p { font-size: 1rem; line-height: 1.7; color: #444; margin: 0 0 14px; }'
    + ' #component-wrap:not(:has(.home-template-01)) ul, #component-wrap:not(:has(.home-template-01)) ol { line-height: 1.7; color: #444; padding-left: 22px; margin: 0 0 14px; }'
    + ' #component-wrap:not(:has(.home-template-01)) a { color: #005189; text-decoration: none; font-weight: 600; transition: color 0.2s; }'
    + ' #component-wrap:not(:has(.home-template-01)) a:hover { color: #003d66; text-decoration: underline; }'
    + ' #component-wrap:not(:has(.home-template-01)) img { max-width: 100%; height: auto; border-radius: 6px; }'

    /* Inner data tables (news listings, schedules) — modern card-style */
    + ' #component-wrap:not(:has(.home-template-01)) td > table:not(.contentpaneopen):not(.jeventpage):not([id^="jevents"]):not([id^="ev_"]), #component-wrap:not(:has(.home-template-01)) td > table:not(.contentpaneopen):not(.jeventpage):not([id^="jevents"]):not([id^="ev_"]) > tbody { width: 100% !important; }'
    + ' #component-wrap:not(:has(.home-template-01)) td > table:not(.contentpaneopen):not(.jeventpage):not([id^="jevents"]):not([id^="ev_"]) { border-collapse: separate; border-spacing: 0; margin: 16px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); background: #fff; }'
    + ' #component-wrap:not(:has(.home-template-01)) td > table:not(.contentpaneopen):not(.jeventpage):not([id^="jevents"]):not([id^="ev_"]) td, #component-wrap:not(:has(.home-template-01)) td > table:not(.contentpaneopen):not(.jeventpage):not([id^="jevents"]):not([id^="ev_"]) th { padding: 12px 14px; border-bottom: 1px solid #eef2f5; vertical-align: top; }'
    + ' #component-wrap:not(:has(.home-template-01)) td > table:not(.contentpaneopen):not(.jeventpage):not([id^="jevents"]):not([id^="ev_"]) tr:last-child td { border-bottom: 0; }'

    /* JEvents calendar page */
    + ' .componentheading { font-size: 1.85rem; font-weight: 700; color: #005189; margin: 0 0 20px; padding-bottom: 12px; border-bottom: 2px solid #005189; }'
    + ' #jevents_body { background: #fff; border-radius: 8px; }'
    + ' .ev_navigation { margin: 14px 0; }'
    + ' .ev_navigation a { display: inline-block; padding: 6px 12px; border-radius: 6px; background: #f7f9fb; color: #005189 !important; text-decoration: none !important; font-weight: 600; font-size: 0.9rem; transition: background 0.2s; }'
    + ' .ev_navigation a:hover { background: #edf3f8; }'

    /* Hide legacy article separator dividers */
    + ' .article_separator { display: none !important; }'

    /* Forms (login, contact) */
    + ' #component-wrap input[type="text"], #component-wrap input[type="password"], #component-wrap input[type="email"] { padding: 10px 12px; border: 1px solid #d6dde3; border-radius: 8px; font-size: 1rem; max-width: 360px; margin: 6px 0; transition: border-color 0.2s, box-shadow 0.2s; }'
    + ' #component-wrap input[type="text"]:focus, #component-wrap input[type="password"]:focus, #component-wrap input[type="email"]:focus { outline: none; border-color: #005189; box-shadow: 0 0 0 3px rgba(0,81,137,0.12); }'
    + ' #component-wrap input[type="submit"], #component-wrap button[type="submit"] { background: #005189; color: #fff; padding: 10px 24px; border: 0; border-radius: 8px; font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.2s; }'
    + ' #component-wrap input[type="submit"]:hover, #component-wrap button[type="submit"]:hover { background: #003d66; transform: translateY(-1px); }'

    /* Photos page gallery (masonry via CSS columns) */
    + ' .nbca-photos-intro { color: #444; font-size: 1.05rem; line-height: 1.7; margin: 0 0 24px; }'
    + ' .nbca-gallery { column-count: 3; column-gap: 16px; margin: 24px 0 0; }'
    + ' @media (max-width: 900px) { .nbca-gallery { column-count: 2; } }'
    + ' @media (max-width: 540px) { .nbca-gallery { column-count: 1; } }'
    + ' .nbca-gallery a { display: block; margin: 0 0 16px; break-inside: avoid; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); transition: transform 0.25s ease, box-shadow 0.25s ease; position: relative; }'
    + ' .nbca-gallery a:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,81,137,0.18); }'
    + ' .nbca-gallery a img { display: block !important; width: 100% !important; height: auto !important; border-radius: 10px !important; background: #f7f9fb; transition: transform 0.45s ease; }'
    + ' .nbca-gallery a:hover img { transform: scale(1.03); }'
    + ' .nbca-gallery a { cursor: zoom-in; }'

    /* Lightbox modal */
    + ' .nbca-lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.55); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); display: none; align-items: center; justify-content: center; z-index: 99999; }'
    + ' .nbca-lightbox.open { display: flex; animation: nbca-lb-fade 0.2s ease; }'
    + ' @keyframes nbca-lb-fade { from { opacity: 0; } to { opacity: 1; } }'
    + ' .nbca-lightbox img { max-width: 92vw; max-height: 88vh; border-radius: 8px; box-shadow: 0 10px 60px rgba(0,0,0,0.5); object-fit: contain; cursor: default; user-select: none; }'
    + ' .nbca-lightbox-close, .nbca-lightbox-prev, .nbca-lightbox-next { position: absolute; background: rgba(255,255,255,0.12); color: #fff !important; border: 0; width: 52px; height: 52px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s, transform 0.2s; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; line-height: 1; padding: 0; }'
    + ' .nbca-lightbox-close:hover, .nbca-lightbox-prev:hover, .nbca-lightbox-next:hover { background: rgba(255,255,255,0.28); transform: scale(1.08); }'
    + ' .nbca-lightbox-close { top: 24px; right: 24px; font-size: 28px; }'
    + ' .nbca-lightbox-prev { left: 24px; top: 50%; margin-top: -26px; font-size: 36px; }'
    + ' .nbca-lightbox-next { right: 24px; top: 50%; margin-top: -26px; font-size: 36px; }'
    + ' .nbca-lightbox-counter { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); color: #fff; font-size: 13px; background: rgba(0,0,0,0.55); padding: 6px 14px; border-radius: 14px; letter-spacing: 0.4px; font-weight: 600; }'
    + ' @media (max-width: 540px) { .nbca-lightbox-prev { left: 8px; } .nbca-lightbox-next { right: 8px; } .nbca-lightbox-close { top: 12px; right: 12px; } }'

    /* Hide the address section inside user-added (spouse/family) wrappers via
       CSS so Angular never sees a JS-applied inline style mutation that could
       trigger a re-render cycle on blur. */
    + ' app-registrant-wrapper[data-nbca-user-added="1"] app-address { display: none !important; }'

    /* After the user clicks "Add Spouse / Family Member", hide it AND any
       nested "Create Linked Profile" button MemberClicks renders inside the
       new spouse wrapper. */
    + ' html[data-nbca-spouse-added="1"] button[data-nbca-linked-renamed="1"], html[data-nbca-spouse-added="1"] sl-button[data-nbca-linked-renamed="1"] { display: none !important; }'

    /* Brief loader overlay shown after clicking Add Spouse / Family Member,
       to mask the form render + nested button hide. */
    + ' #nbca-spouse-loader { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.15s ease; pointer-events: none; }'
    + ' #nbca-spouse-loader.show { opacity: 1; }'
    + ' #nbca-spouse-loader .nbca-spinner { border: 4px solid #e1e8ee; border-top: 4px solid #005189; border-radius: 50%; width: 42px; height: 42px; animation: nbca-spouse-spin 0.8s linear infinite; }'
    + ' @keyframes nbca-spouse-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }'

    /* Suppress the dark full-viewport flash during linked-profile field
       validation. Catches Angular CDK/Material backdrops, Bootstrap modal
       backdrop, any *-backdrop class, plus common loading/mask/dimmer
       patterns MemberClicks might use. */
    + ' .cdk-overlay-backdrop, .cdk-overlay-dark-backdrop, .cdk-overlay-transparent-backdrop, .mat-overlay-backdrop, .modal-backdrop, [class*="-backdrop"], [class*="loading-overlay"], [class*="loading-mask"], [class*="spinner-overlay"], [class*="dimmer"], [class*="-mask"][class*="loading"] { background: transparent !important; opacity: 0 !important; pointer-events: none !important; }'

    /* Compact credit-card payment form: pack BEM-named fields into a 6-col
       grid so the form fits in roughly half the vertical space. Layout:
         Row 1: First Name (3) | Last Name (3)
         Row 2: Company (6)
         Row 3: Card Number (4) | Card Type (2)
         Row 4: CVV (2) | Exp Month (2) | Exp Year (2)
         Row 5: Address Line (6)
         Row 6: City (3) | State (2) | Zip (1)
         Row 7: Country (6)
         Row 8: Captcha (6) */
    + ' formly-group.credit-card { display: grid !important; grid-template-columns: repeat(6, 1fr) !important; gap: 10px 16px !important; align-items: start !important; }'
    + ' formly-group.credit-card > formly-field { min-width: 0 !important; margin: 0 !important; }'
    + ' formly-group.credit-card .field { padding: 0 !important; margin: 0 !important; }'
    + ' formly-field.credit-card__first-name { grid-column: span 3; }'
    + ' formly-field.credit-card__last-name { grid-column: span 3; }'
    + ' formly-field.credit-card__company { grid-column: span 6; }'
    + ' formly-field.credit-card__number { grid-column: span 4; }'
    + ' formly-field.credit-card__type { grid-column: span 2; }'
    + ' formly-field.credit-card__cvv { grid-column: span 2; }'
    + ' formly-field.credit-card__expiration-month { grid-column: span 2; }'
    + ' formly-field.credit-card__expiration-year { grid-column: span 2; }'
    + ' formly-field.credit-card__address-line { grid-column: span 6; }'
    + ' formly-field.credit-card__city { grid-column: span 3; }'
    + ' formly-field.credit-card__state { grid-column: span 2; }'
    + ' formly-field.credit-card__zip { grid-column: span 1; }'
    + ' formly-field.credit-card__country { grid-column: span 6; }'
    + ' formly-field.credit-card__captcha { grid-column: span 6; }'
    /* Tighter section header inside payment form */
    + ' .credit-card .generic-header-wrapper__name, formly-group.credit-card ~ * .generic-header-wrapper__name { font-size: 1.15rem !important; margin: 0 0 10px !important; }'
    /* "What is my CVV code?" link — keep it on a single tight line below CVV */
    + ' .credit-card__cvv .cvv__link { font-size: 0.8rem; margin-top: 2px; display: inline-block; }'
    /* Mobile: stack everything into single column */
    + ' @media (max-width: 720px) { formly-group.credit-card { grid-template-columns: 1fr !important; } formly-group.credit-card > formly-field { grid-column: span 1 !important; } }'

    /* Radio-button replacement for the Member Type dropdown. The original
       sl-select is kept in the DOM (hidden) so Angular's form state still
       drives submission — radio clicks write back to it. CSS-based hide via
       the stable MemberClicks field ID means any Angular re-render keeps
       the dropdown invisible (no flash on change). */
    + ' sl-select[id*="_212914070_"], app-single-select[id*="_212914070_"] { display: none !important; }'
    /* DON'T use `formly-field:has(...)` to hide the Member Type or Organization
       formly-fields — MemberClicks wraps the whole form section in an outer
       formly-field, and CSS `:has()` matches EVERY ancestor formly-field, not
       just the immediate one, so it would hide the entire form. JS handles
       the formly-field hide via `closest('formly-field')` instead. */
    + ' .nbca-radio-group { display: flex; flex-direction: column; gap: 10px; margin: 10px 0 16px; max-width: 600px; }'
    + ' .nbca-radio-option { display: flex; align-items: center; padding: 14px 16px; border: 1px solid #d6dde3; border-radius: 8px; cursor: pointer; font-size: 1rem; color: #1a1a1a; background: #fff; transition: border-color 0.2s, background 0.2s, box-shadow 0.2s; }'
    + ' .nbca-radio-option:hover { border-color: #005189; background: #f7f9fb; }'
    + ' .nbca-radio-option input[type="radio"] { margin: 0 12px 0 0; accent-color: #005189; transform: scale(1.15); flex-shrink: 0; }'
    + ' .nbca-radio-option:has(input[type="radio"]:checked) { border-color: #005189; background: #eef5fa; box-shadow: 0 0 0 2px rgba(0,81,137,0.15); }'
    + ' .nbca-radio-label { flex: 1; }'

    /* Translucent full-viewport overlay shown after a Member Type radio
       toggle, while Angular re-validates and re-renders the form. Sits ABOVE
       the form flash so the user sees a steady loader instead of the form
       flicker. Pointer-events disabled by default so it can't trap clicks if
       the show/hide check ever drifts (separate `.show` class re-enables
       pointer-events only when actually visible — see `pointer-events` below). */
    + ' #nbca-mt-loader { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.12s ease; pointer-events: none; }'
    + ' #nbca-mt-loader.show { opacity: 1; pointer-events: auto; }'
    + ' #nbca-mt-loader .nbca-spinner { border: 4px solid #e1e8ee; border-top: 4px solid #005189; border-radius: 50%; width: 42px; height: 42px; animation: nbca-spouse-spin 0.8s linear infinite; }';

    document.head.appendChild(style);

    function getSliderHeight() {
        var header = document.getElementById('mc-primary-header-bar');
        var secondaryHeader = document.getElementById('mc-secondary-header-bar');
        var headerH = header ? header.offsetHeight : 80;
        var secH = secondaryHeader ? secondaryHeader.offsetHeight : 40;
        return window.innerHeight - headerH - secH;
    }

    function fixSliderElements() {
        var slider = document.getElementById('slider');
        if (!slider) return;
        var h = getSliderHeight() + 'px';

        slider.style.height = h;

        var mainImg = slider.querySelector('.nivo-main-image');
        if (mainImg) {
            mainImg.style.height = h;
            mainImg.style.width = '100%';
            mainImg.style.objectFit = 'cover';
        }

        var slices = slider.querySelectorAll('.nivo-slice');
        for (var j = 0; j < slices.length; j++) {
            slices[j].style.height = h;
            var sliceImg = slices[j].querySelector('img');
            if (sliceImg) {
                sliceImg.style.height = h;
                sliceImg.style.width = '100%';
                sliceImg.style.objectFit = 'cover';
                sliceImg.style.position = 'absolute';
                sliceImg.style.top = '0';
                sliceImg.style.left = '0';
            }
        }
    }

    function setupSliderObserver() {
        var slider = document.getElementById('slider');
        if (!slider || slider.dataset.observed) return;
        slider.dataset.observed = 'true';

        var observer = new MutationObserver(function() {
            fixSliderElements();
        });
        observer.observe(slider, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });

        fixSliderElements();
    }

    function hideArrowHeadings() {
        var headings = document.querySelectorAll('.home-sub .pad h1, .home-sub .pad h2');
        for (var i = 0; i < headings.length; i++) {
            if (headings[i].textContent.trim().match(/^[>\s]+$/)) {
                headings[i].style.display = 'none';
            }
        }
    }

    function restructureContent() {
        if (document.querySelector('.nbca-membership-divider')) return;

        var firstSub = document.querySelector('.sub-modules-flex .home-sub .pad > div');
        if (!firstSub) return;

        var homeSubs = document.querySelectorAll('.sub-modules-flex .home-sub');
        if (homeSubs.length < 2) return;
        var rightColumnPad = homeSubs[1].querySelector('.pad');
        if (!rightColumnPad) return;

        var spacerDivs = rightColumnPad.querySelectorAll('div[style]');
        for (var k = 0; k < spacerDivs.length; k++) {
            var inner = spacerDivs[k].innerHTML.trim();
            if (inner === '&nbsp;' || inner.match(/^(<br\s*\/?>[\s]*)+$/) || inner === '') {
                spacerDivs[k].style.display = 'none';
            }
        }

        var allH1s = firstSub.querySelectorAll('h1');
        var membershipH1 = null;
        for (var i = 0; i < allH1s.length; i++) {
            if (allH1s[i].textContent.indexOf('Membership') !== -1) {
                membershipH1 = allH1s[i];
                break;
            }
        }

        if (membershipH1) {
            var nodesToMove = [];
            var node = membershipH1;
            while (node) {
                nodesToMove.push(node);
                node = node.nextElementSibling;
            }

            var firstChild = rightColumnPad.firstChild;
            for (var j = 0; j < nodesToMove.length; j++) {
                rightColumnPad.insertBefore(nodesToMove[j], firstChild);
            }

            var hr = document.createElement('hr');
            hr.className = 'nbca-membership-divider';
            rightColumnPad.insertBefore(hr, firstChild);
        }
    }

    function addPatrolButton() {
        if (document.getElementById('cta-patrol-form')) return;
        var joinLink = document.getElementById('cta-join');
        if (!joinLink) return;

        var allSheets = document.styleSheets;
        var joinRules = '';
        for (var i = 0; i < allSheets.length; i++) {
            try {
                var rules = allSheets[i].cssRules || allSheets[i].rules;
                if (!rules) continue;
                for (var j = 0; j < rules.length; j++) {
                    if (rules[j].selectorText && rules[j].selectorText.indexOf('#cta-join') !== -1) {
                        joinRules += rules[j].cssText.replace(/#cta-join/g, '#cta-patrol-form') + ' ';
                    }
                }
            } catch(e) {}
        }

        if (joinRules) {
            var ruleStyle = document.createElement('style');
            ruleStyle.textContent = joinRules;
            document.head.appendChild(ruleStyle);
        }

        var newLink = document.createElement('a');
        newLink.id = 'cta-patrol-form';
        newLink.href = 'https://forms.gle/v3FVmHwEtq3V8H5B6';
        newLink.target = '_blank';
        newLink.textContent = 'Sign Up for Security Patrol';
        joinLink.parentNode.appendChild(newLink);
    }

    function lazyLoadGallery() {
        var imgs = document.querySelectorAll('.nbca-gallery img');
        for (var i = 0; i < imgs.length; i++) {
            if (!imgs[i].loading) imgs[i].loading = 'lazy';
        }
    }

    function addProfileButton() {
        if (document.getElementById('cta-profile')) return;
        var logoutLink = document.querySelector('a[href*="logout"], a.logout-link');
        if (!logoutLink) return;

        var logoutSelector = logoutLink.id ? '#' + logoutLink.id : null;
        if (logoutSelector) {
            var allSheets = document.styleSheets;
            var clonedRules = '';
            for (var i = 0; i < allSheets.length; i++) {
                try {
                    var rules = allSheets[i].cssRules || allSheets[i].rules;
                    if (!rules) continue;
                    for (var j = 0; j < rules.length; j++) {
                        if (rules[j].selectorText && rules[j].selectorText.indexOf(logoutSelector) !== -1) {
                            clonedRules += rules[j].cssText.split(logoutSelector).join('#cta-profile') + ' ';
                        }
                    }
                } catch (e) {}
            }
            if (clonedRules) {
                var ruleStyle = document.createElement('style');
                ruleStyle.textContent = clonedRules;
                document.head.appendChild(ruleStyle);
            }
        }

        var newLink = document.createElement('a');
        newLink.id = 'cta-profile';
        newLink.href = '/member-profile#/profile';
        newLink.textContent = 'Member Profile';
        newLink.style.marginRight = '10px';
        logoutLink.parentNode.insertBefore(newLink, logoutLink);
    }

    function init() {
        addPatrolButton();
        addProfileButton();
        hideArrowHeadings();
        restructureContent();
        setupSliderObserver();
        lazyLoadGallery();
    }

    init();
    setTimeout(init, 500);
    setTimeout(init, 1500);
    setTimeout(init, 3000);
    window.addEventListener('resize', fixSliderElements);
})();

(function () {
  if (location.pathname.indexOf('nbca-membership-application') === -1) return;

  var params = new URLSearchParams(location.search);
  var presets = {
    email:   params.get('email'),
    fname:   params.get('fname'),
    lname:   params.get('lname'),
    address: params.get('address'),
    city:    params.get('city'),
    zip:     params.get('zip')
  };

  var fieldMap = {
    email:   'sl-input[id*="_email_"]',
    fname:   'sl-input[id*="_firstName_"]',
    lname:   'sl-input[id*="_lastName_"]',
    address: 'sl-input[id*="_line1_"]',
    city:    'sl-input[id*="_city_"]',
    zip:     'sl-input[id*="_zip_"]'
  };

  var nativeInputSetter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype, 'value'
  ).set;

  function setShoelaceValue(el, value) {
    if (!el || !value || el.value === value) return false;
    el.value = value;
    var inner = el.shadowRoot && el.shadowRoot.querySelector('input');
    if (inner) {
      nativeInputSetter.call(inner, value);
      inner.dispatchEvent(new InputEvent('input', {
        bubbles: true, composed: true, inputType: 'insertText', data: value
      }));
      inner.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
    el.dispatchEvent(new CustomEvent('sl-input',  { bubbles: true, composed: true }));
    el.dispatchEvent(new CustomEvent('sl-change', { bubbles: true, composed: true }));
    el.dispatchEvent(new Event('input',  { bubbles: true, composed: true }));
    el.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    return true;
  }

  function expandSelfAccordion() {
    document.querySelectorAll('sl-details').forEach(function (d) {
      if (!d.open) d.open = true;
    });
  }

  // When the primary registrant is the only *visible* wrapper, auto-expand it.
  // The wrapper isn't an <sl-details> — collapse is a custom click handler on
  // the header. `wasAlone` is set true ONLY when verified expanded (sample
  // input has nonzero height); a click attempt alone doesn't set it. That way
  // if the first click misses (Angular mid-cycle on delete), the Delete
  // safety-net's later retries can re-attempt. A 200ms throttle prevents
  // rapid-fire clicking.
  var wasAlone = false;
  var lastExpandAttempt = 0;
  function expandPrimaryIfAlone() {
    var all = document.querySelectorAll('app-registrant-wrapper');
    var visible = [];
    for (var i = 0; i < all.length; i++) {
      var w = all[i];
      if (w.offsetWidth > 0 && w.offsetHeight > 0) visible.push(w);
    }
    var count = visible.length;

    if (count !== 1) {
      wasAlone = false;
      return;
    }
    var primary = visible[0];
    if (!isPrimaryWrapper(primary)) return;

    var sample = primary.querySelector('sl-input, sl-select');
    if (sample && sample.offsetHeight > 0) {
      wasAlone = true; // Verified expanded — stop attempting
      return;
    }
    if (wasAlone) return; // User manually collapsed after we expanded — don't fight

    // Throttle to 1500ms between clicks. Angular's expand animation runs
    // for ~300-500ms; if we click again during that window the second click
    // *toggles back* and collapses what the first one was opening. The
    // verify check (`sample.offsetHeight > 0` → wasAlone=true at the top of
    // this function) catches successful expansion on subsequent polls so we
    // stop clicking once it's open.
    var now = Date.now();
    if (now - lastExpandAttempt < 1500) return;
    lastExpandAttempt = now;

    // Single click target — `typeEl.parentElement` is the row that holds
    // the name + (Self) + chevron, and clicking it toggles the wrapper.
    // Trying multiple ancestors in sequence ended up toggling open→closed
    // because the click bubbles, so a second click on a parent would
    // collapse what the first click just expanded.
    var typeEl = primary.querySelector('.registrant__type');
    var header = typeEl && typeEl.parentElement;
    if (header) {
      try { header.click(); } catch (e) {}
    }
  }

  function renameLinkedProfileBtn() {
    document.querySelectorAll('button, sl-button').forEach(function (b) {
      if (b.dataset.nbcaLinkedRenamed === '1') return;
      var txt = (b.textContent || '').trim();
      if (txt !== 'Create Linked Profile') return;
      for (var i = 0; i < b.childNodes.length; i++) {
        var node = b.childNodes[i];
        if (node.nodeType === 3 && node.textContent.indexOf('Create Linked Profile') !== -1) {
          node.textContent = node.textContent.replace('Create Linked Profile', 'Add Spouse / Family Member');
        }
      }
      b.dataset.nbcaLinkedRenamed = '1';
    });
  }

  function replaceOrgWithHousehold() {
    var all = document.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.children.length !== 0) continue;
      if (el.childNodes.length === 0) continue;
      if (el.textContent.indexOf('rganization') === -1) continue;
      for (var j = 0; j < el.childNodes.length; j++) {
        var node = el.childNodes[j];
        if (node.nodeType === 3) {
          node.textContent = node.textContent.replace(/Organization/g, 'Household').replace(/organization/g, 'household');
        }
      }
    }
  }

  function hideOrgFields() {
    var orgInput = document.querySelector('sl-input[id*="_212914073_"]');
    if (orgInput && orgInput.dataset.nbcaOrgHidden !== '1') {
      var field = orgInput.closest('formly-field');
      (field || orgInput).style.display = 'none';
      orgInput.dataset.nbcaOrgHidden = '1';
    }

    document.querySelectorAll('div, span, label, h3, p').forEach(function (el) {
      if (el.dataset.nbcaOrgHidden === '1') return;
      if (el.children.length > 0) return;
      var txt = (el.textContent || '').trim().replace(/\*+\s*$/, '').trim();
      if (txt === 'Organization Name' || txt === 'Organization') {
        el.style.display = 'none';
        el.dataset.nbcaOrgHidden = '1';
      }
    });
  }

  function hideMembershipOptions() {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, label, div, p, span').forEach(function (el) {
      if (el.dataset.nbcaMoHidden === '1') return;
      if (el.children.length > 0) return;
      var txt = (el.textContent || '').trim();
      if (txt === 'Membership Options' || /^\d+\s+period\s*-\s*\$[\d.,]+$/i.test(txt)) {
        el.style.display = 'none';
        el.dataset.nbcaMoHidden = '1';
      }
    });
  }

  function fillEmptyFields() {
    for (var key in presets) {
      if (presets[key]) {
        var el = document.querySelector(fieldMap[key]);
        if (el && el.value === '') {
          setShoelaceValue(el, presets[key]);
        }
      }
    }
  }

  function isPrimaryWrapper(w) {
    var typeEl = w.querySelector('.registrant__type');
    return !!(typeEl && typeEl.textContent.indexOf('(Self)') !== -1);
  }

  function customizeLinkedProfile() {
    // Catch any "Create Linked Profile" button that MemberClicks rendered into
    // the new spouse wrapper — tag it so the CSS rule
    // `html[data-nbca-spouse-added="1"] button[data-nbca-linked-renamed="1"]`
    // hides it.
    renameLinkedProfileBtn();

    var wrappers = document.querySelectorAll('app-registrant-wrapper');
    if (wrappers.length < 2) return;

    for (var i = 0; i < wrappers.length; i++) {
      var linked = wrappers[i];
      if (isPrimaryWrapper(linked)) continue;
      if (linked.dataset.nbcaUserAdded !== '1') continue;

      if (linked.dataset.nbcaLinkedCustomized !== '1') {
        var emails = linked.querySelectorAll('sl-input[id*="_email_"]');
        for (var k = 0; k < emails.length; k++) {
          var em = emails[k];
          em.removeAttribute('readonly');
          try { em.readonly = false; } catch (e) {}
          if (em.style.pointerEvents === 'none') em.style.pointerEvents = '';
        }

        linked.dataset.nbcaLinkedCustomized = '1';
      }

      // Address section is hidden via global CSS rule
      // (`app-registrant-wrapper[data-nbca-user-added="1"] app-address`) — no
      // inline style mutation needed here.
    }
  }

  // Only the full-tree text walk (replaceOrgWithHousehold) is genuinely expensive
  // — it scans every DOM element. The other "hide" functions are sentinel-gated
  // and run cheap once an element has been hidden, so they can run every tick.
  // Throttling them caused a visible flash when Angular re-rendered "Organization
  // Name" / "1 period - $50" mid-flow.
  var lastHeavyTick = 0;
  function tick() {
    expandSelfAccordion();
    expandPrimaryIfAlone();
    renameLinkedProfileBtn();
    hideOrgFields();
    hideMembershipOptions();
    fillEmptyFields();
    reMarkLinkedWrappers();

    var now = Date.now();
    if (now - lastHeavyTick < 2000) return;
    lastHeavyTick = now;
    replaceOrgWithHousehold();
  }

  // Run tick on initial render to catch the form as it paints.
  tick();
  var intervalId = setInterval(tick, 500);
  setTimeout(function () { clearInterval(intervalId); }, 5000);

  // Detect non-primary wrappers (either freshly created via Add Spouse, or
  // restored from a previous session via the magic link flow) and ensure they
  // get our sentinel attributes so the address-hide CSS and linked-profile
  // button hide CSS apply. Any non-primary wrapper means "spouse exists,"
  // regardless of whether this session created it. If the spouse wrapper goes
  // away (user clicked Delete), clear the flag so the Add Spouse button
  // re-appears and the primary auto-expands again.
  function reMarkLinkedWrappers() {
    var wrappers = document.querySelectorAll('app-registrant-wrapper');
    var changed = false;
    var hasNonPrimary = false;
    var primary = null;
    for (var i = 0; i < wrappers.length; i++) {
      var w = wrappers[i];
      if (isPrimaryWrapper(w)) { primary = w; continue; }
      hasNonPrimary = true;
      if (w.dataset.nbcaUserAdded !== '1') {
        w.dataset.nbcaUserAdded = '1';
        changed = true;
      }
    }
    if (hasNonPrimary && document.documentElement.dataset.nbcaSpouseAdded !== '1') {
      document.documentElement.dataset.nbcaSpouseAdded = '1';
    }
    if (!hasNonPrimary && document.documentElement.dataset.nbcaSpouseAdded === '1') {
      delete document.documentElement.dataset.nbcaSpouseAdded;
    }
    if (changed) customizeLinkedProfile();
    renameLinkedProfileBtn();
  }

  // Narrowly-scoped observer: fires synchronously (microtask, before paint)
  // when Angular adds elements we care about — text we want to hide, registrant
  // wrappers (handles Previous/Next re-render), or fresh "Create Linked Profile"
  // buttons. Runs for the lifetime of the page so navigation between steps
  // doesn't lose our customizations.
  function addedSubtreeIsRelevant(n) {
    if (n.nodeType !== 1) return false;
    if (n.tagName === 'APP-REGISTRANT-WRAPPER') return true;
    if (n.querySelector && n.querySelector('app-registrant-wrapper')) return true;
    var txt = n.textContent || '';
    if (txt.indexOf('Create Linked Profile') !== -1) return true;
    return txt.indexOf('Membership Options') !== -1
        || txt.indexOf('Organization') !== -1
        || /\d+\s+period\s*-\s*\$/.test(txt);
  }
  function removedSubtreeIsWrapper(n) {
    if (n.nodeType !== 1) return false;
    if (n.tagName === 'APP-REGISTRANT-WRAPPER') return true;
    return !!(n.querySelector && n.querySelector('app-registrant-wrapper'));
  }
  var hideObserver = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        if (addedSubtreeIsRelevant(added[j])) {
          hideOrgFields();
          hideMembershipOptions();
          reMarkLinkedWrappers();
          expandPrimaryIfAlone();
          replaceOrgWithHousehold();
          return;
        }
      }
      var removed = mutations[i].removedNodes;
      for (var k = 0; k < removed.length; k++) {
        if (removedSubtreeIsWrapper(removed[k])) {
          reMarkLinkedWrappers();
          expandPrimaryIfAlone();
          return;
        }
      }
    }
  });
  hideObserver.observe(document.body, { childList: true, subtree: true });

  // Long-lived wrapper-count watcher. Polls the visible wrapper count every
  // 400ms and only fires customizations when it CHANGES, so it's cheap. This
  // is the reliable path for detecting spouse deletion (which MemberClicks
  // may do via display:none rather than DOM removal, which the observer
  // wouldn't catch) and for any state transition the tick would have missed
  // because it stopped after 5s.
  var lastWrapperCount = -1;
  setInterval(function () {
    var all = document.querySelectorAll('app-registrant-wrapper');
    var count = 0;
    for (var i = 0; i < all.length; i++) {
      if (all[i].offsetWidth > 0 && all[i].offsetHeight > 0) count++;
    }
    if (count !== lastWrapperCount) {
      lastWrapperCount = count;
      reMarkLinkedWrappers();
    }
    // Always run expandPrimaryIfAlone — it's sentinel-gated by `wasAlone`
    // when already expanded, so it's cheap when nothing's needed. This way
    // if the first click attempt failed (Angular mid-render), the next poll
    // retries until it succeeds.
    expandPrimaryIfAlone();
    // After the 5s tick interval expires, back navigation can re-render the
    // form with un-customized fields ("Membership Options", "1 period - $X",
    // "Organization Name") freshly visible. Re-running the hides each tick
    // catches those re-renders. Sentinel-gated on each element, so cheap
    // when nothing's pending.
    hideOrgFields();
    hideMembershipOptions();
  }, 400);

  // Safety net for the Delete click: regardless of whether MemberClicks
  // removes the wrapper from the DOM (observer fires) or just hides it
  // (observer doesn't fire), schedule a few expansion checks after the click.
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest && e.target.closest('a, button');
    if (!el) return;
    if ((el.textContent || '').trim() !== 'Delete') return;
    if (!el.closest('app-registrant-wrapper')) return;
    setTimeout(function () { reMarkLinkedWrappers(); expandPrimaryIfAlone(); }, 150);
    setTimeout(function () { reMarkLinkedWrappers(); expandPrimaryIfAlone(); }, 600);
    setTimeout(function () { reMarkLinkedWrappers(); expandPrimaryIfAlone(); }, 1500);
  }, true);

  // Customize the linked profile section ONLY after the user explicitly clicks
  // "Add Spouse / Family Member". Snapshot non-primary wrappers so the new one
  // MemberClicks adds gets identified and marked as user-added.
  var lastAddSpouseTime = 0;
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('button, sl-button');
    if (!b || b.dataset.nbcaLinkedRenamed !== '1') return;

    // Debounce: ignore clicks within 3s of the previous accepted one.
    var now = Date.now();
    if (now - lastAddSpouseTime < 3000) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }
    lastAddSpouseTime = now;

    // Flag the document so CSS hides any nested "Create Linked Profile" buttons
    // inside the new spouse wrapper.
    document.documentElement.dataset.nbcaSpouseAdded = '1';

    // Brief loader to mask the form render + nested-button-hide window so the
    // transition looks smooth instead of choppy.
    var loader = document.getElementById('nbca-spouse-loader');
    if (!loader) {
      loader = document.createElement('div');
      loader.id = 'nbca-spouse-loader';
      loader.innerHTML = '<div class="nbca-spinner"></div>';
      document.body.appendChild(loader);
    }
    requestAnimationFrame(function () { loader.classList.add('show'); });
    setTimeout(function () {
      loader.classList.remove('show');
      setTimeout(function () { if (loader.parentElement) loader.remove(); }, 200);
    }, 800);

    // Physically disable the button for the debounce window — pointer-events:none
    // stops the browser from dispatching click events to it at all.
    var prevPe = b.style.pointerEvents;
    var prevOp = b.style.opacity;
    var prevCur = b.style.cursor;
    b.style.pointerEvents = 'none';
    b.style.opacity = '0.5';
    b.style.cursor = 'not-allowed';
    setTimeout(function () {
      b.style.pointerEvents = prevPe;
      b.style.opacity = prevOp;
      b.style.cursor = prevCur;
    }, 3000);

    // Primary is detected by "(Self)" in its registrant header, so it's never
    // confused with a new linked wrapper even if Angular re-renders mid-flow.
    var existing = document.querySelectorAll('app-registrant-wrapper');
    for (var i = 0; i < existing.length; i++) {
      if (!isPrimaryWrapper(existing[i])) existing[i].dataset.nbcaPreClick = '1';
    }

    function markAndCustomize() {
      var wrappers = document.querySelectorAll('app-registrant-wrapper');
      for (var j = 0; j < wrappers.length; j++) {
        var w = wrappers[j];
        if (isPrimaryWrapper(w)) continue;
        if (w.dataset.nbcaPreClick !== '1' && w.dataset.nbcaUserAdded !== '1') {
          w.dataset.nbcaUserAdded = '1';
          if (w.style.display === 'none') w.style.display = '';
        }
      }
      customizeLinkedProfile();
    }

    // Retry every 500ms for 6 seconds. Don't gate on "is there pending work" —
    // at 300ms the linked wrapper might not exist yet, which would falsely
    // report "no pending" and stop the loop before MemberClicks finishes
    // rendering the wrapper. Each retry is cheap (sentinel-gated when done).
    var retryStart = Date.now();
    function retryUntilDone() {
      markAndCustomize();
      if (Date.now() - retryStart < 6000) {
        setTimeout(retryUntilDone, 500);
      }
    }
    setTimeout(retryUntilDone, 300);
  }, true);
})();

(function () {
  // Replace any sl-select labeled "Member Type" with a radio button group.
  // Mirrors the selection back to the original sl-select (kept hidden in the
  // DOM) so MemberClicks' Angular form state continues to drive submission.

  function isMemberTypeSelect(sel) {
    // MemberClicks form-field ID for "Member Type" — stable per installation.
    // (Same convention as `_212914073_` for the Organization field elsewhere.)
    var id = sel.id || '';
    if (id.indexOf('_212914070_') !== -1) return true;

    var attrLabel = sel.getAttribute('label');
    if (attrLabel && attrLabel.trim() === 'Member Type') return true;

    // The Member Type label isn't a <label> sibling — MemberClicks renders it
    // via a separate component (often `.generic-header-wrapper__name`), so
    // include that selector plus headings in the upward walk.
    var p = sel.parentElement;
    for (var hops = 0; p && hops < 6; hops++, p = p.parentElement) {
      var labels = p.querySelectorAll('label, legend, .generic-header-wrapper__name, h1, h2, h3, h4, h5, h6');
      for (var i = 0; i < labels.length; i++) {
        var t = labels[i].textContent.replace(/\*+\s*$/, '').trim();
        if (t === 'Member Type') return true;
      }
    }
    return false;
  }

  function readOptions(slSelect) {
    var nodes = slSelect.querySelectorAll('sl-option, sl-menu-item, option');
    var out = [];
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var value = n.getAttribute('value');
      if (value == null) value = n.value;
      if (value == null) value = n.textContent.trim();
      out.push({ value: String(value), label: n.textContent.trim() });
    }
    return out;
  }

  // Anchor at the formly-field so the radio group sits OUTSIDE the part of the
  // template Angular re-renders on value change. Angular re-renders the inside
  // of app-single-select on every sl-change, which previously caused our
  // radio group (sibling of app-single-select) to be torn out and rebuilt,
  // producing the visible flash. The formly-field stays stable.
  function radioAnchor(slSelect) {
    return slSelect.closest('formly-field') || slSelect.closest('app-single-select') || slSelect;
  }

  // Find the form's Next button. MemberClicks renders it as <sl-button>
  // (Shoelace web component), not a native <button> — so the query has
  // to include both. The diagnostic snippet that first ran with only
  // `button` returned NO NEXT BUTTON FOUND, which is why forceNextEnabled
  // was silently no-oping.
  function findNextBtn() {
    var btns = document.querySelectorAll('button, sl-button');
    for (var i = 0; i < btns.length; i++) {
      if ((btns[i].textContent || '').trim() === 'Next' && btns[i].offsetWidth > 0) {
        return btns[i];
      }
    }
    return null;
  }
  // Broad disabled detection — MemberClicks may signal "not clickable yet"
  // via any of: HTML `disabled`, `aria-disabled`, a class, or CSS
  // `pointer-events: none`. Initial inline-spinner version only checked HTML
  // `disabled` and missed the actual signal, which is why the loader never
  // appeared.
  function isNextDisabled(btn) {
    if (!btn) return true;
    if (btn.disabled) return true;
    if (btn.hasAttribute('disabled')) return true;
    if (btn.getAttribute('aria-disabled') === 'true') return true;
    if (btn.classList.contains('disabled')) return true;
    var s = window.getComputedStyle(btn);
    if (s.pointerEvents === 'none') return true;
    return false;
  }

  // Translucent full-viewport overlay shown after a radio toggle. Sits ABOVE
  // the form so the user gets steady visual feedback even if Angular flashes
  // (tears down and rebuilds) the form section behind it.
  // Kept around (unused) in case force-enable doesn't fully stick and we
  // need to fall back to "show loader during the wait" instead.
  function showMtLoader() {
    var loader = document.getElementById('nbca-mt-loader');
    if (!loader) {
      loader = document.createElement('div');
      loader.id = 'nbca-mt-loader';
      loader.innerHTML = '<div class="nbca-spinner"></div>';
      document.body.appendChild(loader);
    }
    requestAnimationFrame(function () { loader.classList.add('show'); });
  }
  function hideMtLoader() {
    var loader = document.getElementById('nbca-mt-loader');
    if (!loader) return;
    loader.classList.remove('show');
    setTimeout(function () { if (loader.parentElement) loader.remove(); }, 150);
  }

  // Aggressively keep the Next button enabled for a brief window after a
  // radio toggle. Angular's form validation flips it to disabled while it
  // re-validates (~2s) — but the form is otherwise valid, so the disable
  // is just visual lag. A MutationObserver on the button fires in a
  // microtask BEFORE paint, so when Angular sets `disabled` /
  // `aria-disabled` / a `disabled` class / `pointer-events:none`, we undo
  // it instantly and the user never sees the greyed state.
  function forceNextEnabled() {
    var btn = findNextBtn();
    if (!btn) return;
    function unDisable() {
      if (btn.disabled) btn.disabled = false;
      if (btn.hasAttribute('disabled')) btn.removeAttribute('disabled');
      if (btn.getAttribute('aria-disabled') === 'true') btn.removeAttribute('aria-disabled');
      btn.classList.remove('disabled');
      if (btn.style.pointerEvents === 'none') btn.style.pointerEvents = '';
    }
    unDisable();
    var observer = new MutationObserver(unDisable);
    observer.observe(btn, { attributes: true, attributeFilter: ['disabled', 'aria-disabled', 'class', 'style'] });
    // Stop forcing after 3s. By then Angular's validation should have
    // resolved naturally — if the form is genuinely invalid for some
    // reason, the button greys out at that point.
    setTimeout(function () { observer.disconnect(); }, 3000);
  }

  // Re-sync radio checked state to match sl-select's current value without
  // rebuilding the DOM. Used when a group already exists in the right place —
  // avoids the rebuild flash on each toggle.
  // Belt-and-suspenders inline display:none. The CSS rule keys on the `id`
  // attribute (`sl-select[id*="_212914070_"]`), but on back-navigation Angular
  // can briefly paint the new sl-select before its id is set, causing the
  // old dropdown with its prior selection to flash visible. An inline style
  // applied in microtask (via the MutationObserver -> tick path) catches
  // the element before paint, regardless of attribute timing.
  function hideMemberTypeSelect(slSelect) {
    if (slSelect.style.display !== 'none') slSelect.style.display = 'none';
    var wrapper = slSelect.closest('app-single-select');
    if (wrapper && wrapper.style.display !== 'none') wrapper.style.display = 'none';
  }

  function syncRadioState(group, slSelect) {
    hideMemberTypeSelect(slSelect);
    var current = String(slSelect.value == null ? '' : slSelect.value);
    var inputs = group.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
      var shouldBeChecked = (inputs[i].value === current);
      if (inputs[i].checked !== shouldBeChecked) inputs[i].checked = shouldBeChecked;
    }
  }

  function buildRadios(slSelect) {
    var options = readOptions(slSelect);
    if (options.length === 0) return;

    hideMemberTypeSelect(slSelect);

    var anchor = radioAnchor(slSelect);
    var container = anchor.parentNode;
    if (!container) return;

    var prior = container.querySelector(':scope > .nbca-radio-group');
    if (prior) prior.remove();

    var group = document.createElement('div');
    group.className = 'nbca-radio-group';
    group.setAttribute('role', 'radiogroup');
    group.setAttribute('aria-label', 'Member Type');

    var current = slSelect.value;

    options.forEach(function (opt, idx) {
      var rid = 'nbca-mt-' + idx + '-' + Math.random().toString(36).slice(2, 7);
      var row = document.createElement('label');
      row.className = 'nbca-radio-option';
      row.setAttribute('for', rid);

      var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'nbca-member-type';
      input.id = rid;
      input.value = opt.value;
      if (current != null && String(current) === opt.value) input.checked = true;

      input.addEventListener('change', function () {
        if (!input.checked) return;
        // Pre-check Next state. If it was disabled before the click (form
        // genuinely invalid for some other reason), don't show the loader —
        // we'd risk leaving it up if the form never becomes valid.
        var preBtn = findNextBtn();
        var nextWasEnabled = !!preBtn && !isNextDisabled(preBtn);

        if (nextWasEnabled) showMtLoader();

        // Re-resolve the sl-select on each click: Angular may have replaced
        // the original element after a prior change, so the captured reference
        // could be stale. The MemberClicks field ID is stable across renders.
        var live = document.querySelector('sl-select[id*="_212914070_"]') || slSelect;
        try { live.value = opt.value; } catch (e) {}
        // Only dispatch the Shoelace CustomEvents — Angular's formly-shoelace
        // bindings listen on sl-change. Native Event('input') / Event('change')
        // dispatches were redundant AND were triggering a global MooTools
        // listener that crashes on our events ("Cannot read properties of
        // undefined (reading 'test')" inside mootools.js Event#initialize).
        // Dropping them removes that noise from the console.
        function safeDispatch(ev) { try { live.dispatchEvent(ev); } catch (e) {} }
        safeDispatch(new CustomEvent('sl-input',  { bubbles: true, composed: true }));
        safeDispatch(new CustomEvent('sl-change', { bubbles: true, composed: true }));

        if (!nextWasEnabled) return;
        // Hide loader once Next is clickable again. Minimum 600ms so the
        // loader doesn't flicker on fast validators; maximum 3500ms safety.
        // Browser-blocks-disabled-buttons means we can't make Next clickable
        // sooner; the loader masks the unavoidable wait.
        var start = Date.now();
        var checker = setInterval(function () {
          var elapsed = Date.now() - start;
          var b = findNextBtn();
          var nowEnabled = !!b && !isNextDisabled(b);
          if (elapsed > 3500 || (nowEnabled && elapsed > 600)) {
            clearInterval(checker);
            hideMtLoader();
          }
        }, 80);
      });

      var text = document.createElement('span');
      text.className = 'nbca-radio-label';
      text.textContent = opt.label;

      row.appendChild(input);
      row.appendChild(text);
      group.appendChild(row);
    });

    container.insertBefore(group, anchor);
  }

  function tick() {
    var selects = document.querySelectorAll('sl-select');
    for (var i = 0; i < selects.length; i++) {
      var s = selects[i];
      if (!isMemberTypeSelect(s)) continue;

      var anchor = radioAnchor(s);
      if (!anchor.parentNode) continue;

      // Don't rely on a sentinel on the sl-select (Angular may replace it).
      // Check the actual DOM: if a radio group already exists in the anchor's
      // parent, just sync state — never rebuild on every value change.
      var existing = anchor.parentNode.querySelector(':scope > .nbca-radio-group');
      if (existing) {
        syncRadioState(existing, s);
        continue;
      }
      buildRadios(s);
    }
  }

  tick();
  setInterval(tick, 500);

  // Faster-than-polling response: if Angular tears down the radio group during
  // a re-render (back navigation, form-step transition), rebuild before paint.
  // MutationObserver's callback runs in a microtask between the mutation and
  // the next paint, and it batches all mutations from one drain into one
  // callback — so a direct tick() per callback is correct AND cheap.
  // rAF would be too late (it fires before the NEXT paint, not the current
  // one), and would leave a one-frame visible flash.
  new MutationObserver(tick).observe(document.body, { childList: true, subtree: true });
})();

(function () {
  function getUrlParams() {
    var search = location.search.replace(/^\?/, '');
    var hash = location.hash;
    var hashSearch = '';
    var hashIdx = hash.indexOf('?');
    if (hashIdx !== -1) hashSearch = hash.substring(hashIdx + 1);
    var combined = [search, hashSearch].filter(Boolean).join('&');
    return new URLSearchParams(combined);
  }

  var params = getUrlParams();
  var magicUser = params.get('u');
  var magicPass = params.get('p');
  var nextUrl = params.get('next');
  var magicFname = params.get('n');

  if (nextUrl) sessionStorage.setItem('nbca_post_login_next', nextUrl);
  if (magicUser && magicPass) {
    localStorage.setItem('nbca_used_magic_link', '1');
    localStorage.setItem('nbca_magic_email', magicUser);
    if (magicFname) localStorage.setItem('nbca_magic_fname', magicFname);
  }

  if (magicUser || magicPass || nextUrl || magicFname) {
    try {
      var u = new URL(location.href);
      ['u', 'p', 'next', 'n'].forEach(function (k) { u.searchParams.delete(k); });
      var cleanHash = location.hash.replace(/([?&])(u|p|next|n)=[^&]*/g, '$1').replace(/[?&]$/, '');
      history.replaceState({}, '', u.pathname + u.search + cleanHash);
    } catch (e) {}
  }

  if (magicUser && magicPass && location.pathname.indexOf('/login') !== -1) {
    showLoadingOverlay('Signing you in...');
  }

  function isLoginPage() {
    return location.pathname.indexOf('/login') !== -1 && location.hash.indexOf('reset-password') === -1;
  }
  function isResetPasswordPage() {
    return location.hash.indexOf('reset-password') !== -1;
  }
  function isFormPage() {
    return location.pathname.indexOf('nbca-membership-application') !== -1;
  }

  function fireNativeEvent(el, type) {
    try {
      var evt = document.createEvent('HTMLEvents');
      evt.initEvent(type, true, true);
      el.dispatchEvent(evt);
    } catch (e) {
      try { el.dispatchEvent(new Event(type, { bubbles: true })); } catch (e2) {}
    }
  }

  // Mobile-resilient click: native .click() can be flaky on touch devices,
  // so we also dispatch synthetic mouse events as a backup.
  function robustClick(el) {
    if (!el) return;
    try { el.click(); } catch (e) {}
    try {
      ['mousedown', 'mouseup', 'click'].forEach(function (type) {
        try { el.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, view: window })); }
        catch (e) {}
      });
    } catch (e) {}
  }

  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype, 'value'
  ).set;
  function setInputValue(el, value) {
    nativeInputValueSetter.call(el, value);
    fireNativeEvent(el, 'input');
    fireNativeEvent(el, 'change');
  }

  // Mobile-resilient visibility check (offsetParent is unreliable on iOS Safari for
  // elements inside scroll containers or with transformed ancestors).
  function isVisible(el) {
    if (!el || el.hidden) return false;
    var rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;
    var style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    return true;
  }

  function findLoginElements() {
    var inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
    var passInput = inputs.filter(function (i) { return i.type === 'password' && isVisible(i); })[0];

    var userInput = null;
    if (passInput) {
      var container = passInput.closest('form') ||
                      passInput.closest('mat-card, .login-form, .login-section') ||
                      passInput.parentElement.parentElement;
      if (container) {
        userInput = Array.prototype.slice.call(
          container.querySelectorAll('input[type="text"]')
        ).filter(isVisible)[0];
      }
    }

    var loginBtn = null;
    Array.prototype.slice.call(document.querySelectorAll('button')).forEach(function (b) {
      var txt = (b.textContent || '').trim().toUpperCase();
      if (!loginBtn && (txt === 'LOG IN' || txt === 'LOGIN' || txt === 'SIGN IN')) loginBtn = b;
    });
    return { userInput: userInput, passInput: passInput, loginBtn: loginBtn };
  }

  // ============ Loading overlay ============
  function ensureSpinnerKeyframes() {
    if (document.getElementById('nbca-spin-keyframes')) return;
    var s = document.createElement('style');
    s.id = 'nbca-spin-keyframes';
    s.textContent = '@keyframes nbca-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
    document.head.appendChild(s);
  }
  function showLoadingOverlay(message) {
    if (document.getElementById('nbca-loading-overlay')) return;
    ensureSpinnerKeyframes();
    var overlay = document.createElement('div');
    overlay.id = 'nbca-loading-overlay';
    overlay.style.cssText =
      'position:fixed;top:0;left:0;right:0;bottom:0;z-index:200000;' +
      'background:rgba(255,255,255,0.97);' +
      'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
      'font-family:Arial,Helvetica,sans-serif;color:#005189;' +
      'opacity:0;transition:opacity 0.2s;';
    overlay.innerHTML =
      '<div style="border:4px solid #e1e8ee;border-top:4px solid #005189;border-radius:50%;width:42px;height:42px;animation:nbca-spin 0.8s linear infinite;"></div>' +
      '<div style="margin-top:18px;font-size:16px;font-weight:600;">' + message + '</div>';
    document.documentElement.appendChild(overlay);
    requestAnimationFrame(function () { overlay.style.opacity = '1'; });
  }
  function hideLoadingOverlay() {
    var o = document.getElementById('nbca-loading-overlay');
    if (!o) return;
    o.style.opacity = '0';
    setTimeout(function () { if (o.parentElement) o.remove(); }, 200);
  }

  // ============ Auto-login ============
  function autoLogin() {
    if (!isLoginPage() || !magicUser || !magicPass) return;
    var els = findLoginElements();
    if (!els.userInput || !els.passInput || !els.loginBtn) return;
    if (els.userInput.dataset.nbcaFilled === '1') return;

    showLoadingOverlay('Signing you in...');

    try {
      setInputValue(els.userInput, magicUser);
      setInputValue(els.passInput, magicPass);
      els.userInput.dataset.nbcaFilled = '1';

      setTimeout(function () {
        robustClick(els.loginBtn);
        // If the button click didn't work (rare on mobile), try form submission as backup
        if (els.loginBtn.closest && els.loginBtn.closest('form')) {
          setTimeout(function () {
            if (isLoginPage()) {
              try { els.loginBtn.closest('form').submit(); } catch (e) {}
            }
          }, 800);
        }
      }, 400);

      // Bounce/typo fallback: if still on login page after 6 seconds, give up
      // and let the user type their credentials manually.
      setTimeout(function () {
        if (isLoginPage()) {
          hideLoadingOverlay();
          els.userInput.dataset.nbcaFilled = '0';
        }
      }, 6000);
    } catch (e) {
      console.warn('[NBCA auto-login]', e);
      hideLoadingOverlay();
    }
  }

  function isLoggedIn() {
    return !!document.querySelector('a[href*="logout"], a.logout-link');
  }

  var nbcaRedirectScheduled = false;
  function maybeRedirect() {
    if (nbcaRedirectScheduled) return;
    var pending = sessionStorage.getItem('nbca_post_login_next');
    if (!pending || isLoginPage() || !isLoggedIn()) return;
    nbcaRedirectScheduled = true;
    setTimeout(function () {
      sessionStorage.removeItem('nbca_post_login_next');
      location.href = pending;
    }, 200);
  }

  // ============ Banner infrastructure (slide-down animation + pusher) ============
  var NBCA_BANNER_H = 48;
  function ensureBannerCss() {
    if (document.getElementById('nbca-banner-css')) return;
    var s = document.createElement('style');
    s.id = 'nbca-banner-css';
    s.textContent =
      'body { transition: transform 0.3s ease-out; } ' +
      'html[data-nbca-banner="1"] body { transform: translateY(' + NBCA_BANNER_H + 'px) !important; }';
    document.head.appendChild(s);
  }
  function applyBannerPusher() {
    ensureBannerCss();
    document.documentElement.setAttribute('data-nbca-banner', '1');
  }
  function maybeRemoveBannerPusher() {
    if (document.getElementById('nbca-pw-banner')) return;
    if (document.getElementById('nbca-reset-sent-banner')) return;
    document.documentElement.removeAttribute('data-nbca-banner');
  }

  function slideInBanner(banner) {
    banner.style.transform = 'translateY(-100%)';
    banner.style.transition = 'transform 0.3s ease-out';
    document.documentElement.appendChild(banner);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.style.transform = 'translateY(0)';
      });
    });
  }
  function slideOutBanner(banner, onDone) {
    banner.style.transform = 'translateY(-100%)';
    // Remove pusher simultaneously so body slides up in parallel
    maybeRemoveBannerPusherFromBanner(banner);
    setTimeout(function () {
      if (banner.parentElement) banner.remove();
      maybeRemoveBannerPusher();
      if (onDone) onDone();
    }, 300);
  }
  function maybeRemoveBannerPusherFromBanner(exiting) {
    // Pre-check: if only this banner is on-screen, drop the pusher attribute
    // immediately so body's transition runs in parallel with the banner's exit.
    var ids = ['nbca-pw-banner', 'nbca-reset-sent-banner'];
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el !== exiting) return;
    }
    document.documentElement.removeAttribute('data-nbca-banner');
  }

  function baseBannerStyle(bg, border, color) {
    return 'position:fixed;top:0;left:0;right:0;z-index:100000;height:' + NBCA_BANNER_H + 'px;box-sizing:border-box;' +
      'background:' + bg + ';border-bottom:2px solid ' + border + ';color:' + color + ';' +
      'display:flex;align-items:center;justify-content:center;gap:6px;' +
      'padding:0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;' +
      'box-shadow:0 2px 6px rgba(0,0,0,0.08);will-change:transform;';
  }

  // ============ Combined welcome + reset-password banner ============
  function maybePasswordBanner() {
    if (isLoginPage() || isResetPasswordPage() || isFormPage()) return;
    if (!isLoggedIn()) return;
    if (sessionStorage.getItem('nbca_post_login_next')) return;
    if (nbcaRedirectScheduled) return;
    if (localStorage.getItem('nbca_used_magic_link') !== '1') return;
    if (localStorage.getItem('nbca_pw_banner_dismissed') === '1') return;
    if (document.getElementById('nbca-pw-banner')) return;

    var firstName = localStorage.getItem('nbca_magic_fname');
    var greeting = firstName ? 'Welcome to NBCA, ' + firstName + '!' : 'Welcome to NBCA!';

    var banner = document.createElement('div');
    banner.id = 'nbca-pw-banner';
    banner.style.cssText = baseBannerStyle('#cce8f4', '#005189', '#003d66');
    banner.innerHTML =
      '<span><strong>' + greeting + '</strong> For your security, please ' +
      '<a href="/login#/reset-password" style="color:#005189;text-decoration:underline;font-weight:bold;margin:0 4px;">reset your temporary password</a>.</span>' +
      '<button id="nbca-pw-banner-close" style="margin-left:14px;background:transparent;border:1px solid #003d66;color:#003d66;border-radius:4px;padding:3px 10px;cursor:pointer;font-size:12px;">Dismiss</button>';

    applyBannerPusher();
    slideInBanner(banner);
    document.getElementById('nbca-pw-banner-close').addEventListener('click', function () {
      localStorage.setItem('nbca_pw_banner_dismissed', '1');
      slideOutBanner(banner);
    });
  }

  // ============ Reset password page auto-submit ============
  var nbcaResetSubmitted = false;
  function maybePrefillResetEmail() {
    if (!isResetPasswordPage()) return;
    var email = localStorage.getItem('nbca_magic_email');
    if (!email) return;
    var emailInput = document.querySelector('input[autocomplete="email"], input[type="email"], #mat-input-0');
    if (!emailInput) return;

    if (emailInput.dataset.nbcaResetPrefilled !== '1') {
      setInputValue(emailInput, email);
      emailInput.dataset.nbcaResetPrefilled = '1';
    }

    if (nbcaResetSubmitted) return;
    if (emailInput.value !== email) return;

    var btn = null;
    Array.prototype.slice.call(document.querySelectorAll('button')).forEach(function (b) {
      var txt = (b.textContent || '').trim().toUpperCase();
      if (!btn && txt.indexOf('SEND PASSWORD RESET') !== -1) btn = b;
    });
    if (!btn || btn.disabled) return;

    nbcaResetSubmitted = true;
    sessionStorage.setItem('nbca_show_reset_sent', '1');
    localStorage.setItem('nbca_pw_banner_dismissed', '1');
    showLoadingOverlay('Sending password reset email...');
    setTimeout(function () {
      robustClick(btn);
      setTimeout(function () { location.href = '/home'; }, 900);
    }, 500);
  }

  // ============ Green confirmation banner ============
  function maybeResetSentBanner() {
    if (sessionStorage.getItem('nbca_show_reset_sent') !== '1') return;
    if (!document.body) return;
    if (document.getElementById('nbca-reset-sent-banner')) return;
    if (isLoginPage() || isResetPasswordPage()) return;

    var banner = document.createElement('div');
    banner.id = 'nbca-reset-sent-banner';
    banner.style.cssText = baseBannerStyle('#d4edda', '#28a745', '#155724');
    banner.innerHTML = '<strong style="margin-right:6px;">&check; Check your email</strong> &mdash; we sent you a link to set a new password.';
    applyBannerPusher();
    slideInBanner(banner);

    setTimeout(function () {
      sessionStorage.removeItem('nbca_show_reset_sent');
      slideOutBanner(banner);
    }, 5000);
  }

  function tick() {
    try { autoLogin(); } catch (e) {}
    try { maybeRedirect(); } catch (e) {}
    try { maybePasswordBanner(); } catch (e) {}
    try { maybePrefillResetEmail(); } catch (e) {}
    try { maybeResetSentBanner(); } catch (e) {}
  }

  tick();
  var intervalId = setInterval(tick, 300);
  setTimeout(function () { clearInterval(intervalId); }, 10000);
})();

(function () {
  var GALLERY_SELECTOR = '.nbca-gallery a';
  var lightbox, imgEl, counter, urls = [], current = 0;

  function buildLightbox() {
    if (lightbox) return;
    lightbox = document.createElement('div');
    lightbox.className = 'nbca-lightbox';
    lightbox.innerHTML =
      '<button class="nbca-lightbox-close" type="button" aria-label="Close">×</button>' +
      '<button class="nbca-lightbox-prev" type="button" aria-label="Previous">‹</button>' +
      '<button class="nbca-lightbox-next" type="button" aria-label="Next">›</button>' +
      '<img alt="" />' +
      '<div class="nbca-lightbox-counter"></div>';
    document.body.appendChild(lightbox);

    imgEl = lightbox.querySelector('img');
    counter = lightbox.querySelector('.nbca-lightbox-counter');

    lightbox.querySelector('.nbca-lightbox-close').addEventListener('click', close);
    lightbox.querySelector('.nbca-lightbox-prev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
    lightbox.querySelector('.nbca-lightbox-next').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  function collectUrls() {
    var anchors = document.querySelectorAll(GALLERY_SELECTOR);
    urls = [];
    for (var i = 0; i < anchors.length; i++) urls.push(anchors[i].href);
  }

  function show(idx) {
    if (!urls.length) return;
    current = (idx + urls.length) % urls.length;
    imgEl.src = urls[current];
    counter.textContent = (current + 1) + ' / ' + urls.length;
  }

  function open(idx) {
    buildLightbox();
    collectUrls();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    show(idx);
  }

  function close() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest(GALLERY_SELECTOR);
    if (!a) return;
    e.preventDefault();
    collectUrls();
    var idx = urls.indexOf(a.href);
    open(idx >= 0 ? idx : 0);
  });
})();
