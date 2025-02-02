import html2canvas from "html2canvas";

export async function downloadImage(element: HTMLElement | null, fileName: string) {
  if (!element) return;

  // Expand element temporarily to capture all content
  const originalStyle = element.style.overflow;
  element.style.overflow = "visible";

  const canvas = await html2canvas(element, {
    scale: window.devicePixelRatio || 2, // Higher scale for better resolution
    logging: false,
    useCORS: true,
    allowTaint: true,
    scrollX: 0,
    scrollY: 0,
    width: element.scrollWidth,
    height: element.scrollHeight,
  });

  element.style.overflow = originalStyle; // Restore original overflow setting

  const image = canvas.toDataURL("image/png", 1.0);
  const link = document.createElement("a");
  link.download = fileName;
  link.href = image;
  link.click();
}
