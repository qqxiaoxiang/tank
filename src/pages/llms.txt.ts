import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const content = `# GX-SANYU — Intelligent Aerobic Fermentor Manufacturer

> GX-SANYU manufactures the 11FFG-100 intelligent aerobic fermentor for livestock waste treatment and organic fertilizer production. In cooperation with Sanyu of Japan.

## Core Product

- **Model**: GX-SANYU 11FFG-100
- **Type**: Vertical aerobic fermentor
- **Application**: Pig manure, cow manure, chicken manure, and other agricultural organic waste
- **Key Features**: Patented heat exchanger (saves 46,000 kWh/year), 304 stainless steel, Mitsubishi PLC automation, 7-day fermentation cycle
- **Output**: High-quality organic fertilizer (30-40% moisture) from 60%-moisture waste
- **Lifespan**: 10+ years

## Key Selling Points

- Eco-friendly: Saves 46,000 kWh electricity per unit annually (equivalent to 1,000 pine trees CO₂ absorption)
- Durable: Three-layer insulated tank, NACHI pumps, ABB/Siemens motors
- Automated: Full PLC control, remote operation, fault alarm system
- Space-efficient: Vertical design, small footprint
- Proven: Installed on farms from 10,000 to 920,000 laying hens

## Target Customers

- Pig farms (500-10,000+ head)
- Cow/dairy farms (500-2,000+ head)
- Chicken/layer farms (10,000-920,000 birds)
- Other agricultural waste treatment operations

## Main Pages

- [Home](${site}): Company overview and product introduction
- [Product](${site}products/gx-sanyu-11ffg-100): Detailed product specifications and features
- [Comparison: Aerobic Fermentor vs Dryer](${site}aerobic-fermentor-vs-dryer): Side-by-side comparison of biological fermentor vs thermal dryer for poultry farms
- [Solutions - Pig Manure](${site}solutions/pig-manure-fermentation): Pig waste treatment solution
- [Solutions - Cow Manure](${site}solutions/cow-manure-fermentation): Cow/dairy waste treatment solution
- [Solutions - Chicken Manure](${site}solutions/chicken-manure-fermentation): Poultry waste treatment solution
- [Cases](${site}cases): Customer success stories and project references
- [FAQ](${site}faq): Frequently asked questions
- [About](${site}about): Company information
- [Contact](${site}contact): Contact Sales Manager Bob

## Technical Information

- Built with Astro static site generator
- Deployed to Cloudflare Pages
- English (en) language site
- Domain: manurefermentationtank.com
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
