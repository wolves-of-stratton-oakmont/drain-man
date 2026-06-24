/**
 * serviceAreas.ts — Toronto + GTA service areas, transcribed verbatim from
 * plan/CONTENT.md §6.
 *
 * Used by /service-areas (grouped chips) and the Home service-areas section.
 */

/** Toronto neighbourhoods (group heading: TORONTO). Order per CONTENT §6. */
export const TORONTO_AREAS: string[] = [
  "Scarborough",
  "North York",
  "Etobicoke",
  "East York",
  "Old Toronto / Downtown",
  "York",
  "Don Mills",
  "Leaside",
  "The Beaches",
  "Riverdale",
  "Forest Hill",
  "Rosedale",
  "The Annex",
  "High Park",
  "Agincourt",
  "Willowdale",
];

/** Greater Toronto Area (group heading: GREATER TORONTO AREA). Order per CONTENT §6. */
export const GTA_AREAS: string[] = [
  "Markham",
  "Richmond Hill",
  "Vaughan",
  "Thornhill",
  "Woodbridge",
  "Maple",
  "Unionville",
  "Aurora",
  "Newmarket",
  "Stouffville",
  "King City",
  "Pickering",
  "Ajax",
  "Whitby",
  "Oshawa",
  "Mississauga",
  "Brampton",
  "Milton",
  "Oakville",
];

/** Grouped shape for the service-areas page. */
export const serviceAreas = {
  toronto: TORONTO_AREAS,
  gta: GTA_AREAS,
} as const;

/**
 * Featured areas for the Home page chip cloud (CONTENT §2.8).
 * A short, recognizable selection spanning the city and the region.
 */
export const FEATURED_AREAS: string[] = [
  "Scarborough",
  "North York",
  "Etobicoke",
  "East York",
  "Toronto",
  "Markham",
  "Richmond Hill",
  "Vaughan",
  "Pickering",
  "Ajax",
  "Mississauga",
];

/** Plain flat list (e.g. for areaServed in JSON-LD). */
export const ALL_AREAS: string[] = [...TORONTO_AREAS, ...GTA_AREAS];
