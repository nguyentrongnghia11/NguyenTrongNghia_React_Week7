function ModalHeader({ onClose }) {
	return (
		<div className="flex justify-end px-4 pt-4 sm:px-5 sm:pt-5">
			<button
				type="button"
				onClick={onClose}
				aria-label="Close onboarding modal"
				className="text-2xl leading-none text-[#8f8f8f] transition hover:text-[#5f5f5f]"
			>
				×
			</button>
		</div>
	)
}

export default ModalHeader
