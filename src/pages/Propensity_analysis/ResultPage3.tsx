import React, { useEffect } from 'react';
import { Result3, Logo, Share, SignUp, Retest } from 'assets';
import { useGotoRetest, useGotoSignUp } from 'components/resultFunc';
import './ResultPage.css';

function ResultPage3(): JSX.Element {
  const gotoRetest = useGotoRetest();
  const gotoSignUp = useGotoSignUp();

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('0858b39dbf241a3100e3ca8093aad076');
    }

    if (window.Kakao) {
      window.Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: 'whats-going-on',
          description: '#꿈 많은 #명문가 #자제형',
          imageUrl:
            'http://k.kakaocdn.net/dn/dFUqwp/bl3SUTqb2VV/VFSqyPpKUzZVVMcmotN9A0/kakaolink40_original.png',
          link: {
            webUrl: 'http://localhost:3000/analy/resultpage3',
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
              webUrl: 'http://localhost:3000/analy/resultpage3',
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
      <Result3 className="image" />
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
export default ResultPage3;
