import { useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import FormRegister from '~/pages/Register/FormRegister';
import FormSign from './FormSign';
import styles from '~/pages/Register/Register.module.scss';

const cx = classNames.bind(styles);
const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirm: '',
    });

    const inputs = [{
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Tên người dùng phải từ 3-16 ký tự!',
            label: 'Username',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            required: true,
            icon: 'fa-solid fa-user',
        },

        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'Email phải là một địa chỉ email hợp lệ!',
            label: 'Email',
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            required: true,
            icon: 'fa-solid fa-envelope',
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Mật khẩu phải bao gồm ký tự in hoa, in thường, chữ số và ký tự đặc biệt',
            label: 'Password',
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$`,
            required: true,
            icon: 'fa-solid fa-lock',
        },
        {
            id: 4,
            name: 'password_confirm',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Mật khẩu không khớp!',
            label: 'Confirm Password',
            reps: values.password,
            required: true,
            icon: 'fa-solid fa-lock',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post('http://localhost:8080/tttn_be/public/api/user/register', {...values, type_id: 2 })
            .then(function(response) {
                alert(response.data.message);
                if (response.data.result) {
                    setValues({
                        name: '',
                        email: '',
                        password: '',
                        password_confirm: '',
                    });
                }

                //window.location.href = 'http://localhost:3000/register';
            })
            .catch(function(error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    };

    return ( <
        div class = { cx('container') } >
        <
        FormSign / >
        <
        form onSubmit = { handleSubmit }
        className = { cx('form-Register') }
        autoComplete = "off" >
        <
        h3 className = { cx('form-heading') } > ĐĂNG KÝ THÀNH VIÊN MỚI < /h3>{' '} {
            inputs.map((input) => ( <
                FormRegister key = { input.id } {...input }
                values = { values }
                value = { values[input.name] }
                onChange = { onChange }
                />
            ))
        } { ' ' } <
        button className = { cx('form-submit') } > Đăng ký < /button>{' '} <
        /form>{' '} <
        /div>
    );
};

export default Register;