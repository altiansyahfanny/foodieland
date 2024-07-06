import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
const Reveal = ({ children, className }: { children: ReactNode; className?: string }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
			slideControls.start('visible');
		}
	}, [isInView]);
	return (
		<div
			ref={ref}
			// className="w-fit" style={{ position: 'relative', overflow: 'hidden' }}
			className={className}
		>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
				className="h-full"
			>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;
