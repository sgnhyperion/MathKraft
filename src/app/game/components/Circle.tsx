"use client"

interface CircleProps {
  numerator: number;  // Number of filled slices
  denominator: number; // Total number of slices
  color?: string; // Color of filled slices
  circleColor?: string; // Color of the circle
}

const Circle = ({ numerator, denominator, color = '#99d502', circleColor = '#d3ea00' }: CircleProps) => {

  // Generate divider lines based on number of slices
  const generateSlices = () => {
    const slices = [];
    const angleStep = 360 / denominator;

    for (let i = 0; i < denominator; i++) {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      const largeArcFlag = angleStep > 180 ? 1 : 0;

      const x1 = 50 + 45 * Math.cos((startAngle * Math.PI) / 180);
      const y1 = 50 + 45 * Math.sin((startAngle * Math.PI) / 180);
      const x2 = 50 + 45 * Math.cos((endAngle * Math.PI) / 180);
      const y2 = 50 + 45 * Math.sin((endAngle * Math.PI) / 180);

      slices.push(
        <path
          key={i}
          d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
          fill={i < numerator ? color : 'none'} // Fill slices based on numerator
          stroke="#FFFFFF" // Set the stroke color (gap) to white
        />
      );
    }

    return slices;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: '160px', height: '160px' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill={circleColor} />
          {generateSlices()}
        </svg>
      </div>
    </div>
  );
};

export default Circle;
