# A11y Smoke Test Extension

This is a browser extension that allows Radancy employees to learn about and run automated tests against the [accessibility baselines](https://radancy.dev/a11y/baseline) we have selected to strive for on every website and product we produce. Each list item presents an overview of the Web Content and Accessibility Guideline (WCAG) Success Criterion (SC), method for testing, helpful resources, and automated tests that can be run on the current page. Many automated tests are directly leveraged from popular accessibility testing bookmarklets curated from across the web or have been custom built.

## Installation

Go to the [login](https://radancy.dev/a11y/extension/) page. Contact [Michael Spellacy](mailto:michael.spellacy@radancy.com) for credentials.

## Current Features

### Page Validation  

* WAVE Validation - Runs WAVE on current page. Link can be easily shared or added to a report.
* W3C Validation - Runs W3C validation on current page. Link can be easily shared or added to a report.
* Validate Headings - Validates heading structure on current page.
* W3C Validation (Serialized DOM) - Runs validation on entire DOM (Document Object Model), including script generated content.
  * WCAG Parsing - Run on W3C Validator results page to remove non-WCAG issues.

### Validate Color

* Validate Contrast
* Validate Link & Text Contrast

### PDF Validation

* [Download PAC (PDF Accessibility Checker)](https://pdfua.foundation/en/pdf-accessibility-checker-pac/register)

### Other Validation Tests

* Validate CSS - Validates all CSS on the current page.
* Validate Links - Validates all hyperlinks on current page.
* Validate Spelling - Validates spelling on page.

### Color Blindness Simulation

Can be used on current page or in-browser design comp

* Achromatomaly
* Achromatopsia (Grayscale)
* Deuteranomaly
* Deuteranopia (Green-Blind, Most Common)
* Protanomaly
* Protanopia (Red-Blind, Most Common)
* Tritanopia (Blue-Blind)

### Images

Review image alternative text values on current page.

* Check Alternative Text
* Review All Page Images

### Structure

Review details of current page structure.  

* ARIA
* Forms
* Iframes
* Landmarks
* Language Attributes
* Lists
* Tabindex
* Tables
* Title Attributes

### Epilepsy

* [Download PEAT (Photosensitive Epilepsy Analysis Tool)](https://trace.umd.edu/peat/)

### Utilities

* Force Focus
* View Focus Order

## Release Notes

### 1.0.4 (Upcoming Build)

* Permalinks in Heading & Image validation.
* Refined Components & Multimedia section.
* Included Structured Data test.

### 1.0.3 (Official Build)

* Added new test rule for 1.4.4: Resize Text. Zoom disabling is a failure.
* Added new section for best practices. Covering Overlays, Carousels, and New Windows.  
* Added Validate HTML by Direct Input.
* Added "Who is Responsible?" to help facilitate certain tasks.
* Added note to Best Practices regarding [Accessible Slick](https://accessible360.github.io/accessible-slick)

### 1.0.2

* Color blindness simulation fixed on Firefox.

### 1.0.1

* Small bug fixes, repo configurations, and content changes.

### 1.0.0

* Initial Revision

## Issue Reporting

Find an issue or need an enhancement? Report it on [JIRA](https://jira.tmp.com/browse/TCDQ-60657) or [GitHub](https://github.com/radancyco/a11y-smoke-test/issues)! You're so awesome!

## Links & Tips for Extension Developers

* [Schoox Training](https://www.schoox.com/3357985/radancy-browser-extension-developers)
* [Chrome Dashboard](https://chrome.google.com/webstore/devconsole/)
* [Firefox Dashboard](https://addons.mozilla.org/en-US/developers/addons)
  * Firefox updates go in `//AdCommsNA/dev/webdev/services1_tmpwebeng_com/web/browser-plugin/a11y-smoke-test/firefox/`
    * Update `updates.json` - Note: Update made to this file will display in the `index.html` file of the `install` directory
