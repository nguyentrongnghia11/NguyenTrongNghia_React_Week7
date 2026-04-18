function PaginationDots({ total = 3, current = 1 }) {
	return (
		<div className="mt-4 flex items-center justify-center gap-2">
			{Array.from({ length: total }, (_, index) => {
				const isActive = index === current
				return (
					<span
						key={`dot-${index + 1}`}
						className={`h-2 w-2 rounded-full ${
							isActive ? 'bg-[#E04071]' : 'bg-[#DCDCDC]'
						}`}
					/>
				)
			})}
		</div>
	)
}

export default PaginationDots
