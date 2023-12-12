import withLogger from "@hoc/withLogger";
import pdfUrl from "@assets/Haris-Hodzic-CV.pdf";

import styles from "./PDFViewer.module.css";
import useResize from "@root/hooks/useResize";

const PDFViewer = () => {
  const { deviceSize } = useResize();

  return (
    <iframe
      className={styles.iframe}
      key={deviceSize}
      title="CV Viewer"
      src={pdfUrl}
      allowFullScreen
    />
  );
};

export default withLogger(PDFViewer);
