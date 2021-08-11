# A11y Smoke Test Extension

This is a Chrome and Firefox browser extension that allows Radancy employees to learn about and run automated tests against the [accessibility baselines](https://radancy.dev/a11y/baseline) we have selected to strive for on every website and product we produce. Each list item presents an overview of the Web Content and Accessibility Guideline (WCAG) Success Criterion (SC), method for testing, helpful resources, and automated tests that can be run on the current page. Many automated tests are directly leveraged from popular accessibility testing bookmarklets curated from across the web or have been custom built.

## Installation

Go to the [login](https://radancy.dev/a11y/extension/) page. Contact [Michael Spellacy](mailto:michael.spellacy@radancy.com) for credentials.

## Current Tests

* Validation  
  * WAVE Validation - Runs WAVE on current page. Link can be easily shared or dropped into a report.
  * W3C Validation - Runs W3C validation on current page. Link can be easily shared or dropped into a report.
  * W3C Validation (Serialized DOM) - Runs validation on entire DOM (Document Object Model), including script generated content and enhancements.
    * WCAG Parsing - Run on W3C Validator results page to remove non-WCAG issues.
  * Validate CSS - Validates all CSS on the current page.
  * Validate Headings - Validates heading structure on current page.
  * Validate Links - Validates all hyperlinks on current page.
  * Validate PDF - Validates PDF document when opened in current window. (Experimental)
* Color Blindness Simulation (Note: Can be used on current page or in-browser design comp)
  * Achromatomaly
  * Achromatopsia (Grayscale)
  * Deuteranomaly
  * Deuteranopia (Green-Blind, Most Common)
  * Protanomaly
  * Protanopia (Red-Blind, Most Common)
  * Tritanopia (Blue-Blind)
* Images - Review inline image alternative text values on current page.
  * View Alternative Text (In Page)
  * View Page Images
* Structure - Review details of current page structure.  
  * ARIA
  * Forms
  * Headings (In Page)
  * Iframes
  * Landmarks
  * Language Attributes
  * Lists
  * Tabindex
  * Tables
  * Title Attributes
* Utilities
  * Force Focus
  * View Focus Order

## Release Notes

### 1.0.0

* Initial Revision

## Issue Reporting

Find an issue or need an enhancement? Report it on [JIRA](https://jira.tmp.com/browse/TCDQ-60657) or [GitHub](https://github.com/radancyco/a11y-smoke-test/issues)! You're so awesome!

## Links & Tips for Extension Developers

* [Schoox Training](https://www.schoox.com/3357985/radancy-browser-extension-developers)
* [Chrome Dashboard](https://chrome.google.com/webstore/devconsole/)
* [Firefox Dashboard](https://addons.mozilla.org/en-US/developers/addons)
  * Firefox updates go under `//AdCommsNA/dev/webdev/services1_tmpwebeng_com/web/browser-plugin/a11y-smoke-test/firefox/`
    * Don't forget to update `updates.json` in the firefox path
    * Note that the `index.html` file in the install path auto updates based on the `updates.json` in the firefox path
