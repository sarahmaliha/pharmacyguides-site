/**
 * Etsy shop and study guide listings for PharmacyGuides.
 * Direct links to specific listings — add/remove items as your shop updates.
 */

export const ETSY_SHOP_URL = 'https://www.etsy.com/shop/PharmacyGuides'

function listing(id, slug) {
  return `https://www.etsy.com/listing/${id}/${slug}`
}

export const STUDY_GUIDE_CATEGORIES = [
  {
    id: 'bundles',
    name: 'Pharmacy Disease-State Bundles',
    description: 'Includes the bestselling Ultimate Pharmacy Bundle',
    items: [
      { title: 'Ultimate Pharmacy Bundle', url: listing(1236823288, '2026-naplex-pharmacy-study-guide-bundle') },
      { title: 'Pulmonary Disorders Bundle', url: listing(1231958190, 'pulmonary-disorders-pharmacy-study-guide') },
      { title: 'Gastrointestinal Bundle', url: listing(1219523145, 'gastroenterology-study-guide-bundle-for-naplex') },
      { title: 'Kidney & Liver Bundle', url: listing(978657446, 'renal-bundle-kidneys-nephrons-raas') },
      { title: 'Endocrine and Inflammatory Bundle', url: listing(1248424127, 'endocrine-and-inflammatory-pharmacy') },
      { title: 'Ear Nose Throat Bundle', url: ETSY_SHOP_URL },
      { title: 'Neurology Bundle', url: listing(1235660806, 'neurology-pharmacy-bundle-2025-naplex') },
      { title: 'Psych Bundle', url: listing(1214527446, 'psych-pharmacy-notes-bundle-naplex') },
      { title: 'Male & Female Health Bundle', url: ETSY_SHOP_URL },
      { title: 'Cardiology Bundle', url: listing(1224470988, 'cardiology-pharmacy-study-guide-bundle') },
      { title: 'Infectious Diseases Bundle', url: listing(1234364472, 'infectious-diseases-pharmacy-bundle-2025') },
      { title: 'View all Pharmacy Disease-State Bundles', url: ETSY_SHOP_URL },
    ],
  },
  {
    id: 'mpje',
    name: 'Pharmacy Law & MPJE Resources',
    description: 'Select state-specific pharmacy law and MPJE prep.',
    items: [
      { title: 'Federal Pharmacy Law One-Pager', url: listing(4404358512, 'pharmacy-federal-law-one-pager-mpje') },
      { title: 'Virginia MPJE Pharmacy Law Study Guide', url: listing(1526664609, '2026-virginia-mpje-pharmacy-law-study') },
      { title: 'DC MPJE Pharmacy Law Study Guide', url: listing(1766572139, '2026-dc-mpje-pharmacy-law-study-guide') },
      { title: 'DC and Virginia MPJE Bundle', url: listing(1813580349, 'dc-and-virginia-mpje-bundle-2026') },
      { title: 'View all Pharmacy Law / MPJE', url: ETSY_SHOP_URL },
    ],
  },
  {
    id: 'disease-state',
    name: 'Disease State & 1-Page Guides',
    description: 'Clinical one-pagers by topic — cardiology, pulmonary, endocrine, psych, and more.',
    items: [
      { title: 'Diabetes Pharmacy Study Guide', url: listing(1246526471, 'diabetes-pharmacy-study-guide-for-naplex') },
      { title: 'Hypertension Pharmacy Study Guide', url: listing(1218278505, 'hypertension-pharmacy-study-guide-naplex') },
      { title: 'Dyslipidemia Pharmacy Study Guide', url: listing(1238008459, 'dyslipidemia-pharmacy-study-guide-naplex') },
      { title: 'Acute Coronary Syndromes (ACS) Pharmacy Study Guide', url: listing(1236722513, 'acute-coronary-syndromes-acs-pharmacy') },
      { title: 'Chronic Heart Failure Pharmacy Study Guide', url: listing(1236898849, 'chronic-heart-failure-study-guide-naplex') },
      { title: 'Arrhythmias Pharmacy Study Guide', url: listing(1238099159, 'arrhythmias-pharmacy-study-guide-naplex') },
      { title: 'Anticoagulation Pharmacy Study Guide', url: listing(1224460802, 'anticoagulation-pharmacy-study-guide') },
      { title: 'Stroke Pharmacy Study Guide', url: listing(1222213560, 'stroke-pharmacy-study-guide-naplex') },
      { title: 'Asthma Pharmacy Study Guide', url: listing(1231906504, 'asthma-pharmacy-study-guide-naplex') },
      { title: 'COPD Pharmacy Study Guide', url: listing(1245364045, 'chronic-obstructive-pulmonary-disease') },
      { title: 'Thyroid Disorders Pharmacy Study Guide', url: listing(1218298713, 'thyroid-disorders-hyper-and') },
      { title: 'Gout Pharmacy Study Guide', url: listing(1218288447, 'gout-pharmacy-study-guide-naplex') },
      { title: 'Rheumatoid Arthritis Pharmacy Study Guide', url: listing(1246527467, 'rheumatoid-arthritis-pharmacy-study') },
      { title: 'Depression Pharmacy Study Guide', url: listing(1228400645, 'depression-pharmacy-study-guide-naplex') },
      { title: 'Anxiety Pharmacy Study Guide', url: listing(1226109025, 'anxiety-pharmacy-study-guide-naplex') },
      { title: 'ADHD Pharmacy Study Guide', url: listing(1221202991, 'attention-deficit-disorder-adhd-pharmacy') },
      { title: 'Bipolar Disorder Pharmacy Study Guide', url: listing(1223726883, 'bipolar-disorder-pharmacy-study-guide') },
      { title: 'Schizophrenia & Psychosis Pharmacy Study Guide', url: listing(1211438128, 'schizophrenia-psychosis-pharmacy-study') },
      { title: 'Anemia Pharmacy Study Guide', url: listing(1236242717, 'anemia-pharmacy-study-guide-naplex') },
      { title: 'Antibiotics Pharmacy Study Guide', url: listing(1247881349, 'antibiotics-pharmacy-study-guide-naplex') },
      { title: 'Immunizations Pharmacy Study Guide', url: listing(1236703326, 'immunizations-study-guide-naplex') },
      { title: 'View all 1-Page Guides', url: ETSY_SHOP_URL },
    ],
  },
]
