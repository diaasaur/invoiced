import { ResponsivePie } from '@nivo/pie';

export default function PieChart({ data, textColor }) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 45, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      cornerRadius={4}
      activeOuterRadiusOffset={8}
      colors={({ data }) => data.bg}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={8}
      arcLinkLabelsTextColor={textColor}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={({ data }) => data.text}
      padAngle={1}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 80,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
        },
      ]}
    />
  );
}
