# Signature Fragrance — Shopify migration notes

The GitHub Pages version is a presentation prototype. Shopify is the intended production commerce layer.

## Product architecture
- One Shopify product per fragrance.
- Product option: `Size`.
- Variant values: `2 mL`, `5 mL`, `10 mL` where offered.
- Prototype price tiers remain merchandising metadata: Core, Select, Premium, Reserve.
- Draft SKUs follow `SF-[Bottle ID]-[Size]ML`, for example `SF-03-5ML`.
- The provided draft CSV is deliberately unpublished and has no inventory tracker or image URLs.

## What Shopify should own at launch
1. Secure checkout and payment processing.
2. Authoritative Ontario/Canadian tax calculation.
3. Inventory by decant variant.
4. Pickup and local-delivery configuration.
5. Any enabled compliant shipping services.
6. Order confirmation, customer emails, refunds and fulfillment status.
7. Discount codes and gift cards if used.
8. Analytics and conversion tracking.
9. Production privacy/terms/refund/fulfillment policies.

## Subscription architecture
The prototype demonstrates three mix-and-match monthly plans. Shopify supports recurring purchase plans, but a customer-selected multi-fragrance box may require subscription + bundle/mix-and-match functionality beyond a basic single-product subscription setup. Preserve the prototype customer experience, but choose the production subscription implementation after confirming:
- customers can choose/swap scents;
- Premium/Reserve surcharges can be represented cleanly;
- skip/pause/cancel management works;
- inventory is respected per selected fragrance variant;
- monthly renewal emails and failed-payment handling are acceptable.

## Guest-first experience
For one-time orders, keep account sign-in optional. The storefront should not put an account wall before checkout. Subscription management can use Shopify's secure customer/subscription management experience as required by the selected subscription implementation.

## Photography
The GitHub prototype intentionally uses stylized bottle art. Before Shopify launch, create or license product imagery that can legally be used for commerce, then add it to products/collections and optimize for mobile.

## Before payment goes live
- Confirm business identity/contact information.
- Verify decant labeling and cosmetic compliance requirements.
- Finalize alcohol-based fragrance carrier handling.
- Finalize pickup location and local-delivery boundaries.
- Recheck every price against current replacement cost.
- Confirm atomizer/label/packaging COGS.
- Test taxes and checkout on mobile.
- Test subscriptions, cancellations, refunds and stock-outs.
