const colors = { '5min': '#13E2C9' };

export const timeSeriesInfo = new Object();
export const getColor = line => colors[line.id];

timeSeriesInfo.lineWidth = 3.5;
timeSeriesInfo.colors = getColor;
timeSeriesInfo.enableArea = false;
timeSeriesInfo.enablePoints = false;
timeSeriesInfo.enableGridX= false;
timeSeriesInfo.enableGridY= false;
timeSeriesInfo.enableSlices= 'x';
timeSeriesInfo.isInteractive= true;
timeSeriesInfo.margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 60
};
timeSeriesInfo.yScale = {
  type: 'linear',
  min: 'auto',
  max: 'auto',
  stacked: false,
  reverse: false
};
timeSeriesInfo.xScale= {
   type: "time",
   format: "%Y-%m-%d %H:%M:%S",
   precision: "second"
};
timeSeriesInfo.axisBottom= {
  format: "%H:%M",
  tickValues: "every 1 hours"
};










timeSeriesInfo.defs = [{
  id: 'gradientA',
  type: 'linearGradient',
  colors: [
      { offset: 0, color: '#13E2C9' },
      { offset: 100, color: '#13E2C9' },
  ]
}]

timeSeriesInfo.fill = {
  match: { id: 'react' }, id: 'gradientA'
}


//
