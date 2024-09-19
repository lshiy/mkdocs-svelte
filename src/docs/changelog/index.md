# Changelog

## Material for MkDocs

### 9.5.34 <small>August 31, 2024</small> 

- Updated Mermaid.js to version 11 (latest)

### 9.5.33 <small>August 23, 2024</small> 

- Fixed #7453: Incorrect position of tooltip when sorting table

### 9.5.32 <small>August 19, 2024</small> 

- Fixed RXSS vulnerability via deep link in search results
- Added support for fetching latest release from GitLab

### 9.5.31 <small>August 2, 2024</small> 

- Fixed #7405: DockerHub missing images > 9.5.27 due to change in Alpine/APK

### 9.5.30 <small>July 23, 2024</small> 

- Fixed #7380: Navigation icons disappearing on hover in Safari
- Fixed #7367: Blog readtime computation includes SVG text content

### 9.5.29 <small>July 14, 2024</small> 

- Updated Galician translations
- Fixed #7362: Annotations in figure captions rendering incorrectly

### 9.5.28 <small>July 2, 2024</small> 

- Fixed #7313: Improved tooltips mounted in sidebar when feature is disabled

### 9.5.27 <small>June 16, 2024</small> 

- Updated Estonian translations

### 9.5.26 <small>June 6, 2024</small> 

- Fixed #7232: Tab switches on scroll when linking tabs (9.5.19 regression)
- Fixed #7230: Blog author avatar broken when referring to local file

### 9.5.25 <small>May 27, 2024</small> 

- Fixed #7209: Tags plugin crashing on numeric tags

### 9.5.24 <small>May 20, 2024</small> 

- Fixed #7187: Version selector title rendering issue

### 9.5.23 <small>May 15, 2024</small> 

- Fixed #7183: Edge case in anchor navigation when using instant navigation
- Fixed #6436: Version selector not showing version alias

### 9.5.22 <small>May 12, 2024</small> 

- Fixed #7170: Copy button adds empty lines for line spans (9.5.18 regression)
- Fixed #7160: Version switching doesn't stay on page (9.5.5 regression)
- Fixed #5619: Links in Mermaid.js diagrams not discernible

### 9.5.21 <small>May 3, 2024</small> 

- Fixed #7133: Ensure latest version of Mermaid.js is used
- Fixed #7125: Added warning for dotfiles in info plugin

### 9.5.20 <small>April 29, 2024</small> 

- Fixed deprecation warning in privacy plugin (9.5.19 regression)
- Fixed #7119: Tags plugin emits deprecation warning (9.5.19 regression)
- Fixed #7118: Social plugin crashes if fonts are disabled (9.5.19 regression)
- Fixed #7085: Social plugin crashes on Windows when downloading fonts

### 9.5.19 <small>April 25, 2024</small> 

- Updated MkDocs to 1.6 and limited version to - 2
- Updated Docker image to latest Alpine Linux
- Removed `setup.py`, now that GitHub fully understands `pyproject.toml`
- Improved interop of social plugin with third-party MkDocs themes
- Fixed #7099: Blog reading time not rendered correctly for Japanese
- Fixed #7097: Improved resilience of tags plugin when no tags are given
- Fixed #7090: Active tab indicator in nested content tabs rendering bug

### 9.5.18 <small>April 16, 2024</small> 

- Refactored tooltips implementation to fix positioning issues
- Fixed #7044: Rendering glitch when hovering contributor avatar in Chrome
- Fixed #7043: Highlighted lines in code blocks cutoff on mobile
- Fixed #6910: Incorrect position of tooltip for page status in sidebar
- Fixed #6760: Incorrect position and overly long tooltip in tables
- Fixed #6488: Incorrect position and cutoff tooltip in content tabs

### 9.5.17 <small>April 2, 2024</small> 

- Updated Serbian translations
- Fixed #7003: Confusing keyboard interaction for palette toggle
- Fixed #7001: Blog posts now show time by default (9.5.16 regression)
- Fixed edge case in backport of social plugin font loading logic

### 9.5.16 <small>March 31, 2024</small> 

- Updated Russian translations
- Improved error handling and reporting in social plugin
- Improved error handling and reporting in privacy plugin
- Fixed blog plugin not allowing to use time in format strings
- Fixed #6983: Social plugin crashes because of Google Fonts API change

### 9.5.15 <small>March 23, 2024</small> 

- Reverted fix for transparent iframes (9.5.14)
- Fixed #6929: Interference of social plugin and auto dark mode
- Fixed #6938: Giscus shows dark background in light mode (9.5.14 regression)

### 9.5.14 <small>March 18, 2024</small> 

- Added support for hiding versions from selector when using mike
- Added init system to improve signal handling in Docker image
- Fixed edge cases in exclusion logic of info plugin
- Fixed inability to reset pipeline in search plugin
- Fixed syntax error in Finnish translations
- Fixed #6917: UTF-8 encoding problems in blog plugin on Windows
- Fixed #6889: Transparent iframes get background color

