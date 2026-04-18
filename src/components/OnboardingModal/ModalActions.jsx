function ModalActions({ onNext, onSkip }) {
  return (
    <div className="mt-6 px-8 pb-7 text-center">
      <button
        type="button"
        onClick={onNext}
        className="w-full max-w-[260px] rounded-full bg-[#E04071] py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
      >
        Next
      </button>
      <button
        type="button"
        onClick={onSkip}
        className="mt-3 block w-full text-center text-sm font-medium text-[#A3A3A3] transition hover:text-[#8f8f8f]"
      >
        Skip
      </button>
    </div>
  )
}

export default ModalActions