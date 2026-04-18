import ModalHeader from './ModalHeader'
import OnboardingContent from './OnboardingContent'
import PaginationDots from './PaginationDots'
import ModalActions from './ModalActions'

function OnboardingModal({ onClose }) {
  return (
    <div className="absolute inset-0 z-20 grid place-items-center bg-black/35 px-4">
      <div className="w-full max-w-[760px] rounded-lg bg-[#FFFFFF] shadow-[0_20px_60px_rgba(0,0,0,0.26)]">
        <ModalHeader onClose={onClose} />

        <OnboardingContent
          title="Discover Chefify"
          subtitle="Easy and delicious cooking instructions right here. Start exploring now!"
          imageSrc="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=80"
        />

        <PaginationDots total={3} current={1} />
        <ModalActions onNext={() => {}} onSkip={onClose} />
      </div>
    </div>
  )
}

export default OnboardingModal