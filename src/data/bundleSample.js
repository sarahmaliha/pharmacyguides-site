/**
 * Truncated sample drawn from Ultimate Pharmacy Bundle — Diabetes (Type-1 & Type-2).
 * Preview-only; full guide available on RelayED and Etsy.
 */
export const DIABETES_SAMPLE = {
  title: 'Diabetes (Type-1 & Type-2)',
  subtitle: 'Sample page from the Ultimate Pharmacy Bundle · 2026 Edition',
  sections: [
    {
      heading: 'Definitions',
      body: 'Type 1: autoimmune destruction of beta-cells → insulin cannot be produced; often diagnosed younger using C-peptide. Type 2: insulin resistance and deficiency; linked to obesity, inactivity, family history, and comorbidities. Prediabetes: BG higher than normal but not diagnostic for DM — metformin may be considered.',
    },
    {
      heading: 'Classic symptoms',
      bullets: ['Polyuria (excessive urination)', 'Polyphagia (excessive hunger)', 'Polydipsia (excessive thirst)', 'Fatigue, blurry vision'],
    },
    {
      heading: 'Diagnosis & goals (high-yield)',
      table: {
        headers: ['', 'A1c %', 'FPG', 'OGTT'],
        rows: [
          ['Diabetes', '>6.5', '>126', '>200'],
          ['Pre-DM', '5.7–6.4', '100–125', '140–199'],
        ],
      },
      notes: [
        'Typical A1c goal <7% (individualize)',
        'Pre-prandial ~80–130; 2-hr PPG <180',
        'Inpatient BG goal often 140–180 mg/dL',
      ],
    },
    {
      heading: 'Non-insulin highlights',
      bullets: [
        'Metformin — first-line foundations when appropriate (watch eGFR / GI effects)',
        'SGLT2i — CV/HF/CKD benefits in selected patients (e.g. Jardiance, Farxiga)',
        'GLP-1 RAs — high efficacy, weight loss; preferred in many high CV-risk patients',
        'Avoid combining GLP-1 RA with DPP-4i (overlapping mechanism)',
      ],
    },
  ],
  footerNote: 'This is a condensed sample for preview. The full Ultimate Pharmacy Bundle includes complete treatment tables, insulin starts, and 80+ clinical topics.',
}
