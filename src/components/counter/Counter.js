import Container from 'components/shared/container/Container';
import React from 'react';
import shortid from 'shortid';

const Counter = () => {
  const list = [
    {
      id: shortid(),
      title: 'Happy Clients',
      value: '400+',
      icon: 'far fa-user',
    },
    {
      id: shortid(),
      title: 'Yearn in Business',
      value: '15',
      icon: 'fas fa-ribbon',
    },
    {
      id: shortid(),
      title: 'High Score',
      value: '178',
      icon: 'fas fa-project-diagram',
    },
    {
      id: shortid(),
      title: 'Cup of Coffee',
      value: '352',
      icon: 'fas fa-mug-hot',
    },
  ];

  return (
    <div className='py-12 md:py-24 border-t-2 border-gray-200'>
      <Container>
        <div className='md:flex justify-around'>
          {list.map((item) => (
            <CounterItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

const CounterItem = ({ icon, title, value }) => (
  <div className='text-center mb-9'>
    <div className='text-4xl mb-3 text-black-hover'>
      <i className={icon}></i>
    </div>

    <p className='text-5xl font-bold mb-1'>{value}</p>
    <h3 className='font-medium text-black-hover'>{title}</h3>
  </div>
);

export default Counter;
