import Radio from "./Radio";

export default function FilterOptions({
  title,
  options,
  params,
  setIsRadioSelected,
}) {
  const handleChange = e => {
    const { value } = e.target;
    const key = title.toLowerCase();
    const queryValue = title === "Genres" ? `["${value}"]` : value;
    params.set(key, queryValue);
    setIsRadioSelected(true);
  };

  return (
    <div>
      <h3 className={`text-lg font-semibold mt-5 mb-2 text-emerald-400 `}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-x-4">
        {options.map(option => (
          <Radio
            key={option}
            option={option}
            title={title}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}
