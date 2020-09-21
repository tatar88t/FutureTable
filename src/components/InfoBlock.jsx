import React from 'react';
const InfoBlock = ({ memberInfo }) => {
  return (
    <div>
      {memberInfo.map((member) => (
        <div key={member.id + member.lastName}>
          Выбран пользователь <b>{member.firstName + ' ' + member.lastName}</b>
          Описание:
          <p>{member.description}</p>
          Адрес проживания: <b>{member.address.streetAddress}</b>
          Город: <b>{member.address.city}</b>
          Провинция/штат: <b>{member.address.state}</b>
          Индекс: <b>{member.address.zip}</b>
        </div>
      ))}
    </div>
  );
};
export default InfoBlock;
