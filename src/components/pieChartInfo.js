import React from 'react';

const pieProperties = {
  innerRadius: 0.83,
  margin: { top: 40, right: 80, bottom: 80, left: 80 },
  startAngle: -120,
  endAngle: 120,
  enableRadialLabels: false,
  enableSlicesLabels: false,
  colors: 'hsl(0, 0%, 95%)',
  onMouseEnter: (data, e) => {
            console.log({ is: 'mouseenter', data, event: e })
        },
  defs: [{
          id: 'complete',
          type: 'linearGradient',
          colors: [
              { offset: 0, color: '#9DDEFA' },
              { offset: 200, color: '#13E2C9' },
          ]}
      ],
  fill: [{ match: { id: 'complete' }, id: 'complete' }],
  tooltip: ({ id, value, label, target }) => (
                <div>
                    <h3>Target</h3>
                    <strong>{value}%</strong> of <strong>{target}%</strong> {label}
                </div>
            )
};



export default pieProperties;
