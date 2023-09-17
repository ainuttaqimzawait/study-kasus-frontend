const Input = ({ id, type, errors, register }) => {
    return (
        <div className="form">
            <input id={id} type={type} name={id} placeholder={id} isInvalid={errors.type} {...register(type)} />
            <br />
        </div>
    )
}
export default Input;