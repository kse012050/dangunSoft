import React, { useEffect, useState } from 'react';

// 주소 자동 완성 기능을 사용하는 React 컴포넌트
const AddressForm = () => {
  const [address, setAddress] = useState({
    postalCode: '',
    region: '',
    locality: '',
    streetAddress: '',
    extendedAddress: ''
  });

  useEffect(() => {
    // yubinbango.js 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = 'https://yubinbango.github.io/yubinbango/yubinbango.js';
    script.charset = 'UTF-8';
    script.async = true;
    document.body.appendChild(script);

   /*  script.onload = () => {
      console.log('Yubinbango script loaded');
    }; */

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 우편번호가 변경될 때 호출되는 함수
  const handlePostalCodeChange = (e) => {
    const newPostalCode = e.target.value;
    setAddress(prev => ({ ...prev, postalCode: newPostalCode }));

    if (newPostalCode.length === 7) {
      // 우편번호로 주소를 가져와서 상태를 업데이트
      new window.YubinBango.Core(newPostalCode, (newAddress) => {
        setAddress(prev => ({
          ...prev,
          region: newAddress.region,
          locality: newAddress.l,
          streetAddress: newAddress.m,
          extendedAddress: newAddress.o
        }));
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <label>
        郵便番号:
        <input
          type="text"
          name="postalCode"
          value={address.postalCode}
          onChange={handlePostalCodeChange}
          placeholder="例: 1000001"
        />
      </label>
      <br />
      <label>
        都道府県:
        <input
          type="text"
          name="region"
          value={address.region}
          readOnly
        />
      </label>
      <br />
      <label>
        市区町村:
        <input
          type="text"
          name="locality"
          value={address.locality}
          readOnly
        />
      </label>
      <br />
      <label>
        町名・番地:
        <input
          type="text"
          name="streetAddress"
          value={address.streetAddress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        建物名:
        <input
          type="text"
          name="extendedAddress"
          value={address.extendedAddress}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default AddressForm;