import React from 'react'
const colors = { 'line': '#13E2C9' }
const getColor = line => colors[line.id]

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
    top: 20,
    right: 30,
    bottom: 40,
    left: 70
  },
  yScale: {
    type: 'linear',
    min: 'auto',
    max: 'auto',
    stacked: false,
    reverse: false
  },
  xScale: {
     type: "linear"
  },
  axisBottom: null,

  sliceTooltip: ( { slice } ) => (
    <>
      <h5>
        { slice.points[0].data.date }
      </h5>
      <h6>
        { slice.points[0].data.time }
      </h6>
    </>
  )
}

export default lineProperties;
