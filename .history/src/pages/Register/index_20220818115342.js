import { useState } from 'react';
import classNames from 'classnames/bind';

import FormRegister from '~/pages/Register/FormRegister';
import FormSign from './FormSign';
import styles from '~/pages/Register/Register.module.scss';

const cx = classNames.bind(styles);
const Register = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'firstName',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Username should be 3-16 characters ',
            label: 'firstName',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
            icon: 'fa-solid fa-user',
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: 'Name',
            errorMessage: 'Username should be 3-16 characters ',
            label: 'lastName',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
            icon: 'fa-solid fa-user',
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            required: true,
            icon: 'fa-solid fa-envelope',
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Mật khẩu phải bao gồm ký tự in hoa, in thường, chữ số và ký tự đặc biệt',
            label: 'Password',
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,10}$`,
            required: true,
            icon: 'fa-solid fa-lock',
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: "Passwords don't match!",
            label: 'Confirm Password',
            reps: values.password,
            required: true,
            icon: 'fa-solid fa-lock',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div class={cx('container')}>
            <FormSign />
            <form onSubmit={handleSubmit} className={cx('form-Register')} autoComplete="off">
                <h3 className={cx('form-heading')}>ĐĂNG KÝ THÀNH VIÊN MỚI </h3>
                {inputs.map((input) => (
                    <FormRegister
                        key={input.id}
                        {...input}
                        values={values}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button className={cx('form-submit')}>Đăng ký</button>
            </form>
        </div>
    );
};

export default Register;
