"use client"
import { useEffect, useState } from "react";

interface HeadingStylerProps {
  content: string;
}

export default function HeadingStyler({ content }: HeadingStylerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted before DOM manipulation
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run if component is mounted (client-side only)
    if (!isMounted) return;

    // Function to replace bullet points with check icons
    const replaceBulletsWithIcons = () => {
      const overviewText = document.querySelector('.overview-text');
      if (!overviewText) return;

      // SVG check icon (similar to FaCheck from react-icons)
      const checkIconSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

      // Find all paragraphs that contain bullet points and haven't been processed yet
      const paragraphs = overviewText.querySelectorAll('p');
      
      paragraphs.forEach(paragraph => {
        // Skip if already processed (check for check icon presence)
        if (paragraph.querySelector('svg[stroke="#10b981"]')) return;
        
        const originalHTML = paragraph.innerHTML;
        
        // Check if paragraph contains bullet point (•)
        if (originalHTML.includes('•')) {
          // Split by <br> tags to handle line breaks
          const lines = originalHTML.split(/<br\s*\/?>/i);
          
          const processedLines = lines.map(line => {
            const trimmedLine = line.trim();
            
            // Check if line starts with bullet point
            if (trimmedLine.startsWith('•')) {
              // Remove the bullet point and any leading whitespace
              const textWithoutBullet = trimmedLine.replace(/^[\s]*•[\s]*/, '').trim();
              
              if (textWithoutBullet) {
                // Create a div wrapper with check icon (using div for better block display)
                return `<div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 2px; direction: rtl;">
                  <span style="flex-shrink: 0; margin-top: 2px;">${checkIconSVG}</span>
                  <span style="flex: 1;">${textWithoutBullet}</span>
                </div>`;
              }
            }
            // If line doesn't start with bullet but contains it, try to process it
            else if (trimmedLine.includes('•')) {
              // Split by bullet and process each part
              const parts = trimmedLine.split('•').filter(p => p.trim());
              if (parts.length > 1) {
                return parts.map(part => {
                  const trimmedPart = part.trim();
                  if (trimmedPart) {
                    return `<div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; direction: rtl;">
                      <span style="flex-shrink: 0; margin-top: 2px;">${checkIconSVG}</span>
                      <span style="flex: 1;">${trimmedPart}</span>
                    </div>`;
                  }
                  return '';
                }).filter(Boolean).join('');
              }
            }
            
            // Return original line if it doesn't contain bullet at start
            return line;
          });
          
          // Reconstruct the paragraph - remove empty lines and join
          const filteredLines = processedLines.filter(line => line.trim());
          if (filteredLines.length > 0) {
            paragraph.innerHTML = filteredLines.join('');
          }
        }
      });
    };

    // Function to style headings with specific classes
    const styleHeadings = () => {
      const overviewText = document.querySelector('.overview-text');
      if (!overviewText) return;

      // Try multiple selectors to catch all strong elements in paragraphs
      const strongElements = overviewText.querySelectorAll('p strong, strong');
      
      // Define main headings that should get primary styling (both English and Arabic)
      const mainHeadings = [
        // English headings
        'Course Overview',
        'Course Benefits', 
        'Course Objectives',
        'Training Methodology',
        'Target Audience',
        'Target Competencies',
        'Course Outline',
        'Why Attend',
        // Arabic headings
        'نظرة عامة على الدورة:',
        'فوائد الدورة:',
        'أهداف الدورة:',
        'منهجية التدريب:',
        'الفئة المستهدفة:',
        'الكفاءات المستهدفة:',
        'محاور الدورة:',
        'القيمة التطبيقية للدورة:'
      ];
      
      strongElements.forEach(strong => {
        const text = strong.textContent?.trim() || '';
        const parent = strong.parentElement;
        
        // Check if this is a heading (strong element that's the main content of its paragraph)
        let isHeading = false;
        if (parent && parent.tagName === 'P') {
          const parentText = parent.textContent?.trim() || '';
          const strongText = strong.textContent?.trim() || '';
          
          // It's a heading if:
          // 1. The paragraph text matches the strong text exactly (ignoring whitespace/br)
          // 2. The paragraph text starts with the strong text
          // 3. The strong is the only significant content in the paragraph
          const parentTextNormalized = parentText.replace(/\s+/g, ' ').trim();
          const strongTextNormalized = strongText.replace(/\s+/g, ' ').trim();
          
          if (parentTextNormalized === strongTextNormalized || 
              parentTextNormalized.startsWith(strongTextNormalized) ||
              parent.children.length === 1) {
            isHeading = true;
          }
        } else {
          // If not in a paragraph, treat as heading
          isHeading = true;
        }
        
        if (!isHeading) return;
        
        // Remove existing classes to prevent duplicates
        strong.classList.remove('unit-heading', 'secondary-heading');
        
        // Check if it's a Unit heading (English or Arabic) - ONLY unit headings get unit-heading class
        if (text.startsWith('Unit ') || text.startsWith('الوحدة')) {
          strong.classList.add('unit-heading');
        }
        // Check if it's NOT one of the main headings, make it secondary
        else if (!mainHeadings.includes(text)) {
          strong.classList.add('secondary-heading');
        }
        // Main headings keep the default primary styling (no additional class needed)
      });
    };

    // Multiple attempts to ensure styling is applied
    const attemptStyling = () => {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        replaceBulletsWithIcons();
        styleHeadings();
        // Try again after delays to catch late-rendered content
        setTimeout(() => {
          requestAnimationFrame(() => {
            replaceBulletsWithIcons();
            styleHeadings();
          });
        }, 200);
        setTimeout(() => {
          requestAnimationFrame(() => {
            replaceBulletsWithIcons();
            styleHeadings();
          });
        }, 500);
        setTimeout(() => {
          requestAnimationFrame(() => {
            replaceBulletsWithIcons();
            styleHeadings();
          });
        }, 1000);
      });
    };

    // Style headings when component mounts or content changes
    attemptStyling();
    
    // Set up MutationObserver to handle dynamic content changes
    let observer: MutationObserver | null = null;
    const setupObserver = () => {
      const overviewText = document.querySelector('.overview-text');
      if (overviewText && !observer) {
        observer = new MutationObserver(() => {
          // Debounce the styling to avoid excessive calls
          setTimeout(() => {
            requestAnimationFrame(() => {
              replaceBulletsWithIcons();
              styleHeadings();
            });
          }, 100);
        });
        
        observer.observe(overviewText, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        });
      }
    };
    
    // Setup observer with retry
    setupObserver();
    setTimeout(setupObserver, 100);
    setTimeout(setupObserver, 500);
    
    // Also call when DOM is ready (fallback for dynamic content)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', attemptStyling);
    } else {
      // If DOM is already loaded, try again after a delay
      setTimeout(attemptStyling, 100);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [content, isMounted]);

  return null; // This component doesn't render anything
}