### 9.5.13 <small>March 6, 2024</small> 

- Updated Slovak translations
- Improved info plugin interop with projects plugin
- Improved info plugin inclusion/exclusion logic
- Fixed info plugin not gathering files recursively
- Fixed #6750: Ensure info plugin packs up all necessary files

### 9.5.12 <small>February 29, 2024</small> 

- Fixed #6846: Some meta tags removed on instant navigation (9.4.2 regression)
- Fixed #6823: KaTex not rendering on instant navigation (9.5.5 regression)
- Fixed #6821: Privacy plugin doesn't handle URLs with encoded characters

### 9.5.11 <small>February 24, 2024</small> 

- Updated Finnish translation

### 9.5.10 <small>February 19, 2024</small> 

- Updated Bahasa Malaysia translations
- Fixed #6783: Hide continue reading link for blog posts without separators
- Fixed #6779: Incorrect positioning of integrated table of contents

### 9.5.9 <small>February 10, 2024</small> 

- Fixed navigation pruning with tabs and sections enabled

### 9.5.8 <small>February 7, 2024</small> 

- Added Tamil translations
- Updated Esperanto translations
- Fixed relative images not being resolved for instant navigation

### 9.5.7 <small>February 3, 2024</small> 

- Fixed #6731: Small images in figures are not centered
- Fixed #6719: Instant navigation breaks table of contents (9.5.5 regression)

### 9.5.6 <small>January 28, 2024</small> 

- Fixed #6700: Missing styles for Mermaid.js labels with Markdown

### 9.5.5 <small>January 24, 2024</small> 

- Updated Tagalog translations
- Updated Pillow to 10.2 to mitigate security vulnerabilities
- Improved resilience of instant navigation
- Fixed #6687: Updated Mermaid.js to version 10.7.0 (latest)
- Fixed #6652: Keyboard events in custom elements captured
- Fixed #6582: Instant navigation doesn't correctly handle alternate URLs
- Fixed #6565: Instant navigation doesn't allow for `onclick` handlers
- Fixed #6345: Instant navigation sometimes breaks browser back button
- Fixed #6334: Instant navigation doesn't correctly position anchors (Safari)
- Fixed #6275: Instant navigation doesn't correctly resolve after 404
- Fixed #6102: Instant navigation reloads page on same link navigation

### 9.5.4 <small>January 15, 2024</small> 

- Fixed #6645: Local storage with invalid value can break site
- Fixed #6635: Tags icons before default ignored if default is set

### 9.5.3 <small>December 23, 2023</small> 

- Limited version range of MkDocs to - 1.6
- Updated Macedonian translations
- Fixed #6520: Group plugin crashes when using mike
- Fixed #6494: Hide author's email address if disabled in git-authors plugin

### 9.5.2 <small>December 11, 2023</small> 

- Fixed types for `slugify` settings in blog plugin config
- Fixed #6469: Horizontal scrollbars on MathJax containers

### 9.5.1 <small>December 8, 2023</small> 

- Updated Greek translations
- Fixed #6464: Privacy plugin cannot be enabled
- Fixed #6461: Sorting blog posts ignores time component in date

### 9.5.0 <small>December 7, 2023</small> 

Merged Insiders features of 'Goat's Horn' funding goal

- Added privacy plugin: automatic downloading of external assets
- Added support for card grids and grid layouts
- Added support for improved tooltips
- Added support for content tabs anchor links (deep linking)
- Added support for automatic dark/light mode
- Added support for document contributors

### 9.4.14 <small>November 26, 2023</small> 

- Added support for linking authors in blog posts

### 9.4.13 <small>November 26, 2023</small> 

- Fixed #6365: Blog plugin pagination links to previous pages broken
- Fixed #5758: Updated Mermaid.js to version 10.6.1 (latest)

### 9.4.12 <small>November 24, 2023</small> 

- Improved blog plugin to generate Unicode-aware slugs by default
- Fixed non-deterministic order of categories in blog plugin

### 9.4.11 <small>November 23, 2023</small> 

- Fixed #6364: Search plugin crashing when enabling theme while serving
- Fixed blog plugin crashing when disabling pagination

### 9.4.10 <small>November 19, 2023</small> 

- Fixed #6356: Version selector can't be disabled via mike's configuration
- Fixed #6281: Navigation not rendering due to Safari bug (9.4.2 regression)
- Fixed #6261: Navigation expansion animates on first load (9.4.2 regression)

### 9.4.9 <small>November 17, 2023</small> 

- Fixed #6344: Long entries cutoff in table of contents
- Fixed #6336: Custom template for glob archive not working with pagination
- Fixed #6328: Blog plugin crashes for locales with dashes, e.g. `pt-BR`
- Fixed #6327: Copy-to-clipboard button doesn't trim trailing line feed
- Fixed #6302: Version strings not matched when using mike, only aliases
- Fixed instant navigation progress indicator for gzipped content in Chrome
- Fixed rendering bug on details marker rotation in Firefox

