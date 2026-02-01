import { jsPDF } from 'jspdf'
import { INDUSTRY_GLOSSARY, GLOSSARY_TITLE, GLOSSARY_SUBTITLE } from '../data/industryGlossary'

const MARGIN = 20
const PAGE_WIDTH = 210 // A4 mm
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2
const LINE_HEIGHT = 5
const TITLE_SIZE = 16
const SUBTITLE_SIZE = 9
const TERM_SIZE = 11
const DEF_SIZE = 9
const GAP_AFTER_TITLE = 8
const GAP_AFTER_SUBTITLE = 12
const GAP_BETWEEN_ENTRIES = 6

/**
 * Generates the Industry Acronym Glossary PDF and triggers download.
 */
export function downloadGlossaryPdf() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = MARGIN

  // Title
  doc.setFontSize(TITLE_SIZE)
  doc.setFont(undefined, 'bold')
  doc.text(GLOSSARY_TITLE, MARGIN, y)
  y += GAP_AFTER_TITLE

  // Subtitle
  doc.setFontSize(SUBTITLE_SIZE)
  doc.setFont(undefined, 'normal')
  doc.text(GLOSSARY_SUBTITLE, MARGIN, y)
  y += GAP_AFTER_SUBTITLE

  doc.setFontSize(DEF_SIZE)

  for (const { term, definition } of INDUSTRY_GLOSSARY) {
    // Ensure we have room for at least term + a few lines of definition
    const spaceNeeded = LINE_HEIGHT * 2 + LINE_HEIGHT * 4
    if (y + spaceNeeded > 277) {
      doc.addPage()
      y = MARGIN
    }

    // Term (bold)
    doc.setFontSize(TERM_SIZE)
    doc.setFont(undefined, 'bold')
    doc.text(term, MARGIN, y)
    y += LINE_HEIGHT

    // Definition (wrapped)
    doc.setFontSize(DEF_SIZE)
    doc.setFont(undefined, 'normal')
    const lines = doc.splitTextToSize(definition, CONTENT_WIDTH)
    for (const line of lines) {
      if (y + LINE_HEIGHT > 277) {
        doc.addPage()
        y = MARGIN
      }
      doc.text(line, MARGIN, y)
      y += LINE_HEIGHT
    }
    y += GAP_BETWEEN_ENTRIES
  }

  doc.save('Industry-Acronym-Glossary.pdf')
}
