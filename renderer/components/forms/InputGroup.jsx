export default function InputGroup({ name, type, placeholder, text, register, validate, errors, classes }) {
  return (
    <div className={classes.div}>
      <label
        className={classes.label}
        for={name}
      >
        {text}
      </label>
      <input
        className={classes.input}
        {...register(name, validate)}
        type={type}
        
        placeholder={placeholder}
      />
      {errors && <span>{errors.messages}</span>}
    </div>
  );
}
