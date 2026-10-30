# SIGNATURE FRAGRANCE — GitHub Pages showcase prototype

A static, guest-first fragrance-decant storefront built to demonstrate the intended customer experience before the production store moves to Shopify.

## What this prototype includes
- 28-fragrance launch catalog from the current active wardrobe.
- 2 mL, 5 mL and 10 mL variants where offered.
- Core / Select / Premium / Reserve merchandising tiers.
- Search, category filters and expanded product details.
- Local browser shopping bag.
- Explorer, Rotation and Travel Duo monthly-box builders with tier surcharges.
- Working Toronto Flight builder: 5 × 2 mL from eligible Core / Select scents.
- Guest checkout prototype: contact → fulfillment → order review → payment handoff.
- Ontario HST estimate on the review screen for demonstration only.
- GTA pickup and prototype local-delivery flow.
- Authenticity, fulfillment, returns/damage, privacy, terms and contact prototype policy copy.
- Mobile-responsive layout and basic PWA/offline support.
- Shopify draft product/variant CSV for later migration.

## Prototype boundary
The final button is **Proceed to payment**. No credit-card fields exist and no order/customer form is transmitted. The bag is stored only in browser `localStorage`.

## Deploy on GitHub Pages
1. Create or open the GitHub repository intended for this prototype.
2. Upload the **contents of this folder** directly to the repository root on `main`.
3. Do not upload only the ZIP and do not nest the site inside another folder.
4. In GitHub: **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.
5. Wait for Pages to publish, then open the generated public URL.

## Shopify migration direction
The production store is intended to move to Shopify. `SHOPIFY_PRODUCT_IMPORT_DRAFT.csv` expresses each fragrance as one product and decant size as the `Size` variant. It is intentionally unpublished (`Published=FALSE`) and does not contain live inventory or product photography.

Before importing for production:
- Re-verify replacement cost and retail pricing.
- Add final SKUs/inventory rules if changed.
- Add product photos owned/licensed for store use.
- Set tax, pickup/local delivery and compliant fragrance shipping in Shopify.
- Decide whether the monthly mix-and-match box uses Shopify Subscriptions alone or a compatible bundle/subscription app.
- Replace prototype policies with reviewed production policies.
- Configure store contact details and legal business information.

## Files
- `index.html` — storefront shell.
- `styles.css` — responsive visual system.
- `app.js` — catalog, cart, subscription, flight, checkout-review and policy logic.
- `PRICING_MODEL.csv` — pricing/unit-economics planning model.
- `MARKET_RESEARCH.md` — market/research notes.
- `SHOPIFY_PRODUCT_IMPORT_DRAFT.csv` — draft product/variant structure for Shopify.
- `SHOPIFY_MIGRATION_NOTES.md` — production migration checklist.
- `GITHUB_HANDOVER_PROMPT.txt` — copy/paste deployment handoff for another ChatGPT execution session.
- `.nojekyll` — GitHub Pages compatibility.

## Catalog authority
The 28 launch products correspond to the current active 28-bottle fragrance wardrobe used for this project. Dolce & Gabbana Light Blue Pour Homme remains outside the active launch catalog.
