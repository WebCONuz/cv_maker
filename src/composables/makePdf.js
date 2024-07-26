import { jsPDF } from "jspdf";

export const makePdf = (htmlContent, filename) => {
  const pdf = new jsPDF({
    orientation: "p",
    unit: "px",
    format: "a4",
    putOnlyUsedFonts: true,
  });
  pdf.html(htmlContent, {
    callback: (pdf) => {
      pdf.save(`${filename}.pdf`);
    },
    margin: [15, 0, 15, 0],
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 446,
    windowWidth: 892,
  });
};
