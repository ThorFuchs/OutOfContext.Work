// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Welcome</a></li><li class="chapter-item expanded affix "><a href="about.html">About the Book</a></li><li class="chapter-item expanded affix "><a href="authors.html">The Authors</a></li><li class="chapter-item expanded affix "><a href="prologue.html">Prologue: Ten Years Out of Office</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Part I: The Beautiful Wreckage</li><li class="chapter-item expanded "><a href="part-1/index.html">Part I Introduction</a></li><li class="chapter-item expanded "><a href="part-1/chapter-1.html">Chapter 1: The Company That Implemented Everything</a></li><li class="chapter-item expanded "><a href="part-1/chapter-2.html">Chapter 2: The Collaboration Catastrophe</a></li><li class="chapter-item expanded "><a href="part-1/chapter-3.html">Chapter 3: The Infinite Iteration</a></li><li class="chapter-item expanded "><a href="part-1/chapter-4.html">Chapter 4: The Data Delusion</a></li><li class="chapter-item expanded "><a href="part-1/chapter-5.html">Chapter 5: The Engagement Entrapment</a></li><li class="chapter-item expanded "><a href="part-1/chapter-6.html">Chapter 6: The Purpose Parade</a></li><li class="chapter-item expanded "><a href="part-1/chapter-7.html">Chapter 7: The Language Lobotomy</a></li><li class="chapter-item expanded "><a href="part-1/chapter-8.html">Chapter 8: The Leadership Lie</a></li><li class="chapter-item expanded "><a href="part-1/chapter-9.html">Chapter 9: The Trust Theater</a></li><li class="chapter-item expanded "><a href="part-1/chapter-10.html">Chapter 10: The Deskilling Disaster</a></li><li class="chapter-item expanded "><a href="part-1/chapter-11.html">Chapter 11: The Clarity Confrontation</a></li><li class="chapter-item expanded "><a href="part-1/chapter-12.html">Chapter 12: The Pattern in the Wreckage</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Part II: Context Collapse</li><li class="chapter-item expanded "><a href="part-2/index.html">Part II Introduction</a></li><li class="chapter-item expanded "><a href="part-2/chapter-13.html">Chapter 13: The Beautiful Lie</a></li><li class="chapter-item expanded "><a href="part-2/chapter-14.html">Chapter 14: Value Creation Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-15.html">Chapter 15: Narrative Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-16.html">Chapter 16: Temporal Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-17.html">Chapter 17: People Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-18.html">Chapter 18: Structural Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-19.html">Chapter 19: Knowledge Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-20.html">Chapter 20: Meaning Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-21.html">Chapter 21: Decency Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-22.html">Chapter 22: Resilience Collapse</a></li><li class="chapter-item expanded "><a href="part-2/chapter-23.html">Chapter 23: Innovation Collapse, Part I</a></li><li class="chapter-item expanded "><a href="part-2/chapter-24.html">Chapter 24: Innovation Collapse, Part II</a></li><li class="chapter-item expanded "><a href="part-2/chapter-25.html">Chapter 25: The House We Never Leave</a></li><li class="chapter-item expanded "><a href="part-2/chapter-26.html">Chapter 26: The Walls Still Standing</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Part III: Crafting With Context</li><li class="chapter-item expanded "><a href="part-3/index.html">Part III Introduction</a></li><li class="chapter-item expanded "><a href="part-3/chapter-27.html">Chapter 27: Operational Clarity</a></li><li class="chapter-item expanded "><a href="part-3/chapter-28.html">Chapter 28: The Craft Renaissance</a></li><li class="chapter-item expanded "><a href="part-3/chapter-29.html">Chapter 29: Dancing with Intelligence</a></li><li class="chapter-item expanded "><a href="part-3/chapter-30.html">Chapter 30: Kronos and Kairos</a></li><li class="chapter-item expanded "><a href="part-3/chapter-31.html">Chapter 31: Healthy Hierarchies and Leadership</a></li><li class="chapter-item expanded "><a href="part-3/chapter-32.html">Chapter 32: The Return of the Master Generalist</a></li><li class="chapter-item expanded "><a href="part-3/chapter-33.html">Chapter 33: The Four People Functions</a></li><li class="chapter-item expanded "><a href="part-3/chapter-34.html">Chapter 34: True Transformations</a></li><li class="chapter-item expanded "><a href="part-3/chapter-35.html">Chapter 35: Performance Options</a></li><li class="chapter-item expanded "><a href="part-3/chapter-36.html">Chapter 36: The Weight of Inheritance</a></li><li class="chapter-item expanded "><a href="part-3/chapter-37.html">Chapter 37: On the Threshold</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Part IV: The Adults in the House</li><li class="chapter-item expanded "><a href="part-4/index.html">Part IV Introduction</a></li><li class="chapter-item expanded "><a href="part-4/chapter-38.html">Chapter 38: The View from Here</a></li><li class="chapter-item expanded "><a href="part-4/chapter-39.html">Chapter 39: Growing Up</a></li><li class="chapter-item expanded "><a href="part-4/chapter-40.html">Chapter 40: Mirrors and Fractals</a></li><li class="chapter-item expanded "><a href="part-4/chapter-41.html">Chapter 41: The Great Adolescence, Part I</a></li><li class="chapter-item expanded "><a href="part-4/chapter-42.html">Chapter 42: The Great Adolescence, Part II</a></li><li class="chapter-item expanded "><a href="part-4/chapter-43.html">Chapter 43: The Great Adolescence, Part III</a></li><li class="chapter-item expanded "><a href="part-4/chapter-44.html">Chapter 44: Four Hours or Forty</a></li><li class="chapter-item expanded "><a href="epilogue.html">Epilogue: To Our Future Selves</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Appendix</li><li class="chapter-item expanded "><a href="appendix/fun-with-functors.html">Fun With Functors</a></li><li class="chapter-item expanded "><a href="appendix/fun-with-foundations.html">Fun with Foundations</a></li><li class="chapter-item expanded "><a href="appendix/fun-with-futures.html">Fun with Futures</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Resources</li><li class="chapter-item expanded "><a href="resources/action-handbook.html">Monday Morning Action Handbook</a></li><li class="chapter-item expanded "><a href="resources/klaus-wisdom.html">Klaus&#39;s Wisdom Index</a></li><li class="chapter-item expanded "><a href="resources/glossary.html">Glossary</a></li><li class="chapter-item expanded "><a href="resources/get-the-book.html">Get the Book</a></li><li class="chapter-item expanded "><a href="resources/press-kit.html">Press Kit</a></li><li class="chapter-item expanded "><a href="resources/contact.html">Contact</a></li><li class="chapter-item expanded "><a href="resources/newsletter.html">Newsletter</a></li><li class="chapter-item expanded "><a href="resources/search.html">Search</a></li><li class="chapter-item expanded "><a href="resources/nav-links.html">Navigation Links</a></li><li class="chapter-item expanded affix "><li class="spacer"></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
