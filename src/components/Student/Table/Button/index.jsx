// Submit button component
const Button = (props) => {
    return (
        <div>
            <button
                data-testid='submit-button'
                className='hover:from-gray_800 max-lg:text-xs bg-gradient-to-r hover:to-gray_800 text-[white] bg-black from-primary to-secondary font-medium max-sm:font-normal rounded-lg text-sm max-sm:px-1 px-5 py-2.5 text-center mr-3 md:mr-0'
                onClick={props.onClick}
            >
                {props.name}
            </button>
        </div>
    );
};
export default Button;