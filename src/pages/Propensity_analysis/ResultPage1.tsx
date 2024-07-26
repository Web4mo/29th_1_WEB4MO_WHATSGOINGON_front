import React, { useEffect } from 'react';
import { Result1, Logo, Share, SignUp, Retest } from 'assets';
import { useGotoRetest, useGotoSignUp } from 'components/resultFunc';
import './ResultPage.css';

function ResultPage1(): JSX.Element {
  const gotoRetest = useGotoRetest();
  const gotoSignUp = useGotoSignUp();

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('0858b39dbf241a3100e3ca8093aad076');
    }

    if (window.Kakao) {
      const baseUrl = 'http://localhost:3000';
      const imageUrl = `${baseUrl}/analy/resultpage1`;

      window.Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: 'whats-going-on',
          description: '#탐험가가 꿈인 #범생이형',
          imageUrl: imageUrl,
          link: {
            webUrl: 'http://localhost:3000/analy/resultpage1',
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '뉴스성향 테스트해보기',
            link: {
              webUrl: 'http://localhost:3000/analy/resultpage1',
            },
          },
        ],
      });
    }
  }, []);

  return (
    <div className="back">
      <div className="name"> 뉴스 성향 테스트 결과 </div>
      <Logo className="logo" />
      <Result1 className="image" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10vh',
          marginBottom: '10vh',
        }}
      >
        <SignUp className="btn" onClick={gotoSignUp} />
        <Retest className="btn" onClick={gotoRetest} />
        <Share className="shbtn" id="kakaotalk-sharing-btn" />
      </div>
    </div>
  );
}
export default ResultPage1;