### 9.4.8 <small>November 5, 2023</small> 

- Fixed invalid local address replacement when using instant loading
- Fixed #6275: Crash after navigation caused 404 when using instant loading

### 9.4.7 <small>October 27, 2023</small> 

- Added Azerbaijani translations

### 9.4.6 <small>October 14, 2023</small> 

- Updated Danish and Norwegian (Nynorsk) translations
- Fixed #6169: Blog post metadata layout overflows on small screens

### 9.4.5 <small>October 10, 2023</small> 

- Fixed sidebar auto-positioning (9.4.2 regression)
- Fixed #6166: Improve group plugin compatibility with Python - 3.10
- Fixed #6157: Hiding tags does not work (9.4.3 regression)

### 9.4.4 <small>October 5, 2023</small> 

- Added support for overriding text to be copied for code blocks
- Fixed broken layout in some browsers at breakpoints when using zoom
- Fixed #6132: Incomplete search highlighting for code blocks in titles

### 9.4.3 <small>October 2, 2023</small> 

- Added support for instant navigation progress indicator
- Improved spacing and alignment of tags
- Moved back-to-top button into separate partial
- Fixed #6104: Indentation for some code blocks lost in search
- Fixed #6094: Blog post metadata overlaps with footer on small screens
- Fixed #6069: Blog plugin crashes for categories with non-ASCII names

