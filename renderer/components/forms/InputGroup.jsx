export default function InputGroup({ name, type, placeholder, text, register, validate, errors, classes }) {
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
        
        placeholder={placeholder}
      />
      {errors[name]?.message !== undefined ? <span className={classes.error}>{errors[name]?.message}</span> : null }
    </div>
  );
}
