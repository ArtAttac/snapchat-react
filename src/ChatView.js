import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ChatView.css';
import { selectSelectedImage } from './features/appSlice';

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useHistory();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    history.replace('./chats');
  };

  return (
    <div className='chatView'>
      <img src={selectedImage} onClick={exit} alt='SelectedImage' />
    </div>
  );
}

export default ChatView;
