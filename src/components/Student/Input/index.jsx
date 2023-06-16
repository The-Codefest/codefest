import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input
                className='h-11 p-5 text-base font-normal border rounded-lg border-gray_300 text-gray_800 w-[360px]'
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                pattern={props.pattern}
                onChange={props.onChange}
                title={props.title}
                disabled={props.disabled}
                required
            />
            <p className='text-[#667085] text-sm'>{props.text}</p>
        </div>
    );
};

export default Input;
