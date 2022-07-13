export default function InputGroup({ name, type, placeholder, text, register, validate, errors, classes, value = null, checked = null }) {
  return (
    <div className={classes.div}>
      <label
        className={classes.label}
        htmlFor={name}
      >
        {text}
      </label>
      <input
        className={classes.input}
        {...register(name, validate)}
        type={type}
        value={value}
        checked={checked}
        placeholder={placeholder}
      />
      {errors[name]?.message !== undefined ? <span className={classes.error}>{errors[name]?.message}</span> : null}
    </div>
  );
}
