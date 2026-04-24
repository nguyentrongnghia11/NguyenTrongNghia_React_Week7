import ModalHeader from './ModalHeader'
import OnboardingContent from './OnboardingContent'
import PaginationDots from './PaginationDots'
import ModalActions from './ModalActions'
import modalImg from '../../assets/modal.png';

function OnboardingModal({ onClose }) {
  return (
    <div className="absolute inset-0 z-20 grid place-items-center bg-black/35 px-4">
      <div className="w-full max-w-[824px] rounded-lg bg-[#FFFFFF] shadow-[0_20px_60px_rgba(0,0,0,0.26)]">
        <ModalHeader onClose={onClose} />

        <OnboardingContent
          title="Discover Chefify"
          subtitle="Easy and delicious cooking instructions right here. Start exploring now!"
          imageSrc= {modalImg}
        />

        <PaginationDots total={3} current={1} />
        <ModalActions onNext={() => {}} onSkip={onClose} />
      </div>
    </div>
  )
}

export default OnboardingModal