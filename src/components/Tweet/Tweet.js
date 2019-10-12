import React from 'react';
import { FaRetweet, FaRegHeart, FaUpload } from 'react-icons/fa';
import { MdChatBubbleOutline, } from 'react-icons/md';

// import { Container } from './styles';

const Tweet = (props) => {
  const { profileImg, name, user, date, text, comments, retweets, fav } = props;
  return (
    <div className="tweet">
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>

        <img src={profileImg} alt="profileimage" style={{ marginLeft: 10, width: 43, height: 43, borderRadius: 100 }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ marginBottom: 0, marginTop: 3, fontWeight: 'bold', marginRight: 5, marginLeft: 10 }}>{name}</p>
            <p style={{ marginBottom: 0, marginTop: 3, color: 'grey' }}>{user}</p>
            <p style={{ marginBottom: 0, marginTop: 3, color: 'grey', marginRight: 5, marginLeft: 5 }}>•</p>
            <p style={{ marginBottom: 0, marginTop: 3, color: 'grey' }}>{date}</p>
          </div>

          <div style={{ width: 500, marginLeft: 10, marginTop: 0 }}>
            <p style={{ fontSize: 15, marginTop: 0 }}>
              {text}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className="tweetBottomButtons">
              <MdChatBubbleOutline />
              <p className="tweetBottomButtonsNumbers">{comments}</p>
            </div>
            <div className="tweetBottomButtons">
              <FaRetweet />
              <p className="tweetBottomButtonsNumbers">{retweets}</p>
            </div>
            <div className="tweetBottomButtons">
              <FaRegHeart />
              <p className="tweetBottomButtonsNumbers">{fav}</p>
            </div>
            <div className="tweetBottomButtons">
              <FaUpload />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tweet;