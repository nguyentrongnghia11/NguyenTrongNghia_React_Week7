function OnboardingContent({ title, subtitle, imageSrc }) {
	return (
		<div className="px-4 text-center sm:px-8">
			<h2 className="text-[40px] font-extrabold leading-none tracking-tight text-[#F44B87FF] sm:text-[44px]">
				{title}
			</h2>
			<p className="mt-3 text-sm text-[#A3A3A3]">{subtitle}</p>

			<div className="mt-5 overflow-hidden rounded-lg">
				<img
					src={imageSrc}
					alt="Mâm cơm với các đĩa thức ăn"
					className="h-[215px] w-full object-cover sm:h-[245px]"
				/>
			</div>
		</div>
	)
}

export default OnboardingContent
