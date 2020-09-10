import React, { useEffect } from 'react';
import { useForm } from './useState/useForm';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });
  // const [showHello], setShowHello] = useState(true)
  // const [values2, handleChange2] = useForm({ firstName: '', lastName: '' });

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove', onMouseMove)

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   };
  // }, []);

  useEffect(() => {
    console.log('mount1');
  }, []);
  useEffect(() => {
    console.log('mount2');
  }, []);

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
