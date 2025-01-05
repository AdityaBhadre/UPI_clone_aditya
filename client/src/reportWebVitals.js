// Import the required functions from the 'web-vitals' library
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Use the on<Metric> functions to track performance metrics
    onCLS(onPerfEntry); // Cumulative Layout Shift
    onFID(onPerfEntry); // First Input Delay
    onFCP(onPerfEntry); // First Contentful Paint
    onLCP(onPerfEntry); // Largest Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
};

export default reportWebVitals;