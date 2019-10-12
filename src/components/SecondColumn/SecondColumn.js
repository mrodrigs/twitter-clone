import React from 'react';
import { FaRetweet, FaRegHeart, FaUpload } from 'react-icons/fa';
import { MdImage, MdGif, MdInsertChart, MdTagFaces, MdChatBubbleOutline, } from 'react-icons/md';

import Tweet from '../Tweet/Tweet';

import './SecondColumn.css';

export default function SecondColumn() {
  return (
    <div className="flex secondColumn">
      <div className="flex navigation" >

        <div className="flex header">
          <p style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 20, marginTop: 10 }}>Home</p>
        </div>

        <div className="flex newTweet">
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
            <img src={require('../../images/userAvatar.png')} alt="profileimage" style={{ marginLeft: 10, width: 43, height: 43, borderRadius: 100 }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ color: 'grey', marginLeft: 10, width: 300 }}>What's happening?</p>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                <MdImage className="tweetIcons" />
                <MdGif className="tweetIcons" />
                <MdInsertChart className="tweetIcons" />
                <MdTagFaces className="tweetIcons" />
              </div>
            </div>
            <button className="tweetMiniButton">
              Tweet
            </button>
          </div>
        </div>

        <Tweet
          profileImg={require('../../images/elonMusk.png')}
          name="Elon Musk"
          user="@elonmusk"
          date="Oct 9"
          text="All Tesla Supercharger stations in regions affected by California power outages will have Tesla Powerpacks within next few weeks. Just waiting on permits."
          comments="620"
          retweets="1.6K"
          fav="27.9"
        />
        <Tweet
          profileImg={require('../../images/react.png')}
          name="React"
          user="@reactjs"
          date="Aug 15"
          text="Heads up: v4.0.0 and v4.0.1 requested too broad permissions due to our mistake. We’ve uploaded v4.0.2 with a fix to both Chrome and Firefox stores. If you're still affected, please delete and reinstall the extension."
          comments="1"
          retweets="23"
          fav="118"
        />
        <Tweet
          profileImg={require('../../images/reactnative.png')}
          name="React Native"
          user="@reactnative"
          date="Sep 5"
          text="Phase three will revamp initialization and improve startup time, rolling out in late 2020. Most initialization will be moved into a shared C++ core and RN won't require the native+JavaScript bridge any longer."
          comments="5"
          retweets="29"
          fav="149"
        />
        <Tweet
          profileImg={require('../../images/rocketseat.png')}
          name="Rocketseat"
          user="@rocketseat"
          date="Oct 6"
          text="A Semana OmniStack fica no ar somente até hoje as 23:59h então corre pra consumir esse conteúdo que ainda dá tempo! 💪🏻🚀"
          comments="8"
          retweets="9"
          fav="146"
        />
        <Tweet
          profileImg={require('../../images/spotify.png')}
          name="Spotify"
          user="@spotify"
          date="Oct 10"
          text="Crisis Text Line is free, 24/7 support for those in crisis. Text HOME to talk to a trained Crisis Counselor; there for everyone and anyone.
          🇺🇸: 741741 
          🇨🇦: 686868 
          🇬🇧: 85258"
          comments="1"
          retweets="41"
          fav="109"
        />
        <Tweet
          profileImg={require('../../images/deschamps.png')}
          name="Filipe Deschamps"
          user="@FilipeDeschamps"
          date="Jun 10"
          text="SE VOCÊS RECEBEREM UM LINK PARA UM ARTIGO QUE DIZ QUE DA PRA RESOLVER TUDO USANDO SÓ JAVASCRIPT, NÃO CLIQUEM, É MENTIRA!!! É SÓ UM VÍRUS QUE DEIXA TODAS AS LETRAS GRANDES"
          comments="8"
          retweets="17"
          fav="108"
        />


      </div>
    </div>
  );
}
