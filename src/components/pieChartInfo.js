const pieProperties = {
  innerRadius: 0.8,
  margin: { top: 40, right: 80, bottom: 80, left: 80 },
  startAngle: -120,
  endAngle: 120,
  enableRadialLabels: false,
  defs: [{
          id: 'complete',
          type: 'linearGradient',
          colors: [
              { offset: 0, color: '#9DDEFA' },
              { offset: 200, color: '#13E2C9' },
          ]},
         {
          id: 'incomplete',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: 'hsl(0,0%, 95%)' },
            { offset: 100, color: 'hsl(0,0%, 95%)' }
          ]
        }
      ],
  fill: [{ match: { id: 'java' }, id: 'complete' }, { match: { id: 'elixir' }, id: 'incomplete' }]
};

export default pieProperties;
