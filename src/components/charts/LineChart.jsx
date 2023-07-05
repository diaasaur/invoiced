import { ResponsiveLine } from '@nivo/line';

export default function LineChart({ data, colors: { text, crossHair, grid } }) {
  return (
    <ResponsiveLine
      data={data}
      // curve="cardinal"
      enableArea={true}
      colors={['#9277ff']}
      margin={{ top: 55, right: 20, bottom: 40, left: 50 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: 5, // Modify the tick values here
      }}
      useMesh={true}
      legends={[]}
      gridYValues={5}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: text,
            },
          },
        },
        grid: {
          line: {
            stroke: grid,
            strokeWidth: 1,
            strokeDasharray: '4 4',
          },
        },
        crosshair: {
          line: {
            stroke: crossHair,
            strokeWidth: 1,
          },
        },
      }}
    />
  );
}