__Updated templates__ ([diff](https://github.com/squidfunk/mkdocs-material/compare/9.4.2...9.4.3))

- `base.html`

### 9.4.2 <small>September 25, 2023</small> 

- Updated Slovenian translations
- Added animation to sidebar navigation expansion and collapse
- Added support for auto-replacement of document head for instant navigation
- Improved compatibility of new emoji extension with Python - 3.10
- Switched regex dependency to use minimal version
- Refactored alignment and spacing of sidebar navigation
- Fixed expansion button not focusable via keyboard in sidebar navigation
- Fixed viewport offset restoration on first load when using instant navigation
- Fixed accidental highlight of non-clickable elements in blog plugin sidebar
- Fixed #6041: Blog plugin crashes when `nav` is defined and blog not included
- Fixed #5972: Blog plugin ignores section index pages in paginated views
- Fixed #5954: Repeated click on anchor ignored when using instant navigation
- Fixed #5742: Keyboard navigation broken when using instant navigation

__Updated templates__ ([diff](https://github.com/squidfunk/mkdocs-material/compare/9.4.1...9.4.2))

- `partials/nav-item.html`
- `blog-post.html`

### 9.4.1 <small>September 22, 2023</small> 

- Improved colors and contrast in dark mode
- Improved admonition borders to match font weight
- Switched content tabs to neutral color

### 9.4.0 <small>September 21, 2023</small> 

- Added Belarusian translations
- Added version info to entrypoint of package
- Added emoji extension as a replacement for `materialx`
- Improved slate color scheme (dark mode) - now even darker
- Restructured project to improve development experience
- Updated MkDocs to 1.5.3
- Fixed #3890: Development mode crash on Linux

### 9.3.2 <small>September 19, 2023</small> 

- Updated Slovenian translations
- Updated Python dependencies in requirements to use minimum versions
- Fixed #6017: Code highlighting inconsistent in Community and Insiders edition
- Fixed #6001: Contributor avatars display incorrectly in Firefox
- Fixed #6000: Blog post drafts are included in navigation

### 9.3.1 <small>September 11, 2023</small> 

- Fixed crash of group plugin when used together with hooks

### 9.3.0 <small>September 11, 2023</small> 

- Improved configuration sharing between Community and Insiders edition
- Added experimental built-in group plugin for enabling plugins conditionally
- Added new settings in tags plugin for enabling/disabling
- Dropped support for Python 3.7 (EOL)

### 9.2.8 <small>September 4, 2023</small> 

- Updated Italian and Russian translations
- Fixed #5952: Combining blog and tags plugin leads to wrong links
- Fixed #5951: Blog plugin ignores post title in metadata
- Fixed #5949: Blog plugin ignores post linked in nav

### 9.2.7 <small>September 2, 2023</small> 

- Switched dependencies to compatible release clauses
- Removed `readtime` and `lxml` dependencies for blog plugin
- Reduced size of Docker image to improve CI build performance
- Fixed #5945: Incorrect footer navigation for sibling pages of blog
- Fixed #5939: Page jumps when changing color palette (Firefox 117)
- Fixed #5901: Announcement bar reappears when using instant loading
- Fixed #5824: Allow to customize styles of sequence diagrams

### 9.2.6 <small>August 31, 2023</small> 

- Added Basque translations
- Added template for simple redirects
- Improved blog plugin interop by moving view generation to `on_files`
- Fixed #5924: Social plugin still checks dependencies when disabled
- Fixed #5916: Blog plugin crashes on Python 3.8 (9.2.0 regression)

### 9.2.5 <small>August 27, 2023</small> 

- Fixed error in dirty serve mode when using blog plugin
- Fixed page title not being consistent in blog plugin pagination
- Fixed #5899: Blog plugin pagination breaks when disabling directory URLs

### 9.2.4 <small>August 26, 2023</small> 

- Added version to bug report name in info plugin
- Updated Afrikaans translations

### 9.2.3 <small>August 22, 2023</small> 

- Fixed blog plugin rendering wrongly with `markdown.extensions.toc`
- Fixed blog plugin entrypoint generation

### 9.2.2 <small>August 22, 2023</small> 

- Fixed #5880: Blog plugin failing when building a standalone blog
- Fixed #5881: Blog plugin not compatible with Python - 3.10

### 9.2.1 <small>August 21, 2023</small> 

- Fixed #5879: Blog plugin failing when building a standalone blog
- Fixed error in blog plugin when using draft tagging on future date
- Fixed error in blog plugin when toc extension is not enabled

### 9.2.0 <small>August 21, 2023</small> 

__Additions and improvements__

- Added blogging support via built-in blog plugin
- Added support for Chinese language segmentaiton in search plugin
- Added support for adding custom dates to blog posts
- Added support for paginating archive and category pages
- Added support for annotations (outside of code blocks)
- Added support for navigation icons
- Added support for navigation pruning
- Added support for navigation status
- Added support for customizing site icons
- Added support for customizing (code) annotation icons
- Added focus outline to admonitions and details
- Added prompt for bug report name to info plugin
- Added Luxembourgish translations
- Improved rendering of (code) annotation markers
- Improved print styles for (code) annotations
- Improved customizability of navigation tabs
- Improved interop of plugins with external tools like mike
- Improved interop of blog plugin with awesome pages plugin
- Improved header partial by moving buttons into separate partials
- Improved clarity of `site_url` warning in social plugin
- Improved blog plugin to automatically setup directory structure
- Switched info plugin to `importlib` to mitigate deprecations
- Automatically download ResizeObserver polyfill when necessary
- Automatically add iframe-worker polyfill when necessary in offline plugin
- Automatically focus and bring up keyboard on touch devices
- Updated Serbo-Croatian translations
- Updated MkDocs to 1.5.2

__Removals__

- Removed Universal Analytics integration
- Removed ancient polyfills to reduce size of bundled JavaScript by 20%
- Removed necessity for `Array.flat` and `Array.flatMap` polyfill
- Removed announcement bar button when JavaScript is not available

__Fixes__

- Fixed rendering of tags when announcement bar is present
- Fixed tags plugin rendering pages excluded by other plugins
- Fixed #5132: Blog plugin requires `nav` entry in `mkdocs.yml`
- Fixed #5599: Insufficient contrast for default link color
- Fixed #5715: Blog plugin missing integrated table of contents in pagination
- Fixed #5806: Version selector not hoverable on some Android devices
- Fixed #5826: Blog post drafts with tags show up in tags index

### 9.1.21 <small>July 27, 2023</small> 

- Fixed MkDocs 1.4 compat issue in social plugin (9.1.20 regression)

### 9.1.20 <small>July 27, 2023</small> 

- Updated Sanskrit translations
- Fixed deprecation warnings for social plugin

### 9.1.19 <small>July 18, 2023</small> 

- Added support for MkDocs 1.5+
- Fixed #5699: Improve error reporting in social plugin

### 9.1.18 <small>July 3, 2023</small> 

- Updated Danish translations
- Added support for installing user requirements in Docker image
- Fixed #5655: Search separator with lookbehind breaks highlighting

### 9.1.17 <small>June 23, 2023</small> 

- Fixed #5633: Code annotations with nested lists incorrectly mounted
- Fixed #5628: Regression in new social plugin configuration scheme

### 9.1.16 <small>June 15, 2023</small> 

- Updated Indonesian translations
- Ensure scroll bar follows color scheme of operating system

### 9.1.15 <small>May 29, 2023</small> 

- Fixed #5566: Indicate color scheme to operating system
- Fixed #5565: Update `Dockerfile` to latest version of base image
- Fixed #5554: Add additional version tags (`9`, `9.1`) to Docker image
- Fixed #5536: Strip tags of ARIA labels in table of contents

### 9.1.14 <small>May 20, 2023</small> 

- Updated Armenian and Greek translations

### 9.1.13 <small>May 16, 2023</small> 

- Fixed #5517: Social plugin crashes for some fonts (e.g. Open Sans)

### 9.1.12 <small>May 12, 2023</small> 

- Updated Bengali (Bangla) translations
- Fixed #5503: Docker image publish errors on uppercase characters
- Fixed #5407: Auto-pause media when in hidden content tabs

### 9.1.11 <small>May 8, 2023</small> 

- Fixed #5487: Social plugin crashes without options (9.1.10 regression)

### 9.1.10 <small>May 8, 2023</small> 

- Added `cards_layout_options` setting for social cards
- Deprecated `cards_color` and `cards_font` setting for social cards

### 9.1.9 <small>May 2, 2023</small> 

- Added Telugu, Kannada and Sanskrit translations
- Fixed #5428: Fixed margins for light/dark mode images in figures
- Fixed #5420: Social plugin crashing for some specific Google Fonts
- Fixed #5160: Instant loading makes code annotations jump (9.1.1 regression)
- Fixed #4920: Social plugin not loading logo from custom icon set
- Fixed social plugin crashing when only code font is specified

### 9.1.8 <small>April 24, 2023</small> 

- Fixed #5417: Theme breaks when `palette` is not defined (9.1.7 regression)

### 9.1.7 <small>April 22, 2023</small> 

- Updated Persian (Farsi) and Turkish translations
- Fixed #5401: Added missing flag to disable built-in tags plugin
- Fixed #5206: Ensure defaults are set for primary and accent colors
- Fixed unnecessary inclusion of palette CSS when unused

### 9.1.6 <small>April 7, 2023</small> 

- Updated Persian (Farsi) translations
- Fixed #5300: Boxes in Mermaid sequence diagrams not color-abiding

### 9.1.5 <small>March 31, 2023</small> 

- Updated Lithuanian and Japanese translations
- Updated Mermaid.js to version 9.4.3
- Fixed #5290: Footer previous/next labels cut-off for short page titles

### 9.1.4 <small>March 24, 2023</small> 

- Fixed #5239: Instant loading breaks anchors in details (9.1.1 regression)
- Fixed #5211: Anchor following not working for Chinese (9.1.2 regression)

### 9.1.3 <small>March 14, 2023</small> 

- Added Kurdish (Soranî) translations
- Updated Norwegian (Bokmål), Portuguese and Romanian translations
- Improved compatibility with `mkdocs-jupyter` plugin
- Fixed #5198: Built-in search plugin not filtering `script` and `style` tags
- Fixed #5176: Back-to-top + instant loading not working (9.1.1 regression)

### 9.1.2 <small>March 9, 2023</small> 

- Updated Icelandic, Korean and Swedish translations
- Fixed #5168: Mermaid text boxes overflow (9.0.13 regression)
- Fixed #5155: Table of contents not highlighting percent-encoded URLs

### 9.1.1 <small>March 5, 2023</small> 

- Updated Czech and Thai translations
- Improved instant loading (scroll restoration, slow connections)
- Fixed #5023: Instant loading not allowing to go back to initial page
- Fixed #3797: Instant loading does not work with section anchors in Safari

### 9.1.0 <small>March 2, 2023</small> 

- Docker image now available for `amd64`, `arm64` and `arm/v7`
- Updated Chinese (Taiwanese) translations
- Generalized tag identifier implementation
- Fixed flickering of header shadow on load
- Fixed occasional flickering of announcement bar

### 9.0.15 <small>February 26, 2023</small> 

- Updated Chinese (Traditional) translations
- Updated Hebrew translations

### 9.0.14 <small>February 23, 2023</small> 

- Fixed #5072: Rendering bug on navigation expand button in Firefox

### 9.0.13 <small>February 18, 2023</small> 

- Updated Uzbek translations
- Switched back to pre-9.0.0 headline detection in `content` partial
- Fixed #5062: Version warning not readable when using slate scheme
- Fixed #5061: Improved discernibility of table row hover color
- Fixed #5034: Sequence actors in Mermaid diagrams not color-abiding
- Fixed #4919: Allow to hide version warning in multiple versions

### 9.0.12 <small>February 9, 2023</small> 

- Updated Catalan translations
- Fixed #4975: Mermaid entity relationship rendering diagrams bug
- Fixed #4924: Header title not reset when using instant loading

### 9.0.11 <small>February 3, 2023</small> 

- Added Mastodon verification for social links (`rel=me`)
- Updated Italian translations

### 9.0.10 <small>February 2, 2023</small> 

- Updated Arabic translations
- Updated Korean translations
- Updated Hungarian translations
- Updated Russian translations
- Fixed #4977: Improved accessibility for content tabs
- Fixed #4960: Sometimes anchor following doesn't bring last item into view

### 9.0.9 <small>January 30, 2023</small> 

- Updated Bulgarian translations
- Updated Chinese (Simplified) translations
- Updated Dutch translations
- Updated Hindi translations
- Updated Japanese translations
- Updated Polish translations

### 9.0.8 <small>January 29, 2023</small> 

- Updated Croatian translations
- Updated French translations
- Updated Hungarian translations
- Updated Portuguese (Brasilian) translations
- Updated Spanish translations
- Updated Ukrainian translations
- Updated Urdu translations
- Updated Vietnamese translations

### 9.0.7 <small>January 28, 2023</small> 

- Improved accessibility of sidebar navigation
- Moved all translations into Community edition
- Updated Polish and Portuguese (Brasilian) translations
- Fixed info plugin terminating on subsequent reload when serving
- Fixed #4910: Sidebar navigation labels have invalid ARIA roles
- Fixed #4884: Search query terms can't be separated by colons

### 9.0.6 <small>January 19, 2023</small> 

- Fixed #4883: Automatically disable info plugin when serving
- Fixed #4885: Search plugin crashes in some exotic cases (9.0.3 regression)

### 9.0.5 <small>January 14, 2023</small> 

- Fixed #4842: Improved accessibility of search result list

### 9.0.4 <small>January 12, 2023</small> 

- Fixed #4823: Improved contrast ratio in footer (9.0.2 regression)
- Fixed #4832: Set navigation items back to black (9.0.3 regression)
- Fixed #4843: Emojis broken due to maxcdn.com shutting down
- Upgraded Python Markdown Extensions to 9.9.1

### 9.0.3 <small>January 8, 2023</small> 

- Improved discernibility of section index pages in navigation
- Improved collapsing of adjacent whitespace in search plugin
- Updated Indonesian translations
- Fixed view source of this page button when edit URL points to blob
- Fixed #4829: Search overlay does not close for active anchor result
- Fixed #4824: Search plugin crashes for `h[1-6]` contained in other elements
- Fixed #4804: Nested navigation items not expandable with keyboard
- Fixed #4689: anchor tracking not working for anchors in tables
- Upgraded to Mermaid 9.3.0

### 9.0.2 <small>January 4, 2023</small> 

- Fixed #4823: Improved contrast ratio in footer to meet WCAG guidelines
- Fixed #4819: Social plugin crashes when card generation is disabled
- Fixed #4817: Search plugin crashes on numeric page titles in `nav`

### 9.0.1 <small>January 3, 2023</small> 

- Removed `pipdeptree` dependency for built-in info plugin
- Fixed appearance of linked tags when hovered (9.0.0 regression)
- Fixed #4810: Abbreviations run out of screen on touch devices
- Fixed #4813: View source and edit button links are the same

### 9.0.0 <small>January 2, 2023</small> 

__Additions and improvements__

- Added support for rich search previews
- Added support for tokenizer lookahead
- Added support for better search highlighting
- Added support for excluding content from search
- Added support for configurable search pipeline
- Added support for offline search via offline plugin
- Added support for multiple instances of built-in tags plugin
- Added support for removing copy-to-clipboard button
- Added support for removing footer navigation
- Added support for button to view the source of a page
- Improved readability of query string for search sharing
- Improved stability of search plugin when using `--dirtyreload`
- Improved search result group button, now sticky and stable
- Updated Norwegian translations
- Updated MkDocs to 1.4.2

__Removals__

- Removed deprecated alternative admonition qualifiers
- Removed `:is()` selectors (in output) for easier overriding
- Removed `.title` suffix on translations
- Removed legacy method for providing page title in feedback URL
- Removed support for indexing only titles in search
- Removed support for custom search transforms
- Removed support for custom search workers
- Removed temporary snow feature (easter egg)

__Fixes__

- Fixed Norwegian and Korean language code
- Fixed detection of composition events in search interface
- Fixed search plugin not using title set via front matter
- Fixed search highlighting of tags
- Fixed search sharing URL using post transformed string
- Fixed theme-color meta tag getting out-of-sync with palette toggle
- Fixed prev/next page keyboard navigation when footer is not present
- Fixed overflowing navigation tabs not being scrollable
- Fixed inclusion of code block line numbers from search

---

### 8.5.11 <small>November 30, 2022</small> 

- Let it snow, see https://twitter.com/squidfunk/status/1597939243090788352

### 8.5.10 <small>November 11, 2022</small> 

- Adjusted CSS to better allow for custom primary and accent colors
- Fixed #4620: Primary color is not applied (8.5.9 regression)

### 8.5.9 <small>November 8, 2022</small> 

- Fixed #4600: Illegible link colors for black and white primary colors
- Fixed #4594: Need to set schema to change link color

### 8.5.8 <small>November 3, 2022</small> 

- Added support for always showing settings in cookie consent
- Fixed #4571: Buttons invisible if primary color is `white` or `black`
- Fixed #4517: Illegible note in sequence diagram when using `slate` scheme

### 8.5.7 <small>October 22, 2022</small> 

- Deprecated additional admonition qualifiers to reduce size of CSS
- Fixed #4511: Search boost does not apply to sections

### 8.5.6 <small>October 2, 2022</small> 

- Modernized appearance of admonitions (with fallback, see docs)
- Improved appearance of inline code blocks in admonition titles

### 8.5.5 <small>October 1, 2022</small> 

- Updated MkDocs to 1.4
- Fixed compatibility issues with MkDocs 1.4
- Fixed #4430: build error when enabling consent without repository URL

### 8.5.4 <small>September 30, 2022</small> 

- Fixed expand icons shift on sidebar overflow (using `scrollbar-gutter`)
- Fixed #4429: Text in sequence diagrams overflows in Firefox

### 8.5.3 <small>September 20, 2022</small> 

- Fixed build error when enabling cookie consent without analytics
- Fixed #4381: Code blocks render ligatures for some fonts

### 8.5.2 <small>September 18, 2022</small> 

- Updated Mermaid.js to version 9.1.7
- Fixed overly large headlines in search results (8.5.0 regression)
- Fixed #4358: Navigation sections appear as clickable (8.5.0 regression)
- Fixed #4356: GitHub repository statistics fetched before cookie consent

### 8.5.1 <small>September 15, 2022</small> 

- Fixed #4366: Removed dependencies with native extensions

### 8.5.0 <small>September 13, 2022</small> 

- Added support for social cards
- Added support for code annotation anchor links (deep linking)
- Added support for code annotation comment stripping (syntax modifier)
- Added support for sidebars scrolling automatically to active item
- Added support for anchor following table of contents (= auto scroll)
- Added support for tag icons

### 8.4.4 <small>September 12, 2022</small> 

- Moved comments integration to separate partial (`comments.html`)

### 8.4.3 <small>September 7, 2022</small> 

- Added Simple Icons to bundled icons (+2,300 icons)
- Added support for changing edit icon
- Moved page actions to separate partial (`actions.html`)
- Fixed #4291: Version switching doesn't stay on page when anchors are used
- Fixed #4327: Links in data tables do not receive link styling

### 8.4.2 <small>August 27, 2022</small> 

- Updated Slovenian translations
- Fixed #4277: Feedback widget hidden after navigation with instant loading
- Fixed numeric tags in front matter breaking search functionality

### 8.4.1 <small>August 21, 2022</small> 

- Updated Croatian and Hebrew translations

### 8.4.0 <small>August 13, 2022</small> 

- Added support for cookie consent
- Added support for feedback widget (Was this page helpful?)
- Added support for dismissible announcement bar
- Added Armenian, Lithuanian, Tagalog, and Urdu translations

### 8.3.9 <small>July 4, 2022</small> 

- Updated Taiwanese translations for search
- Allow ids for content tabs with special characters (for mkdocstrings)
- Fixed #4083: home not clickable when using versioning (8.3.5 regression)

### 8.3.8 <small>June 24, 2022</small> 

- Fixed #4053: Limit width of videos to content area
- Fixed empty tags in front matter breaking search

### 8.3.7 <small>June 22, 2022</small> 

- Fixed search being stuck initializing when using tags (8.3.4 regression)

### 8.3.6 <small>June 16, 2022</small> 

- Fixed #4028: Links not clickable when using versioning (8.3.5 regression)

### 8.3.5 <small>June 14, 2022</small> 

- Fixed #4012: Stay on page not working for alias of active version

### 8.3.4 <small>June 11, 2022</small> 

- Fixed #4004: Tags with multiple words not searchable

### 8.3.3 <small>June 7, 2022</small> 

- Fixed #4000: Mermaid diagrams too dark in dark mode (8.3.0 regression)

### 8.3.2 <small>June 5, 2022</small> 

- Fixed #3987: Custom admonition icons don't work when defining color palette

### 8.3.1 <small>June 4, 2022</small> 

- Bump required Jinja version to 3.0.2
- Removed unnecessary conditions in templates
- Fixed scroll offset when content tabs are brought into view
- Fixed #3977: Content tabs snapping oddly in Firefox
- Fixed #3983: Missing condition in footer partial (8.3.0 regression)

### 8.3.0 <small>June 2, 2022</small> 

- Added support for custom admonition icons
- Added support for linking of content tabs
- Added support for boosting pages in search
- Added support for hiding footer navigation
- Added previous/next indicators to content tabs
- Improved typeset link colors in light and dark modes

### 8.2.16 <small>May 28, 2022</small> 

- Fixed #3957: Only animate code annotations when visible (save CPU cycles)

### 8.2.15 <small>May 14, 2022</small> 

- Added Uzbek translations
- Fixed spacing for code block results in content tabs

### 8.2.14 <small>May 8, 2022</small> 

- Fixed missing top right rounded border on admonition
- Fixed #3886: `4xx` status codes not handled when using instant loading

### 8.2.13 <small>May 2, 2022</small> 

- Fixed #3865: Tags index links to tagged pages 404 on Windows
- Fixed #3866: Bump required Python version from 3.6+ to 3.7+

### 8.2.12 <small>April 30, 2022</small> 

- Added support for GitHub-style hash fragments for dark/light images
- Improved rendering of nested code blocks in content tabs and annotations
- Fixed #3862: Upgraded to latest Pygments and Python Markdown Extensions

### 8.2.11 <small>April 25, 2022</small> 

- Temporarily pinned Pygments to `<2.12`
- Temporarily pinned Python Markdown Extensions to `<9.4`
- Improved rendering of code annotation markers

### 8.2.10 <small>April 24, 2022</small> 

- Added Macedonian translations
- Updated Mermaid.js to version 9.0.1
- Switched sidebar title in mobile navigation to bold font
- Fixed color of arrows in class and state diagrams for dark mode
- Fixed #3836: Inline admonitions overlayed by code block titles

### 8.2.9 <small>April 8, 2022</small> 

- Mitigate flicker on color palette switch by disabling all transitions
- Fixed search suggestions not triggered when following deep link
- Fixed incorrectly computed header height when using instant loading
- Fixed #3782: Admonition titles have extra pixels on wide screens in Firefox
- Fixed #3802: Always render table of contents container (except when hidden)

### 8.2.8 <small>March 27, 2022</small> 

- Bumped MkDocs version to 1.3.0 to mitigate breaking changes in Jinja
- Reverted Jinja version range limitation (added in 8.2.7)
- Improved styling of annotations and fixed borders of code blocks in tabs
- Added background color to code blocks in focused/hovered links
- Added check in tags plugin whether tags overview page exists
- Fixed #3744: Content tab indicator on wrong position when using back button

### 8.2.7 <small>March 24, 2022</small> 

- Temporarily limit Jinja version range to - 3.1 due to breaking changes

### 8.2.6 <small>March 23, 2022</small> 

- Fixed #3695: Deprecation warning for unescaped backslashes in templates
- Fixed #3696: Annotations not mounted in some Terraform code blocks
- Fixed #3698: Annotations not mounted in long code blocks (8.2.5 regression)

### 8.2.5 <small>March 6, 2022</small> 

- Fixed #3596: Mermaid not working when headline with name 'Mermaid' present
- Fixed #3643: Reduce time to render pages with thousands of code blocks
- Fixed #3665: Missing styles for Mermaid.js flowcharts cluster labels

### 8.2.4 <small>March 2, 2022</small> 

- Fixed malformed Google Fonts URL when a font setting was omitted
- Fixed #3648: Fixed specificity issue with admonitions in lists
- Fixed #3653: Invalid outdated version banner URL when using instant loading

### 8.2.3 <small>February 27, 2022</small> 

- Fixed #3578: Active element in table of contents off-by-one on large screens

### 8.2.2 <small>February 26, 2022</small> 

- Added automatic removal of query parameter when search is closed
- Fixed #3599: Anchors always overridden when using navigation tracking

### 8.2.1 <small>February 17, 2022</small> 

- Fixed module `material.plugins` not being found (8.2.0 regression)

### 8.2.0 <small>February 17, 2022</small> 

- Added native support for Mermaid.js diagrams
- Added native support for tags (with search integration)
- Added support for staying on page when switching versions

### 8.1.11 <small>February 10, 2022</small> 

- Added Portuguese (Brasilian) translations
- Updated FontAwesome to v6 – [check which icons were renamed here]
- Fixed #3545: Color palette toggle and search overlaying version selector

  [check which icons were renamed here]: https://fontawesome.com/docs/web/setup/upgrade/whats-changed#icons-renamed-in-version-6

### 8.1.10 <small>February 6, 2022</small> 

- Fixed cutoff of very wide logos in the sidebar on mobile

### 8.1.9 <small>January 30, 2022</small> 

- [Added support for `mkdocs.yml` validation and auto-complete][validation]
- Fixed errors in Latvian translations

  [validation]: ../creating-your-site.md#minimal-configuration

### 8.1.8 <small>January 23, 2022</small> 

- Added Latvian translations
- Updated Giscus example integration with dynamic theme change support
- Fixed #3479: Back-to-top button not hidden when using sticky navigation tabs
- Fixed #3491: Logo in header and drawer doesn't honor aspect ratio

### 8.1.7 <small>January 16, 2022</small> 

- Improved back-to-top button behavior - now not shown on anchor jump

### 8.1.6 <small>January 11, 2022</small> 

- Fixed spacing of blockquotes (8.1.5 regression)
- Fixed edge cases for rounded corners on code blocks (8.1.5 regression)
- Fixed issues with code annotation line heights

### 8.1.5 <small>January 9, 2022</small> 

- Improved browser support: Chrome 49+, Safari 10+, Firefox 53+, Edge 79+
- Improved rendering of inline code blocks in headlines
- Added Bahasa Malaysian translations
- Fixed #3354: MathJax formulas show vertical scrollbar

### 8.1.4 <small>January 2, 2022</small> 

- Added indicator to navigation expander icon
- Improved support for reduced motion preference
- Fixed jitter of active content tab indicator

### 8.1.3 <small>December 19, 2021</small> 

- Added animation to active content tab indicator
- Fixed #3360: Highlighted lines add blank lines in copied text
- Fixed usage of subsequent index files when using section index pages

### 8.1.2 <small>December 15, 2021</small> 

- Switched CSS sources to logical properties
- Added transformation of logical properties to `ltr`/`rtl` equivalents
- Fixed spacing for admonitions inside lists (8.1.1 regression)
