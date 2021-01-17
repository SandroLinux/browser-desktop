#filter dumbComments emptyLines substitution

// -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Non-static prefs that are specific to desktop Firefox belong in this file
// (unless there is a compelling and documented reason for them to belong in
// another file).
//
// Please indent all prefs defined within #ifdef/#ifndef conditions. This
// improves readability, particular for conditional blocks that exceed a single
// screen.

// General
pref("general.autoScroll", true);
pref("browser.preferences.experimental.hidden", true);
pref("browser.preferences.experimental", false);
pref("app.feedback.baseURL", "https://services.dothq.co/feedback/send?product=dot&version=%VERSION%&channel=unknown");

// Network
pref("dom.security.https_only_mode", true); // Enable HTTPS-only mode
pref("network.trr.mode", 2); // Enable DNS-over-HTTPS by default
pref("network.trr.uri", "https://trr.dns.nextdns.io/");

pref("network.security.esni.enabled", true); // Encrypted SNI support
pref("network.http.http3.enabled", true); // HTTP3 support

pref("network.IDN_show_punycode", true);  // Convert non-unicode domains to Unicode to stop phishing

pref("network.http.referer.XOriginTrimmingPolicy", 2); // Tighten referrer handling policy
pref("network.http.referer.XOriginPolicy", 2);

pref("network.dns.disablePrefetch", true); // Disable prefetch which exposes your IP to unvisited sites
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.predictor.enabled", false);
pref("network.predictor.enable-prefetch", false);
pref("network.prefetch-next", false);

// Opt out of studies, experiments and telemetry
pref("app.shield.optoutstudies.enabled", false);
pref("browser.onboarding.enabled", false);
pref("experiments.enabled", false);
pref("network.allow-experiments", false);
pref("browser.discovery.enabled", false);

// Disable Safebrowsing
// todo: Swap out Safe Browsing for open-source alternative
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.blockedURIs.enabled", false);

pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", "");
pref("browser.safebrowsing.provider.google4.updateURL", "");
pref("browser.safebrowsing.provider.google4.reportURL", "");
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google4.lists", "");
pref("browser.safebrowsing.provider.google4.gethashURL", "");
pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
pref("browser.safebrowsing.provider.google4.advisoryURL", "");
pref("browser.safebrowsing.provider.google4.advisoryName", "");
pref("browser.safebrowsing.provider.google.updateURL", "");
pref("browser.safebrowsing.provider.google.reportURL", "");
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google.pver", "");
pref("browser.safebrowsing.provider.google.lists", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("browser.safebrowsing.provider.google.advisoryURL", "");

// Security
pref("security.insecure_connection_text.enabled", true);

// Pocket
pref("extensions.pocket.api", "");
pref("extensions.pocket.enabled", false);
pref("extensions.pocket.oAuthConsumerKey", "");
pref("extensions.pocket.site", "");
pref("extensions.pocket.onSaveRecs", false);
pref("extensions.pocket.onSaveRecs.locales", "");

// Appearance
pref("layout.css.backdrop-filter.enabled", true);
pref("gfx.webrender.all", true);
pref("browser.tabs.drawInTitlebar", true);