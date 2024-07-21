import React, { useState } from 'react';
import './Profile.css';
import ProfileUpload from 'components/profileUpload';
import PopUp from 'components/popup';
import { Logout, Home, Rectangle } from 'assets';
import { Info, Calendar, Scrap } from 'assets';
import { Modify, Retest2 } from 'assets';

function Profile(): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="back">
      <div className="topdiv">
        <Logout /> <Home />
      </div>
      <Rectangle className="rec" />
      <Info className="info" />
      <Calendar className="calen" />
      <Scrap className="scrap" />
      <div className="userinfo">
        <div className="ex"> 이름 </div>
        <div className="ex"> 아이디 </div>
        <div className="ex"> 유형 결과 </div>
        <div className="ex"> 가입일 </div>
        <div className="ex"> 관심 분야 </div>
        <div className="ex"> 관심 키워드 </div>
        <div className="ex"> 관심 언론사 </div>
        <div className="divp">
          <p className="p"></p>
          <p className="p"></p>
          <p className="p"></p>
          <p className="p"></p>
          <p className="p"></p>
          <p className="p"></p>
          <p className="p"></p>
        </div>
      </div>
      <ProfileUpload />
      <div
        style={{
          marginTop: '40vh',
          marginBottom: '10vh',
          marginLeft: '47vw',
        }}
      >
        <Modify onClick={openModal} style={{ cursor: 'pointer' }} />
        <Retest2 className="rete" />
        <PopUp isOpen={modalIsOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
}
export default Profile;
