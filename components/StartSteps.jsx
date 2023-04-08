import styles from '../styles';

const StartSteps = ({ imgUrl, description }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img
        src={imgUrl}
        alt="new-feature-1"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{description}</p>
  </div>
);

export default StartSteps;
