import styles from '../styles';

const StartSteps = ({ imgUrl, description }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[80px] h-[80px] rounded-[24px] gradient-05 border-[1px] border-[rgba(255,255,255,0.08)]`}>
      <img
        src={imgUrl}
        alt="new-feature-1"
        className="w-[70%] h-[70%] object-contain"
      />
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{description}</p>
  </div>
);

export default StartSteps;
