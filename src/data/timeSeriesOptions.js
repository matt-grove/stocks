const colors = { 'line': '#13E2C9' };
const getColor = line => colors[line.id];

const lineProperties = {
  colors: getColor,
  motionDamping: 18,
  lineWidth: 3.5,
  enableArea: false,
  enablePoints: false,
  enableGridX: false,
  enableGridY: false,
  enableSlices: 'x',
  isInteractive: true,
  motionStiffness: 300,
  margin: {
    top: 50,
    right: 50,
    bottom: 50,
    left: 60
  },
  yScale: {
    type: 'linear',
    min: 'auto',
    max: 'auto',
    stacked: false,
    reverse: false
  },
  xScale: {
     type: "time",
     format: "%Y-%m-%d %H:%M:%S",
     precision: "second"
  },
  axisBottom: {
    format: "%H:%M",
    tickValues: "every 1 hours"
  }
}

export default lineProperties;
