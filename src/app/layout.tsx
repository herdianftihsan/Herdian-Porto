import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herdian Immanuel Todyas — Full-Stack Web Developer & Systems Engineer",
  description:
    "Portfolio of Herdian Immanuel Todyas, Informatics Engineering student at PENS. Designing AI-integrated web applications, real-time monitoring interfaces, and reliable software architectures grounded in C, Java, and Linux.",
};


const cleanExtensionAttributesScript = `
(function() {
  try {
    function clean(el) {
      if (!el || !el.attributes) return;
      var attrs = el.attributes;
      for (var i = attrs.length - 1; i >= 0; i--) {
        var n = attrs[i].name;
        if (
          n === 'bis_skin_checked' ||
          n === 'bis_register' ||
          n.indexOf('__processed_') === 0
        ) {
          el.removeAttribute(n);
        }
      }
    }
    clean(document.documentElement);
    clean(document.body);
    if (document.querySelectorAll) {
      var existing = document.querySelectorAll('*');
      for (var j = 0; j < existing.length; j++) {
        clean(existing[j]);
      }
    }
    var observer = new MutationObserver(function(mutations) {
      for (var m = 0; m < mutations.length; m++) {
        var mut = mutations[m];
        if (mut.type === 'attributes') {
          clean(mut.target);
        } else if (mut.addedNodes) {
          for (var k = 0; k < mut.addedNodes.length; k++) {
            var node = mut.addedNodes[k];
            if (node.nodeType === 1) {
              clean(node);
              if (node.querySelectorAll) {
                var descendants = node.querySelectorAll('*');
                for (var d = 0; d < descendants.length; d++) {
                  clean(descendants[d]);
                }
              }
            }
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      childList: true,
      attributeFilter: ['bis_skin_checked', 'bis_register']
    });
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-white/20 selection:text-white"

      >
        <script
          async={true}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: cleanExtensionAttributesScript }}
        />

        {children}
      </body>
    </html>
  );
}

