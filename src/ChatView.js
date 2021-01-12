import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ChatView.css';
import { selectSelectedImage } from './features/appSlice';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useHistory();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  const exit = () => {
    history.replace('./chats');
  };

  return (
    <div className='chatView'>
      <img src={selectedImage} onClick={exit} alt='SelectedImage' />
      <div className='chatView__timer'>
        <CountdownCircleTimer
          isPlaying
          duration={8}
          strokeWidth={6}
          size={50}
          colors={[
            ['#004776', 0.33],
            ['#F7B802', 0.33],
            ['#A30001', 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }

            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView;
