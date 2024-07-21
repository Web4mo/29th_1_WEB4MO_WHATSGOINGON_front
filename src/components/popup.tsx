import React from 'react';
import Modal from 'react-modal';
import { Password, Save } from 'assets';

const customStyles = {
  content: {
    width: '800px',
    height: '600px',
    margin: 'auto',
  },
};

Modal.setAppElement('#root');

interface PopUpProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onRequestClose }) => {
  const [selectedType, setSelectedType] = React.useState<string>('');
  const [interests, setInterests] = React.useState<string[]>([]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInterests((prevInterests) =>
      prevInterests.includes(value)
        ? prevInterests.filter((interest) => interest !== value)
        : [...prevInterests, value],
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="개인정보 Modal"
    >
      <form>
        <div
          style={{
            marginLeft: '10vw',
            marginBottom: '30px',
            marginTop: '20px',
          }}
        >
          <label htmlFor="userType">유형 결과</label>
          <select
            id="userType"
            value={selectedType}
            onChange={handleTypeChange}
            style={{ marginLeft: '100px' }}
          >
            <option value="">선택하세요</option>
            <option value="탐험가가 꿈인 범생이형">
              탐험가가 꿈인 범생이형
            </option>
            <option value="박사가 꿈인 한우물 범생이형">
              박사가 꿈인 한우물 범생이형
            </option>
            <option value="꿈 많은 명문가 자제형">꿈 많은 명문가 자제형</option>
            <option value="고집있는 명문가 자제형">
              고집있는 명문가 자제형
            </option>
            <option value="호기심왕 도련님형">호기심왕 도련님형</option>
            <option value="행동파 도련님형">행동파 도련님형</option>
            <option value="호기심왕 도파민형">호기심왕 도파민형</option>
            <option value="극심한 도파민형">극심한 도파민형</option>
          </select>
        </div>
        <div style={{ marginLeft: '10vw' }}>
          <label>관심 분야</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="정치"
                checked={interests.includes('정치')}
                onChange={handleInterestChange}
              />
              정치
            </label>
            <label>
              <input
                type="checkbox"
                value="경제"
                checked={interests.includes('경제')}
                onChange={handleInterestChange}
              />
              경제
            </label>
            <label>
              <input
                type="checkbox"
                value="사회"
                checked={interests.includes('사회')}
                onChange={handleInterestChange}
              />
              사회
            </label>
            <label>
              <input
                type="checkbox"
                value="생활 문화"
                checked={interests.includes('생활 문화')}
                onChange={handleInterestChange}
              />
              생활 문화
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="IT/과학"
                checked={interests.includes('IT/과학')}
                onChange={handleInterestChange}
              />
              IT/과학
            </label>
            <label>
              <input
                type="checkbox"
                value="세계"
                checked={interests.includes('세계')}
                onChange={handleInterestChange}
              />
              세계
            </label>
            <label>
              <input
                type="checkbox"
                value="스포츠"
                checked={interests.includes('스포츠')}
                onChange={handleInterestChange}
              />
              스포츠
            </label>
            <label>
              <input
                type="checkbox"
                value="연예"
                checked={interests.includes('연예')}
                onChange={handleInterestChange}
              />
              연예
            </label>
          </div>
        </div>
        <div style={{ marginLeft: '450px' }}>
          <Password style={{ width: '150px' }} />
          <Save style={{ width: '150px' }} onClick={onRequestClose} />
        </div>
      </form>
    </Modal>
  );
};

export default PopUp;
