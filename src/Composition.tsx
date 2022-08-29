import { useVideoConfig, useCurrentFrame } from "remotion";


export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	const frame = useCurrentFrame();
	const opacity = frame / durationInFrames;
	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				background: 'cyan',
				color: 'black',
				opacity,
			}}
			>
			Hello DevEffect
			This video is using {width}x{height} px
			Being {durationInFrames/fps} seconds long

			{frame}

		</div>
	);
};
