export default function SelectGroup({ name, text, optionData, register, validate, errors, classes, selectedIndex = null }) {
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
                value={register(name).value}
            >
                {/* the first option shoul be a disable optip  */}
                <option value="">Selecciona una opción</option>
                {optionData.map(el => {
                    return <option selected={ el.value === selectedIndex ? true : false} value={el.value} > {el.optionName}</option>
                })}

            </select>
            {errors[name]?.message !== undefined ? <span className={classes.error}>{errors[name]?.message}</span> : null}
        </div>
    );
}
