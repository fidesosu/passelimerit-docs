// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // This function creates the numbers next to the links on the sidebar and styles them.
    let stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck);

        let level1Count = 0;  // x.
        let level2Count = 0;  // x.x.
        let level3Count = 0;  // x.x.x.
      
        document.querySelectorAll('.item .link .text').forEach(function(element) {
          const parentClasses = element.closest('.level-1, .level-2, .level-3');
      
          if (parentClasses.classList.contains('level-1')) {
            level1Count++;
            level2Count = 0;
            level3Count = 0;
            element.textContent = `${level1Count}. ${element.textContent}`;
          } else if (parentClasses.classList.contains('level-2')) {
            level2Count++;
            level3Count = 0;
            element.textContent = `${level1Count}.${level2Count}. ${element.textContent}`;
          } else if (parentClasses.classList.contains('level-3')) {
            level3Count++;
            element.textContent = `${level1Count}.${level2Count}.${level3Count}. ${element.textContent}`;
          }
        });

        // Select all elements withe the class '.item'
        const items = document.querySelectorAll('.item');

        // Loop through each item
        items.forEach(item => {
            // Select the nested elements
            const links = item.querySelectorAll('.link .text');

            // Loop through each link
            links.forEach(link => {
                const textContent = link.textContent;

                // Apply regex to match patterns like 1., 1.1., 1.1.1.
                const regex = /\b\d+\.\s|\b\d+\.\d+\.\s|\b\d+\.\d+\.\d+\.\s/g;
                const matchedNumbers = textContent.match(regex);

                if (matchedNumbers) {
                    const firstMatch = matchedNumbers[0];
                    const startIndex = textContent.indexOf(firstMatch);
                    const endIndex = startIndex + firstMatch.length;

                    // Wrap the matched text in a span with the style applied
                    const styledText = `<span style="font-weight: bold; color: #bbb;">${firstMatch}</span>`;
                    const newTextContent = textContent.substring(0, startIndex) + styledText + textContent.substring(endIndex);

                    // Set the modified text content back to the element
                    link.innerHTML = newTextContent;
                }
                else {
                  
                }
            });
        });
      }
    }, 1);
  }
}
