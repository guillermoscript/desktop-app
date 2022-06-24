export default function SelectGroup({ name, text, optionData, register, validate, errors, classes }) {
    return (
        <div className={classes.div}>
            <label
                className={classes.label}
                htmlFor={name}
            >
                {text}
            </label>
            <select
                className={classes.select}
                {...register(name, validate)}
            >
                {optionData.map(el => {
                    return <option value={el.value} > {el.optionName}</option>
                })}

            </select>
            {errors && <span>{errors.messages}</span>}
        </div>
    );
}
